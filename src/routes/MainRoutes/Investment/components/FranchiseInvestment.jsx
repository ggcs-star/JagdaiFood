import React from "react";
import qsr from '../../../../assets/investment/qsr.png'
import mobile from '../../../../assets/investment/internet.png'

export default function FranchiseInvestment() {
    return (
        <section className="bg-black py-8 px-3 lg:px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-8">

                {/* Card 1 */}
                <div className="bg-[#1a1a1a] text-white rounded-2xl p-3 lg:p-6 relative overflow-hidden">

                    <h3 className="font-bricolageBold text-3xl mb-6">
                        QSR Restaurant Franchise
                    </h3>

                    <div className="bg-black rounded-xl p-5 mb-4">
                        <p className="text-green-500 font-bricolageBold  text-sm text-gray-400">Franchise Fee</p>
                        <p className="text-lg font-bold">₹6,00,000 (+ GST)</p>


                        <p className="text-green-500 font-bricolageBold  mt-3 text-sm text-gray-400">Total Investment</p>
                        <p className="text-lg font-bold">₹16 Lakhs</p>

                        <p className="text-sm text-gray-400">
                            (₹6L Franchise + ₹10L Setup or actual, whichever higher)    
                                    </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-black p-4 rounded-lg">
                            <p className="font-bricolageBold text-green-500 text-sm">ROI</p>
                            <p className="font-semibold">12–15 Months</p>
                        </div>

                        <div className="bg-black p-4 rounded-lg">
                            <p className="font-bricolageBold text-green-500 text-sm">Breakeven</p>
                            <p className="font-semibold">Within 6 Months</p>
                        </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg mb-4">
                        <p className="font-bricolageBold text-green-500 text-sm">Gross Profit</p>
                        <p className="font-semibold">Approx. 35%</p>
                    </div>

                    <p className="text-md text-gray-400">
                     A full-scale multi-brand QSR backed by centralized production, SOP-driven execution, and structured FOFO / FOCO models.
                    </p>

                    {/* Placeholder image */}
                    <div className="mt-6">
                        <img
                            src={qsr}
                            alt="restaurant"
                            className="w-full object-contain"
                        />
                    </div>
                </div>

                {/* Card 2 */}
            <div className="bg-[#f0b458] text-black rounded-2xl relative overflow-hidden flex flex-col">

  <div className="p-3 lg:p-6">
    <h3 className="font-bricolageBold text-3xl mb-6">
      Internet Restaurant Franchise
    </h3>

    <div className="bg-white/60 rounded-xl p-5 mb-4">
      <p className="font-bricolageBold text-sm text-gray-700">Franchise Fee</p>
      <p className="text-lg font-bold">₹3,00,000 (+ GST)</p>

      <p className="font-bricolageBold mt-3 text-sm text-gray-700">
        Total Investment
      </p>
      <p className="text-lg font-bold">₹3 Lakhs</p>

      <p className="text-sm text-gray-700">(All Setup Included)</p>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-white/60 p-4 rounded-lg">
        <p className="font-bricolageBold text-sm text-gray-700">ROI</p>
        <p className="font-semibold">6–9 Months</p>
      </div>

      <div className="bg-white/60 p-4 rounded-lg">
        <p className="font-bricolageBold text-sm text-gray-700">Breakeven</p>
        <p className="font-semibold">6 Months</p>
      </div>
    </div>

    <div className="bg-white/60 p-4 rounded-lg mb-4">
      <p className="font-bricolageBold text-sm text-gray-700">
        Profit Structure
      </p>
      <p className="font-semibold">FOFO – 35% | FOCO – 15%</p>
    </div>

    <p className="text-md">
      A delivery-first, low-capex, high-velocity model built for digital
      growth.
    </p>
  </div>

  {/* Image sticks to bottom */}
  <div className="mt-auto">
    <img
      src={mobile}
      alt="delivery"
      className="w-full object-contain lg:object-cover h-[400px]"
    />
  </div>

</div>

            </div>
        </section>
    );
}