"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ContactUsButton from "../UI/Buttons/contactusBtn";
import Image from "next/image";

export default function ClientCaseStudies() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-14 flex flex-col items-start mx-auto bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight mb-10">
        Real Results. Real Businesses. Real Growth.
      </h1>

      <div className="mb-6">
        <ContactUsButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">

        {/* Case 1 – Customer Support */}
        <div className="relative rounded-xl overflow-hidden text-white flex flex-col justify-between p-4 md:p-6 min-h-[220px] md:min-h-[300px] lg:min-h-[320px] md:col-span-4 group transition-all duration-500 ease-in-out cursor-pointer">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Customer support representatives"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>

          <p className="text-base sm:text-lg lg:text-2xl font-light leading-relaxed relative z-10">
            "BPO Brigade transformed our customer support. Customers now get help much faster."
          </p>
          <div className="flex justify-between items-end mt-3 relative z-10">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
              National Retailer
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Statistic 1 – Customer Support Metrics */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-between p-4 md:p-6 min-h-[220px] md:min-h-[300px] md:col-span-3 bg-[#78F4B9]">
          <p className="text-3xl lg:text-5xl font-bold text-black">85%</p>
          <p className="text-sm md:text-lg font-medium text-black mt-2">
            Same-day resolution for 85% of customer issues
          </p>
        </div>

        {/* Statistic 2 – Back Office Metrics */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-between p-4 md:p-6 min-h-[220px] md:min-h-[300px] md:col-span-3 bg-[#F6D500]">
          <p className="text-3xl lg:text-5xl font-bold text-black">300+</p>
          <p className="text-sm md:text-lg font-medium text-black mt-2">
            Hours saved monthly with back-office automation
          </p>
        </div>

        {/* Case 2 – Back Office Automation */}
        <div className="relative rounded-xl overflow-hidden text-white flex flex-col justify-between p-4 md:p-6 min-h-[220px] md:min-h-[300px] lg:min-h-[320px] md:col-span-4 group transition-all duration-500 ease-in-out cursor-pointer">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Back office automation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-2xl font-light leading-relaxed relative z-10">
            "BPO Brigade rebuilt our back-office — faster operations, fewer errors, big savings."
          </p>
          <div className="flex justify-between items-end mt-3 relative z-10">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
              Financial Services Provider
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-300" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
