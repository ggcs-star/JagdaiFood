import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import contentSliderCSS from './ContentSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ContentDetailSlider = ({ videoUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!swiperRef.current) return;

      if (e.key === 'ArrowLeft') {
        swiperRef.current.slidePrev();
      } else if (e.key === 'ArrowRight') {
        swiperRef.current.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getVideoId = (url) => {
    return url.split("/embed/")[1]?.split("?")[0];
  };

  const renderContent = (url, isActive) => {
    const videoId = getVideoId(url);

    if (isActive) {
      return (
        <YouTube
          videoId={videoId}
          className="w-fit lg:w-full lg:h-full rounded-2xl"
          opts={{
            height: '489',
            width: '275',
            playerVars: {
              autoplay: 1,
              mute: 0,
              controls: 0,
              rel: 0,
              loop: 0,
              modestbranding: 1,
              showinfo: 0,
              iv_load_policy: 3,
          cc_load_policy: 0, 
            },
          }}
        />
      );
    } else {
      return (
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          className="!w-[273px] h-[489px] object-fit"
          loading="lazy"
        />
      );
    }
  };

  return (
    <div className={`${contentSliderCSS.container} !w-screen lg:!w-[891px] lg:mx-auto`}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        spaceBetween={-200}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          el: `.${contentSliderCSS.swiperPagination}`,
          clickable: true
        }}
        navigation={{
          nextEl: `.${contentSliderCSS.swiperButtonNext}`,
          prevEl: `.${contentSliderCSS.swiperButtonPrev}`,
        }}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 0 },
          640: { slidesPerView: 3, centeredSlides: true, spaceBetween: -400 },
          1024: { slidesPerView: 3, centeredSlides: true, spaceBetween: -100, modifier: 2.5 },
          1280: { slidesPerView: 5, centeredSlides: true, spaceBetween: -200, modifier: 2.5 }
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={`${contentSliderCSS.swiperContainer} flex justify-center items-center !w-auto lg:!w-[780px] !mx-auto lg:absolute lg:left-[22px]`}
      >
        {videoUrls?.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${contentSliderCSS.swiperSlide} relative overflow-hidden shadow-md !w-auto !lg:h-[489px] !lg:w-[275px] ${index === activeIndex ? 'rounded-2xl' : 'rounded-[35px]'
                }`}
            >
              {renderContent(url, index === activeIndex)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${contentSliderCSS.sliderControler}`}>
        <div className={`${contentSliderCSS.swiperButtonPrev} ${contentSliderCSS.sliderArrow} !flex !justify-center !items-center cursor-pointer bg-primary`}>
          <IoIosArrowBack className='text-5xl flex justify-center items-center my-1' />
        </div>
        <div className={`${contentSliderCSS.swiperPagination} flex items-center justify-center`}></div>
        <div className={`${contentSliderCSS.swiperButtonNext} ${contentSliderCSS.sliderArrow} !flex !justify-center !items-center cursor-pointer bg-primary`}>
          <IoIosArrowForward className='text-5xl flex justify-center items-center my-1' />
        </div>
      </div>
    </div>
  );
};

export default ContentDetailSlider;
