import React, { useState, useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function MasterFranchiseIntro() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <section className="bg-black px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* TEXT */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
      Own the Rights. Control the Territory. Build a Scalable Food Business Network.
        </p>

      </div>

      {/* WATCH VIDEO */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 pb-4 cursor-pointer group mt-4"
      >
        <div className="w-[34px] h-[34px] rounded-full border border-[#FDBD5B] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <FaPlay className="text-[#FDBD5B] text-[12px] ml-[2px]" />
        </div>

        <p className="text-[#FDBD5B] text-sm md:text-base font-semibold group-hover:underline">
          Watch Video
        </p>
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
              src="https://www.youtube.com/embed/_TtMSlEmUME?autoplay=1"
              title="Food Court Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}