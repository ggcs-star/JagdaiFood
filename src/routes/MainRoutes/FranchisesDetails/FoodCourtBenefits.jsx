import React from "react";
import foodCourtImg from "../../../assets/investment/foodcourt.png";

export default function FoodCourtBenefits() {
  const points = [
    <>
      <span className="font-semibold italic text-white">
        24+ Brands Under One Roof
      </span>{" "}
      Offer multiple cuisines and maximize customer choice from a single location
    </>,
    <>
      <span className="font-semibold italic text-white">
        5-Star Quality at Mass Pricing
      </span>{" "}
      Chef-curated recipes delivered with consistent taste at affordable pricing
    </>,
    <>
      <span className="font-semibold italic text-white">
        Centralized Kitchen Supply
      </span>{" "}
      Standardized preparation ensures quality, speed, and cost efficiency
    </>,
    <>
      <span className="font-semibold italic text-white">
        High Footfall Business Model
      </span>{" "}
      Designed to attract consistent walk-ins in malls and commercial hubs
    </>,
    <>
      <span className="font-semibold italic text-white">
        Optimized Space Utilization
      </span>{" "}
      Convert vacant commercial spaces into high-performing revenue centers
    </>,
    <>
      <span className="font-semibold italic text-white">
        Hygienic & Standardized Operations
      </span>{" "}
      Uniform SOPs across all stalls for seamless execution
    </>,
  ];

  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CARD */}
        <div className="
          rounded-3xl 
          overflow-hidden 
          bg-gradient-to-r from-[#1f1f1f] via-[#2a2a2a] to-[#6a5434]
          grid md:grid-cols-2 
          items-center
        ">

          {/* LEFT CONTENT */}
          <div className="p-8 md:p-12">
            <h2 className="text-white text-2xl md:text-3xl font-bricolageBold mb-8">
              Benefits of joining our <br />
              Food Court Franchise (Chatori Gali)
            </h2>

            <ul className="space-y-5">
              {points.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-gray-300 text-sm md:text-base leading-relaxed"
                >
                  {/* CUSTOM TICK */}
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FDBD5B] mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full flex items-end justify-end">

            {/* IMAGE */}
            <img
              src={foodCourtImg}
              alt="Food Court Franchise"
              className="
                w-[110%] 
                md:w-[120%] 
                lg:w-[100%]
                max-w-none
                object-contain
                translate-y-[20px]
                md:translate-y-[40px]
              "
            />

            {/* OPTIONAL GLOW (matches screenshot lighting) */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#6a5434]/40 to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}