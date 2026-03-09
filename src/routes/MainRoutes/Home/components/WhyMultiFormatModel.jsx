import React from "react";
import { Check } from "lucide-react";
import { Container } from "../../../../components/Layout";
import multiformat from '../../../../assets/home/franchise/multiformat.png'; // replace with your image

export default function WhyMultiFormatModel() {

  const points = [
    "24+ Brands Under One Investment",
    "Centralized Kitchen = Reduced Wastage + Uniform Taste",
    "Standardized SOP Framework",
    "Full Training & Continuous Support",
    "Manpower Assistance",
    "50–55% Margin Structure",
    "Royalty-Based Additional Revenue Channels",
  ];

  return (
    <section className="bg-black text-white py-8">
      <Container>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-bricolageBold text-3xl md:text-4xl mb-4">
            Why This Multi-Format Model Works
          </h2>

          <p className="text-gray-400">
            Unlike traditional single-brand franchises, Jagdai Foods offers:
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Media */}
         {/* Left Media */}
<div className="w-full h-[450px] overflow-hidden rounded-lg">

  <img
    src={multiformat}
    alt="model"
    className="w-full h-full object-cover"
  />

</div>


          {/* Right Points */}
          <div>

            <ul className="space-y-6">

              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="min-w-[30px] h-[30px] rounded-full bg-[#f3b24c] flex items-center justify-center">
                    <Check size={16} className="text-black" />
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item}
                  </p>

                </li>
              ))}

            </ul>

            {/* Bottom Text */}
            <div className="mt-8 space-y-3 text-white">

              <p>This is not just a food franchise.</p>

              <p>
                It is a structured ecosystem designed for scalable and
                sustainable returns.
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}