import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.webp";

export default function NavbarContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", link: "/about", dropdown: true },
    { name: "Franchise Models", link: "/franchise-models", dropdown: true },
    { name: "Franchise Formats", link: "/franchise-formats", dropdown: true },
    { name: "Investment", link: "/investment" },
    { name: "Our Brands", link: "/brands" },
    { name: "Resources", link: "/resources", dropdown: true },
  ];

  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 flex items-center justify-between">

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
            <li key={index}>
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
        <div className="lg:hidden bg-black border-t border-gray-700 px-6 pb-6">
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