import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function MultiBrandEcosystem() {
  return (
    <div
      className="
      w-full
      lg:w-[650px]

      h-full
      min-h-[800px]

      bg-[#262626]
      rounded-[24px]

      p-[24px]
      sm:p-[30px]
      md:p-[40px]
      "
    >
      
      <h3
        className="
        text-white
        text-[24px]
        sm:text-[26px]
        md:text-[30px]

        leading-[32px]
        md:leading-[40px]

        font-bricolageSemiBold
        mb-[14px] md:mb-[16px]
        "
      >
        A Multi-Brand Franchise Ecosystem
      </h3>

      
      <p
        className="
        text-[#D1D1D1]
        text-[14px]
        sm:text-[15px]
        md:text-[16px]

        leading-[22px]
        md:leading-[24px]

        font-inter
        mb-[20px] md:mb-[22px]
        "
      >
        Unlike single-brand franchise models, Jagdai Foods operates a portfolio
        of{" "}
        <span className="text-white font-semibold">
          24+ in-house food brands
        </span>{" "}
        — each designed to capture different customer preferences and market
        segments.
      </p>

      
      <p
        className="
        text-[#D1D1D1]
        text-[14px]
        sm:text-[15px]
        md:text-[16px]

        leading-[22px]
        md:leading-[24px]

        font-inter
        mb-[16px] md:mb-[18px]
        "
      >
        This multi-brand strategy enables:
      </p>

      
      <div className="space-y-[12px] md:space-y-[14px] mb-[20px] md:mb-[22px]">

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter">
            Cross-selling opportunities
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter">
            Increased footfall and order frequency
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter">
            Reduced dependency on one revenue stream
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter">
            Enhanced customer retention
          </span>
        </div>

      </div>

     
      <p
        className="
        text-[#D1D1D1]
        text-[14px]
        sm:text-[15px]
        md:text-[16px]

        leading-[22px]
        md:leading-[24px]

        font-inter
        "
      >
        All brands operate within a{" "}
        <span className="text-white font-semibold">
          centralized production framework
        </span>
        , ensuring uniform taste, quality control, and operational efficiency
        across the board.
      </p>
    </div>
  );
}