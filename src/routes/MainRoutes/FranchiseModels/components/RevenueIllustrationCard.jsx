import React from "react";

import check from "../../../../assets/franchisemodels/greenCheck.png";
import growth from "../../../../assets/franchisemodels/build.png";

export default function RevenueIllustrationCard() {
  return (
    <div
      className="w-full max-w-[1100px] min-h-[432px] mx-auto mt-[80px] rounded-[24px] relative flex flex-col lg:flex-row items-start lg:items-center px-[20px] sm:px-[40px] lg:px-[60px] py-[40px] lg:py-[0px] overflow-hidden"
      style={{
        background: "#5a5a5a",
        backdropFilter: "blur(30px)",
      }}
    >
      
      <div className="w-full lg:w-[520px] z-10">
        <h3 className="text-white font-bricolageSemiBold text-[24px] sm:text-[30px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] mb-[22px]">
          Revenue Illustration
        </h3>

        <p className="text-[#34D399] font-bricolageSemiBold text-[15px] mb-[12px]">
          Assuming:
        </p>

        <div className="flex items-center gap-[10px] mb-[16px]">
          <img src={check} className="w-[18px]" />
          <span className="text-white font-inter text-[14px] sm:text-[16px]">
            Monthly Revenue ₹13,50,000
          </span>
        </div>

        <p className="text-[#34D399] font-bricolageSemiBold text-[15px] mb-[12px]">
          Approximate return:
        </p>

        <div className="flex items-center gap-[10px] mb-[18px]">
          <img src={check} className="w-[18px]" />
          <span className="text-white font-inter text-[14px] sm:text-[16px]">
            ₹1,35,000 per month (illustrative scenario)
          </span>
        </div>

        <div className="flex items-center gap-[12px] mb-[12px]">
          <div className="w-[60px] sm:w-[70px] h-[1px] bg-[#7a7a7a]" />
          <span className="text-[#34D399] text-[14px] font-semibold">OR</span>
          <div className="w-[60px] sm:w-[70px] h-[1px] bg-[#7a7a7a]" />
        </div>

        <p className="text-white text-[15px] sm:text-[16px] mb-[8px]">
          Structured 24% annual ROI.
        </p>

        <p className="text-white text-[14px] sm:text-[15px] leading-[22px] max-w-[420px]">
          Ideal for passive investors seeking predictable
          <br className="hidden sm:block" /> income without operational
          responsibility.
        </p>
      </div>

      
      <div className="relative w-full lg:w-[550px] h-[260px] sm:h-[340px] lg:h-[432px] mt-[40px] lg:mt-0 flex justify-center lg:block">

        
        <div
          className="absolute right-[-40px] lg:right-[-40px] sm:right-[-20px] top-1/2 -translate-y-1/2 w-[260px] sm:w-[420px] md:w-[520px] h-[260px] sm:h-[420px] md:h-[520px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(52,211,153,0.55) 0%, rgba(52,211,153,0.30) 35%, rgba(52,211,153,0.12) 60%, transparent 75%)",
            filter: "blur(25px)",
          }}
        />

       
        <div
          className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 w-[200px] sm:w-[360px] md:w-[460px] h-[200px] sm:h-[360px] md:h-[460px]"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.95) 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(circle at center, black 65%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 65%, transparent 85%)",
          }}
        />

        <img
          src={growth}
          className="absolute lg:left-[80px] sm:left-[60px] left-[40px] bottom-0 h-[200px] sm:h-[280px] lg:h-[380px] z-10 object-contain"
        />
      </div>
    </div>
  );
}