import React, { useEffect, useState } from "react";
import HeroFranchiseModel from "./components/HeroFranchiseModel";
import FofoModelSection from "./components/FofoModelSection";
import FocoModelSection from "./components/FocoModelSection";
import InvestmentOverview from "./components/InvestMentOverView";
import CapitalProtectionFramework from "./components/CapitalProtectionFramework";
import EcosystemBenefitsCard from "./components/EcosystemBenefitsCard";
import ModelFitSection from "./components/ModelFitSection";
import ExploreFranchiseSection from "./components/ExploreFranchiseSection";

export default function FranchiseModels() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
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
    <div className="bg-black min-h-screen text-white">
      <HeroFranchiseModel />
      <FofoModelSection />
      <FocoModelSection />
      <InvestmentOverview />
      <CapitalProtectionFramework />
      <EcosystemBenefitsCard />
      <ModelFitSection />

      <ExploreFranchiseSection />

   
    </div>
  );
}
