import React from "react";
import { Check } from "lucide-react";
import trolley from "../../../assets/franchiseformats/trolleyfranchise.png"; // update path

export default function FoodTrolleySection() {
  const features = [
    "Fully Equipped Food Trolley Setup",
    "Centralized Kitchen Supply for Consistent Quality",
    "No Location Constraints — High Mobility Advantage",
    "In-Built Freezer / Hotpot System",
    "Modern, Attractive, Ready-to-Operate Design",
  ];

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden 
                      bg-gradient-to-r from-[#2b2b2b] via-[#2a2a2a] to-[#caa46a]">

        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
              Why Food Trolley Franchise?
            </h2>

            <div className="space-y-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  
                  {/* Icon */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FDBD5B] mt-1">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>

                  {/* Text */}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end p-6 md:p-10">
            <img
              src={trolley}
              alt="Food Trolley"
              className="w-full max-w-[420px] md:max-w-[500px] lg:max-w-[550px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}