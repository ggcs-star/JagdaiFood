import React from "react";
import { Container } from "../../../../components/Layout";

import bag from "../../../../assets/home/capital/bag.png";
import icon1 from "../../../../assets/home/capital/icon1.png";
import icon2 from "../../../../assets/home/capital/icon2.png";
import icon3 from "../../../../assets/home/capital/icon3.png";
import icon4 from "../../../../assets/home/capital/icon4.png";
import icon5 from "../../../../assets/home/capital/icon5.png";

export default function CapitalGuarantee() {

    const features = [
        {
            icon: icon1,
            text: "Capital protected under agreement terms",
        },
        {
            icon: icon2,
            text: "Eligible after 9 years & permanent closure",
        },
        {
            icon: icon3,
            text: "Infrastructure remains company property",
        },
        {
            icon: icon4,
            text: "Refund adjusted for dues",
        },
        {
            icon: icon5,
            text: "Setup cost guaranteed only if done by company",
        },
    ];

    return (
        <section className="bg-black py-8">
            <Container>

                {/* Main Card */}
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#6BC07F] to-[#F2B44F] p-10 md:p-8">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT SIDE */}
                        <div className="relative h-full flex flex-col justify-start pt-4">

                            <h2 className="font-bricolageBold text-3xl md:text-4xl text-black mb-6 leading-tight">
                                Capital <br /> Guarantee
                            </h2>

                            {/* Bag Image */}
                            <img
                                src={bag}
                                alt="capital"
                                className="absolute bottom-0 left-0 w-[260px] md:w-[320px] object-contain"
                            />

                        </div>


                        {/* RIGHT SIDE FEATURES */}
                        <div className="space-y-5">

                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-[#F7E3A5] rounded-xl px-2 py-4 shadow-sm"
                                >

                                    {/* Icon */}
                                    <div className="w-[44px] h-[44px] rounded-xl bg-[#F3B24C] flex items-center justify-center">

                                        <img
                                            src={item.icon}
                                            alt="icon"
                                            className="w-8 h-8 object-contain"
                                        />

                                    </div>

                                    {/* Text */}
                                    <p className="text-black font-medium text-sm md:text-base">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}