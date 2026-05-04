import React from "react";

const GlowCard = ({ title, description, glowColor }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      
      {/* Glow Blob (background layer) */}
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[280px] h-[150px] blur-[60px] opacity-70 rounded-full pointer-events-none z-20 mix-blend-screen"
        style={{ backgroundColor: glowColor }}
      ></div>

      {/* Card Content */}
      <div className="h-48 relative z-10 bg-[#2a2a2a]/90 backdrop-blur-md rounded-2xl px-6 md:px-10 py-10 text-center border border-white/5">
        
        <h2 className="text-white text-2xl md:text-3xl font-bricolageSemiBold mb-4">
          {title}
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function PositioningClosingSection() {
  return (
    <section className="bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Left Card */}
        <GlowCard
          title="Positioning Line"
          description="Not just a franchise — a territory-level business opportunity designed to build a scalable and recurring income ecosystem."
          glowColor="#FDBD5B"
        />

        {/* Right Card */}
        <GlowCard
          title="Closing Hook"
          description="This is not about running one outlet. This is about building a network, controlling a territory, and creating long-term recurring income."
          glowColor="#60D186"
        />

      </div>
    </section>
  );
}