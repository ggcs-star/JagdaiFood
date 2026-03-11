import React from "react";
import check from "../../../../assets/franchisemodels/checkDark.svg";

export default function TechnologyGrowth() {
  return (
    <div
      className="
      w-full
      lg:w-[520px]

      min-h-[688px]

      bg-[#60D186]
      rounded-[24px]

      p-[24px]
      sm:p-[30px]
      md:px-[40px] md:py-[40px]
      "
    >

     
      <div className="w-full lg:max-w-[420px]">

        
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
          Technology That Drives Growth
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
          mb-[14px] md:mb-[16px]
          "
        >
          Jagdai Foods is not just about food — it's about
          <span className="font-semibold">
            {" "}food <br className="hidden md:block" />
            meets technology
          </span>
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
          mb-[14px] md:mb-[16px]
          "
        >
          Our proprietary platform <span className="font-semibold">Jagods App</span> connects every
          outlet, customer, and partner in one unified digital environment.
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
          With Jagods, franchise partners gain:
        </p>

       
        <div className="space-y-[12px] md:space-y-[14px] mb-[18px] md:mb-[20px]">

          <div className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter font-semibold">
              Their own delivery app (direct customer access)
            </span>
          </div>

          <div className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter font-semibold">
              Reduced dependency on third-party aggregators
            </span>
          </div>

          <div className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter font-semibold">
              Real-time sales and performance data
            </span>
          </div>

          <div className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter font-semibold">
              Centralized order management
            </span>
          </div>

          <div className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter font-semibold">
              Customer retention tools & analytics
            </span>
          </div>

          <div className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-inter font-semibold">
              Increased margin protection
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
          This technology integration ensures franchise partners are not just
          restaurant owners — they are business owners with control over data,
          operations, and growth.
        </p>

      </div>
    </div>
  );
}