import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ IMPORTANT: use bundle for production stability
import "swiper/css/bundle";

import underlineImg from "../../../../assets/underline.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// images
import img1 from "../../../../assets/panormaslider/image1.png";
import img2 from "../../../../assets/panormaslider/image2.png";
import img3 from "../../../../assets/panormaslider/image3.png";
import img4 from "../../../../assets/panormaslider/image4.png";
import img5 from "../../../../assets/panormaslider/image5.png";
import img6 from "../../../../assets/panormaslider/image6.png";
import img7 from "../../../../assets/panormaslider/image7.png";
import img8 from "../../../../assets/panormaslider/image8.png";
import img9 from "../../../../assets/panormaslider/image9.png";

import cateringlogo from "../../../../assets/cateringlogo.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const PanoramaSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleExplore = () => {
    window.open("https://catering.jagdaifoods.com/", "_blank");
  };

  const handleBook = () => {
    window.open("https://catering.jagdaifoods.com/", "_blank");
  };

  // responsive width
  const [slideWidth, setSlideWidth] = useState("calc((100% - 80px) / 5)");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 767) {
        setSlideWidth("calc((100% - 0px) / 1)");
      } else if (window.innerWidth < 1024) {
        setSlideWidth("calc((100% - 40px) / 3)");
      } else {
        setSlideWidth("calc((100% - 80px) / 5)");
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="bg-black py-20 text-white text-center overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={cateringlogo}
          alt="Jagdai Catering"
          className="w-36 sm:w-80 mb-6 object-cover"
        />

        <h2 className="text-3xl md:text-4xl font-bricolageBold">
          Jagdai Catering for{" "}
          <span className="inline-block relative">
            Every Occasion
            <img
              src={underlineImg}
              alt="underline"
              className="absolute left-0 w-full -mt-2"
            />
          </span>
        </h2>
      </div>

      <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
        From weddings to corporate events, Jagdai Catering delivers large-scale,
        high-quality food experiences with unmatched consistency and taste.
      </p>

      {/* Swiper */}
      <div className="relative mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          grabCursor={true}
          initialSlide={2}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}

          // ✅ FIXED NAVIGATION (SERVER SAFE)
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}

          pagination={{
            el: ".dm-panorama-swiper-pagination",
            clickable: true,
            bulletClass: "dm-panorama-bullet",
            bulletActiveClass: "dm-panorama-bullet-active",
          }}

          className="dm-panorama-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} style={{ width: slideWidth }}>
              <div className="h-[260px] sm:h-[470px] shadow-2xl">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-6 mt-4">
          
          {/* Arrows */}
          <div className="flex gap-6">
            <button
              ref={prevRef}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              <FiChevronLeft size={32} />
            </button>

            <button
              ref={nextRef}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              <FiChevronRight size={32} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleExplore}
              className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Explore Jagdai Catering
            </button>

            <button
              onClick={handleBook}
              className="px-6 py-3 rounded-md bg-[#FDBD5B] text-black font-semibold hover:bg-yellow-400 transition"
            >
              Book Your Event
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="dm-panorama-swiper-pagination mt-6 flex justify-center"></div>
      </div>
    </div>
  );
};

export default PanoramaSlider;