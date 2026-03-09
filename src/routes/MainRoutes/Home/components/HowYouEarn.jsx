import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

/* Rotating stacked badge */
function StackedBadge({ texts, color }) {
  const colors = {
    yellow: {
      main: "bg-[#f3b24c]",
      mid: "bg-[#f0b95e]",
      back: "bg-[#e7c48c]",
    },
    green: {
      main: "bg-green-400",
      mid: "bg-green-300",
      back: "bg-green-200",
    },
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const layers = [
    {
      style: "w-[320px] h-[52px] z-30 translate-y-0 scale-100",
      color: colors[color].main,
    },
    {
      style: "w-[280px] h-[48px] z-20 translate-y-4 scale-95",
      color: colors[color].mid,
    },
    {
      style: "w-[240px] h-[44px] z-10 translate-y-8 scale-90",
      color: colors[color].back,
    },
  ];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full flex justify-center z-20">
      <div className="relative w-[340px] h-[90px] flex justify-center">

        {layers.map((layer, i) => (
          <div
            key={i}
            className={`absolute rounded-xl flex items-center justify-center
            text-black font-semibold text-[15px] shadow-xl
            transition-all duration-700 ease-in-out
            ${layer.style} ${layer.color}`}
          >
            {texts[(index + i) % texts.length]}
          </div>
        ))}

      </div>
    </div>
  );
}

export default function HowYouEarn() {
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
    <section className="bg-black text-white py-10 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          How You Earn?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FOFO CARD */}
          <div className="relative bg-[#161616] rounded-2xl p-6 lg:p-8 pb-36 min-h-[480px] shadow-lg overflow-hidden">

            <div className="relative z-30">

              <h3 className="text-xl font-semibold mb-1">FOFO Model</h3>

              <p className="text-sm text-yellow-400 mb-6">
                Franchise Owned, Franchise Operated
              </p>

              <ul className="space-y-4">
                {fofoFeatures.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mt-1">
                      <Check size={14} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10
            bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.35),transparent_70%)]" />

            <StackedBadge
              texts={[
                "300 Daily Orders @ ₹150",
                "400 Daily Orders @ ₹150",
                "500 Daily Orders @ ₹150",
              ]}
              color="yellow"
            />

          </div>

          {/* FOCO CARD */}
          <div className="relative bg-[#161616] rounded-2xl p-6 lg:p-8 pb-36 min-h-[480px] shadow-lg overflow-hidden">

            <div className="relative z-30">

              <h3 className="text-xl font-semibold mb-1">FOCO Model</h3>

              <p className="text-sm text-green-400 mb-6">
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

            </div>

            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10
            bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.35),transparent_70%)]" />

            <StackedBadge
              texts={[
                "₹13,50,000 Revenue",
                "₹18,00,000 Revenue",
                "₹22,50,000 Revenue",
              ]}
              color="green"
            />

          </div>

        </div>

      </div>
    </section>
  );
}