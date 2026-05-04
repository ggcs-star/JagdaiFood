import React from "react";
import { Check } from "lucide-react";

const Card = ({
  title,
  items,
  bg,
  textColor = "text-black",
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 shadow-lg ${bg} ${textColor} flex flex-col`}
    >
      <h2 className="text-2xl md:text-3xl font-bricolageBold mb-6 leading-snug">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            
            {/* ICON */}
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${iconBg}`}
            >
              <Check className={`w-4 h-4 ${iconColor}`} />
            </div>

            <p className="text-sm md:text-base leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MasterFranchiseCards() {
  const roleItems = [
    "Build and manage your territory network",
    "Onboard and support franchise partners",
    "Expand across cities with multiple formats",
    "Drive local marketing and business growth",
    "Create a scalable and self-sustaining revenue system",
  ];

  const getItems = [
    "Exclusive territorial rights",
    "Access to 24+ brands and full ecosystem",
    "Centralized kitchen & supply chain support",
    "Complete training, SOPs & onboarding systems",
    "Marketing & business development support",
    "Technology platform for tracking & control",
    "Continuous support for expansion and scaling",
  ];

  const growthItems = [
    "Expand across multiple locations in your territory",
    "Add QSR + Trolleys + Internet outlets under your network",
    "Build recurring income through billing commissions",
    "Create a long-term, scalable business asset",
  ];

  return (
    <section className="px-3 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 🟡 Yellow Card */}
        <Card
          title="Your Role as Master Franchise"
          items={roleItems}
          bg="bg-[#FDBD5B]"
          iconBg="bg-black"
          iconColor="text-white"
        />

        {/* ⚫ Black Card */}
        <Card
          title="What You Get"
          items={getItems}
          bg="bg-[#2a2a2a]"
          textColor="text-white"
          iconBg="bg-[#FDBD5B]"   // primary
          iconColor="text-black"
        />

        {/* 🟢 Green Card */}
        <Card
          title="Growth Potential"
          items={growthItems}
          bg="bg-[#60D186]"
          iconBg="bg-black"
          iconColor="text-white"
        />

      </div>
    </section>
  );
}