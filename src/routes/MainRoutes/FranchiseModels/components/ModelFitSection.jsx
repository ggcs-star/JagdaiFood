import React from "react";

export default function ModelFitSection() {
  return (
    <section className="w-full flex justify-center mt-[80px] px-[16px] md:px-[20px]">
      <div className="w-full max-w-[1200px] flex flex-col items-center">

        {/* BUTTON */}
        <button className="w-full max-w-[315px] h-[48px] bg-[#FDBD5B] rounded-[8px] text-[16px] font-inter font-semibold text-black">
          View FOCO/ FOCO Difference Chart
        </button>

        {/* CARD CONTAINER */}
        <div className="mt-[60px] w-full bg-[#262626] rounded-[24px] flex flex-col items-center pt-[50px] md:pt-[60px] pb-[40px] md:pb-[50px] px-[16px] md:px-0">

          <h2 className="text-white text-[26px] sm:text-[34px] md:text-[40px] leading-[36px] md:leading-[56px] font-bricolageSemiBold text-center">
            Which Model Fits You?
          </h2>

          {/* CARDS */}
          <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[50px] mt-[40px] md:mt-[50px] w-full justify-center">

            {/* FOFO */}
            <div className="w-full md:w-[535px] min-h-[200px] md:h-[222px] bg-black rounded-[24px] flex flex-col items-center justify-center px-[24px] md:px-[50px] text-center">

              <p className="text-[#60D186] text-[18px] md:text-[24px] leading-[26px] font-bricolageSemiBold mb-[10px]">
                FOFO
              </p>

              <p className="text-white text-[20px] sm:text-[26px] md:text-[32px] leading-[30px] md:leading-[40px] font-inter font-medium">
                Full control + higher profit + white-label flexibility
              </p>

            </div>

            {/* FOCO */}
            <div className="w-full md:w-[535px] min-h-[200px] md:h-[222px] bg-black rounded-[24px] flex flex-col items-center justify-center px-[24px] md:px-[50px] text-center">

              <p className="text-[#60D186] text-[18px] md:text-[24px] leading-[26px] font-bricolageSemiBold mb-[10px]">
                FOCO
              </p>

              <p className="text-white text-[20px] sm:text-[26px] md:text-[32px] leading-[30px] md:leading-[40px] font-inter font-medium">
                Passive income + <br className="hidden md:block" /> structured ROI
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}