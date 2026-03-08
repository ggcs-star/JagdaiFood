import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";
import girl from "../../../../assets/franchisemodels/whiteLabel2.png";

export default function WhiteLabelCard() {
  return (
    <div
      className="w-[1100px] h-[420px] mx-auto mt-[120px] rounded-[24px] relative flex items-center px-[60px] overflow-hidden"
      style={{
        background: "#5a5a5a",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="max-w-[520px] text-left z-10">

  <h3 className="text-white font-bricolageSemiBold text-[36px] leading-[43px] mb-[20px] max-w-[428px]">
    White-Label / Own  <br /> Brand
    Option Available
  </h3>

  <p className="font-inter font-medium text-[16px] leading-[22px] text-[#E4E4E4] mb-[16px] max-w-[473px]">
    FOFO franchise partners have the flexibility to operate under:
  </p>

  <ul className="space-y-[12px]">

    <li className="flex items-start gap-[10px]">
      <img src={check} className="w-[18px] mt-[2px]" />
      <span className="font-inter font-medium text-[16px] leading-[22px] text-[#F3F3F3]">
        Jagdai Foods' brand ecosystem
      </span>
    </li>

    <li className="flex items-start gap-[10px]">
      <img src={check} className="w-[18px] mt-[2px]" />
      <span className="font-inter font-medium text-[16px] leading-[22px] text-[#F3F3F3]">
        Their own brand name (white-label option)
      </span>
    </li>

  </ul>

  <p className="font-inter font-medium text-[16px] leading-[22px] text-[#E4E4E4] mt-[16px] max-w-[473px]">
    This provides long-term brand-building flexibility while still
    benefiting from Jagdai’s centralized kitchen, systems, and supply
    chain.
  </p>

</div>

      {/* ORANGE GLOW */}
      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[520px] h-[520px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253,189,91,0.55) 0%, rgba(253,189,91,0.30) 35%, rgba(253,189,91,0.12) 60%, transparent 75%)",
          filter: "blur(25px)",
        }}
      />

      {/* DOT PATTERN */}
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[460px] h-[460px]"
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

      {/* GIRL IMAGE */}
      <img
        src={girl}
        className="absolute right-[15px] bottom-[-10px] h-[450px]"
      />
    </div>
  );
}
