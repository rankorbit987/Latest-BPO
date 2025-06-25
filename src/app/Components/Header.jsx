"use client";
import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../../public/Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const navLinks = [
    { href: "#about-us", label: "About us", id: "about-us" },
    { href: "#services-section", label: "Services", id: "services-section" },
    { href: "#faq-section", label: "FAQ", id: "faq-section" },
  ];

  const getLinkClasses = (id) =>
    `relative text-lg font-semibold text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full ${
      active === id ? "after:w-full" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-[20px] lg:px-20 py-2">
      <div className="flex justify-between items-center w-full">
        <a href="/" className="flex items-center">
          <Image 
            src={logo}
            alt="BPOBrigade Logo"
            className="object-contain w-20 sm:w-24 md:w-30 lg:w-36" 
            priority 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={getLinkClasses(link.id)}
                onClick={() => setActive(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="ml-40">
            <a href="#contact-form">
              <button className="border cursor-pointer border-black rounded-full px-6 py-2 text-lg font-semibold text-black transition duration-300 hover:bg-[#284d8a] hover:text-white hover:border-[#284d8a]">
                Let's Talk
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu - Updated to slide from left with rounded right borders */}
      <div
        className={`fixed top-0 left-0 h-full w-[100%] max-w-md bg-black text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-r-3xl overflow-hidden`}
      >
        {/* Close button only in top right corner */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-start px-6 py-4 gap-8 h-[calc(100%-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-2xl font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                active === link.id ? "after:w-full" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
                setActive(link.id);
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-auto w-full pb-8">
            <a 
              href="#contact-form" 
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <button className="w-full border border-white rounded-full px-8 py-4 text-xl font-medium text-black bg-white cursor-pointer transition duration-300 hover:bg-[#284d8a] hover:text-white">
                Let's Talk
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;