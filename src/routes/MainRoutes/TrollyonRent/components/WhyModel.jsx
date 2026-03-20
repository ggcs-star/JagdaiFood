import React from "react";
import checkIcon from "../../../../assets/franchisemodels/check.svg";

const WhyModel = () => {
  return (
    <div className="w-full bg-black text-white">

      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[60px] lg:px-[120px] pb-[80px] md:pb-[100px] lg:pb-[140px]">

        {/* HEADING */}
        <h2 className="text-center text-[26px] md:text-[32px] lg:text-[40px] leading-[34px] md:leading-[40px] lg:leading-[48px] font-semibold font-bricolageBold mb-[40px] md:mb-[50px] lg:mb-[60px]">
          Why This Model is Game-Changing?
        </h2>

        {/* SECTION WRAPPER */}
        <div className="relative mt-[20px] md:mt-[30px] lg:mt-[40px]">

          {/* TOP GRADIENT LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full md:w-[1000px] lg:w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-0 pt-[40px] md:pt-[50px] lg:pt-[60px] text-left">

            {/* COLUMN 1 */}
            <div className="relative md:pr-[30px] lg:pr-[50px]">

              {/* VERTICAL LINE */}
              <div className="hidden md:block absolute right-0 top-[-60px] w-[1px] h-[300px] lg:h-[400px] bg-gradient-to-b from-white/25 via-white/25 to-transparent" />

              <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-bricolageSemiBold mb-[12px] md:mb-[14px] lg:mb-[16px]">
                1. Zero CAPEX - No Investment Needed
              </h3>

              <p className="text-[#9CA3AF] text-[13px] md:text-[14px] mb-[12px] md:mb-[16px]">
                Avoid all setup costs:
              </p>

              <div className="space-y-[10px] md:space-y-[12px]">
                {["Kitchen", "Stall/Trolley", "Equipment", "Branding"].map((item, i) => (
                  <div key={i} className="flex items-start gap-[8px] md:gap-[10px]">
                    <img src={checkIcon} className="w-[16px] md:w-[18px] mt-[3px]" />
                    <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#d1d1d1]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#9CA3AF] text-[13px] md:text-[14px] mt-[16px] md:mt-[20px] leading-[20px] md:leading-[22px]">
                Everything is provided ready-made by Jagdai Foods.
              </p>
            </div>

            {/* COLUMN 2 */}
            <div className="relative md:px-[30px] lg:px-[50px]">

              {/* VERTICAL LINE */}
              <div className="hidden md:block absolute right-0 top-[-60px] w-[1px] h-[300px] lg:h-[400px] bg-gradient-to-b from-white/25 via-white/25 to-transparent" />

              <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-bricolageSemiBold mb-[12px] md:mb-[14px] lg:mb-[16px]">
                2. Zero OPEX - No Monthly Overheads
              </h3>

              <div className="space-y-[10px] md:space-y-[12px] mb-[12px] md:mb-[16px]">
                {[
                  "No rent, No staff",
                  "No electricity/gas",
                  "No wastage, No cooking",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-[8px] md:gap-[10px]">
                    <img src={checkIcon} className="w-[16px] md:w-[18px] mt-[3px]" />
                    <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#d1d1d1]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#9CA3AF] text-[13px] md:text-[14px] leading-[20px] md:leading-[22px]">
                Our 10,000 sq. ft. central kitchen supplies daily fresh (not frozen)
                food at nominal B2B rates.
              </p>

              <p className="text-[#9CA3AF] text-[13px] md:text-[14px] mt-[10px] md:mt-[12px]">
                You only focus on selling.
              </p>
            </div>

            {/* COLUMN 3 */}
            <div className="md:pl-[30px] lg:pl-[50px]">

              <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-bricolageSemiBold mb-[12px] md:mb-[14px] lg:mb-[16px]">
                3. Zero Taste Issues - 100% Standardised Food
              </h3>

              <div className="space-y-[10px] md:space-y-[12px] mb-[12px] md:mb-[16px]">
                {[
                  "Daily fresh food",
                  "Fixed recipes",
                  "Uniform taste",
                  "No cook dependency",
                  "Zero errors",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-[8px] md:gap-[10px]">
                    <img src={checkIcon} className="w-[16px] md:w-[18px] mt-[3px]" />
                    <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#d1d1d1]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#9CA3AF] text-[13px] md:text-[14px]">
                Your quality stays consistent every day.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyModel;