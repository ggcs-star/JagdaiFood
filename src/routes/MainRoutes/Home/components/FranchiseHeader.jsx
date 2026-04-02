import React from "react";

export default function SectionHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center 
                    pb-10 sm:pb-12 md:pb-16 px-4">

      {/* Glow Background */}
      <div className="
        absolute 
        top-0 left-1/2 -translate-x-1/2 
        w-[180px] h-[80px] 
        sm:w-[220px] sm:h-[100px] 
        md:w-[260px] md:h-[120px] 
        bg-[#FDBD5B] opacity-25 blur-[80px] md:blur-[100px] 
        rounded-full
      "></div>

      {/* Heading */}
      <h2 className="
        text-[22px] 
        sm:text-[26px] 
        md:text-4xl 
        lg:text-5xl 
        font-bricolageBold 
        text-white 
        relative z-10
      ">
        Multiple Franchise Options!
      </h2>

      {/* Sub Heading */}
      <p className="
        text-[14px] 
        sm:text-[16px] 
        md:text-xl 
        lg:text-2xl 
        text-white 
        mt-2 
        font-bricolageSemiBold 
        relative z-10
      ">
        Choose Yours
      </p>
    </div>
  );
}