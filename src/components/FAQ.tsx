"use client";

import { useState } from "react";
import faqContent from "@/content/faq.json";

export default function FAQ() {
  const faqs = faqContent.items;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#feffee]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Frequently Asked</h2>
          <p className="text-lg text-slate-600 font-light">
            Everything you need to know about booking Tequila Mockingbirds.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                openIndex === index ? "border-[#28a0bc] bg-white shadow-md shadow-[#28a0bc]/5" : "border-slate-200 bg-white"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium transition-colors ${openIndex === index ? "text-[#28a0bc]" : "text-slate-800"}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "text-[#28a0bc] rotate-180" : "text-slate-400"}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 font-light leading-relaxed">
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
