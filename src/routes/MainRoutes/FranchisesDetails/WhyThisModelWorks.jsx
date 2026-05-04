import React from "react";
import { CheckCircle } from "lucide-react";

const leftPoints = [
  {
    title: "24+ Brands Under One Investment",
    desc: "Reduce dependency, increase sales mix",
  },
  {
    title: "Multi-Format Expansion",
    desc: "Operate across different business models",
  },
  {
    title: "Centralized Production",
    desc: "Consistent quality, lower wastage, better margins",
  },
  {
    title: "Standardized SOP System",
    desc: "Easy replication & fast scaling",
  },
  {
    title: "50–55% Gross Margin Structure",
    desc: "Optimized cost & higher profitability",
  },
];

const rightPoints = [
  {
    title: "Technology-Driven Platform",
    desc: "Track performance, billing & growth",
  },
  {
    title: "Strong Backend Support",
    desc: "Training, onboarding & operations",
  },
  {
    title: "Territory-Based Control",
    desc: "Build and dominate your market",
  },
  {
    title: "Multiple Revenue Streams",
    desc: "Food sales + franchise expansion + ecosystem earnings",
  },
  {
    title: "No Dependency",
    desc: "On a single brand, location, or customer segment",
  },
];

const Point = ({ title, desc }) => (
  <div className="flex items-start gap-3">
    
    {/* Custom Circle Tick */}
    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 mt-1 shrink-0">
      <span className="text-black text-[10px] font-bold">✓</span>
    </div>

    <div>
      <h4 className="text-white font-semibold text-sm md:text-base">
        {title}
      </h4>
      <p className="text-gray-400 text-xs md:text-sm">{desc}</p>
    </div>
    
  </div>
);

export default function WhyThisModelWorks() {
  return (
    <section className="bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto bg-[#1e1e1e] rounded-2xl p-6 md:p-10 shadow-lg">
        
        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-bricolageBold mb-8">
          Why This Model Works
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          
          {/* Left */}
          <div className="space-y-5">
            {leftPoints.map((item, index) => (
              <Point key={index} {...item} />
            ))}
          </div>

          {/* Right */}
          <div className="space-y-5">
            {rightPoints.map((item, index) => (
              <Point key={index} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}