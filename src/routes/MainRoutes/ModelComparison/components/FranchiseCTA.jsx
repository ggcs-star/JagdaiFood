import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function FranchiseCTA() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center pb-[20px] px-[20px] lg:mt-8">

      <div
        className="
        w-full
        max-w-7xl

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
          Start Your Food
          <br className="hidden sm:block" />
          Franchise Journey        </h2>


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


         <button
  onClick={() =>
        window.open("https://wa.me/918866373077", "_blank")

  }
  className="flex items-center justify-center gap-2 cursor-pointer bg-[#262626] text-white text-[15px] sm:text-[16px] font-inter px-[24px] py-[12px] rounded-[10px] hover:opacity-90 transition"
>
  <FaWhatsapp size={20} />
  <span>Schedule Consultation</span>
</button>


          <a
            href="https://docs.google.com/presentation/d/1ZPjTRlHECxbquTQxWZ732k20ZsFYlWao/edit?usp=sharing&ouid=104598933576124029697&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black px-4 sm:px-5 lg:px-6 py-3 rounded-lg font-medium hover:opacity-90 transition text-center"
          >
            Download PPT
          </a>


        </div>

      </div>
    </div>
  );
}