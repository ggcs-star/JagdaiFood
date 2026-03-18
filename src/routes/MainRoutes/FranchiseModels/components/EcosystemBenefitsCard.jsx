// import React from "react";
// import check from "../../../../assets/franchisemodels/check.svg";

// export default function EcosystemBenefitsCard() {
//   const benefits = [
//     <>
//       <span className="font-bold italic">24+</span> in-house brands
//     </>,
//     <>
//       <span className="font-bold italic">10,000+</span> sq.ft centralized cloud
//       kitchen
//     </>,
//     "Reduced wastage & uniform taste",
//     "Standardized SOP execution",
//     "Multi-Brand cross-selling advantage",
//   ];

//   return (
//     <section className="w-full max-w-[1200px] mx-auto mt-[40px] px-[16px] md:px-0">

//       <div className="w-full min-h-[434px] rounded-[24px] bg-[#262626] pt-[40px] md:pt-[50px] px-[24px] sm:px-[40px] md:px-[96px]">

//         <h2 className="text-white text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[54px] font-bricolageSemiBold mb-[24px] md:mb-[32px]">
//           Ecosystem Benefits
//         </h2>

//         <ul className="space-y-[20px] md:space-y-[26px]">
//           {benefits.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center gap-[12px] md:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] text-[#E5E5E5] font-inter"
//             >
//               <img
//                 src={check}
//                 alt="check"
//                 className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"
//               />

//               {item}
//             </li>
//           ))}
//         </ul>

//       </div>

//     </section>
//   );
// }






import React from "react";
import check from "../../../../assets/franchisemodels/check.svg";

export default function EcosystemBenefitsCard() {

  const leftBenefits = [
    <>
      <span className="font-bold italic">24+</span> in-house brands
    </>,
    <>
      <span className="font-bold italic">10,000+</span> sq.ft centralized cloud kitchen
    </>,
    "Reduced wastage & uniform taste",
    "Standardized SOP execution",
    "Multi-Brand cross-selling advantage",
    "Multiple Revenue Options",
  ];

  const rightBenefits = [
    "Tech-driven Food Aggregator App",
    "Tech-driven Food Aggregator App",
    "Multiple Franchise Options",
    "Catering, Bulk order, Lunch Packs etc",
    <>
      Income from Ready-to-Cook, Gravy Premixes,
      <br />
      Spices etc
    </>,
  ];

  return (
    <section className="w-full max-w-[1200px] md:h-[452px] mx-auto mt-[40px] px-[16px] md:px-0">

      <div className="w-full h-full rounded-[24px] bg-[#262626] py-[40px] px-[20px] md:px-[80px]">

        {/* TITLE */}
        <h2 className="text-white text-[28px] md:text-[40px] leading-[36px] md:leading-[54px] font-bricolageSemiBold text-center mb-[30px]">
          Ecosystem Benefits
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[80px]">

          {/* LEFT */}
          <ul className="space-y-[18px] md:space-y-[22px]">
            {leftBenefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-[14px] text-[16px] md:text-[20px] text-[#E5E5E5]"
              >
                <img
                  src={check}
                  alt="check"
                  className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] mt-[4px]"
                />
                <span className="leading-[26px] md:leading-[28px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <ul className="space-y-[18px] md:space-y-[22px] max-w-[500px]">
            {rightBenefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-[14px] text-[16px] md:text-[20px] text-[#E5E5E5]"
              >
                <img
                  src={check}
                  alt="check"
                  className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] mt-[4px]"
                />
                <span className="leading-[26px] md:leading-[28px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}