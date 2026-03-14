import React, { useState, useEffect } from "react";
import download from "../../../assets/brands/download.png";
import { getRestaurantDetails } from "../../../api/restaurantApi";

export default function BrandMenu({ item }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [item]);

  const fetchMenu = async () => {
    if (!item?.id) return;

    try {
      const res = await getRestaurantDetails(item.id);

      const apiItems = res?.data?.menuItems || [];

      const formatted = apiItems.map((food) => ({
        title: food.name,
        desc: food.description,
        image: food.image,
      }));

      setMenuItems(formatted);
    } catch (error) {
      console.log("API ERROR:", error);
    }
  };

  const firstSix = menuItems.slice(0, 6);
  const restCards = menuItems.slice(6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 text-white">

      {/* Download button */}
      <div className="flex justify-end mb-6 md:mb-10">

        {item?.menuDownloadLink && (

          <a
            href={item.menuDownloadLink}
            className="border border-yellow-400 text-yellow-400 px-4 md:px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition text-sm md:text-base"
          >
            <img src={download} alt="Download" className="size-4" />
            Download Menu
          </a>

        )}

      </div>

      {/* FIRST 6 CARDS + PHONE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">

        {/* Food Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {firstSix.map((food, i) => (

            <div key={i}>

              <img
                src={food.image}
                alt={food.title}
                className="w-full h-[180px] sm:h-[200px] object-cover rounded-xl"
              />

              <h3 className="mt-3 text-base md:text-lg font-semibold">
                {food.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                {food.desc}
              </p>

            </div>

          ))}

        </div>

        {/* MOBILE APP CARD */}
        {item?.mobileApp && (

          <div className="bg-[#2a2a2a] rounded-2xl px-6 py-8 flex flex-col items-center text-center w-full max-w-[340px] mx-auto lg:mx-0">

            {item.mobileApp?.logo && (
              <img
                src={item.mobileApp.logo}
                alt="logo"
                className="w-26 sm:w-30 md:w-34 mb-5"
              />
            )}

            <img
              src={item.mobileApp?.qrCode}
              alt="QR"
              className="w-42 sm:w-46 md:w-50 mb-4"
            />

            <p className="text-sm text-gray-300 mb-5">
              Scan to download
            </p>

            {item.mobileApp?.playStore && (

              <a
                href={item.mobileApp.playStore.link}
                target="_blank"
                rel="noreferrer"
                className="mb-3"
              >

                <img
                  src={item.mobileApp.playStore.badge}
                  alt="Google Play"
                  className="w-42 sm:w-46 md:w-50"
                />

              </a>

            )}

            {item.mobileApp?.appStore && (

              <a
                href={item.mobileApp.appStore.link}
                target="_blank"
                rel="noreferrer"
              >

                <img
                  src={item.mobileApp.appStore.badge}
                  alt="App Store"
                  className="w-42 sm:w-46 md:w-50"
                />

              </a>

            )}

          </div>

        )}

      </div>

      {/* REST CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

        {restCards.map((food, i) => (

          <div key={i}>

            <img
              src={food.image}
              alt={food.title}
              className="w-full h-[180px] sm:h-[200px] object-cover rounded-xl"
            />

            <h3 className="mt-3 text-base md:text-lg font-semibold">
              {food.title}
            </h3>

            <p className="text-gray-400 text-sm line-clamp-2">
              {food.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}