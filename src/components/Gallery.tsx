"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600", alt: "Close up of frozen margarita with lime garnish" },
    { src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600", alt: "Happy guests enjoying frozen cocktails at a summer event" },
    { src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=600", alt: "Professional bartender mixing a signature tequila drink" },
    { src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=600", alt: "Our sleek mobile bar setup ready for a private party" },
    { src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600", alt: "Details of our premium frozen cocktail menu" },
    { src: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600", alt: "The vibrant party atmosphere at a Tequila Mockingbirds event" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">The Vibe</h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            A glimpse into the Tequila Mockingbirds experience. Premium drinks, beautiful aesthetics, and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <button 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group text-left p-0 border-0 outline-none focus-visible:ring-4 focus-visible:ring-[#0B7D8E]"
              onClick={() => setSelectedImage(image)}
              aria-label={`View large version of ${image.alt}`}
            >
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 duration-300">
                  <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-[#0B7D8E] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all z-20 rounded-xl pointer-events-none duration-300"></div>
              
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
