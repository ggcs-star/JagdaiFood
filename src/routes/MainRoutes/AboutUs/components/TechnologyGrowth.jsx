import React from "react";
import check from "../../../../assets/franchisemodels/checkDark.svg";

export default function TechnologyGrowth() {
  return (
    <div className="w-full max-w-[520px] min-h-[688px] bg-[#60D186] rounded-[24px] px-[40px] py-[40px]">

      {/* Inner Content Wrapper */}
      <div className="max-w-[420px]">

        {/* Heading */}
        <h3 className="text-black text-[30px] leading-[40px] font-bricolageSemiBold mb-[16px]">
          Technology That Drives Growth
        </h3>

        {/* Intro */}
        <p className="text-black text-[16px] leading-[24px] font-inter mb-[16px]">
          Jagdai Foods is not just about food — it's about<span className="font-semibold"> food <br/>
          meets technology</span>
        </p>

        <p className="text-black text-[16px] leading-[24px] font-inter mb-[16px]">
          Our proprietary platform <span className="font-semibold">Jagods App</span> connects every
          outlet, customer, and partner in one unified digital environment.
        </p>

        <p className="text-black text-[16px] leading-[24px] font-inter mb-[18px]">
          With Jagods, franchise partners gain:
        </p>

        {/* Bullet list */}
        <div className="space-y-[14px] mb-[20px]">

          <div className="flex items-center gap-[10px]">
            <img src={check} className="w-[18px] mt-[3px]" />
            <span className="text-black text-[16px] leading-[26px] font-inter font-semibold">
              Their own delivery app (direct customer access)
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={check} className="w-[18px] mt-[3px]" />
            <span className="text-black text-[16px] leading-[26px] font-inter font-semibold">
              Reduced dependency on third-party aggregators
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={check} className="w-[18px] mt-[3px]" />
            <span className="text-black text-[16px] leading-[26px] font-inter font-semibold">
              Real-time sales and performance data
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={check} className="w-[18px] mt-[3px]" />
            <span className="text-black text-[16px] leading-[26px] font-inter font-semibold">
              Centralized order management
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={check} className="w-[18px] mt-[3px]" />
            <span className="text-black text-[16px] leading-[26px] font-inter font-semibold">
              Customer retention tools & analytics
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={check} className="w-[18px] mt-[3px]" />
            <span className="text-black text-[16px] leading-[26px] font-inter font-semibold">
              Increased margin protection
            </span>
          </div>

        </div>

        {/* Footer */}
        <p className="text-black text-[16px] leading-[24px] font-inter">
          This technology integration ensures franchise partners are not just
          restaurant owners — they are business owners with control over data,
          operations, and growth.
        </p>

      </div>
    </div>
  );
}