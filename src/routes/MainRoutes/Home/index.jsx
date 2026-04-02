import React, { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import MyJagdaiFoods from "./components/MyJagdaiFoods";
import HowYouEarn from "./components/HowYouEarn";
import SystemDriven from "./components/SystemDriven";
import FranchiseModels from "./components/FranchiseModels";
import AdditionalFranchiseModels from "./components/AdditionalFranchiseModels";
import WhyMultiFormatModel from "./components/WhyMultiFormatModel.JSX";
import FranchiseCTA from "./components/FranchiseCTA";
import JagodsAppSection from "./components/JagodsAppSection";
import BrandsCarousel from "../../../components/BrandsCarousel";
import WhyJagdai from "./components/WhyJagdai";
import CapitalGuarantee from "./components/MyJagdaiFoods";
import FAQAccordion from "./components/FAQAccordion";
import CoreHooks from "./components/CoreHooks";
import PanoramaSlider from "./components/PanormaSlider";
import FranchiseCards from "./components/FranchiseCards";
import BrandsPower from "./components/BrandsPower";
import FoodBusinessModal from "./components/FoodBusinessModal";
import QSRFranchiseSection from "./components/QSRFranchiseSection";

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showFoodModal, setShowFoodModal] = useState(true); // ✅ FIXED
  const heroRef = useRef(null); // ✅ NEW

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);

    // ✅ SHOW MODAL AFTER HERO SECTION
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollTop > heroHeight - 100) {
        setShowFoodModal(true);
      } else {
        setShowFoodModal(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStrokeDashoffset = () => {
    const circleLength = 2 * Math.PI * 24;
    return circleLength - (circleLength * scrollPercentage) / 100;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStrokeColor = () => {
    return scrollPercentage > 0 ? "#22d1b6" : "gray";
  };

  return (
    <div className="">
      

      {showFoodModal && (
        <FoodBusinessModal onClose={() => setShowFoodModal(false)} />
      )}

      {/* HERO WITH REF */}
        <HeroSection />

      {/* <CoreHooks/> */}

    
      <QSRFranchiseSection/>

      {/* <BrandsPower /> */}
      <FranchiseCards />
      <CapitalGuarantee />

      <PanoramaSlider />
      {/* <MyJagdaiFoods /> */}
      {/* <FranchiseModels />
      <AdditionalFranchiseModels />
      <HowYouEarn />
      <CapitalGuarantee />
      <BrandsCarousel />
      <SystemDriven />
      <WhyJagdai /> */}

      {/* <WhyMultiFormatModel /> */}
      <JagodsAppSection />

      <FranchiseCTA />
      {/* <FAQAccordion/> */}

      {/* {scrollPercentage > 0 && (
        <div
          className="back-to-top right-aligned primary-color scroll-position-style active"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span
            className="icon-arrow-up text-primary"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "20px",
              // color: primary,
            }}
          >
            ↑
          </span>

          <svg height="50" width="50" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="23"
              style={{
                fill: "none",
                stroke: getStrokeColor(),
                strokeWidth: "2",
                strokeDasharray: `${2 * Math.PI * 24}`,
                strokeDashoffset: getStrokeDashoffset(),
                transition:
                  "stroke-dashoffset 0.3s ease, stroke 0.3s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            <circle
              cx="25"
              cy="25"
              r="22"
              style={{
                fill: "rgba(0, 0, 0, 0.5)",
                strokeWidth: "2",
              }}
            />
          </svg>
        </div>
      )} */}
    </div>
  );
}