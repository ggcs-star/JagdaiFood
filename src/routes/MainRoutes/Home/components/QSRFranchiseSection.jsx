import React from "react";
import qsr from "../../../../assets/home/qsrfranchise/qsr.png";
import BrandsPower from "./BrandsPower";
import styled, { createGlobalStyle } from "styled-components";
import { FaRocket, FaUtensils, FaMoneyBillWave, FaStore } from "react-icons/fa";
import icon1 from "../../../../assets/home/corepower/icon1.png";
import icon2 from "../../../../assets/home/corepower/icon2.png";
import icon3 from "../../../../assets/home/corepower/icon3.png";
import icon4 from "../../../../assets/home/corepower/icon4.png";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;

const HeaderTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeaderSubtitle = styled.p`
  margin-top: 8px;
  color: #fdbd5b;
  font-size: 1.4rem;
  font-weight: 600;
`;

const HeaderDescription = styled.p`
  margin-top: 10px;
  color: #cfcfcf;
  font-size: 0.95rem;
`;

export default function QSRFranchiseSection() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <GlobalStyle />

      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-3xl p-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <HeaderTitle className="font-bricolageBold">
            QSR Restaurant Franchise
          </HeaderTitle>

          <HeaderSubtitle className="font-bricolageBold">
            Starting from ₹6 Lakhs + GST
          </HeaderSubtitle>

          <HeaderDescription>
            One outlet. Multiple brands. Your own food business.
            <br />
            Unlimited earning potential.
          </HeaderDescription>
        </div>

        {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

  {/* LEFT SIDE */}
  <div>
    <h3 className="text-4xl font-bricolageBold mb-6">Core Power</h3>

    <div className="space-y-5 text-gray-300 text-lg">

      <div className="flex items-center gap-4">
        <div className="bg-black p-3 rounded-lg">
          <img src={icon1} alt="" className="w-6 h-6 object-contain" />
        </div>
        <p>Starting from ₹6,00,000</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-black p-3 rounded-lg">
          <img src={icon2} alt="" className="w-6 h-6 object-contain" />
        </div>
        <p>1 Franchise = 24+ Food Brands</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-black p-3 rounded-lg">
          <img src={icon3} alt="" className="w-6 h-6 object-contain" />
        </div>
        <p>Zero Royalty – 100% Your Earnings</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-black p-3 rounded-lg">
          <img src={icon4} alt="" className="w-6 h-6 object-contain" />
        </div>
        <p>Ahmedabad’s Biggest Cloud Kitchen Access</p>
      </div>

    </div>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="relative flex justify-center items-center">


    <img
      src={qsr}
      alt="QSR"
      className="relative w-[420px] object-cover"
    />
  </div>

</div>

        {/* BRANDS */}
        <div className="mt-16">
          <BrandsPower />
        </div>
      </div>
    </div>
  );
}