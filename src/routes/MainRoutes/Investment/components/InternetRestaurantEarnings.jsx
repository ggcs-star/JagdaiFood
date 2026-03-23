"use client";

import React from "react";
import { ApplyButton } from "../../../../components/Button";

export default function InternetRestaurantEarnings() {
    return (
        <section className="bg-black text-white pt-8 pb-12 px-4 lg:px-10">
            <div className="max-w-7xl mx-auto">

{/* 
                <h2 className="text-center text-2xl lg:text-4xl mb-2 font-bricolageMedium">
                    Monthly Earning Potential of{" "}
                    <span className="text-[#FDBD5B] font-bricolageMedium">
                    </span>
                </h2> */}

                <div className="flex justify-center mb-2">
          <div
            className="px-6 py-3 lg:px-10 lg:py-4 rounded-xl text-center"
            style={{
              background:
                "linear-gradient(91deg, #203027 0%, #322F20 100%)",
            }}
          >
            <h2 className="text-white text-xl lg:text-3xl font-bricolageMedium">
              Monthly Earning Potential of{" "}
              <span className="text-[#FDBD5B]">Internet Restaurant
</span>
            </h2>
          </div>
        </div>

                <p className="text-center text-[#60D186] mb-10 font-semibold">
                    Run Digitally | Earn Passively | Scale Without Operations
                </p>

                {/* MAIN WRAPPER */}
                <div className="relative rounded-3xl overflow-hidden">

                    {/* TOP GLOW */}
                    <div className="absolute top-0 w-full h-24 bg-gradient-to-r from-transparent via-[#60D186]/30 to-transparent blur-2xl opacity-60" />

                    <div className="relative bg-[#1a1a1a] rounded-3xl p-6 border border-[#2a2a2a]">

                        {/* ================= TOP STATS ================= */}
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#FDBD5B] via-[#60D186] to-[#FDBD5B] mb-6">
                            <div className="bg-black rounded-2xl py-4 px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

                                <div className="py-3">
                                    <p className="font-bricolageBold text-xl">100</p>
                                    <p className="text-sm text-gray-400">Orders / Day</p>
                                </div>

                                <div className="py-3">
                                    <p className="font-bricolageBold text-xl">₹200</p>
                                    <p className="text-sm text-gray-400">Avg. Order Value</p>
                                </div>

                                <div className="py-3">
                                    <p className="font-bricolageBold text-xl">~3,000</p>
                                    <p className="text-sm text-gray-400">Monthly Orders</p>
                                </div>

                                <div className="bg-[#FDBD5B]/10 border border-[#FDBD5B] rounded-xl py-3">
                                    <p className="font-bricolageMedium text-lg text-[#FDBD5B]">
                                        ₹6,00,000
                                    </p>
                                    <p className="text-sm text-gray-400">Monthly Revenue</p>
                                </div>

                            </div>
                        </div>

                        {/* ================= MODELS ================= */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">

                            {/* FOCO */}
                            <div className="bg-black rounded-2xl p-6 text-center">
                                <h3 className="font-bricolageBold text-lg mb-1">
                                    FOCO Model
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Low Risk - Managed Operations
                                </p>

                                <div className="space-y-2 text-sm text-gray-300 mb-5">
                                    <p>✔ No Operational Involvement Required</p>
                                    <p>
                                        ✔ Revenue Share:{" "}
                                        <span className="text-[#FDBD5B] font-semibold">
                                            15%
                                        </span>
                                    </p>
                                </div>

                                <div className="bg-[#FDBD5B]/10 border border-[#FDBD5B] rounded-xl py-3">
                                    <p className="font-bricolageMedium text-2xl text-[#FDBD5B]">
                                        ₹78,000 <span className="text-white">Monthly Earnings</span>
                                    </p>
                                </div>
                            </div>

                            {/* FOFO */}
                            <div className="bg-black rounded-2xl p-6 text-center">
                                <h3 className="font-bricolageBold text-lg mb-1">
                                    FOFO Model
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    High Control - Higher Returns
                                </p>

                                <div className="space-y-2 text-sm text-gray-300 mb-5">
                                    <p>✔ No Major Operational Expenses</p>
                                    <p>
                                        ✔ Revenue Share:{" "}
                                        <span className="text-[#60D186] font-semibold">
                                            35%
                                        </span>
                                    </p>
                                </div>

                                <div className="bg-[#60D186]/10 border border-[#60D186] rounded-xl py-3">
                                    <p className="font-bricolageMedium text-2xl text-[#60D186]">
                                        ₹2,10,000 <span className="text-white">Monthly Earnings</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* ================= FINAL BAR ================= */}
                        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#FDBD5B] to-[#60D186]">
                            <div className="bg-gradient-to-r from-[#f5b75d] to-[#60D186] rounded-2xl py-6 text-center text-black">

                                <p className="font-bricolageBold text-2xl md:text-4xl">
                                    ₹6 Lac Revenue → 15% = ₹90k (FOCO) | 35% = ₹2.1 Lac (FOFO)
                                </p>

                                <p className="text-lg mt-1 opacity-80">
                                    Choose model based on involvement vs returns
                                </p>

                            </div>
                        </div>

                        {/* FOOTNOTE */}
                        <p className="text-center text-sm text-gray-200 mt-6">
                            Figures are indicative and for illustration purposes only.
                            Actual results may vary.
                        </p>

                    </div>
                </div>
                <div className="my-8 mx-auto flex justify-center">
                    <ApplyButton
                        onClick={() =>
                            navigate("/roi-calculator", {
                                state: {
                                    franchiseType: details?.franchiseType,
                                },
                            })
                        }
                    >
                        Calculate Your Monthly Earning Potential
                    </ApplyButton>
                </div>
            </div>
        </section>
    );
}