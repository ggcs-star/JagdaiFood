import React, { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ContentDetailSlider2 = ({ videos }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [playersReady, setPlayersReady] = useState({});
  const [sliderKey, setSliderKey] = useState(0);

  const playerRefs = useRef({});
  const swiperRef = useRef(null);
  const instagramRefs = useRef({});

  const getVideoId = (url) => {
    if (!url) return null;
    
    // YouTube URL
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      if (url.includes('/embed/')) {
        return url.split("/embed/")[1]?.split("?")[0];
      }
      // Handle other YouTube URL formats
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    }
    
    return null;
  };

  const getInstagramEmbedUrl = (url) => {
    // Extract Instagram post/reel ID
    const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|reels)\/([^/?]+)/;
    const match = url.match(instagramRegex);
    
    if (match && match[1]) {
      return `https://www.instagram.com/p/${match[1]}/embed`;
    }
    return null;
  };

  const isYouTubeVideo = (url) => {
    return url && (url.includes('youtube.com') || url.includes('youtu.be'));
  };

  const isInstagramVideo = (url) => {
    return url && (url.includes('instagram.com') && (url.includes('/p/') || url.includes('/reel/') || url.includes('/reels/')));
  };

  const onPlayerReady = (event, index) => {
    if (event && event.target) {
      playerRefs.current[index] = event.target;
      setPlayersReady(prev => ({ ...prev, [index]: true }));
    }
  };

  const stopAllVideos = () => {
    // Stop YouTube videos
    Object.entries(playerRefs.current).forEach(([index, player]) => {
      if (player && typeof player.pauseVideo === "function") {
        try {
          player.pauseVideo();
        } catch (error) {
          console.log("Error pausing YouTube video:", error);
        }
      }
    });
    
    // Reset Instagram embeds by removing and re-adding them
    Object.entries(instagramRefs.current).forEach(([index, container]) => {
      if (container) {
        const iframe = container.querySelector('iframe');
        if (iframe) {
          const parent = iframe.parentNode;
          const src = iframe.src;
          const newIframe = document.createElement('iframe');
          newIframe.src = src;
          newIframe.className = iframe.className;
          newIframe.style = iframe.style;
          newIframe.setAttribute('frameborder', '0');
          newIframe.setAttribute('scrolling', 'yes');
          newIframe.setAttribute('allowtransparency', 'true');
          newIframe.setAttribute('allow', 'encrypted-media');
          parent.replaceChild(newIframe, iframe);
        }
      }
    });
  };

  const handleVideoClick = (index, video) => {
    stopAllVideos();
    setHoveredIndex(index);

    if (isYouTubeVideo(video.videoUrl)) {
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
    }
  };

  useEffect(() => {
    stopAllVideos();
    setHoveredIndex(null);
    playerRefs.current = {};
    instagramRefs.current = {};
    setSliderKey(prev => prev + 1);
  }, [videos]);

  const renderYouTubeContent = (video, index) => {
    const videoId = getVideoId(video.videoUrl);
    const isHovered = index === hoveredIndex;

    return (
      <div
        className="relative w-full h-full cursor-pointer select-none"
        onClick={() => handleVideoClick(index, video)}
      >
        <img
          src={video.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={video.title || "Video thumbnail"}
          className={`w-full h-full object-cover rounded-lg ${isHovered ? "hidden" : "block"}`}
          loading="lazy"
        />
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

  const renderInstagramContent = (video, index) => {
    const embedUrl = getInstagramEmbedUrl(video.videoUrl);
    // Instagram videos are always visible, no thumbnail/hover state
    const isVisible = true;

    if (!embedUrl) {
      return (
        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500 p-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>Invalid Instagram URL</p>
            <p className="text-xs mt-2">Please check the video URL</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full rounded-lg overflow-hidden bg-white">
        <div 
          ref={el => instagramRefs.current[index] = el}
          className="w-full h-full"
        >
          <iframe
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            scrolling="yes"
            allowTransparency="true"
            allow="encrypted-media"
            title={video.title || `Instagram Reel ${index}`}
          />
        </div>
      </div>
    );
  };

  const renderContent = (video, index) => {
    if (isYouTubeVideo(video.videoUrl)) {
      return renderYouTubeContent(video, index);
    } else if (isInstagramVideo(video.videoUrl)) {
      return renderInstagramContent(video, index);
    } else {
      // Fallback for unsupported URLs
      return (
        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500 p-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p>Unsupported video format</p>
            <p className="text-xs mt-2">Please check the video URL</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full my-12">
      <div className="max-w-7xl mx-auto px-4 relative select-none">
        {/* Prev Button */}
        <div
          id="content-prev"
          className="swiper-button-prev !w-8 !h-8 rounded-full after:!text-lg bg-green-500 p-2 !text-white 
          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[-20px] cursor-pointer z-10"
        ></div>

        <div className="w-[90%] lg:w-full max-w-6xl mx-auto px-4 relative">
          <Swiper
            key={sliderKey}
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
            {videos?.map((video, index) => (
              <SwiperSlide key={`${sliderKey}-${video.id}-${index}`}>
                <div className="bg-white rounded-lg shadow-lg h-[489px] overflow-hidden">
                  {renderContent(video, index)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Next Button */}
        <div
          id="content-next"
          className="swiper-button-next !w-8 !h-8 rounded-full after:!text-lg bg-green-500 p-2 !text-white 
          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 cursor-pointer z-10"
        ></div>
      </div>
    </div>
  );
};

export default ContentDetailSlider2;