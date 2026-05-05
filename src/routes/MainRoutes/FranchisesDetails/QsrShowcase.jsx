import React, { useState, useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

import dilli from "../../../assets/qsr/dilli.svg";
import mexico from "../../../assets/qsr/mexico.svg";
import mumbai from "../../../assets/qsr/aamchi.svg";
import chinese from "../../../assets/qsr/chinese.svg";

export default function QsrShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  const brands = [
    { img: dilli, name: "Dill By Dil Heart" },
    { img: mexico, name: "Mexican" },
    { img: mumbai, name: "Mumbai" },
    { img: chinese, name: "Chinese Nonsense" },
  ];

  // Disable scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <section className="bg-black px-4 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        {/* TEXT */}
        <p className="text-gray-300 text-sm lg:text-base max-w-4xl mx-auto mb-4">
          QSR (Quick Service Restaurant) is a modern food business format built
          for speed, convenience, and high-volume operations — making it the
          future of scalable and profitable food ventures.
        </p>

        <p className="text-gray-300 text-sm lg:text-base max-w-4xl mx-auto mb-6">
          At Jagdai Foods, we elevate this model by combining centralized
          kitchens, multi-brand offerings, and technology-driven delivery —
          creating a system that delivers faster service, stronger margins, and
          multiple revenue streams from a single outlet.
        </p>

        {/* WATCH VIDEO */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 mb-10 cursor-pointer group"
        >
          <div className="w-[34px] h-[34px] rounded-full border border-[#FDBD5B] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <FaPlay className="text-[#FDBD5B] text-[12px] ml-[2px]" />
          </div>

          <p className="text-[#FDBD5B] text-sm md:text-base font-semibold group-hover:underline">
            Watch Video
          </p>
        </div>

        {/* BRAND CARDS */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {brands.map((item, index) => (
            <div
              key={index}
              className="
        bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]
        border border-gray-600 
        rounded-2xl 
        p-3 
        w-[48%] sm:w-[160px]   /* 🔥 FIX */
        aspect-square
        flex items-center justify-center 
        shadow-lg 
        hover:scale-105 
        transition duration-300
      "
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
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
              src="https://www.youtube.com/embed/zo3IHuIrJNE?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}