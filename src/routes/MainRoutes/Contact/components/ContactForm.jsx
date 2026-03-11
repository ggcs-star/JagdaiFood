import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import arrow from "../../../../assets/icons/select-arrow.svg";

export default function ContactForm() {
  return (
    <section className="bg-black py-[120px] px-[20px]">
     
      <div className="w-full flex justify-center px-[20px] mb-[100px] ">
        <h2
          className="
    w-full
    max-w-[1100px]
    h-[58px]
    text-center
    text-[#FFFFFF]
    text-[48px]
    leading-[56px]
    font-bricolageSemiBold
    flex
    items-center
    justify-center
  "
        >
          Send a Message
        </h2>
      </div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[40px]">
       
        <div className="w-full lg:w-[360px] flex flex-col gap-[24px] items-center lg:items-start">
         
          <div className="bg-[#262626] w-full lg:w-[360px] h-[143px] rounded-[24px] flex justify-center items-center">
            <div className="w-[260px] flex items-center">
              <div className="w-[50px] h-[50px] bg-[#FDBD5B] rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-black text-[16px]" />
              </div>

              <div className="ml-[16px]">
                <p className="text-[#AFAFAF] text-[14px] font-inter mb-[6px]">
                  For Franchise
                </p>

                <p className="text-[#FDBD5B] text-[20px] font-bricolageSemiBold">
                  +91 78629 31074
                </p>
              </div>
            </div>
          </div>

          
          <div className="bg-[#262626] w-full lg:w-[360px] lg:h-[517px] rounded-[24px] flex justify-center">
            <div className="w-[260px] pt-[28px] pb-[28px]">
              <p className="text-[#60D186] text-[20px] font-bricolageSemiBold mb-[24px]">
                Location
              </p>

              <p className="text-white text-[18px] leading-[28px] font-inter mb-[28px]">
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

              <div className="w-full h-[223px] rounded-[20px] overflow-hidden">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=Global%20Garner%20Sales%20Services%20Limited%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-[#262626] w-full lg:w-[820px] lg:h-[680px] rounded-[24px] flex items-center">
          <div className="w-full lg:w-[720px] mx-auto p-[30px] lg:p-0">
           
            <div className="flex flex-col sm:flex-row gap-[30px] mb-[29px]">
              <div className="flex-1">
                <label className="text-white text-[16px] mb-[6px] block">
                  Franchise Model
                </label>

                <div className="relative">
                  <select className="w-full h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[16px] pr-[40px] text-[#D1D1D1] appearance-none">
                    <option>Select</option>
                  </select>

                  <img
                    src={arrow}
                    alt="arrow"
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[10px] h-[6px]"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="text-white text-[16px] mb-[6px] block">
                  Franchise Options
                </label>

                <div className="relative">
                  <select className="w-full h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[16px] pr-[40px] text-[#D1D1D1] appearance-none">
                    <option>Select</option>
                  </select>

                  <img
                    src={arrow}
                    alt="arrow"
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[10px] h-[6px]"
                  />
                </div>
              </div>
            </div>

           
            <div className="flex flex-col sm:flex-row gap-[30px] mb-[29px]">
              <div className="flex-1">
                <label className="text-white text-[16px] mb-[6px] block">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[16px] text-white"
                />
              </div>

              <div className="flex-1">
                <label className="text-white text-[16px] mb-[6px] block">
                  Mobile Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[16px] text-white"
                />
              </div>
            </div>

           
            <div className="mb-[29px]">
              <label className="text-white text-[16px] mb-[6px] block">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-[52px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[16px] text-white"
              />
            </div>

            
            <div className="mb-[29px]">
              <label className="text-white text-[16px] mb-[6px] block">
                Message
              </label>

              <textarea
                placeholder="Write here..."
                className="w-full h-[140px] bg-transparent border border-[#A9A9A9] rounded-[10px] px-[16px] py-[12px] text-white"
              />
            </div>

           
            <button className="w-[114px] h-[48px] bg-[#FDBD5B] text-black rounded-[25px] font-bricolageSemiBold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
