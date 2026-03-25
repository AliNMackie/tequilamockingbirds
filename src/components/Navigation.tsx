"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FDFDFA]/90 backdrop-blur-md shadow-sm border-b border-[#0E9FB5]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform" aria-label="Tequila Mockingbirds Logo">
            <span className="font-display font-bold text-[#0E9FB5] text-xl tracking-tight relative z-10">tm</span>
            <div className="absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full bg-[#FF62C8]"></div>
          </div>
          <span className={`font-display font-semibold transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}>
            Tequila Mockingbirds
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#0E9FB5] ${isScrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#enquire"
            className="px-5 py-2.5 rounded-full bg-[#FF62C8] text-white font-medium text-sm hover:bg-[#e658b4] transition-colors shadow-sm"
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 flex flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-[2px] w-full transition-all ${isScrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
            <span className={`block h-[2px] w-full transition-all ${isScrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
            <span className={`block h-[2px] w-3 transition-all ${isScrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-[#FDFDFA] shadow-lg border-t border-slate-100 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#enquire"
            className="mt-4 w-full text-center px-6 py-3 rounded-full bg-[#0E9FB5] text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
