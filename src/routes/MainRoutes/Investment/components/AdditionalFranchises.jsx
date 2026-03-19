import React from "react";
import trolleyImg from "../../../../assets/investment/trolly.png";
import influencerImg from "../../../../assets/franchiseformats/influencer.png";

export default function AdditionalFranchises() {
  return (
    <section className="bg-black px-3 py-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 h-[700px]">

        {/* ================= FOOD TROLLEY ================= */}
        <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-6 lg:p-8 text-white overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[360px]">
            <h3 className="font-bricolageBold text-3xl mb-3">
              Food Trolley Franchise
            </h3>

            <p className="text-sm text-gray-300 mb-2">
              Franchise Fee:{" "}
              <span className="text-[#60D186] font-semibold">
                ₹2,70,000 (+ GST)
              </span>
            </p>

            <p className="text-sm text-gray-400 mb-6">
              Compact, high-mobility format designed for high-footfall zones.
            </p>

            <div className="space-y-4">
              {[
                "Centralized kitchen supply",
                "Low overhead structure",
                "No location dependency",
                "Scalable street model",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#60D186]">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="absolute bottom-0 right-0 w-[75%] pointer-events-none">
            <img
              src={trolleyImg}
              alt="Trolley"
              className="
                w-full
                object-contain
                -translate-y-[20px]
                -translate-x-[50px]
              "
            />
          </div>

          {/* OVERLAY (prevents text clash) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent z-[1]" />
        </div>

        {/* ================= INFLUENCER ================= */}
        <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-6 lg:p-8 text-white overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[360px]">
            <h3 className="font-bricolageBold text-3xl mb-3">
              Influencer Franchise
            </h3>

            <p className="text-sm text-gray-400 mb-6">
              Digital-first monetization model for creators.
            </p>

            <div className="space-y-4">
              {[
                "Low infrastructure dependency.",
                "Backend supply & operations handled by Jagdai ecosystem.",
                "Revenue-share structure based on digital performance.",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#60D186]">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="absolute bottom-0 right-0 w-[85%] pointer-events-none">
            <img
              src={influencerImg}
              alt="Influencer"
              className="
                w-full
                object-contain
                -translate-y-[20px]
                -translate-x-[50px]
              "
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent z-[1]" />
        </div>

      </div>
    </section>
  );
}