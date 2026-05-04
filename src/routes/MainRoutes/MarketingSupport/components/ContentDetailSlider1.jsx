import React, { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ContentDetailSlider1 = ({ videoUrls }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [playersReady, setPlayersReady] = useState({});
  const [sliderKey, setSliderKey] = useState(0); // 🔥 Force remount key

  const playerRefs = useRef({});
  const swiperRef = useRef(null);

  const getVideoId = (url) => {
    return url.split("/embed/")[1]?.split("?")[0];
  };

  const onPlayerReady = (event, index) => {
    if (event && event.target) {
      playerRefs.current[index] = event.target;
      setPlayersReady(prev => ({ ...prev, [index]: true }));
    }
  };

  const stopAllVideos = () => {
    Object.entries(playerRefs.current).forEach(([index, player]) => {
      if (player && typeof player.pauseVideo === "function") {
        try {
          player.pauseVideo();
        } catch (error) {
          console.log("Error pausing:", error);
        }
      }
    });
  };

  const handleVideoClick = (index) => {
    stopAllVideos();
    setHoveredIndex(index);

    const checkAndPlay = () => {
      const player = playerRefs.current[index];
      if (player && typeof player.playVideo === "function") {
        try {
          player.playVideo();
        } catch (error) {
          console.log("Play error:", error);
        }
      } else {
        setTimeout(checkAndPlay, 100);
      }
    };

    checkAndPlay();
  };

  // 🔥 Fix: When category changes → reset videos fully + remount YouTube iframes
  useEffect(() => {
    stopAllVideos();
    setHoveredIndex(null);
    playerRefs.current = {};

    setSliderKey(prev => prev + 1);   // 🔥 This forces complete slide + iframe remount
  }, [videoUrls]);

  const renderContent = (url, index) => {
    const videoId = getVideoId(url);
    const isHovered = index === hoveredIndex;

    return (
      <div
        className="relative w-full h-full cursor-pointer select-none"
        onClick={() => handleVideoClick(index)}
      >
        {/* Thumbnail */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          className={`w-full h-full object-cover rounded-lg ${isHovered ? "hidden" : "block"}`}
          loading="lazy"
        />

        {/* YouTube Player */}
        <div
          className={`absolute inset-0 ${isHovered ? "block" : "hidden"} rounded-lg overflow-hidden`}
        >
          <YouTube
            videoId={videoId}
            className="w-full h-full"
            iframeClassName="rounded-lg"
            opts={{
              height: "489",
              width: "100%",
              playerVars: {
                autoplay: 0,
                mute: 0,
                controls: 1,
                rel: 0,
                loop: 0,
                modestbranding: 1,
                showinfo: 0,
                iv_load_policy: 3,
                cc_load_policy: 0,
              },
            }}
            onReady={(event) => onPlayerReady(event, index)}
            onStateChange={(event) => {
              if (event.data === 0) {
                setHoveredIndex(null);
              }
            }}
            onError={() => setHoveredIndex(null)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full my-12">
      <div className="max-w-7xl mx-auto px-4 relative select-none">
        {/* Prev Button */}
        <div
          id="content-prev"
          className="swiper-button-prev !w-8 !h-8 rounded-full after:!text-lg bg-green-500 p-2 !text-white 
          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[-20px]"
        ></div>

        <div className="w-[90%] lg:w-full max-w-6xl mx-auto px-4 relative">
          <Swiper
            key={sliderKey}   // 🔥 Force full re-render of Swiper + slides
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            navigation={{
              nextEl: '#content-next',
              prevEl: '#content-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSlideChange={() => {
              stopAllVideos();
              setHoveredIndex(null);
            }}
          >
            {videoUrls?.map((url, index) => (
              <SwiperSlide key={`${sliderKey}-${index}`}>
                <div className="bg-white rounded-lg shadow-lg h-[489px]">
                  {renderContent(url, index)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Next Button */}
        <div
          id="content-next"
          className="swiper-button-next !w-8 !h-8 rounded-full after:!text-lg bg-green-500 p-2 !text-white 
          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0"
        ></div>
      </div>
    </div>
  );
};

export default ContentDetailSlider1;
