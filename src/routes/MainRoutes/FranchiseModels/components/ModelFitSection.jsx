import React from "react";

export default function ModelFitSection() {
  return (
    <section className="w-[1200px] mx-auto mt-[80px] flex flex-col items-center">
      {/* BUTTON */}
      <button className="w-[315px] h-[48px] bg-[#FDBD5B] rounded-[8px] text-[16px] font-inter font-semibold text-black">
        View FOCO/ FOCO Difference Chart
      </button>

      {/* MAIN CARD */}
      <div className="mt-[60px] w-[1200px] h-[420px] bg-[#262626] rounded-[24px] flex flex-col items-center pt-[60px]">
        {/* TITLE */}
        <h2 className="text-white text-[40px] leading-[56px] font-bricolageSemiBold text-center">
          Which Model Fits You?
        </h2>

        {/* BOX WRAPPER */}
        <div className="flex gap-[50px] mt-[50px]">
          {/* FOFO CARD */}
          <div className="w-[535px] h-[222px] bg-black rounded-[24px] flex flex-col items-center justify-center px-[50px] text-center">
            <p className="text-[#60D186] text-[24px] leading-[28px] font-bricolageSemiBold text-center mb-[12px]">
              FOFO
            </p>

            <p className="text-white text-[32px] leading-[40px] font-inter font-medium">
              Full control + higher profit + white-label flexibility
            </p>
          </div>

          {/* FOCO CARD */}
          <div className="w-[535px] h-[222px] bg-black rounded-[24px] flex flex-col items-center justify-center px-[50px] text-center">
            <p className="text-[#60D186] text-[24px] leading-[28px] font-bricolageSemiBold text-center mb-[12px]">
              FOCO
            </p>

            <p className="text-white text-[32px] leading-[40px] font-inter font-medium">
              Passive income +<br/> structured ROI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
