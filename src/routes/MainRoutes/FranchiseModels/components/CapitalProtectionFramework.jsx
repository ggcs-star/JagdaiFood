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
    <section className="w-[1200px] mx-auto mt-[80px]">

      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#63C07A] via-[#A9C27B] to-[#F2B44F] p-[70px]">

        <div className="grid grid-cols-2 gap-[80px] items-center">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-start h-full pt-[10px]">

            <h2 className="font-bricolageBold text-[40px] leading-[46px] text-black mb-[30px]">
              Capital Protection <br /> Framework
            </h2>

            {/* IMAGE */}
            <img
              src={capital}
              alt="capital"
              className="w-[420px] object-contain mt-[20px]"
            />

          </div>


          {/* RIGHT SIDE */}
          <div className="space-y-[24px]">

            <p className="text-black font-inter font-semibold text-[18px]">
              Under defined agreement provisions :
            </p>

            {features.map((text, index) => (
              <div
                key={index}
                className="bg-[#F6E3A3] rounded-[22px] px-[32px] py-[22px] shadow-sm"
              >
                <p className="text-black text-[17px] font-medium leading-[26px]">
                  {text}
                </p>
              </div>
            ))}

            <p className="text-black font-inter font-semibold text-[18px] pt-[8px]">
              Transparent. Structured. Documented.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}