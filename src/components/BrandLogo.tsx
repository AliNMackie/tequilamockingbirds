"use client";

import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
  size?: "small" | "large";
}

export default function BrandLogo({ className = "", size = "small" }: BrandLogoProps) {
  const dimensions = size === "large" 
    ? { width: 400, height: 148 } 
    : { width: 220, height: 81 };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image 
        src="/trans-logo.png" 
        alt="Tequila Mockingbirds Logo" 
        width={dimensions.width}
        height={dimensions.height}
        className={`object-contain transition-all duration-300 ${
          size === "large" 
            ? "w-[240px] h-[89px] md:w-[400px] md:h-[148px]" 
            : "w-[160px] h-[59px] md:w-[220px] md:h-[81px]"
        }`}
        priority
      />
    </div>
  );
}
