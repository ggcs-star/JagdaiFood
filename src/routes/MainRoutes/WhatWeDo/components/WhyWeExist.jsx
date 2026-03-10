import React from "react";
import whyExistImg from "../../../../assets/whatwedo/why-exist.png";

export default function WhyWeExist() {
  return (
    <section className="bg-black text-white py-8 px-3 lg:px-6">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Image Card */}
        <div className="w-full rounded-[28px]">
            <img
              src={whyExistImg}
              alt="growth illustration"
              className="w-full h-auto object-contain"
            />
        </div>

        {/* Right Content */}
        <div className="space-y-6">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Why We Exist?
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Indian cuisine is globally loved — yet there is no structured
            scalable Indian food powerhouse that operates with the discipline,
            systems, and national ambition of global QSR giants.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>The market is fragmented.</li>
            <li>Quality is inconsistent.</li>
            <li>Entrepreneurs struggle to scale.</li>
            <li>Margins are lost to inefficiencies and aggregator dependency.</li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            We are building India’s first multi-brand, multi-format,
            technology-integrated food ecosystem — designed for national scale,
            operational standardization, and long-term enterprise value.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our goal is not to open restaurants. Our goal is to build a
            structured food business architecture that can expand city by
            city, format by format, and eventually globally.
          </p>

        </div>
      </div>
    </section>
  );
}