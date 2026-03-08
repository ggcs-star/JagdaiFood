import React from "react";
import RevenueIllustrationCard from "./RevenueIllustrationCard";

export default function FocoModelSection() {
  return (
    <section className="w-[1200px]  mx-auto mt-[80px] rounded-[24px] bg-[#262626] px-[60px] py-[80px] relative overflow-hidden">

      {/* GREEN GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#34D399] opacity-30 blur-[120px]" />

      {/* TOP TITLE */}
      <div className="text-center">
        <p className="text-[#60D186] text-[32px] leading-[54px] font-bricolageBold">
          FOCO Model
        </p>

        <p className="text-white text-[14px] italic mt-[4px] font-semibold">
          (Franchise Owned. Company Operated.)
        </p>

        <h2 className="max-w-[1100px] mx-auto text-white text-[48px] leading-[56px] font-bricolageSemiBold text-center mt-[30px]">
          Passive Investment.
          <br />
          Structured Returns.
        </h2>

        <p className="w-[861px] mx-auto text-white text-[18px] leading-[26px] font-inter font-medium text-center mt-[20px]">
          Under FOCO, the franchisee owns the outlet while
          <br />
          Jagdai Foods manages complete operations.
        </p>
      </div>

      {/* TOP DIVIDER LINE */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[430px] w-[1000px] h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.25), rgba(255,255,255,0.25), transparent)",
        }}
      />

      {/* GRID SECTION */}
      <div className="grid grid-cols-2 gap-[80px] relative mt-[120px]">

        {/* CENTER VERTICAL LINE */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[-62px] w-[1px] h-[360px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25), transparent)",
          }}
        />

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-[#34D399] text-[22px] text-center font-bricolageSemiBold mb-[30px]">
            Ownership & Control
          </h3>

          <div className="space-y-[18px]">
            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[30px] text-white font-bricolageSemiBold text-center">
              Franchisee owns the outlet
            </div>

            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[30px] text-white font-bricolageSemiBold text-center">
              Jagdai Foods manages operations
            </div>

            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[30px] text-white font-bricolageSemiBold text-center">
              No daily involvement required
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-[#34D399] text-[22px] text-center font-bricolageSemiBold mb-[30px]">
            Return Structure
          </h3>

          <div className="space-y-[18px]">
            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[30px] text-center">
              <p className="text-[#34D399] font-bricolageSemiBold text-[14px]">
                Franchisee receives
              </p>

              <p className="text-white text-[20px] font-bricolageSemiBold">
                5% of total billing
              </p>
            </div>

            {/* OR DIVIDER */}
            <div className="flex items-center justify-center gap-[10px]">
              <div className="w-[60px] h-[1px] bg-[#666]" />
              <span className="text-[#34D399] font-bricolageSemiBold text-[14px]">
                OR
              </span>
              <div className="w-[60px] h-[1px] bg-[#666]" />
            </div>

            <div className="bg-[#5A5A5A] rounded-[24px] py-[18px] px-[30px] text-white text-center font-bricolageSemiBold">
              24% annual ROI on invested capital
            </div>

            <p className="text-white text-[14px] text-center">
              Whichever is higher, as per agreement terms
            </p>
          </div>

          
        </div>


          


      </div>
<div className="mt-[80px] flex justify-center">
  <RevenueIllustrationCard />
</div>

    
    </section>
  );
}