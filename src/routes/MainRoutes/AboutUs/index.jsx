import React from "react";
import AboutHero from "./components/AboutHero";
import OriginStory from "./components/OriginStory";
import MultiBrandEcosystem from "./components/MultiBrandEcosystem";
import CentralizedOperations from "./components/CentralizedOperations";
import TechnologyGrowth from "./components/TechnologyGrowth";
import StructuredFranchiseModels from "./components/StructuredFranchiseModels";
import FranchiseFormats from "./components/FranchiseFormats";
import FranchiseCTA from "./components/FranchiseCta";
const AboutUs = () => {
  return (
    <div className="bg-black ">
      <AboutHero />
      <OriginStory />

      <div className="max-w-[1200px] mx-auto grid grid-cols-[650px_520px] gap-[30px] mt-[20px] justify-center">
        {" "}
        <MultiBrandEcosystem />
        <CentralizedOperations />
      </div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[520px_650px] gap-[30px] mt-[30px]">
        <TechnologyGrowth />

        <StructuredFranchiseModels />
      </div>
      <FranchiseFormats/>
       <div className="pt-[40px] pb-[80px]">
        <FranchiseCTA />
      </div>
    </div>
  );
};

export default AboutUs;
