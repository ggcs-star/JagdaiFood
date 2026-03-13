import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExploreFranchiseSection() {

  const navigate = useNavigate();
  
  const items = [
    { line1: "Agreement", line2: "structure" },
    { line1: "Investment", line2: "breakdown" },
    { line1: "Unit", line2: "economics" },
    { line1: "Location", line2: "analysis" },
  ];

  return (
    <section className="w-full bg-black flex justify-center mt-[40px] pb-[120px] px-[16px] md:px-[20px]">

      <div
        className="w-full max-w-[1200px] min-h-[475px] rounded-[24px] flex flex-col items-center text-center pt-[60px] md:pt-[90px] pb-[40px] px-[20px] md:px-[20px]"
        style={{
          background: "linear-gradient(96deg,#60D186 0%,#FDBD5B 100%)",
        }}
      >

        
        <h2 className="font-bricolageBold text-[26px] sm:text-[34px] md:text-[40px] leading-[34px] md:leading-[50px] text-black w-full max-w-[580px]">
          Ready to Explore Your Franchise Opportunity?
        </h2>

       
        <p className="mt-[14px] text-[15px] md:text-[18px] font-inter font-medium text-black">
          Speak with our franchise advisor to understand:
        </p>

        
        <div className="flex flex-wrap justify-center gap-[24px] md:gap-[70px] mt-[36px]">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-[12px] w-[140px] sm:w-[160px] md:w-[180px]"
            >

              <svg
                className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#FDBD5B" />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[16px] md:text-[20px] font-inter font-semibold text-black text-left leading-[22px] md:leading-[26px]">
                {item.line1}
                <br />
                {item.line2}
              </p>

            </div>
          ))}

        </div>

       
        <button
        onClick={()=>navigate("/contact")}
         className="mt-[40px] w-full max-w-[308px] h-[48px] bg-[#252525] rounded-[8px] text-white font-inter text-[16px] font-semibold hover:opacity-90 transition">
          Schedule a Franchise Consultation
        </button>

      </div>
    </section>
  );
}