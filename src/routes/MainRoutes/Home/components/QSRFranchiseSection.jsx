import React, { useEffect, useState, useRef } from "react";
import BrandsPower from "./BrandsPower";
import { createGlobalStyle } from "styled-components";

import icon1 from "../../../../assets/home/corepower/icon1.png";
import icon2 from "../../../../assets/home/corepower/icon2.png";
import icon3 from "../../../../assets/home/corepower/icon3.png";
import icon4 from "../../../../assets/home/corepower/icon4.png";
import icon5 from "../../../../assets/home/corepower/icon5.png";
import icon6 from "../../../../assets/home/corepower/icon6.png";
import icon7 from "../../../../assets/home/corepower/icon7.png";
import icon8 from "../../../../assets/home/corepower/icon8.png";
import icon9 from "../../../../assets/home/corepower/icon9.png";
import icon10 from "../../../../assets/home/corepower/icon10.png";
import icon11 from "../../../../assets/home/corepower/icon11.png";
import icon12 from "../../../../assets/home/corepower/icon12.png";
import icon13 from "../../../../assets/home/corepower/icon13.png";
import icon14 from "../../../../assets/home/corepower/icon14.png";
import icon15 from "../../../../assets/home/corepower/icon15.png";
import icon16 from "../../../../assets/home/corepower/icon16.png";
import icon17 from "../../../../assets/home/corepower/icon17.png";
import icon18 from "../../../../assets/home/corepower/icon18.png";
import icon19 from "../../../../assets/home/corepower/icon19.png";
import icon20 from "../../../../assets/home/corepower/icon20.png";
import icon21 from "../../../../assets/home/corepower/icon21.png";
import icon22 from "../../../../assets/home/corepower/icon22.png";
import icon23 from "../../../../assets/home/corepower/icon23.png";
import icon26 from "../../../../assets/home/corepower/icon1.png";
import icon27 from "../../../../assets/home/corepower/icon2.png";
import icon28 from "../../../../assets/home/corepower/icon26.png";
import icon29 from "../../../../assets/home/corepower/icon27.png";
import icon30 from "../../../../assets/home/corepower/icon28.png";
import { Link } from "react-router-dom";

import trolleyBg from "../../../../assets/home/herosection/buttonimage.png";
import free from "../../../../assets/home/corepower/free.png";
import upos from "../../../../assets/home/corepower/upos.png";

import qsr from "../../../../assets/home/corepower/qsr.png";
import qsr2 from "../../../../assets/home/corepower/qsr2.png";
import qsr3 from "../../../../assets/home/corepower/qsr3.png";
import qsr4 from "../../../../assets/home/corepower/qsr4.png";
import qsr5 from "../../../../assets/home/corepower/qsr5.png";
import Franchiseheader from "../components/FranchiseHeader";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;

