// import React from "react";
// import { Check } from "lucide-react";
// import { Container } from "../../../../components/Layout";

// import jagods from "../../../../assets/home/orders/jagods.png";

// export default function JagodsAppSection() {

//   const features = [
//     "Direct customer access",
//     "Reduced commission pressure",
//     "Data-driven growth",
//   ];

//   return (
//     <section className="bg-black py-8 text-white">
//       <Container>

//         <div className="relative rounded-[30px] bg-gradient-to-r from-[#2d2d2d] to-[#1f1f1f] pt-4 px-4 lg:p-0 overflow-visible">

//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* LEFT CONTENT */}
//             <div className="md:p-14">

//               <h2 className="font-bricolageBold text-3xl md:text-4xl leading-snug mb-6">
//                 Own Your Orders. Own <br />
//                 Your Margins: With <br />
//                 JAGODS app
//               </h2>

//               <p className="text-gray-300 mb-6">
//                 Every Jagdai franchise is backed by Jagods — our
//                 in-house delivery app that enables:
//               </p>

//               {/* Feature List */}
//               <ul className="space-y-4 mb-6">
//                 {features.map((item, index) => (
//                   <li key={index} className="flex items-center gap-3">

//                     <div className="w-7 h-7 rounded-full bg-[#60D186] flex items-center justify-center">
//                       <Check size={16} className="text-black" />
//                     </div>

//                     <span className="text-gray-200">{item}</span>

//                   </li>
//                 ))}
//               </ul>

//               <p className="text-gray-200 italic text-xl">
//                 Built for scalable, tech-enabled food entrepreneurship.
//               </p>

//             </div>

//             {/* RIGHT SIDE */}
//             <div className="relative h-[320px] lg:h-[520px] flex items-end justify-center overflow-hidden">

//               <img
//                 src={jagods}
//                 alt="jagods"
//                 className="absolute bottom-[-110px] lg:bottom-0 h-[520px] lg:h-full w-auto object-contain"
//               />

//             </div>

//           </div>

//         </div>

//       </Container>
//     </section>
//   );
// }





import React from "react";
import { Check } from "lucide-react";
import { Container } from "../../../../components/Layout";

import jagods from "../../../../assets/home/orders/jagods.png";

export default function JagodsAppSection() {
  const features = [
    "Direct customer access",
    "Reduced commission pressure",
    "Data-driven growth",
  ];

  return (
    <section className="bg-black py-8 sm:py-10 md:py-12 text-white">
      <Container>
        <div className="relative rounded-[20px] sm:rounded-[30px] bg-gradient-to-r from-[#2d2d2d] to-[#1f1f1f] pt-6 px-4 sm:px-6 lg:p-0 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="px-2 sm:px-4 md:px-8 lg:p-14">

              <h2 className="font-bricolageBold text-2xl sm:text-3xl md:text-4xl leading-snug mb-4 md:mb-6">
                Own Your Orders. Own <br />
                Your Margins: With <br />
                JAGODS app
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-4 md:mb-6">
                Every Jagdai franchise is backed by Jagods — our
                in-house delivery app that enables:
              </p>

              {/* Feature List */}
              <ul className="space-y-3 sm:space-y-4 mb-4 md:mb-6">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">

                    <div className="min-w-[26px] min-h-[26px] sm:w-7 sm:h-7 rounded-full bg-[#60D186] flex items-center justify-center">
                      <Check size={14} className="text-black sm:w-4 sm:h-4" />
                    </div>

                    <span className="text-gray-200 text-sm sm:text-base">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              <p className="text-gray-200 italic text-base sm:text-lg md:text-xl">
                Built for scalable, tech-enabled food entrepreneurship.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative h-[260px] sm:h-[320px] md:h-[400px] lg:h-[520px] flex items-end justify-center">

              <img
                src={jagods}
                alt="jagods"
                className="
                  absolute 
                  bottom-[-60px] 
                  sm:bottom-[-80px] 
                  md:bottom-[-100px] 
                  lg:bottom-0 
                  h-[340px] 
                  sm:h-[420px] 
                  md:h-[480px] 
                  lg:h-full 
                  w-auto 
                  object-contain
                "
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}