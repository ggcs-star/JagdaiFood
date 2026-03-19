import React from "react";
import { Link } from "react-router-dom";
import stall from "../../../../assets/investment/stall.png";
import trolly from "../../../../assets/investment/trolly.png";

export default function FranchiseModels() {
  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-6">

        {/* ================= LEFT CARD ================= */}
        <div className="relative h-[740px] bg-gradient-to-r from-[#262626] to-[#1f1f1f] text-white rounded-[24px] px-[32px] pt-[36px] pb-[20px] flex flex-col justify-between overflow-hidden">

          {/* CONTENT */}
          <div className="max-w-[420px] z-10">
            <h2 className="text-[30px] leading-[40px] font-bricolageBold mb-[16px]">
              Food Trolley Franchise
            </h2>

            <p className="text-[16px] leading-[24px] text-[#bfbfbf] mb-[24px]">
              A smart, low-investment food business designed for high footfall and fast-moving sales.
              <br /><br />
              Operate anywhere, serve instantly, and earn consistently with a fully supported trolley model.
            </p>

            <Link
              to="/franchise-formats/food-tempo-franchise"
              className="inline-block border border-white text-white text-[14px] px-[20px] py-[8px] rounded-[8px] hover:bg-white hover:text-black transition"
            >
              Know More
            </Link>
          </div>

          {/* IMAGE (UPDATED LIKE INTERNET CARD) */}
          <div className="absolute bottom-0 right-0 pointer-events-none">
            <img
              src={trolly}
              alt="trolley"
              className="
                w-[100%] 
                pb-[50px]
                max-w-none 
                object-contain 
                translate-y-[40px] 
                translate-x-[10px]
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]
              "
            />
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="relative h-[740px] bg-[#60d186] rounded-[24px] px-[36px] pt-[36px] pb-[20px] text-black flex flex-col justify-between overflow-hidden">

          {/* CONTENT */}
          <div className="max-w-[550px] z-10">
            <h2 className="text-[30px] leading-[40px] font-bricolageBold mb-[16px]">
              Food Tempo Franchise
            </h2>

            <p className="text-[16px] leading-[24px] mb-[16px]">
              A food tempo is a mobile food business designed for serving customers on the go — now evolved into a powerful, high-capacity model built for volume sales and wider reach.
            </p>

            <p className="text-[16px] leading-[24px] font-semibold mb-[20px]">
              Food Tempo Franchise – High-Volume, Mobile Food Business
            </p>

            <Link
              to="/franchise-formats/chatori-gali"
              className="inline-block border border-black text-black text-[14px] px-[20px] py-[8px] rounded-[8px] hover:bg-black hover:text-white transition"
            >
              Know More
            </Link>
          </div>

          {/* IMAGE (UPDATED LIKE QSR STYLE) */}
          <div className="absolute bottom-0 right-0 pointer-events-none">
            <img
              src={stall}
              alt="food tempo"
              className="
                w-[130%] 
                pb-[60px]
                lg:w-[100%] 
                max-w-none 
                object-contain 
                translate-y-[60px] 
                translate-x-[20px]
                drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}