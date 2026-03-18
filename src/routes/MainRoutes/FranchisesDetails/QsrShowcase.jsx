import React from "react";
import dilli from "../../../assets/qsr/dilli.png";
import mexico from "../../../assets/qsr/mexico.png";
import mumbai from "../../../assets/qsr/aamchi.png";
import chinese from "../../../assets/qsr/chinese.png";

export default function QsrShowcase() {
  const brands = [
    { img: dilli, name: "Dill By Dil Heart" },
    { img: mexico, name: "Mexican" },
    { img: mumbai, name: "Mumbai" },
    { img: chinese, name: "Chinese Nonsense" },
  ];

  return (
    <section className="bg-black px-4 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        {/* TOP TEXT */}
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mb-4">
          QSR (Quick Service Restaurant) is a modern food business format built
          for speed, convenience, and high-volume operations — making it the
          future of scalable and profitable food ventures.
        </p>

        <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mb-10">
          At Jagdai Foods, we elevate this model by combining centralized
          kitchens, multi-brand offerings, and technology-driven delivery —
          creating a system that delivers faster service, stronger margins, and
          multiple revenue streams from a single outlet.
        </p>

        {/* BRAND CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:-gap-28 justify-items-center">

          {brands.map((item, index) => (
            <div
              key={index}
              className="bg-transparent max-w-[180px] shadow-md hover:scale-105 transition duration-300"
            >
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-contain h-fit"
                />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}