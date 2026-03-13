import React from "react";
import { H3, P } from "../../../components/Typography";
import { style } from "framer-motion/client";
import { Container } from "../../../components/Layout";
import BrandMenu from "./BrandMenu";

const features = [
  "Highly Trained Staff with 5-star Master Chef",
  "Only franchise that lets you start your own brand",
  "Take orders for other 24+ brands via Zomato, Swiggy, and Bulk Orders",
  "Stainless steel equipment ensuring premium food quality",
];

const franchiseBenefits = [
  "Earn 3% royalty and 25% upfront franchise fees",
  "10% royalty on billing from food trolleys and internet restaurants",
  "Additional revenue through tiffin services, spices, and gravy base sales",
  "Free CashAqua water bottle SIS franchise"
];


function Hero({ item }) {

  return (
    <div className="pb-14">
      <div className="w-full">

        {/* Banner */}
        <div className="relative h-[360px] w-full">
          <img
            src={item?.backgroundImg}
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "transparent linear-gradient(184deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box",
            }}
          ></div>

          {/* Circle Image */}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2">
            {/* <div className="size-80 mx-auto bg-green-100 rounded-full"> */}
            <img
              src={item?.image}
              alt="brands"
              className="size-full rounded-full p-5"
            />
            {/* </div> */}
          </div>
        </div>

        {/* Content below */}
        <div className="pt-48">
          <div className="text-center lg:py-0 py-10 ">
            <h1 className="px-3 lg:px-0 text-white text-3xl md:text-5xl font-bricolageSemiBold leading-tight mb-6">
              {item?.label}
            </h1>

            {/* <P className="!text-xl !text-yellow-100 py-5 px-8 my-8 border-4 border-gray-500 rounded-full w-fit mx-auto">
        {item?.shortDesc}
      </P> */}

            <P className="px-3 lg:px-0 lg:w-[60%] mx-auto pt-4">{item?.desc}</P>

                <hr className="w-screen mx-auto mt-8 border-t border-gray-300 opacity-60" />

          </div>
        </div>

      </div>
      <BrandMenu item={item} />
      <div className="bg-black-100 text-white-800 lg:p-6 font-sans">
        <header className="text-center py-6">
          <h1 className="text-3xl font-bold text-yellow-400">
            Why <span>{item?.label}</span> Foods Franchise ?
          </h1>
          <p className="text-white-600 mt-2">
            Biggest Cloud Kitchen of the City
          </p>
        </header>

        <section className="mt-0 text-white">

  <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">

    {/* Key Features */}
    <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-10 rounded-3xl shadow-lg">

      <h3 className="text-2xl font-semibold mb-8">
        Key Features
      </h3>

      <ul className="space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4">

            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F4A62A] text-black text-sm font-bold">
              ✓
            </span>

            <span className="text-gray-300 leading-relaxed">
              {feature}
            </span>

          </li>
        ))}
      </ul>

    </div>

    {/* Revenue Opportunities */}
    <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-10 rounded-3xl shadow-lg">

      <h3 className="text-2xl font-semibold mb-8">
        Unique Revenue Opportunities
      </h3>

      <ul className="space-y-5">
        {franchiseBenefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-4">

            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F4A62A] text-black text-sm font-bold">
              ✓
            </span>

            <span className="text-gray-300 leading-relaxed">
              {benefit}
            </span>

          </li>
        ))}
      </ul>

    </div>

  </Container>

</section>

       
        <section className="mt-20 text-white">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Franchise Formats
          </h2>

          <Container className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">

            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">White Label</h3>
              <p className="text-gray-300">
                Operate under your brand name with full support.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">FOFO</h3>
              <p className="text-gray-300">
                Franchise Owned, Franchise Operated model for independence.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">FOCO</h3>
              <p className="text-gray-300">
                Franchise Owned, Company Operated model for ease.
              </p>
            </div>

          </Container>

        </section>
      </div>

    </div>
  );
}
export default Hero;
