"use client";

import { useState } from "react";
import faqContent from "@/content/faq.json";

export default function FAQ() {
  const faqs = faqContent?.items || [];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#ff7be6] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl branded-heading-light mb-4">
            FAQ
          </h2>
          <p className="text-lg text-white/90 font-light">
            Everything you need to know about booking Tequila Mockingbirds.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b transition-all duration-300 ${
                openIndex === index ? "border-white/40 bg-white/10" : "border-white/20"
              }`}
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-white">
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "text-white rotate-180" : "text-white/60"}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-white/90 font-light text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
