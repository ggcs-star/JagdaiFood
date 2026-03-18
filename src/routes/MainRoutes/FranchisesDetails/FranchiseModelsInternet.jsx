import React from "react";
import { CheckCircle } from "lucide-react";

const FranchiseModelsInternet = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Franchise Models
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-4">
          A cloud kitchen model is designed for <span className="font-semibold">“high efficiency, low overhead, and predictable earnings”</span> — making it one of the most scalable food business formats today.
        </p>

        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-12">
          With minimal infrastructure and no traditional operational burden, you can generate <span className="font-semibold">“consistent monthly income through structured models like FOCO and FOFO.”</span>
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* FOCO Card */}
          <div className="bg-[#1f1f1f] rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              FOCO Model (Franchise Owned, Company Operated)
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Operate with <span className="italic">zero operational hassle</span> while earning a fixed share of revenue.
            </p>

            <ul className="space-y-3 mb-4">
              {[
                "No day-to-day operational involvement",
                "No manpower or management stress",
                "Earn 15% of total billing",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-yellow-400 mt-0.5" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-xs">
              Ideal for investors seeking passive income with minimal risk.
            </p>
          </div>

          {/* FOFO Card */}
          <div className="bg-[#1f1f1f] rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              FOFO Model (Franchise Owned, Franchise Operated)
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Take full control of operations and unlock <span className="italic">higher earning potential</span>.
            </p>

            <ul className="space-y-3 mb-4">
              {[
                "Complete control over outlet operations",
                "Higher earning share with optimized costs",
                "Earn up to 35% of total billing",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="text-yellow-400 mt-0.5" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-xs">
              Ideal for entrepreneurs aiming for active involvement and maximum returns.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <p className="mt-10 text-gray-300 text-sm md:text-base font-medium">
          Low investment. No heavy overheads. High earning potential.
        </p>
      </div>
    </section>
  );
};

export default FranchiseModelsInternet;