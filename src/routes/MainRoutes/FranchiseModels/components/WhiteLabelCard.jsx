import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";
import girl from "../../../../assets/franchisemodels/whiteLabel2.png";

export default function WhiteLabelCard() {
  return (
    <div
      className="
      relative
      mx-3 md:mx-auto
      lg:w-full lg:max-w-[1100px]
      mt-[70px] md:mt-[120px]
      rounded-[24px]
      flex flex-col md:flex-row
      md:items-center md:justify-between
      px-[22px] sm:px-[40px] md:px-[60px]
      pt-[40px] md:py-[70px]
      pb-[260px] md:pb-[70px]
      overflow-hidden
      "
      style={{
        background: "#5a5a5a",
        backdropFilter: "blur(30px)",
      }}
    >
      {/* TEXT SECTION */}
      <div className="w-full md:max-w-[520px] z-10">
        <h3 className="text-white font-bricolageSemiBold text-[24px] sm:text-[30px] md:text-[36px] leading-[34px] md:leading-[42px] mb-[16px]">
          White-Label /Own Brand Option Available
        </h3>

        <p className="font-inter text-[14px] sm:text-[15px] md:text-[16px] text-[#E4E4E4] mb-[16px]">
          FOFO franchise partners have the flexibility to operate under:
        </p>

        <ul className="space-y-[12px] mb-[16px]">
          <li className="flex items-start gap-[10px]">
            <img src={check} className="w-[18px] mt-[2px]" />
            <span className="text-[#F3F3F3] text-[14px] sm:text-[15px] md:text-[16px]">
              Jagdai Foods' brand ecosystem
            </span>
          </li>

          <li className="flex items-start gap-[10px]">
            <img src={check} className="w-[18px] mt-[2px]" />
            <span className="text-[#F3F3F3] text-[14px] sm:text-[15px] md:text-[16px]">
              Their own brand name (white-label option)
            </span>
          </li>
        </ul>

        <p className="text-[#E4E4E4] text-[14px] sm:text-[15px] md:text-[16px]">
          This provides long-term brand-building flexibility while still
          benefiting from Jagdai’s centralized kitchen, systems, and supply
          chain.
        </p>
      </div>

      {/* GLOW */}
      <div
        className="absolute right-0 bottom-0 w-[240px] md:w-[520px] h-[240px] md:h-[520px] z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253,189,91,0.55) 0%, rgba(253,189,91,0.30) 35%, rgba(253,189,91,0.12) 60%, transparent 75%)",
          filter: "blur(25px)",
        }}
      />

      {/* DOT PATTERN */}
      <div
        className="absolute right-[10px] bottom-[20px] w-[200px] md:w-[460px] h-[200px] md:h-[460px] z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(253,189,91,0.9) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(circle at center, black 65%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 65%, transparent 85%)",
        }}
      />

      {/* IMAGE */}
      <img
        src={girl}
        alt="girl"
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        md:left-auto md:right-[20px]
        md:translate-x-0
        h-[240px] sm:h-[280px] md:h-[440px]
        object-contain
        z-10
        "
      />
    </div>
  );
}