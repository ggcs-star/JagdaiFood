import React from "react";
import { Link } from "react-router-dom";
import qsr from "../../../../assets/investment/qsr.png";
import mobile from "../../../../assets/investment/internet.png";
import { Check } from "lucide-react";

export default function FranchiseInvestment() {
  const qsrFeatures = [
    "High-Volume QSR — Consistent daily sales",
    "Multi-Brand Model — 2+ brands, higher value",
    "No Royalty — More profit retained",
    "Better Margins — Higher earning potential",
    "Centralized Kitchen — Cost + consistency control",
    "Tech-Driven — Own platform, direct customers",
    "Multiple Income Streams — Beyond single outlet sales",
    "Low Skill Model — Easy operations",
    "Capital Protection — Secured investment",
    "Fast ROI — Quick breakeven",
    "Scalable Model — FOFO & FOCO expansion",
  ];

  return (
    <section className="bg-black px-3 lg:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-6">

        {/* ================= QSR CARD ================= */}
       <div className="relative bg-[#f1b55b] text-black rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[950px] overflow-hidden">

  {/* CONTENT */}
  <div className="z-10 max-w-[520px]">
    <h3 className="font-bricolageBold text-3xl mb-3">
      QSR Restaurant Franchise
    </h3>

    <p className="text-sm leading-relaxed mb-6">
      QSR (Quick Service Restaurant) is a modern food business format
      built for speed, convenience, and high-volume operations — making
      it the future of scalable and profitable food ventures.
    </p>

    <div className="space-y-3 mb-6">
      {qsrFeatures.map((item, index) => (
        <div key={index} className="flex items-center gap-3 text-sm">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <p className="font-bricolageBold text-md mb-4">
      Opportunity to earn <br />
      <span className="text-xl">up to Rs.5 lac per month*</span>
    </p>

    <Link
      to="/franchise-formats/qsr-restaurant-franchise"
      className="inline-block border border-black px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
    >
      Know More
    </Link>
  </div>

  {/* IMAGE — SAME STYLE AS INTERNET CARD */}
  <div className="absolute bottom-[20px] right-[50px] pointer-events-none">
    <img
      src={qsr}
      alt="QSR"
      className="
        w-[95%] 
        lg:w-[110%] 
        max-w-none 
        object-contain 
        translate-y-[20px] 
        lg:translate-y-[40px] 
        translate-x-[20px]
      "
    />
  </div>

</div>

        {/* ================= INTERNET CARD ================= */}
<div className="relative bg-gradient-to-br from-[#2b2b2b] via-[#252525] to-[#1a1a1a] text-white rounded-3xl p-6 lg:p-8 min-h-[650px] overflow-visible">

  {/* CONTENT */}
  <div className="max-w-[420px] z-10">
    <h3 className="font-bricolageBold text-3xl mb-3">
      Internet Restaurant Franchise
    </h3>

    <p className="text-sm text-gray-300 mb-6">
      A cloud kitchen model operating without dine-in space using digital platforms.
    </p>

    <div className="grid grid-cols-2 gap-3 mb-6">
  {["No Rental", "No Salary", "High Margins", "No Expenses"].map(
    (item, index) => (
      <div key={index} className="flex items-center gap-3 text-sm">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FDBD5B]">
          <Check className="w-3 h-3 text-black" />
        </div>
        <span>{item}</span>
      </div>
    )
  )}
</div>

    <p className="font-bricolageBold text-md mb-4">
      Opportunity to earn <br />
      <span className="text-xl">up to Rs.2 lac per month*</span>
    </p>

    <Link
      to="/franchise-formats/internet-restaurants-franchise"
      className="inline-block text-[#FDBD5B] border border-[#FDBD5B] px-5 py-2 rounded-lg text-sm hover:bg-[#FDBD5B] hover:text-black transition"
    >
      Know More
    </Link>
  </div>

  {/* IMAGE */}
  {/* <div className="absolute bottom-0 right-0 pointer-events-none">
    <img
      src={mobile}
      alt="Internet"
      className="
        w-[150%] 
        lg:w-[180%] 
        max-w-none 
        h-[600px]
        object-contain 
        translate-y-[40px] 
        lg:translate-y-[70px] 
        translate-x-[30px]
      "
    />
  </div> */}

  <div className="absolute bottom-0 right-0 pr-[150px] w-[150%] pb-[100px] pointer-events-none">
  <img
    src={mobile}
    alt="Internet"
    className="
      w-full 
      h-[400px] 
      object-cover 
      scale-[1.4] 
      translate-x-[10%] 
      translate-y-[10%]
      drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]
    "
  />
</div>

</div>

      </div>
    </section>
  );
}