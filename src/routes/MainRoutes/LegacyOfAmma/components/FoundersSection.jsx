import React from "react";
import bg from "../../../../assets/legacyofamma/greenbg.png";
import founders from "../../../../assets/legacyofamma/sir.png";
import visionIcon from "../../../../assets/legacyofamma/vision.png";
import missionIcon from "../../../../assets/legacyofamma/mission.png";

export default function FoundersSection() {
    return (
        <section className="px-3 lg:px-0 bg-black py-8 lg:py-20 relative overflow-hidden">

            {/* Title */}
            <h2 className="text-center text-white text-3xl font-bricolageBold mb-16">
                Founder's Of Jagdai Foods
            </h2>

            <div className="relative max-w-6xl mx-auto min-h-[520px]">

                {/* Green Background */}
                <img
                    src={bg}
                    alt=""
                    className="absolute top-4 left-0 w-full object-contain z-0"
                />

                {/* Founders Image */}
                <div className="relative z-10 flex justify-center">
                    <img
                        src={founders}
                        alt="Founders"
                        className="h-[380px] md:h-[420px] object-contain"
                    />
                </div>

                {/* Vision & Mission Cards */}
                <div className="relative z-20 grid md:grid-cols-2 gap-8 -mt-24">

                    {/* Vision */}
                    <div className="bg-[#2b2b2b] rounded-2xl p-3 lg:p-8 text-white shadow-xl">

                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                            <img
                                src={visionIcon}
                                alt="Vision"
                                className="w-6 h-6 object-contain"
                            />
                        </div>

                        <h3 className="font-bricolageBold text-xl mb-4">
                            Our Vision
                        </h3>

                        <p className="text-gray-300 mb-6">
                            To build a technology-enabled, brand-agnostic food franchise ecosystem
                            that empowers entrepreneurs with predictable returns, operational ease,
                            and growth potential across formats and locations.
                        </p>

                         <p className="text-gray-300 mb-2">
                         We are committed to:
                        </p>

                        <ul className="space-y-3 text-gray-300">
                            {[
                                "Consistent quality delivery",
                                "Scalable franchise infrastructure",
                                "Technology-driven expansion",
                                "Partner success and profit growth",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-black text-xs font-bold">✓</span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission */}
                    <div className="bg-[#2b2b2b] rounded-2xl p-3 lg:p-8 text-white shadow-xl">

                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                            <img
                                src={missionIcon}
                                alt="Mission"
                                className="w-6 h-6 object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bricolageBold mb-4">
                            Our Mission
                        </h3>

                        <p className="text-gray-300 mb-6">
                            To make food entrepreneurship accessible, structured, and profitable —
                            blending the best of culinary authenticity with systems, data,
                            and technology.
                        </p>

                                      <p className="text-gray-300 mb-2">
We believe in:
                        </p>

                        <ul className="space-y-3 text-gray-300">
                            {[
                                "Empowering micro & macro entrepreneurs",
                                "Building long-term transparent partnerships",
                                "Delivering excellence in taste and operations",
                                "Driving franchise success with measurable results",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-black text-xs font-bold">✓</span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}