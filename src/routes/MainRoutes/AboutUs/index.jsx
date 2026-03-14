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

const AboutUs = () => {
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
        max-w-[1200px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[650px_520px]
        gap-[30px]
        mt-[30px]
        px-[20px]
        justify-center
        "
      >
        <MultiBrandEcosystem />
        <CentralizedOperations />
      </div>


      <div
        className="
        max-w-[1200px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[520px_650px]
        gap-[30px]
        mt-[30px]
        px-[20px]
        justify-center
        "
      >
        <TechnologyGrowth />
        <StructuredFranchiseModels />
      </div>

      <div className="max-w-[1200px] mx-auto px-[20px] lg:px-0">
        <FranchiseFormats />
      </div>

      <div className="pt-[40px] pb-[80px]">
        <FranchiseCTA />
      </div>
    </div>
  );
};

export default AboutUs;
