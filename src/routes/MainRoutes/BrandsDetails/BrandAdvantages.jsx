import React from "react";
import { Check } from "lucide-react";

export default function BrandAdvantages() {
    return (
        <section className="bg-black text-white pt-8">
            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-center text-white text-2xl md:text-3xl font-bricolageBold mb-8">
                    Brand Advantages
                </h2>

                {/* TOP ROW */}
                <div className="grid md:grid-cols-2 gap-6 mb-6 ">

                    {/* CARD 1 */}
                    <div className="bg-[#2b2b2b] rounded-2xl py-5 px-4 flex items-center gap-3 justify-center md:justify-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center">
                            <Check size={14} className="text-black" />
                        </span>
                        <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
                            Stainless steel setup for premium quality & hygiene            </span>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center md:justify-start">
                        <span className="w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center">
                            <Check size={14} className="text-black" />
                        </span>
                        <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
                            Multiple revenue streams — earn royalties from attached businesses            </span>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6 ">

                    {/* CARD 1 */}
                    <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center md:justify-start">
                        <span className="w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center">
                            <Check size={14} className="text-black" />
                        </span>
                        <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
                            Earn by selling additional franchises
                        </span>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-[#2b2b2b] rounded-2xl py-5 px-6 flex items-center gap-3 justify-center md:justify-start">
                        <span className="w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center">
                            <Check size={14} className="text-black" />
                        </span>
                        <span className="text-gray-300 font-bricolageMedium text-sm md:text-base">
                            Free UPOS, Tapri Ki Tafri, and CashAqua water bottle SIS franchise included
                        </span>
                    </div>
                </div>


            </div>
        </section>
    );
}