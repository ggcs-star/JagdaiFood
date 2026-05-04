"use client";

import React from "react";
import trolleyImg from "../../../../assets/investment/trolley/trolley.png";

export default function FoodTrolleyEarnings() {
  return (
    <section className="bg-black text-white pb-12 px-0 lg:px-0">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-6 lg:mb-8">
          <h2 className="text-white text-xl lg:text-5xl font-bricolageMedium text-center px-4">
            Monthly Earning Potential of{" "}
            <span className="text-[#FDBD5B]">Food Trolley</span>
          </h2>
        </div>

        {/* MAIN WRAPPER */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* TOP GOLD GLOW */}
          <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-transparent via-[#FDBD5B]/30 to-transparent blur-2xl opacity-60" />

          <div className="relative bg-[#1a1a1a] rounded-3xl p-4 lg:p-6 border border-[#2a2a2a]">

            {/* ================= TOP GRID ================= */}
            {/* TOP SECTION - Mobile Stack */}
            <div className="mb-6 flex flex-col gap-5 lg:grid lg:grid-cols-[60%_40%] lg:gap-5">

              {/* LEFT BIG CARD */}
              <div className="bg-black rounded-3xl p-5 lg:p-7">
                <p className="text-sm text-[#FDBD5B] mb-2">Franchise Fee</p>
                <p className="font-bricolageBold text-2xl lg:text-3xl mb-4 lg:mb-6">
                  ₹3,00,000 (+ GST)
                </p>

                <p className="text-sm text-[#FDBD5B] mb-1">Total Investment</p>
                <p className="font-bricolageBold text-2xl lg:text-3xl">
                  ₹3 Lakhs
                </p>

                <p className="text-xs lg:text-sm text-gray-400 mt-2">
                  (All Setup Included)
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-4 lg:gap-5">

                {/* TOP TWO CARDS */}
                <div className="grid grid-cols-2 gap-4 lg:gap-5">

                  <div className="bg-black rounded-3xl p-4 lg:p-6">
                    <p className="text-sm text-[#FDBD5B] mb-1">ROI</p>
                    <p className="font-bricolageBold text-base lg:text-xl">
                      6–9 Months
                    </p>
                  </div>

                  <div className="bg-black rounded-3xl p-4 lg:p-6">
                    <p className="text-sm text-[#FDBD5B] mb-1">Breakeven</p>
                    <p className="font-bricolageBold text-base lg:text-xl">
                      6 Months
                    </p>
                  </div>

                </div>

                {/* PROFIT STRUCTURE FULL WIDTH */}
                <div className="bg-black rounded-3xl p-4 lg:p-6">
                  <p className="text-sm text-[#FDBD5B] mb-1">
                    Profit Structure
                  </p>
                  <p className="font-bricolageBold text-sm lg:text-xl">
                    FOFO – 35% &nbsp; | &nbsp; FOCO – 15%
                  </p>
                </div>

              </div>
            </div>

            {/* ================= SECOND ROW - Mobile Stack ================= */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 mb-6">

              {/* REVENUE */}
              <div className="bg-black rounded-2xl p-5 lg:p-6">
                <h3 className="font-bricolageBold text-base lg:text-lg mb-5 lg:mb-6">
                  Revenue Assumption
                </h3>

                <div className="space-y-4 text-gray-300">

                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 border border-[#FDBD5B] rounded-lg flex items-center justify-center text-[#FDBD5B] text-sm lg:text-base">
                      📅
                    </div>
                    <p className="text-sm lg:text-base">Daily Billing: ₹5000</p>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 border border-[#FDBD5B] rounded-lg flex items-center justify-center text-[#FDBD5B] text-sm lg:text-base">
                      📄
                    </div>
                    <p className="text-sm lg:text-base">Monthly Billing: ₹1,50,000</p>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 border border-[#FDBD5B] rounded-lg flex items-center justify-center text-[#FDBD5B] text-sm lg:text-base">
                      💰
                    </div>
                    <p className="text-sm lg:text-base">Annual Revenue: ₹18 Lakhs</p>
                  </div>

                </div>
              </div>

              {/* EARNINGS */}
              <div className="bg-black rounded-2xl p-5 lg:p-6">
                <h3 className="font-bricolageBold text-base lg:text-lg mb-3 lg:mb-4">
                  Earnings Calculation
                </h3>

                <p className="mb-4 lg:mb-6 text-gray-300 text-sm lg:text-base">
                  Revenue Share:{" "}
                  <span className="text-[#60D186] font-semibold">
                    5% of Total Billing
                  </span>
                </p>

                <div className="bg-[#60D186]/10 border border-[#60D186] rounded-xl text-center py-4 lg:py-6">
                  <p className="text-xs lg:text-sm text-gray-300">
                    Estimated Yearly Earnings
                  </p>
                  <p className="text-[#60D186] font-bricolageBold text-xl lg:text-2xl">
                    ₹90,000+
                  </p>
                </div>
              </div>
            </div>

            {/* ================= ROI SECTION - Mobile Stack ================= */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-6 mb-6">

              {/* LEFT */}
              <div className="bg-black rounded-2xl p-6 lg:p-10 lg:col-span-2">
                <h3 className="font-bricolageBold text-base lg:text-lg mb-2 lg:mb-3">
                  Return on Investment
                </h3>

                <p className="text-gray-300 mb-4 lg:mb-6 font-bricolageRegular text-sm lg:text-base">
                  Approx. Investment:{" "}
                  <span className="text-[#60D186] font-semibold">
                    ₹2.7 Lakhs
                  </span>
                </p>

                <div className="bg-[#60D186]/10 border border-[#60D186] rounded-xl text-center py-4 lg:py-5">
                  <p className="font-bricolageBold text-base lg:text-xl text-[#60D186]">
                    Estimated ROI 30%+ Annually
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="bg-black rounded-2xl flex items-center justify-center p-3 lg:p-2">
                <img
                  src={trolleyImg}
                  alt="trolley"
                  className="max-h-[180px] lg:max-h-[250px] object-contain"
                />
              </div>
            </div>

            {/* ================= FINAL BAR ================= */}
            <div className="border border-[#FDBD5B] rounded-2xl py-4 lg:py-6 px-4 text-center bg-gradient-to-r from-[#60D186]/20 to-[#f5b75d]/20">
              <p className="font-bricolageBold text-sm lg:text-xl text-[#FDBD5B]">
                Low Investment. Stable Daily Sales. Strong Yearly Returns.
              </p>
            </div>

            {/* FOOTNOTE */}
            <p className="text-center text-xs lg:text-sm text-gray-200 mt-6 px-2">
              Figures are indicative and based on assumed averages. Actual results may vary.
            </p>

          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-[90%] h-[1px] bg-white opacity-50 mt-10 lg:mt-20"></div>
      </div>
    </section>
  );
}