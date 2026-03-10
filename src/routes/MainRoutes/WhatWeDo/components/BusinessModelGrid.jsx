import React from "react";

export default function BusinessModelGrid() {
  const Tick = () => (
    <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-xs">
      ✓
    </div>
  );

  return (
    <section className="bg-black text-white py-8 px-3 lg:px-6">
      <div className="max-w-7xl mx-auto grid space-y-8">

        {/* ROW 1 */}
        <div className="grid lg:grid-cols-[60%_40%] gap-8">

          {/* LEFT 60% */}
          <div className="bg-[#2c2c2c] rounded-[22px] p-4 lg:p-8">
          <h3 className="font-bricolageBold text-3xl mb-3">
              Multi-Brand QSR & Cloud Network
            </h3>

          <p className="text-sm text-gray-400 mb-6">
              24+ in-house brands across:
            </p>

            <ul className="space-y-3 text-gray-200">
              {[
                "QSR Restaurants",
                "Internet / Cloud Kitchens",
                "Food Trolleys & Tempos",
                "Food Courts",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 mt-6">
              One investment. Multiple cuisines. Diversified revenue.
            </p>
          </div>

          {/* RIGHT 40% */}
          <div className="bg-[#f4b552] text-black rounded-[22px] p-4 lg:p-8">
          <h3 className="font-bricolageBold text-3xl mb-3">
              Centralized Production Backbone
            </h3>

          <p className="text-sm text-black mb-6">
              10,000+ sq.ft central kitchen driving:
            </p>

            <ul className="space-y-3">
              {[
                "Uniform taste",
                "Bulk procurement efficiency",
                "Reduced wastage",
                "SOP-driven consistency",
                "Lower skill dependency",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm mt-6">
              Standardized Indian food at scale.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid lg:grid-cols-[40%_60%] gap-8">

          {/* LEFT 40% */}
          <div className="bg-[#5ec487] text-black rounded-[22px] p-4 lg:p-8">
          <h3 className="font-bricolageBold text-3xl mb-3">
              Technology-Integrated Operations
            </h3>

          <p className="text-sm text-black mb-6">
              Powered by Jagdos – Our Own Delivery App
            </p>

            <ul className="space-y-3">
              {[
                "Direct customer ownership",
                "Reduced aggregator commission",
                "Data & analytics visibility",
                "Centralized order management",
                "Margin protection",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm mt-6">
              Food business integrated with technology.
            </p>
          </div>

          {/* RIGHT 60% */}
          <div className="bg-[#2c2c2c] rounded-[22px] p-4 lg:p-8">
          <h3 className="font-bricolageBold text-3xl mb-3">
              Catering & Bulk Solutions
            </h3>

          <p className="text-sm text-gray-400 mb-6">
              Structured catering for:
            </p>

            <ul className="space-y-3 text-gray-200">
              {[
                "Corporate events",
                "Social functions",
                "Institutional supply",
                "Food by Kilo",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 mt-6">
              Scalable, hygienic, centrally prepared solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}