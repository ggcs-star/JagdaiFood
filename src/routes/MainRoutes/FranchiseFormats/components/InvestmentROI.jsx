import React from "react";

export default function InvestmentROI() {
  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto text-center px-3 lg:px-6">

        {/* Small Heading */}
        <p className="text-green-400 font-bricolageBold text-2xl md:text-3xl mb-4">
          Franchise Formats
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bricolageBold md:text-5xl leading-tight mb-6">
          Structured Formats. <br /> Defined Returns.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Jagdai Foods operates multiple franchise formats — each with clearly defined investment, breakeven timeline, and profit structure.
          <br />
          Choose your scale. Understand your numbers. Execute with clarity.
        </p>

      </div>
    </section>
  );
}