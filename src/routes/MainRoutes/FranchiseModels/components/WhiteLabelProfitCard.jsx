import React from "react";

import sent from "../../../../assets/franchisemodels/sent.png";
import product from "../../../../assets/franchisemodels/product.png";
import revenue from "../../../../assets/franchisemodels/revenue.png";
import statistics from "../../../../assets/franchisemodels/statistics.png";
import cost from "../../../../assets/franchisemodels/cost.png";
import profit from "../../../../assets/franchisemodels/profit.png";

export default function WhiteLabelProfitCard() {
  return (
    <div className="w-full max-w-[1100px] md:h-[427px] mx-auto mt-[40px] rounded-[24px] bg-[#5A5A5A] pt-[40px] pb-[40px] px-[20px] sm:px-[40px] md:px-[60px] box-border">
      {" "}
      <h3 className="text-white font-bricolageSemiBold text-[20px] leading-[24px] mb-[40px] text-left">
        White-Label / Own Brand Option Available
      </h3>
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="w-full md:w-[426px]">
          <p className="text-[#FDBD5B] font-bricolageSemiBold text-[20px] leading-[24px] mb-[24px] text-left">
            Assuming
          </p>

          <div className="space-y-[28px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center shrink-0">
                <img src={sent} className="w-[24px]" />
              </div>

              <p className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[40px] md:whitespace-nowrap">
                {" "}
                300 daily orders
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center shrink-0">
                <img src={product} className="w-[24px]" />
              </div>

              <p className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[40px] md:whitespace-nowrap">
                {" "}
                Average order value ₹150
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center shrink-0">
                <img src={revenue} className="w-[24px]" />
              </div>

              <p className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[40px] md:whitespace-nowrap">
                {" "}
                Approx. Monthly Revenue ₹13,50,000
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[431px] mt-[40px] md:mt-0 md:ml-[140px]">
          <p className="text-[#FDBD5B] font-bricolageSemiBold text-[20px] leading-[24px] mb-[24px] text-left">
            With 55% margin
          </p>

          <div className="space-y-[28px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center shrink-0">
                <img src={statistics} className="w-[24px]" />
              </div>

              <p className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[40px] md:whitespace-nowrap">
                {" "}
                Gross Profit ≈ ₹7,00,000
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center shrink-0">
                <img src={cost} className="w-[24px]" />
              </div>

              <p className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[40px] md:whitespace-nowrap">
                {" "}
                Estimated operating cost ≈ ₹3,00,000
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center shrink-0">
                <img src={profit} className="w-[24px]" />
              </div>

              <p className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[40px] md:whitespace-nowrap">
                {" "}
                Approx. Net Profit ≈ ₹4,00,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
