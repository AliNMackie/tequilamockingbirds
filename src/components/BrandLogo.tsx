"use client";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export default function BrandLogo({ className = "", isLight = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/trans-logo.png" 
        alt="Tequila Mockingbirds Logo" 
        className={`h-12 md:h-16 w-auto transition-all duration-300 ${isLight ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}
