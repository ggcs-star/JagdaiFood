import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function EcosystemBenefitsCard() {
  const benefits = [
    "24+ in-house brands",
    "10,000+ sq.ft centralized cloud kitchen",
    "Reduced wastage & uniform taste",
    "Standardized SOP execution",
    "Multi-Brand cross-selling advantage",
  ];

  return (
    <div className="w-full max-w-[1200px] min-h-[434px] mx-auto mt-[80px] rounded-[24px] bg-[#262626] pt-[40px] md:pt-[50px] pl-[24px] sm:pl-[40px] md:pl-[96px] pr-[20px]">
      <h2 className="text-white text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[54px] font-bricolageSemiBold mb-[24px] md:mb-[32px]">
        Ecosystem Benefits
      </h2>

      <ul className="space-y-[20px] md:space-y-[26px]">
        {benefits.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[12px] md:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] text-[#E5E5E5] font-inter"
          >
            <img
              src={check}
              alt="check"
              className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"
            />

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
