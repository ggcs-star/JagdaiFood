import React from "react";
import { Link } from "react-router-dom";
import qsr from "../../../../assets/investment/qsr.png";
import mobile from "../../../../assets/investment/internet.png";
import { Check } from "lucide-react";

export default function FranchiseInvestment() {
  return (
    <section className="bg-black py-10 px-3 lg:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-8">

        {/* QSR Restaurant Franchise */}
        <div className="relative bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between">

          <div className="relative z-10">
            <h3 className="font-bricolageBold text-3xl mb-2">
              QSR Restaurant Franchise
            </h3>

            <p className="text-gray-300 font-semibold mb-4">
              Franchise Fee: ₹5,40,000 (+ GST)
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[500px]">
              Amma, with her weathered hands and twinkling eyes, was the heart
              and soul of our family. Her kitchen was a sanctuary where spices
              danced, and aromas whispered secrets.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                  <Check className="w-3 h-3 text-black" strokeWidth={3} />
                </div>
                You can also create your own brand.
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                  <Check className="w-3 h-3 text-black" strokeWidth={3} />
                </div>
                Loan for QSR Franchise is also available.
              </div>

            </div>

            <Link
              to="/franchise-details?type=qsr-restaurant-franchise"
              className="inline-block border border-gray-500 px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
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
        <div className="relative bg-[#f1b55b] text-black rounded-2xl p-6 lg:p-8 flex flex-col justify-between">

          <div className="relative z-10">
            <h3 className="font-bricolageBold text-3xl mb-2">
              Internet Restaurant Franchise
            </h3>

            <p className="font-semibold mb-4">
              Franchise Fee: ₹3,00,000/- (+ GST)
            </p>

            <p className="text-sm text-black/80 leading-relaxed mb-6">
              An internet restaurant is a food establishment that operates
              primarily online, offering delivery or pickup services through
              websites or mobile apps.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                No Rental
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                No Salary
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                High Margins
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                No Expenses
              </div>

            </div>

            <Link
              to="/franchise-details?type=internet-restaurants-franchise"
              className="inline-block border border-black px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
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