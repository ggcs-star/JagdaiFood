import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full bg-black flex justify-center pt-[100px] pb-[100px]">
      <div className="w-full max-w-[900px] text-center px-[20px]">
        <p className="text-[#60D186] text-[32px] font-bricolageSemiBold mb-[16px]">
          Who We Are
        </p>

        <h1 className="text-white text-[48px] md:text-[56px] leading-[56px] md:leading-[64px] font-bricolageSemiBold">
          Transforming the <br />
          Food Franchise Landscape
        </h1>

        <p className="text-[#B5B5B5] text-[18px] md:text-[18px] leading-[26px] mt-[24px]">
          Jagdai Foods is a forward-thinking <span className="font-bold text-[#ffffff]">multi-brand food ecosystem</span> built to
          empower entrepreneurs with structured, scalable, and
          technology-integrated franchise opportunities. We combine the strength
          of centralized production, diversified brand portfolio, and
          proprietary digital infrastructure to deliver a franchise experience
          that is predictable, profitable, and future-ready.
        </p>
      </div>
    </section>
  );
}
