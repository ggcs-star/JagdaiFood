import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Hero from "./Hero";
import { getPopularRestaurants } from "../../../api/restaurantApi";
import { brands } from "../../../db";

/* mobile card images */
import jagodsLogo from "../../../assets/brands/jagodsLogo.svg";
import scanner from "../../../assets/brands/scanner.png";
import playstoreimage from "../../../assets/brands/playstoreimage.png";
import appstoreimage from "../../../assets/brands/appstoreimage.png";

export default function BrandsDetails() {

  const { key } = useParams();

  const [state, setState] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchBrand();
  }, [key]);

  const fetchBrand = async () => {

    try {

      const restaurants = await getPopularRestaurants();

      const restaurant = restaurants.find(
        (r) => r.name.toLowerCase().replace(/\s+/g, "-") === key
      );

      if (!restaurant) {
        setState({
          loading: false,
          data: {},
        });
        return;
      }

      const dbBrand = brands.find((b) => b.slug === key);

      const formatted = {
        label: restaurant.name,
        desc: restaurant.description,
        image: restaurant.logo,
        backgroundImg: restaurant.coverImg,
        id: restaurant.id,

        menuCategories: dbBrand?.menuCategories || [],
        menuItems: dbBrand?.menuItems || [],

        mobileApp: {
          logo: jagodsLogo,
          qrCode: scanner,

          playStore: {
            badge: playstoreimage,
            link: "https://play.google.com/store/apps/details?id=com.jagdai",
          },

          appStore: {
            badge: appstoreimage,
            link: "https://apps.apple.com/app/jagdai",
          },
        },
      };

      setState({
        loading: false,
        data: formatted,
      });

    } catch (error) {

      console.log("API ERROR:", error);

    }

  };

  return (

    <div className="bg-black min-h-screen w-full">

      <div className="w-full">

        {state.loading ? (

          <div className="flex items-center justify-center h-[60vh] text-white text-lg">
            loading...
          </div>

        ) : (

          <Hero item={state.data} />

        )}

      </div>

    </div>

  );

}