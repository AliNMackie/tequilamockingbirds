"use client";

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export default function BrandLogo({ className = "", isLight = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative group">
        {/* Bird Frame / Logo Container */}
        <div className="relative flex items-center justify-center py-2 px-1">
          {/* Top Bird (Pink) */}
          <div className="absolute -top-5 -left-6 w-14 h-14 transform -rotate-12 transition-transform group-hover:scale-110 opacity-90 drop-shadow-md">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Refined Mockingbird Silhouette */}
              <path d="M10,60 C15,55 25,35 45,40 C65,45 80,35 90,20 C85,45 70,60 50,70 C30,80 15,85 10,80 C5,75 5,65 10,60" fill="#FF62C8" />
              <path d="M45,40 C55,30 40,20 35,15 C55,20 65,40 65,55" fill="#FF62C8" opacity="0.6" /> {/* Wing */}
              <circle cx="20" cy="58" r="2.5" fill="white" /> {/* Eye */}
            </svg>
          </div>

          <div className="flex flex-col items-center px-4">
            <span className={`font-display font-bold text-2xl md:text-3xl tracking-tighter leading-none ${isLight ? "text-white" : "text-slate-800"}`}>
              TEQUILA
            </span>
            <div className="h-0.5 w-full bg-[#0E9FB5]/30 my-1"></div>
            <span className={`font-display font-bold text-2xl md:text-3xl tracking-tighter leading-none ${isLight ? "text-white" : "text-[#0E9FB5]"}`}>
              MOCKINGBIRDS
            </span>
          </div>

          {/* Bottom Bird (Teal) */}
          <div className="absolute -bottom-5 -right-6 w-14 h-14 transform rotate-12 transition-transform group-hover:scale-110 opacity-90 drop-shadow-md">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Refined Mockingbird Silhouette (flipped) */}
              <path d="M90,40 C85,45 75,65 55,60 C35,55 20,65 10,80 C15,55 30,40 50,30 C70,20 85,15 90,20 C95,25 95,35 90,40" fill="#0E9FB5" />
              <path d="M55,60 C45,70 60,80 65,85 C45,80 35,60 35,45" fill="#0E9FB5" opacity="0.6" /> {/* Wing */}
              <circle cx="80" cy="42" r="2.5" fill="white" /> {/* Eye */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
