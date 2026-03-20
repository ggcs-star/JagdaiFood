import React from "react";
import heroImage from "../../../../assets/home/herosection/herosection.png";
import { useNavigate } from "react-router-dom";

export default function FranchiseHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-screen top-8 min-h-[100vh] text-white overflow-hidden pt-16 lg:pt-24">

      {/* Gradient Background (always visible) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 80% 40%, rgba(47,210,155,0.2), transparent 40%),
            linear-gradient(135deg,#0c3d2e,#0e6b4d,#1aa370)
          `
        }}
      />

      {/* Hero Image (hidden on mobile) */}
      <div
        className="absolute inset-0 hidden md:block bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 py-8 lg:py-10">
        <div className="px-3 lg:pl-28 lg:pr-40 max-w-[950px]">

          <p className="text-3xl md:text-5xl font-bricolageBold text-[#FDBD5B] mb-4">
            Built on Amma’s Legacy
          </p>

          <h1 className="text-3xl md:text-5xl font-bricolageSemiBold leading-tight mb-6">
            Engineered for Scalable
            <br className="hidden lg:block" />{" "}
            Food Entrepreneurship
          </h1>

          <p className="text-sm lg:text-lg text-gray-200 mb-4 lg:mb-6 leading-relaxed">
            Jagdai Foods is a {" "}
            <span className="italic font-semibold">
              24+ brand, technology-driven food franchise ecosystem
            </span>{" "}
            inspired by Amma’s love for authentic taste.
          </p>

          <p className="text-sm lg:text-lg text-gray-200 mb-4 lg:mb-6 leading-relaxed">
            Through centralized operations, standardized systems, and clearly defined
            FOFO & FOCO franchise models, we enable entrepreneurs to build profitable
            food businesses with operational clarity and predictable returns.
          </p>

          <p className="italic text-sm lg:text-lg text-[#FDBD5B] mb-4 lg:mb-6 leading-relaxed">
            Structured franchise formats. Capital protection framework. Multi-brand scale.
          </p>

          <div className="flex gap-4 lg:flex-wrap">
            <button className="text-sm lg:text-lg bg-[#FDBD5B] text-black px-2 lg:px-6 py-3 rounded-lg hover:bg-[#e0a43f] transition">
              Apply for Franchise
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-sm lg:text-lg border border-white/40 px-2 lg:px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Schedule Consultation
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}