"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
import menuContent from "@/content/menu.json";

interface MenuImage {
  src: string;
  title: string;
  subtitle: string;
  alt: string;
}

interface DrinkItem {
  name: string;
  category: string;
  description: string;
  tag?: string;
  isSignature?: boolean;
}

export default function MenuClient() {
  const [selectedImage, setSelectedImage] = useState<MenuImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const images: MenuImage[] = menuContent.images || [];
  const drinks: DrinkItem[] = menuContent.drinks || [];

  const categories = ["All", ...Array.from(new Set(drinks.map((d) => d.category)))];

  const filteredDrinks =
    activeCategory === "All"
      ? drinks
      : drinks.filter((d) => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFDFA] flex flex-col">
      <Navigation />

      {/* Hero Banner Section */}
      <section className="relative bg-slate-900 text-white pt-48 pb-20 md:pt-60 md:pb-28 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#28a0bc] rounded-full blur-[140px] opacity-25 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#ff7be6] rounded-full blur-[140px] opacity-15 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/60 mb-6 font-medium tracking-wider uppercase">
            <Link href="/" className="hover:text-[#28a0bc] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#28a0bc]">Our Menu</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
              {menuContent.heading || "Our Menu"}{" "}
              <span className="text-[#ff7be6] block sm:inline">
                {menuContent.headingHighlight || "Fresh & Frozen"}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
              {menuContent.subtitle}
            </p>

            {/* Feature Pills */}
            {menuContent.features && menuContent.features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
                {menuContent.features.map((feature: { text: string }, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-sm md:text-base text-white/90">
                    <div className="w-5 h-5 rounded-full bg-[#28a0bc]/20 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#28a0bc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3–4 Images Photo Showcase */}
      <section className="py-20 bg-[#feffee] border-b border-[#28a0bc]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#28a0bc]">Visual Highlights</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2">
                A Taste of What We Pour
              </h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base max-w-md font-light">
              Click any photo to view in high resolution. From crowd-pleasing signature margaritas to bespoke seasonal creations.
            </p>
          </div>

          {/* Responsive 4-card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-900 flex flex-col aspect-[4/5] border-4 border-white"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(img);
                  }
                }}
                aria-label={`View enlarged photo: ${img.title}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Zoom Icon badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                {/* Card Caption */}
                <div className="mt-auto p-5 relative z-10">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ff7be6] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    Photo 0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg leading-snug drop-shadow-sm group-hover:text-[#28a0bc] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-white/80 text-xs mt-1.5 line-clamp-2 font-light">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Menu Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#28a0bc]">The Cocktails</span>
          <h2 className="text-4xl md:text-6xl branded-heading mt-2 mb-4">
            Signature Flavours
          </h2>
          <p className="text-slate-600 text-lg font-light">
            Blended fresh to order. No artificial syrups—only premium agave tequila, cold-pressed juices, and feel-good ingredients.
          </p>

          {/* Category Tabs */}
          {categories.length > 2 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#28a0bc] text-white shadow-md shadow-[#28a0bc]/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDrinks.map((drink, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 ${
                drink.isSignature
                  ? "border-[#28a0bc]/40 shadow-xl shadow-[#28a0bc]/5 ring-1 ring-[#28a0bc]/20"
                  : "border-slate-200/80 shadow-md hover:shadow-xl"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#feffee] border border-[#28a0bc]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    🍹
                  </div>
                  {drink.tag && (
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold tracking-wide ${
                        drink.tag.toLowerCase().includes("spicy") || drink.tag.toLowerCase().includes("crowd")
                          ? "bg-[#ff7be6]/15 text-[#c93b9f]"
                          : drink.tag.toLowerCase().includes("alcohol-free")
                          ? "bg-[#28a0bc]/15 text-[#1a6678]"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {drink.tag}
                    </span>
                  )}
                </div>

                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  {drink.category}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#28a0bc] transition-colors">
                  {drink.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {drink.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-[#28a0bc]">Ice-Cold Frozen Blend</span>
                <span>Freshly Poured</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bespoke Menu Callout */}
        <div className="mt-16 bg-gradient-to-br from-[#feffee] to-[#e7f7fa] rounded-3xl p-8 md:p-12 border-2 border-[#28a0bc]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7be6]/15 text-[#c93b9f] text-xs font-bold uppercase tracking-wider mb-4">
              <span>✨</span> {menuContent.customNoteHeading || "Customise Your Flock's Menu"}
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
              Tailored specifically to your celebration
            </h3>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              {menuContent.customNote}
            </p>
          </div>
          <a
            href="#enquire"
            className="px-8 py-4 rounded-full bg-[#28a0bc] text-white font-semibold text-base hover:bg-[#238ca5] transition-all shadow-lg shadow-[#28a0bc]/25 whitespace-nowrap hover:scale-105 active:scale-95"
          >
            Enquire About Menu
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-pointer"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[60] p-3 rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-4xl w-full flex flex-col items-center bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] md:h-[70vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
            <div className="w-full p-6 bg-slate-900/95 border-t border-white/10 text-center">
              <h4 className="text-xl font-display font-bold text-white mb-1">
                {selectedImage.title}
              </h4>
              <p className="text-white/70 text-sm font-light">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Form */}
      <Enquiry />

      {/* Footer */}
      <Footer />
    </div>
  );
}
