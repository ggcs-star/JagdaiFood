"use client";

import React from "react";

import revenueChart from "../../../../assets/investment/qsr/revenue.png";
import costChart from "../../../../assets/investment/qsr/cost.png";
import incomeChart from "../../../../assets/investment/qsr/income.png";

export default function QsrEarnings() {
    return (
        <section className="bg-black text-white py-12 px-4 lg:px-10">
            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-center text-2xl lg:text-4xl mb-8 font-bricolageMedium">
                    Monthly Earning Potential of{" "}
                    <span className="text-[#FDBD5B] font-bricolageMedium">QSR</span>
                </h2>

                {/* MAIN WRAPPER */}
                <div className="relative rounded-3xl overflow-hidden">

                    {/* TOP GLOW */}
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#FDBD5B]/30 via-[#FDBD5B]/10 to-transparent blur-2xl opacity-70" />

                    <div className="relative bg-[#1a1a1a] rounded-3xl p-6 border border-[#2a2a2a]">

                        {/* TOP SECTION */}
                        {/* <div className="mb-6">

                            <div className="grid md:grid-cols-3 gap-5">

                                <div className="bg-black rounded-3xl p-7 md:col-span-2">

                                    <p className="text-sm text-[#FDBD5B] mb-2 font-bricolageRegular">Franchise Fee</p>
                                    <p className="font-bricolageBold text-3xl mb-6">
                                        ₹6,00,000 (+ GST)
                                    </p>

                                    <p className="text-sm text-[#FDBD5B] mb-1 font-bricolageRegular">Total Investment</p>
                                    <p className="font-bricolageBold text-3xl">
                                        ₹16 Lakhs
                                    </p>

                                    <p className="text-sm text-gray-400 mt-2 font-bricolageRegular">
                                        (₹6L Franchise + ₹10L Setup or actual, whichever higher)
                                    </p>
                                </div>

                                <div className="flex flex-col gap-5">

                                    <div className="bg-black rounded-3xl p-6">
                                        <p className="text-sm text-[#FDBD5B] mb-1 font-bricolageRegular">ROI</p>
                                        <p className="font-bricolageBold text-xl">
                                            12–15 Months
                                        </p>
                                    </div>

                                    <div className="bg-black rounded-3xl p-6">
                                        <p className="text-sm text-[#FDBD5B] mb-1 font-bricolageRegular">Breakeven</p>
                                        <p className="font-bricolageBold text-xl">
                                            Within 6 Months
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-5 md:w-[100%]">
                                <div className="bg-black rounded-3xl p-6">
                                    <p className="text-sm text-[#FDBD5B] mb-1 font-bricolageRegular">Gross Profit</p>
                                    <p className="font-bricolageBold text-xl">
                                        Approx. 35%
                                    </p>
                                </div>
                            </div>

                        </div> */}

                        <div className="mb-6 grid md:grid-cols-[60%_40%] gap-5">

                            {/* LEFT BIG CARD */}
                            <div className="bg-black rounded-3xl p-7">
                                <p className="text-sm text-[#FDBD5B] mb-2">Franchise Fee</p>
                                <p className="font-bricolageBold text-3xl mb-6">
₹6,00,000 (+ GST)                                </p>

                                <p className="text-sm text-[#FDBD5B] mb-1">Total Investment</p>
                                <p className="font-bricolageBold text-3xl">
₹16 Lakhs                                </p>

                                <p className="text-sm text-gray-400 mt-2">
(₹6L Franchise + ₹10L Setup or actual, whichever higher)                                </p>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex flex-col gap-5">

                                {/* TOP TWO CARDS */}
                                <div className="grid grid-cols-2 gap-5">

                                    <div className="bg-black rounded-3xl p-6">
                                        <p className="text-sm text-[#FDBD5B] mb-1">ROI</p>
                                        <p className="font-bricolageBold text-xl">
12–15 Months                                        </p>
                                    </div>

                                    <div className="bg-black rounded-3xl p-6">
                                        <p className="text-sm text-[#FDBD5B] mb-1">Breakeven</p>
                                        <p className="font-bricolageBold text-xl">
Within 6 Months                                        </p>
                                    </div>

                                </div>

                                {/* PROFIT STRUCTURE FULL WIDTH */}
                                <div className="bg-black rounded-3xl p-6">
                                    <p className="text-sm text-[#FDBD5B] mb-1">
Gross Profit                                    </p>
                                    <p className="font-bricolageBold text-xl">
Approx. 35%                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* BIG GREEN BAR */}
                        <div className="bg-black rounded-3xl text-center py-8 mb-8 border border-[#2a2a2a]">

                            <p className="text-[#60D186] font-bricolageBold text-4xl">
                                ₹5,00,000+ per month
                            </p>

                            <p className="text-gray-400 mt-2 text-sm">
                                Total Potential Earnings (Combined Model)
                            </p>

                        </div>


                        {/* MIDDLE */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">

                            {/* REVENUE */}
                            <div className="bg-black rounded-2xl p-6 relative">
                                <h3 className="text-lg font-bricolageBold text-center mb-4">
                                    Revenue Assumption
                                </h3>

                                <div className="relative flex justify-center">
                                    <img src={revenueChart} className="w-72" />

                                    {/* LABELS */}
                                    {/* <div className="absolute top-2 left-2 text-xs">
                    <p>Average Order Value</p>
                    <p className="font-bold">₹150</p>
                  </div>

                  <div className="absolute top-6 right-2 text-xs text-right">
                    <p>Monthly Orders</p>
                    <p className="font-bold">~9,000</p>
                  </div>

                  <div className="absolute bottom-2 left-4 text-xs">
                    <p>Approx.</p>
                    <p className="font-bold">300 Orders/day</p>
                  </div> */}
                                </div>

                                <div className="mt-6 border border-[#60D186] bg-[#60D186]/10 py-3 rounded-xl text-center">
                                    <p className="text-sm text-gray-300">
                                        Estimated Monthly Revenue
                                    </p>
                                    <p className="text-[#60D186] font-bricolageBold text-xl">
                                        ₹13,50,000*
                                    </p>
                                </div>
                            </div>

                            {/* COST */}
                            <div className="bg-black rounded-2xl p-6">
                                <h3 className="text-lg font-bricolageBold text-center mb-4">
                                    Cost Assumption
                                </h3>

                                <div className="relative flex justify-center items-center mb-6">
                                    <img src={costChart} className="w-64" />

                                    {/* <div className="absolute text-center">
                    <p className="text-sm">Food Cost</p>
                    <p className="font-bricolageBold">(50–55%)</p>
                  </div> */}
                                </div>

                                <p className="text-center text-gray-400 text-sm">
                                    Food Cost (50–55%)
                                </p>

                                <p className="text-center text-[#FDBD5B] font-bricolageBold text-xl">
                                    ~₹6,50,000 – ₹7,00,000
                                </p>

                                <div className="mt-5 border border-[#FDBD5B] bg-[#FDBD5B]/10 py-3 rounded-xl text-center">
                                    <p className="text-sm text-gray-300">Gross Profit</p>
                                    <p className="text-[#FDBD5B] font-bricolageBold text-xl">
                                        ₹6,50,000 – ₹7,00,000
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">

                            {/* EXPENSES */}
                            <div className="bg-black rounded-2xl p-6">
                                <h3 className="text-lg font-bricolageBold text-center mb-6">
                                    Operational Expenses (Approx.)
                                </h3>

                                <div className="grid grid-cols-2 gap-5 text-sm">
                                    {[
                                        "Salaries & Staff",
                                        "Rent / Fixed Expenses",
                                        "Packaging & Operations",
                                        "Marketing & Maintenance",
                                        "Royalty / Platform Cost",
                                        "Utilities (Electricity, Gas, etc.)",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-10 h-10 border border-[#FDBD5B] rounded-lg flex items-center justify-center text-[#FDBD5B]">
                                                ⚙️
                                            </div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 border border-[#FDBD5B] bg-[#FDBD5B]/10 py-4 rounded-xl text-center">
                                    <p className="font-bricolageBold text-lg">
                                        Total Expenses:{" "}
                                        <span className="text-[#FDBD5B]">
                                            ~₹3,00,000
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* INCOME */}
                            <div className="bg-black rounded-2xl p-6">
                                <h3 className="text-lg font-bricolageBold text-center mb-6">
                                    Additional Income Streams
                                </h3>

                                <div className="relative flex justify-center items-center mb-6">
                                    <img src={incomeChart} className="w-64" />


                                </div>


                            </div>
                        </div>

                        {/* FINAL */}
                        <div className="border border-[#FDBD5B] rounded-2xl py-6 bg-gradient-to-r from-[#60D186]/20 to-[#f5b75d]/20 text-center">
                            <div className="flex flex-wrap justify-center items-center gap-4 text-xl font-bricolageBold">

                                <div className="text-4xl text-[#f5b75d]">
                                    ₹4,00,000
                                    <p className="text-xs text-gray-400 font-normal">
                                        (Approx. Net Profit)
                                    </p>
                                </div>

                                <span className="text-6xl">+</span>

                                <div className="text-4xl text-[#f5b75d]">
                                    ₹1,00,000
                                    <p className="text-xs text-gray-400 font-normal">
                                        (Approx. Other Income)                  </p>
                                </div>

                                <span className="text-6xl">=</span>

                                <div className="text-4xl text-[#60D186]">
                                    ₹5,00,000+
                                    <p className="text-xs text-gray-400 font-normal">
                                        Total Potential
                                    </p>
                                </div>



                            </div>

                        </div>
                        <p className="text-center text-sm text-gray-200 mt-6">
                            All figures are indicative and based on assumed averages. Actual results may vary depending on location, operations, and market conditions.                </p>
                    </div>
                </div>

                {/* FOOTER */}


            </div>
        </section>
    );
}