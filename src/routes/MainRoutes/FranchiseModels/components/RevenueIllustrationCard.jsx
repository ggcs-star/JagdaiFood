import React from "react";

import check from "../../../../assets/franchisemodels/greenCheck.png";
import growth from "../../../../assets/franchisemodels/build.png";

export default function RevenueIllustrationCard() {
  return (
    <div
      className="w-full max-w-[1100px] min-h-[432px] mx-auto mt-[80px] rounded-[24px] relative flex flex-col lg:flex-row items-start lg:items-center px-[24px] sm:px-[40px] lg:px-[60px] py-[40px] lg:py-[0px] overflow-hidden"
      style={{
        background: "#5a5a5a",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="w-full lg:w-[520px] z-10">
        <h3 className="text-white font-bricolageSemiBold text-[26px] sm:text-[30px] lg:text-[32px] leading-[34px] lg:leading-[40px] mb-[24px]">
          Revenue Illustration
        </h3>

        <p className="text-[#34D399] font-bricolageSemiBold text-[16px] mb-[12px]">
          Assuming:
        </p>

        <div className="flex items-center gap-[10px] mb-[18px]">
          <img src={check} className="w-[18px]" />
          <span className="text-white font-inter text-[15px] sm:text-[16px]">
            Monthly Revenue ₹13,50,000
          </span>
        </div>

        <p className="text-[#34D399] font-bricolageSemiBold text-[16px] mb-[12px]">
          Approximate return:
        </p>

        <div className="flex items-center gap-[10px] mb-[18px]">
          <img src={check} className="w-[18px]" />
          <span className="text-white font-inter text-[15px] sm:text-[16px]">
            ₹1,35,000 per month (illustrative scenario)
          </span>
        </div>

        <div className="flex items-center gap-[12px] mb-[12px]">
          <div className="w-[70px] h-[1px] bg-[#7a7a7a]" />
          <span className="text-[#34D399] text-[14px] font-semibold">OR</span>
          <div className="w-[70px] h-[1px] bg-[#7a7a7a]" />
        </div>

        <p className="text-white text-[16px] mb-[8px]">
          Structured 24% annual ROI.
        </p>

        <p className="text-white text-[15px] leading-[22px] max-w-[420px]">
          Ideal for passive investors seeking predictable{" "}
          <br className="hidden sm:block" /> income without operational
          responsibility.
        </p>
      </div>

      <div className="relative w-full lg:w-[550px] h-[300px] sm:h-[360px] lg:h-[432px] mt-[40px] lg:mt-0">
        <div
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[300px] md:w-[520px] h-[300px] md:h-[520px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(52,211,153,0.55) 0%, rgba(52,211,153,0.30) 35%, rgba(52,211,153,0.12) 60%, transparent 75%)",
            filter: "blur(25px)",
          }}
        />

        <div
          className="absolute right-[0px] top-[10px] w-[260px] sm:w-[340px] lg:w-[420px] h-[260px] sm:h-[340px] lg:h-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.9) 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(circle at center, black 65%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 65%, transparent 100%)",
          }}
        />

        <img
          src={growth}
          className="absolute left-[40px] sm:left-[60px] lg:left-[80px] bottom-[0px] h-[240px] sm:h-[300px] lg:h-[380px] z-10 object-contain"
        />
      </div>
    </div>
  );
}
