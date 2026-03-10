import React from "react";
import { useNavigate } from "react-router-dom";
import { brands, bgColors } from "../../../../db";

/* ---------------- CARD ---------------- */

const SampleCard = ({ item, handler }) => {
  return (
    <div className="">
      <div className="group relative flex flex-col bg-[#262626] rounded-[20px] w-full h-[460px] text-gray-300 overflow-hidden transition-all duration-500">

        {/* Glow Background */}
        <div
          className="absolute bottom-0 h-0 w-full rounded-t-full blur-2xl transition-all duration-500 group-hover:h-48"
          style={{ background: bgColors[item?.id - 1] }}
        />

        {/* Content */}
        <div className="pt-6 z-10 text-center px-6">
          <h5 className="font-bricolageBold text-2xl font-bold text-white">
            {item?.label}
          </h5>

          <p className="pt-3">
            {item?.desc.substring(0, 100)}...
          </p>
        </div>

        {/* Button */}
        <div className="z-10 flex flex-col items-center pt-6">
          <button
            onClick={handler}
            className="
            text-xs py-3 px-6 rounded-lg
            border-2 border-white
            font-bold uppercase
            transition-all duration-300
            bg-transparent text-white
            group-hover:bg-[#f2b44c]
            group-hover:border-none
            group-hover:text-black
            "
          >
            View Menu
          </button>
        </div>

        {/* Image */}
        <div className="mt-auto pb-6 z-10 flex justify-center px-4">
          <img
            src={item?.image}
            alt="card"
            className="w-full max-h-[240px] object-contain transition-transform duration-500 group-hover:-rotate-[10deg]"
          />
        </div>

      </div>
    </div>
  );
};

/* ---------------- GRID COMPONENT ---------------- */

const BrandsCards = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-4 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {brands?.map((item, i) => (
            <SampleCard
              key={i}
              item={item}
              handler={() =>
                navigate(`/brands/${item?.slug}`, {
                  state: { slug: item?.slug },
                })
              }
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default BrandsCards;