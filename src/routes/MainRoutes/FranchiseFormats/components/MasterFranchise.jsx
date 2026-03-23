import React from "react";
import { useNavigate } from "react-router-dom";
import master from "../../../../assets/franchisemodels/MasterFranchise1.png";
import { Container } from "../../../../components/Layout";

export default function MasterFranchise() {
  const navigate = useNavigate();

  return (
    <section className="bg-black py-2">

      <Container>
        {/* MAIN CARD */}
        <div className="relative w-full h-[529px] bg-[#FDBD5B] rounded-[24px] overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="absolute left-[60px] top-[60px] max-w-[520px]">

            <h2 className="text-[32px] leading-[40px] font-bricolageBold text-black mb-[10px] whitespace-nowrap">
              Master Franchise / Territory Model
            </h2>

            <p className="text-[16px] font-semibold text-black mb-[6px]">
              Lead Expansion. Multiply Growth.
            </p>

            <p className="text-[14px] text-black mb-[20px]">
              Own and manage franchise expansion within a defined geography.
            </p>

            {/* ✅ UPDATED FEATURES */}
            <div className="space-y-[14px] mb-[20px]">
              {[
                "High-Ticket Franchise Model",
                "70% Revenue on Direct franchise sales",
                "30% Revenue on Company Sales",
                "7% Ongoing Billing Income",
                "Long-Term Passive Income",
                "Own & Operate 24+ Brands",
                "360° Operational Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-[10px]">

                  <div className="w-[20px] h-[20px] rounded-full bg-black flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24">
                      <path
                        d="M5 12L10 17L19 7"
                        stroke="#FDBD5B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="text-[14px] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-black px-[18px] py-[10px] rounded-[8px] text-[14px] font-medium"
            >
              Enquire for Territory Rights
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <img
            src={master}
            alt="master franchise"
            className="absolute bottom-0 right-0 w-[700px] object-contain"
          />

        </div>

        {/* ✅ DISCLAIMER */}
        <p className="text-center max-w-2xl text-center mx-auto text-md text-gray-400 mt-4 mb-20">
          All figures shown (*) are for illustrative purposes only and do not guarantee actual returns.
          Results may vary depending on location, operations, and market conditions.
        </p>

      </Container>

    </section>
  );
}