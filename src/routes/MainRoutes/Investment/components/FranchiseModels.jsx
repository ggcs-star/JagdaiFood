import React from "react";
import { Check } from "lucide-react";
import stall from '../../../../assets/investment/stall.png'

export default function FranchiseModels() {
    return (
        <section className="bg-black py-8 px-3 lg:px-0">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-10 min-h-[920px]">

                {/* LEFT CARD */}
                <div className="bg-[#63b885] rounded-3xl p-3 lg:p-6 relative overflow-hidden ">

                    {/* Content */}
                    <div className="max-w-md pb-40">
                        <h2 className="text-3xl font-bricolageBold mb-4">
                            Food Tempo Franchise
                        </h2>

                        <p className="font-semibold mb-4">
                            Franchise Fee: ₹5,40,000 (+ GST)
                        </p>

                        <p className="text-gray-800 mb-6">
                            Mobile commercial food vehicle powered by centralized supply.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-6">
                            {[
                                "No fixed location constraint",
                                "In-built freezer",
                                "Modern design",
                                "Central kitchen food supply",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-xs">
                                        ✓
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-bricolageBold mb-6">
                            Royalty: 6% from Tempo revenue
                        </p>

                        {/* Add-ons */}
                        <div className="bg-white/40 rounded-xl p-5 w-[320px]">
                            <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                                ADD-ONS
                            </span>

                            <ul className="mt-3 space-y-1">
                                <li>UPOS – Digital Mall</li>
                                <li>Tapri Ki Tafri (₹1 Lakh Extra)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tempo Image */}
                    <img
                        src={stall}
                        alt="tempo"
                        className="absolute bottom-0 right-6 w-[500px] object-contain"
                    />
                </div>

                {/* RIGHT CARD */}
                <div className="bg-[#1c1c1c] rounded-3xl p-3 lg:p-6 text-white">

                        <h2 className="text-3xl font-bricolageBold mb-4">
                        Food Court Franchise (Chatori Gali)
                    </h2>

                    {/* TOP BOX */}
                    <div className="bg-black rounded-xl p-6 mt-6">
                        <p className="text-green-400 text-sm">Franchise Fee</p>
                        <p className="text-xl font-semibold">
                            ₹20,00,000 (+ GST)
                        </p>

                        <p className="text-green-400 text-sm mt-4">
                            Interior & Setup:
                        </p>
                        <p className="text-lg font-semibold">
                            Approx. ₹50 Lakhs
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-black rounded-xl p-5">
                            <p className="text-green-400 text-sm">Breakeven</p>
                            <p className="font-semibold">12 Months</p>
                        </div>

                        <div className="bg-black rounded-xl p-5">
                            <p className="text-green-400 text-sm">Gross Profit</p>
                            <p className="font-semibold">Approx. 35%</p>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm mt-6">
                        Includes POS, CCTV, fire system, licensing, branding, and
                        marketing framework.
                    </p>

                    <p className="text-gray-400 text-sm mt-2">
                        Designed for large-format operators.
                    </p>
                </div>

            </div>
        </section>
    );
}