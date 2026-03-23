import React from "react";
import { Link } from "react-router-dom";
import influencerImage from "../../../../assets/franchiseformats/influencer.png";
import foodcourt from "../../../../assets/investment/foodcourt1.png";
import { Check } from "lucide-react";

export default function AdditionalFranchises() {
  return (
    <section className="bg-black ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 pb-6">

        {/* Food Court Franchise (UPDATED BIG VERSION) */}
        <div className="min-h-[950px] bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-[24px] pt-[32px] pb-0 text-white flex flex-col justify-between overflow-hidden h-[740px]">

          {/* TOP CONTENT */}
          <div className="max-w-[420px] px-[32px]">

            {/* TITLE */}
            <h3 className="font-bricolageBold text-[28px] leading-[36px] mb-[12px]">
              Food Court Franchise <br />(Chatori Gali)
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[#bfbfbf] text-[14px] leading-[22px] mb-[20px]">
              A high-footfall, multi-brand food destination designed to maximize space utilization and revenue generation.
              Deliver premium dining experiences at scale with a structured, technology-driven food court model.
            </p>

            {/* ✅ FEATURES */}
            <div className="space-y-3 mb-6">
              {[
                "24+ Brands Under One Roof",
                "5-Star Quality at Affordable Pricing",
                "Chef-Curated Standardized Recipes",
                "Centralized Kitchen Supply",
                "High Footfall Business Model",
                "Increased Walk-ins & Repeat Orders",
                "Best Use of Commercial Space",
                "Hygienic & SOP-Driven Operations",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-[#d6d6d6]">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-400">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/franchise-formats/chatori-gali"
              className="inline-block border border-white text-white text-[13px] px-[18px] py-[7px] rounded-[8px] hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>

          </div>

          {/* IMAGE */}
          <div className="w-full mt-[20px] flex justify-center items-end">
            <img
              src={foodcourt}
              alt="Food Court"
              className="w-full max-h-[420px] object-cover rounded-b-[24px]"
            />
          </div>

        </div>

        {/* Influencer Franchise */}
    <div className="relative p-6 lg:p-8 bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl text-white flex flex-col justify-between overflow-hidden">

  {/* CONTENT */}
  <div className="z-10">

    <h3 className="font-bricolageBold text-3xl mb-3">
      Influencer Franchise
    </h3>

    <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
      A food tempo is a mobile food business designed for serving customers on the go — now evolved into a powerful, high-capacity model built for volume sales and wider reach. Take your kitchen to the streets and unlock higher earning potential with a scalable food tempo system.
    </p>

    {/* ✅ FEATURES */}
    <div className="space-y-3 mb-6">
      {[
        "Zero Risk",
        "Earn from Day One",
        "5–10% Earnings",
        "Bonus Refund",
        "Low Entry Cost",
        "Multi-Brand Promotion",
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-3 text-sm text-[#d6d6d6]">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FDBD5B]">
            <Check className="w-3 h-3 text-black" />
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <Link
      to="/franchise-formats/influencer-franchise"
      className="inline-block border border-white px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
    >
      Know More
    </Link>

  </div>

  {/* IMAGE */}
            <img src={influencerImage} alt="Influencer Franchise" className="w-full rounded-xl object-contain" />


</div>


      </div>
    </section>
  );
}