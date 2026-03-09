import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";
import girl from "../../../../assets/franchisemodels/whiteLabel2.png";

export default function WhiteLabelCard() {
  return (
    <div
      className="w-full max-w-[1100px] min-h-[420px] mx-auto mt-[80px] md:mt-[120px] rounded-[24px] relative flex flex-col md:flex-row md:items-center md:justify-between px-[24px] sm:px-[40px] md:px-[60px] py-[40px] md:py-0 overflow-hidden"
      style={{
        background: "#5a5a5a",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="max-w-[520px] text-left z-10">
        <h3 className="text-white font-bricolageSemiBold text-[26px] sm:text-[30px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[43px] mb-[16px] md:mb-[20px] max-w-[428px]">
          White-Label /Own Brand Option Available
        </h3>

        <p className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#E4E4E4] mb-[14px] md:mb-[16px] max-w-[473px]">
          FOFO franchise partners have the flexibility to operate under:
        </p>

        <ul className="space-y-[10px] md:space-y-[12px]">
          <li className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[2px]" />
            <span className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#F3F3F3]">
              Jagdai Foods' brand ecosystem
            </span>
          </li>

          <li className="flex items-start gap-[10px]">
            <img src={check} className="w-[16px] md:w-[18px] mt-[2px]" />
            <span className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#F3F3F3]">
              Their own brand name (white-label option)
            </span>
          </li>
        </ul>

        <p className="font-inter font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#E4E4E4] mt-[14px] md:mt-[16px] max-w-[473px]">
          This provides long-term brand-building flexibility while still
          benefiting from Jagdai’s centralized kitchen, systems, and supply
          chain.
        </p>
      </div>

      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[300px] md:w-[520px] h-[300px] md:h-[520px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253,189,91,0.55) 0%, rgba(253,189,91,0.30) 35%, rgba(253,189,91,0.12) 60%, transparent 75%)",
          filter: "blur(25px)",
        }}
      />

      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[220px] md:w-[460px] h-[220px] md:h-[460px]"
        style={{
          background:
            "radial-gradient(circle, rgba(253,189,91,0.95) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(circle at center, black 65%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 65%, transparent 85%)",
        }}
      />

      <img
        src={girl}
className="relative md:absolute right-[0px] md:right-[15px] bottom-0 md:bottom-[-10px] h-[240px] sm:h-[280px] md:h-[450px] object-contain mx-auto md:mx-0 mt-[30px] md:mt-0"      />
    </div>
  );
}
