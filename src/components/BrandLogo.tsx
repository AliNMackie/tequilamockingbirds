"use client";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
  size?: "small" | "large";
}

export default function BrandLogo({ className = "", isLight = false, size = "small" }: BrandLogoProps) {
  const dimensions = size === "large" 
    ? "h-32 md:h-48 w-[280px] md:w-[400px]" 
    : "h-16 md:h-24 w-[160px] md:w-[220px]";

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
