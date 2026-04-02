

import React, { useEffect, useState } from "react";
import BrandsPower from "./BrandsPower";
import styled, { createGlobalStyle } from "styled-components";

import icon1 from "../../../../assets/home/corepower/icon1.png";
import icon2 from "../../../../assets/home/corepower/icon2.png";
import icon3 from "../../../../assets/home/corepower/icon3.png";
import icon4 from "../../../../assets/home/corepower/icon4.png";
import icon5 from "../../../../assets/home/corepower/icon5.png";
import icon6 from "../../../../assets/home/corepower/icon6.png";
import icon7 from "../../../../assets/home/corepower/icon7.png";
import icon8 from "../../../../assets/home/corepower/icon8.png";
import icon9 from "../../../../assets/home/corepower/icon9.png";
import icon10 from "../../../../assets/home/corepower/icon10.png";
import icon11 from "../../../../assets/home/corepower/icon11.png";
import icon12 from "../../../../assets/home/corepower/icon12.png";
import icon13 from "../../../../assets/home/corepower/icon13.png";
import icon14 from "../../../../assets/home/corepower/icon14.png";
import icon15 from "../../../../assets/home/corepower/icon15.png";
import icon16 from "../../../../assets/home/corepower/icon16.png";
import icon17 from "../../../../assets/home/corepower/icon17.png";
import icon18 from "../../../../assets/home/corepower/icon18.png";
import icon19 from "../../../../assets/home/corepower/icon19.png";
import icon20 from "../../../../assets/home/corepower/icon20.png";
import icon21 from "../../../../assets/home/corepower/icon21.png";
import icon22 from "../../../../assets/home/corepower/icon22.png";
import icon23 from "../../../../assets/home/corepower/icon23.png";
import icon26 from "../../../../assets/home/corepower/icon1.png";
import icon27 from "../../../../assets/home/corepower/icon2.png";

import free from "../../../../assets/home/corepower/free.png";
import upos from "../../../../assets/home/corepower/upos.png";

import qsr from "../../../../assets/home/corepower/qsr.png";
import qsr2 from "../../../../assets/home/corepower/qsr2.png";
import qsr3 from "../../../../assets/home/corepower/qsr3.png";
import qsr4 from "../../../../assets/home/corepower/qsr4.png";
import qsr5 from "../../../../assets/home/corepower/qsr5.png";
import Franchiseheader from "../components/FranchiseHeader";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;

export default function QSRFranchiseSection() {
  const [current, setCurrent] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const slides = [
    {
      title: "Core Power",
      image: qsr,
      points: [
        { icon: icon1, text: "Starting from ₹6,00,000" },
        { icon: icon2, text: "1 Franchise = 24+ Food Brands" },
        { icon: icon3, text: "Zero Royalty – 100% Your Earnings" },
        { icon: icon4, text: "Ahmedabad’s Biggest Cloud Kitchen Access" },
      ],
    },
    {
      title: "Profit & Growth",
      image: qsr2,
      points: [
        { icon: icon5, text: "Multiple Revenue Streams from Day 1" },
        { icon: icon6, text: "Breakeven in ~6 Months" },
        { icon: icon7, text: "ROI in 12–15 Months" },
        { icon: icon8, text: "Up to 35% Gross Profit" },
        { icon: icon9, text: "Cost Advantage (Big Win)" },
        { icon: icon10, text: "Save on Zomato/Swiggy Commissions" },
        { icon: free, text: "Free Listing on Jagods (Zero Commission)" },
        { icon: icon11, text: "Low Operational Cost (~50%)" },
      ],
    },
    {
      title: "Strong Backend System",
      image: qsr3,
      points: [
        { icon: icon12, text: "10,000 sq. ft. Central Kitchen Access" },
        { icon: icon13, text: "Fresh Ready-to-Cook Supply" },
        { icon: icon14, text: "Fully Tech-Driven Operations" },
        { icon: icon15, text: "Integrated Online Delivery System" },
        { icon: icon16, text: "Marketing & Visibility" },
        { icon: icon17, text: "End-to-End Marketing Support" },
        { icon: icon18, text: "Strong Digital Presence (Orders Ready System)" },
      ],
    },
    {
      title: "Trust & Quality",
      image: qsr4,
      points: [
        {
          icon: icon19,
          text: "Stainless Steel Infrastructure (Hygiene First)",
        },
        { icon: icon20, text: "Capital-Secured, Low-Risk Model" },
        { icon: icon21, text: "Bonus Benefits (Free Power)" },
        { icon: upos, text: "Free UPOS – Digital Mall (Worth ₹90,000)" },
        { icon: icon22, text: "Sell 20+ Crore Products & Services" },
        { icon: icon23, text: "Free Tapri Ki Tafri Franchise Included" },
      ],
    },
    {
      title: "Expansion Opportunity",
      image: qsr5,
      points: [
        { icon: icon26, text: "Earn by Expanding Franchise Network" },
        {
          icon: icon27,
          text: "Grow into Catering, Ready-to-Eat, Spices & More",
        },
      ],
    },
  ];

  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrent(0);
      }, 700);
      setTimeout(() => setIsTransition(true), 750);
    }
  }, [current]);

  return (
    <div className="bg-black text-white px-4">
      <GlobalStyle />
      <Franchiseheader />

      <div className="max-w-7xl mx-auto bg-[#262626] rounded-3xl p-5 md:p-10">
        {/* HEADER SAME */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#262626] opacity-30 blur-[120px] rounded-full"></div>

          <h1 className="text-4xl md:text-5xl font-bricolageBold text-white relative z-10">
            QSR Restaurant Franchise
          </h1>

          <div className="mt-3 relative inline-block">
            <span className="text-[#FDBD5B] font-bricolageBold text-xl md:text-2xl relative z-10">
              Starting from ₹
              <span className="relative inline-block">
                6 Lakhs
                <div className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#60D186] rounded-full"></div>
              </span>{" "}
              + GST
            </span>
          </div>

          <p className="text-white text-[18px] mt-3 max-w-xl mx-auto leading-relaxed">
            One outlet. Multiple brands. Your own food business. <br />
            Unlimited earning potential.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className={`flex ${
              isTransition
                ? "transition-transform duration-700 ease-linear"
                : ""
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
              >
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-bricolageBold mb-6">
                    {slide.title}
                  </h3>

                  <div className="space-y-5">
                    {slide.points.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 sm:gap-4">
                        {/* ICON */}
                        <div className="bg-black min-w-[42px] min-h-[42px] sm:min-w-[48px] sm:min-h-[48px] rounded-xl flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.icon}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                            alt="icon"
                          />
                        </div>

                        {/* TEXT */}
                        <p className="text-white font-bricolageSemiBold text-sm sm:text-base md:text-lg leading-[1.4]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center items-center order-1 md:order-2">
                  <img
                    src={slide.image}
                    className="w-full max-w-[520px] h-auto md:h-[650px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current % slides.length === i ? "bg-orange-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        <div className="mt-16">
          <BrandsPower />
        </div>
      </div>
    </div>
  );
}