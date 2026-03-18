import React from "react";
import { Check } from "lucide-react";

export default function TempoAdvantages() {
  const topItems = [
    "Compact and Mobile Setup",
    "No Location Constraint",
    "Ultra Modern Design",
  ];

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* TOP 3 PILLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topItems.map((item, i) => (
            <div
              key={i}
              className="bg-[#2b2b2b] rounded-2xl py-4 px-6 flex items-center gap-3 justify-center sm:justify-start"
            >
              <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                <Check size={14} className="text-black" />
              </span>

              <span className="text-gray-300 font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM FULL WIDTH PILL */}
        <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center justify-center gap-3 text-center">
          <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
            <Check size={14} className="text-black" />
          </span>

          <span className="text-gray-300 font-medium text-sm md:text-base">
            Food Supply from Central Kitchen
          </span>
        </div>

      </div>
    </section>
  );
}