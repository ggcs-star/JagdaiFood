import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import YouTube from 'react-youtube';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './TestimonialSlider.module.css';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Mr Telangana Prakash",
    role: "Politician",
    location: "Hyderabad (Telangana)",
    image: "/static/media/first.e5df796160f9940e46c6.png",
    videoId: "YOUR_VIDEO_ID_1" // Replace with actual YouTube video ID
  },
  {
    name: "Mr Rajendra Verma",
    role: "Chartered Accountant",
    location: "Ahmedabad (Gujarat)",
    image: "/static/media/second.7b3142018f4cf3efffbe.png",
    videoId: "YOUR_VIDEO_ID_2" // Replace with actual YouTube video ID
  },
  {
    name: "Mr Lion Rajendra Bhati",
    role: "Adv Businessman",
    location: "Delhi",
    image: "/static/media/third.f4df1fd6bee6925b9ae6.png",
    videoId: "YOUR_VIDEO_ID_3" // Replace with actual YouTube video ID
  },
  {
    name: "Mr Raghavendra Rao Desai",
    role: "Businessman",
    location: "Hyderabad (Telangana)",
    image: "/static/media/forth.308529527de692e4411b.png",
    videoId: "YOUR_VIDEO_ID_4" // Replace with actual YouTube video ID
  }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const opts = {
    height: '200',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.testimonialSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <YouTube
                    videoId={testimonial.videoId}
                    opts={opts}
                    className="w-full h-full"
                    iframeClassName="w-full h-full"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={`${styles.swiperButtonPrev} swiper-button-prev`}>
          <IoIosArrowBack className="text-2xl" />
        </div>
        <div className={`${styles.swiperButtonNext} swiper-button-next`}>
          <IoIosArrowForward className="text-2xl" />
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider; 