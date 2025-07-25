"use client";
import React from "react";
import { ShieldCheck, Users, Bot, TrendingUp } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-10 md:px-16 lg:px-20 text-black"
    >
      {/* Intro paragraph */}
      <div className="mb-10 sm:mb-14 md:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight mb-10 ">
          At BPO Brigade, we approach every task with precision and commitment.
          Starting small with local clients, our mission was clear, deliver
          excellence. Through streamlined operations, real-time feedback, and
          full accountability, we’ve earned enduring client trust from day one.
        </h1>
      </div>

      <div className="ml-auto max-w-4xl w-full">
        {/* Border line */}
        <div className="border-t-3 border-black mb-8 sm:mb-10 md:mb-12"></div>

        <h2 className=" font-medium text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 text-left">
          Progress
        </h2>

        {/* Value 1 - Integrity */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-start items-start pt-2">
            <ShieldCheck className="w-20 h-20 text-[#c93c3c]" />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            <p>
              Today, we serve clients across industries including technology,
              retail, finance, and more. Yet, we remain true to our core values:
              Integrity in every action, Transparency in every update, and
              Respect for everyone we engage with.
            </p>
          </div>
        </div>

        {/* Value 2 - People Investment */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-start items-start pt-2">
            <Users className="w-20 h-20 text-[#214585]" />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            <p>
              We invest deeply in people. Our teams receive ongoing training in
              empathy and problem-solving. We promote from within, encourage
              fresh ideas, and allow every team member to influence how we work.
            </p>
          </div>
        </div>

        {/* Value 3 - Automation & Tools */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-start items-start pt-2">
            <Bot className="w-20 h-20 text-[#c93c3c]" />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            <p>
              We embrace technology to make work smoother. By automating routine
              tasks, customizing scripts, and using real-time dashboards, we
              deliver faster and more accurate service while keeping full
              transparency with our clients.
            </p>
          </div>
        </div>

        {/* Value 4 - Client Success Story */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          <div className="md:w-1/4 flex justify-start items-start pt-2">
            <TrendingUp className="w-20 h-20 text-[#214585]" />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg md:text-xl leading-relaxed font-medium ">
            <p>
              One retail client faced soaring support calls. We stepped in,
              restructured workflows, reduced hold times by 40% within three
              months, and trained agents on empathetic communication. The
              result: happier customers and lower costs.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-10 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
          <p>
            That is who we are. We listen first, act with care, and always
            deliver. With BPO Brigade, you gain dependable support, clear
            reporting, and a trusted partner committed to growing with you.
          </p>
        </div>
      </div>
    </section>
  );
}
