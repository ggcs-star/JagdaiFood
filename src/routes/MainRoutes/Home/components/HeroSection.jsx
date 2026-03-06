import React from "react";
import { Container } from "../../../../components/Layout";

export default function FranchiseHero() {
  return (
    <section className="w-full bg-[#1f1f1f] text-white">
      <Container className="mx-auto py-10">

        {/* Tagline */}
        <p className="font-bricolageBold text-green-500 font-medium mb-4">
          Built on Amma’s Legacy.
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bricolageSemiBold leading-tight mb-6 max-w-[650px]">
          Engineered for <br />
          Scalable Food <br />
          Entrepreneurship.
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-[650px] mb-6 leading-relaxed">
          Jagdal Foods is a 24+ brand, technology-driven food franchise ecosystem
          inspired by Amma’s love for authentic taste and designed for
          structured, scalable, and sustainable growth.
        </p>

        <p className="text-gray-300 max-w-[650px] mb-6 leading-relaxed">
          Through centralized operations, standardized systems, and clearly
          defined FOFO & FOCO franchise models, we enable entrepreneurs to build
          profitable food businesses with operational clarity and predictable
          returns.
        </p>

        <p className="text-gray-300 mb-10">
          Structured franchise formats. Capital protection framework.
          Multi-brand scale.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">

          <button className="bg-[#f3b24c] text-black font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
            Apply for Franchise
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:border-white transition">
            Schedule Consultation
          </button>

        </div>

      </Container>
    </section>
  );
}