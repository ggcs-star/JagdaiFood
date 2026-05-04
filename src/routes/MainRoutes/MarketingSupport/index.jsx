import React, { useEffect } from "react";
import BrandSlider1 from "./components/BrandSlider1";
// import ContentSlider1 from "./components/ContentSlider1";
import ContentSlider2 from "./components/ContentSlider2";

export default function MarketingSupport() {
    // ✅ Scroll to top on page load
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // use "auto" if you want instant
      });
    }, []);

  return (
    <div className="lg:w-[99vw] pt-24 lg:pt-48 w-screen !bg-black">
      <BrandSlider1 className='overflow-x-hidden '/>
      <ContentSlider2 className='overflow-x-hidden'/>
    </div>
  );
}
