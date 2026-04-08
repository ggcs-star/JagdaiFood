import React from "react";
import { Check } from "lucide-react";

export default function BenefitsSectionqsr() {
  const leftPoints = [
    "High-Volume QSR — Consistent daily sales",
    "Multi-Brand Model — 24+ brands, higher value",
    "No Royalty — More profit retained",
    "Better Margins — Higher earning potential",
    "Centralized Kitchen — Cost + consistency control",
    "Tech-Driven — Own platform, direct customers",
    "Multiple Income Streams — Beyond single outlet sales",
    "Low Skill Model — Easy operations",
    "Full Pricing Freedom",
    "Location-Based Pricing",

  ];

  const rightPoints = [
    "Gross Margin on Food 50% (Approx)",
    "Capital Protection — Secured investment",
    "Fast ROI — Quick breakeven",
    "Scalable Model — FOFO & FOCO expansion",
    "Fully Equipped Kitchen Setup Provided",
    "Complete QSR Infrastructure Support",
    "Represent Jagdai Foods + Franchise Selling Opportunity",
    "Freedom to Create Your Own Brand",
    "Decide Your Margins"

  ];

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* CARD */}
        <div className="bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-3xl p-6 md:p-10">

          {/* TITLE */}
          <h2 className="text-white text-2xl md:text-3xl font-bricolageBold mb-8">
            Benefits of joining our{" "}
            <span className="">QSR Franchise Business</span>
          </h2>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">

            {/* LEFT */}
            <ul className="space-y-4">
              {leftPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">

                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* RIGHT */}
            <ul className="space-y-4">
              {rightPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">

                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDBD5B] flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}