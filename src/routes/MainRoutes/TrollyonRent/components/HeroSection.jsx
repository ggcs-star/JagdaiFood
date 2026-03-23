import React from "react";
import whyReturns from "../../../../assets/foodtrollyicons/trollyicon.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* ===== MAIN CONTAINER ===== */}
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[60px] lg:px-[120px]">
        {/* ===== TOP SECTION ===== */}
        <div className="pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[60px] md:pb-[70px] lg:pb-[80px] text-center">
          <h1 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[56px] font-bricolageSemiBold">
            Trolley on Rent
          </h1>

          <p className="text-[#60D186] text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[28px] mt-[10px] md:mt-[12px] font-bricolageBold">
            Earn upto ₹5,000 Daily
          </p>
        </div>

        {/* ===== CONTENT SECTION ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px] lg:gap-0 pb-[80px] lg:pb-[120px]">
          {/* LEFT IMAGE */}
          <div className="w-full max-w-[575px] h-auto lg:h-[397px] flex-shrink-0">
            <img
              src={whyReturns}
              alt="investment"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full max-w-[575px]">
            {/* TITLE */}
            <h2 className="text-[#FDBD5B] text-[22px] md:text-[26px] lg:text-[30px] leading-[30px] md:leading-[34px] lg:leading-[40px] font-bricolageBold text-center lg:text-left">
              India’s First Fixed-Pay Food Business Model
            </h2>

            {/* SUBTITLE */}
            <p className="mt-[10px] md:mt-[12px] text-white text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] font-bricolageBold text-center lg:text-left">
              No Sharing. No Commission. No Risk.
            </p>

            {/* DESCRIPTION */}
            <p className="mt-[10px] md:mt-[12px] text-[#FFFFFF] text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] opacity-80 text-center lg:text-left">
              Pay only ₹18,000/month or ₹5,000/week to run your own branded food
              trolley anywhere, anytime — all income is 100% yours.
            </p>

            {/* CARD */}
            {/* <div
              className="mt-[20px] md:mt-[24px] w-full lg:w-[573px] h-auto lg:h-[118px] rounded-[15px] px-[16px] md:px-[20px] lg:px-[24px] py-[16px] md:py-[18px] lg:py-[20px]"
              style={{
                background:
                  "linear-gradient(93deg, #203027 0%, #322F20 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-[#d1d5db] text-[12px] md:text-[13px] lg:text-[14px] font-semibold leading-[18px] md:leading-[20px]">
                Start Your Own Food Business
              </p>

              <p className="text-[#60D186] text-[16px] md:text-[18px] lg:text-[20px] font-bricolageBold mt-[4px] md:mt-[6px] leading-[24px] md:leading-[26px] lg:leading-[30px]">
                @ Just ₹18,000/Month or ₹5,000/Week
              </p>
            </div> */}

            <div
              className="
    mt-[20px] md:mt-[24px] 
    w-full lg:w-[573px] 
    h-auto lg:h-[118px] 
    rounded-[15px] 

    flex flex-col justify-center
    px-[16px] md:px-[20px] lg:px-[24px] 
    py-[16px] md:py-[18px] lg:py-[20px]
  "
              style={{
               
                border: "1.5px solid transparent",

               
                backgroundImage: `
      linear-gradient(93deg, #203027 0%, #322F20 100%),
      linear-gradient(90deg, #60D186, #FDBD5B)
    `,

              
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",

               
                boxShadow: "0 0 18px rgba(96, 209, 134, 0.18)",
              }}
            >
              <p className="text-[#d1d5db] text-[12px] md:text-[13px] lg:text-[14px] font-semibold leading-[18px] md:leading-[20px]">
                Start Your Own Food Business
              </p>

              <p className="text-[#60D186] text-[16px] md:text-[18px] lg:text-[20px] font-bricolageBold mt-[4px] md:mt-[6px] leading-[24px] md:leading-[26px] lg:leading-[30px]">
                @ Just ₹18,000/Month or ₹5,000/Week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
