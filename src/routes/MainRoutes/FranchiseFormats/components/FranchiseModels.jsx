import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import stall from "../../../../assets/investment/stall.png";
import foodcourt from "../../../../assets/investment/foodcourt.png"; // add this

export default function FranchiseModels() {
  return (
    <section className="bg-black py-8 px-3 lg:px-0">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-10">

        {/* LEFT CARD */}
        <div className="bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] text-white rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">

          <div className="max-w-md">
            <h2 className="text-3xl font-bricolageBold mb-3">
              Food Tempo Franchise
            </h2>

            <p className="font-bricolageBold mb-5">
              Franchise Fee: ₹5,40,000 (+ GST)
            </p>

            <p className="text-white text-sm leading-relaxed mb-6">
              A food trolley is a fancy mobile eatery used for transporting and
              serving food to the customers.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-6">
              {[
                "No fixed location constraint",
                "In-built freezer",
                "Modern design",
                "Central kitchen food supply",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm font-medium">

                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#60D186]">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/franchise-formats/food-tempo-franchise"
              className="inline-block border border-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-end mt-6">
            <img
              src={stall}
              alt="tempo"
              className="w-[420px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
     <div className="bg-[#60d186] rounded-3xl  text-black flex flex-col justify-between">

  <div className="max-w-xl p-6 lg:p-8">
    <h2 className="text-3xl font-bricolageBold mb-3">
      Food Court Franchise (Chatori Gali)
    </h2>

    <p className="font-bricolageBold mb-5">
      Franchise Fee: ₹20,00,000/- (+ GST)
    </p>

    <p className="text-black text-sm leading-relaxed mb-6">
      A dynamic food court that features a wide range of food stalls,
      offering both vegetarian and non-vegetarian options.
    </p>

    {/* FEATURES */}
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-3 text-sm font-medium">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        preferences towards under 1 roof
      </div>

      <div className="flex items-center gap-3 text-sm font-medium">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        Increased walk-ins in the mall due to Chatori Gali Food court
      </div>

      <div className="flex items-center gap-3 text-sm font-medium">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        Best utilization of vacant space at commercial spaces
      </div>
    </div>

    <Link
      to="/franchise-formats/chatori-gali"
      className="inline-block border border-black px-6 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
    >
      Know More
    </Link>
  </div>

  {/* IMAGE (NO extra spacing, no <p>) */}
<div className="flex justify-end overflow-hidden">
  <img
    src={foodcourt}
    alt="food court"
    className="object-cover lg:translate-y-4"
  />
</div>

</div>

      </div>
    </section>
  );
}