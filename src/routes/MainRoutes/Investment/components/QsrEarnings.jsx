"use client";

import React from "react";

import revenueChart from "../../../../assets/investment/qsr/revenue.png";
import costChart from "../../../../assets/investment/qsr/cost.png";
import incomeChart from "../../../../assets/investment/qsr/income.png";

export default function QsrEarnings() {
    return (
        <section className="bg-black text-white py-12 px-0 lg:px-0">
            <div className="max-w-7xl mx-auto">

                <div className="flex justify-center mb-8">
                    <h2 className="text-white text-xl lg:text-5xl font-bricolageMedium text-center px-4">
                        Monthly Earning Potential of{" "}
                        <span className="text-[#FDBD5B]">QSR</span>
                    </h2>
                </div>

                {/* MAIN WRAPPER */}
                <div className="relative rounded-3xl overflow-hidden">

                    {/* TOP GLOW */}
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#FDBD5B]/30 via-[#FDBD5B]/10 to-transparent blur-2xl opacity-70" />

                    <div className="relative bg-[#1a1a1a] rounded-3xl p-4 lg:p-6 border border-[#2a2a2a]">

                        {/* TOP SECTION - Mobile Optimized */}
                        <div className="mb-6 flex flex-col gap-4 lg:grid lg:grid-cols-[60%_40%] lg:gap-5">
                            {/* LEFT BIG CARD */}
                            <div className="bg-black rounded-3xl p-5 lg:p-7">
                                <p className="text-sm text-[#FDBD5B] mb-2">Franchise Fee</p>
                                <p className="font-bricolageBold text-2xl lg:text-3xl mb-4 lg:mb-6">
                                    ₹6,00,000 (+ GST)
                                </p>

                                <p className="text-sm text-[#FDBD5B] mb-1">Total Investment</p>
                                <p className="font-bricolageBold text-2xl lg:text-3xl">
                                    ₹16 Lakhs
                                </p>

                                <p className="text-xs lg:text-sm text-gray-400 mt-2">
                                    (₹6L Franchise + ₹10L Setup or actual, whichever higher)
                                </p>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex flex-col gap-4">
                                {/* TOP TWO CARDS */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-black rounded-3xl p-4 lg:p-6">
                                        <p className="text-sm text-[#FDBD5B] mb-1">ROI</p>
                                        <p className="font-bricolageBold text-base lg:text-xl">
                                            12–15 Months
                                        </p>
                                    </div>

                                    <div className="bg-black rounded-3xl p-4 lg:p-6">
                                        <p className="text-sm text-[#FDBD5B] mb-1">Breakeven</p>
                                        <p className="font-bricolageBold text-base lg:text-xl">
                                            Within 6 Months
                                        </p>
                                    </div>
                                </div>

                                {/* PROFIT STRUCTURE FULL WIDTH */}
                                <div className="bg-black rounded-3xl p-4 lg:p-6">
                                    <p className="text-sm text-[#FDBD5B] mb-1">
                                        Gross Profit
                                    </p>
                                    <p className="font-bricolageBold text-base lg:text-xl">
                                        Approx. 35%
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BIG GREEN BAR */}
                        <div className="bg-black rounded-3xl text-center py-6 lg:py-8 mb-6 lg:mb-8 border border-[#2a2a2a]">
                            <p className="text-[#60D186] font-bricolageBold text-3xl lg:text-4xl">
                                ₹5,00,000+ per month
                            </p>
                            <p className="text-gray-400 mt-2 text-xs lg:text-sm">
                                Total Potential Earnings (Combined Model)
                            </p>
                        </div>

                        {/* MIDDLE SECTION - Mobile Stack */}
                        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 mb-6">
                            {/* REVENUE */}
                            <div className="bg-black rounded-2xl p-5 lg:p-6">
                                <h3 className="text-base lg:text-lg font-bricolageBold text-center mb-4">
                                    Revenue Assumption
                                </h3>

                                <div className="relative flex justify-center">
                                    <img src={revenueChart} className="w-48 lg:w-72" />
                                </div>

                                <div className="mt-6 border border-[#60D186] bg-[#60D186]/10 py-3 rounded-xl text-center">
                                    <p className="text-xs lg:text-sm text-gray-300">
                                        Estimated Monthly Revenue
                                    </p>
                                    <p className="text-[#60D186] font-bricolageBold text-lg lg:text-xl">
                                        ₹13,50,000*
                                    </p>
                                </div>
                            </div>

                            {/* COST */}
                            <div className="bg-black rounded-2xl p-5 lg:p-6">
                                <h3 className="text-base lg:text-lg font-bricolageBold text-center mb-4">
                                    Cost Assumption
                                </h3>

                                <div className="relative flex justify-center items-center mb-6">
                                    <img src={costChart} className="w-48 lg:w-64" />
                                </div>

                                <p className="text-center text-gray-400 text-xs lg:text-sm">
                                    Food Cost (50–55%)
                                </p>

                                <p className="text-center text-[#FDBD5B] font-bricolageBold text-base lg:text-xl">
                                    ~₹6,50,000 – ₹7,00,000
                                </p>

                                <div className="mt-5 border border-[#FDBD5B] bg-[#FDBD5B]/10 py-3 rounded-xl text-center">
                                    <p className="text-xs lg:text-sm text-gray-300">Gross Profit</p>
                                    <p className="text-[#FDBD5B] font-bricolageBold text-lg lg:text-xl">
                                        ₹6,50,000 – ₹7,00,000
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM SECTION - Mobile Stack */}
                        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 mb-6">
                            {/* EXPENSES */}
                            <div className="bg-black rounded-2xl p-5 lg:p-6">
                                <h3 className="text-base lg:text-lg font-bricolageBold text-center mb-6">
                                    Operational Expenses (Approx.)
                                </h3>

                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
                                    {[
                                        "Salaries & Staff",
                                        "Rent / Fixed Expenses",
                                        "Packaging & Operations",
                                        "Marketing & Maintenance",
                                        "Royalty / Platform Cost",
                                        "Utilities (Electricity, Gas, etc.)",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-8 lg:w-10 lg:h-10 border border-[#FDBD5B] rounded-lg flex items-center justify-center text-[#FDBD5B] text-sm lg:text-base">
                                                ⚙️
                                            </div>
                                            <span className="text-xs lg:text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 border border-[#FDBD5B] bg-[#FDBD5B]/10 py-3 lg:py-4 rounded-xl text-center">
                                    <p className="font-bricolageBold text-base lg:text-lg">
                                        Total Expenses:{" "}
                                        <span className="text-[#FDBD5B]">
                                            ~₹3,00,000
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* INCOME */}
                            <div className="bg-black rounded-2xl p-5 lg:p-6">
                                <h3 className="text-base lg:text-lg font-bricolageBold text-center mb-6">
                                    Additional Income Streams
                                </h3>

                                <div className="relative flex justify-center items-center mb-6">
                                    <img src={incomeChart} className="w-48 lg:w-64" />
                                </div>
                            </div>
                        </div>

                        {/* FINAL SECTION - Mobile Responsive */}
                        <div className="border border-[#FDBD5B] rounded-2xl py-6 px-4 lg:px-6 bg-gradient-to-r from-[#60D186]/20 to-[#f5b75d]/20 text-center">
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 lg:gap-4 text-xl font-bricolageBold">
                                <div className="text-3xl lg:text-4xl text-[#f5b75d]">
                                    ₹4,00,000
                                    <p className="text-xs text-gray-400 font-normal">
                                        (Approx. Net Profit)
                                    </p>
                                </div>

                                <span className="text-4xl lg:text-6xl">+</span>

                                <div className="text-3xl lg:text-4xl text-[#f5b75d]">
                                    ₹1,00,000
                                    <p className="text-xs text-gray-400 font-normal">
                                        (Approx. Other Income)
                                    </p>
                                </div>

                                <span className="text-4xl lg:text-6xl">=</span>

                                <div className="text-3xl lg:text-4xl text-[#60D186]">
                                    ₹5,00,000+
                                    <p className="text-xs text-gray-400 font-normal">
                                        Total Potential
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-center text-xs lg:text-sm text-gray-200 mt-6">
                            All figures are indicative and based on assumed averages. Actual results may vary depending on location, operations, and market conditions.
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