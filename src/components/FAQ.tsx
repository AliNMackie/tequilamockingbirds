"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How far do you travel?",
      answer: "Based in the UK, we cover events nationwide. Travel within a 50-mile radius of our base is included; beyond that, a small mileage fee applies."
    },
    {
      question: "Do you need access to power and water?",
      answer: "We need access to a standard 13-amp plug socket to run our high-end frozen slush machines. We bring our own water supply for the machines if a mains connection isn't available nearby."
    },
    {
      question: "Are non-alcoholic options available?",
      answer: "Absolutely. We always offer premium frozen mocktails alongside our signature alcoholic serves to ensure all guests are catered for."
    },
    {
      question: "Do you have a minimum spend or minimum guest count?",
      answer: "Our packages start for events with 30+ guests. For smaller intimate gatherings, please enquire for a bespoke quote."
    },
    {
      question: "What exactly is included in the service?",
      answer: "Everything you need: the mobile bar, machines, premium spirits & ingredients, glassware (or premium eco-cups), garnishes, and professional bartenders."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FDFDFA]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">Frequently Asked</h2>
          <p className="text-lg text-slate-600 font-light">
            Everything you need to know about booking Tequila Mockingbirds.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-colors duration-300 overflow-hidden ${
                openIndex === index ? "border-[#0E9FB5] bg-white shadow-md shadow-[#0E9FB5]/5" : "border-slate-200 bg-white"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium transition-colors ${openIndex === index ? "text-[#0E9FB5]" : "text-slate-800"}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "text-[#0E9FB5] rotate-180" : "text-slate-400"}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 font-light line-clamp-4">
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
