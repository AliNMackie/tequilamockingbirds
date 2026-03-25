"use client";

import { useState, useEffect } from "react";

export default function Enquiry() {
  const [selectedPackage, setSelectedPackage] = useState("");
  
  // Set initial package from URL if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    if (pkg) {
      setSelectedPackage(pkg);
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="enquire" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E9FB5] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF62C8] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Enquire Now</h2>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Tell us a few details about your celebration and we’ll come back with a tailored quote within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
          {isSuccess ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#0E9FB5]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0E9FB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Enquiry Sent Successfully</h3>
              <p className="text-white/70">Thank you! We'll be in touch with your tailored quote shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/90">Full Name *</label>
                  <input required type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/90">Email Address *</label>
                  <input required type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/90">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors" placeholder="+44 7000 000000" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-white/90">Event Type *</label>
                  <select required id="eventType" className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors appearance-none">
                    <option value="" disabled selected>Select event type</option>
                    <option value="private">Private Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival / Pop-up</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-white/90">Event Date *</label>
                  <input required type="date" id="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors [color-scheme:dark]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-white/90">Location (Town/Postcode) *</label>
                  <input required type="text" id="location" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors" placeholder="e.g. Manchester, M1" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium text-white/90">Approx. Guests *</label>
                  <select required id="guests" className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors appearance-none">
                    <option value="" disabled selected>Select guest count</option>
                    <option value="0-50">Up to 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-250">100 - 250</option>
                    <option value="250+">250+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="package" className="text-sm font-medium text-white/90">Package of Interest</label>
                  <select 
                    id="package" 
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors appearance-none"
                  >
                    <option value="">I'm not sure yet</option>
                    <option value="private-parties">Private Parties</option>
                    <option value="corporate-events">Corporate & Brand Events</option>
                    <option value="festivals-popups">Festivals & Pop-ups</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-white/90">Anything else we should know?</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0E9FB5] focus:ring-1 focus:ring-[#0E9FB5] transition-colors resize-none" placeholder="Tell us about the vibe..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#FF62C8] hover:bg-[#e658b4] text-white font-semibold py-4 rounded-lg transition-colors shadow-lg shadow-[#FF62C8]/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Request Quote"
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
