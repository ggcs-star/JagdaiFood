import React from "react";
import heroImage from "../../../../assets/home/herosection/herosection.png";

export default function FranchiseHero() {
  return (
    <section
      className="w-screen min-h-[85vh] text-white bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `
          url(${heroImage}),
          radial-gradient(circle at 80% 40%, rgba(47,210,155,0.2), transparent 40%),
          linear-gradient(135deg,#0c3d2e,#0e6b4d,#1aa370)
        `
      }}
    >
      <div className="py-12 lg:py-20">
        <div className="px-6 lg:px-38 max-w-[950px]">

          <p className="font-bricolageBold text-[#FDBD5B] mb-4">
            Built on Amma’s Legacy.
          </p>

          <h1 className="text-4xl md:text-5xl font-bricolageSemiBold leading-tight mb-6">
            Engineered for 
            Scalable Food 
            Entrepreneurship.
          </h1>

          <p className="text-gray-200 mb-6 leading-relaxed"> Jagdai Foods is a 24+ brand, technology-driven food franchise ecosystem inspired by Amma’s love for authentic taste and designed for structured, scalable, and sustainable growth. </p> <p className="text-gray-200 mb-6 leading-relaxed"> Through centralized operations, standardized systems, and clearly defined FOFO & FOCO franchise models, we enable entrepreneurs to build profitable food businesses with operational clarity and predictable returns. </p> <p className="text-gray-200 mb-10"> Structured franchise formats. Capital protection framework. Multi-brand scale. </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#f3b24c] text-black px-6 py-3 rounded-lg">
              Apply for Franchise
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}