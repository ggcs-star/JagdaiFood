import React from "react";

export default function HeroFranchiseModel() {
  return (
    <section className="w-full bg-black h-[450px] flex items-center justify-center">
      
      <div className="w-full max-w-[1440px] text-center px-4">

        {/* HEADING */}
        <h1 className="text-white text-[50px] leading-[60px] font-bricolageSemiBold">
          Own a Structured <br />
          Multi-Brand Food Franchise
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-[24px] text-[18px] leading-[26px] font-medium text-white max-w-[534px]">
          Jagdai Foods offers two clearly defined ownership models —
          built for different investment goals, operational involvement
          levels, and return expectations.
        </p>

      </div>

    </section>
  );
}