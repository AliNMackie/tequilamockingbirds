"use client";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
  size?: "small" | "large";
}

export default function BrandLogo({ className = "", isLight = false, size = "small" }: BrandLogoProps) {
  const dimensions = size === "large" 
    ? "h-24 md:h-32 w-[240px] md:w-[320px]" 
    : "h-12 md:h-16 w-[140px] md:w-[180px]";

  return (
    <div className={`flex items-center justify-center ${dimensions} ${className}`}>
      <img 
        src="/trans-logo.png" 
        alt="Tequila Mockingbirds Logo" 
        className="h-full w-auto max-w-none"
      />
    </div>
  );
}
