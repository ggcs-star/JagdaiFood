import React from "react";

export default function CloudKitchenIntro() {
  return (
    <section className="bg-black text-white px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">

        {/* Paragraph 1 */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          An internet restaurant (cloud kitchen) is a delivery-first food business model 
          that operates without a dine-in space, leveraging digital platforms to serve 
          customers efficiently with lower overheads and higher scalability.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          An internet restaurant, also known as a cloud kitchen, is a delivery-focused 
          food business that operates entirely online—reducing costs, increasing margins, 
          and enabling faster scalability without the need for a physical dine-in setup.
        </p>

      </div>
    </section>
  );
}