import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import arrow from "../../../../assets/icons/select-arrow.svg";

export default function ContactForm() {
  return (
    <section className="bg-black py-[60px] sm:py-[80px] lg:py-[120px] px-[16px] sm:px-[20px]">
      
      {/* Heading */}
      <div className="w-full flex justify-center mb-[50px] sm:mb-[70px] lg:mb-[100px]">
        <h2 className="w-full max-w-[1100px] text-center text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-tight font-bricolageSemiBold">
          Send a Message
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
        
        {/* Left Section */}
        <div className="w-full lg:w-[360px] flex flex-col gap-[20px] items-center lg:items-start">
          
          {/* Phone */}
          <div className="bg-[#262626] w-full rounded-[20px] p-[20px] flex justify-start lg:justify-center items-center">
            <div className="w-full max-w-[260px] flex items-center">
              <div className="w-[45px] h-[45px] bg-[#FDBD5B] rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-black text-[14px]" />
              </div>

              <div className="ml-[12px]">
                <p className="text-[#AFAFAF] text-[13px] mb-[4px]">
                  For Franchise
                </p>

                <a href="tel:+918866373077">
                  <p className="text-[#FDBD5B] text-[18px] sm:text-[20px] font-bricolageSemiBold">
                    +91 88663 73077
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#262626] w-full rounded-[20px] p-[20px]">
            <p className="text-[#60D186] text-[18px] sm:text-[20px] font-bricolageSemiBold mb-[16px]">
              Location
            </p>

            <p className="text-white text-[15px] sm:text-[16px] leading-[24px] mb-[20px]">
              5th Floor, Grand Emporio,
              <br />
              Shiv Habitat B-Block, Motera
              <br />
              Stadium Rd, opp. S Mall,
              <br />
              Motera, Ahmedabad, Gujarat
              <br />
              380005
            </p>

            <div className="w-full h-[180px] sm:h-[220px] rounded-[16px] overflow-hidden">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Global%20Garner%20Sales%20Services%20Limited%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-[#262626] w-full lg:w-[820px] rounded-[20px] flex items-center">
          <div className="w-full lg:w-[720px] mx-auto p-[20px] sm:p-[30px]">
            
            {/* Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] mb-[20px] sm:mb-[29px]">
              
              <div className="flex-1">
                <label className="text-white text-[14px] sm:text-[16px] mb-[6px] block">
                  Franchise Model
                </label>

                <div className="relative">
                  <select className="w-full h-[48px] sm:h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[14px] pr-[36px] text-[#D1D1D1] appearance-none">
                    <option>Select</option>
                  </select>

                  <img
                    src={arrow}
                    alt="arrow"
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px]"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="text-white text-[14px] sm:text-[16px] mb-[6px] block">
                  Franchise Options
                </label>

                <div className="relative">
                  <select className="w-full h-[48px] sm:h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[14px] pr-[36px] text-[#D1D1D1] appearance-none">
                    <option>Select</option>
                  </select>

                  <img
                    src={arrow}
                    alt="arrow"
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[10px]"
                  />
                </div>
              </div>
            </div>

            {/* Name + Mobile */}
            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] mb-[20px] sm:mb-[29px]">
              
              <div className="flex-1">
                <label className="text-white text-[14px] sm:text-[16px] mb-[6px] block">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[48px] sm:h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[14px] text-white"
                />
              </div>

              <div className="flex-1">
                <label className="text-white text-[14px] sm:text-[16px] mb-[6px] block">
                  Mobile Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full h-[48px] sm:h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[14px] text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-[20px] sm:mb-[29px]">
              <label className="text-white text-[14px] sm:text-[16px] mb-[6px] block">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-[48px] sm:h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[14px] text-white"
              />
            </div>

            {/* Message */}
            <div className="mb-[20px] sm:mb-[29px]">
              <label className="text-white text-[14px] sm:text-[16px] mb-[6px] block">
                Message
              </label>

              <textarea
                placeholder="Write here..."
                className="w-full h-[120px] sm:h-[140px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[14px] py-[10px] text-white"
              />
            </div>

            {/* Button */}
            <button className="w-full sm:w-[140px] h-[45px] sm:h-[48px] bg-[#FDBD5B] text-black rounded-[25px] font-bricolageSemiBold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}