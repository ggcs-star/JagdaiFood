import React from "react";

export default function StructuredFranchiseModels() {
  return (
    <div className="w-full max-w-[650px] min-h-[688px] bg-[#262626] rounded-[24px] px-[50px] py-[40px]">
      {/* inner content wrapper */}
      <div className="max-w-[550px]">
        <h3 className="text-white text-[30px] leading-[40px] font-bricolageSemiBold mb-[16px]">
          Structured Franchise Models
        </h3>

        <p className="text-[#D1D1D1] text-[16px] leading-[24px] font-inter mb-[24px]">
          Jagdai Foods offers transparent and structured franchise opportunities
          under two primary models:
        </p>

        {/* FOFO */}
        <div className="w-full max-w-[550px] h-[132px] bg-[#3A3A3A] rounded-[16px] px-[24px] py-[20px] flex flex-col justify-center mb-[16px]">
          <p className="text-[#FDBD5B] text-[20px] leading-[40px] font-bricolageSemiBold mb-[6px]">
            FOFO (Franchise Owned, Franchise Operated)
          </p>

          <p className="text-[#E5E5E5] text-[20px] leading-[28px] font-bricolageSemiBold">
            Active ownership. Higher control.
            <br /> Greater earning potential.
          </p>
        </div>

        {/* FOCO */}
        <div className="w-full max-w-[550px] h-[132px] bg-[#3A3A3A] rounded-[16px] px-[24px] py-[20px] flex flex-col justify-center mb-[20px]">
          <p className="text-[#60D186] text-[20px] leading-[40px] font-bricolageSemiBold mb-[6px]">
            FOCO (Franchise Owned, Company Operated)
          </p>

          <p className="text-[#E5E5E5] text-[20px] leading-[28px] font-bricolageSemiBold">
            Passive ownership. Predictable ROI. Operations managed by Jagdai.
          </p>
        </div>

        <p className="text-[#D1D1D1] text-[16px] leading-[24px] font-inter">
          Each model is designed to meet different investor goals — whether you
          are building your first food business or scaling into a multi-unit
          enterprise.
        </p>
      </div>
    </div>
  );
}
