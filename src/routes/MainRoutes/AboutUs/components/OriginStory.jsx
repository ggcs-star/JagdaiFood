import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function OriginStory() {
  return (
    <section className="w-full bg-black flex justify-center mt-[20px] px-[20px]">
      <div
        className="relative w-full max-w-[1200px] rounded-[24px] relative overflow-hidden
      bg-gradient-to-r from-[#2a2a2a] via-[#2a2a2a] to-[#1f1f1f]
      px-[40px] md:px-[60px] py-[40px] md:py-[50px] flex items-center"
      >
        {/* LEFT CONTENT */}
        <div className="max-w-[519px] z-10">
          <h2 className="text-white text-[30px] leading-[36px] font-bricolageSemiBold mb-[10px]">
            Our Origin Story
          </h2>

          <p className="text-[#D1D1D1] text-[16px] leading-[22px] font-inter mb-[20px]">
            What began as a passion to celebrate authentic taste and quality has
            evolved into a systematic food business platform. Inspired by real
            culinary roots and strengthened by technology, Jagdai Foods bridges
            the gap between{" "}
            <span className="text-white font-semibold">
              traditional food craftsmanship and modern franchise scalability.
            </span>
          </p>

          <p className="text-[#D1D1D1] text-[16px] leading-[22px] font-inter mb-[14px]">
            Our foundation rests on two core beliefs:
          </p>

          <div className="flex items-center gap-[10px] mb-[10px]">
            <img src={check} className="w-[18px]" />
            <span className="text-[#FFFFFF] text-[14px] leading-[22px] font-inter">
              Standardized processes deliver consistent quality
            </span>
          </div>

          <div className="flex items-center gap-[10px] mb-[16px]">
            <img src={check} className="w-[18px]" />
            <span className="text-[#FFFFFF] text-[14px] leading-[22px] font-inter">
              Technology is the backbone of scalable food operations
            </span>
          </div>

          <p className="text-[#ffffff] text-[14px] leading-[22px] font-inter">
            This philosophy is embodied in every brand, every kitchen, and every
            partner we work with.
          </p>
        </div>

        {/* RIGHT DECORATION */}
        <div className="absolute right-[0px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none">
          {/* glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(253,189,91,0.45) 0%, rgba(253,189,91,0.15) 45%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* dotted circle */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle, rgba(253,189,91,1) 2px, transparent 2px)",
              backgroundSize: "18px 18px",
              maskImage:
                "radial-gradient(circle at center, black 60%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 60%, transparent 75%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
