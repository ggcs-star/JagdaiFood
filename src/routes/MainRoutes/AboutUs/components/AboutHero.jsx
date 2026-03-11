import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full bg-black flex justify-center pt-[100px] pb-[100px]">
      <div className="w-full max-w-[900px] text-center px-[20px]">
        
        <p className="text-[#60D186] text-[24px] sm:text-[28px] md:text-[32px] font-bricolageSemiBold mb-[16px]">
          Who We Are
        </p>

     
        <h1 className="text-white text-[36px] sm:text-[44px] md:text-[56px] leading-[42px] sm:leading-[52px] md:leading-[64px] font-bricolageSemiBold">
          Transforming the <br className="hidden sm:block" />
          Food Franchise Landscape
        </h1>

      
        <p
          className="
        text-[#B5B5B5]
        text-[15px]
        sm:text-[16px]
        md:text-[18px]
        leading-[24px]
        md:leading-[28px]
        mt-[24px]
        max-w-[917px]
        mx-auto
        "
        >
          Jagdai Foods is a forward-thinking{" "}
          <span className="font-bold text-white">
            multi-brand food ecosystem
          </span>{" "}
          built to empower entrepreneurs with structured, scalable, and
          technology-integrated franchise opportunities. We combine the strength
          of centralized production, diversified brand portfolio, and
          proprietary digital infrastructure to deliver a franchise experience
          that is predictable, profitable, and future-ready.
        </p>
      </div>
    </section>
  );
}
