import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Container } from "../../../../components/Layout";
import videoThumb from "../../../../assets/thumbnail1.png";

export default function FiveFranchise() {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <section className="bg-black py-4 sm:py-6 lg:py-8 text-white">
            <Container>
                <div className="relative rounded-[20px] sm:rounded-[30px] bg-gradient-to-r from-[#2d2d2d] to-[#1f1f1f] pt-6 px-4 sm:px-6 lg:p-0 overflow-hidden">

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

                        {/* ===== LEFT CONTENT (UPDATED) ===== */}
                        <div className="px-2 sm:px-4 md:px-8 lg:p-14">

                            <h2 className="font-bricolageBold text-2xl sm:text-3xl md:text-4xl leading-snug mb-4 md:mb-6">
                                Jagdai Foods All Franchise <br />
                                in 5 Minutes
                            </h2>

                            <p className="text-gray-300 text-sm sm:text-base mb-6">
                                Get a complete overview of Jagdai Foods' franchise ecosystem in
                                just 5 minutes. Discover multiple business formats including QSR,
                                cloud kitchens, food trolleys, and more — all designed to help
                                you start fast, scale quickly, and maximize your profits in the
                                food industry.
                            </p>

                            <p className="text-gray-200 text-base sm:text-lg">
                                A smart, scalable, and future-ready food business opportunity.
                            </p>

                        </div>

                        {/* ===== RIGHT SIDE (VIDEO + IMAGE SAME LAYOUT) ===== */}
                      {/* ===== RIGHT SIDE (VIDEO CENTERED) ===== */}
<div className="relative h-[260px] sm:h-[320px] md:h-[400px] lg:h-full flex items-center py-8 justify-center">

    <div className="w-[90%] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[400px] rounded-[16px] overflow-hidden z-10 cursor-pointer">

        {!playVideo ? (
            <>
                <img
                    src={videoThumb}
                    alt="Franchise Video"
                    className="w-full h-full object-cover rounded-[16px]"
                />

                <div
                    onClick={() => setPlayVideo(true)}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-[60px] h-[60px] rounded-full bg-black/70 border border-[#FDBD5B] flex items-center justify-center">
                        <FaPlay className="text-[#FDBD5B] text-[18px] ml-[2px]" />
                    </div>
                </div>
            </>
        ) : (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G6fWrRyl4Ak?autoplay=1"
                title="Jagdai Foods Franchise Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        )}
    </div>
</div>

                    </div>

                </div>
            </Container>
        </section>
    );
}