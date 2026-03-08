import React from "react";

export default function InvestmentOverview() {
  return (
    <section className="w-[1200px] mx-auto mt-[140px]">

      {/* TITLE */}
      <h2 className="text-white text-[42px] font-bricolageSemiBold text-center mb-[70px]">
        Investment Overview
      </h2>

      {/* CARDS */}
      <div className="flex justify-between">

        {/* CARD 1 */}
        <div
          className="w-[380px] h-[214px] rounded-[24px] p-[28px]"
          style={{
            background: "#2a2a2a",
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="text-[#60D186] text-[16px] font-bricolageSemiBold mb-[16px]">
            Initial Investment:
          </p>

          <p className="text-white text-[18px] leading-[26px] font-inter font-medium mb-[14px]">
            Approx. ₹16 Lakhs (Franchise Fee + Setup Cost)
          </p>

         <p className="text-white text-[18px] leading-[26px] font-inter font-medium mb-[14px]">
            Working capital applicable depending on model
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="w-[380px] h-[214px] rounded-[24px] p-[28px]"
          style={{
            background: "#2a2a2a",
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="text-[#60D186] text-[16px] font-bricolageSemiBold mb-[16px]">
            FOFO:
          </p>

          <p className="text-white text-[18px] leading-[26px] font-inter font-medium">
            Franchisee manages operations & working capital
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="w-[380px] h-[214px] rounded-[24px] p-[28px]"
          style={{
            background: "#2a2a2a",
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="text-[#60D186] text-[16px] font-bricolageSemiBold mb-[16px]">
            FOCO:
          </p>

          <p className="text-white text-[18px] leading-[26px] font-inter font-medium">
            Company manages operations under structured agreement
          </p>
        </div>

      </div>

    </section>
  );
}