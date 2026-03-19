import React from "react";
import { Check } from "lucide-react";

export default function FocoEarningSectionTempo() {
  const focoPoints = [
    "Earn 9% ROI or 5% of total billing (whichever is higher)",
    "Full control with structured support",
    "Designed for higher earning potential",
  ];

  const earningPoints = [
    "Designed for high-volume operations",
    "Optimized cost structure with strong margins",
    "Potential for consistent and growing returns (illustrative)",
  ];

  return (
    <section className="bg-black px-4">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-3xl p-6 md:p-8">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-5">
              FOCO Model Advantage
            </h2>

            <ul className="space-y-4">
              {focoPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  
                  <span className="w-5 h-5 bg-[#FDBD5B] rounded-full flex items-center justify-center mt-1">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-3xl p-6 md:p-8">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-3">
              Earning Potential
            </h2>

            <p className="text-gray-400 text-sm md:text-base mb-5">
              With higher serving capacity and better coverage, Food Tempo enables strong daily billing and scalable monthly income.
            </p>

            <ul className="space-y-4">
              {earningPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  
                  <span className="w-5 h-5 bg-[#FDBD5B] rounded-full flex items-center justify-center mt-1">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 text-center">
          <span className="text-white font-bricolageMedium text-sm md:text-base">
            More capacity. More reach. More earnings.
          </span>
        </div>

      </div>
    </section>
  );
}