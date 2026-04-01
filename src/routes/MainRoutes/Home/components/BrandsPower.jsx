import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;

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

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeaderSubtitle = styled.p`
  margin-bottom: 30px;
  color: #ffffff;
  font-size: 1.5rem;
`;

export default function BrandsPower() {
  // ✅ Auto import 24 images
  const brandImages = Array.from({ length: 24 }, (_, i) =>
    new URL(
      `../../../../assets/home/brandpower/artboard${i + 1}.png`,
      import.meta.url
    ).href
  );

  return (
    <div className="text-center overflow-x-hidden">
      <GlobalStyle />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <HeaderSection>
          <HeaderTitle className="font-bricolageBold">
            24+ Brands Power
          </HeaderTitle>

          <HeaderSubtitle>
            Multiple brands. One kitchen. One investment
          </HeaderSubtitle>
        </HeaderSection>

        {/* ✅ BRAND GRID */}
        <div className="pb-16">
          <div className="max-w-7xl mx-auto">

            <div
              className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-8 
              gap-5
            "
            >
              {brandImages.map((img, index) => (
                <div
                  key={index}
                  className="
                    bg-[#2b2b2b]
                    rounded-2xl
                    flex items-center justify-center
                    aspect-square 
                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                    transition-all duration-300
                  "
                >
                  <img
                    src={img}
                    alt={`brand-${index}`}
                    className="w-full rounded-lg h-full object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}