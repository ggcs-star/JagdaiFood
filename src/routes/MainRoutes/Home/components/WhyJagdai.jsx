import React from "react";
import { Check } from "lucide-react";
import { Container } from "../../../../components/Layout";
import modelImage from "../../../../assets/home/model/franchise.png"; // replace with your image

export default function WhyJagdai() {

  const points = [
    "24+ in-house food brands",
    "10,000+ sq.ft centralized master cloud kitchen",
    "Centralized production system",
    "Technology-driven operations and delivery",
    "Structured FOFO & FOCO models",
    "Capital guarantee provisions (as per agreement terms)"
  ];

  return (
    <section className="bg-black text-white py-8 lg:py-16">
      <Container>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-bricolageBold text-3xl md:text-4xl mb-4">
            Why Jagdai Foods is Different?
          </h2>

          <p className="text-gray-400 text-lg">
            A smarter way to own food business
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Media */}
          <div className="w-full h-[360px] md:h-[420px] rounded-2xl bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] overflow-hidden">

            <img
              src={modelImage}
              alt="Jagdai business ecosystem"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Right Points */}
          <div>

            <ul className="space-y-6">

              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="w-[20px] h-[20px] lg:min-w-[30px] lg:h-[30px] rounded-full bg-[#f3b24c] flex items-center justify-center">
                    <Check size={16} className="text-black" />
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
                    {item}
                  </p>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </Container>
    </section>
  );
}