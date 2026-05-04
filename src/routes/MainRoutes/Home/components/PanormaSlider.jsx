import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ Import globally (IMPORTANT for production)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import underlineImg from "../../../../assets/underline.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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

// ✅ UPDATED: image + text mapping
const slides = [
  { img: img1, text: "Anniversary Celebration" },
  { img: img2, text: "Reception" },
  { img: img3, text: "Birthday Parties" },
  { img: img4, text: "House Parties" },
  { img: img5, text: "Corporate Events" },
  { img: img6, text: "Engagement Function" },
  { img: img7, text: "House Warming Ceremony" },
  { img: img8, text: "Sangeet Ceremony" },
  { img: img9, text: "Wedding Functions" },
];

const PanoramaSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleExplore = () => {
    window.open("https://catering.jagdaifoods.com/", "_blank");
  };

  const handleBook = () => {
    const message = encodeURIComponent(
      "Hi, I want to book catering services for my event."
    );

    window.open(
      `https://api.whatsapp.com/send?phone=918866373077&text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="bg-black py-8 text-white text-center overflow-hidden">

      {/* HEADER */}
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

      <div className="relative mx-auto">

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          pagination={{
            el: ".dm-panorama-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="dm-panorama-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-[480px] sm:h-[470px] shadow-2xl rounded-xl overflow-hidden">

                {/* IMAGE */}
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white text-2xl font-bricolageBold text-center px-4">
                    {slide.text}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION BUTTONS */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <button
              ref={prevRef}
              className="cursor-pointer w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              <FiChevronLeft size={32} />
            </button>

            <button
              ref={nextRef}
              className="cursor-pointer w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              <FiChevronRight size={32} />
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-row gap-2 lg:gap-4 px-2 lg:px-0">
            <button
              onClick={handleExplore}
              className="text-sm lg:text-lg px-2 lg:px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Explore Jagdai Catering
            </button>
            <button
              onClick={handleBook}
              className="text-sm lg:text-lg px-2 lg:px-6 py-3 rounded-md bg-[#FDBD5B] text-black font-semibold hover:bg-yellow-400 transition flex items-center gap-2 justify-center"
            >
              <FaWhatsapp size={20} />
              Book Your Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanoramaSlider;