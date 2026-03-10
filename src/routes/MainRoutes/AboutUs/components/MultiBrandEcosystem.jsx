import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function MultiBrandEcosystem() {
  return (
    <div className="w-full max-w-[650px] min-h-[800px] bg-[#262626] rounded-[24px] p-[40px]">

      {/* heading */}
      <h3 className="text-white text-[30px] leading-[40px] font-bricolageSemiBold mb-[16px]">
        A Multi-Brand Franchise Ecosystem
      </h3>

      {/* description */}
      <p className="text-[#D1D1D1] text-[16px] leading-[24px] font-inter mb-[22px]">
        Unlike single-brand franchise models, Jagdai Foods operates a
        portfolio of <span className="text-white font-semibold">24+ in-house food brands</span> —
        each designed to capture different customer preferences and market segments.
      </p>

      {/* subtitle */}
      <p className="text-[#D1D1D1] text-[16px] leading-[24px] font-inter mb-[18px]">
        This multi-brand strategy enables:
      </p>

      {/* bullet list */}
      <div className="space-y-[14px] mb-[22px]">

        <div className="flex items-center gap-[10px]">
          <img src={check} className="w-[18px]" />
          <span className="text-[#FFFFFF] text-[16px] leading-[26px] font-inter">
            Cross-selling opportunities
          </span>
        </div>

        <div className="flex items-center gap-[10px]">
          <img src={check} className="w-[18px]" />
          <span className="text-[#FFFFFF] text-[16px] leading-[26px] font-inter">
            Increased footfall and order frequency
          </span>
        </div>

        <div className="flex items-center gap-[10px]">
          <img src={check} className="w-[18px]" />
          <span className="text-[#FFFFFF] text-[16px] leading-[26px] font-inter">
            Reduced dependency on one revenue stream
          </span>
        </div>

        <div className="flex items-center gap-[10px]">
          <img src={check} className="w-[18px]" />
          <span className="text-[#FFFFFF] text-[16px] leading-[26px] font-inter">
            Enhanced customer retention
          </span>
        </div>

      </div>

      {/* footer paragraph */}
      <p className="text-[#D1D1D1] text-[16px] leading-[24px] font-inter">
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