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
              className={`px-4 sm:px-6 lg:px-12 relative border-t-[3px] border-black rounded-t-[30px] rounded-b-none transition-all duration-300 group 
                ${isActive ? "bg-white" : "bg-white"} 
                ${!isActive ? item.hoverColor : ""}`}
            >
              {/* Header content - stays fixed */}
              <div
                className="grid grid-cols-12 items-start w-full p-6 md:p-8 min-h-[120px] sm:min-h-[150px] md:min-h-[140px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="col-span-12 md:col-span-4 text-xs sm:text-sm md:text-xs uppercase tracking-wider">
                  SERVICES /
                </div>

                <div className="col-span-10 md:col-span-7 lg:ml-54 md:ml-0 text-start mt-2 md:mt-0">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-xs sm:text-sm md:text-lg uppercase tracking-wider mt-2">
                      INCLUDING: {item.subtitle}
                    </div>
                  )}
                </div>

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

              {/* Hover content - appears below without shifting header */}
              {!isActive && (
                <div className="px-6 md:px-8 pb-4 md:pb-6 hidden md:group-hover:block transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
                    <div className="w-full md:w-1/2">
                      <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                        {item.content.slice(0, 1).map((service, idx) => (
                          <li key={idx} className="mb-2 sm:mb-4 md:mb-6">
                            <h4 className="text-base sm:text-lg mb-1 sm:mb-2 uppercase">
                              {service.title}
                            </h4>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="space-y-2 md:space-y-4">
                        {item.content.slice(0, 1).map((service, idx) => (
                          <div key={idx} className="mb-2 sm:mb-4 md:mb-6">
                            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded content - smooth animation with scrollable area */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                  ${isActive ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{
                  transitionProperty: 'max-height, opacity',
                  willChange: 'max-height, opacity'
                }}
              >
                <div className="p-6 md:p-8 border-t border-gray-300 overflow-y-auto max-h-[calc(80vh-180px)]">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
                    {/* Subtitles and Descriptions aligned properly */}
                    <div className="w-full md:w-1/2">
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {item.content.map((service, idx) => (
                          <div key={idx} className="mb-2 sm:mb-4 md:mb-6">
                            <h4 className="text-base mb-1 sm:mb-2 uppercase font-medium">
                              {service.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {item.content.map((service, idx) => (
                          <div key={idx} className="mb-2 sm:mb-4 md:mb-6">
                            <p className="text-base sm:text-lg font-semibold leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 md:mt-6">
                        {item.buttons}
                      </div>
                    </div>
                  </div>

                  {/* Case Study Cards Grid */}
                  <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 lg:ml-[25%]">
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
              </div>
            </div>
          );
        })}

        {/* Decorative bottom card */}
        <div className={`relative border-t-[3px] border-black rounded-t-[30px] rounded-b-none bg-white -mt-4 sm:-mt-5 md:-mt-7`}>
          <div className="min-h-[30px]"></div>
        </div>
      </div>
    </section>
  );
}
