import React from "react";
import { Container } from "../../../../components/Layout";
import heroImage from "../../../../assets/home/herosection/herosection.png";

export default function FranchiseHero() {
  return (
    <section
      className="w-full text-white bg-no-repeat bg-right bg-contain"
      style={{
        backgroundImage: `
          url(${heroImage}),
          radial-gradient(circle at 80% 40%, rgba(47,210,155,0.2), transparent 40%),
          linear-gradient(135deg,#0c3d2e,#0e6b4d,#1aa370)
        `
      }}
    >
      <Container className="mx-auto py-4 lg:py-20">

        <div className="max-w-[650px]">

          <p className="font-bricolageBold text-[#FDBD5B] font-medium mb-4">
            Built on Amma’s Legacy.
          </p>

          <h1 className="text-4xl md:text-5xl font-bricolageSemiBold leading-tight mb-6">
            Engineered for <br />
            Scalable Food <br />
            Entrepreneurship.
          </h1>

          <p className="text-gray-200 mb-6 leading-relaxed">
            Jagdai Foods is a 24+ brand, technology-driven food franchise ecosystem
            inspired by Amma’s love for authentic taste and designed for
            structured, scalable, and sustainable growth.
          </p>

          <p className="text-gray-200 mb-6 leading-relaxed">
            Through centralized operations, standardized systems, and clearly
            defined FOFO & FOCO franchise models, we enable entrepreneurs to build
            profitable food businesses with operational clarity and predictable
            returns.
          </p>

          <p className="text-gray-200 mb-10">
            Structured franchise formats. Capital protection framework.
            Multi-brand scale.
          </p>

          <div className="flex gap-4 flex-wrap">

            <button className="bg-[#f3b24c] text-black font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
              Apply for Franchise
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-lg hover:border-white transition">
              Schedule Consultation
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
}
