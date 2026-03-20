import React from "react";

// IMAGES (assets/foodtrollyicons)
import first from "../../../../assets/foodtrollyicons/first.png";
import second from "../../../../assets/foodtrollyicons/second.png";
import third from "../../../../assets/foodtrollyicons/third.png";

const StartSteps = () => {
  return (
    <div className="w-full bg-black py-[60px] md:py-[90px] lg:py-[120px] flex justify-center">

      {/* OUTER BOX */}
      <div className="w-full max-w-[1200px] bg-[#2C2C2C] rounded-[16px] px-[20px] md:px-[40px] lg:px-[60px] py-[40px] md:py-[50px] lg:py-[60px]">

        {/* INNER */}
        <div className="max-w-[1100px] mx-auto text-center">

          {/* HEADING */}
          <h2 className="text-white text-[24px] md:text-[30px] lg:text-[32px] leading-[32px] md:leading-[36px] font-semibold mb-[30px] md:mb-[45px] lg:mb-[60px] font-bricolageBold">
            Start in 3 Simple Steps
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[12px] md:gap-x-[16px] lg:gap-x-[20px] gap-y-[25px] md:gap-y-[30px] lg:gap-y-[40px]">

            <StepCard
              image={first}
              text="1. Apply for the trolley"
            />

            <StepCard
              image={second}
              text="2. Complete onboarding & training"
            />

            <StepCard
              image={third}
              text="3. Start your business from Day 1"
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default StartSteps;



// 🔥 STEP CARD
const StepCard = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center">

      {/* IMAGE */}
      <div className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[165px] md:h-[165px] lg:w-[180px] lg:h-[180px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden mb-[10px] md:mb-[12px]">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
        {text}
      </p>

    </div>
  );
};