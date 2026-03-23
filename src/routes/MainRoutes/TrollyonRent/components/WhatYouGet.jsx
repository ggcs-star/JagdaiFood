import React from "react";

// SVG IMPORTS
import trolley from "../../../../assets/foodtrollyicons/food-trolley.svg";
import food from "../../../../assets/foodtrollyicons/food-donation.svg";
import packageIcon from "../../../../assets/foodtrollyicons/package.svg";
import b2b from "../../../../assets/foodtrollyicons/b2b.svg";

import menu from "../../../../assets/foodtrollyicons/menu.svg";
import sop from "../../../../assets/foodtrollyicons/sop.svg";
import training from "../../../../assets/foodtrollyicons/training.svg";
import order from "../../../../assets/foodtrollyicons/order.svg";

const WhatYouGet = () => {
  return (
    <div className="w-full bg-black py-[20px] md:py-[25px] lg:py-[30px] flex justify-center">

      {/* OUTER BOX (XD exact) */}
      <div className="w-full max-w-[1200px] bg-[#2C2C2C] rounded-[16px] px-[20px] md:px-[35px] lg:px-[50px] py-[40px] md:py-[55px] lg:py-[70px]">

        {/* INNER CONTENT */}
        <div className="max-w-[1100px] mx-auto">

          {/* HEADING */}
          <h2 className="text-center text-[26px] md:text-[32px] lg:text-[40px] leading-[34px] md:leading-[40px] lg:leading-[48px] font-bold text-white mb-[6px] md:mb-[8px] font-bricolageBold">
            What You Get?
          </h2>

          <p className="text-center text-[#B0B0B0] text-[13px] md:text-[14px] mb-[30px] md:mb-[45px] lg:mb-[60px]">
            A complete Business-in-a-Box
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[25px] md:gap-y-0 gap-x-[40px] md:gap-x-[80px] lg:gap-x-[120px]">

            {/* LEFT */}
            <div className="space-y-[20px] md:space-y-[30px] lg:space-y-[40px]">
              <Item icon={trolley} text="Fully branded food trolley" />
              <Item icon={food} text="Daily fresh food supply" />
              <Item icon={packageIcon} text="Packaging & marketing support" />
              <Item icon={b2b} text="Nominal B2B pricing" />
            </div>

            {/* RIGHT */}
            <div className="space-y-[20px] md:space-y-[30px] lg:space-y-[40px]">
              <Item icon={menu} text="Multi-brand, high-demand menu" />
              <Item icon={training} text="SOPs & training" />
              <Item icon={sop} text="No cooking required SOPs & training — just sell & earn" />
              <Item icon={order} text="Online order readiness (Zomato / Swiggy / Jagods)" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;



const Item = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-[12px] md:gap-[16px] lg:gap-[20px]">

      {/* ICON BOX */}
      <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] min-w-[60px] md:min-w-[70px] lg:min-w-[80px] flex items-center justify-center border border-[#FDBD5B] rounded-[10px] md:rounded-[12px]">
        <img src={icon} alt="" className="w-[26px] md:w-[32px] lg:w-[38px]" />
      </div>

      {/* TEXT */}
      <p className="text-white text-[14px] md:text-[17px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[32px] font-medium">
        {text}
      </p>

    </div>
  );
};