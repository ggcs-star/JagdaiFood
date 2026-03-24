import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import stall1 from "../../../../assets/home/franchise/stall1.png";
import stall2 from "../../../../assets/home/franchise/stall2.png";
import stall3 from "../../../../assets/home/franchise/stall3.png";
import stall4 from "../../../../assets/home/franchise/stall4.png";
// import stall4 from "../../../../assets/home/franchise/stall4.svg";
import arrowSvg from "../../../../assets/home/franchise/arrow.svg";

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
        {/* <h2 className="text-center text-3xl md:text-4xl font-bricolageBold mb-2">
        </h2>
<p className="text-center text-md md:text-lg max-w-3xl mx-auto mb-16">
</p> */}

        <h2 className="font-bricolageBold text-center text-3xl md:text-4xl mb-4">
          Own Your QSR. Choose How You Want to Earn
        </h2>

        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-16">
          You don't have just invest in a QSR. You don’t just invest in a QSR. You choose how you want to run it
        </p>
        <div className="grid md:grid-cols-2 gap-10">

          {/* FOFO CARD */}
          <div className="relative bg-[#161616] rounded-2xl p-6 lg:p-8 pb-40 min-h-[820px] shadow-lg overflow-hidden">

            <div className="relative z-20">

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-bricolageBold text-white mb-1">
                FOFO MODEL (Active Ownership)
              </h3>

              <p className="text-[#FDBD5B] font-medium italic mb-6">
                Franchise Owned, Franchise Operated
              </p>

              {/* Features */}
              <ul className="space-y-3 text-sm md:text-base">
                {[
                  "Low upfront investment",
                  "Full revenue control",
                  "No sharing on billing",
                  "No royalty on total sales",
                  "50%+ food margins",
                  "Higher profit potential (~₹4–5L/month*)",
                  "Multiple income streams (trolley, tiffin, kitchen, products)",
                  "Own brand / white-label option",
                  "Full operational control",
                  "Centralized kitchen + support system",
                  "Scalable multi-outlet model",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 mt-1 rounded-full bg-[#FDBD5B] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Ideal */}
              <p className="text-sm text-gray-400 mt-5">
                <span className="text-white font-semibold">Ideal for:</span> Active operators seeking high income
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate("/franchise-models")}
                className="cursor-pointer mt-5 border border-gray-500 px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
              >
                Know More
              </button>

            </div>

            {/* 🔥 Bottom Visual Section */}
            <div className="absolute -bottom-4 left-[45%] -translate-x-1/2 flex items-end gap-6 z-20">

              {/* Stall 1 */}
              <img
                src={stall1} // 👈 import your first stall image
                alt="stall1"
                className="w-[120px] md:w-[200px] object-contain"
              />

              {/* Stall 2 */}
              <img
                src={stall2} // 👈 import second stall image
                alt="stall2"
                className="w-[120px] md:w-[200px] object-contain"
              />

            </div>

            {/* 🔥 Arrow SVG */}
            <img
              src={arrowSvg}
              alt="arrow"
              className="absolute bottom-48 left-[60%] -translate-x-1/2 w-16 md:w-20 object-contain z-20 animate-arrowFloat"
            />
            {/* 🔥 Spotlight Glow */}
            <div className="absolute bottom-0 left-0 w-full h-56 z-0
              bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.25),transparent_70%)]" />
          </div>

          {/* FOCO CARD */}
          <div className="relative bg-[#161616] rounded-2xl p-6 lg:p-8 pb-40 min-h-[620px] shadow-lg overflow-hidden">

            <div className="relative z-20">

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-bricolageBold text-white mb-1">
                FOCO MODEL (Passive Ownership)
              </h3>

              <p className="text-green-400 font-medium italic mb-6">
                Franchise Owned, Company Operated
              </p>

              {/* Features */}
              <ul className="space-y-3 text-sm md:text-base">
                {[
                  "High upfront investment",
                  "Company manages complete operations",
                  "Zero daily involvement required",
                  "Fixed income @10% on billing",
                  "Comparatively lower earning potential",
                  "No additional income streams",
                  "Structured working capital model",
                  "Centralized kitchen & execution handled",
                  "No manpower or operational hassle",
                  "Predictable and consistent income",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 mt-1 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Ideal */}
              <p className="text-sm text-gray-400 mt-5">
                <span className="text-white font-semibold">Ideal for:</span> Investors seeking stable, passive income
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate("/franchise-models")}
                className="cursor-pointer mt-5 border border-gray-500 px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
              >
                Know More
              </button>

            </div>

            {/* 🔥 Bottom Visual (Stalls) */}
            <div className="absolute -bottom-6 left-[45%] -translate-x-1/2 flex items-end gap-6 z-20">

              {/* Stall 1 */}
              <img
                src={stall3} // 👈 import image
                alt="stall"
                className="w-[120px] md:w-[200px] object-contain"
              />

              {/* Stall 2 */}
              <img
                src={stall4} // 👈 import image
                alt="stall"
                className="w-[120px] md:w-[200px] object-contain"
              />

            </div>

            {/* 🔥 Arrow SVG */}
           <img
              src={arrowSvg}
              alt="arrow"
              className="absolute bottom-48 left-[60%] -translate-x-1/2 w-16 md:w-20 object-contain z-20 animate-arrowFloat"
            />

           <div className="absolute bottom-0 left-0 w-full h-56 z-0
              bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.25),transparent_70%)]" />

          </div>

        </div>
      </div>
    </section>
  );
}