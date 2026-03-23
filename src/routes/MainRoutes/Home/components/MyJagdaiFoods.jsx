"use client";
import React from "react";
import { Container } from "../../../../components/Layout";

import bag from "../../../../assets/home/capital/bag.png";
import icon1 from "../../../../assets/home/capital/icon1.png";
import icon2 from "../../../../assets/home/capital/icon2.png";
import icon3 from "../../../../assets/home/capital/icon3.png";
import icon4 from "../../../../assets/home/capital/icon4.png";
import icon5 from "../../../../assets/home/capital/icon5.png";

export default function CapitalGuarantee() {
  const features = [
    {
      icon: icon1,
      text: "Capital protected under agreement terms",
    },
    {
      icon: icon2,
      text: "Eligible after 9 years & permanent closure",
    },
    {
      icon: icon3,
      text: "Infrastructure remains company property",
    },
    {
      icon: icon4,
      text: "Refund adjusted for dues",
    },
    {
      icon: icon5,
      text: "Setup cost guaranteed only if done by company",
    },
  ];

  return (
    <section className="bg-black pt-4 pb-8">
      <Container>
        {/* Main Card */}
        <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#6BC07F] to-[#F2B44F]">

          <div className="grid lg:grid-cols-2 lg:gap-10 items-center min-h-[500px]">

            {/* LEFT SIDE */}
            <div className="relative h-full flex flex-col justify-start pt-4 p-4 md:p-8">

              <h2 className="font-bricolageBold text-3xl md:text-4xl text-black lg:mb-6 leading-tight">
                Capital Guarantee on <br /> your Investment
              </h2>

              {/* Bag Image (Desktop) */}
              <img
                src={bag}
                alt="capital"
                className="hidden lg:flex absolute -bottom-8 left-16 w-[260px] md:w-[420px] object-contain h-[300px]"
              />
            </div>

            {/* RIGHT SIDE FEATURES */}
            <div className="flex flex-col justify-center h-full space-y-3 p-4 md:p-6 max-w-xl mx-auto">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#F7E3A5] rounded-xl px-3 py-3 shadow-sm"
                >
                  {/* Icon */}
                  <div className="w-[44px] h-[44px] rounded-xl bg-[#FDBD5B] flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <p className="font-bricolageBold text-black text-sm md:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}

              {/* Bag Image (Mobile) */}
              <img
                src={bag}
                alt="capital"
                className="flex lg:hidden mx-auto w-[260px] md:w-[420px] object-contain h-[200px] mt-4"
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}