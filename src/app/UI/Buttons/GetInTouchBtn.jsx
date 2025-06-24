"use client"
import React from 'react';

const GetInTouchBtn = () => {
  return (
    <a href="#contact-form" className="inline-block">
      <button 
        type="button"
        className="
          cursor-pointer
          inline-flex items-center justify-center
          rounded-full border border-black
          bg-white px-6 py-3 pl-3
          text-base font-medium text-black
          transition-all duration-300 ease-in-out
          hover:bg-blue-600 hover:text-white hover:border-blue-600
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
          whitespace-nowrap overflow-hidden text-ellipsis
          relative
          group
        "
      >
        <span className="
          flex-shrink-0
          w-8 h-8
          relative
          text-black
          bg-white
          border border-black
          rounded-full
          flex items-center justify-center
          overflow-hidden
          mr-2
          transition-all duration-300 ease-in-out
          group-hover:bg-white group-hover:border-white
        ">
          <svg 
            viewBox="0 0 14 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="
              w-3.5 h-3.5
              transition-transform duration-300 ease-in-out
              group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
            "
            aria-hidden="true"
          >
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
          <svg 
            viewBox="0 0 14 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute w-3.5 h-3.5
              transition-transform duration-300 ease-in-out delay-100
              -translate-x-[150%] translate-y-[150%]
              group-hover:translate-x-0 group-hover:translate-y-0
            "
            aria-hidden="true"
          >
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
        </span>
        <span className="ml-1">Get In Touch</span>
      </button>
    </a>
  );
};

export default GetInTouchBtn;
