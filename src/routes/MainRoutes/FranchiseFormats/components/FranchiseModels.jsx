// import React from "react";
// import { Check } from "lucide-react";
// import { Link } from "react-router-dom";
// import stall from "../../../../assets/investment/stall.png";

// export default function FranchiseModels() {
//   return (
//     <section className="bg-black py-8 px-3 lg:px-0">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-10">

//         {/* LEFT CARD */}
//         <div className="bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] text-white rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">

//           <div className="max-w-md">
//             <h2 className="text-3xl font-bricolageBold mb-3">
//               Food Tempo Franchise
//             </h2>

//             <p className="font-bricolageBold mb-5">
//               Franchise Fee: ₹5,40,000 (+ GST)
//             </p>

//             <p className="text-white text-sm leading-relaxed mb-6">
//               A food trolley is a fancy mobile eatery used for transporting and
//               serving food to the customers.
//             </p>

//             {/* FEATURES */}
//             <div className="space-y-4 mb-6">
//               {[
//                 "No fixed location constraint",
//                 "In-built freezer",
//                 "Modern design",
//                 "Central kitchen food supply",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-3 text-sm font-medium">

//                   <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-400">
//                     <Check className="w-4 h-4 text-black" strokeWidth={3} />
//                   </div>

//                   {item}
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/franchise-formats/food-tempo-franchise"
//               className="inline-block border border-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition"
//             >
//               Know More
//             </Link>
//           </div>

//           {/* IMAGE */}
//           <div className="flex justify-end mt-6">
//             <img
//               src={stall}
//               alt="tempo"
//               className="w-[420px] object-contain"
//             />
//           </div>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="bg-[#60d186] rounded-3xl p-6 lg:p-8 text-black flex flex-col justify-start">

//           <div className="max-w-xl">
//             <h2 className="text-3xl font-bricolageBold mb-3">
//               Food Court Franchise (Chatori Gali)
//             </h2>

//             <p className="font-bricolageBold mb-5">
//               Franchise Fee: ₹20,00,000/- (+ GST)
//             </p>

//             <p className="text-black text-sm leading-relaxed mb-6">
//               A dynamic food court that features a wide range of food stalls,
//               offering both vegetarian and non-vegetarian options.
//             </p>

//             {/* FEATURES */}
//             <div className="space-y-4 mb-6">

//               <div className="flex items-center gap-3 text-sm font-medium">
//                 <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
//                   <Check className="w-4 h-4 text-white" strokeWidth={3} />
//                 </div>
//                 preferences towards under 1 roof
//               </div>

//               <div className="flex items-center gap-3 text-sm font-medium">
//                 <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
//                   <Check className="w-4 h-4 text-white" strokeWidth={3} />
//                 </div>
//                 Increased walk-ins in the mall due to Chatori Gali Food court
//               </div>

//               <div className="flex items-center gap-3 text-sm font-medium">
//                 <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
//                   <Check className="w-4 h-4 text-white" strokeWidth={3} />
//                 </div>
//                 Best utilization of vacant space at commercial spaces
//               </div>

//             </div>

//             <Link
//               to="/franchise-formats/chatori-gali"
//               className="inline-block border border-black px-6 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
//             >
//               Know More
//             </Link>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import stall from "../../../../assets/investment/stall.png";
import foodcourt from "../../../../assets/investment/foodcourt.png"; // add this
import trolly from "../../../../assets/investment/trolly.png";

export default function FranchiseModels() {
  return (
    <section className="bg-black py-12 px-4">
      
      {/* MAIN CONTAINER (SAME AS OLD CODE) */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-6">

        {/* LEFT CARD */}
        <div className="h-[740px] bg-gradient-to-r from-[#262626] to-[#1f1f1f] text-white rounded-[24px] px-[32px] pt-[36px] pb-[20px] flex flex-col justify-between overflow-hidden">

          <div className="max-w-[420px]">
            <h2 className="text-[30px] leading-[40px] font-bricolageBold mb-[16px]">
              Food Trolley Franchise
            </h2>

            <p className="text-[16px] leading-[24px] text-[#bfbfbf] mb-[24px]">
              A smart, low-investment food business designed for high footfall and fast-moving sales.
              <br /><br />
              Operate anywhere, serve instantly, and earn consistently with a fully supported trolley model.
            </p>

            <Link
              to="/franchise-formats/food-tempo-franchise"
              className="inline-block border border-white text-white text-[14px] px-[20px] py-[8px] rounded-[8px] hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>
          </div>

          <div className="relative w-full flex justify-start">
            <img
              src={trolly}
              alt="trolley"
              className="w-[420px] object-contain translate-x-[-20px] translate-y-[10px]"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="h-[740px] bg-[#60d186] rounded-[24px] px-[36px] pt-[36px] pb-[20px] text-black flex flex-col justify-between overflow-hidden">

          <div className="max-w-[550px]">
            <h2 className="text-[30px] leading-[40px] font-bricolageBold mb-[16px]">
              Food Tempo Franchise
            </h2>

            <p className="text-[16px] leading-[24px] mb-[16px]">
              A food tempo is a mobile food business designed for serving customers on the go — now evolved into a powerful, high-capacity model built for volume sales and wider reach. Take your kitchen to the streets and unlock higher earning potential with a scalable food tempo system.
            </p>

            <p className="text-[16px] leading-[24px] font-semibold mb-[20px]">
              Food Tempo Franchise – High-Volume, Mobile Food Business
            </p>

            <Link
              to="/franchise-formats/chatori-gali"
              className="inline-block border border-black text-black text-[14px] px-[20px] py-[8px] rounded-[8px] hover:bg-black hover:text-white transition"
            >
              Know More
            </Link>
          </div>

          <div className="relative w-full flex justify-end">
            <img
              src={stall}
              alt="food court"
              className="w-[520px] object-contain translate-x-[40px] translate-y-[20px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}