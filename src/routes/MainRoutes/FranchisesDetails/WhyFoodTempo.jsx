import React from "react";
import { Check } from "lucide-react";
import tempo from "../../../assets/investment/stall.png"; // ✅ your image

export default function WhyFoodTempo() {
  const points = [
    "High-Capacity Mobile Kitchen Setup",
    "Centralized Kitchen Supply for Standardized Quality",
    "No Location Limitation — Reach High-Demand Areas",
    "In-Built Storage & Cooking Support Systems",
    "Modern, Eye-Catching, High-Impact Design",
  ];

  return (
    <section className="bg-black py-6 px-4">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CARD */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#2b2b2b] via-[#2a2a2a] to-[#6a5434] grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6">
              Why Food Tempo Franchise?
            </h2>

            <ul className="space-y-4">
              {points.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-[#FDBD5B] rounded-full flex items-center justify-center mt-1">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end p-6 md:p-0">
            <img
              src={tempo}
              alt="Food Tempo"
              className="w-[280px] md:w-[420px] lg:w-[480px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}