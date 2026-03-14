import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

import cloudkitchen from "../../../../assets/home/franchise/cloudkitchen.png";
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
          <div className="rounded-[26px] bg-gradient-to-br from-[#6BD28C] to-[#52B97C] flex flex-col justify-between">

            <div className="p-4 lg:p-6">

              <h3 className="text-3xl font-bricolageBold text-black mb-4">
                Cloud Kitchen Franchise
              </h3>

              <p className="font-semibold text-black mb-3">
                Delivery-First. Asset-Efficient. Scalable.
              </p>

              <p className="text-black/80 mb-6 text-sm leading-relaxed">
                Operate multiple brands from a delivery-focused setup
                backed by centralized systems.
              </p>

              <ul className="space-y-4 mb-6">
                {cloudKitchenPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black">

                    <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </span>

                    {item}

                  </li>
                ))}
              </ul>

              <p className="text-black font-medium mb-6">
                Built for digital-first food business operators.
              </p>

              <Link
                // to="/franchise-details?type=cloud-kitchen-franchise"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium"
              >
                Learn About Cloud Kitchen Model
              </Link>

            </div>

            {/* Image */}
            <div className="mt-10 h-72">
              <img
                src={cloudkitchen}
                alt="cloud kitchen"
                className="w-full object-contain h-72"
              />
            </div>

          </div>

          {/* Territory Card */}
          <div className="relative rounded-[26px] bg-gradient-to-br from-[#2b2b2b] to-[#1f1f1f] flex flex-col justify-between">

            <div className="p-4 lg:p-6">

              <h3 className="text-3xl font-bricolageBold mb-4">
                Master Franchise / Territory Model
              </h3>

              <p className="text-green-400 font-semibold mb-3">
                Lead Expansion. Multiply Growth.
              </p>

              <p className="text-gray-400 mb-6 text-sm">
                Own and manage franchise expansion within a defined geography.
              </p>

              <ul className="space-y-4 mb-6">
                {territoryPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">

                    <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                      <Check size={14} className="text-black" />
                    </span>

                    {item}

                  </li>
                ))}
              </ul>

              <p className="text-green-400 font-medium mb-6">
                Perfect for first-time entrepreneurs and micro-investors.
              </p>

              <Link
                to="/franchise-details?type=master-franchise"
                className="inline-block bg-green-400 text-black px-6 py-3 rounded-lg font-medium"
              >
                Enquire for Territory Rights
              </Link>

            </div>

            {/* Image */}
            <div className="h-96">
              <img
                src={master}
                alt="territory model"
                className="w-full object-contain absolute right-0 bottom-0"
              />
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}