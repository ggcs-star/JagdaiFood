"use client";

import React from "react";

import revenueChart from "../../../../assets/investment/tempo/revenue.png";
import costChart from "../../../../assets/investment/tempo/cost.png";
import tempoImg from "../../../../assets/investment/tempo/tempo.png";
import { Check } from "lucide-react";

export default function FoodTempoEarnings() {
  return (
    <section className="bg-black text-white py-12 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        {/* <h2 className="text-center text-2xl lg:text-3xl mb-2">
          Monthly Earning Potential of{" "}
          <span className="text-[#FDBD5B] font-bricolageBold">
          </span>
        </h2> */}

         <h2 className="text-center text-2xl lg:text-4xl mb-2 font-bricolageMedium">
                    Monthly Earning Potential of{" "}
                    <span className="text-[#FDBD5B] font-bricolageMedium">                       Food Tempo (FOFO Model)

</span>
                </h2>

        <p className="text-center text-[#60D186] mb-10 font-semibold">
          Strong Daily Sales = Predictable Monthly Income
        </p>

        {/* MAIN WRAPPER */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* TOP GLOW */}
          <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-transparent via-[#FDBD5B]/30 to-transparent blur-2xl opacity-60" />

          <div className="relative bg-[#1a1a1a] rounded-3xl p-6 border border-[#2a2a2a]">

            {/* FRANCHISE BAR */}
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#FDBD5B] to-[#60D186] mb-6">
              <div className="rounded-2xl py-4 text-center bg-[#2a2a2a]">
                <p className="text-lg font-bricolageBold">
                  Franchise Fee:{" "}
                  <span className="text-[#FDBD5B]">
                    ₹5,40,000 (+ GST)
                  </span>
                </p>
              </div>
            </div>

            {/* ================= CHARTS ================= */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              {/* REVENUE */}
              <div className="bg-black rounded-2xl p-6 text-center">
                <h3 className="font-bricolageBold mb-4">
                  Revenue Assumption
                </h3>

                <img
                  src={revenueChart}
                  className="mx-auto w-72 mb-4"
                />

                <div className="bg-[#60D186]/10 border border-[#60D186] rounded-xl py-3">
                  <p className="text-sm text-gray-300">
                    Monthly Revenue
                  </p>
                  <p className="text-[#60D186] font-bricolageBold text-xl">
                    ₹3,00,000
                  </p>
                </div>
              </div>

              {/* COST */}
              <div className="bg-black rounded-2xl p-6 text-center">
                <h3 className="font-bricolageBold mb-4">
                  Cost & Margin Structure
                </h3>

                <div className="relative flex justify-center mb-4">
                  <img src={costChart} className="w-60" />

             
                </div>

                <p className="text-gray-400 text-sm">
                  Food Cost (50–55%)
                </p>

                <p className="text-[#FDBD5B] font-bricolageBold text-lg mb-4">
                  ₹1,35,000
                </p>

                <div className="bg-[#FDBD5B]/10 border border-[#FDBD5B] rounded-xl py-3">
                  <p className="text-sm text-gray-300">Gross Profit</p>
                  <p className="text-[#FDBD5B] font-bricolageBold text-xl">
                    ₹1,65,000
                  </p>
                </div>
              </div>
            </div>

            {/* ================= EXPENSES ================= */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">

              {/* EXPENSE LIST */}
        <div className="bg-black rounded-2xl p-6 md:col-span-2">
  {/* Title */}
  <h3 className="font-bricolageBold text-white text-lg mb-6">
    Operational Expenses (Approx.)
  </h3>

  {/* Items */}
  <div className="grid md:grid-cols-3 gap-y-4 gap-x-6 text-sm text-gray-300 mb-6">
    {[
      "Salaries & Wages",
      "Rent / Management Cost",
      "Utilities & Operations",
      "Packaging & Maintenance",
      "Marketing & Royalty",
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-2">
        
        {/* Yellow circle with tick */}
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FDBD5B] shrink-0">
          <Check className="w-3 h-3 text-black" strokeWidth={3} />
        </div>

        <span className="whitespace-nowrap">{item}</span>
      </div>
    ))}
  </div>

  {/* Bottom Box */}
  <div className="rounded-2xl border border-[#FDBD5B] px-6 py-4 text-center bg-[#2a2a2a]">
    <p className="font-bricolageBold text-lg">
      <span className="text-[#FDBD5B]">₹78,000</span>{" "}
      <span className="text-gray-300">Total Expenses</span>
    </p>
  </div>
</div>
              {/* IMAGE */}
              <div className="bg-black rounded-2xl flex items-center justify-center p-4">
                <img
                  src={tempoImg}
                  className="max-h-[200px] object-contain"
                />
              </div>
            </div>

            {/* ================= NET PROFIT ================= */}
            <div className="text-center mb-6">
              <p className="text-4xl">
                Net Profit{" "}
                <span className="text-[#60D186] font-bricolageBold text-4xl">
                  ₹85,000 – ₹90,000
                </span>
              </p>
            </div>

            {/* ================= FLOW BAR ================= */}
            {/* <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#FDBD5B] to-[#60D186]"> */}
              <div className="bg-black border-1 border-[#FDBD5B] rounded-2xl py-4 px-4 flex flex-wrap justify-center items-center gap-6 text-sm md:text-4xl">

                <div className="text-center">
                  <p className="font-bricolageMedium">₹3 Lac</p>
                  <p className="text-gray-400 text-sm">Revenue</p>
                </div>

                <span>→</span>

                <div className="text-center">
                  <p className="font-bricolageMedium">₹1.65 Lac</p>
                  <p className="text-gray-400 text-sm">Gross</p>
                </div>

                <span>→</span>

                <div className="text-center">
                  <p className="font-bricolageMedium">₹78k</p>
                  <p className="text-gray-400 text-sm">Expenses</p>
                </div>

                <span>→</span>

                <div className="text-center">
                  <p className="font-bricolageMedium text-[#60D186]">
                    ₹85k - 90k
                  </p>
                  <p className="text-gray-400 text-sm">Profit</p>
                </div>

              </div>
            {/* </div> */}

            {/* FOOTNOTE */}
            <p className="text-center text-xs text-gray-400 mt-4">
              Figures are indicative and for illustration purposes only.
              Actual results may vary.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}