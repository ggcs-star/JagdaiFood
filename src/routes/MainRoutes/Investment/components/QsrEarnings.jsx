"use client";

import React from "react";

// ✅ Import Images (Adjust path if needed)
import revenueChart from "../../../../assets/investment/qsr/revenue.svg";
import costChart from "../../../../assets/investment/qsr/cost.svg";
import incomeChart from "../../../../assets/investment/qsr/income.svg";

export default function QsrEarnings() {
  return (
    <section className="bg-black text-white py-10 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-xl font-bricolageBold lg:text-2xl mb-8">
          Monthly Earning Potential of{" "}
          <span className="text-[#60D186] font-bricolageBold">QSR</span>
        </h2>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-2">Franchise Fee</p>
            <p className="font-bricolageBold text-lg mb-2">
              ₹6,00,000 (+ GST)
            </p>

            <p className="text-gray-400 text-sm">Total Investment</p>
            <p className="font-bricolageBold text-lg">₹16 Lakhs</p>
            <p className="text-xs text-gray-500 mt-1">
              (₹8L Franchise + ₹8L Setup or actual, whichever higher)
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5 flex flex-col justify-center">
            <p className="text-gray-400 text-sm mb-2">ROI</p>
            <p className="font-bricolageBold text-lg">12–15 Months</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-5 flex flex-col justify-center">
            <p className="text-gray-400 text-sm mb-2">Breakeven</p>
            <p className="font-bricolageBold text-lg">
              Within 6 Months
            </p>
          </div>
        </div>

        {/* Gross Profit */}
        <div className="bg-[#1a1a1a] rounded-xl p-5 mb-6">
          <p className="text-gray-400 text-sm">Gross Profit</p>
          <p className="font-bricolageBold text-lg">
            Approx. 35%
          </p>
        </div>

        {/* Highlight Earnings */}
        <div className="bg-[#111] border border-[#60D186] rounded-xl text-center py-6 mb-6">
          <p className="text-[#60D186] font-bricolageBold text-xl">
            ₹5,00,000+ per month
          </p>
          <p className="text-xs text-gray-400">
            Total Potential Earnings (Combined Model)
          </p>
        </div>

        {/* Middle Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Revenue Assumption */}
          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <h3 className="font-bricolageBold mb-4">
              Revenue Assumption
            </h3>

            <img
              src={revenueChart}
              alt="Revenue Chart"
              className="w-full max-h-64 object-contain mx-auto mb-4"
            />

            <div className="bg-[#60D186]/20 text-[#60D186] text-center py-3 rounded-lg font-bricolageBold">
              Estimated Monthly Revenue ₹13,50,000+
            </div>
          </div>

          {/* Cost Assumption */}
          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <h3 className="font-bricolageBold mb-4">
              Cost Assumption
            </h3>

            <img
              src={costChart}
              alt="Cost Chart"
              className="w-full max-h-64 object-contain mx-auto mb-4"
            />

            <div className="bg-[#f5b75d]/20 text-[#f5b75d] text-center py-3 rounded-lg font-bricolageBold">
              ₹6,50,000 – ₹7,00,000
            </div>

            <div className="mt-3 bg-[#333] text-center py-3 rounded-lg font-bricolageBold">
              Gross Profit ₹6,50,000 – ₹7,00,000
            </div>
          </div>

        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Operational Expenses */}
          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <h3 className="font-bricolageBold mb-4">
              Operational Expenses (Approx.)
            </h3>

            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
              <li>Salaries & Staff</li>
              <li>Rent / Fixed Expenses</li>
              <li>Packaging & Ops</li>
              <li>Marketing</li>
              <li>Platform Fees</li>
              <li>Utilities</li>
            </ul>

            <div className="mt-4 bg-[#333] text-center py-3 rounded-lg font-bricolageBold">
              Total Expenses: ~₹3,00,000
            </div>
          </div>

          {/* Additional Income */}
          <div className="bg-[#1a1a1a] rounded-xl p-5">
            <h3 className="font-bricolageBold mb-4">
              Additional Income Streams
            </h3>

            <img
              src={incomeChart}
              alt="Income Chart"
              className="w-full max-h-64 object-contain mx-auto mb-4"
            />

            <div className="bg-[#60D186]/20 text-[#60D186] text-center py-3 rounded-lg font-bricolageBold">
              Extra Income ₹1,00,000+ / month
            </div>
          </div>

        </div>

        {/* Final Calculation */}
        <div className="bg-gradient-to-r from-[#60D186]/20 to-[#f5b75d]/20 border border-[#60D186] rounded-xl text-center py-6">
          <p className="font-bricolageBold text-lg">
            ₹4,00,000 + ₹1,00,000 = ₹5,00,000+
          </p>
          <p className="text-xs text-gray-400 mt-1">
            (Approx Net Profit + Other Income = Total Potential)
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          All figures are indicative and based on average assumptions.
        </p>

      </div>
    </section>
  );
}