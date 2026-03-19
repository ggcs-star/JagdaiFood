import React from "react";
import { Check } from "lucide-react";
import bannerImg from "../../../assets/investment/internet.png"; // ✅ your single image

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
      <div className="max-w-7xl mx-auto space-y-8">

        {/* TOP CARD */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#2b2b2b] via-[#2a2a2a] to-[#6a5434] grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-bricolageBold mb-8">
              Benefits of joining our 
              Internet <br /> Restaurants 
              Franchise Business
            </h2>

            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">

                  <span className="flex-shrink-0 w-6 h-6 bg-[#FDBD5B] rounded-full flex items-center justify-center mt-1">
                    <Check size={12} className="text-black" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-end justify-center md:justify-end h-full pr-4 md:pr-8 overflow-visible">
            <img
              src={bannerImg}
              alt="Internet Restaurant"
              className="
                w-[80%] 
                md:w-[140%] 
                h-[400px]
                max-w-none 
                object-contain 
                translate-y-[20px] 
                md:-translate-y-[20px]
              "
            />
          </div>

        </div>

        {/* BOTTOM PILLS */}
        <div className="grid grid-cols-2 gap-6">
          {bottomStats.map((item, i) => (
            <div
              key={i}
              className="text-sm md:text-lg font-bricolageMedium leading-relaxed bg-[#2b2b2b] rounded-xl py-4 text-center text-white"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}