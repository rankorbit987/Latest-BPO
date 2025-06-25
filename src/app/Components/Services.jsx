"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ServicesCard from "../UI/Cards/servicesCard";
import servicesData from "../Data/ServicesData";

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="services-section" className="w-full py-12 md:py-20 text-black bg-white">
      <div className="relative w-full max-w-full">
        {servicesData.map((item, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={`relative border-t-[3px] border-black rounded-t-[30px] rounded-b-none transition-all duration-300 group 
                ${isActive ? "bg-white" : "bg-white"} 
                ${!isActive ? item.hoverColor : ""}
                ${index !== 0 ? '-mt-4 sm:-mt-5 md:-mt-7' : ''}`}
            >
              <div
                className="grid grid-cols-12 items-start w-full p-6 md:p-8 min-h-[120px] sm:min-h-[150px] md:min-h-[180px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                {/* First Column - CAPABILITIES / (wider column) */}
                <div className="col-span-12 md:col-span-4 text-xs sm:text-sm md:text-xs uppercase tracking-wider">
                  SERVICES /
                </div>

                {/* Second Column - Service Title - moved below on mobile */}
                <div className="col-span-10 md:col-span-7 lg:ml-58 md:ml-0 text-start mt-2 md:mt-0">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-xs sm:text-sm md:text-xs uppercase tracking-wider mt-2">
                      INCLUDING: {item.subtitle}
                    </div>
                  )}
                </div>

                {/* Third Column - Plus/Minus Icon (right-aligned) */}
                <div className="col-span-2 md:col-span-1 flex justify-end">
                  <div
                    className={`flex justify-center items-center border border-black rounded-full transition duration-300 
                      ${isActive ? " text-black" : "bg-white text-black"}
                      w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10`}
                  >
                    {isActive ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    )}
                  </div>
                </div>
              </div>

              {!isActive && (
                <div className="px-6 md:px-8 pb-4 md:pb-6 hidden md:group-hover:block">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed line-clamp-2">
                    {item.content[0].description}
                  </p>
                </div>
              )}

              {isActive && (
                <div className="p-6 md:p-8 border-t border-gray-300">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="w-full md:w-1/2">
                      <ul className="space-y-4 sm:space-y-6 md:space-y-8">
                        {item.content.map((service, idx) => (
                          <li key={idx} className="mb-4 sm:mb-6 md:mb-8">
                            <h4 className="text-base  md:text-lg mb-1 sm:mb-2 uppercase">
                              {service.title}
                            </h4>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        {item.content.map((service, idx) => (
                          <div key={idx} className="mb-4 sm:mb-6 md:mb-8">
                            <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-8">
                        {item.buttons}
                      </div>
                    </div>
                  </div>

                  {/* Case Study Cards Grid - Added left margin on large screens */}
                  <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 lg:ml-[25%]">
                    {item.caseStudies.map((card, idx) => (
                      <ServicesCard
                        key={idx}
                        image={card.image}
                        label={card.label}
                        title={card.title}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}