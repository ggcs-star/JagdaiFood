import React from "react";

export default function ServiceGrid() {

    const Tick = () => (
        <div className="w-5 h-5 bg-[#f4b552] text-black flex items-center justify-center rounded-full text-xs font-bold">
            ✓
        </div>
    );

    const cards = [
        {
            title: "Tiffin & Subscription Services",
            subtitle: "Daily meal solutions for:",
            points: [
                "Offices",
                "Working professionals",
                "Residential societies",
            ],
            desc: "Recurring revenue stream. High retention model.",
        },
        {
            title: "Spices & Gravy Pre-Mixes",
            subtitle: "Retail & D2C expansion through:",
            points: [
                "Standardized spice blends",
                "Ready-to-cook gravy mixes",
                "QSR retail distribution",
                "Direct-to-consumer channel",
            ],
            desc: "Brand extension beyond outlets.",
        },
        {
            title: "Frozen Food Division (Upcoming)",
            subtitle: "Entering packaged & ready-to-cook segment with:",
            points: [
                "Centralized production",
                "Retail scalability",
                "Export potential roadmap",
            ],
            desc: "Designed for national & global expansion.",
        },
        {
            title: "B2B Supply & Multi-Channel Distribution",
            subtitle: "",
            points: [
                "Bulk food supply",
                "Raw material distribution",
                "Franchise supply chain",
                "Institutional partnerships",
            ],
            desc: "Integrated backend ecosystem.",
        },
    ];

    return (
        <section className="bg-black pb-8 px-3 lg:px-0 text-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#1f1f1f] rounded-3xl p-4 lg:p-8 shadow-lg"
                    >
                        <h3 className="font-bricolageBold text-3xl mb-3">
                            {card.title}
                        </h3>

                        {card.subtitle && (
                            <p className="text-sm text-gray-400 mb-6">
                                {card.subtitle}
                            </p>
                        )}

                        <ul className="space-y-3 mb-5">
                            {card.points.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-200">
                                    <Tick />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-400 text-sm">
                            {card.desc}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}