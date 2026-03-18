import React from "react";
import capital from "../../../../assets/franchisemodels/coin2.png";

export default function CapitalProtectionFramework() {
  const features = [
    "Initial capital investment protected",
    "Refund eligible after 9 years upon permanent closure",
    "Setup cost guaranteed when executed fully by company",
    "Infrastructure remains company property upon closure",
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-[60px] md:mt-[40px] px-[16px] md:px-0">
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#63C07A] via-[#A9C27B] to-[#F2B44F] ">

<div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-[20px] md:gap-[80px] items-stretch">
          {/* LEFT */}
          <div className="relative h-full flex flex-col">

            {/* Title */}
            <h2 className="p-8 font-bricolageBold text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-[34px] sm:leading-[38px] md:leading-[44px] lg:leading-[46px] text-black z-10">
              Capital Protection <br /> Framework
            </h2>

            {/* Image (overlapping) */}
            <img
              src={capital}
              alt="capital"
              className="
              hidden lg:flex
      absolute
      bottom-0
      left-4
      h-[520px]
      object-cover
      z-0
    "
            />

          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center space-y-[16px] md:space-y-[22px] py-8 lg:mr-40">

            <p className="text-black font-bricolageBold text-[15px] sm:text-[16px] md:text-[18px]">
              Under defined agreement provisions :
            </p>

            {features.map((text, index) => (
              <div
                key={index}
                className="
                  bg-[#F6E3A3]
                  rounded-[22px]
                  px-[20px] sm:px-[28px] md:px-[32px]
                  py-[16px] md:py-[18px]
                  flex items-center
                  shadow-sm
                "
              >
                <p className="text-black text-[14px] sm:text-[15px] md:text-[17px] font-bricolageBold leading-[22px] md:leading-[24px]">
                  {text}
                </p>
              </div>
            ))}

            <p className="text-black font-bricolageBold text-[15px] sm:text-[16px] md:text-[18px] pt-[8px]">
              Transparent. Structured. Documented.
            </p>

          </div>

                <img
              src={capital}
              alt="capital"
              className="
              flex lg:hidden
      absolute
      bottom-0
      left-4
      object-contain
      z-0
    "
            />

        </div>
      </div>
    </section>
  );
}