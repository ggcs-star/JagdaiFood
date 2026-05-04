import React, { useEffect, useState, useRef } from "react";

import banner1 from "../../../../assets/home/herosection/banner-1.png";
import banner2 from "../../../../assets/home/herosection/banner-2.png";
import banner3 from "../../../../assets/home/herosection/banner-3.png";
import banner4 from "../../../../assets/home/herosection/banner-4.png";

import mobilebanner1 from "../../../../assets/home/herosection/mobile-banner-1.png";
import mobilebanner2 from "../../../../assets/home/herosection/mobile-banner-2.png";
import mobilebanner3 from "../../../../assets/home/herosection/mobile-banner-3.png";
import mobilebanner4 from "../../../../assets/home/herosection/mobile-banner-4.png";

export default function FranchiseHero() {
  const originalBanners = [banner1, banner2, banner3, banner4];

  const mobileBanners = [
    mobilebanner1,
    mobilebanner2,
    mobilebanner3,
    mobilebanner4,
  ];

  const banners = [
    originalBanners[originalBanners.length - 1],
    ...originalBanners,
    originalBanners[0],
  ];

  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const autoSlideRef = useRef(null);

  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  // AUTO SLIDE
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
  };

  // INFINITE LOOP
  useEffect(() => {
    let timeoutId;

    if (current === banners.length - 1) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 700);
    }

    if (current === 0) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(banners.length - 2);
      }, 700);
    }

    return () => timeoutId && clearTimeout(timeoutId);
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
    resetAutoSlide();
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    endX.current = x;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;

    const diff = startX.current - endX.current;

    if (diff > 50) {
      setCurrent((prev) => prev + 1);
    } else if (diff < -50) {
      setCurrent((prev) => prev - 1);
    }

    isDragging.current = false;
    resetAutoSlide();
  };

  const handleDotClick = (index) => {
    setCurrent(index + 1);
    resetAutoSlide();
  };

  return (
    <section className="w-full overflow-hidden relative bg-black pt-[70px] sm:pt-[80px] md:pt-0 lg:pt-0">
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {banners.map((banner, index) => {
          const realIndex =
            index === 0
              ? originalBanners.length - 1
              : index === banners.length - 1
              ? 0
              : index - 1;

          return (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center bg-black"
            >
              {/* ✅ FIXED CONTAINER */}
              <div className="w-full mt-0 lg:mt-28 
                h-[250px] sm:h-[280px] md:h-[400px] 
                lg:h-[600px] 2xl:h-auto 
                flex items-center justify-center">

                {/* Desktop */}
                <img
                  src={banner}
                  alt={`Banner ${index}`}
                  className="w-full h-full 2xl:h-auto object-contain hidden sm:block select-none pointer-events-none"
                  draggable="false"
                />

                {/* Mobile */}
                <img
                  src={mobileBanners[realIndex]}
                  alt={`Mobile Banner ${index}`}
                  className="w-full h-full object-contain block sm:hidden select-none pointer-events-none"
                  draggable="false"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 w-full flex justify-center gap-2 md:gap-3 z-10">
        {originalBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 rounded-full transition-all duration-300 ${
              current === i + 1
                ? "bg-white scale-110 md:scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}