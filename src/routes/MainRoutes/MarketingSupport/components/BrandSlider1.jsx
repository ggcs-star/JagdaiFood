import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./BrandSlider.css";

import {
  tumchi,
  rice,
  nonsense,
  crazy,
  heart,
  frankiestaan,
  gheedosa,
  lakhnavi,
  magic,
  mexicoculture,
  mingling,
  tapri,
} from "../../../../assets";

import image1 from '../../../../assets/reels/image1.webp'
import image2 from '../../../../assets/reels/image2.webp'

/* ✅ Modular Card */
const BrandCard = ({ img, index }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
      <img
        src={img}
        alt={`Brand ${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default function BrandSlider1() {
  const images = [
    tumchi,
    rice,
    nonsense,
    crazy,
    heart,
    frankiestaan,
    gheedosa,
    lakhnavi,
    magic,
    mexicoculture,
    mingling,
    tapri,
  ];

  const swiperRef = useRef(null);

  return (
    <div className="bg-black pb-8">
      <div className="max-w-7xl mx-auto lg:px-4 relative select-none">

        {/* ✅ CUSTOM LEFT ARROW */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden lg:flex items-center justify-center !w-8 !h-8 rounded-full bg-green-500 text-white z-10
          absolute top-1/2 -translate-y-1/2 left-[-20px] hover:bg-green-600 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* ✅ SLIDER */}
        <div className="max-w-6xl mx-auto lg:px-4 relative w-[90%] lg:w-full">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <BrandCard img={img} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✅ CUSTOM RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden lg:flex items-center justify-center !w-8 !h-8 rounded-full bg-green-500 text-white z-10
          absolute top-1/2 -translate-y-1/2 right-0 hover:bg-green-600 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}