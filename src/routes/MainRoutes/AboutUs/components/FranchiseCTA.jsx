import React from "react";
import { useNavigate } from "react-router-dom";

export default function FranchiseCTA() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center mt-[40px] px-[20px]">

      <div
        className="
        w-full
        max-w-[1200px]

        min-h-[399px]
        lg:h-[399px]

        rounded-[24px]

        flex
        flex-col
        items-center
        justify-center
        text-center

        px-[24px]
        sm:px-[40px]

        py-[40px]
        sm:py-[50px]
        "
        style={{
          background: "linear-gradient(95deg,#60D186 0%,#FDBD5B 100%)"
        }}
      >

        
        <h2
          className="
          text-black

          text-[28px]
          sm:text-[34px]
          lg:text-[40px]

          leading-[36px]
          sm:leading-[44px]
          lg:leading-[50px]

          font-bricolageSemiBold
          mb-[14px]
          "
        >
          Ready to Explore <br className="hidden sm:block" />
          Your Franchise Model?
        </h2>

        
        <p
          className="
          text-black

          text-[15px]
          sm:text-[16px]
          lg:text-[18px]

          leading-[22px]
          lg:leading-[26px]

          font-inter
          max-w-[520px]

          mb-[28px]
          sm:mb-[30px]
          "
        >
          Take the first step toward owning a multi-brand food
          <br className="hidden sm:block" />
          business backed by systems and structure.
        </p>

        
        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-[14px]
          sm:gap-[18px]
          "
        >

          
          <button onClick={()=> navigate("/contact")}
           className="bg-[#262626] text-white text-[15px] sm:text-[16px] font-inter px-[24px] py-[12px] rounded-[10px] hover:opacity-90 transition">
            Schedule a Franchise Consultation
          </button>

          
          <button className="bg-white text-black text-[15px] sm:text-[16px] font-inter font-semibold px-[24px] py-[12px] rounded-[10px] hover:opacity-90 transition">
            Download Investment Details
          </button>

        </div>

      </div>
    </div>
  );
}