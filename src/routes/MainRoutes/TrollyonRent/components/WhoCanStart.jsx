import React from "react";

// ICONS
import delivery from "../../../../assets/foodtrollyicons/delivery-boy.svg";
import student from "../../../../assets/foodtrollyicons/student.svg";
import job from "../../../../assets/foodtrollyicons/job-search.svg";
import earning from "../../../../assets/foodtrollyicons/earnings.svg";
import vendor from "../../../../assets/foodtrollyicons/vendor.svg";
import business from "../../../../assets/foodtrollyicons/business.svg";

const WhoCanStart = () => {
  return (
    <div className="w-full bg-black py-[60px] md:py-[90px] lg:py-[120px] flex justify-center">
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-[1200px] px-[20px] md:px-[40px] lg:px-0">
        
        {/* HEADING */}
        <h2 className="text-center text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-[6px] md:mb-[8px] font-bricolageBold">
          Who Can Start?
        </h2>

        <p className="text-center text-[#FFFFFF] text-[13px] md:text-[14px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
          Perfect for:
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] gap-x-[20px] md:gap-x-[30px] text-center relative">
          
          {/* VERTICAL LINES (ONLY DESKTOP SAFE) */}
          <div className="hidden md:block absolute left-1/3 top-0 h-[40%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="hidden md:block absolute left-1/3 bottom-0 h-[40%] w-[1px] bg-gradient-to-t from-transparent via-white/30 to-transparent" />

          <div className="hidden md:block absolute left-2/3 top-0 h-[40%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="hidden md:block absolute left-2/3 bottom-0 h-[40%] w-[1px] bg-gradient-to-t from-transparent via-white/30 to-transparent" />

          {/* ROW 1 */}
          <Item icon={delivery} text="Delivery agents" />
          <Item icon={student} text="Students" />
          <Item icon={job} text="Job seekers" />

          {/* ROW 2 */}
          <Item icon={earning} text="Part-time earners" />
          <Item icon={vendor} text="Small Vendors" />
          <Item
            icon={business}
            text="Anyone wanting a business with no investment & no risk"
          />
        </div>

        {/* BOTTOM TEXT */}
        <p className="text-center text-[#FFFFFF] text-[20px] md:text-[18px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
          No experience needed.
        </p>
      </div>
    </div>
  );
};

export default WhoCanStart;

// 🔥 ITEM COMPONENT
const Item = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      
      {/* ICON BOX */}
      <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center bg-[#FDBD5B] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] mb-[12px] md:mb-[16px] lg:mb-[20px]">
        <img src={icon} alt="" className="w-[26px] md:w-[30px] lg:w-[36px]" />
      </div>

      {/* TEXT */}
      <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]">
        {text}
      </p>
    </div>
  );
};