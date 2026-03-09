import React from "react";
import { Check } from "lucide-react";

export default function AdditionalFranchises() {
  return (
    <section className="bg-black px-3">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Food Trolley Franchise */}
        <div className="bg-[#1f1f1f] rounded-2xl p-8 text-white">
          <h3 className="font-bricolageBold text-3xl mb-2">
            Food Trolley Franchise
          </h3>

          <p className="text-sm text-gray-300 mb-3">
            Franchise Fee:{" "}
            <span className="text-green-400 font-semibold">
              ₹2,70,000 (+ GST)
            </span>
          </p>

          <p className="text-sm text-gray-400 mb-6">
            Compact, high-mobility format designed for high-footfall zones.
          </p>

          <div className="space-y-3">
            {[
              "Centralized kitchen supply",
              "Low overhead structure",
              "No location dependency",
              "Scalable street model",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-1">
                  <Check size={14} className="text-black" />
                </div>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Influencer Franchise */}
        <div className="bg-[#1f1f1f] rounded-2xl p-8 text-white">
          <h3 className="font-bricolageBold text-3xl mb-3">
            Influencer Franchise
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            Digital-first monetization model for creators.
          </p>

          <div className="space-y-3">
            {[
              "Low infrastructure dependency.",
              "Backend supply & operations handled by Jagdai ecosystem.",
              "Revenue-share structure based on digital performance.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-1">
                  <Check size={14} className="text-black" />
                </div>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}