import React from "react";
import { Link } from "react-router-dom";
import influencerImage from "../../../../assets/franchiseformats/influencer.png";
import foodcourt from "../../../../assets/investment/foodcourt1.png";

export default function AdditionalFranchises() {
  return (
    <section className="bg-black ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 pb-6">

  {/* Food Court Franchise (UPDATED BIG VERSION) */}
<div className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-[24px] px-[32px] pt-[32px] pb-0 text-white flex flex-col justify-between overflow-hidden h-[740px]">

  {/* TOP CONTENT */}
  <div className="max-w-[420px]">

    {/* TITLE */}
    <h3 className="font-bricolageBold text-[28px] leading-[36px] mb-[12px]">
      Food Court Franchise <br/>(Chatori Gali)
    </h3>

    {/* DESCRIPTION */}
    <p className="text-[#bfbfbf] text-[14px] leading-[22px] mb-[20px]">
      A high-footfall, multi-brand food destination designed to maximize space utilization and revenue generation. Deliver premium dining experiences at scale with a structured, technology-driven food court model.
    </p>

    {/* BUTTON */}
    <Link
      to="/franchise-formats/chatori-gali"
      className="inline-block border border-white text-white text-[13px] px-[18px] py-[7px] rounded-[8px] hover:bg-white hover:text-black transition"
    >
      Know More
    </Link>

  </div>

  {/* IMAGE (BIG + FULL WIDTH) */}
  {/* IMAGE (FULL VISIBLE - NO CUT) */}
<div className="w-full mt-[20px] flex justify-center items-end">
  <img
    src={foodcourt}
    alt="Food Court"
    className="w-full max-h-[420px] object-contain rounded-b-[24px]"
  />
</div>

</div>

        {/* Influencer Franchise */}
        <div className="p-6 lg:p-8 bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl text-white flex flex-col justify-between">

          <div className=" ">
            <h3 className="font-bricolageBold text-3xl mb-3">
              Influencer Franchise
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Join the JF Influencer Franchise – Where Your Social Influence
              Turns into a Steady Income Stream with Food Brands, Cashback &
              20 Crore+ Products & Services.
            </p>

            <Link
              to="/franchise-formats/influencer-franchise"
              className="inline-block border border-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>
          </div>

          {/* Influencer Image */}
          <img src={influencerImage} alt="Influencer Franchise" className="w-full rounded-xl object-contain" />

        </div>

      </div>
    </section>
  );
}