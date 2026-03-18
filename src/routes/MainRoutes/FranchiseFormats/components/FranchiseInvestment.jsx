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
    <section className="bg-black py-10 px-3 lg:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-8">

        {/* QSR Restaurant Franchise */}
        <div className="relative bg-[#f1b55b] text-black rounded-2xl p-6 lg:p-8 flex flex-col justify-between">

          <div className="relative z-10">
            <h3 className="font-bricolageBold text-3xl mb-3">
              QSR Restaurant Franchise
            </h3>

            <p className="text-sm leading-relaxed mb-6 max-w-[520px]">
              QSR (Quick Service Restaurant) is a modern food business format
              built for speed, convenience, and high-volume operations — making
              it the future of scalable and profitable food ventures.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {qsrFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Earnings */}
            <p className="font-bricolageBold text-sm mb-4">
              Opportunity to earn <br />
              <span className="text-lg font-bold">
                up to Rs.5 lac per month
              </span>
            </p>

            <Link
              to="/franchise-formats/qsr-restaurant-franchise"
              className="inline-block border border-black px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
            >
              Know More
            </Link>
          </div>

          {/* Image */}
          <div className="-mt-20 flex justify-center lg:justify-end relative z-0">
            <img
              src={qsr}
              alt="QSR Restaurant"
              className="lg:w-[560px] object-contain"
            />
          </div>
        </div>

        {/* Internet Restaurant Franchise */}
        <div className="relative bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between">

          <div className="relative z-10">
            <h3 className="font-bricolageBold text-3xl mb-2">
              Internet Restaurant Franchise
            </h3>

            <p className="font-bricolageBold mb-4">
              Franchise Fee: ₹3,00,000/- (+ GST)
            </p>

            <p className="text-sm leading-relaxed mb-6">
              An internet restaurant is a food establishment that operates
              primarily online, offering delivery or pickup services through
              websites or mobile apps.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              {["No Rental", "No Salary", "High Margins", "No Expenses"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FDBD5B]">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                )
              )}
            </div>

            <Link
              to="/franchise-formats/internet-restaurants-franchise"
              className="inline-block text-[#FDBD5B] border border-[#FDBD5B] px-5 py-2 rounded-lg text-sm hover:bg-[#FDBD5B] hover:text-black transition"
            >
              Know More
            </Link>
          </div>

          {/* Image */}
          <div className="-mt-48 flex justify-end relative z-0">
            <img
              src={mobile}
              alt="Internet Restaurant"
              className="lg:w-[560px] object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}