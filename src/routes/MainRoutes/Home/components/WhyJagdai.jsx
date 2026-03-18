import React from "react";
import { Check } from "lucide-react";
import { Container } from "../../../../components/Layout";
import modelImage from "../../../../assets/home/model/franchise.png"; // replace if needed

export default function WhyJagdai() {

  const points = [
    "Multi-Brand Sales (24+ Brands under one roof)",
    "Dine-in / Takeaway",
    "Caterings/ Houseparty",
    "Ready-to-Cook",
    "Gravy Pre-Mixes",
    "Tiffin Services",
    "Corporate lunch packs",
    "Internet Kitchen Model",
    "Food Trolley & Outdoor Sales Channels",
    "Tiffin Services & Subscription Models",
    "Franchise Expansion & Royalty Income Opportunities",
  ];

  return (
    <section className="bg-black text-white py-10 lg:py-16">
      <Container>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-bricolageBold text-3xl md:text-4xl mb-4">
            Multiple Revenue Streams
          </h2>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            Jagdai Foods offers scalable, multi-format franchise opportunities with multiple revenue streams 
            and predictable revenue — all powered by our 24+ in-house food brands and centralized cloud kitchen infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Image */}
          <div className="w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a]">
            <img
              src={modelImage}
              alt="Multiple revenue streams model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Points */}
          <div>
            <ul className="space-y-4">

              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#f3b24c] flex items-center justify-center mt-1">
                    <Check size={14} className="text-black" />
                  </div>

                  {/* Text */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>

                </li>
              ))}

            </ul>
          </div>

        </div>

      </Container>
    </section>
  );
}