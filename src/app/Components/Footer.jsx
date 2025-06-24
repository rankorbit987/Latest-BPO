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
            Let’s do something brilliant together.
          </h2>
          <div className="mt-6 sm:mt-8">
            <GetInTouchButton />
          </div>
        </div>

        {/* Location Section replacing Careers */}
        <div className="flex flex-col items-start text-left w-full sm:w-auto">
          <div className="relative w-full sm:w-72 h-40 sm:h-44 overflow-hidden rounded-2xl border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27221.30370572093!2d74.25073347375427!3d31.455773761267188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190115b05a98c3%3A0xd62437d60099e089!2sBPO%20Brigade!5e0!3m2!1sen!2s!4v1719174940000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h3 className="text-lg font-semibold mt-4">Our Location</h3>
          <p className="mt-1 max-w-xs text-sm text-gray-300">
            90 Johar, Block D2 Block D 2 Phase 1 Town, Lahore, 54782
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-4 overflow-hidden">
        <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
          <a href="#about-us" className="hover:text-white transition">About us</a>
          <a href="#services-section" className="hover:text-white transition">Services</a>
          <a href="#faq-section" className="hover:text-white transition">FAQ</a>
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
