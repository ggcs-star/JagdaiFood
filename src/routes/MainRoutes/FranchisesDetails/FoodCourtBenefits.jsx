import React from "react";
import { Check } from "lucide-react";
import foodCourtImg from "../../../assets/investment/foodcourt.png"; // ✅ your image

export default function FoodCourtBenefits() {
  const points = [
    <>
      <span className="font-semibold">24+ Brands Under One Roof</span> Offer multiple cuisines and maximize customer choice from a single location
    </>,
    <>
      <span className="font-semibold">5-Star Quality at Mass Pricing</span> Chef-curated recipes delivered with consistent taste at affordable pricing
    </>,
    <>
      <span className="font-semibold">Centralized Kitchen Supply</span> Standardized preparation ensures quality, speed, and cost efficiency
    </>,
    <>
      <span className="font-semibold">High Footfall Business Model</span> Designed to attract consistent walk-ins in malls and commercial hubs
    </>,
    <>
      <span className="font-semibold">Optimized Space Utilization</span> Convert vacant commercial spaces into high-performing revenue centers
    </>,
    <>
      <span className="font-semibold">Hygienic & Standardized Operations</span> Uniform SOPs across all stalls for seamless execution
    </>,
  ];

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* MAIN CARD */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#2b2b2b] via-[#2a2a2a] to-[#6a5434] grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              Benefits of joining our <br />
              Food Court Franchise (Chatori Gali)
            </h2>

            <ul className="space-y-4">
              {points.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
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
              src={foodCourtImg}
              alt="Food Court Franchise"
              className="w-[280px] md:w-[420px] lg:w-[480px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}