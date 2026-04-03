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

  // Reset auto slide timer on manual interaction
  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 3000);
    }
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

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
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
      resetAutoSlide();
    } else if (diff < -50) {
      setCurrent((prev) => prev - 1);
      resetAutoSlide();
    }

    isDragging.current = false;
  };

  const handleDotClick = (index) => {
    setCurrent(index + 1);
    resetAutoSlide();
  };

  return (
    <section
      className="w-full overflow-hidden relative bg-black -mt-[1px] lg:-mt-0"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <div
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center bg-black"
          >
            <div className="w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[600px] ">
              <img
                src={banner}
                alt={`Banner ${index}`}
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 w-full flex justify-center gap-2 md:gap-3 z-10">
        {originalBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              current === i + 1 
                ? "bg-white scale-110 md:scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}