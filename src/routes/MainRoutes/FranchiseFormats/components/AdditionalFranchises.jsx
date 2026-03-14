import React from "react";
import { Link } from "react-router-dom";
import influencerImage from "../../../../assets/franchiseformats/influencer.png";
import trolleyImage from "../../../../assets/franchiseformats/trolleyfranchise.png";

export default function AdditionalFranchises() {
  return (
    <section className="bg-black px-3">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 pb-6">

        {/* Food Trolley Franchise */}
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl p-6 lg:p-8 text-white flex flex-col justify-between">

          <div>
            <h3 className="font-bricolageBold text-3xl mb-3">
              Food Trolley Franchise
            </h3>

            <p className="font-semibold mb-4">
              Franchise Fee: ₹2,70,000 (+ GST)
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              A Bike Kart Trolley is a compact and stylish mobile food unit
              designed for easy movement and convenience. It enables vendors to
              serve fresh food directly to customers in busy streets, events, or
              neighborhoods. With its smart design and practical setup, it
              offers a flexible and modern solution for food businesses to
              reach customers on the go.
            </p>

            <Link
              to="/franchise-details?type=food-trolley-franchise"
              className="inline-block border border-gray-500 px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>
          </div>



          <img src={trolleyImage} alt="Food Trolley"
            className="w-full rounded-xl object-cover" />


        </div>

        {/* Influencer Franchise */}
        <div className="p-6 lg:p-8 bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl text-white flex flex-col justify-between">

          <div className=" ">
            <h3 className="font-bricolageBold text-3xl mb-3">
              Influencer Franchise
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Join the JF Influencer Franchise – Where Your Social Influence
              Turns into a Steady Income Stream with Food Brands, Cashback &
              20 Crore+ Products & Services.
            </p>

            <Link
              to="/franchise-details?type=influencer-franchise"
              className="inline-block border border-gray-500 px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>
          </div>

          {/* Influencer Image */}
          <img src={influencerImage} alt="Influencer Franchise" className="w-full rounded-xl object-contain" />

        </div>

      </div>
    </section>
  );
}