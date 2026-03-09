import React from "react";
import { Check } from "lucide-react";
import { Container } from "../../../../components/Layout";

import jagods from "../../../../assets/home/orders/jagods.png";

export default function JagodsAppSection() {

  const features = [
    "Direct customer access",
    "Reduced commission pressure",
    "Data-driven growth",
  ];

  return (
    <section className="bg-black py-8 text-white">
      <Container>

        <div className="relative rounded-[30px] bg-gradient-to-r from-[#2d2d2d] to-[#1f1f1f] pt-4 px-4 lg:p-0 overflow-visible">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="md:p-14">

              <h2 className="font-bricolageBold text-3xl md:text-4xl leading-snug mb-6">
                Own Your Orders. Own <br />
                Your Margins: With <br />
                JAGODS app
              </h2>

              <p className="text-gray-400 mb-6">
                Every Jagdai franchise is backed by Jagods — our
                in-house delivery app that enables:
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-6">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">

                    <div className="w-7 h-7 rounded-full bg-[#f3b24c] flex items-center justify-center">
                      <Check size={16} className="text-black" />
                    </div>

                    <span className="text-gray-200">{item}</span>

                  </li>
                ))}
              </ul>

              <p className="text-gray-200 italic">
                Built for scalable, tech-enabled food entrepreneurship.
              </p>

            </div>

            {/* RIGHT SIDE */}
      <div className="relative h-[320px] lg:h-[520px] flex items-end justify-center overflow-hidden">

  <img
    src={jagods}
    alt="jagods"
    className="absolute bottom-[-110px] lg:bottom-0 h-[520px] lg:h-full w-auto object-contain"
  />

</div>

          </div>

        </div>

      </Container>
    </section>
  );
}