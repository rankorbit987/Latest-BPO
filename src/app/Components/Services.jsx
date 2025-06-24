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
                className="flex justify-between items-center w-full p-6 md:p-8 text-left min-h-[120px] sm:min-h-[150px] md:min-h-[180px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex flex-col text-left">
                  <div className="text-xs sm:text-sm md:text-xs uppercase tracking-wider mb-1 sm:mb-2">
                    Service {index + 1}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                    {item.title}
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 flex justify-center items-center border border-black rounded-full transition duration-300 
                    ${isActive ? "bg-black text-white" : "bg-white text-black"}
                    w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10`}
                >
                  {isActive ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  )}
                </div>
              </div>

              {!isActive && (
                <div className="px-6 md:px-8 pb-4 md:pb-6 hidden md:group-hover:block">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
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
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
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
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
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

                  {/* Case Study Cards Grid */}
                  <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
