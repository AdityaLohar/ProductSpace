import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

const NavbarRevamped = () => {
  const navLinks = [
    {
      name: "PM Fellowship",
      dropdownItems: [],
    },
    {
      name: "Events",
      dropdownItems: ["Programs", "Programs", "Programs", "Programs"],
    },
    {
      name: "Alumni",
      dropdownItems: ["Programs", "Programs", "Programs", "Programs"],
    },
    {
      name: "Blogs",
      dropdownItems: ["Programs", "Programs", "Programs", "Programs"],
    },
    {
      name: "Contact Us",
      dropdownItems: ["Programs", "Programs", "Programs", "Programs"],
    },
  ];

  return (
    <nav className="w-full fixed top-0 bg-transparent text-white py-4 px-6 z-50 font-inter">
      <div className="max-w-7xl bg-[#081228] mx-auto rounded-full border-2 p-4 px-10 border border-[#42AAFF] shadow-[0px_0px_13px_0px_#0062B4]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-[20px] font-semibold">Product</span>
            <span className="text-[20px] font-semibold text-[#21C1F3]">
              Space
            </span>
          </div>

          {/* Center Navigation Links - Visible on lg screens */}
          <div className="hidden lg:flex items-center justify-center space-x-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center px-4 rounded-full space-x-1 hover:bg-[#3C77FF33] py-2">
                  <span>{link.name}</span>
                  {/* <ChevronDown className="w-4 h-4" /> */}
                </button>

                {/* Dropdown Menu */}
                {link.dropdownItems.length > 0 && (
                  <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-1/2 -translate-x-1/2 mt-8 w-28 bg-gradient-to-l from-[#1B3C75] via-[#142C5C] to-[#1B3C75] rounded-md shadow-lg py-2 transition-all duration-200">
                    {link.dropdownItems.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-[14px] hover:bg-navy-700 text-center"
                        >
                          {item}
                        </a>
                        {itemIndex <= link.dropdownItems.length - 2 && (
                          <div>
                            <svg
                              width="103"
                              height="1"
                              viewBox="0 0 103 1"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                x1="0.5"
                                y1="0.75"
                                x2="102.505"
                                y2="0.75"
                                stroke="url(#paint0_linear_2700_52349)"
                                strokeWidth="0.5"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2700_52349"
                                  x1="0.5"
                                  y1="1.5"
                                  x2="104.5"
                                  y2="1"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#999999" stopOpacity="0" />
                                  <stop offset="0.555251" stopColor="white" />
                                  <stop
                                    offset="1"
                                    stopColor="#999999"
                                    stopOpacity="0"
                                  />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 text-[14px] font-semibold ">
            <button className="bg-[#FFA000] hover:bg-orange-500 px-6 py-2 rounded-full">
              Get Started
            </button>
            <button className="bg-[#FFEFCD] text-[#535353] hover:bg-cream-200 px-6 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarRevamped;
