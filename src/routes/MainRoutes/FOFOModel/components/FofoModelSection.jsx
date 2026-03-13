import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";
import WhiteLabelCard from "./WhiteLabelCard";
import WhiteLabelProfitCard from "./WhiteLabelProfitCard";

export default function FofoModelSection() {
  return (
    <section className="w-full flex justify-center px-3">
      <div className="relative w-full max-w-[1200px] my-[40px] rounded-[24px] overflow-hidden text-center pt-[60px] md:pt-[80px] pb-[20px] lg:pb-[40px] bg-gradient-to-b from-[#2b2b2b] to-[#1f1f1f] backdrop-blur-[30px]">
        {" "}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] md:w-[420px] h-[240px] md:h-[320px] bg-[#FDBD5B] opacity-30 blur-[70px]" />
        <p className="text-[26px] md:text-[32px] font-bricolageSemiBold text-[#FDBD5B]">
          FOFO Model
        </p>
        <p className="mt-[8px] italic text-[14px] md:text-[16px] leading-[20px] font-semibold text-white">
          (Franchise Owned, Franchise Operated)
        </p>
        <h2 className="text-white text-[30px] sm:text-[38px] md:text-[48px] leading-[38px] sm:leading-[46px] md:leading-[56px] font-bricolageSemiBold mt-[22px]">
          Full Control. <br />
          Higher Profit Retention. <br />
          Brand Flexibility.
        </h2>
        <p className="mx-auto mt-[20px] max-w-[640px] text-[#e1e1e1] text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] font-medium px-2">
          Under the FOFO model, the franchisee owns and independently operates
          the QSR outlet while leveraging Jagdai Foods' centralized
          infrastructure, systems, and supply chain.
        </p>
        <div className="relative mt-[60px] md:mt-[60px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] md:w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-0 px-[20px] md:px-[120px] pt-[60px] text-left">
            <div className="relative md:pr-[50px]">
              <div className="hidden md:block absolute right-0 top-[-60px] w-[1px] h-[320px] bg-gradient-to-b from-white/25 via-white/25 to-transparent" />

              <h3 className="text-[#FDBD5B] text-[18px] md:text-[20px] font-bricolageSemiBold mb-[22px]">
                Ownership & Control
              </h3>

              <ul className="space-y-[16px] text-[14px] text-[#d1d1d1]">
                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Franchisee owns the outlet
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Franchise manages day-to-day operations
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Full billing revenue retained by franchise
                </li>
              </ul>
            </div>

            <div className="relative md:px-[50px]">
              <div className="hidden md:block absolute right-0 top-[-60px] w-[1px] h-[320px] bg-gradient-to-b from-white/25 via-white/25 to-transparent" />

              <h3 className="text-[#FDBD5B] text-[18px] md:text-[20px] font-bricolageSemiBold mb-[22px]">
                Operational Support
              </h3>

              <ul className="space-y-[16px] text-[14px] text-[#d1d1d1]">
                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Complete onboarding & training support
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Manpower recruitment assistance
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Centralized food preparation & supply
                </li>
              </ul>
            </div>

            <div className="md:pl-[50px]">
              <h3 className="text-[#FDBD5B] text-[18px] md:text-[20px] font-bricolageSemiBold mb-[22px]">
                Margin Structure
              </h3>

              <ul className="space-y-[16px] text-[14px] text-[#d1d1d1]">
                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Approx. 50% margin on selling price
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Full billing revenue retained
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Strong gross margin model
                </li>

                <li className="flex items-start gap-[12px]">
                  <img src={check} className="w-[18px] mt-[3px]" />
                  Multi-brand revenue advantage
                </li>
              </ul>
            </div>
          </div>
        </div>
        <WhiteLabelCard />
        <WhiteLabelProfitCard />
      </div>
    </section>
  );
}
