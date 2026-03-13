import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { brands, bgColors } from "../db";

/* ---------------- GLOBAL STYLE ---------------- */

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

/* ---------------- LAYOUT ---------------- */

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 80rem; /* max-w-7xl = 1280px */
  min-height: 480px;
  margin: 0 auto;

  @media (max-width: 576px) {
    min-height: 320px;
    padding: 0 16px;
  }
`;      

const BumperSection = styled.section`
  text-align: center;
  padding: 12px 16px;
`;

/* ---------------- HEADER ---------------- */

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 28px 24px 20px;

  @media (max-width: 768px) {
    padding: 48px 16px 40px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    
  }
`;

const HeaderSubtitle = styled.p`

  margin-bottom: 30px;
`;

const KnowMoreButton = styled.button`
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 12px 30px;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }

  @media (max-width: 768px) {
    padding: 5px !important;
    font-size: 0.9rem;
  }
`;



/* ---------------- SLICK ARROWS ---------------- */

const Arrow = styled.div`
  width: 44px;
  height: 44px;
  background: #ffffff;
  color: #000000;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);

  /* Apply hover only on devices that support hover */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;


const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <Arrow
            style={{ position: "absolute", top: "50%" }}
            onClick={onClick}
            className="cursor-pointer left-1 lg:left-4"
        >
            <FaChevronLeft />
        </Arrow>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <Arrow
            style={{ position: "absolute", top: "50%" }}
            onClick={onClick}
            className="cursor-pointer right-0 lg:right-4"
        >
            <FaChevronRight />
        </Arrow>
    );
};

/* ---------------- CARD ---------------- */

const SampleCard = ({ item, handler }) => {
  return (
    <div className="px-5">
      <div className="group relative flex flex-col bg-[#262626] rounded-[20px] lg:w-[400px] h-[460px] lg:h-[460px] text-gray-300 overflow-hidden mx-auto transition-all duration-500">

        {/* Glow Background */}
    <div
  className="absolute bottom-0 h-40 w-full rounded-t-full blur-2xl"
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
  bg-transparent text-white
  group-hover:bg-[#f2b44c]
  group-hover:border-[#f2b44c]
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
            className="w-full max-h-[240px] object-contain transition-transform duration-500"
          />
        </div>

      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function BrandsCarousel() {
    const navigate = useNavigate();

    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="bg-black text-center ">
            <GlobalStyle />

            <div className="max-w-7xl mx-auto rounded-xl ">
                <HeaderSection>
                    <HeaderTitle className="font-bricolageBold">
                      24+ Brands Power
                    </HeaderTitle>

                    <HeaderSubtitle className="!text-white text-2xl ">
                      Multiple brands. One kitchen. One investment
                    </HeaderSubtitle>

                    {/* <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <KnowMoreButton onClick={() => navigate("/franchise")}>
                            Become A Franchise Partner
                        </KnowMoreButton>

                        <KnowMoreButton
                            onClick={() => {
                                window.location.href = "tel:+919099237617";
                            }}
                        >
                            Talk to Our Team
                        </KnowMoreButton>
                    </div> */}


                </HeaderSection>

                <Main>
                    <HorizontalSection>
                        <Slider {...settings}>
                            {brands?.map((item, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <SampleCard item={item} handler={() => navigate(`brands/${item?.slug}`, { state: { slug: item?.slug } })} />
                                    </React.Fragment>
                                );
                            })}
                        </Slider>
                    </HorizontalSection>
                </Main>

                <BumperSection />
            </div>
        </div>
    );
}
