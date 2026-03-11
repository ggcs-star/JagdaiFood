import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.webp";

export default function NavbarContent() {
const [menuOpen, setMenuOpen] = useState(false);

const navLinks = [
{
name: "About Us",
link: "/about",
dropdown: [
{ name: "Vision & Mission", link: "/vision-mission" },
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
      { name: "QSR Franchise", link: "/qsr-franchise" },
      { name: "Cloud Kitchen", link: "/cloud-kitchen" },
      { name: "Food Trolley", link: "/food-trolley" },
      { name: "Food Tempo", link: "/food-tempo" },
      { name: "Food Court", link: "/food-court" },
      { name: "Influencer Franchise", link: "/influencer-franchise" },
    ],
  },
  { name: "Investment", link: "/investment" },
{ name: "Our Brands", link: "/brands" },
{
  name: "Resources",
  link: "/resources",
  dropdown: [
    { name: "ROI Calculator", link: "/roi-calculator" },
    { name: "Download Brochure", link: "/download-brochure" },
    { name: "FAQs", link: "/faqs" }
  ]
},
{ name: "Contact", link: "/contact" },

];

return ( <header className="w-full bg-black text-white"> <div className="max-w-[1200px] mx-auto px-3 lg:px-0 flex items-center justify-between">

    {/* Logo */}
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="Jagdai Foods"
        className="h-20 object-contain"
      />
    </Link>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
      {navLinks.map((item, index) => (
        <li key={index} className="relative group">

          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive
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

          {/* Dropdown */}
      {item.dropdown && (
  <div className="z-50 absolute left-0 top-full mt-3 w-[200px] bg-[#2c2c2c] rounded-xl border border-gray-600 shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

    {item.dropdown.map((subItem, i) => (
      <NavLink
        key={i}
        to={subItem.link}
        className="
        block px-5 py-3 text-sm
        hover:bg-[#3a3a3a]
        border-b border-gray-600 last:border-none
        first:rounded-t-xl last:rounded-b-xl
        "
      >
        {subItem.name}
      </NavLink>
    ))}

  </div>
)}

        </li>
      ))}
    </ul>

    {/* Phone CTA */}
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
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <IoMdClose /> : <IoMdMenu />}
    </div>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="lg:hidden bg-black border-t border-gray-700 px-3 lg:px-6 pb-6">
      <ul className="flex flex-col gap-4 mt-4 text-base">
        {navLinks.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#f2b44c] font-semibold"
                  : "hover:text-[#f2b44c]"
              }
            >
              {item.name}
            </NavLink>

            {/* Mobile Dropdown */}
            {item.dropdown && (
              <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-300">
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
      <div className="flex items-center gap-3 mt-6">
        <FaPhoneAlt className="text-[#F4A62A]" />
        <div>
          <p className="text-xs text-gray-300">For Franchise</p>
          <p className="text-[#F4A62A] font-semibold">
            +91 78629 31074
          </p>
        </div>
      </div>
    </div>
  )}
</header>

);
}
