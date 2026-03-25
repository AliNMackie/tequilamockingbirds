"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Using simple generic placeholder URLs for now
  // Real images can be dropped into the public folder later
  const images = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=2000",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Slideshow */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-40" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Tequila Mockingbirds Event"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
          Frozen Tequila Cocktails.<br />
          <span className="text-[#FDFDFA]/90">Anywhere You Celebrate.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          The ultimate high-end mobile bar bringing premium frozen margaritas and legendary vibes to private parties, corporate events, and festivals across the UK.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#enquire"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0E9FB5] text-white font-medium text-lg hover:bg-[#0c8a9d] transition-colors shadow-lg shadow-[#0E9FB5]/20"
          >
            Enquire Now
          </a>
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-medium text-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            View Packages
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/70 text-sm font-medium tracking-widest uppercase">Scroll</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white/70">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
