import React from "react";
import dilli from "../../../assets/qsr/dilli.svg";
import mexico from "../../../assets/qsr/mexico.svg";
import mumbai from "../../../assets/qsr/aamchi.svg";
import chinese from "../../../assets/qsr/chinese.svg";

export default function QsrShowcase() {
  const brands = [
    { img: dilli, name: "Dill By Dil Heart" },
    { img: mexico, name: "Mexican" },
    { img: mumbai, name: "Mumbai" },
    { img: chinese, name: "Chinese Nonsense" },
  ];

  return (
    <section className="bg-black px-4 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        {/* TEXT */}
        <p className="text-gray-300 text-sm lg:text-base max-w-4xl mx-auto mb-4">
         QSR (Quick Service Restaurant) is a modern food business format built for speed, convenience, and high-volume operations — making it the future of scalable and profitable food ventures.
        </p>

        <p className="text-gray-300 text-sm lg:text-base max-w-4xl mx-auto mb-10">
           At Jagdai Foods, we elevate this model by combining centralized kitchens, multi-brand offerings, and technology-driven delivery — creating a system that delivers faster service, stronger margins, and multiple revenue streams from a single outlet.

        </p>


        {/* BRAND CARDS */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">

          {brands.map((item, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]
                border border-gray-600
                rounded-2xl
                p-3
                w-[160px] h-[160px]
                flex items-center justify-center
                shadow-lg
                hover:scale-105
                transition duration-300
              "
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}