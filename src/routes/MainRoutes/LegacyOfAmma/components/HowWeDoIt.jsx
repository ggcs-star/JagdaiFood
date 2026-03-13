import React from "react";
import { Container } from "../../../../components/Layout";

import icon1 from "../../../../assets/legacyofamma/howwedoit/1.png";
import icon2 from "../../../../assets/legacyofamma/howwedoit/2.png";
import icon3 from "../../../../assets/legacyofamma/howwedoit/3.png";
import icon4 from "../../../../assets/legacyofamma/howwedoit/4.png";

export default function HowWeDoIt() {

const cards = [
  {
    icon: icon1,
    title: "Quality First",
    desc: "Understands as Amma insisted on the freshest produce, we source our ingredients meticulously. From farm-fresh vegetables to spices to oil and ghee, quality is non-negotiable.",
  },
  {
    icon: icon2,
    title: "Flavors that Sing",
    desc: "Amma’s spice box was her treasure trove. At Jagdai Foods, we blend tradition with innovation. Our masalas carry whispers of family recipes, while our fusion dishes surprise and delight.",
  },
  {
    icon: icon3,
    title: "Hygiene and Tradition",
    desc: "Amma’s kitchen was spotless, and so is ours. We maintain impeccable hygiene standards, ensuring that our patrons feel at home. Yet, we honor tradition — our tandoor fires burn with the same warmth as hers.",
  },
  {
    icon: icon4,
    title: "Accessible Delights",
    desc: "Street food was Amma’s guilty pleasure. We've taken that joy to heart. Jagdai Foods offers affordable, lip-smacking street-style treats. Whether it’s pani puri or crispy vada pav, chola bhatura, Chinese etc., everyone deserves a taste of nostalgia.",
  },
];

  return (
    <section className="bg-black text-white py-8">
      <Container>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-bricolageBold text-3xl md:text-4xl mb-4">
            A System-Driven Food Franchise Framework
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Jagdai Foods is built on operational discipline, centralized
            efficiency, and scalable unit economics.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-2xl p-3 lg:p-6 hover:bg-[#262626] transition duration-300"
            >

              {/* Icon */}
              <div className="w-10 h-10 rounded-md bg-[#f3b24c] flex items-center justify-center mb-4">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-bricolageBold text-xl mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-md leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}