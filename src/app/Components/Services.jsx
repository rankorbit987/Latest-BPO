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
    <section id="services-section" className="w-full py-8 md:py-20 text-black bg-white">
      <div className="relative w-full max-w-full">
        {servicesData.map((item, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={`px-0 sm:px-5 lg:px-12 relative border-t-[3px] border-black rounded-t-[30px] rounded-b-none transition-all duration-300 group -mt-3 sm:-mt-4 md:-mt-7
                ${isActive ? "bg-white" : "bg-white"} 
                ${!isActive ? item.hoverColor : ""}`}
            >
              {/* Header content */}
              <div
                className="grid grid-cols-12 items-start w-full p-4 md:p-6 lg:p-8 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="col-span-12 md:col-span-4 text-xs sm:text-[14px] uppercase tracking-wider font-mono font-medium text-gray-600">
                  SERVICES /
                </div>

                <div className="col-span-10 md:col-span-7 lg:ml-53 md:ml-0 text-start mt-1 md:mt-0">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-xs sm:text-sm md:text-lg uppercase tracking-wider mt-1 sm:mt-2 text-gray-600">
                      INCLUDING: {item.subtitle}
                    </div>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1 flex justify-end">
                  <div
                    className={`flex justify-center items-center border border-black rounded-full transition duration-300 
                      ${isActive ? " text-black" : "bg-white text-black"}
                      w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10`}
                  >
                    {isActive ? (
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    ) : (
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Hover content */}
              {!isActive && (
                <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 hidden md:group-hover:block transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
                    <div className="w-full md:w-1/2">
                      <ul className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                        {item.content.slice(0, 1).map((service, idx) => (
                          <li key={idx} className="mb-1 sm:mb-2 md:mb-4 lg:mb-6">
                            <h4 className="text-xs sm:text-[13px] md:text-[14px] uppercase font-mono font-medium text-gray-600">
                              {service.title}
                            </h4>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                        {item.content.slice(0, 1).map((service, idx) => (
                          <div key={idx} className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                            <p className="text-sm sm:text-base font-semibold leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                  ${isActive ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 sm:p-5 md:p-6 lg:p-8 border-t border-gray-300">
                  <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <div className="w-full md:w-1/2">
                      <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                        {item.content.map((service, idx) => (
                          <div key={idx} className="mb-1 sm:mb-2">
                            <h4 className="text-xs sm:text-[13px] md:text-[14px] uppercase font-medium font-mono">
                              {service.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                        {item.content.map((service, idx) => (
                          <div key={idx} className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                            <p className="text-sm sm:text-base md:text-[15px] lg:text-base font-semibold leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                        {item.buttons}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 ml-0 lg:ml-[25%]">
                    {item.caseStudies.map((card, idx) => (
                      <div key={idx} className="flex flex-col h-full">
                        <ServicesCard
                          image={card.image}
                          label={card.label}
                          title={card.title}
                          className="h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px]"
                          imageContainerClassName="w-1/2"
                          contentContainerClassName="w-1/2 p-3 sm:p-4 md:p-5 lg:p-6"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Decorative bottom card */}
        <div className="relative border-t-[3px] border-black rounded-t-[30px] rounded-b-none bg-white -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-7">
          <div className="min-h-[20px] sm:min-h-[25px] md:min-h-[30px]"></div>
        </div>
      </div>
    </section>
  );
}