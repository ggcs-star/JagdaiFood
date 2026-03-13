import React from "react";
import aboutBg from "../../../assets/aboutBg2.jpg";
import { Container } from "../../../components/Layout";
import { H3, P } from "../../../components/Typography";

export default function Hero({ details }) {

  const currentUrl = window.location.href;

  const paddingClass = currentUrl.includes("/franchise-details?type=internet-restaurants-franchise") ? "pt-96 lg:pt-0 " : "pt-14";

  return (
    <>
      <div className="relative bg-black">


            <div className="pt-16">
                  <div className="text-center lg:py-0 py-10 ">
                    <h1 className="px-3 lg:px-0 text-white text-3xl md:text-5xl font-bricolageSemiBold leading-tight mb-2">
              {details?.title}
                    </h1>
        
                    {/* <P className="!text-xl !text-yellow-100 py-5 px-8 my-8 border-4 border-gray-500 rounded-full w-fit mx-auto">
                {item?.shortDesc}
              </P> */}
        
                    <P className="px-3 lg:px-0 lg:w-[60%] mx-auto pt-4 text-gray-100">{details?.info}</P>
        
        
                  </div>
                </div>
        
      </div>
    </>
  );
}
