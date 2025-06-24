"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ServicesCard = ({ image, label, title }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-300 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group/card">
      <div className="flex md:flex-row flex-col h-full">
        <div className="relative md:w-2/5 w-full h-60 md:h-full">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 bg-gray-300 text-black text-xs px-2 py-1 rounded transition-all duration-300 group-hover/card:bg-black group-hover/card:text-white">
            {label}
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
          <h4 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">{title}</h4>
          <div className="flex justify-end">
            <div className="transition-all duration-300 rounded-full p-2 border border-black md:border-none group-hover/card:bg-black">
              <ArrowRight size={24} className="md:size-8 transition-colors duration-300 group-hover/card:text-white text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
