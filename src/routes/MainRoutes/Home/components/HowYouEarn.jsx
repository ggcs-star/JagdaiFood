import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* 🔥 Rotating Stack Cards with Dynamic Color Depth */
function StackedCards({ texts, theme = "yellow" }) {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(([a, b, c]) => [b, c, a]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const colorThemes = {
    yellow: ["#f59e0b", "#fbbf24", "#fde68a"],
    green: ["#22c55e", "#4ade80", "#bbf7d0"],
  };

  const styles = [
    {
      z: "z-30",
      transform: "translateX(-50%) scale(1.15)",
      shadow: "0 20px 40px rgba(0,0,0,0.4)",
    },
    {
      z: "z-20",
      transform: "translateX(-50%) translateY(28px) scale(1)",
      shadow: "0 10px 25px rgba(0,0,0,0.25)",
    },
    {
      z: "z-10",
      transform: "translateX(-50%) translateY(52px) scale(0.9)",
      shadow: "0 5px 15px rgba(0,0,0,0.15)",
    },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center">
      <div className="relative w-[320px] h-[140px]">
        {order.map((itemIndex, position) => (
          <div
            key={itemIndex}
            className={`text-lg p-3 absolute left-1/2 w-[280px] h-[70px] rounded-xl flex items-center justify-center text-black ${styles[position].z}`}
            style={{
              transform: styles[position].transform,
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              background: colorThemes[theme][position],
              boxShadow: styles[position].shadow,
            }}
          >
            {texts[itemIndex]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowYouEarn() {
  const navigate = useNavigate();

  const fofoFeatures = [
    "Full revenue billing with franchise",
    "No royalty on total sales",
    "50% food margin",
    "Additional royalty streams",
    "Higher earning potential",
    "Capital guarantee applicable after 9 years",
  ];

  const focoFeatures = [
    "Company manages operations",
    "5% of total billing OR 24% annual ROI (whichever higher)",
    "Zero daily operational involvement",
    "Capital guarantee provision",
  ];

  return (
    <section className="bg-black text-white py-10 lg:pt-8 lg:pb-4 px-3 lg:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          How You Earn?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* FOFO CARD */}
          <div className="relative bg-[#161616] rounded-2xl p-6 lg:p-8 pb-36 min-h-[570px] shadow-lg overflow-hidden">
            <div className="relative z-30">
              <h3 className="text-xl font-semibold mb-1">FOFO Model</h3>

              <p className="text-md font-medium text-[#FDBD5B] mb-6 italic">
                Franchise Owned, Franchise Operated
              </p>

              <ul className="space-y-4">
                {fofoFeatures.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FDBD5B] mt-1">
                      <Check size={14} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* ✅ Know More Button */}
              <div className="mt-6">
                <button
                  onClick={() => navigate("/franchise-models")}
                  className="border border-gray-500 px-5 py-2 rounded-lg text-sm hover:bg-[#FDBD5B] hover:text-black transition-all duration-300"
                >
                  Know More
                </button>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-0
            bg-[radial-gradient(circle_at_bottom,rgba(0,255,94,0.35),transparent_70%)]" />

            <StackedCards
              texts={[
                <>300 Daily Orders @ ₹150</>,
                <>₹13,50,000 Monthly Revenue</>,
                <>Approx ₹5,00,000 Monthly Profit</>,
              ]}
              theme="yellow"
              className='mt-20'
            />
          </div>

          {/* FOCO CARD */}
          <div className="relative bg-[#161616] rounded-2xl p-6 lg:p-8 pb-36 min-h-[480px] shadow-lg overflow-hidden">
            <div className="relative z-30">
              <h3 className="text-xl font-semibold mb-1">FOCO Model</h3>

              <p className="text-md font-medium italic text-green-400 mb-6">
                Franchise Owned, Company Operated
              </p>

              <ul className="space-y-4">
                {focoFeatures.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-400 mt-1">
                      <Check size={14} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* ✅ Know More Button */}
              <div className="mt-6">
                <button
                  onClick={() => navigate("/franchise-models")}
                  className="border border-gray-500 px-5 py-2 rounded-lg text-sm hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  Know More
                </button>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10
            bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.35),transparent_70%)]" />

            <StackedCards
              texts={[
                <>Approx ₹1,35,000 Net Profit</>,
                <>₹13,50,000 Revenue</>,
                <>OR 24% annual ROI</>,
              ]}
              theme="green"
            />
          </div>

        </div>
      </div>
    </section>
  );
}