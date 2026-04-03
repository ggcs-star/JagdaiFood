import React from "react";
import cloudkitchen from "../../../../assets/investment/internet1.png";
import { Check } from "lucide-react";
import influencerImage from "../../../../assets/franchiseformats/influencer1.png";
import { Link } from "react-router-dom";

export default function FranchiseCards() {
    return (
        <div className="bg-black py-12 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

                {/* LEFT CARD */}
                {/* Cloud Kitchen Card */}
                <div className="rounded-[26px] flex flex-col justify-between bg-gradient-to-br from-[#2b2b2b] to-[#1f1f1f]">

                    <div className="p-4 lg:p-8">

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bricolageBold text-white mb-2">
                            Internet Restaurant Franchise
                        </h3>

                        <h3 className="text-2xl lg:text-3xl font-bricolageBold text-white mb-2">
                            (Cloud Kitchen Model)
                        </h3>

                        {/* Price */}
                        {/* <p className="font-bricolageBold text-[#60D186] text-2xl font-semibold mb-2">
                            Starting at just{" "}
                                    <span className="absolute left-0 bottom-[-4px] w-full h-[5px] bg-[#f2b44c] rounded-full">

                            </span>{" "}
                            + GST
                        </p> */}

                        <p className="font-bricolageBold text-[#60D186] text-2xl font-semibold mb-2">
                            Starting at just{" "}
                            <span className="relative inline-block">
                                ₹3 Lakhs
                                <span className="absolute left-0 bottom-[2px] w-full h-[3px] bg-[#FDBD5B] rounded-full"></span>
                            </span>{" "}
                            + GST
                        </p>

                        <p className="text-gray-300 text-md mb-6">
                            Not a restaurant—just a food business built for scale.
                        </p>

                        {/* Points */}
                        <ul className="space-y-3 mb-6 text-md">
                            {[
                                "Fully online food business",
                                "Low investment with minimal overhead",
                                "No rental or location dependency",
                                "No manpower or salary burden",
                                "Centralized kitchen support",
                                "Easy to scale — no heavy setup",
                                "High margins with low operational expenses",
                                "Use our kitchens or start from your home",
                                "Built for high-demand online delivery market",
                                "Opportunity to earn up to ₹1 lakh per month",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <span className="w-5 h-5 rounded-full bg-[#60D186] flex items-center justify-center mt-0.5">
                                        <Check size={12} className="text-black" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link
                            to="/franchise-formats/internet-restaurants-franchise"
                            className="inline-block bg-transparent border border-white text-black px-5 py-2 rounded-md text-md text-white hover:bg-white hover:text-black font-medium hover:bg-gray-200"
                        >
                            Know More
                        </Link>

                    </div>

                    {/* Image */}
                    <div className="-mt-20">
                        <img
                            src={cloudkitchen}
                            alt="cloud kitchen"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>

                {/* RIGHT CARD */}
                <div className="relative  bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl text-white flex flex-col justify-between overflow-hidden">

                    {/* CONTENT */}
                    <div className="z-10 p-6 lg:p-8">

                        {/* Title */}
                        <h3 className="font-bricolageBold text-2xl lg:text-3xl mb-2">
                            Influencer Franchise                            (Digital Earning Model)

                        </h3>

                        {/* <h3 className="font-bricolageBold text-2xl lg:text-3xl mb-2">
                        </h3> */}

                        {/* Price */}
                        <p className="font-bricolageBold text-[#FDBD5B] text-2xl font-semibold mb-2">
                            Starting at just{" "}
                            <span className="relative inline-block">
                                ₹2,000
                                <span className="absolute left-0 bottom-[2px] w-full h-[3px] bg-[#60D186] rounded-full"></span>

                            </span>{" "}
                            + GST
                        </p>

                        <p className="text-gray-300 text-md mb-6">
                            No kitchen, no setup — pure digital business.
                        </p>

                        {/* FEATURES */}
                        <div className="space-y-3 mb-6 text-md">
                            {[
                                "No kitchen, no setup — pure digital business",
                                "Earn by building and expanding your network",
                                "Multiple income streams layered on total sales",
                                "Zero operational hassle — no inventory required",
                                "Work from anywhere — location independent",
                                "Negligible investment with high earning potential",
                                "Earn through franchise referrals & expansion",
                                "Earn by selling discount coupons",
                                "Powered by a complete food business ecosystem",
                                "Ideal for influencers & digital entrepreneurs",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 text-white">
                                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FDBD5B] mt-0.5">
                                        <Check className="w-3 h-3 text-black" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            to="/franchise-formats/influencer-franchise"
                            className="inline-block bg-transparent border border-white text-black px-5 py-2 rounded-md text-md text-white hover:bg-white hover:text-black font-medium hover:bg-gray-200"
                        >
                            Know More
                        </Link>

                    </div>

                    {/* IMAGE */}
                    <div className="-mt-20">
                        <img
                            src={influencerImage}
                            alt="Influencer Franchise"
                            className="w-full object-contain"
                        />
                    </div>

                </div>
            </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">

  {/* BUTTON 1 */}
  <Link
    to="/franchise-formats/chatori-gali"
    className="
      bg-[#60D186]
      text-black
      px-6 py-3
      rounded-lg
      font-semibold
      cursor-pointer
      transition-all duration-300
      shadow-md
      text-center
    "
  >
    Food Court Franchise (Chatori Gali)
  </Link>

  {/* BUTTON 2 */}
  <button
    className="
      bg-[#FDBD5B]
      text-black
      px-6 py-3
      rounded-lg
      font-semibold
      cursor-pointer
      transition-all duration-300
      shadow-md
    "
  >
    Master Franchise / Territory Model
  </button>

</div>
        </div>
    );
}