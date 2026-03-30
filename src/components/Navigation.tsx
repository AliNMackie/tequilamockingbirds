"use client";

import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#feffee] shadow-md border-b border-black/5" : "bg-transparent"}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-24 md:h-28' : 'h-40 md:h-56'}`}>
        {/* Left Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#28a0bc] ${isScrolled ? 'text-slate-800' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Logo (Centered) */}
        <div className="flex-shrink-0 flex justify-center">
          <a href="#" className="flex items-center">
            <BrandLogo size={isScrolled ? "small" : "large"} />
          </a>
        </div>

        {/* Right Nav (Desktop) */}
        <nav className="hidden md:flex items-center justify-end gap-8 flex-1">
          {navLinks.slice(3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#28a0bc] ${isScrolled ? 'text-slate-800' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#enquire"
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm ${
              isScrolled 
                ? "bg-[#28a0bc] text-white hover:bg-[#238ca5]" 
                : "bg-white text-slate-900 hover:bg-slate-50"
            }`}
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 flex flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-[2px] w-full ${isScrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
            <span className={`block h-[2px] w-full ${isScrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
            <span className={`block h-[2px] w-3 ${isScrolled ? 'bg-slate-800' : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-[#feffee] shadow-lg border-t border-slate-100 p-6 flex flex-col gap-4">
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
            className="mt-4 w-full text-center px-6 py-3 rounded-full bg-[#28a0bc] text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
