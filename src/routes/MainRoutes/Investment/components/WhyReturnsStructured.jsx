import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import whyReturns from '../../../../assets/investment/whyreturns.png'

export default function WhyReturnsStructured() {
  const navigate = useNavigate();
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
    <section className="bg-black py-8 text-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-0">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bricolageBold text-center mb-8">
          Why Returns Are Structured
        </h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={whyReturns}
              alt="Why Returns"
              className="w-full max-w-[520px] object-contain"
            />
          </div>

          {/* Right Points */}
          <div className="space-y-4">

            {points.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-yellow-400 rounded-full p-1.5">
                  <Check size={16} className="text-black" />
                </div>
                <span className="text-gray-200 text-xl">{item}</span>
              </div>
            ))}

            <p className="text-gray-400 text-sm mt-6">
              This is not conventional franchising. <br />
              It is a systemized food business architecture.
            </p>

          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-8 lg:mt-20 bg-gradient-to-r from-[#5ac47a] to-[#f0b458] rounded-2xl p-3 lg:p-10 text-center text-black">

          <h3 className="font-bricolageBold text-2xl md:text-3xl font-semibold mb-6">
            Evaluate Your Format
          </h3>

          <div className="flex lg:flex-wrap justify-center gap-2 lg:gap-8 mb-8">

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

          <button
          onClick={()=>{navigate("/contact")}}
           className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-900 transition">
            Schedule a Franchise Consultation
          </button>

        </div>

      </div>
    </section>
  );
}