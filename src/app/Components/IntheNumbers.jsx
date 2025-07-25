"use client";
import React from "react";
import BlastedBackground from "../UI/CardBackground";

const InTheNumbers = () => {
  return (
    <section className="w-full bg-white text-black px-4 md:px-20 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-12 md:mb-30 border-t-4 border-black pt-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black tracking-tight leading-tight">
          The Numbers Speak For Themselves
        </h2>
        <p className="text-base md:text-lg max-w-2xl mt-7 md:mt-0 font-semibold">
          At BPO Brigade, we believe steady action creates real results. Our
          hands-on team focuses on delivering clear wins at every stage. We
          track progress, stay accountable, and make sure each milestone adds
          value to your business.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-2xl px-6 py-4 flex flex-col h-64 overflow-hidden z-0">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <BlastedBackground />
          </div>
          <div className="relative z-10 h-full flex flex-col">
            <span className="text-[80px] font-medium leading-none">100+</span>
            <div className="flex-grow"></div>
            <p className="text-lg font-semibold">Active Client Partnerships (2025)</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#214585] rounded-2xl px-6 py-4 flex flex-col h-64 text-white">
          <span className="text-[80px] font-light leading-none">500+</span>
          <div className="flex-grow"></div>
          <p className="text-lg font-semibold">Assignments Completed YTD</p>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl px-6 py-4 flex flex-col h-64 overflow-hidden z-0">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <BlastedBackground/>
          </div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-baseline space-x-1">
              <span className="text-[80px] font-light leading-none">99</span>
              <span className="text-3xl font-light">99%</span>
            </div>
            <div className="flex-grow"></div>
            <p className="text-lg font-semibold">On-Time Task Completion (2025 - YTD)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InTheNumbers;