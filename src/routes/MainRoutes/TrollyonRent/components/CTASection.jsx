import React from "react";

// ICONS
import call from "../../../../assets/foodtrollyicons/call.png";
import web from "../../../../assets/foodtrollyicons/www.png";

const CTASection = () => {
  return (
<div className="w-full bg-black py-[40px] md:py-[50px] lg:py-[60px] flex justify-center px-[20px] md:px-[40px] lg:px-0">      
      <div
        className="
        w-full max-w-[1200px]
        rounded-[20px] md:rounded-[22px] lg:rounded-[24px]
        px-[20px] md:px-[50px] lg:px-[80px]
        py-[40px] md:py-[55px] lg:py-[70px]
        flex flex-col items-center text-center
        "
        style={{
          background:
            "linear-gradient(97deg, #60D186 0%, #FDBD5B 100%)",
        }}
      >

        {/* HEADING */}
        <h2 className="text-black text-[24px] md:text-[32px] lg:text-[40px] leading-[32px] md:leading-[40px] lg:leading-[50px] font-bricolageBold mb-[14px] md:mb-[18px] lg:mb-[20px] max-w-[90%] md:max-w-[500px] lg:max-w-[580px]">
          Start Your Own Food Business Today
        </h2>

        {/* SUBTEXT */}
        <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px] max-w-[90%] md:max-w-[380px] lg:max-w-[420px] mb-[20px] md:mb-[25px] lg:mb-[30px]">
          Become your own boss with ₹18,000/month and earn upto ₹5,000 daily with zero risk.
        </p>

        {/* BUTTON */}
        <button className="bg-[#E6F5D0] text-black px-[18px] md:px-[24px] lg:px-[28px] py-[10px] md:py-[12px] lg:py-[14px] font-bricolageSemiBold rounded-[10px] md:rounded-[11px] lg:rounded-[12px] text-[14px] md:text-[15px] lg:text-[16px] font-medium mb-[30px] md:mb-[40px] lg:mb-[50px]">
          Limited Trolleys Available – Book Now.
        </button>

        {/* CONTACT SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[700px] gap-[25px] md:gap-[30px] lg:gap-[40px]">

          {/* LEFT - PHONE */}
          <div className="flex items-center gap-[10px] md:gap-[12px]">
            <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-white/30 flex items-center justify-center">
              <img src={call} alt="" className="w-[18px] md:w-[20px] lg:w-[22px]" />
            </div>

            <div className="text-left">
              <p className="text-black text-[12px] md:text-[13px]">For Franchise Inquiry</p>
              <p className="text-black text-[15px] md:text-[17px] lg:text-[18px] font-bold">
                +91 88663 73077
              </p>
            </div>
          </div>

          {/* RIGHT - WEBSITE */}
          <div className="flex items-center gap-[10px] md:gap-[12px]">
            <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-white/30 flex items-center justify-center">
              <img src={web} alt="" className="w-[18px] md:w-[20px] lg:w-[22px]" />
            </div>

            <div className="text-left">
              <p className="text-black text-[12px] md:text-[13px]">Website</p>
              <p className="text-black text-[15px] md:text-[17px] lg:text-[18px] font-semibold">
                www.jagdaifoods.com
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CTASection;