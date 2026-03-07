import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import CapitalGuarantee from "./MyJagdaiFoods";

/* Rotating stacked badge */
function StackedBadge({ texts, color }) {
  const colors = {
    yellow: {
      main: "bg-[#f3b24c]",
      mid: "bg-[#f0b95e]",
      back: "bg-[#e7c48c]",
    },
    green: {
      main: "bg-green-400",
      mid: "bg-green-300",
      back: "bg-green-200",
    },
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const layers = [
    {
      position: "top",
      style: "w-[320px] h-[52px] z-30 translate-y-0 scale-100",
      color: colors[color].main,
      showText: true,
    },
    {
      position: "mid",
      style: "w-[280px] h-[48px] z-20 translate-y-4 scale-95",
      color: colors[color].mid,
      showText: false,
    },
    {
      position: "back",
      style: "w-[240px] h-[44px] z-10 translate-y-8 scale-90",
      color: colors[color].back,
      showText: false,
    },
  ];

  const rotate = (arr, k) => {
    return arr.map((_, i) => arr[(i + k) % arr.length]);
  };

  const rotatedLayers = rotate(layers, index % 3);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center">
      <div className="relative w-[340px] h-[80px] flex justify-center">

        {rotatedLayers.map((layer, i) => (
          <div
            key={i}
            className={`
              absolute rounded-xl
              transition-all duration-700 ease-in-out
              ${layer.style}
              ${layer.color}
              ${
                i === 0
                  ? "flex items-center justify-center text-black font-semibold text-lg shadow-xl"
                  : ""
              }
            `}
          >
            {i === 0 && texts[index]}
          </div>
        ))}

      </div>
    </div>
  );
}

export default function HowYouEarn() {
  const fofoFeatures = [
    "Full revenue billing with franchise",
    "No royalty on total sales",
    "50% food margin",
    "Additional royalty streams",
    "Higher earning potential",
    "Capital guarantee applicable after 9 years",
  ];

  const focoFeatures = [
    "Company manages operations",
    "5% of total billing OR 24% annual ROH",
    "Zero daily operational involvement",
    "Capital guarantee provisions",
  ];

  const capitalPoints = [
    "Capital protected under agreement terms",
    "Eligible after 9 years & permanent closure",
    "Infrastructure remains company property",
    "Refund adjusted for dues",
    "Setup cost guaranteed only if done by company",
  ];

  return (
    <section className="bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="font-bricolageBold text-center text-3xl md:text-4xl font-semibold mb-16">
          How You Earn?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* FOFO Card */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 pb-32 shadow-lg">

            <h3 className="text-xl font-semibold mb-1">FOFO Model</h3>

            <p className="text-sm text-orange-400 mb-6">
              Franchise Owned, Franchise Operated
            </p>

            <ul className="space-y-4">
              {fofoFeatures.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-yellow-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <StackedBadge
              texts={[
                "300 Daily Orders @ ₹150",
                "400 Daily Orders @ ₹150",
                "500 Daily Orders @ ₹150",
              ]}
              color="yellow"
            />

          </div>

          {/* FOCO Card */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 pb-32 shadow-lg">

            <h3 className="text-xl font-semibold mb-1">FOCO Model</h3>

            <p className="text-sm text-green-400 mb-6">
              Franchise Owned, Company Operated
            </p>

            <ul className="space-y-4">
              {focoFeatures.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-green-400 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <StackedBadge
              texts={[
                "₹13,50,000 Revenue",
                "₹18,00,000 Revenue",
                "₹22,50,000 Revenue",
              ]}
              color="green"
            />

          </div>

        </div>

        {/* Capital Guarantee Section */}
<CapitalGuarantee/>

      </div>
    </section>
  );
}