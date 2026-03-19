import React from "react";

export default function FoodTrolleyIntro() {
  return (
    <section className="bg-black text-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-5">

        {/* PARAGRAPH 1 */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          A smart, low-investment food business designed for high footfall and fast-moving sales. 
          Operate anywhere, serve instantly, and earn consistently with a fully supported trolley model.
        </p>

        {/* HIGHLIGHT LINE */}
        <p className="text-gray-200 text-sm md:text-base font-semibold">
          Food Trolley Franchise – Smart, Low-Investment Entry into Food Business
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          A compact,{" "}
          <span className="text-white italic font-medium">
            high-efficiency model built for mobility, low operational cost, and consistent daily revenue
          </span>.
        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Backed by Jagdai’s centralized kitchen and system-driven approach, it ensures quality, speed, and scalability.
        </p>

      </div>
    </section>
  );
}