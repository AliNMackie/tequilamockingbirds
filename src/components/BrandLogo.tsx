"use client";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export default function BrandLogo({ className = "", isLight = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative flex items-center gap-2 group">
        {/* Pink Bird (Left) */}
        <div className="w-12 h-12 transition-transform group-hover:scale-110 drop-shadow-sm flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Realistic Mockingbird Silhouette (Left) */}
            <path 
              d="M85,65 C80,68 70,68 65,65 C60,62 50,55 45,50 C40,45 35,35 45,25 C55,15 75,10 90,5 C80,20 70,35 65,50 C60,65 75,75 85,85 C80,82 75,78 85,65 Z" 
              fill="#FF62C8" 
            />
            {/* Wing / Shoulder */}
            <path d="M60,40 C65,35 55,25 50,20 C55,25 60,35 60,45" fill="#FF62C8" opacity="0.4" />
            <circle cx="50" cy="35" r="2" fill="white" /> {/* Eye */}
          </svg>
        </div>

        {/* Text Area */}
        <div className="flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <span className={`font-display font-medium text-xl md:text-2xl tracking-[0.15em] leading-tight ${isLight ? "text-white" : "text-slate-800"}`}>
              TEQUILA
            </span>
            {/* Horizontal Divider with extending lines */}
            <div className="relative h-[2px] w-full bg-[#0E9FB5]/40 my-1">
              <div className="absolute top-0 -left-6 right-0 h-full bg-gradient-to-r from-transparent via-[#0E9FB5] to-transparent"></div>
            </div>
            <span className={`font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight ${isLight ? "text-white" : "text-[#0E9FB5]"}`}>
              MOCKINGBIRDS
            </span>
          </div>
        </div>

        {/* Teal Bird (Right) */}
        <div className="w-12 h-12 transition-transform group-hover:scale-110 drop-shadow-sm flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Realistic Mockingbird Silhouette (Right - Flipped) */}
            <path 
              d="M15,65 C20,68 30,68 35,65 C40,62 50,55 55,50 C60,45 65,35 55,25 C45,15 25,10 10,5 C20,20 30,35 35,50 C40,65 25,75 15,85 C20,82 25,78 15,65 Z" 
              fill="#0E9FB5" 
            />
            {/* Wing / Shoulder */}
            <path d="M40,40 C35,35 45,25 50,20 C45,25 40,35 40,45" fill="#0E9FB5" opacity="0.4" />
            <circle cx="50" cy="35" r="2" fill="white" /> {/* Eye */}
          </svg>
        </div>
      </div>
    </div>
  );
}
