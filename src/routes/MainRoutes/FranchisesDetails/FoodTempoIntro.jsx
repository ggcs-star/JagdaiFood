import React, { useState, useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function FoodTempoIntro() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <section className="bg-black text-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-5">

        {/* PARAGRAPH 1 */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          A food tempo is a mobile food business designed for serving customers on the go — now evolved into a
          powerful, high-capacity model built for volume sales and wider reach. Take your kitchen to the streets and
          unlock higher earning potential with a scalable food tempo system.
        </p>

        {/* HIGHLIGHT TITLE */}
        <p className="text-gray-300 font-medium text-sm md:text-base">
          Food Tempo Franchise –{" "}
          <span className="text-white italic">
            High-Volume, Mobile Food Business
          </span>
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          A next-level upgrade from traditional trolleys, the Food Tempo model is designed for{" "}
          <span className="text-white italic">
            larger operations, higher output, and stronger daily billing.
          </span>
        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Backed by Jagdai’s centralized kitchen and system-driven approach, it ensures consistency, efficiency, and
          profitability on the move.
        </p>

        {/* WATCH VIDEO */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 pb-4 cursor-pointer group"
        >
          <div className="w-[34px] h-[34px] rounded-full border border-[#FDBD5B] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <FaPlay className="text-[#FDBD5B] text-[12px] ml-[2px]" />
          </div>

          <p className="text-[#FDBD5B] text-sm md:text-base font-semibold group-hover:underline">
            Watch Video
          </p>
        </div>

      </div>

      {/* VIDEO MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer absolute top-0 right-0 z-10 bg-[#FDBD5B] p-2 rounded-full hover:bg-[#FDBD5B]/90"
            >
              <FaTimes className="text-black text-sm" />
            </button>

            {/* YOUTUBE IFRAME */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/G6fWrRyl4Ak?autoplay=1"
              title="Food Tempo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}