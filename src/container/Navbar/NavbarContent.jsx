import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.webp";

export default function NavbarContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    {
      name: "About Us",
      link: "/about",
      dropdown: [
        { name: "Vision & Mission", link: "/about" },
        { name: "Who We Are", link: "/who-we-are" },
        { name: "What We Do", link: "/what-we-do" },
      ],
    },
    {
      name: "Franchise Models",
      link: "/franchise-models",
      dropdown: [
        { name: "FOFO Model", link: "/fofo-model" },
        { name: "FOCO Model", link: "/foco-model" },
        { name: "Model Comparison", link: "/model-comparison" },
      ],
    },
    {
      name: "Franchise Formats",
      link: "/franchise-formats",
      dropdown: [
        { name: "QSR Franchise", link: "/franchise-details?type=qsr-restaurant-franchise" },
        { name: "Cloud Kitchen", link: "/franchise-details?type=internet-restaurants-franchise" },
        { name: "Food Trolley", link: "/franchise-details?type=food-trolley-franchise" },
        { name: "Food Tempo", link: "/franchise-details?type=food-tempo-franchise" },
        { name: "Food Court", link: "/franchise-details?type=chatori-gali" },
        { name: "Influencer Franchise", link: "/franchise-details?type=influencer-franchise" }
      ]
    },
    { name: "Investment", link: "/investment" },
    { name: "Our Brands", link: "/brands" },
    {
      name: "Resources",
      link: "/resources",
      dropdown: [
        { name: "ROI Calculator", link: "/roi-calculator" },
        { name: "Download Brochure", link: "/download-brochure" },
        { name: "FAQs", link: "/faq" },
        { name: "Contact", link: "/contact" },

      ],
    },
  ];

  return (
    <header className="w-full bg-black text-white sticky top-0 z-[999]">

      <div className="max-w-[1200px] mx-auto px-3 lg:px-0 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Jagdai Foods" className="h-20 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">

              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-1 ${isActive
                    ? "text-[#f2b44c]"
                    : "hover:text-[#f2b44c] transition"
                  }`
                }
              >
                {item.name}
                {item.dropdown && (
                  <FaChevronDown className="text-[10px] mt-[2px]" />
                )}
              </NavLink>

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div className="absolute left-0 top-full mt-3 w-[200px] bg-[#2c2c2c] rounded-xl border border-gray-600 shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                  {item.dropdown.map((subItem, i) => (
                    <NavLink
                      key={i}
                      to={subItem.link}
                      className="block px-5 py-3 text-sm hover:bg-[#3a3a3a] border-b border-gray-600 last:border-none"
                    >
                      {subItem.name}
                    </NavLink>
                  ))}

                </div>
              )}

            </li>
          ))}
        </ul>

        {/* Desktop Phone */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="h-10 w-[1px] bg-gray-600"></div>

          <div className="flex items-center gap-3">
            <div className="bg-[#F4A62A] p-2 rounded-full text-black">
              <FaPhoneAlt size={14} />
            </div>

            <div className="leading-tight">
              <p className="text-xs text-gray-300">For Franchise</p>
              <p className="font-semibold text-[#F4A62A]">
                +91 78629 31074
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <IoMdMenu />
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-black flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-3 border-b border-gray-700">

            <img src={logo} alt="logo" className="h-20 object-contain" />

            <button
              onClick={() => {
                setMenuOpen(false);
                setOpenDropdown(null);
              }}
              className="text-3xl"
            >
              <IoMdClose />
            </button>

          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6">

            <ul className="flex flex-col gap-6 text-lg">

              {navLinks.map((item, index) => (
                <li key={index}>

                  <div className="flex items-center justify-between">

                    <NavLink
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-[#f2b44c]"
                    >
                      {item.name}
                    </NavLink>

                    {item.dropdown && (
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === index ? null : index
                          )
                        }
                        className="text-xl font-bold"
                      >
                        {openDropdown === index ? "-" : "+"}
                      </button>
                    )}

                  </div>

                  {item.dropdown && openDropdown === index && (
                    <ul className="ml-4 mt-3 flex flex-col gap-3 text-gray-300 text-base">

                      {item.dropdown.map((subItem, i) => (
                        <li key={i}>
                          <NavLink
                            to={subItem.link}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-[#f2b44c]"
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}

                    </ul>
                  )}

                </li>
              ))}

            </ul>

            {/* Mobile Phone */}
            <div className="flex items-center gap-3 mt-10">
              <FaPhoneAlt className="text-[#F4A62A]" />
              <div>
                <p className="text-xs text-gray-300">For Franchise</p>
                <p className="text-[#F4A62A] font-semibold">
                  +91 78629 31074
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

    </header>
  );
}