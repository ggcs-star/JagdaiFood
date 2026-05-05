import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ImageRow({ restaurantId, imagesData }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliderKey, setSliderKey] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Extract Instagram post ID from URL
  const getInstagramPostId = (url) => {
    if (!url) return null;

    const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|reels)\/([^/?]+)/;
    const match = url.match(instagramRegex);

    return match && match[1] ? match[1] : null;
  };

  // Get Instagram embed URL for image posts
  const getInstagramEmbedUrl = (url) => {
    const postId = getInstagramPostId(url);
    if (postId) {
      return `https://www.instagram.com/p/${postId}/embed`;
    }
    return null;
  };

  // Check if URL is an Instagram link
  const isInstagramPost = (url) => {
    return url && (url.includes('instagram.com') && (url.includes('/p/') || url.includes('/reel/') || url.includes('/reels/')));
  };

  // Fetch images data
  useEffect(() => {
    fetchImages();
  }, [restaurantId]);

  const fetchImages = async () => {
    if (!restaurantId && !imagesData) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      let imageLinks = [];

      // If imagesData is provided directly
      if (imagesData) {
        imageLinks = imagesData;
      }
      // Otherwise fetch from API
      else if (restaurantId) {
        const { getRestaurantDetails } = await import("../../../api/restaurantApi");
        const res = await getRestaurantDetails(restaurantId);

        imageLinks = res?.restaurant?.image_link ||
          res?.data?.restaurant?.image_link ||
          res?.data?.data?.restaurant?.image_link ||
          [];
      }

      // Convert image links to image objects
      const imageObjects = imageLinks.map((link, index) => ({
        id: index,
        originalUrl: link,
        embedUrl: isInstagramPost(link) ? getInstagramEmbedUrl(link) : null,
        isInstagram: isInstagramPost(link),
        title: `Image ${index + 1}`
      }));

      setImages(imageObjects);
    } catch (err) {
      console.error("Error fetching images:", err);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  // Reset when images change
  useEffect(() => {
    setSliderKey(prev => prev + 1);
  }, [images]);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Render Instagram embed
  const renderInstagramEmbed = (image) => {
    if (!image.embedUrl) {
      return (
        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500 p-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>Unable to load Instagram post</p>
            <a
              href={image.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-pink-600 transition"
            >
              View on Instagram
            </a>
          </div>
        </div>
      );
    }

    return (
      <div
        className="w-full h-full overflow-hidden bg-white cursor-pointer"
        onClick={() => openLightbox(image)}
      >
        <iframe
          src={image.embedUrl}
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allow="encrypted-media"
          title={image.title}
          style={{ minHeight: '489px' }}
        />
      </div>
    );
  };

  // Render placeholder for unsupported formats
  const renderPlaceholder = (image) => {
    return (
      <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => openLightbox(image)}>
        <div className="text-center text-gray-400 p-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>View Image</p>
          <a
            href={image.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Open in Instagram
          </a>
        </div>
      </div>
    );
  };

  // Render content based on image type
  const renderContent = (image, index) => {
    if (image.isInstagram) {
      return renderInstagramEmbed(image);
    } else {
      return renderPlaceholder(image);
    }
  };

  // Don't show loading spinner if no images
  if (loading) {
    return null;
  }

  // Don't render anything if there are no images
  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-full my-12">
        <div className="max-w-7xl mx-auto px-4 relative select-none">
          {/* <h1 className="mx-auto text-center font-bricolageBold text-2xl md:text-3xl font-bold text-[#FDBD5B]">
            Marketing Support
          </h1> */}
          {/* Prev Button */}
          <div
            id="images-prev"
            className="swiper-button-prev !w-8 !h-8 rounded-full after:!text-lg bg-[#FDBD5B] p-2 !text-black 
            lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[-20px] cursor-pointer z-10 shadow-lg hover:bg-[#FDBD5B]/90 transition"
          ></div>

          <div className="w-[90%] lg:w-full max-w-6xl mx-auto px-4 relative">
            <Swiper
              key={sliderKey}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={3}
              loop={images.length > 3}
              navigation={{
                nextEl: '#images-next',
                prevEl: '#images-prev',
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 15 },
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={`${sliderKey}-${image.id}-${index}`}>
                  <div className="bg-white rounded-xl shadow-lg h-[489px] overflow-hidden">
                    {renderContent(image, index)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button */}
          <div
            id="images-next"
            className="swiper-button-next !w-8 !h-8 rounded-full after:!text-lg bg-[#FDBD5B] p-2 !text-black 
            lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 cursor-pointer z-10 shadow-lg hover:bg-[#FDBD5B]/90 transition"
          ></div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full h-full min-h-[500px]">
              {selectedImage.isInstagram && selectedImage.embedUrl ? (
                <iframe
                  src={selectedImage.embedUrl}
                  className="w-full h-[90vh]"
                  frameBorder="0"
                  scrolling="yes"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title={selectedImage.title}
                />
              ) : (
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <div className="text-white mb-4">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-300 mb-4">Full image preview not available</p>
                      <a
                        href={selectedImage.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                      >
                        View on Instagram
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}