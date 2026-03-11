import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import download from '../../../assets/brands/download.png'

export default function BrandMenu({ item }) {

  const [active, setActive] = useState(item?.menuCategories?.[0] || "");

  const filtered =
    item?.menuItems?.filter((i) => i.category === active) || [];

  return (
    <section className="max-w-7xl mx-auto px-6 py-14 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bricolageSemiBold ">Menu</h2>

        {item?.menuDownloadLink && (
  <a
    href={item.menuDownloadLink}
    className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition"
  >
<img src={download} alt="Download" className="size-4"/>    Download Menu
  </a>
)}

      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-3 mb-10">

        {item?.menuCategories?.map((cat, i) => (

          <button
            key={i}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm transition
            ${
              active === cat
                ? "bg-white text-black"
                : "bg-[#262626] text-gray-300"
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Menu Grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((food, i) => (

            <div key={i}>

              <img
                src={food?.image}
                alt={food?.title}
                className="w-full h-[200px] object-cover rounded-xl"
              />

              <h3 className="mt-3 text-lg font-semibold">
                {food?.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                {food?.desc}
              </p>

            </div>

          ))}

        </div>

        {/* QR Download Card */}
    {item?.mobileApp && (
  <div className="relative bg-[#2a2a2a] rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden">

    {/* Phone Frame Background */}
    {item.mobileApp?.phoneImage && (
      <img
        src={item.mobileApp.phoneImage}
        alt="Phone"
        className="absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none"
      />
    )}

    <div className="relative z-10 flex flex-col items-center">

      {/* Logo */}
      {item.mobileApp?.logo && (
        <img
          src={item.mobileApp.logo}
          alt="logo"
          className="w-28 mb-4"
        />
      )}

      {/* QR Code */}
      <img
        src={item.mobileApp?.qrCode}
        alt="QR"
        className="w-44 mb-4"
      />

      <p className="text-sm text-gray-300 mb-6">
        Scan to download
      </p>

      {/* Playstore */}
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
            className="w-40"
          />
        </a>
      )}

      {/* Appstore */}
      {item.mobileApp?.appStore && (
        <a
          href={item.mobileApp.appStore.link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={item.mobileApp.appStore.badge}
            alt="App Store"
            className="w-40"
          />
        </a>
      )}

    </div>

  </div>
)}

      </div>

    </section>
  );
}