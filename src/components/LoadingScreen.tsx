"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for transition to finish before removing from DOM
      setTimeout(() => setIsRendered(false), 800);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFDFA] transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl relative overflow-hidden animate-pulse">
          <span className="font-display font-bold text-[#0E9FB5] text-4xl tracking-tight relative z-10">tm</span>
          <div className="absolute bottom-2 right-4 w-3 h-3 rounded-full bg-[#FF62C8]"></div>
        </div>
        
        {/* Loading Bar */}
        <div className="mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#0E9FB5] animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
        
        <p className="mt-4 font-display text-slate-400 text-xs uppercase tracking-[0.3em] font-medium animate-pulse">
          Tequila Mockingbirds
        </p>
      </div>

      <style jsx global>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
