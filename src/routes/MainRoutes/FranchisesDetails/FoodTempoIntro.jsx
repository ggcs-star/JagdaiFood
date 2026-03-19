import React from "react";

export default function FoodTempoIntro() {
  return (
    <section className="bg-black text-white py-14 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-5">

        {/* PARAGRAPH 1 */}
        <p className="text-white text-sm md:text-base leading-relaxed">
          A food tempo is a mobile food business designed for serving customers on the go — now evolved into a
          powerful, high-capacity model built for volume sales and wider reach. Take your kitchen to the streets and
          unlock higher earning potential with a scalable food tempo system.
        </p>

        {/* HIGHLIGHT TITLE */}
        <p className="text-white font-medium text-sm md:text-base">
          Food Tempo Franchise –{" "}
          <span className="italic">
            High-Volume, Mobile Food Business
          </span>
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-white text-sm md:text-base leading-relaxed">
          A next-level upgrade from traditional trolleys, the Food Tempo model is designed for{" "}
          <span className="italic">
            larger operations, higher output, and stronger daily billing.
          </span>
        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-white text-sm md:text-base leading-relaxed">
          Backed by Jagdai’s centralized kitchen and system-driven approach, it ensures consistency, efficiency, and
          profitability on the move.
        </p>

      
      </div>
    </section>
  );
}