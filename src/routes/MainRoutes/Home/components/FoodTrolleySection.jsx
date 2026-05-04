import React from "react";
import image from "../../../../assets/home/FoodTrolleySection/Food_Tempo.png";
import image1 from "../../../../assets/home/FoodTrolleySection/Food_Tempo2.png";
import trolly from "../../../../assets/home/FoodTrolleySection/Trolly1.png";
import { Link } from "react-router-dom";
import trolleyBg from "../../../../assets/home/herosection/buttonimage.png"; // 👈 add your screenshot here

export default function FoodTrolleyFranchise() {
  return (
    <div className="bg-black flex items-center justify-center px-4 pb-6 ">
      {/* MAIN CARD */}
      <div className="w-full md:h-[760px] h-[680px] max-w-7xl rounded-3xl bg-[#262626] p-8 md:p-6 border border-gray-800 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
        <div
          className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] h-[150px] md:h-[200px]
          bg-[radial-gradient(circle,rgba(34,197,94,0.25),transparent_70%)]
          blur-2xl"
        ></div>

        <div className="text-center mb-4 relative z-10">
          <h1 className="text-xl md:text-4xl font-bold text-white font-bricolageBold">
            Food Trolley/Tempo Franchise
          </h1>

          <p className="font-bricolageSemiBold text-white text-[12px] md:text-[16px]">
            A smart, mobile food business — not just a cart.
          </p>

          <p className="relative inline-block text-[#FDBD5B] font-semibold mt-1 mb-1 text-lg">
            Starting At ₹2.7 Lakhs + GST Or Own It At ₹18k P/M On Rent
            {/* GREEN UNDERLINE */}
            <span className="absolute left-35 -translate-x-1/2 bottom-[-6px] w-[19%] h-[3px] mb-1 bg-green-400 rounded-full"></span>
          </p>

          <p className="font-bricolageSemiBold text-white text-sm">
            with earning potential up to ₹90,000 per month
          </p>
        </div>

        <div className="relative flex items-center justify-center md:h-[420px] h-[300px]">
          {/* 🔥 CENTER GLOW (COVERS BOTH IMAGES) */}

          <div className="md:absolute md:top-[10%] md:left-1/2 md:-translate-x-1/2 md:w-[350px] md:h-[350px] md:bg-[#60D186] md:opacity-88 md:blur-[30px] md:rounded-full md:pointer-events-none"></div>
          <div className="md:hidden absolute top-[5%] left-1/2 -translate-x-1/2 w-[120px] h-[100px] bg-[#60D186] opacity-88 blur-[30px] rounded-full pointer-events-none"></div>

          <div className="hidden md:flex flex-col absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-10">
            <div
              className="relative px-5 h-[60px] flex items-center rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md left-5
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>

              <p className="pl-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Fully mobile setup — operate at high-demand locations
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-13 
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Start earning from day one with a daily cash flow model
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-13
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                No kitchen required – plug-and-play setup
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-13
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Compact, modern, and attractive design
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-5 left-5
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Centralized kitchen supply for consistent quality
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-16 flex items-center justify-center md:gap-6">

            {/* 📱 MOBILE IMAGE */}
            <div className="md:hidden w-full flex justify-center items-center">
              <img
                src={trolly}
                alt="mobile design"
                className="max-w-[310px] mb-8"
              />
            </div>

            {/* 🖥️ DESKTOP IMAGES */}
            <div className="hidden md:flex items-end justify-center gap-6 relative">

              {/* LEFT IMAGE */}
              <img
                src={image}
                alt="tempo"
                className="w-[260px] h-[300px] object-contain
      drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />

              {/* RIGHT IMAGE (slightly elevated instead of overlapping) */}
              <img
                src={image1}
                alt="trolley box"
                className="w-[280px] h-[320px] object-contain
      -translate-y-4
      drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              />

            </div>
          </div>

          <div className="hidden md:flex flex-col absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-10">
            <div
              className="relative px-5 h-[60px] flex items-center rounded-r-2xl rounded-l-none text-sm max-w-[300px]
  bg-gradient-to-l from-[#3a3a3a] to-transparent backdrop-blur-md right-2
  border-r border-t border-b border-gray-500/20 right-5
  shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                In-built freezer / hotpot <br></br>system
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 left-13
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Easy to relocate based on demand and season
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 left-13
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Expand into catering, events & bulk orders
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 left-13
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Earn 9% ROI or 5% of total billing (whichever is higher)
              </p>
            </div>

            <div
              className="relative px-5 h-[60px] flex items-center rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-5
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 font-bricolageSemiBold text-[16px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Profit structure <br />
                up to 35%
              </p>
            </div>
          </div>

          <Link
            to="/franchise-formats/food-trolley-franchise"
            className="z-50 flex lg:hidden absolute mt-[200px] left-1/2 -translate-x-1/2 w-72 h-12 sm:h-14 items-center justify-center rounded-md overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* DARK OVERLAY (improves visibility) */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* CONTENT */}
            <div
              className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold text-center px-2"
              style={{
                animation: "blink 1.2s ease-in-out infinite",
              }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                Food Trolley            </span>

              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </Link>
            <Link
            to="/franchise-formats/food-tempo-franchise"
            className="z-50 flex lg:hidden absolute mt-[320px] left-1/2 -translate-x-1/2 w-72 h-12 sm:h-14 items-center justify-center rounded-md overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* DARK OVERLAY (improves visibility) */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* CONTENT */}
            <div
              className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold text-center px-2"
              style={{
                animation: "blink 1.2s ease-in-out infinite",
              }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                Food Tempo            </span>

              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </Link>
          <Link
            to="/trolly"
            className="z-50 flex lg:hidden absolute mt-[450px] left-1/2 -translate-x-1/2 w-72 h-12 sm:h-14 items-center justify-center rounded-md overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* DARK OVERLAY (improves visibility) */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* CONTENT */}
            <div
              className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold text-center px-2"
              style={{
                animation: "blink 1.2s ease-in-out infinite",
              }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                Trolley on Rent
              </span>

              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </Link>
        </div>




        <div className="hidden lg:flex flex flex-col items-center justify-center gap-4 relative z-10">
          <div
            className="relative px-8 py-4 rounded-xl
            bg-[linear-gradient(180deg,#505050,rgba(38,38,38,0))]
            backdrop-blur-md
            border border-white/10
            shadow-[0_0_30px_rgba(255,255,255,0.08)]
            text-center font-bricolageSemiBold text-[16px]"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-yellow-400 rounded-full"></span>

            <p className="text-[18px] leading-[24px] font-medium text-white">
              Estimated ROI:{" "}
              <span className="text-yellow-400 font-medium">30%+ annually</span>
            </p>
          </div>

          {/* Trolley on Rent Button */}
          <div className="flex w-full gap-4 justify-center">

          <Link
            to="/franchise-formats/food-trolley-franchise"
            className="mt-4 relative w-full max-w-7xl mx-auto h-12 sm:h-14 flex items-center justify-center rounded-md overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* CONTENT */}
            <div
              className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold text-center px-3 w-full"
              style={{
                animation: "blink 1.2s ease-in-out infinite",
              }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                Food Trolley
              </span>

              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </Link>

          <Link
            to="/franchise-formats/food-tempo-franchise"
            className="mt-4 relative w-full max-w-7xl mx-auto h-12 sm:h-14 flex items-center justify-center rounded-md overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* CONTENT */}
            <div
              className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold text-center px-3 w-full"
              style={{
                animation: "blink 1.2s ease-in-out infinite",
              }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                Food Tempo
              </span>

              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </Link>

          {/* TROLLEY ON RENT BUTTON */}
          <Link
            to="/trolly"
            className="mt-4 relative w-full max-w-7xl mx-auto h-12 sm:h-14 flex items-center justify-center rounded-md overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* CONTENT */}
            <div
              className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold text-center px-3 w-full"
              style={{
                animation: "blink 1.2s ease-in-out infinite",
              }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                Trolley on Rent
              </span>

              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </Link>
</div>
        </div>
      </div>
    </div>
  );
}