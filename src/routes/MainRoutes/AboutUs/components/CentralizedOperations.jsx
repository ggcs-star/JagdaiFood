import React from "react";
import check from "../../../../assets/franchisemodels/checkDark.svg";

export default function CentralizedOperations() {
  return (
    <div className="w-full max-w-[550px] min-h-[800px] bg-[#FDBD5B] rounded-[24px] p-[40px]">

      {/* Heading */}
      <h3 className="text-black text-[30px] leading-[40px] font-bricolageSemiBold mb-[16px]">
        Powered by Centralized Operations
      </h3>

      {/* Intro text */}
      <p className="text-black text-[16px] leading-[24px] font-inter mb-[18px]">
        At the heart of our ecosystem is one of the largest<br/>
        <span className="font-semibold"> *10,000+ sq.ft. central kitchens*</span> in the region.
      </p>

      {/* Subtitle */}
      <p className="text-black text-[16px] leading-[24px] font-inter mb-[18px]">
        This facility functions as the operational backbone for:
      </p>

      {/* Bullet List */}
      <div className="space-y-[14px] mb-[20px]">

  <div className="flex items-center gap-[10px]">
    <img src={check} className="w-[18px] mt-[2px]" />
    <span className="text-black text-[14px] leading-[26px] font-inter font-semibold">
      Centralized food production
    </span>
  </div>

  <div className="flex items-center gap-[10px]">
    <img src={check} className="w-[18px] mt-[2px]" />
    <span className="text-black text-[14px] leading-[26px] font-inter font-semibold">
      Quality control & taste consistency
    </span>
  </div>

  <div className="flex items-center gap-[10px]">
    <img src={check} className="w-[18px] mt-[2px]" />
    <span className="text-black text-[14px] leading-[26px] font-inter font-semibold">
      Inventory management
    </span>
  </div>

  <div className="flex items-center gap-[10px]">
    <img src={check} className="w-[18px] mt-[2px]" />
    <span className="text-black text-[14px] leading-[26px] font-inter font-semibold">
      Bulk procurement efficiencies
    </span>
  </div>

  <div className="flex items-center gap-[10px]">
    <img src={check} className="w-[18px] mt-[2px]" />
    <span className="text-black text-[14px] leading-[26px] font-inter font-semibold">
      Standardized SOP execution
    </span>
  </div>

</div>

      {/* Footer text */}
      <p className="text-black text-[16px] leading-[24px] font-inter">
        This centralized model minimizes wastage, reduces skill dependency,
        and delivers operational ease for all franchise partners.
      </p>

    </div>
  );
}