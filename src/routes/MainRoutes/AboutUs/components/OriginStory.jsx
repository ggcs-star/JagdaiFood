import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function OriginStory() {
  return (
    <section className="w-full bg-black flex justify-center mt-[20px] px-[20px]">
      <div
        className="
        relative w-full max-w-[1200px] rounded-[24px] overflow-hidden
        bg-gradient-to-r from-[#2a2a2a] via-[#2a2a2a] to-[#1f1f1f]

        px-[24px] py-[32px]
        sm:px-[30px] sm:py-[36px]
        md:px-[40px] md:py-[40px]
        lg:px-[60px] lg:py-[50px]

        flex items-center
        "
      >
        
        <div
          className="
        w-full
        max-w-full
        md:max-w-[519px]
        z-10
        "
        >
          <h2
            className="
          text-white
          text-[24px]
          sm:text-[26px]
          md:text-[30px]
          leading-[32px]
          md:leading-[36px]
          font-bricolageSemiBold
          mb-[10px]
          "
          >
            Our Origin Story
          </h2>

          <p
            className="
          text-[#D1D1D1]
          text-[14px]
          sm:text-[15px]
          md:text-[16px]
          leading-[20px]
          md:leading-[22px]
          font-inter
          mb-[20px]
          "
          >
            What began as a passion to celebrate authentic taste and quality has
            evolved into a systematic food business platform. Inspired by real
            culinary roots and strengthened by technology, Jagdai Foods bridges
            the gap between{" "}
            <span className="text-white font-semibold">
              traditional food craftsmanship and modern franchise scalability.
            </span>
          </p>

          <p
            className="
          text-[#D1D1D1]
          text-[14px]
          sm:text-[15px]
          md:text-[16px]
          leading-[20px]
          md:leading-[22px]
          font-inter
          mb-[14px]
          "
          >
            Our foundation rests on two core beliefs:
          </p>

          
          <div className="flex items-start gap-[10px] mb-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span
              className="
            text-white
            text-[13px]
            sm:text-[14px]
            leading-[20px]
            md:leading-[22px]
            font-inter
            "
            >
              Standardized processes deliver consistent quality
            </span>
          </div>

         
          <div className="flex items-start gap-[10px] mb-[16px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[3px]" />
            <span
              className="
            text-white
            text-[13px]
            sm:text-[14px]
            leading-[20px]
            md:leading-[22px]
            font-inter
            "
            >
              Technology is the backbone of scalable food operations
            </span>
          </div>

          <p
            className="
          text-white
          text-[13px]
          sm:text-[14px]
          leading-[20px]
          md:leading-[22px]
          font-inter
          "
          >
            This philosophy is embodied in every brand, every kitchen, and every
            partner we work with.
          </p>
        </div>

       
            <div
              className="
              absolute

              right-[-20px]
              top-[-20px]

              w-[90px]
              h-[90px]

              sm:w-[120px]
              sm:h-[120px]

              md:right-[0px]
              md:top-1/2
              md:-translate-y-1/2
              md:w-[420px]
              md:h-[420px]

              pointer-events-none
              opacity-60 md:opacity-100
            "
            >
        
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(253,189,91,0.45) 0%, rgba(253,189,91,0.15) 45%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

         
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
