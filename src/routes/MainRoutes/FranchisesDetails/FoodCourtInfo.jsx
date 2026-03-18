import React from "react";
import { CheckCircle } from "lucide-react";

const data = [
  {
    title: "Why Food Court Model Works",
    points: [
      "Multi-brand presence increases average billing per customer",
      "High repeat orders due to variety and consistency",
      "Lower operational risk through centralized backend",
      "Ideal for malls, highways, and commercial clusters",
      "Scalable model with predictable revenue structure",
    ],
  },
  {
    title: "Investment & Returns",
    points: [
      "Franchise Fees: ₹20 Lakhs + GST",
      "Setup Investment: Approx. ₹30 Lakhs",
      "Breakeven Timeline: 10–12 Months",
      "Gross Profit Potential: ~35%",
    ],
  },
];

const bottomData = {
  title: "Powered by UPOS – The Digital Mall",
  description:
    "Access a powerful ecosystem of 20 Crore+ products & services, enabling additional revenue streams beyond food sales.",
  points: [
    "Integrated billing & operations",
    "Cross-selling opportunities",
    "Digital expansion beyond physical location",
  ],
};

const Card = ({ title, points }) => (
  <div className="bg-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-lg">
    <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
      {title}
    </h3>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3 text-gray-300">
          <CheckCircle className="text-yellow-400 w-5 h-5 mt-1" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FoodCourtInfo = () => {
  return (
    <section className="bg-black py-10">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        {/* Bottom Full Card */}
        <div className="mt-6 bg-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-lg">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
            {bottomData.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            {bottomData.description}
          </p>

          <ul className="space-y-3">
            {bottomData.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-yellow-400 w-5 h-5 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FoodCourtInfo;