import React from "react";
import { Container } from "../../../../components/Layout";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function FranchiseCTA() {
  const navigate = useNavigate();
  return (
    <section className="bg-black py-4 sm:py-6 lg:py-8">
      <Container>
        {/* CTA Card */}
        <div className="rounded-[20px] sm:rounded-[30px] bg-gradient-to-r from-[#6BC07F] to-[#F2B44F] px-3 sm:px-4 lg:px-8 py-5 sm:py-6 lg:py-8 text-center">

          {/* Heading */}
          <h2 className="font-bricolageBold text-2xl sm:text-3xl md:text-4xl text-black leading-tight mb-3 sm:mb-4">
            Start Your Food <br />
            Franchise Journey
          </h2>

          {/* Description */}
          <p className="text-black/80 font-semibold text-sm sm:text-base max-w-xs sm:max-w-md mx-auto mb-5 sm:mb-6 lg:mb-8">
            Take the first step toward owning a multi-brand food business backed
            by systems and structure.
          </p>

          {/* Buttons */}
          <div className="text-xs sm:text-sm lg:text-lg flex flex-row justify-center items-center gap-3 sm:gap-4">

           <button
  onClick={() =>
    window.open("https://wa.me/918866373077", "_blank")
  }
  className="flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto bg-[#2a2a2a] text-white px-4 sm:px-5 lg:px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
>
  <FaWhatsapp size={20} />
  <span>Schedule Consultation</span>
</button>

            <a
              href="https://docs.google.com/presentation/d/1ZPjTRlHECxbquTQxWZ732k20ZsFYlWao/edit?usp=sharing&ouid=104598933576124029697&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black px-4 sm:px-5 lg:px-6 py-3 rounded-lg font-medium hover:opacity-90 transition text-center"
            >
              Download PPT
            </a>

          </div>
        </div>
      </Container>
    </section>
  );
}