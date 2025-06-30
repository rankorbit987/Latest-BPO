"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ServicesCard = ({ image, label, title }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-300 hover:border-2 hover:border-black cursor-pointer transition-all duration-300 hover:shadow-lg h-full group/card">
      <div className="flex md:flex-row flex-col h-full">
        <div className="relative md:w-3/5 w-full h-30 md:h-full overflow-hidden">
          <Image 
            src={image}
            alt={title} 
            fill
            className="object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
          <div className="absolute top-2 left-2 bg-gray-300 text-black text-xs px-2 py-1 rounded transition-all duration-300 group-hover/card:bg-black group-hover/card:text-white">
            {label}
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
          <h4 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">{title}</h4>
          <div className="flex justify-end">
            <div className="transition-all duration-300 rounded-full p-2 border border-gray-300 group-hover/card:border-black group-hover/card:bg-black">
              <ArrowRight size={16} className="transition-colors duration-300 group-hover/card:text-white text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;