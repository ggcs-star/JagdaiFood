import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.webp";

export default function NavbarContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", link: "/about" },
    { name: "Franchise Models", link: "/franchise-models" },
    { name: "Investment & Returns", link: "/investment" },
    { name: "Franchises", link: "/franchises" },
  ];

  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Jagdal Foods"
            className="h-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="hover:text-[#f2b44c] transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/brochure"
            className="border border-gray-400 px-5 py-2 rounded-lg hover:border-white transition"
          >
            Download Brochure
          </Link>

          <Link
            to="/contact"
            className="bg-[#f2b44c] text-black font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Contact Now
          </Link>

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
                <Link
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[#f2b44c]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <Link
              to="/brochure"
              className="border border-gray-400 px-4 py-2 rounded-lg text-center"
            >
              Download Brochure
            </Link>

            <Link
              to="/contact"
              className="bg-[#f2b44c] text-black font-semibold px-4 py-2 rounded-lg text-center"
            >
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}