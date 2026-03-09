import React from "react";
import { Check } from "lucide-react";

export default function WhyReturnsStructured() {
  const points = [
    "Fresh and hygienic food",
    "24+ Brand and revenue Diversification",
    "Centralized Production Control",
    "SOP Standardization",
    "Reduced Skill Dependency",
    "Multi-Format Scalability",
    "Capital Guarantee*",
  ];

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bricolageBold text-center mb-16">
          Why Returns Are Structured
        </h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Media Placeholder */}
          <div className="bg-[#1f1f1f] rounded-2xl h-[320px] md:h-[360px]" />

          {/* Right Points */}
          <div className="space-y-4">

            {points.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-yellow-400 rounded-full p-1.5">
                  <Check size={16} className="text-black" />
                </div>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}

            <p className="text-gray-400 text-sm mt-6">
              This is not conventional franchising. <br />
              It is a systemized food business architecture.
            </p>

          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 bg-gradient-to-r from-[#5ac47a] to-[#f0b458] rounded-2xl p-10 text-center text-black">

          <h3 className="font-bricolageBold text-2xl md:text-3xl font-semibold mb-6">
            Evaluate Your Format
          </h3>

          <div className="flex flex-wrap justify-center gap-8 mb-8">

            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 rounded-full p-1.5">
                <Check size={14} />
              </div>
              <span className="font-medium">ROI projection sheet</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 rounded-full p-1.5">
                <Check size={14} />
              </div>
              <span className="font-medium">Agreement overview</span>
            </div>

          </div>

          <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-900 transition">
            Schedule a Franchise Consultation
          </button>

        </div>

      </div>
    </section>
  );
}