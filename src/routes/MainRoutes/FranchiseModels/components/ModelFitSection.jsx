import React from "react";

export default function ModelFitSection() {
  return (
    <section className="w-full flex justify-center mt-[80px] px-[20px]">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        <button className="w-[315px] h-[48px] bg-[#FDBD5B] rounded-[8px] text-[16px] font-inter font-semibold text-black">
          View FOCO/ FOCO Difference Chart
        </button>

        <div className="mt-[60px] w-full max-w-[1200px] bg-[#262626] rounded-[24px] flex flex-col items-center pt-[60px] pb-[50px]">
          <h2 className="text-white text-[28px] sm:text-[34px] md:text-[40px] leading-[40px] md:leading-[56px] font-bricolageSemiBold text-center px-[20px]">
            Which Model Fits You?
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[50px] mt-[50px] w-full justify-center">
            <div className="w-full md:w-[535px] h-[222px] bg-black rounded-[24px] flex flex-col items-center justify-center px-[30px] md:px-[50px] text-center">
              <p className="text-[#60D186] text-[20px] md:text-[24px] leading-[28px] font-bricolageSemiBold mb-[12px]">
                FOFO
              </p>

              <p className="text-white text-[22px] sm:text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-inter font-medium">
                Full control + higher profit + white-label flexibility
              </p>
            </div>

            <div className="w-full md:w-[535px] h-[222px] bg-black rounded-[24px] flex flex-col items-center justify-center px-[30px] md:px-[50px] text-center">
              <p className="text-[#60D186] text-[20px] md:text-[24px] leading-[28px] font-bricolageSemiBold mb-[12px]">
                FOCO
              </p>

              <p className="text-white text-[22px] sm:text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-inter font-medium">
                Passive income + <br className="hidden md:block" /> structured
                ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
