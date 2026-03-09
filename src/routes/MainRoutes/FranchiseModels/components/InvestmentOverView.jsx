import React from "react";

export default function InvestmentOverview() {
  return (
    <section className="w-full max-w-[1200px] mx-auto mt-[80px] ">
      <h2 className="text-white text-[32px] md:text-[36px] lg:text-[42px] font-bricolageSemiBold text-center mb-[50px] md:mb-[70px]">
        Investment Overview
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-[24px]">
        <div
          className="w-full md:w-[380px] min-h-[214px] rounded-[24px] p-[24px] md:p-[28px]"
          style={{
            background: "#2a2a2a",
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="text-[#60D186] text-[16px] font-bricolageSemiBold mb-[16px]">
            Initial Investment:
          </p>

          <p className="text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] font-inter font-medium mb-[14px]">
            Approx. ₹16 Lakhs (Franchise Fee + Setup Cost)
          </p>

          <p className="text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] font-inter font-medium">
            Working capital applicable depending on model
          </p>
        </div>

        <div
          className="w-full md:w-[380px] min-h-[214px] rounded-[24px] p-[24px] md:p-[28px]"
          style={{
            background: "#2a2a2a",
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="text-[#60D186] text-[16px] font-bricolageSemiBold mb-[16px]">
            FOFO:
          </p>

          <p className="text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] font-inter font-medium">
            Franchisee manages operations & working capital
          </p>
        </div>

        <div
          className="w-full md:w-[380px] min-h-[214px] rounded-[24px] p-[24px] md:p-[28px]"
          style={{
            background: "#2a2a2a",
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="text-[#60D186] text-[16px] font-bricolageSemiBold mb-[16px]">
            FOCO:
          </p>

          <p className="text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] font-inter font-medium">
            Company manages operations under structured agreement
          </p>
        </div>
      </div>
    </section>
  );
}
