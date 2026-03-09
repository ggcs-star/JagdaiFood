import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Layout";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import logo from "../../assets/footer/logo.webp";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "QSR Franchise", slug: "/qsr-franchise" },
    { label: "Cloud Kitchen Franchise", slug: "/cloud-kitchen" },
    { label: "Food Trolley Franchise", slug: "/food-trolley" },
    { label: "Territory / Master Franchise", slug: "/master-franchise" },
  ];

  const businessModels = [
    { label: "FOFO Model", desc: "(Franchise Owned Franchise Operated)", slug: "/fofo" },
    { label: "FOCO Model", desc: "(Franchise Owned Company Operated)", slug: "/foco" },
    { label: "Investment & ROI", slug: "/investment-roi" },
  ];

  const resources = [
    { label: "Download Investment Brochure", slug: "/brochure" },
    { label: "Franchise Application", slug: "/franchise-apply" },
    { label: "Schedule Consultation", slug: "/consultation" },
    { label: "Franchise FAQs", slug: "/faqs" },
    { label: "Terms & Conditions", slug: "/terms" },
    { label: "Privacy Policy", slug: "/privacy" },
  ];

  const socials = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
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

            <p className="text-gray-200 leading-7 mb-8">
              Multiple brands. One kitchen.
              One investment.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  <HiOutlineMail className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase">Email</p>
                  <p className="text-white">info@jagdaifoods.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  <HiOutlinePhone className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase">Phone</p>
                  <p className="text-white">+91 6352305842</p>
                </div>
              </div>

            </div>
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
                  onClick={() => navigate(item.slug)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
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