import React from "react";
import amma from "../../../../assets/legacyofamma/amma.svg";

export default function TributeToAmma() {
  return (
    <section className="bg-black flex justify-center px-4 lg:px-0">
      <div className="relative bg-[#36332f] max-w-6xl w-full rounded-3xl overflow-hidden">

        <div className="flex flex-col lg:block">

          {/* LEFT CONTENT */}
          <div className="relative z-10 lg:max-w-[55%] p-6 md:p-8 lg:p-12 text-white">
            <h2 className="font-bricolageBold text-2xl md:text-3xl mb-4">
              A Tribute to Amma (My Grand Maa)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              In honor of my beloved Amma (Grandma), we’ve established Jagdai
              Foods. Drawing inspiration from her magical touch, we prioritize
              delivering top-quality food at perfect prices. At Jagdai Foods,
              we uphold impeccable hygiene standards while ensuring that the
              delightful flavors, availability, and affordability of street
              food remain accessible to all.
            </p>

            <h3 className="font-bricolageBold text-lg font-semibold mb-2">
              The Birth of Jagdai Foods
            </h3>

            <p className="text-gray-300 leading-relaxed">
              In the bustling streets of our Ahmedabad, we set up Biggest Cloud
              Kitchen for Jagdai Foods — a tribute to Amma’s culinary prowess.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full w-full lg:w-fit">
            <img
              src={amma}
              alt="Amma Illustration"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}