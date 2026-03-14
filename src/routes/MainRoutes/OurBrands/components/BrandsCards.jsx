import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bgColors } from "../../../../db";
import { getPopularRestaurants } from "../../../../api/restaurantApi";

const SampleCard = ({ item, handler }) => {
  return (
    <div>
      <div className="group relative flex flex-col bg-[#262626] rounded-[20px] w-full h-[460px] text-gray-300 overflow-hidden transition-all duration-500">

        {/* Glow Background */}
        <div
          className="absolute bottom-0 h-40 w-full rounded-t-full blur-2xl"
          style={{ background: bgColors[item?.id - 1] }}
        />

        {/* Title + Description */}
        <div className="pt-6 z-10 text-center px-6">
          <h5 className="font-bricolageBold text-2xl font-bold text-white">
            {item?.label}
          </h5>

          <p className="pt-3">
            {item?.desc?.substring(0, 100)}...
          </p>
        </div>

        {/* Logo Area (Flexible Space) */}
        <div className="flex flex-1 items-center justify-center px-6 z-10">
          <img
            src={item?.logo}
            alt={item?.label}
            className="max-h-[170px] object-contain"
          />
        </div>

        {/* Button Bottom */}
        <div className="pb-6 z-10 flex justify-center">
          <button
            onClick={handler}
            className="
            text-xs py-3 px-6 rounded-lg
            border-2 border-white
            font-bold uppercase
            bg-transparent text-white
            group-hover:bg-[#f2b44c]
            group-hover:border-[#f2b44c]
            group-hover:text-black
            "
          >
            View Menu
          </button>
        </div>

      </div>
    </div>
  );
};


const BrandsCards = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const restaurants = await getPopularRestaurants();

      if (!Array.isArray(restaurants)) {
        console.error("API did not return an array:", restaurants);
        return;
      }

      const formatted = restaurants.map((item) => ({
        id: item.id,
        label: item.name,
        desc: item.description,
        logo: item.logo, // ⭐ using API logo
        slug: item.name.toLowerCase().replace(/\s+/g, "-"),
      }));

      setBrands(formatted);
    } catch (error) {
      console.log("API ERROR:", error);
    }
  };

  return (
    <div className="bg-black py-4 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
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
