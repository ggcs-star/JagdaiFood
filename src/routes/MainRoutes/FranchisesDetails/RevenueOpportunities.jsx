import React from "react";

const RevenueOpportunitiesqsr = () => {
  const data = [
    "Self-QSR billing online and in-store",
    "The opportunity to sell franchises with a 3% royalty and 25% franchise fee.",
    "Billing of trolleys with a 10% royalty",
    "Billing of internet kitchens with a 10% royalty.",
    "Tiffin services booking with a 10% royalty.",
    "Spices and gravy base selling with 10% royalty.",
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
          Additionally, the unique selling proposition (USP) of our franchise
          offers the following revenue opportunities
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-2xl px-6 py-8 text-center 
                         shadow-md hover:shadow-lg transition-all duration-300"
            >
              <p className="text-sm md:text-base font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueOpportunitiesqsr;