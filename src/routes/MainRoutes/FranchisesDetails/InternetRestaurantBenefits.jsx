import React from "react";
import { Check } from "lucide-react";
import bannerImg from "../../../assets/investment/mobile.png"; // ✅ your single image

export default function InternetRestaurantBenefits() {
  const benefits = [
    "Skip the costly rental fees, operate without a physical space, and maximize profits.",
    "No salary expenses, run your franchise without worrying about employee costs.",
    "Enjoy high margins with a business model designed for strong profitability.",
    "Minimize costs and focus on growth with a franchise with little to no expenses.",
  ];

  const bottomStats = [
    "No Rental",
    "No Salary",
    "High Margins",
    "No Expenses",
  ];

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* TOP CARD */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#2b2b2b] via-[#2a2a2a] to-[#6a5434] grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              Benefits of joining our <br />
              Internet Restaurants <br />
              Franchise Business
            </h2>

            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  
                  <span className="flex-shrink-0 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
<div className="flex items-center justify-center p-6 md:p-8">
  <img
    src={bannerImg}
    alt="Internet Restaurant"
    className="w-full max-w-[420px] h-full object-contain"
  />
</div>

        </div>

        {/* BOTTOM PILLS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bottomStats.map((item, i) => (
            <div
              key={i}
              className="bg-[#2b2b2b] rounded-xl py-4 text-center text-gray-300 font-medium"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}