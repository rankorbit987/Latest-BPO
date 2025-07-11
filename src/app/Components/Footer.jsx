"use client";
import React from "react";
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
      {/* Top CTA Section: 3-Row Mixed Avatar + Text */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 mx-auto w-full">
        {/* Left side: Avatar + Text layout */}
        <div className="flex flex-col gap-5 text-white text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
          {/* Row 1: 3 Avatars + Text */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2", // woman
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // woman
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36", // man
              ].map((src, i) => (
                <img
                  key={i}
                  src={`${src}?w=64&q=80`}
                  alt={`Team ${i + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black object-cover"
                />
              ))}
              <div className="pl-5">
                <span>Talk to one of our friendly</span>
              </div>
            </div>
          </div>

          {/* Row 2: 2 Avatars + Inline Text */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex -space-x-3">
              <p className="pr-5">Team Member</p>
              {[
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12", // ✅ woman
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", // ✅ man
              ].map((src, i) => (
                <img
                  key={i}
                  src={`${src}?w=64&q=80`}
                  alt={`Team ${i + 4}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black object-cover"
                />
              ))}
              <p className="pl-5">Let's Do</p>
            </div>
            <p>something brilliant together.</p>
          </div>
          <div className="max-w-auto">
            <GetInTouchButton />
          </div>
        </div>

        {/* Right side: Team card */}
        <div className="flex flex-col items-start w-full sm:w-auto">
          <div className="relative w-full sm:w-72 h-44 overflow-hidden rounded-2xl">
            <img
              src="Images/teamImage.png"
              alt="Our team"
              className="w-full h-full object-cover"
            />
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-4 max-w-7xl mx-auto">
        {/* Footer links */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-xs sm:text-sm">
          {[
            { label: "About us", href: "#about-us" },
            { label: "Services", href: "#services-section" },
            { label: "FAQ", href: "#faq-section" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative transition-all hover:text-white after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-gray-600 text-xs sm:text-sm">Follow Us On</span>
          <div className="flex gap-2 flex-wrap">
            {[
              {
                icon: <FaLinkedin className="w-5 h-5" />,
                link: "https://www.linkedin.com/company/bpobrigade/",
              },
              {
                icon: <FaXTwitter className="w-5 h-5" />,
                link: "https://x.com/bpo_brigade",
              },
              {
                icon: <FaInstagram className="w-5 h-5" />,
                link: "https://www.instagram.com/bpobrigade",
              },
              {
                icon: <FaFacebook className="w-5 h-5" />,
                link: "https://www.facebook.com/bpobrigade/",
              },
              {
                icon: <FaPinterest className="w-5 h-5" />,
                link: "https://www.pinterest.com/bpobrigade/",
              },
              {
                icon: <FaTiktok className="w-5 h-5" />,
                link: "https://www.tiktok.com/@bpobrigade",
              },
              {
                icon: <FaYoutube className="w-5 h-5" />,
                link: "https://www.youtube.com/@BPOBrigade",
              },
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
