import React from "react";

export default function SectionHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16">

      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[120px] bg-[#FDBD5B] opacity-25 blur-[100px] rounded-full"></div>

      
      <h2 className="text-3xl md:text-5xl text-[28px] font-bricolageBold text-white relative z-10">
        Multiple Franchise Options!
      </h2>

     
      <p className="text-lg md:text-5xl text-white mt-2 font-bricolageSemiBold relative z-10">
        Choose Yours
      </p>
    </div>
  );
}