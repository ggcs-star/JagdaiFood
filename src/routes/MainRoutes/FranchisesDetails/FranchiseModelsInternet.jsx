import React from "react";

const FranchiseModelsInternet = () => {
  return (
    <section className="w-full bg-black text-white px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Franchise Models
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-4">
          A cloud kitchen model is designed for{" "}
          <span className="font-semibold italic">
            high efficiency, low overhead, and predictable earnings
          </span>{" "}
          — making it one of the most scalable food business formats today.
        </p>

        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-12">
          With minimal infrastructure and no traditional operational burden, you can generate{" "}
          <span className="font-semibold italic">
            consistent monthly income through structured models like FOCO and FOFO.
          </span>
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* FOCO */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <h3 className="text-xl font-semibold mb-3">
              FOCO Model (Franchise Owned, Company Operated)
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Operate with <span className="italic">zero operational hassle</span> while earning a fixed share of revenue.
            </p>

            <ul className="space-y-4 mb-5">
              {[
                "No day-to-day operational involvement",
                "No manpower or management stress",
                "Earn 15% of total billing",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">

                  {/* CUSTOM TICK */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FDBD5B] mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm">
              Ideal for investors seeking passive income with minimal risk.
            </p>
          </div>

          {/* FOFO */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <h3 className="text-xl font-semibold mb-3">
              FOFO Model (Franchise Owned, Franchise Operated)
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Take full control of operations and unlock{" "}
              <span className="italic">higher earning potential</span>.
            </p>

            <ul className="space-y-4 mb-5">
              {[
                "Complete control over outlet operations",
                "Higher earning share with optimized costs",
                "Earn up to 35% of total billing",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">

                  {/* CUSTOM TICK */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FDBD5B] mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm">
              Ideal for entrepreneurs aiming for active involvement and maximum returns.
            </p>
          </div>

        </div>

        {/* Bottom Pill */}
        <div className="mt-8">
          <div className="text-sm md:text-lg font-bricolageMedium leading-relaxed bg-[#2b2b2b] rounded-xl py-4 text-center text-white">
            Low investment. No heavy overheads. High earning potential.
          </div>
        </div>

      </div>
    </section>
  );
};

export default FranchiseModelsInternet;