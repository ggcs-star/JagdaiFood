import React from "react";
import { Container } from "../../../../components/Layout";

import icon1 from "../../../../assets/home/system/icon1.png";
import icon2 from "../../../../assets/home/system/icon2.png";
import icon3 from "../../../../assets/home/system/icon3.png";
import icon4 from "../../../../assets/home/system/icon4.png";
import icon5 from "../../../../assets/home/system/icon5.png";
import icon6 from "../../../../assets/home/system/icon6.png";
import icon7 from "../../../../assets/home/system/icon7.png";
import icon8 from "../../../../assets/home/system/icon8.png";
import icon9 from "../../../../assets/home/system/icon9.png";

export default function SystemDriven() {

  const cards = [
    {
      icon: icon1,
      title: "Full Training & Operational Support",
      desc: "Structured onboarding, SOP training, launch assistance, and continuous performance monitoring.",
    },
    {
      icon: icon2,
      title: "Manpower Recruitment & Management Support",
      desc: "Guidance in hiring, training, and maintaining standardized outlet performance.",
    },
    {
      icon: icon3,
      title: "Centralized 10,000+ Sq. Ft. Kitchen Infrastructure",
      desc: "Reduces wastage, ensures cost efficiency, and delivers uniform taste across all formats.",
    },
    {
      icon: icon4,
      title: "Standardized SOP Framework",
      desc: "Minimizes operational errors and ensures consistent brand delivery.",
    },
    {
      icon: icon5,
      title: "Technology-Integrated Operations",
      desc: "Powered by Jagdai's system – your own delivery app, direct customer access, data visibility, and reduced aggregator dependency.",
    },
    {
      icon: icon6,
      title: "Reduced Skill Dependency Model",
      desc: "Centralized preparation reduces reliance on high-skilled chefs at outlet level.",
    },
    {
      icon: icon7,
      title: "50–55% Food Margin Structure",
      desc: "Healthy gross margins designed for sustainable profitability.",
    },
    {
      icon: icon8,
      title: "Multi-Brand Cross-Selling Engine (24+ Brands)",
      desc: "Higher average order value and diversified revenue streams.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-2xl p-6 hover:bg-[#262626] transition duration-300"
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

        {/* Bottom Full Card */}
        <div className="mt-6 bg-[#1f1f1f] rounded-2xl p-6 flex items-start gap-4">

          <div className="w-10 h-10 rounded-md bg-[#f3b24c] flex items-center justify-center">
            <img
              src={icon9}
              alt="icon"
              className="w-5 h-5"
            />
          </div>

          <div>
              <h3 className="font-bricolageBold text-xl mb-1 leading-snug">
              Royalty-Based Additional Income Channels
            </h3>

              <p className="text-gray-400 text-md leading-relaxed">
              Trolleys, Internet Kitchens, Tiffin Box & Gravy Mix verticals
              enhance total earnings.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}