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
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#63C07A] via-[#A9C27B] to-[#F2B44F] p-[30px] sm:p-[40px] md:p-[60px] lg:p-[70px]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[80px] items-center">

          
          <div className="flex flex-col">

            <h2 className="font-bricolageBold text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-[34px] sm:leading-[38px] md:leading-[44px] lg:leading-[46px] text-black mb-[20px] md:mb-[30px]">
              Capital Protection <br /> Framework
            </h2>

            <img
              src={capital}
              alt="capital"
              className="h-[240px] sm:h-[300px] md:h-[420px] lg:h-[480px] object-contain"
            />

          </div>

          
          <div className="space-y-[16px] md:space-y-[24px]">

            <p className="text-black font-bricolageBold text-[15px] sm:text-[16px] md:text-[18px]">
              Under defined agreement provisions :
            </p>

            {features.map((text, index) => (
              <div
                key={index}
                className="bg-[#F6E3A3] rounded-[22px] px-[20px] sm:px-[28px] md:px-[32px] min-h-[70px] md:h-[80px] flex items-center shadow-sm"
              >
                <p className="text-black text-[14px] sm:text-[15px] md:text-[17px] font-bricolageBold leading-[22px] md:leading-[24px]">
                  {text}
                </p>
              </div>
            ))}

            <p className="text-black font-bricolageBold text-[15px] sm:text-[16px] md:text-[18px] pt-[6px]">
              Transparent. Structured. Documented.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}