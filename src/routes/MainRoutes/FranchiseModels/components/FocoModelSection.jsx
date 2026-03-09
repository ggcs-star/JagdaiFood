import React from "react";
import RevenueIllustrationCard from "./RevenueIllustrationCard";

export default function FocoModelSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto mt-[80px] rounded-[24px] bg-[#262626] px-[20px] sm:px-[40px] md:px-[60px] py-[60px] md:py-[80px] relative overflow-hidden">
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[220px] md:h-[300px] bg-[#60D186] opacity-30 blur-[70px]" />

      <div className="text-center">
        <p className="text-[#60D186] text-[24px] sm:text-[28px] md:text-[32px] leading-[40px] md:leading-[54px] font-bricolageBold">
          FOCO Model
        </p>

        <p className="text-white text-[12px] sm:text-[14px] italic mt-[4px] font-semibold">
          (Franchise Owned. Company Operated.)
        </p>

        <h2 className="max-w-[1100px] mx-auto text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[48px] md:leading-[56px] font-bricolageSemiBold text-center mt-[30px]">
          Passive Investment.
          <br />
          Structured Returns.
        </h2>

        <p className="w-full md:w-[861px] mx-auto text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] font-inter font-medium text-center mt-[20px] px-2">
          Under FOCO, the franchisee owns the outlet while
          <br className="hidden md:block" />
          Jagdai Foods manages complete operations.
        </p>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 top-[360px] md:top-[430px] w-[90%] md:w-[1000px] h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.25), rgba(255,255,255,0.25), transparent)",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[80px] relative mt-[80px] md:mt-[120px]">
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[-62px] w-[1px] h-[360px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25), transparent)",
          }}
        />

        <div>
          <h3 className="text-[#34D399] text-[20px] md:text-[22px] text-center font-bricolageSemiBold mb-[30px]">
            Ownership & Control
          </h3>

          <div className="space-y-[18px]">
            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[20px] md:px-[30px] text-white font-bricolageSemiBold text-center">
              Franchisee owns the outlet
            </div>

            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[20px] md:px-[30px] text-white font-bricolageSemiBold text-center">
              Jagdai Foods manages operations
            </div>

            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[20px] md:px-[30px] text-white font-bricolageSemiBold text-center">
              No daily involvement required
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#34D399] text-[20px] md:text-[22px] text-center font-bricolageSemiBold mb-[30px]">
            Return Structure
          </h3>

          <div className="space-y-[18px]">
            <div className="bg-[#5A5A5A] rounded-[24px] py-[12px] px-[20px] md:px-[30px] text-white font-bricolageSemiBold text-center leading-[22px]">
              <p className="text-[#34D399] text-[13px] leading-[16px]">
                Franchisee receives
              </p>

              <p className="text-[18px] md:text-[20px] leading-[22px]">
                5% of total billing
              </p>
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <div className="w-[60px] h-[1px] bg-[#666]" />
              <span className="text-[#34D399] font-bricolageSemiBold text-[14px]">
                OR
              </span>
              <div className="w-[60px] h-[1px] bg-[#666]" />
            </div>

            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[20px] md:px-[30px] text-white text-center font-bricolageSemiBold">
              24% annual ROI on invested capital
            </div>

            <p className="text-white text-[14px] text-center">
              Whichever is higher, as per agreement terms
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[10px] md:mt-[10px] flex justify-center">
        <RevenueIllustrationCard />
      </div>
    </section>
  );
}
