import React, { useState } from "react";
import whyReturns from "../../../../assets/thumbnail2.png";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[60px] lg:px-[120px]">

        {/* ===== TOP SECTION ===== */}
        <div className="pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[60px] md:pb-[70px] lg:pb-[80px] text-center">
          <h1 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[56px] font-bricolageSemiBold">
            Trolley on Rent
          </h1>

          <p className="text-[#60D186] text-[16px] md:text-[18px] lg:text-[20px] mt-[10px] font-bricolageBold">
            Earn upto ₹5,000 Daily
          </p>
        </div>

        {/* ===== CONTENT SECTION ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px] pb-[80px] lg:pb-[120px]">

          {/* LEFT VIDEO / IMAGE */}
          <div className="w-full max-w-[575px] h-[220px] sm:h-[300px] md:h-[350px] lg:h-[397px] rounded-[20px] overflow-hidden relative cursor-pointer">

            {!playVideo ? (
              <>
                {/* Thumbnail Image */}
                <img
                  src={whyReturns}
                  alt="video thumbnail"
                  className="w-full h-full object-contain"
                />

                {/* Play Button */}
                <div
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-black/70 border border-[#FDBD5B] flex items-center justify-center">
                    <FaPlay className="text-[#FDBD5B] text-[18px] ml-[2px]" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/a8cCnoNeI7w?autoplay=1"
                title="Food Business Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* RIGHT CONTENT (unchanged) */}
          <div className="w-full max-w-[575px]">
            <h2 className="text-[#FDBD5B] text-[22px] md:text-[26px] lg:text-[30px] font-bricolageBold text-center lg:text-left">
              India’s First Fixed-Pay Food Business Model
            </h2>

            <p className="mt-[10px] text-white text-[16px] md:text-[18px] font-bricolageBold text-center lg:text-left">
              No Sharing. No Commission. No Risk.
            </p>

            <p className="mt-[10px] text-[#FFFFFF] text-[14px] md:text-[15px] lg:text-[16px] opacity-80 text-center lg:text-left">
              Pay only ₹18,000/month or ₹5,000/week to run your own branded food
              trolley anywhere, anytime — all income is 100% yours.
            </p>

            {/* CARD */}
            <div
              className="mt-[20px] md:mt-[24px] w-full lg:w-[573px] rounded-[15px] flex flex-col justify-center px-[16px] md:px-[20px] py-[16px]"
              style={{
                border: "1.5px solid transparent",
                backgroundImage: `
                  linear-gradient(93deg, #203027 0%, #322F20 100%),
                  linear-gradient(90deg, #60D186, #FDBD5B)
                `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 18px rgba(96, 209, 134, 0.18)",
              }}
            >
              <p className="text-[#d1d5db] text-[13px] font-semibold">
                Start Your Own Food Business
              </p>

              <p className="text-[#60D186] text-[18px] font-bricolageBold mt-[6px]">
                @ Just ₹18,000/Month or ₹5,000/Week
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;