export default function QSRFranchiseSection() {
  const [current, setCurrent] = useState(1); // Start at index 1 (first real slide)
  const [isTransition, setIsTransition] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // New state for hover

  const startX = useRef(0);
  const autoplayInterval = useRef(null);
  const touchStartX = useRef(0);
  const carouselRef = useRef(null); // Ref for the carousel container

  const slides = [
    {
      title: "Core Power",
      image: qsr,
      points: [
        { icon: icon1, text: "Starting from ₹6,00,000" },
        { icon: icon2, text: "1 Franchise = 24+ Food Brands" },
        { icon: icon3, text: "Zero Royalty – 100% Your Earnings" },
        { icon: icon4, text: "Ahmedabad's Biggest Cloud Kitchen Access" },
        { icon: icon28, text: "Full Pricing Freedom" },
        { icon: icon29, text: "Location-Based Pricing" },
        { icon: icon30, text: "Decide Your Margins" },
      ],
    },
    {
      title: "Profit & Growth",
      image: qsr2,
      points: [
        { icon: icon5, text: "Multiple Revenue Streams from Day 1" },
        { icon: icon6, text: "Breakeven in ~6 Months" },
        { icon: icon7, text: "ROI in 12–15 Months" },
        { icon: icon8, text: "Up to 35% Gross Profit" },
        { icon: icon9, text: "Cost Advantage (Big Win)" },
        { icon: icon10, text: "Save on Zomato/Swiggy Commissions" },
        { icon: free, text: "Free Listing on Jagods (Zero Commission)" },
        { icon: icon11, text: "Low Operational Cost (~50%)" },
      ],
    },
    {
      title: "Strong Backend System",
      image: qsr3,
      points: [
        { icon: icon12, text: "10,000 sq. ft. Central Kitchen Access" },
        { icon: icon13, text: "Fresh Ready-to-Cook Supply" },
        { icon: icon14, text: "Fully Tech-Driven Operations" },
        { icon: icon15, text: "Integrated Online Delivery System" },
        { icon: icon16, text: "Marketing & Visibility" },
        { icon: icon17, text: "End-to-End Marketing Support" },
        { icon: icon18, text: "Strong Digital Presence (Orders Ready System)" },
      ],
    },
    {
      title: "Trust & Quality",
      image: qsr4,
      points: [
        { icon: icon19, text: "Stainless Steel Infrastructure (Hygiene First)" },
        { icon: icon20, text: "Capital-Secured, Low-Risk Model" },
        { icon: icon21, text: "Bonus Benefits (Free Power)" },
        { icon: upos, text: "Free UPOS – Digital Mall (Worth ₹90,000)" },
        { icon: icon22, text: "Sell 20+ Crore Products & Services" },
        { icon: icon23, text: "Free Tapri Ki Tafri Franchise Included" },
      ],
    },
    {
      title: "Expansion Opportunity",
      image: qsr5,
      points: [
        { icon: icon26, text: "Earn by Expanding Franchise Network" },
        { icon: icon27, text: "Grow into Catering, Ready-to-Eat, Spices & More" },
      ],
    },
  ];

  // Create extended slides with duplicates at both ends for infinite loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Get the actual slide index (0-based for original slides)
  const getActualIndex = (index) => {
    if (index === 0) return slides.length - 1;
    if (index === extendedSlides.length - 1) return 0;
    return index - 1;
  };

  // Stop autoplay
  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  };

  // Start autoplay
  const startAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
    
    // Only start autoplay if not paused, not dragging, and not hovering
    if (!isPaused && !isDragging && !isHovering) {
      autoplayInterval.current = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 3000);
    }
  };

  // Handle autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [isPaused, isDragging, isHovering]);

  // Handle infinite loop for both directions
  useEffect(() => {
    if (!isTransition) return;

    // Loop forward - reached the duplicate of first slide at the end
    if (current === extendedSlides.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setCurrent(1); // Jump to the real first slide
        setTimeout(() => {
          setIsTransition(true);
        }, 50);
      }, 500);
      return () => clearTimeout(timeout);
    }
    
    // Loop backward - reached the duplicate of last slide at the beginning
    if (current === 0) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setCurrent(extendedSlides.length - 2); // Jump to the real last slide
        setTimeout(() => {
          setIsTransition(true);
        }, 50);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [current, isTransition, extendedSlides.length]);

  // Handle drag start
  const handleDragStart = (clientX) => {
    stopAutoplay();
    setIsDragging(true);
    setIsPaused(true);
    setIsTransition(false);
    startX.current = clientX;
  };

  // Handle drag move
  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX.current;
    setDragOffset(diff);
  };

  // Handle drag end
  const handleDragEnd = (clientX) => {
    if (!isDragging) return;
    
    const diff = clientX - startX.current;
    const threshold = 80;
    
    if (Math.abs(diff) > threshold) {
      if (diff > threshold) {
        // Swipe right - go to previous
        setCurrent((prev) => Math.max(0, prev - 1));
      } else if (diff < -threshold) {
        // Swipe left - go to next
        setCurrent((prev) => Math.min(extendedSlides.length - 1, prev + 1));
      }
    }
    
    setDragOffset(0);
    setIsDragging(false);
    setIsTransition(true);
    
    setTimeout(() => {
      setIsPaused(false);
      startAutoplay();
    }, 100);
  };

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.pageX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragMove(e.pageX);
  };

  const onMouseUp = (e) => {
    if (!isDragging) return;
    handleDragEnd(e.pageX);
  };

  // Touch events
  const onTouchStart = (e) => {
    e.preventDefault();
    touchStartX.current = e.touches[0].clientX;
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragEnd(e.changedTouches[0].clientX);
  };

  // Navigate to specific slide
  const goToSlide = (index) => {
    stopAutoplay();
    setCurrent(index + 1); // +1 because extended slides start with duplicate
    setIsPaused(true);
    
    setTimeout(() => {
      setIsPaused(false);
      startAutoplay();
    }, 3000);
  };

  // Hover handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoplay();
  };

  return (
    <div className="bg-black text-white py-6 md:pb-6 px-4" style={{ overflowX: 'hidden' }}>
      <GlobalStyle />
      <Franchiseheader />

      <div className="max-w-7xl mx-auto bg-[#262626] rounded-3xl p-5 md:p-10 relative overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[280px] h-[200px] bg-[#FDBD5B] opacity-85 blur-[45px] rounded-full pointer-events-none"></div>

        {/* HEADER SECTION */}
        <div className="text-center mt-12 relative">
          <h1 className="text-4xl md:text-5xl font-bricolageBold text-white relative z-10">
            QSR Restaurant Franchise
          </h1>

          <div className="mt-3 relative inline-block">
            <span className="text-[#FDBD5B] font-bricolageBold text-xl md:text-2xl relative z-10">
              Starting from ₹
              <span className="relative inline-block">
                6 Lakhs
                <div className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#60D186] rounded-full"></div>
              </span>{" "}
              + GST
            </span>
          </div>

          <p className="text-white text-[18px] mt-3 max-w-xl mx-auto leading-relaxed">
            One outlet. Multiple brands. Your own food business. <br />
            Unlimited earning potential.
          </p>
        </div>

        {/* CAROUSEL SECTION */}
        <div 
          ref={carouselRef}
          className="relative mt-8 md:mt-12"
          style={{ 
            touchAction: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
                transition: isTransition && !isDragging ? 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                willChange: 'transform'
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4"
                >
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-bricolageBold mb-6">
                      {slide.title}
                    </h3>

                    <div className="space-y-4">
                      {slide.points.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 sm:gap-4">
                          <div className="bg-black min-w-[42px] min-h-[42px] sm:min-w-[48px] sm:min-h-[48px] rounded-xl flex items-center justify-center flex-shrink-0">
                            <img
                              src={item.icon}
                              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                              alt="icon"
                            />
                          </div>
                          <p className="text-white font-bricolageSemiBold text-sm sm:text-base md:text-lg leading-tight">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center items-center order-1 md:order-2">
                    <img
                      src={slide.image}
                      className="w-full max-w-[520px] h-auto md:h-[650px] object-contain"
                      alt={slide.title}
                      draggable="false"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drag Overlay */}
          <div
            className="absolute inset-0"
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              zIndex: 10,
              touchAction: 'none'
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={() => {
              if (isDragging) {
                handleDragEnd(startX.current);
              }
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />
        </div>

        {/* DOTS NAVIGATION */}
        <div className="flex justify-center -mt-8 gap-2 !z-50">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="focus:outline-none !z-50 cursor-pointer"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  getActualIndex(current) === i
                    ? 'w-8 bg-orange-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA BUTTON - Mobile */}
        <Link
          to="/franchise-formats/qsr-restaurant-franchise"
          className="lg:hidden flex justify-center mt-8"
        >
          <div className="relative w-72 h-12 sm:h-14 rounded-md overflow-hidden group">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/40 z-0 group-hover:bg-black/30 transition-all" />
            <div
              className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold h-full"
              style={{ animation: "blink 1.2s ease-in-out infinite" }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                QSR Restaurant Franchise
              </span>
              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </div>
        </Link>

        {/* CTA BUTTON - Desktop */}
        <Link
          to="/franchise-formats/qsr-restaurant-franchise"
          className="hidden lg:flex justify-center mt-8"
        >
          <div className="relative w-full max-w-[74rem] h-12 sm:h-14 rounded-md overflow-hidden group">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${trolleyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/40 z-0 group-hover:bg-black/30 transition-all" />
            <div
              className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-bricolageBold h-full"
              style={{ animation: "blink 1.2s ease-in-out infinite" }}
            >
              <span className="text-[#FDBD5B] whitespace-nowrap">
                QSR Restaurant Franchise
              </span>
              <span className="text-white underline hover:text-[#FDBD5B] transition whitespace-nowrap">
                Know More
              </span>
            </div>
          </div>
        </Link>

        {/* BRANDS POWER SECTION */}
        <div className="mt-20 md:mt-28">
          <BrandsPower />
        </div>
      </div>
    </div>
  );
}