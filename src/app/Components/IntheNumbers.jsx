"use client";
import React from "react";

const InTheNumbers = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 border-t-3 border-black pt-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight">
          The Numbers Speak For Themselves
        </h2>
        <p className="text-base md:text-lg max-w-xl mt-7 md:mt-0">
          At BPO Brigade, we believe steady action creates real results. Our
          hands-on team focuses on delivering clear wins at every stage. We
          track progress, stay accountable, and make sure each milestone adds
          value to your business.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#D3A7FF] rounded-2xl px-6 py-4 flex flex-col h-64">
          <span className="text-[80px] font-light leading-none">100+</span>
          <div className="flex-grow"></div>
          <p className="text-lg">Active Client Partnerships (2025)</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#48F4B8] rounded-2xl px-6 py-4 flex flex-col h-64">
          <span className="text-[80px] font-light leading-none">500+</span>
          <div className="flex-grow"></div>
          <p className="text-lg">Assignments Completed YTD</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FFD600] rounded-2xl px-6 py-4 flex flex-col h-64">
          <div className="flex items-baseline space-x-1">
            <span className="text-[80px] font-light leading-none">99</span>
            <span className="text-3xl font-light">99%</span>
          </div>
          <div className="flex-grow"></div>
          <p className="text-lg">On-Time Task Completion (2025 - YTD)</p>
        </div>
      </div>
    </section>
  );
};

export default InTheNumbers;
