"use client";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export default function BrandLogo({ className = "", isLight = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="overflow-hidden w-[160px] md:w-[220px] h-full flex items-center justify-center pointer-events-none">
        <img 
          src="/trans-logo.png" 
          alt="Tequila Mockingbirds Logo" 
          className={`h-full w-auto max-w-none transition-all duration-300 ${isLight ? 'brightness-0 invert' : ''}`}
        />
      </div>
    </div>
  );
}
