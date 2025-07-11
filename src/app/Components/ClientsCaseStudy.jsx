"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ContactUsButton from "../UI/Buttons/contactusBtn";
import Image from "next/image";

export default function ClientCaseStudies() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-14 flex flex-col items-start mx-auto bg-white max-w-screen-2xl">
      <h1 className="text-2xl md:text-3xl font-medium text-black leading-tight mb-4 md:mb-6">
        Real Results. Real Businesses. Real Growth.
      </h1>

      <div className="mb-15">
        <ContactUsButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 w-full">

        {/* Case 1 – Customer Support (Top-Right Inverted Corner) */}
        <div className="relative rounded-xl inverted-top-right overflow-hidden text-white flex flex-col justify-between p-5 md:p-6 min-h-[320px] md:min-h-[380px] lg:min-h-[450px] md:col-span-8 group transition-all duration-500 ease-in-out cursor-pointer">
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

          <p className="text-2xl md:text-3xl lg:text-5xl text-start font-medium leading-relaxed relative z-10 mr-auto max-w-xl">
            "BPO Brigade transformed our customer support. Customers now get help much faster."
          </p>
          <div className="flex justify-between items-end mt-3 relative z-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              National Retailer
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Statistic 1 – Customer Support Metrics */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[230px] md:min-h-[290px] lg:min-h-[350px] md:col-span-4 bg-[#78F4B9]">
          <p className="text-3xl lg:text-5xl text-black">
            <span className="text-6xl lg:text-9xl">85</span> %
          </p>
          <p className="text-sm md:text-base font-semibold text-black mt-2">
            Same-day resolution for 85% of customer issues
          </p>
        </div>

        {/* Statistic 2 – Back Office Metrics */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[230px] md:min-h-[290px] lg:min-h-[350px] md:col-span-4 bg-[#F6D500]">
          <p className="text-xl lg:text-2xl text-black">
            From <span className="text-6xl lg:text-9xl font-bold">7</span> Days
          </p>
          <p className="text-sm md:text-base font-semibold text-black mt-2">
            Hours saved monthly with back-office automation
          </p>
        </div>

        {/* Case 2 – Back Office Automation (Top-Left Inverted Corner) */}
        <div className="relative rounded-xl inverted-top-left overflow-hidden text-white flex flex-col justify-between text-end p-5 md:p-6 min-h-[320px] md:min-h-[380px] lg:min-h-[450px] md:col-span-8 group transition-all duration-500 ease-in-out cursor-pointer">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Back office automation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>
          <p className="text-2xl md:text-3xl lg:text-5xl text-end sm:pt-0 pt-15 font-medium leading-relaxed relative z-10 ml-auto max-w-xl">
  "BPO Brigade rebuilt our back-office, faster operations, fewer errors, big savings."
</p>

          <div className="flex justify-between items-end relative z-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Financial Services Provider
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Inverted Corner Masks */}
      <style jsx>{`
        .inverted-top-left {
          --r: 20px;
          --s: 30px;
          --x: 40px;
          --y: 20px;

          --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(at var(--r) var(--r), #000 75%, #0000 0);
          --_d: calc(var(--s) + var(--r));

          mask:
            calc(var(--_d) + var(--x)) 0 var(--_m),
            0 calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(var(--s) at 0 0, #0000 99%, #000 calc(100% + 1px))
              calc(var(--r) + var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }

        .inverted-top-right {
          --r: 20px;
          --s: 30px;
          --x: 40px;
          --y: 20px;

          --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(at calc(100% - var(--r)) var(--r), #0000 25%, #000 0);
          --_d: calc(var(--s) + var(--r));

          mask:
            calc(100% - var(--_d) - var(--x)) 0 var(--_m),
            100% calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 0, #0000 99%, #000 calc(100% + 1px))
              calc(-1 * var(--r) - var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
