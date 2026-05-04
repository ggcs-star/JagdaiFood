import React from "react";
import AboutHero from "./components/AboutHero";
import OriginStory from "./components/OriginStory";
import MultiBrandEcosystem from "./components/MultiBrandEcosystem";
import CentralizedOperations from "./components/CentralizedOperations";
import TechnologyGrowth from "./components/TechnologyGrowth";
import StructuredFranchiseModels from "./components/StructuredFranchiseModels";
import FranchiseFormats from "./components/FranchiseFormats";
import FranchiseCTA from "./components/FranchiseCta";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useEffect } from "react";

const AboutUs = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);

  return (
    <div className="bg-black">
      <Breadcrumbs
        titleMap={{
          "/who-we-are": "Who We Are",
        }}
      />
      <AboutHero />
      <OriginStory />


      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[680px_560px]

          items-stretch

        gap-8
        mt-[30px]
        justify-center px-4 lg:px-0
        "
      >
        <MultiBrandEcosystem />
        <CentralizedOperations />
      </div>


      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[560px_680px]
          items-stretch
                  gap-8
        mt-[30px]
        justify-center px-4 lg:px-0
        "
      >
        <TechnologyGrowth />
        <StructuredFranchiseModels />
      </div>

      <div className="max-w-7xl mx-auto px-[20px] lg:px-0">
        <FranchiseFormats />
      </div>

      <div className="pt-[40px] pb-[80px]">
        <FranchiseCTA />
      </div>
    </div>
  );
};

export default AboutUs;
