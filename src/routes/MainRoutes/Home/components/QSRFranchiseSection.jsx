// import React from "react";
// import qsr from "../../../../assets/home/qsrfranchise/qsr.png";
// import BrandsPower from "./BrandsPower";
// import styled, { createGlobalStyle } from "styled-components";
// import { FaRocket, FaUtensils, FaMoneyBillWave, FaStore } from "react-icons/fa";
// import icon1 from "../../../../assets/home/corepower/icon1.png";
// import icon2 from "../../../../assets/home/corepower/icon2.png";
// import icon3 from "../../../../assets/home/corepower/icon3.png";
// import icon4 from "../../../../assets/home/corepower/icon4.png";

// const GlobalStyle = createGlobalStyle`
//   * { box-sizing: border-box; }
//   body { margin: 0; font-family: sans-serif; }
// `;

// const HeaderTitle = styled.h1`
//   font-size: 2.8rem;
//   font-weight: 700;
//   color: #ffffff;

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// const HeaderSubtitle = styled.p`
//   margin-top: 8px;
//   color: #fdbd5b;
//   font-size: 1.4rem;
//   font-weight: 600;
// `;

// const HeaderDescription = styled.p`
//   margin-top: 10px;
//   color: #cfcfcf;
//   font-size: 0.95rem;
// `;

// export default function QSRFranchiseSection() {
//   return (
//     <div className="bg-black text-white py-16 px-4">
//       <GlobalStyle />

//       <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl p-8">

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <HeaderTitle className="font-bricolageBold">
//             QSR Restaurant Franchise
//           </HeaderTitle>

//           <HeaderSubtitle className="font-bricolageBold">
//             Starting from ₹6 Lakhs + GST
//           </HeaderSubtitle>

//           <HeaderDescription>
//             One outlet. Multiple brands. Your own food business.
//             <br />
//             Unlimited earning potential.
//           </HeaderDescription>
//         </div>

//         {/* CONTENT */}
//       <div className="grid md:grid-cols-2 gap-10 items-center">

//   {/* LEFT SIDE */}
//   <div>
//     <h3 className="text-4xl font-bricolageBold mb-6">Core Power</h3>

//     <div className="space-y-5 text-gray-300 text-lg">

//       <div className="flex items-center gap-4">
//         <div className="bg-black p-3 rounded-lg">
//           <img src={icon1} alt="" className="w-6 h-6 object-contain" />
//         </div>
//         <p>Starting from ₹6,00,000</p>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="bg-black p-3 rounded-lg">
//           <img src={icon2} alt="" className="w-6 h-6 object-contain" />
//         </div>
//         <p>1 Franchise = 24+ Food Brands</p>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="bg-black p-3 rounded-lg">
//           <img src={icon3} alt="" className="w-6 h-6 object-contain" />
//         </div>
//         <p>Zero Royalty – 100% Your Earnings</p>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="bg-black p-3 rounded-lg">
//           <img src={icon4} alt="" className="w-6 h-6 object-contain" />
//         </div>
//         <p>Ahmedabad’s Biggest Cloud Kitchen Access</p>
//       </div>

//     </div>
//   </div>

//   {/* RIGHT SIDE IMAGE */}
//   <div className="relative flex justify-center items-center">

//     <img
//       src={qsr}
//       alt="QSR"
//       className="relative w-[420px] object-cover"
//     />
//   </div>

// </div>

//         {/* BRANDS */}
//         <div className="mt-16">
//           <BrandsPower />
//         </div>
//       </div>
//     </div>
//   );
// }


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
        { icon: icon19, text: "Stainless Steel Infrastructure (Hygiene First)" },
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

  // 🔥 duplicate slides
  const extendedSlides = [...slides, ...slides];

  // 🔁 auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 reset without jump
  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrent(0);
      }, 700);

      setTimeout(() => {
        setIsTransition(true);
      }, 750);
    }
  }, [current]);

  return (
    <div className="bg-black text-white py-16 px-4">
      <GlobalStyle />
      <Franchiseheader />

      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl p-10">

        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#FDBD5B] opacity-30 blur-[120px] rounded-full"></div>

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

        {/* 🔥 SLIDER */}
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
                className="min-w-full grid md:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <h3 className="text-3xl font-bricolageBold mb-6">
                    {slide.title}
                  </h3>

                  <div className="space-y-5">
                    {slide.points.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="bg-black w-12 h-12 rounded-xl flex items-center justify-center">
                          {item.icon && (
                            <img
                              src={item.icon}
                              className="w-6 h-6 object-contain"
                            />
                          )}
                        </div>

                        <p className="text-white font-bricolageSemiBold text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  {slide.image ? (
                    <img
                      src={slide.image}
                      className="w-[520px] h-[650px] object-contain"
                    />
                  ) : (
                    <div className="w-[520px] h-[650px] bg-black rounded-3xl" />
                  )}
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
                current % slides.length === i
                  ? "bg-orange-500"
                  : "bg-gray-500"
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
