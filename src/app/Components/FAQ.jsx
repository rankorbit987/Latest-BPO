"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is BPO?",
    answer: "BPO means Business Process Outsourcing. It allows you to outsource tasks like customer service, data entry, or admin work to us while you focus on running your business.",
  },
  {
    question: "Why should I choose BPO Brigade?",
    answer: "We act like part of your team. You get personal service, clear communication, and results you can measure. We tailor every solution to your business.",
  },
  {
    question: "Can I pick only the services I need?",
    answer: "Yes. You choose the services that fit your needs. We customize every plan to match your goals.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes. We support businesses of all sizes, from startups to large companies.",
  },
  {
    question: "How do you train your support agents?",
    answer: "We hire carefully, provide full training, and do regular quality checks. Our agents are trained to match your brand voice and serve your customers well.",
  },
  {
    question: "Can your AI handle customer conversations?",
    answer: "Yes. Our Conversational AI can handle most of the routine questions accurately.",
  },
  {
    question: "What’s the difference between Virtual Assistants and Customer Support?",
    answer: "Virtual Assistants help your internal team with admin work. Customer Support helps your customers directly through calls, emails, or chat.",
  },
  {
    question: "Is my data safe with you?",
    answer: "Yes. We follow strict security standards and data privacy laws. Your data stays safe and confidential.",
  },
];


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-4 sm:px-12 lg:px-20 py-12 md:py-20 bg-white text-black" id="faq-section">
      {/* Heading */}
      

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side small heading */}
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">
            FAQs
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-base-content text-[#284d8a]">
            Your Common Questions Answered
          </p>
        </div>

        {/* FAQs */}
        <ul className="basis-1/2">
          {faqData.map((faq, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-t md:text-lg border-base-content/10"
                aria-expanded={activeIndex === index ? "true" : "false"}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-base-content">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="16" height="2" rx="1"></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="rotate-90 origin-center"
                  ></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
