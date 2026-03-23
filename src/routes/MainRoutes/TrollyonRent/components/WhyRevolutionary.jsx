import React from "react";

// ICONS (assets/foodtrollyicons)
import capex from "../../../../assets/foodtrollyicons/cost.svg";
import fee from "../../../../assets/foodtrollyicons/save-money.svg";
import staff from "../../../../assets/foodtrollyicons/team-leader.svg";
import revenue from "../../../../assets/foodtrollyicons/revenue.svg";
import training from "../../../../assets/foodtrollyicons/lecture.svg";

import opex from "../../../../assets/foodtrollyicons/0-percent.svg";
import profit from "../../../../assets/foodtrollyicons/0-percent (1).svg";
import sell from "../../../../assets/foodtrollyicons/sell (2).svg";
import cart from "../../../../assets/foodtrollyicons/food-cart.svg";
import scale from "../../../../assets/foodtrollyicons/street-food.svg";

const WhyRevolutionary = () => {
  return (
    <div className="w-full bg-black py-[20px] md:py-[25px] lg:py-[30px] flex justify-center">

      {/* OUTER BOX */}
      <div className="w-full max-w-[1200px] bg-[#2C2C2C] rounded-[16px] px-[20px] md:px-[40px] lg:px-[60px] py-[40px] md:py-[50px] lg:py-[60px]">

        {/* INNER */}
        <div className="max-w-[1100px] mx-auto">

          {/* HEADING */}
          <h2 className="text-center text-white text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[39px] font-semibold mb-[6px] md:mb-[8px] font-bricolageBold">
            Why It’s Revolutionary?
          </h2>

          <p className="text-center text-[#FFFFFF] text-[13px] md:text-[14px] mb-[30px] md:mb-[40px] lg:mb-[50px]">
            A plug-and-earn business — simple, safe, profitable.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-y-0 gap-x-[40px] md:gap-x-[80px] lg:gap-x-[120px]">

            {/* LEFT */}
            <div className="space-y-[14px] md:space-y-[18px] lg:space-y-[22px]">
              <Item icon={profit} text="Zero CAPEX" />
              <Item icon={fee} text="Fixed monthly fee" />
              <Item icon={staff} text="No kitchen or staff needed" />
              <Item icon={revenue} text="Unlimited earning potential" />
              <Item icon={training} text="100% training by Jagdai Team" />
            </div>

            {/* RIGHT */}
            <div className="space-y-[14px] md:space-y-[18px] lg:space-y-[22px]">
              <Item icon={opex} text="Zero OPEX" />
              <Item icon={capex} text="No profit sharing" />
              <Item icon={sell} text="Sell offline and online" />
              <Item icon={cart} text="Multiple food cart options" />
              <Item icon={scale} text="Scale easily by taking more trolleys" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyRevolutionary;


// 🔥 ITEM COMPONENT
const Item = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-[10px] md:gap-[12px] lg:gap-[14px]">

      {/* ICON BOX */}
      <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[56px] lg:h-[56px] min-w-[44px] md:min-w-[50px] lg:min-w-[56px] flex items-center justify-center bg-black rounded-[10px] md:rounded-[11px] lg:rounded-[12px]">
        <img src={icon} alt="" className="w-[20px] md:w-[22px] lg:w-[24px]" />
      </div>

      {/* TEXT */}
      <p className="text-white text-[14px] md:text-[17px] lg:text-[20px] font-bricolageSemiBold leading-[20px] md:leading-[22px] lg:leading-[24px]">
        {text}
      </p>

    </div>
  );
};