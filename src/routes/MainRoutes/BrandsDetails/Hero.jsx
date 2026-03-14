import React from "react";
import { H3, P } from "../../../components/Typography";
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
  "Free CashAqua water bottle SIS franchise",
];

function Hero({ item }) {
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

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "transparent linear-gradient(184deg, #00000000 0%, #000000 100%)",
            }}
          />

          {/* Circle Logo */}
          <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 lg:-bottom-28 left-1/2 transform -translate-x-1/2">

            <img
              src={item?.image}
              alt="brand logo"
              className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] object-contain"
            />

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

      {/* Franchise Section */}
      <div className="bg-black-100 text-white-800 p-4 sm:p-6 font-sans">

        <header className="text-center py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
            Why <span>{item?.label}</span> Foods Franchise ?
          </h1>

          <p className="text-white-600 mt-2 text-sm md:text-base">
            Biggest Cloud Kitchen of the City
          </p>
        </header>

        <section className="mt-0 text-white">

          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mx-auto">

            {/* Key Features */}
            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg">

              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                Key Features
              </h3>

              <ul className="space-y-4 md:space-y-5">

                {features.map((feature, index) => (

                  <li key={index} className="flex items-start gap-3 md:gap-4">

                    <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-[#F4A62A] text-black text-sm font-bold">
                      ✓
                    </span>

                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

            {/* Revenue Opportunities */}
            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg">

              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                Unique Revenue Opportunities
              </h3>

              <ul className="space-y-4 md:space-y-5">

                {franchiseBenefits.map((benefit, index) => (

                  <li key={index} className="flex items-start gap-3 md:gap-4">

                    <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-[#F4A62A] text-black text-sm font-bold">
                      ✓
                    </span>

                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {benefit}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </Container>

        </section>

        {/* Franchise Formats */}
        <section className="mt-14 md:mt-20 text-white">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
            Franchise Formats
          </h2>

          <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mx-auto">

            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 md:p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                White Label
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Operate under your brand name with full support.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 md:p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                FOFO
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Franchise Owned, Franchise Operated model for independence.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] p-6 md:p-8 rounded-3xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                FOCO
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
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