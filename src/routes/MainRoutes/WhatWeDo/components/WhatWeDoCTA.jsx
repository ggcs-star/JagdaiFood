import React from "react";
import { Container } from "../../../../components/Layout";

export default function WhatWeDoCTA() {
  return (
    <section className="bg-black py-4 lg:py-8">
      <Container>

        {/* CTA Card */}
        <div className="rounded-[30px] bg-gradient-to-r from-[#6BC07F] to-[#F2B44F] px-2 lg:px-8 py-4 lg:py-8 text-center">
    <p className="text-black/80 text-xl md:text-2xl font-bricolageBold max-w-md mx-auto">
The Bigger Vision          </p>
          {/* Heading */}
          <h2 className="font-bricolageBold text-3xl md:text-4xl text-black leading-tight mb-4">
QSR + Cloud + Trolley + Catering + Spices + Technology   </h2>

          {/* Description */}
          <p className="text-black/80 font-medium max-w-md mx-auto mb-8">
This is not just a franchise. <br/>It is a complete food business ecosystem.          </p>



        </div>

      </Container>
    </section>
  );
}