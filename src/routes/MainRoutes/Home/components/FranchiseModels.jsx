import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

import qsrImage from "../../../../assets/home/franchise/qsr.png";
import trolleyImage from "../../../../assets/home/franchise/pizza.png";

export default function FranchiseModels() {

  const qsrPoints = [
    "FOFO & FOCO Models Available",
    "50–55% Gross Food Margin Structure",
    "24+ Brand Access",
    "Full Training & Operational Support",
    "Manpower Recruitment Assistance",
    "Multiple Revenue Streams"
  ];

  const trolleyPoints = [
    "Centralized Food Supply",
    "Uniform Taste Across All Units",
    "Reduced Wastage & Skill Dependency",
    "Structured Earning Framework",
    "Backend Operational Support"
  ];

  return (
    <section className="bg-black text-white py-8">
      <Container>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-bricolageBold text-3xl md:text-4xl leading-snug">
            Own a Structured Food Franchise
            <br />
            Under 24+ Brands
          </h2>
        </div>

        {/* Ecosystem Card */}
        <div className="bg-[#2a2a2a] rounded-2xl p-4 lg:p-6 text-center mx-auto mb-12">
          <h3 className="text-3xl font-bricolageBold mb-4">
            Multiple Formats. One Powerful Ecosystem.
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed">
            Jagdai Foods offers scalable, multi-format franchise opportunities
            designed for structured growth, centralized efficiency, and
            predictable revenue — all powered by our 24+ in-house food brands
            and centralized cloud kitchen infrastructure.
          </p>

          <p className="text-gray-200 text-sm mt-4">
            Whether you're an active entrepreneur or a passive investor,
            there’s a model built for you.
          </p>
        </div>

        {/* Franchise Cards */}
        <div className="grid lg:grid-cols-[60%_40%] gap-8">

          {/* QSR Card */}
          <div className="bg-[#1f1f1f] rounded-2xl flex flex-col justify-between">

            <div className="p-4 lg:p-6">

              <h3 className="text-3xl font-bricolageBold text-white mb-4">
                Multi-Brand QSR Franchise
              </h3>

              <p className="font-bricolageBold text-yellow-400 mb-3">
                High-Volume. High-Potential. High-Control.
              </p>

              <p className="font-semibold text-md text-white mb-6">
                Operate a full-scale Quick Service Restaurant powered by centralized production and standardized systems.
              </p>

              <ul className="space-y-3 text-sm text-gray-300">
                {qsrPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">

                    <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                      <Check size={14} className="text-black" />
                    </span>

                    {item}

                  </li>
                ))}
              </ul>

              <p className="text-yellow-400 text-sm mt-5">
                Ideal for entrepreneurs seeking long-term scale and control.
              </p>

              <Link
                to="/franchise-details?type=qsr-restaurant-franchise"
                className="inline-block mt-5 bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-medium"
              >
                Apply for QSR Franchise
              </Link>

            </div>

            <div className="mt-4 h-96">
              <img
                src={qsrImage}
                alt="QSR Franchise"
                className="w-full h-96 object-contain"
              />
            </div>

          </div>


          {/* Trolley Card */}
          <div className="bg-[#F3B24C] rounded-2xl text-black flex flex-col justify-between">

            <div className="p-4 lg:p-6">

              <h3 className="text-3xl font-bricolageBold mb-4">
                Food Trolley / Bike-Cart Franchise
              </h3>

              <p className="font-bricolageBold mb-3">
                Low Investment. Fast Setup. High Mobility.
              </p>

              <p className="font-semibold text-md mb-6">
                A plug-and-operate format designed for high-footfall zones with simplified operations.
              </p>

              <ul className="space-y-3 text-sm">
                {trolleyPoints.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">

                    <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </span>

                    {item}

                  </li>
                ))}
              </ul>

              <p className="text-sm mt-5 font-medium">
                Perfect for first-time entrepreneurs and micro-investors.
              </p>

              <Link
                to="/franchise-details?type=food-trolley-franchise"
                className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-md text-sm font-medium"
              >
                Explore Trolley Model
              </Link>

            </div>

            <div className="mt-4 h-96">
              <img
                src={trolleyImage}
                alt="Trolley Franchise"
                className="w-full h-96 object-contain"
              />
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}