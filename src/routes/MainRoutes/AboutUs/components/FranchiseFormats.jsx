import React from "react";

import qsr from "../../../../assets/franchiseformats/qsr.png";
import cloud from "../../../../assets/franchiseformats/cloude.png";
import tempo from "../../../../assets/franchiseformats/tempo.png";
import trolley from "../../../../assets/franchiseformats/trolley.png";
import foodcourt from "../../../../assets/franchiseformats/black.png";
import influencer from "../../../../assets/franchiseformats/influencer_franchise.png";

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

            <div
            className="
            relative
            w-full

            min-h-[598px]
            lg:h-[598px]

            mt-[40px]

            bg-[#262626]
            rounded-[24px]

            px-[24px]
            sm:px-[40px]
            md:px-[60px]

            py-[40px]
            md:py-[50px]

            overflow-hidden
            "
            >

      
      <div
        className="
        absolute
        -top-[80px]
        left-1/2
        -translate-x-1/2
        w-[240px]
        md:w-[320px]
        h-[180px]
        md:h-[220px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(121, 219, 154, 0.55) 0%, rgba(114, 226, 151, 0.15) 40%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />

      
      <div className="relative z-10">

        
        <h2
          className="
          text-white

          text-[24px]
          sm:text-[26px]
          md:text-[30px]

          leading-[36px]
          md:leading-[56px]

          font-bricolageSemiBold
          text-center

          mb-[8px]
          "
        >
          Our Franchise Formats
        </h2>

        <p
          className="
          text-white

          text-[14px]
          sm:text-[16px]
          md:text-[18px]

          leading-[22px]
          md:leading-[26px]

          font-inter
          text-center

          mb-[30px]
          md:mb-[40px]
          "
        >
          We provide franchise opportunities across diversified formats:
        </p>

        
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:flex
          lg:justify-between

          gap-[20px]
          lg:gap-0

          items-start

          mb-[30px]
          md:mb-[40px]
          "
        >

          {formats.map((item, index) => (

            <div
              key={index}
              className="
              flex
              flex-col
              items-center

              w-full
              lg:w-[160px]
              "
            >

             
              <div
                className="
                w-[120px]
                h-[120px]

                sm:w-[140px]
                sm:h-[140px]

                lg:w-[170px]
                lg:h-[170px]

                flex
                items-center
                justify-center

                mb-[10px]
                md:mb-[14px]
                "
              >

                <img
                  src={item.img}
                  className="w-full h-full object-contain"
                />

              </div>

              
              <p
                className="
                text-white

                text-[14px]
                sm:text-[16px]
                lg:text-[20px]

                leading-[20px]
                lg:leading-[24px]

                text-center
                font-bricolageSemiBold
                "
              >
                {item.title}
              </p>

            </div>

          ))}

        </div>

        
        <p
          className="
          text-white

          text-[14px]
          sm:text-[16px]
          md:text-[18px]

          leading-[22px]
          md:leading-[26px]

          font-inter
          text-center

          max-w-[700px]
          mx-auto
          "
        >
          Each format has a clear investment structure, breakeven timeline, and return potential,
          backed by operational systems and centralized support.
        </p>

      </div>

    </div>

  );
}