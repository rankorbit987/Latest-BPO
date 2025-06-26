"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import GetInTouchButton from "../UI/Buttons/GetInTouchBtn";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 pt-16 pb-10 text-sm overflow-x-hidden">
      {/* Top CTA Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        {/* CTA Text + Avatars */}
        <div className="flex-1">
          <div className="flex items-center mb-6 overflow-hidden">
            {[
              "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            ].map((src, i) => (
              <img
                key={i}
                src={src + "?w=96&q=80"}
                alt={`Team ${i + 1}`}
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white object-cover ${
                  i > 0 ? "-ml-4" : ""
                } ${i === 0 ? "z-20" : i === 1 ? "z-10" : "z-0"}`}
              />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
            Talk to one of our
            <br />
            <span className="font-medium">friendly team members</span>
            <br />
            Let's do something brilliant together.
          </h2>
          <div className="mt-6 sm:mt-8">
            <GetInTouchButton />
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-start text-left w-full sm:w-auto">
          <div className="relative w-full sm:w-72 h-40 sm:h-44 overflow-hidden rounded-2xl">
            {/* Single team image covering entire card */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Our team"
              className="w-full h-full object-cover"
            />
            {/* Online status badge */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs text-white">Team online</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Our Team</h3>
          <p className="mt-1 max-w-xs text-sm text-gray-300">
            Meet our dedicated team always ready to assist you.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-4 overflow-hidden">
        <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-xs sm:text-sm">
          {[
            { label: "About us", href: "#about-us" },
            { label: "Services", href: "#services-section" },
            { label: "FAQ", href: "#faq-section" },
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="
                relative 
                transition-all 
                hover:text-white
                after:content-[''] 
                after:absolute 
                after:w-0 
                after:h-px 
                after:bottom-0 
                after:left-0 
                after:bg-white 
                after:transition-all 
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-gray-600 text-xs sm:text-sm">Follow Us On</span>
          <div className="flex gap-2 overflow-hidden">
            {[
              { icon: <FaLinkedin className="w-5 h-5" />, link: "https://www.linkedin.com/company/bpobrigade/" },
              { icon: <FaXTwitter className="w-5 h-5" />, link: "https://x.com/bpo_brigade" },
              { icon: <FaInstagram className="w-5 h-5" />, link: "https://www.instagram.com/bpobrigade" },
              { icon: <FaFacebook className="w-5 h-5" />, link: "https://www.facebook.com/bpobrigade/" },
              { icon: <FaPinterest className="w-5 h-5" />, link: "https://www.pinterest.com/bpobrigade/" },
              { icon: <FaTiktok className="w-5 h-5" />, link: "https://www.tiktok.com/@bpobrigade" },
              { icon: <FaYoutube className="w-5 h-5" />, link: "https://www.youtube.com/@BPOBrigade" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center transition hover:bg-white hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;