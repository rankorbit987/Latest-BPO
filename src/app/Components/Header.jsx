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
    `relative text-xl font-medium text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full ${
      active === id ? "after:w-full" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-[20px] lg:px-20 py-4 border-b border-gray-200 shadow-sm">
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
          <div className="ml-20">
            <a href="#contact-form">
              <button className="border-2 cursor-pointer border-[#284d8a] rounded-full px-6 py-2 text-xl font-medium text-[#284d8a] transition duration-300 hover:bg-[#284d8a] hover:text-white">
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

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#284d8a] text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-l-3xl shadow-lg`}
      >
        <div className="flex justify-end p-4">
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

        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-xl font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
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

          <a href="#contact-form" onClick={() => setIsOpen(false)}>
            <button className="mt-8 border border-white rounded-full px-8 py-3 text-xl font-medium text-[#284d8a] bg-white cursor-pointer transition duration-300 hover:bg-[#284d8a] hover:text-white">
              Let's Talk
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
