import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Layout";

export default function FranchiseCTA() {
  const navigate = useNavigate();
  return (
    <section className="max-w-6xl w-full bg-black py-4 lg:py-8">
      <div>
        {/* CTA Card */}
        <div className="rounded-[30px] bg-gradient-to-r from-[#6BC07F] to-[#F2B44F] px-2 lg:px-8 py-4 lg:py-8 text-center">
          {/* Heading */}
          <h2 className="font-bricolageBold text-3xl md:text-4xl text-black leading-tight mb-4">
Start Your Food           <br />
Franchise Journey            </h2>

          {/* Description */}
          <p className="text-black/80 font-medium max-w-md mx-auto mb-8">
            Take the first step toward owning a multi-brand food business backed
            by systems and structure.
          </p>

          {/* Buttons */}
          <div className="text-xs lg:text-lg flex flex-row justify-center gap-2 lg:gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#2a2a2a] text-white px-2 lg:px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
Schedule Consultation            </button>
            <button className="bg-white text-black px-2 lg:px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Download Investment Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
