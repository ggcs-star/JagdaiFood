// import React from "react";

// export default function ModelFitSection() {
//   return (
//     <section className="w-full flex justify-center mt-[80px] px-[16px]">

//       <div className="w-full max-w-7xl flex flex-col items-center">

//         {/* BUTTON */}
//         <button className="w-[315px] h-[48px] bg-[#FDBD5B] rounded-[8px] text-[16px] font-semibold text-black">
//           View FOCO/ FOCO Difference Chart
//         </button>

//         {/* MAIN CARD */}
//         <div className="mt-[60px] w-full bg-[#262626] rounded-[24px] pt-[50px] pb-[50px] px-[40px] md:px-[60px]">

//           {/* TITLE */}
//           <h2 className="text-white text-[32px] md:text-[40px] leading-[44px] md:leading-[56px] font-bricolageSemiBold text-center">
//             Which Model Fits You?
//           </h2>

//           {/* TABLE */}
//           <div className="mt-[50px] w-full max-w-[1100px] h-[235px] bg-black rounded-[24px] px-[60px] py-[28px] flex flex-col justify-center">

//             {/* HEADER */}
//             <div className="grid grid-cols-[1fr_200px] items-center text-[#60D186] text-[24px] font-bricolageSemiBold border-b border-white/20 pb-[12px]">
//               <p>If You Want</p>
//               <p className="text-left">Choose</p>
//             </div>

//             {/* ROW 1 */}
//             <div className="grid grid-cols-[1fr_200px] items-center text-white text-[24px] mt-[18px]">
//               <p className="leading-[28px]">
//                 Full control + higher profit + white label flexibility
//               </p>
//               <p className="font-semibold">FOFO</p>
//             </div>

//             {/* ROW 2 */}
//             <div className="grid grid-cols-[1fr_200px] items-center text-white text-[24px] mt-[14px]">
//               <p className="leading-[28px]">
//                 Passive income + structured ROI
//               </p>
//               <p className="font-semibold">FOCO</p>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import ExploreFranchiseSection from "./ExploreFranchiseSection";

export default function ModelFitSection() {
  return (
    <section className="w-full flex justify-center mt-[60px] md:mt-[80px] px-[16px]">
      <div className="w-full max-w-7xl flex flex-col items-center mb-[60px] md:mb-[100px]">
        {/* BUTTON */}
        <button className="w-full sm:w-[315px] h-[48px] bg-[#FDBD5B] rounded-[8px] text-[14px] md:text-[16px] font-semibold text-black">
          View FOCO/ FOCO Difference Chart
        </button>

        {/* 🔥 MAIN CARD */}
        <div className="mt-[40px] md:mt-[60px] w-full bg-[#262626] rounded-[20px] md:rounded-[24px] px-4 sm:px-6 md:px-10 lg:px-[60px] pt-[30px] md:pt-[50px] pb-[40px] md:pb-[60px] flex flex-col gap-[30px] md:gap-[40px]">
          {/* TOP PART */}
          <div>
            <h2 className="text-white text-[24px] sm:text-[30px] md:text-[40px] font-bricolageSemiBold text-center">
              Which Model Fits You?
            </h2>

            {/* TABLE CARD */}
            {/* TABLE CARD */}
            <div className="mt-[30px] md:mt-[40px] w-full max-w-[1100px] bg-black rounded-[16px] md:rounded-[24px] px-4 sm:px-6 md:px-[60px] py-[20px] md:py-[28px] mx-auto">
              {/* DESKTOP HEADER */}
              <div className="hidden md:grid grid-cols-[1fr_200px] font-bricolageSemiBold text-[#60D186] text-[24px] border-b border-white/20 pb-[12px]">
                <p>If You Want</p>
                <p>Choose</p>
              </div>

              {/* MOBILE HEADER */}
              <div className="md:hidden text-[#60D186] font-semibold text-[16px] mb-4">
                Choose Your Model
              </div>

              {/* ROW 1 */}
              <div className="flex justify-between items-start md:grid md:grid-cols-[1fr_200px] mt-[14px] md:mt-[18px] text-white">
                <p className="text-[15px] sm:text-[16px] md:text-[24px] leading-snug max-w-[75%] md:max-w-full">
                  Full control + higher profit + white label flexibility
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[24px] font-semibold">
                  FOFO
                </p>
              </div>

              {/* ROW 2 */}
              <div className="flex justify-between items-start md:grid md:grid-cols-[1fr_200px] mt-[14px] text-white">
                <p className="text-[15px] sm:text-[16px] md:text-[24px] leading-snug max-w-[75%] md:max-w-full">
                  Passive income + structured ROI
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[24px] font-semibold">
                  FOCO
                </p>
              </div>
            </div>
          </div>

          {/* 🔥 BOTTOM PART */}
          <ExploreFranchiseSection />
        </div>
      </div>
    </section>
  );
}
