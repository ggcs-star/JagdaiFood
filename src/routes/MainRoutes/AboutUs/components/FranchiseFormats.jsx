import React from "react";

import qsr from "../../../../assets/franchiseformats/qsr.png";
import cloud from "../../../../assets/franchiseformats/cloude.png";
import tempo from "../../../../assets/franchiseformats/tempo.png";
import trolley from "../../../../assets/franchiseformats/trolley.png";
import foodcourt from "../../../../assets/franchiseformats/trolley.png";
import influencer from "../../../../assets/franchiseformats/trolley.png";

export default function FranchiseFormats() {

  const formats = [
    { img: qsr, title: "QSR Restaurant Franchise" },
    { img: cloud, title: "Internet / Cloud Franchise" },
    { img: tempo, title: "Food Tempo Franchise" },
    { img: trolley, title: "Food Trolley Franchise" },
    { img: foodcourt, title: "Food Court Franchise (Chatori Gali)" },
    { img: influencer, title: "Influencer Franchise Model" }
  ];

  return (

    <div className="relative w-full max-w-[1200px] h-[598px] mx-auto mt-[40px] bg-[#262626] rounded-[24px] px-[60px] py-[50px] overflow-hidden">

      {/* GREEN GLOW BACKGROUND */}
      <div
        className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[320px] h-[220px]"
        style={{
          background:
            "radial-gradient(circle, rgba(121, 219, 154, 0.55) 0%, rgba(114, 226, 151, 0.15) 40%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Heading */}
        <h2 className="text-white text-[30px] leading-[56px] font-bricolageSemiBold text-center mb-[8px]">
          Our Franchise Formats
        </h2>

        <p className="text-[#ffffff] text-[18px] leading-[26px] font-inter text-center mb-[40px]">
          We provide franchise opportunities across diversified formats:
        </p>

        {/* FORMAT CARDS */}
        <div className="flex justify-between items-start mb-[40px]">

          {formats.map((item, index) => (

            <div key={index} className="flex flex-col items-center w-[160px]">

              {/* IMAGE (PNG border already inside) */}
              <div className="w-[170px] h-[170px] flex items-center justify-center mb-[14px]">

                <img
                  src={item.img}
                  className="w-full h-full object-contain"
                />

              </div>

              {/* TITLE */}
              <p className="text-white text-[20px] leading-[24px] text-center font-bricolageSemiBold">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* BOTTOM TEXT */}
        <p className="text-[#ffffff] text-[18px] leading-[26px] font-inter text-center max-w-[700px] mx-auto">
          Each format has a clear investment structure, breakeven timeline, and return potential,
          backed by operational systems and centralized support.
        </p>

      </div>

    </div>

  );
}