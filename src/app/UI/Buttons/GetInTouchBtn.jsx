"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const GetInTouchBtn = () => {
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
        rounded-full border border-white
        px-1 py-1
        text-white
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
        lg:w-12 w-8 lg:h-12 h-8 
        relative
        text-white
        border border-white 
        rounded-full
        flex items-center justify-center
        overflow-hidden
        mr-3
        transition-all duration-300 ease-in-out
        group-hover:bg-white
        group-active:bg-white
      ">
        {/* Wrapper for icons */}
        <span className="relative w-4 h-4">
          <ArrowRight 
            className="
              absolute w-4 h-4 
              transition-transform transition-opacity duration-300 ease-in-out
              group-hover:translate-x-[150%] group-hover:opacity-0
              group-active:translate-x-[150%] group-active:opacity-0
              text-white group-hover:text-black
            "
          />
          <ArrowRight 
            className="
              absolute w-4 h-4 
              transition-transform transition-opacity duration-300 ease-in-out delay-100
              translate-x-[-150%] opacity-0
              group-hover:translate-x-0 group-hover:opacity-100
              group-active:translate-x-0 group-active:opacity-100
              text-black
            "
          />
        </span>
      </span>
      <span className="mr-3 md:text-lg text-base font-normal">Get In Touch</span>
    </button>
  );
};

export default GetInTouchBtn;