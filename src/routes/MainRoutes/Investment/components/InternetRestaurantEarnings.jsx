"use client";

import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ FIX ADDED
import { ApplyButton } from "../../../../components/Button";

export default function InternetRestaurantEarnings() {
    const navigate = useNavigate(); // ✅ FIX ADDED

    return (
        <section className="bg-black text-white pt-8 pb-12 px-0 lg:px-0">
            <div className="max-w-7xl mx-auto">

                <div className="flex justify-center mb-2">
                    <h2 className="text-white text-xl lg:text-5xl font-bricolageMedium text-center px-4">
                        Monthly Earning Potential of{" "}
                        <span className="text-[#FDBD5B]">Internet Restaurant</span>
                    </h2>
                </div>

                <p className="text-center text-[#60D186] text-base lg:text-2xl mb-6 lg:mb-10 font-semibold px-4">
                    Run Digitally | Earn Passively | Scale Without Operations
                </p>

                {/* MAIN WRAPPER */}
                <div className="relative rounded-3xl overflow-hidden">

                    {/* TOP GLOW */}
                    <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-transparent via-[#60D186]/30 to-transparent blur-2xl opacity-60" />

                    <div className="relative bg-[#1a1a1a] rounded-3xl p-4 lg:p-6 border border-[#2a2a2a]">

                        {/* TOP STATS */}
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#FDBD5B] via-[#60D186] to-[#FDBD5B] mb-6">
                            <div className="bg-black rounded-2xl py-3 lg:py-4 px-3 lg:px-4 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 text-center">

                                <div className="py-2 lg:py-3">
                                    <p className="font-bricolageBold text-base lg:text-xl">100</p>
                                    <p className="text-xs lg:text-sm text-gray-400">Orders / Day</p>
                                </div>

                                <div className="py-2 lg:py-3">
                                    <p className="font-bricolageBold text-base lg:text-xl">₹200</p>
                                    <p className="text-xs lg:text-sm text-gray-400">Avg. Order Value</p>
                                </div>

                                <div className="py-2 lg:py-3">
                                    <p className="font-bricolageBold text-base lg:text-xl">~3,000</p>
                                    <p className="text-xs lg:text-sm text-gray-400">Monthly Orders</p>
                                </div>

                                <div className="bg-[#FDBD5B]/10 border border-[#FDBD5B] rounded-xl py-2 lg:py-3">
                                    <p className="font-bricolageMedium text-sm lg:text-lg text-[#FDBD5B]">
                                        ₹6,00,000
                                    </p>
                                    <p className="text-xs lg:text-sm text-gray-400">Monthly Revenue</p>
                                </div>

                            </div>
                        </div>

                        {/* MODELS */}
                        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 mb-6">

                            {/* FOCO */}
                            <div className="bg-black rounded-2xl p-5 lg:p-6 text-center">
                                <h3 className="font-bricolageBold text-base lg:text-lg mb-1">
                                    FOCO Model
                                </h3>
                                <p className="text-gray-400 text-xs lg:text-sm mb-3 lg:mb-4">
                                    Low Risk - Managed Operations
                                </p>

                                <div className="space-y-2 text-xs lg:text-sm text-gray-300 mb-4 lg:mb-5">
                                    <p>✔ No Operational Involvement Required</p>
                                    <p>
                                        ✔ Revenue Share:{" "}
                                        <span className="text-[#FDBD5B] font-semibold">
                                            15%
                                        </span>
                                    </p>
                                </div>

                                <div className="bg-[#FDBD5B]/10 border border-[#FDBD5B] rounded-xl py-3">
                                    <p className="font-bricolageMedium text-lg lg:text-2xl text-[#FDBD5B]">
                                        ₹78,000{" "}
                                        <span className="text-white text-sm lg:text-base">
                                            Monthly Earnings
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* FOFO */}
                            <div className="bg-black rounded-2xl p-5 lg:p-6 text-center">
                                <h3 className="font-bricolageBold text-base lg:text-lg mb-1">
                                    FOFO Model
                                </h3>
                                <p className="text-gray-400 text-xs lg:text-sm mb-3 lg:mb-4">
                                    High Control - Higher Returns
                                </p>

                                <div className="space-y-2 text-xs lg:text-sm text-gray-300 mb-4 lg:mb-5">
                                    <p>✔ No Major Operational Expenses</p>
                                    <p>
                                        ✔ Revenue Share:{" "}
                                        <span className="text-[#60D186] font-semibold">
                                            35%
                                        </span>
                                    </p>
                                </div>

                                <div className="bg-[#60D186]/10 border border-[#60D186] rounded-xl py-3">
                                    <p className="font-bricolageMedium text-lg lg:text-2xl text-[#60D186]">
                                        ₹2,10,000{" "}
                                        <span className="text-white text-sm lg:text-base">
                                            Monthly Earnings
                                        </span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* FINAL BAR */}
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#FDBD5B] to-[#60D186]">
                            <div className="bg-gradient-to-r from-[#f5b75d] to-[#60D186] rounded-2xl py-4 lg:py-6 px-3 lg:px-6 text-center text-black">

                                <p className="font-bricolageBold text-xs sm:text-sm md:text-base lg:text-2xl xl:text-4xl">
                                    ₹6 Lac Revenue → 15% = ₹90k (FOCO) | 35% = ₹2.1 Lac (FOFO)
                                </p>

                                <p className="text-xs sm:text-sm md:text-base lg:text-2xl font-bold mt-1">
                                    Choose model based on involvement vs returns
                                </p>

                            </div>
                        </div>

                        {/* FOOTNOTE */}
                        <p className="text-center text-xs lg:text-sm text-gray-200 mt-6 px-2">
                            Figures are indicative and for illustration purposes only.
                            Actual results may vary.
                        </p>

                    </div>
                </div>

                {/* ✅ FIXED BUTTON */}
                <div className="my-6 lg:my-8 mx-auto flex justify-center px-4">
                    <ApplyButton
                        onClick={() => navigate("/roi-calculator")}
                    >
                        Calculate Your Monthly Earning Potential
                    </ApplyButton>
                </div>

            </div>
        </section>
    );
}