"use client";
import React from "react";
import { Linkedin } from "lucide-react";

const LinkedinButton = () => {
  const scrollToContactForm = () => {
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button 
      type="button"
      onClick={scrollToContactForm}
      className="
        inline-flex items-center justify-center cursor-pointer
        rounded-full border border-black
        bg-white px-1 py-1
        text-black
        transition-all duration-300 ease-in-out
        hover:bg-[#284d8a] hover:text-white hover:border-[#284d8a]
        active:bg-[#284d8a] active:text-white active:border-[#284d8a]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#284d8a]
        whitespace-nowrap overflow-hidden 
        relative
        group
      "
      style={{
        WebkitTapHighlightColor: "transparent"
      }}
    >
      <span className="
        flex-shrink-0
        w-12 h-12 
        relative
        text-black
        bg-white
        border border-black
        rounded-full
        flex items-center justify-center
        overflow-hidden
        mr-3
        transition-all duration-300 ease-in-out
        group-hover:bg-white group-hover:border-white
        group-active:bg-white group-active:border-white
      ">

        {/* Wrapper for icons */}
        <span className="relative w-4 h-4 text-black">
          <Linkedin 
            className="
              absolute w-4 h-4 
              transition-transform transition-opacity duration-300 ease-in-out
              group-hover:translate-x-[150%] group-hover:opacity-0
              group-active:translate-x-[150%] group-active:opacity-0
            "
          />
          <Linkedin 
            className="
              absolute w-4 h-4 
              transition-transform transition-opacity duration-300 ease-in-out delay-100
              translate-x-[-150%] opacity-0
              group-hover:translate-x-0 group-hover:opacity-100
              group-active:translate-x-0 group-active:opacity-100
            "
          />
        </span>

      </span>
      <span className="mr-3 md:text-lg text-base font-normal">Linkedin</span>
    </button>
  );
};

export default LinkedinButton;
