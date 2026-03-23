

import React from "react";
import trolleyIcon from "../../../../assets/brands/food-trolley.svg";
import locationIcon from "../../../../assets/brands/red-carpet (1).svg";
import timeIcon from "../../../../assets/brands/lunch-time.svg";
import sellIcon from "../../../../assets/brands/sell (2).svg";
import moneyIcon from "../../../../assets/brands/money-bag (3).svg";
import profitIcon from "../../../../assets/brands/profit (2).svg";

const HowItWorks = () => {
  const data = [
    {
      text: "You get a fully branded,\nready-to-operate food trolley",
      icon: trolleyIcon,
    },
    {
      text: "Choose where you operate: offices, colleges,markets,\n societies, events, nightlife areas",
      icon: locationIcon,
    },
    {
      text: "Choose when you operate: breakfast,\nlunch, evening snacks, late night",
      icon: timeIcon,
    },
    {
      text: "Sell offline and online : Also sell on Zomato,\nSwiggy & Jagods Food Delivery Apps",
      icon: sellIcon,
    },
    {
      text: "No matter how much you earn, your\npayment stays ₹18,000/month",
      icon: moneyIcon,
    },
    {
      text: "Your profit = 100% yours",
      icon: profitIcon,
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[60px] lg:px-[120px] pt-[40px] md:pt-[60px] lg:pt-[20px] pb-[80px] md:pb-[100px] lg:pb-[140px]">
        {/* HEADING */}
        <div className="text-center mb-[40px] md:mb-[60px] lg:mb-[80px]">
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] leading-[34px] md:leading-[40px] lg:leading-[48px] font-semibold font-bricolageBold">
            How It Works?
          </h2>

          <p className="text-[#9ca3af] text-[14px] md:text-[15px] lg:text-[16px] mt-[8px] md:mt-[10px] font-bricolage">
            A fixed-cost, high-profit model with unlimited earning potential.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] md:gap-x-[80px] lg:gap-x-[160px] gap-y-[30px] md:gap-y-[40px] lg:gap-y-[60px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-[16px] md:gap-[20px] lg:gap-[24px]"
            >
              {/* ICON */}
              <div className="min-w-[48px] md:min-w-[52px] lg:min-w-[56px] h-[48px] md:h-[52px] lg:h-[56px] rounded-[10px] md:rounded-[12px] border border-[#FDBD5B] flex items-center justify-center bg-[#2A2416]">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[24px] md:w-[28px] lg:w-[32px] h-[24px] md:h-[28px] lg:h-[32px]"
                />
              </div>

              {/* TEXT */}
              <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#E5E7EB] whitespace-pre-line font-bricolage max-w-full lg:max-w-[460px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
