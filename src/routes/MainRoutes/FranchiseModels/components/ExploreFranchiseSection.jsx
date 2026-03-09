import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function ExploreFranchiseSection() {

  const items = [
    { line1: "Agreement", line2: "structure" },
    { line1: "Investment", line2: "breakdown" },
    { line1: "Unit", line2: "economics" },
    { line1: "Location", line2: "analysis" },
  ];

  return (

    <section className="w-full bg-black flex justify-center mt-[80px] pb-[120px]">

      {/* MAIN CARD */}
      <div
        className="w-[1200px] h-[475px] rounded-[24px] flex flex-col items-center text-center pt-[90px]"
        style={{
          background: "linear-gradient(96deg,#60D186 0%,#FDBD5B 100%)",
        }}
      >

        {/* TITLE */}
        <h2 className="font-bricolageBold text-[40px] leading-[50px] text-black w-[580px]">
          Ready to Explore Your Franchise Opportunity?
        </h2>

        {/* SUBTEXT */}
        <p className="mt-[16px] text-[18px] font-inter font-medium text-black">
          Speak with our franchise advisor to understand:
        </p>

        {/* FEATURES */}
       {/* FEATURES */}
<div className="flex gap-[70px] mt-[40px]">

  {items.map((item, index) => (
    <div key={index} className="flex items-start gap-[12px] w-[180px]">

      {/* ICON */}
      <svg
        className="w-[28px] h-[28px]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill="#FDBD5B" />
        <path
          d="M7 12L10 15L17 8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* TEXT */}
      <p className="text-[20px] font-inter font-semibold text-black text-left leading-[26px]">
        {item.line1}
        <br />
        {item.line2}
      </p>

    </div>
  ))}

</div>

        {/* BUTTON */}
        <button className="mt-[45px] w-[308px] h-[48px] bg-[#252525] rounded-[8px] text-white font-inter text-[16px] font-semibold">
          Schedule a Franchise Consultation
        </button>

      </div>

    </section>
  );
}