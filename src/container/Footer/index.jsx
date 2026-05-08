import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Layout";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import logo from "../../assets/footer/logo.webp";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      label: "QSR Franchise",
      slug: "/franchise-formats/qsr-restaurant-franchise",
    },
    {
      label: "Internet Franchise",
      slug: "/franchise-formats/internet-restaurants-franchise",
    },
    {
      label: "Food Trolley",
      slug: "/franchise-formats/food-trolley-franchise",
    },
    {
      label: "Food Tempo",
      slug: "/franchise-formats/food-tempo-franchise",
    },
    {
      label: "Food Court",
      slug: "/franchise-formats/chatori-gali",
    },
    {
      label: "Influencer Franchise",
      slug: "/franchise-formats/influencer-franchise",
    },
  ];

  const businessModels = [
    { label: "FOFO Model", desc: "(Franchise Owned Franchise Operated)", slug: "/fofo-model" },
    { label: "FOCO Model", desc: "(Franchise Owned Company Operated)", slug: "/foco-model" },
    { label: "Investment & ROI", slug: "/investment" },
  ];

  const resources = [
    {
      label: "Download Investment Brochure",
      link: "https://docs.google.com/presentation/d/1ZPjTRlHECxbquTQxWZ732k20ZsFYlWao/edit?usp=sharing&ouid=104598933576124029697&rtpof=true&sd=true"
    },
    { label: "Schedule Consultation", link: "https://wa.me/918866373077" },
    { label: "Franchise FAQs", slug: "/faq" },
    { label: "Terms & Conditions", slug: "/terms" },
    { label: "Privacy Policy", slug: "/privacy" },
    { label: "Disclaimer", slug: "/disclaimer" }
  ];

  const socials = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1aRjrPt6AL/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/jagdai_foods?igsh=MThjcHVkaGk3YWc4MA==" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/jagdai-foods/" },
    { icon: <FaYoutube />, url: "https://youtube.com/playlist?list=PLadgeeg-KdFkCvCirTs64WWMRKHBG64wQ&si=wkKDeow8xzo3wcaQ" },
  ];

  return (
    <footer className="bg-[#1f1f1f] text-gray-300 font-helvetica">

      <Container className="py-8 lg:py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Left Section */}
          <div>
            <img
              src={logo}
              alt="Jagdai Foods"
              className="w-32 mb-6"
            />

            <p className="text-gray-200 leading-7 mb-8 max-w-sm">
              Multiple brands. One kitchen. One investment.
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  onClick={() => navigate(item.slug)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Models */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide">
              Businesses Models
            </h4>

            <ul className="space-y-4">
              {businessModels.map((item, index) => (
                <li
                  key={index}
                  onClick={() => navigate(item.slug)}
                  className="cursor-pointer hover:text-white transition"
                >
                  <p>{item.label}</p>
                  {item.desc && (
                    <span className="text-sm text-gray-200">{item.desc}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide">
              Resources
            </h4>

            <ul className="space-y-4">
              {resources.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank");
                    } else {
                      navigate(item.slug);
                    }
                  }}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-full shrink-0">
              <HiOutlinePhone className="text-white" />
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Phone
              </p>

              <a
                href="tel:+918866373077"
                className="text-white hover:underline text-sm sm:text-base"
              >
                +91 88663 73077
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-full shrink-0">
              <HiOutlineMail className="text-white" />
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Email
              </p>

              <a
                href="mailto:info@jagdaifoods.com"
                className="text-white hover:underline text-sm sm:text-base break-all"
              >
                info@jagdaifoods.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 lg:w-[42%]">
            <div className="bg-gray-700 p-3 rounded-full shrink-0">
              <HiOutlineLocationMarker className="text-white" />
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Address
              </p>

              <a
                href="https://share.google/MoIbAT1dvnNDM4V7w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white leading-6 hover:underline text-sm sm:text-base"
              >
                5th Floor, Grand Empio, Shiv Habitat B-Block,
                Motera Stadium Rd, opp. S Mall, Motera,
                Ahmedabad, Gujarat 380005, India
              </a>
            </div>
          </div>

        </div>

      </Container>

      {/* Bottom Bar */}
      <div className="bg-[#3a3a3a] py-5">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-300">
            © 2026 Jagdai Foods All rights reserved.
          </p>

          <div className="flex gap-6 text-lg text-gray-300">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </Container>
      </div>

    </footer>
  );
};

export default Footer;