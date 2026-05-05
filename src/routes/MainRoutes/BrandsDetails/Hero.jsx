import React, { useEffect, useState } from "react";
import { P } from "../../../components/Typography";
import { Container } from "../../../components/Layout";
import BrandMenu from "./BrandMenu";
import { useNavigate } from "react-router-dom";
import BrandAdvantages from "./BrandAdvantages";
import {
  getRestaurantFeatures,
  getRestaurantRevenue, // ✅ NEW
} from "../../../api/restaurantApi";
import ReelsRow from "./ReelsRow";
import ImageRow from "./ImageRow";

function Hero({ item, routeKey }) {
  const navigate = useNavigate();

  const [features, setFeatures] = useState([]);
  const [revenue, setRevenue] = useState([]); // ✅ NEW
  const [hasImages, setHasImages] = useState(false);
  const [hasReels, setHasReels] = useState(false);

  // ✅ FETCH FEATURES
  useEffect(() => {
    const fetchFeatures = async () => {
      if (!item?.id) return;

      const data = await getRestaurantFeatures(item.id);
      console.log("FEATURES:", data);

      setFeatures(data || []);
    };

    fetchFeatures();
  }, [item?.id]);

  // ✅ FETCH REVENUE
  useEffect(() => {
    const fetchRevenue = async () => {
      if (!item?.id) return;

      const data = await getRestaurantRevenue(item.id);
      console.log("REVENUE:", data);

      setRevenue(data || []);
    };

    fetchRevenue();
  }, [item?.id]);

  // Check if ImageRow and ReelsRow have content
  useEffect(() => {
    const checkContent = async () => {
      if (!item?.id) return;

      try {
        const { getRestaurantDetails } = await import("../../../api/restaurantApi");
        const res = await getRestaurantDetails(item.id);
        
        const imageLinks = res?.restaurant?.image_link ||
                          res?.data?.restaurant?.image_link ||
                          res?.data?.data?.restaurant?.image_link ||
                          [];
        
        const reelLinks = res?.restaurant?.reel_link ||
                         res?.data?.restaurant?.reel_link ||
                         res?.data?.data?.restaurant?.reel_link ||
                         [];
        
        setHasImages(imageLinks.length > 0);
        setHasReels(reelLinks.length > 0);
      } catch (err) {
        console.error("Error checking content:", err);
        setHasImages(false);
        setHasReels(false);
      }
    };

    checkContent();
  }, [item?.id]);

  const showMarketingSupport = hasImages || hasReels;

  return (
    <div className="pb-14">
      <div className="w-full">

        {/* Banner */}
        <div className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] w-full">
          <img
            src={item?.backgroundImg}
            alt="banner"
            className="w-full h-full object-cover object-center"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "transparent linear-gradient(184deg, #00000000 0%, #000000 100%)",
            }}
          />
          {/* <div className="size-80 mx-auto bg-green-100 rounded-full">
          <img
            src={item?.image}
            alt="brands"
            className="size-full rounded-full p-5"
          />
        </div> */}
          {/* Logo with Cover Image Background */}
          <div className="size-80 absolute -bottom-28 sm:-bottom-20 md:-bottom-24 lg:-bottom-28 left-1/2 -translate-x-1/2 flex items-center justify-center">
            {/* Cover Image Background */}
            {item?.coverImg && (
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  backgroundImage: `url(${item.coverImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )}

            {/* Logo wrapper */}
            <div className="relative z-10 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] aspect-square rounded-full bg-[#2a2a2a] flex items-center justify-center">
              <img
                src={item?.image}
                alt="brand logo"
                className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-28 sm:pt-32 md:pt-40 lg:pt-48">
          <div className="text-center px-4 lg:px-0 py-6 lg:py-0">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bricolageSemiBold leading-tight mb-6">
              {item?.label}
            </h1>

            <P className="lg:w-[60%] mx-auto pt-4 text-sm sm:text-base md:text-lg">
              {item?.desc}
            </P>

            <hr className="w-full lg:w-screen mx-auto mt-8 border-t border-gray-300 opacity-60" />
          </div>
        </div>
      </div>

      {/* Menu */}
      <BrandMenu item={item} id={item?.id} />
      
      {/* Marketing Support Section - Only show if images or reels exist */}
      {showMarketingSupport && (
        <>
          <div className="text-center mt-12 mb-6">
            <h1 className="mx-auto text-center font-bricolageBold text-2xl md:text-3xl font-bold text-[#FDBD5B]">
              Marketing Support
            </h1>
          </div>
          <ImageRow restaurantId={item?.id} />      
          <ReelsRow restaurantId={item?.id} />
        </>
      )}

      {/* If no images/reels, just render components without title */}
      {!showMarketingSupport && (
        <>
          <ImageRow restaurantId={item?.id} />      
          <ReelsRow restaurantId={item?.id} />
        </>
      )}
      
      {/* Franchise Section */}
      {routeKey !== "amma-ka-tiffin" && (
        <div className="bg-black-100 text-white-800 p-4 sm:p-6 font-sans">

          <header className="text-center py-6">
            <h1 className="font-bricolageBold text-2xl md:text-3xl font-bold text-[#FDBD5B]">
              Why <span>{item?.label}</span> Foods Franchise ?
            </h1>

            <p className="text-white mt-2 text-sm md:text-base">
              Biggest Cloud Kitchen of the City
            </p>
          </header>

          <section className="mt-0 text-white">
            <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mx-auto">
              <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-4 md:p-8 lg:p-10 rounded-3xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                  Our USP
                </h3>

                <ul className="space-y-4 md:space-y-5">
                  {revenue.length > 0 ? (
                    revenue.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 md:gap-4">
                        <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-[#FDBD5B] text-black text-sm font-bold">                          ✓
                        </span>
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">
                      No revenue data available
                    </p>
                  )}
                </ul>
              </div>
              {/* ✅ FEATURES */}
              <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-4 md:p-8 lg:p-10 rounded-3xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                  Key Features
                </h3>

                <ul className="space-y-4 md:space-y-5">
                  {features.length > 0 ? (
                    features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 md:gap-4">
                        <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-[#FDBD5B] text-black text-sm font-bold">                          ✓
                        </span>
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {feature?.title || feature?.name || feature}
                        </span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">
                      No features available
                    </p>
                  )}
                </ul>
              </div>

              {/* ✅ REVENUE (API CONNECTED) */}


            </div>
          </section>

          <BrandAdvantages />

          {/* Formats */}
          <section className="mt-14 md:mt-20 text-white">
            <h2 className="font-bricolageBold text-2xl md:text-3xl text-center mb-10 md:mb-12">
              Franchise Formats
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-7xl">

              <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 rounded-3xl shadow-lg">
                <h3 className="text-lg font-semibold mb-3">FOFO</h3>
                <p className="text-gray-300 text-sm">
                  Franchise Owned, Franchise Operated model.
                </p>
                <button onClick={() => navigate("/fofo-model")} className="mt-4 text-[#FDBD5B]">
                  Know More ›
                </button>
              </div>

              <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 rounded-3xl shadow-lg">
                <h3 className="text-lg font-semibold mb-3">FOCO</h3>
                <p className="text-gray-300 text-sm">
                  Franchise Owned, Company Operated model.
                </p>
                <button onClick={() => navigate("/foco-model")} className="mt-4 text-[#FDBD5B]">
                  Know More ›
                </button>
              </div>

              <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 rounded-3xl shadow-lg">
                <h3 className="text-lg font-semibold mb-3">White Label</h3>
                <p className="text-gray-300 text-sm">
                  Operate under your brand name.
                </p>
                <button className="mt-4 text-[#FDBD5B]">
                  Know More ›
                </button>
              </div>

            </div>
          </section>

        </div>
      )}
    </div>
  );
}

export default Hero;