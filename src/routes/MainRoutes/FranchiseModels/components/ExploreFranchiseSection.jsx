import React from "react";
import { useNavigate } from "react-router-dom";
import master from "../../../../assets/franchisemodels/MasterFranchise1.png";

export default function ExploreFranchiseSection() {
  const navigate = useNavigate();

  const items = [
    "Agreement Structure",
    "Investment Breakdown",
    "Unit Economics",
    "Location Analysis",
  ];

  return (
    <section className="w-full">

      {/* MAIN CARD */}
      <div
        className="relative w-full max-w-[1100px] 
        min-h-[520px] md:h-[495px] 
        rounded-[20px] md:rounded-[24px] 
        overflow-hidden mx-auto px-4 sm:px-6 md:px-0 py-6 md:py-0"
        style={{
          background: "linear-gradient(97deg,#60D186 0%,#FDBD5B 100%)",
        }}
      >

        {/* LEFT CONTENT */}
        <div className="h-full flex flex-col justify-center 
        pl-0 md:pl-[60px] 
        pr-0 md:pr-[40px] 
        max-w-full md:max-w-[600px]">

          {/* HEADING */}
          <h2 className="text-black 
          text-[22px] sm:text-[28px] md:text-[36px] 
          leading-[30px] sm:leading-[36px] md:leading-[44px] 
          font-bricolageBold 
          whitespace-normal md:whitespace-nowrap">
            Ready to Explore Your Franchise Opportunity?
          </h2>

          {/* SUBTEXT */}
          <p className="mt-[12px] md:mt-[14px] text-black text-[14px] md:text-[16px]">
            Speak with our franchise advisor to understand:
          </p>

          {/* LIST */}
          <div className="mt-[18px] md:mt-[24px] space-y-[14px] md:space-y-[18px]">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] md:gap-[14px]">

                {/* CHECK ICON */}
                <div className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] rounded-full bg-[#FDBD5B] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12L10 17L19 7"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-black text-[15px] md:text-[18px] font-semibold">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-[24px] md:mt-[30px] 
            w-full sm:w-[260px] h-[46px] md:h-[48px] 
            bg-[#252525] rounded-[8px] 
            text-white text-[14px] md:text-[16px] font-semibold">
            Talk to Franchise Advisor
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <img
          src={master}
          alt="franchise"
    className="
absolute 
bottom-[-20px] sm:bottom-[-25px] md:bottom-0 
right-[-10px] sm:right-[-20px] md:right-[-30px]

h-[260px] sm:h-[320px] md:h-[105%]

w-auto object-contain
"
        />

      </div>

    </section>
  );
}