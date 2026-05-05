import React, { useState, useEffect } from "react";
import download from "../../../assets/brands/download.png";
import { getRestaurantDetails } from "../../../api/restaurantApi";

export default function BrandMenu({ item }) {
  const [menuItems, setMenuItems] = useState([]);
  const [active, setActive] = useState("");
  const [menuImage, setMenuImage] = useState("");

  useEffect(() => {
    fetchMenu();
  }, [item]);

  const fetchMenu = async () => {
    if (!item?.id) return;

    try {
      const res = await getRestaurantDetails(item.id);

      const apiItems = res?.data?.menuItems || [];
      const menuImg = res?.data?.restaurant?.menu_image;

      setMenuImage(menuImg);

      const formatted = apiItems.map((food) => ({
        title: food.name,
        desc: food.description,
        image: food.image,
        category: food.category || "All",
      }));

      setMenuItems(formatted);

      if (formatted.length) {
        setActive(formatted[0].category);
      }
    } catch (error) {
      console.log("API ERROR:", error);
    }
  };

  const categories = [...new Set(menuItems.map((i) => i.category))];

  const handleMenuDownload = () => {
    if (!menuImage) {
      alert("Menu not available");
      return;
    }

    const link = document.createElement("a");
    link.href = menuImage;
    link.download = `${item?.name || "menu"}.pdf`;
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((i) => i.category === active);

  const firstSix = filtered.slice(0, 6);
  const restCards = filtered.slice(6);

  return (
    <section className="max-w-7xl mx-auto py-10 md:py-14 text-white px-4 lg:px-0">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-2xl md:text-3xl font-bricolageSemiBold">Menu</h2>

        <button
          onClick={handleMenuDownload}
          className="group inline-flex items-center gap-2 border border-[#FDBD5B] text-[#FDBD5B] px-5 py-2 rounded-full hover:bg-[#FDBD5B] hover:text-black cursor-pointer transition text-sm md:text-base whitespace-nowrap"
        >
          <img
            src={download}
            alt="Download"
            className="w-4 h-4 transition duration-200 group-hover:invert"
          />
          Download Menu
        </button>
      </div>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
        
        {/* FOOD ITEMS */}
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

        {/* MOBILE APP CARD - Desktop only */}
        {item?.mobileApp && (
          <div
            className="
              hidden lg:flex
              bg-[#2a2a2a]
              rounded-2xl
              px-6 py-8
              flex-col items-center text-center
              w-full max-w-[340px]
              mx-auto lg:mx-0
            "
          >
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

      {/* REMAINING ITEMS */}
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

            <p className="text-gray-400 text-sm line-clamp-2">{food.desc}</p>
          </div>
        ))}
      </div>

      {/* MOBILE APP CARD - Mobile only (shown after remaining items) */}
      {item?.mobileApp && (
        <div
          className="
            lg:hidden
            mt-10
            bg-[#2a2a2a]
            rounded-2xl
            px-6 py-8
            flex flex-col items-center text-center
            w-full lg:max-w-[340px]
            mx-auto
          "
        >
          {item.mobileApp?.logo && (
            <img
              src={item.mobileApp.logo}
              alt="logo"
              className="w-48 sm:w-30 md:w-34 mb-5"
            />
          )}

          <img
            src={item.mobileApp?.qrCode}
            alt="QR"
            className="w-48 sm:w-46 md:w-50 mb-4"
          />

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
                className="w-48 sm:w-46 md:w-50"
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
                className="w-48 sm:w-46 md:w-50"
              />
            </a>
          )}
        </div>
      )}
    </section>
  );
}