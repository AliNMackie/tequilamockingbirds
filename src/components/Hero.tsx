"use client";

import { useEffect, useState } from "react";
import heroContent from "@/content/hero.json";

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
            alt="Tequila Mockingbirds premium mobile frozen cocktail bar service at a UK event" 
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-48 pb-12 md:pt-64">
        <div className="relative">
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none">
        <span className="text-white/50 text-[11px] font-medium tracking-[0.15em] uppercase">Scroll</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white/50 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
