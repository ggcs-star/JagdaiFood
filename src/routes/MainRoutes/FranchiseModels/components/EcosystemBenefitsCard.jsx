import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function EcosystemBenefitsCard() {

  const benefits = [
    "24+ in-house brands",
    "10,000+ sq.ft centralized cloud kitchen",
    "Reduced wastage & uniform taste",
    "Standardized SOP execution",
    "Multi-Brand cross-selling advantage"
];

  return (

    <div className="w-[1200px] h-[434px] mx-auto mt-[80px] rounded-[24px] bg-[#262626] pt-[50px] pl-[96px]">

      {/* TITLE */}
      <h2 className="text-white text-[40px] leading-[54px] font-bricolageSemiBold mb-[32px]">
        Ecosystem Benefits
      </h2>

      {/* LIST */}
      <ul className="space-y-[26px]">

        {benefits.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[16px] text-[20px] leading-[26px] text-[#E5E5E5] font-inter"
          >

            <img
              src={check}
              alt="check"
              className="w-[30px] h-[30px]"
            />

            {item}

          </li>
        ))}

      </ul>

    </div>

  );
}