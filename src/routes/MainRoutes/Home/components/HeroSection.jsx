import React, { useEffect, useState, useRef } from "react";

import banner1 from "../../../../assets/home/herosection/banner-1.png";
import banner2 from "../../../../assets/home/herosection/banner-2.png";
import banner3 from "../../../../assets/home/herosection/banner-3.png";
import banner4 from "../../../../assets/home/herosection/banner-4.png";

export default function FranchiseHero() {
  const originalBanners = [banner1, banner2, banner3, banner4];

  const banners = [
    originalBanners[originalBanners.length - 1],
    ...originalBanners,
    originalBanners[0],
  ];

  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // INFINITE LOOP
  useEffect(() => {
    if (current === banners.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 700);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(banners.length - 2);
      }, 700);
    }
  }, [current, banners.length]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // SWIPE
  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    endX.current = x;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;

    const diff = startX.current - endX.current;

    if (diff > 50) setCurrent((prev) => prev + 1);
    else if (diff < -50) setCurrent((prev) => prev - 1);

    isDragging.current = false;
  };

  return (
    <section
      className="w-full h-[300px] lg:h-[80vh] overflow-hidden relative bg-black"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={banner}
              alt={`Banner ${index}`}
              className="w-full h-full object-contain select-none pointer-events-none"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-20 left-0 w-full flex justify-center gap-2 z-10">
        {originalBanners.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i + 1)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              current === i + 1 ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}