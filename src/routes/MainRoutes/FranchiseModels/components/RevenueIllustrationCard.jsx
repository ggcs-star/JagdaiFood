import React from "react";

import check from "../../../../assets/franchisemodels/greenCheck.png";
import growth from "../../../../assets/franchisemodels/build.png";

export default function RevenueIllustrationCard() {
  return (
    <div
      className="w-[1100px] h-[432px] mx-auto mt-[80px] rounded-[24px] relative flex items-center px-[60px] overflow-hidden"
      style={{
        background: "#5a5a5a",
        backdropFilter: "blur(30px)",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="w-[520px] z-10">
        <h3 className="text-white font-bricolageSemiBold text-[32px] leading-[40px] mb-[24px]">
          Revenue Illustration
        </h3>

        <p className="text-[#34D399] font-bricolageSemiBold text-[16px] mb-[12px]">
          Assuming:
        </p>

        <div className="flex items-center gap-[10px] mb-[18px]">
          <img src={check} className="w-[18px]" />
          <span className="text-white font-inter text-[16px]">
            Monthly Revenue ₹13,50,000
          </span>
        </div>

        <p className="text-[#34D399] font-bricolageSemiBold text-[16px] mb-[12px]">
          Approximate return:
        </p>

        <div className="flex items-center gap-[10px] mb-[18px]">
          <img src={check} className="w-[18px]" />
          <span className="text-white font-inter text-[16px]">
            ₹1,35,000 per month (illustrative scenario)
          </span>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-[12px] mb-[12px]">
          <div className="w-[70px] h-[1px] bg-[#7a7a7a]" />
          <span className="text-[#34D399] text-[14px] font-semibold">OR</span>
          <div className="w-[70px] h-[1px] bg-[#7a7a7a]" />
        </div>

        <p className="text-white text-[16px] mb-[8px]">
          Structured 24% annual ROI.
        </p>

        <p className="text-white text-[15px] leading-[22px] max-w-[420px]">
          Ideal for passive investors seeking predictable <br/> income without
          operational responsibility.
        </p>
      </div>

      {/* RIGHT VISUAL */}
      <div className="absolute right-[0px] top-0 w-[550px] h-[432px]">
        {/* GREEN GLOW */}
        <div
          className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(52,211,153,0.55) 0%, rgba(52,211,153,0.30) 35%, rgba(52,211,153,0.12) 60%, transparent 75%)",
            filter: "blur(35px)",
          }}
        />

        {/* DOT GRID */}
        <div
          className="absolute right-[0px] top-[10px] w-[420px] h-[420px]"
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

        {/* COINS IMAGE */}
        <img
          src={growth}
          className="absolute left-[80px] bottom-[0px] h-[380px] z-10 object-contain"
        />
      </div>
    </div>
  );
}
