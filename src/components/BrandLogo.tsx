"use client";

import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
  size?: "small" | "large";
}

export default function BrandLogo({ className = "", size = "small" }: BrandLogoProps) {
  const dimensions = size === "large" 
    ? { width: 400, height: 192 } // Based on h-48
    : { width: 220, height: 96 }; // Based on h-24

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image 
        src="/trans-logo.png" 
        alt="Tequila Mockingbirds Logo" 
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-auto"
        priority
      />
    </div>
  );
}
