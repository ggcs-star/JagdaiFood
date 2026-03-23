import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function TempoFranchiseFees() {
  const features = [
    "Food Tempo",
    "In-Built Freezer",
    "Ultra Modern Design",
    "No Location Constraint",
    "Food Supply from Central Kitchen",
  ];

  return (
    <section className="bg-black text-white py-12 px-4">

      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm mb-2">Franchise Fees</p>

        <h2 className="text-[#FDBD5B] text-3xl md:text-4xl font-bold">
          ₹5,40,000/- (+ GST)
        </h2>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 mb-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#2a2a2a] px-5 py-3 rounded-xl min-w-[220px] justify-center"
          >
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#60D186]">
              <Check className="w-4 h-4 text-black" />
            </div>

            <span className="text-sm text-gray-200">{item}</span>
          </div>
        ))}

      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link
          to="/model-comparison"
          className="bg-[#FDBD5B] text-black text-sm font-medium px-6 py-2.5 rounded-md shadow-md hover:bg-[#f4b54a] transition"
        >
          Calculate Your Monthly Earning Potential
        </Link>
      </div>

    </section>
  );
}