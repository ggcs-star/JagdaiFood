import React from "react";
import check from "../../../../assets/franchisemodels/checkDark.svg";

export default function CentralizedOperations() {
  return (
    <div
      className="
      w-full
      lg:w-[520px]

      h-full
      min-h-[800px]

      bg-[#FDBD5B]
      rounded-[24px]

      p-[24px]
      sm:p-[30px]
      md:p-[40px]
      "
    >
      
      <h3
        className="
        text-black
        text-[24px]
        sm:text-[26px]
        md:text-[30px]

        leading-[32px]
        md:leading-[40px]

        font-bricolageSemiBold
        mb-[14px] md:mb-[16px]
        "
      >
        Powered by Centralized Operations
      </h3>

      
      <p
        className="
        text-black
        text-[14px]
        sm:text-[15px]
        md:text-[16px]

        leading-[22px]
        md:leading-[24px]

        font-inter
        mb-[16px] md:mb-[18px]
        "
      >
        At the heart of our ecosystem is one of the largest
        <br />
        <span className="font-semibold">
          *10,000+ sq.ft. central kitchens*
        </span>{" "}
        in the region.
      </p>

      
      <p
        className="
        text-black
        text-[14px]
        sm:text-[15px]
        md:text-[16px]

        leading-[22px]
        md:leading-[24px]

        font-inter
        mb-[16px] md:mb-[18px]
        "
      >
        This facility functions as the operational backbone for:
      </p>

      
      <div className="space-y-[12px] md:space-y-[14px] mb-[18px] md:mb-[20px]">

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-black text-[14px] leading-[22px] md:leading-[26px] font-inter font-semibold">
            Centralized food production
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-black text-[14px] leading-[22px] md:leading-[26px] font-inter font-semibold">
            Quality control & taste consistency
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-black text-[14px] leading-[22px] md:leading-[26px] font-inter font-semibold">
            Inventory management
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-black text-[14px] leading-[22px] md:leading-[26px] font-inter font-semibold">
            Bulk procurement efficiencies
          </span>
        </div>

        <div className="flex items-start gap-[10px]">
          <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
          <span className="text-black text-[14px] leading-[22px] md:leading-[26px] font-inter font-semibold">
            Standardized SOP execution
          </span>
        </div>

      </div>

     
      <p
        className="
        text-black
        text-[14px]
        sm:text-[15px]
        md:text-[16px]

        leading-[22px]
        md:leading-[24px]

        font-inter
        "
      >
        This centralized model minimizes wastage, reduces skill dependency,
        and delivers operational ease for all franchise partners.
      </p>
    </div>
  );
}