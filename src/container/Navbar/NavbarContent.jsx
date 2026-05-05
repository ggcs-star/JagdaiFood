import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.webp";
import downloadIcon from "../../assets/navbar/dawnload.svg";
import qrImg from "../../assets/navbar/navqr1.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function NavbarContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // ✅ Detect external links
  const isExternal = (url) =>
    url?.startsWith("http") || url?.startsWith("https");

  const navLinks = [
    {
      name: "Franchise Formats",
      // link: "/franchise-formats",
      dropdown: [
        {
          name: "QSR Franchise",
          link: "/franchise-formats/qsr-restaurant-franchise",
        },
        {
          name: "Internet Franchise",
          link: "/franchise-formats/internet-restaurants-franchise",
        },
        {
          name: "Food Trolley",
          link: "/franchise-formats/food-trolley-franchise",
        },
        { name: "Food Tempo", link: "/franchise-formats/food-tempo-franchise" },
        { name: "Food Court", link: "/franchise-formats/chatori-gali" },
        {
          name: "Influencer Franchise",
          link: "/franchise-formats/influencer-franchise",
        },
      ],
    },
    { name: "Investment", link: "/investment" },
    { name: "Our Brands", link: "/brands" },
    { name: "Jagdai Caterers", link: "https://catering.jagdaifoods.com/" },
    {
      name: "Resources",
      dropdown: [
        { name: "ROI Calculator", link: "/roi-calculator" },
        {
          name: "Communication Hub",
          link: "https://allinone.jagdaifoods.com/",
        },
        {
          name: "Download PPT",
          link: "https://docs.google.com/presentation/d/1ZPjTRlHECxbquTQxWZ732k20ZsFYlWao/edit?usp=sharing&ouid=104598933576124029697&rtpof=true&sd=true",
        },
        { name: "FAQs", link: "/faq" },
        // { name: "Contact", link: "/contact" },
      ],
    },
    {
      name: "About Us",
      link: "/about",
      dropdown: [
        { name: "Vision & Mission", link: "/about" },
        { name: "Who We Are", link: "/who-we-are" },
        { name: "What We Do", link: "/what-we-do" },
      ],
    },
    { name: "Marketing Support", link: "/marketing-support" },


  ];

  return (
    <header className="h-[100px] w-full bg-black text-white fixed  top-0 left-0 z-[9999]">
      <div className="max-w-[1300px] mx-auto px-3 lg:px-0 flex items-center justify-between h-full">        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Jagdai Foods" className="h-20 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium ">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              {/* Parent Menu */}
              {item.link ? (
                isExternal(item.link) ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#FDBD5B] transition"
                  >
                    {item.name}
                    {item.dropdown && <FaChevronDown className="text-[10px]" />}
                  </a>
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center gap-1 ${isActive
                        ? "text-[#FDBD5B]"
                        : "hover:text-[#FDBD5B] transition"
                      }`
                    }
                  >
                    {item.name}
                    {item.dropdown && <FaChevronDown className="text-[10px]" />}
                  </NavLink>
                )
              ) : (
                <button className="flex items-center gap-1 cursor-default">
                  {item.name}
                  <FaChevronDown className="text-[10px]" />
                </button>
              )}

              {/* Dropdown */}
              {item.dropdown && (
                <div
                  className={`absolute left-0 top-full mt-3 ${item.name === "Franchise Formats" ? "w-[250px]" : "w-[200px]"
                    } bg-[#2c2c2c] rounded-xl border border-gray-600 shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                >                  {item.dropdown.map((subItem, i) =>
                  isExternal(subItem.link) ? (
                    <a
                      key={i}
                      href={subItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3 text-sm hover:bg-[#3a3a3a] border-b border-gray-600 last:border-none"
                    >
                      {subItem.name}
                    </a>
                  ) : (
                    <NavLink
                      key={i}
                      to={subItem.link}
                      className="block px-5 py-3 text-sm hover:bg-[#3a3a3a] border-b border-gray-600 last:border-none"
                    >
                      {subItem.name}
                    </NavLink>
                  ),
                )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Phone */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="hidden lg:flex items-center">
            <div
              className="relative"
              onMouseEnter={() => setShowQR(true)}
              onMouseLeave={() => setShowQR(false)}
            >
              {/* DOWNLOAD ICON */}
              <img
                src={downloadIcon}
                alt="download"
                className="w-5 h-5 object-contain cursor-pointer hover:scale-110 transition"
              />

              {/* HOVER SAFE AREA (IMPORTANT FIX) */}
              <div className="absolute -right-8 top-full pt-2">
                {showQR && (
                  <div
                    className="
              w-[260px] bg-[#f1f1f1]
              rounded-[12px] shadow-xl p-4
              z-[9999]
            "
                  >
                    {/* ARROW */}
                    {/* <div className="absolute -top-1 right-4 w-3 h-3 bg-[#f1f1f1] rotate-45"></div> */}

                    <div className="flex justify-between items-center gap-3">
                      {/* LEFT */}
                      <div className="flex flex-col gap-6 text-black text-sm font-medium">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.jagods.customer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:opacity-70"
                        >
                          <FaGooglePlay className="text-black text-[20px]" />
                          <span className="text-[15px] font-medium">
                            Play Store
                          </span>
                        </a>

                        {/* APP STORE */}
                        <a
                          href="https://apps.apple.com/in/app/jagods/id6749576808"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:opacity-70"
                        >
                          <FaApple className="text-black text-[22px]" />

                          <span className="text-[15px] font-medium leading-none">
                            App Store
                          </span>
                        </a>

                      </div>

                      {/* QR */}
                      <div className="flex flex-col items-center">
                        <img
                          src={qrImg}
                          alt="QR"
                          className="w-[95px] h-[95px] object-contain"
                        />
                        <p className="text-[12px] text-gray-800 mt-1 text-center">
                          Visit Our Website
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-gray-600"></div>

          <div className="flex items-center gap-3">
            <div className="bg-[#FDBD5B] p-2 rounded-full text-black">
              <FaPhoneAlt size={14} />
            </div>

            <div>
              <p className="text-xs text-gray-300">For Franchise</p>
              <a href="tel:+918866373077">
                <p className="font-semibold text-[#FDBD5B] cursor-pointer">
                  +91 88663 73077
                </p>
              </a>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-black flex flex-col">
          <div className="flex items-center justify-between px-3 border-b border-gray-700">
            <img src={logo} alt="logo" className="h-20" />

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

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-6 text-lg">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    {item.link ? (
                      isExternal(item.link) ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <NavLink
                          to={item.link}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      )
                    ) : (
                      <span>{item.name}</span>
                    )}

                    {item.dropdown && (
                      <button
                        className="text-3xl"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {openDropdown === index ? "-" : "+"}
                      </button>
                    )}
                  </div>

                  {item.dropdown && openDropdown === index && (
                    <ul className="ml-4 mt-3 flex flex-col gap-3 text-gray-300">
                      {item.dropdown.map((subItem, i) =>
                        isExternal(subItem.link) ? (
                          <li key={i}>
                            <a
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ) : (
                          <li key={i}>
                            <NavLink
                              to={subItem.link}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
