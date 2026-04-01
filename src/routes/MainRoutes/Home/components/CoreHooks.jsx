import React from "react";
import { Check } from "lucide-react";

const coreHooksLeft = [
  "Start your food business from just ₹2,000",
  "One franchise, access to 24+ food brands",
  "No Royalty model",
  "Ahmedabad’s biggest cloud kitchen access",
  "Own 10,000 sq. ft. central kitchen",
  "Capital-secured model for safe investment",
  "Stainless steel infrastructure focused on hygiene & health",
];

const coreHooksRight = [
  "Multiple revenue streams from day one",
  "Earn through franchise expansion",
  "Strong digital presence & visibility",
  "End-to-end marketing support",
  "Fully technology-driven operations",
  "Integrated online delivery system",
];

const BulletItem = ({ text }) => (
  <li className="flex items-center gap-3">
    {/* Yellow Circle with Black Tick */}
    <span className="w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center flex-shrink-0">
      <Check className="w-[14px] h-[14px] text-black stroke-[3]" />
    </span>

    {/* Text */}
    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
      {text}
    </p>
  </li>
);

const CoreHooks = () => {
  return (
    <div className="bg-black w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 sm:p-10 shadow-lg">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bricolageBold text-white mb-8">
          Core Hooks (SCSP – High Visibility)
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left */}
          <ul className="space-y-4">
            {coreHooksLeft.map((item, index) => (
              <BulletItem key={index} text={item} />
            ))}
          </ul>

          {/* Right */}
          <ul className="space-y-4">
            {coreHooksRight.map((item, index) => (
              <BulletItem key={index} text={item} />
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default CoreHooks;