"use client";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";

const LinkedinButton = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/company/bpobrigade/", "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        inline-flex items-center justify-center cursor-pointer
        rounded-full border-2 border-black
        bg-white px-6 py-3 pl-3
        md:text-lg text-base font-medium text-black
        transition-all duration-300 ease-in-out
        hover:bg-blue-600 hover:text-white hover:border-blue-600
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
        whitespace-nowrap overflow-hidden text-ellipsis
        relative
        group
      "
    >
      <span
        className="
          flex-shrink-0
          w-8 h-8
          relative
          text-black
          bg-white
          border-2 border-black
          rounded-full
          flex items-center justify-center
          overflow-hidden
          mr-2
          transition-all duration-300 ease-in-out
          group-hover:bg-white group-hover:border-white
        "
      >
        <FaLinkedinIn
          className="
            w-3.5 h-3.5
            transition-transform duration-300 ease-in-out
            group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
          "
        />
        <FaLinkedinIn
          className="
            absolute w-3.5 h-3.5
            transition-transform duration-300 ease-in-out delay-100
            -translate-x-[150%] translate-y-[150%]
            group-hover:translate-x-0 group-hover:translate-y-0
          "
        />
      </span>
      <span className="ml-1">LinkedIn</span>
    </button>
  );
};

export default LinkedinButton;
