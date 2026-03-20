import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

import cloudkitchen from "../../../../assets/investment/internet.png";
import master from "../../../../assets/home/franchise/master.png";

export default function AdditionalFranchiseModels() {

  const cloudKitchenPoints = [
    "Asset-Light Structure",
    "Lower Front-End Overheads",
    "Centralized Taste & Quality Control",
    "Multi-Brand Cross-Selling",
    "Strong Unit Economics",
  ];

  const territoryPoints = [
    "Centralized Food Supply",
    "Uniform Taste Across All Units",
    "Reduced Wastage & Skill Dependency",
    "Structured Earning Framework",
    "Backend Operational Support",
  ];

  return (
    <section className="bg-black text-white">
      <Container>

        <div className="grid lg:grid-cols-[40%_60%] gap-8">

          {/* Cloud Kitchen Card */}
          <div className="rounded-[26px] flex flex-col justify-between bg-gradient-to-br from-[#2b2b2b] to-[#1f1f1f] ">

            <div className="p-4 lg:p-8">

              <h3 className="text-3xl font-bricolageBold text-white mb-4">
                Internet Restaurant Franchise
              </h3>

              <p className="font-bricolageBold text-white mb-3">
                Delivery-First. Asset-Efficient. Scalable.
              </p>

              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                Operate multiple brands from a delivery-focused setup
                backed by centralized systems.
              </p>

              <ul className="space-y-4 mb-6">
                {cloudKitchenPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-[#60D186] flex items-center justify-center">
                      <Check size={14} className="text-black" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-white font-medium mb-6">
                Built for digital-first food business operators.
              </p>

              <Link
                className="inline-block bg-transparent border-1 border-[#60D186] text-[#60D186] hover:bg-[#60D186] hover:text-black px-6 py-3 rounded-lg font-semibold"
                to="/franchise-formats/internet-restaurants-franchise"

              >
                Learn About Cloud Kitchen Model
              </Link>

            </div>

            <div className="h-96">
              <img
                src={cloudkitchen}
                alt="cloud kitchen"
                className="w-full object-cover h-96"
              />
            </div>

          </div>

          {/* Territory Card */}
         <div className="bg-[#60D186] relative rounded-[26px] flex flex-col justify-between overflow-hidden">

  {/* Content */}
  <div className="p-4 lg:p-8 relative z-20">

    <h3 className="text-3xl font-bricolageBold text-black mb-4">
      Master Franchise / Territory Model
    </h3>

    <p className="text-black font-bricolageBold mb-3">
      Lead Expansion. Multiply Growth.
    </p>

    <p className="text-black mb-6 text-sm">
      Own and manage franchise expansion within a defined geography.
    </p>

    <ul className="space-y-4 mb-6">
      {territoryPoints.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-black">
          <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
            <Check size={14} className="text-white" />
          </span>
          {item}
        </li>
      ))}
    </ul>

    <p className="text-black font-medium mb-6">
      Perfect for first-time entrepreneurs and micro-investors.
    </p>

    <Link
      to="/franchise-formats/master-franchise"
      className="relative z-30 inline-block cursor-pointer bg-transparent text-black border border-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-semibold"
    >
      Enquire for Territory Rights
    </Link>

  </div>

  {/* Image */}
  <div className="h-96 relative">
    <img
      src={master}
      alt="territory model"
      className="w-full object-contain absolute right-0 bottom-0 z-0 pointer-events-none"
    />
  </div>

</div>

        </div>

        {/* ✅ CENTERED BUTTON FIX */}
        <div className="flex justify-center mt-10 pb-10">
          <Link
            to="/franchise-formats"
            className="bg-[#FDBD5B] text-black px-6 py-3 rounded-lg font-semibold"
          >
            Explore More Franchise
          </Link>
        </div>

      </Container>
    </section>
  );
}