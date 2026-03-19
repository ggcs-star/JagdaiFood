import React from "react";
import { Check } from "lucide-react";

export default function FocoAdvantages() {
  return (
    <section className="bg-black text-white pt-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-bricolageBold mb-8">
          FOCO Model Advantage
        </h2>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 ">

          {/* CARD 1 */}
          <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center md:justify-start">
            <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
              <Check size={14} className="text-black" />
            </span>
            <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
              Zero operational hassle
            </span>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center md:justify-start">
            <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
              <Check size={14} className="text-black" />
            </span>
            <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
              Ideal for passive income
            </span>
          </div>

        </div>

        {/* MIDDLE CARD */}
        <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center justify-center gap-3 mb-6 text-center">
          <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
            <Check size={14} className="text-black" />
          </span>
          <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
            Earn 9% ROI or 5% of total billing (whichever is higher)
          </span>
        </div>

        {/* BOTTOM CARD */}
        <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 text-center">
          <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
            Low investment. High mobility. Strong return
          </span>
        </div>

      </div>
    </section>
  );
}