import React, { useEffect, useState } from "react";

import banner1 from "../../../../assets/home/herosection/banner-1.png";
import banner2 from "../../../../assets/home/herosection/banner-2.png";
import banner3 from "../../../../assets/home/herosection/banner-3.png";
import banner4 from "../../../../assets/home/herosection/banner-4.png";

export default function FranchiseHero() {
  const banners = [banner1, banner2, banner3, banner4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="w-full h-[300px] lg:h-[650px] overflow-hidden relative">
      
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full lg:h-full flex-shrink-0 flex justify-center"
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full max-w-[1600px] lg:h-[730px] lg:object-contain object-center"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
        {banners.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              current === i ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}