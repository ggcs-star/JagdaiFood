import React from "react";

export default function FranchiseCTA() {
  return (
    <div className="w-full flex justify-center mt-[60px]">

      <div
        className="w-[1200px] h-[399px] rounded-[24px] flex flex-col items-center justify-center text-center px-[40px]"
        style={{
          background: "linear-gradient(95deg,#60D186 0%,#FDBD5B 100%)"
        }}
      >

        {/* Heading */}
        <h2 className="text-black text-[40px] leading-[50px] font-bricolageSemiBold mb-[14px]">
          Ready to Explore <br />
          Your Franchise Model?
        </h2>

        {/* Description */}
        <p className="text-black text-[18px] leading-[26px] font-inter max-w-[520px] mb-[30px]">
          Take the first step toward owning a multi-brand food <br/>business backed
          by systems and structure.
        </p>

        {/* Buttons */}
        <div className="flex gap-[18px]">

          {/* Button 1 */}
          <button className="bg-[#262626] text-white text-[16px] font-inter px-[26px] py-[12px] rounded-[10px] hover:opacity-90 transition">
            Schedule a Franchise Consultation
          </button>

          {/* Button 2 */}
          <button className="bg-white text-black text-[16px] font-inter font-semibold px-[26px] py-[12px] rounded-[10px] hover:opacity-90 transition">
            Download Investment Details
          </button>

        </div>

      </div>

    </div>
  );
}