import Image from "next/image";
import aboutContent from "@/content/about.json";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#feffee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl branded-heading mb-8">
              {aboutContent?.heading || "Meet Tequila"} <br />
              {aboutContent?.headingHighlight || "Mockingbirds"}
            </h2>
            <div className="space-y-8 text-xl text-slate-600 font-light leading-relaxed max-w-xl">
              <p>
                {aboutContent?.description1}
              </p>
              <p>
                {aboutContent?.description2}
              </p>
              <p className="text-[#28a0bc] font-medium italic">
                {aboutContent?.tagline || "Anytime, Anywhere."}
              </p>
            </div>

            {aboutContent?.features && aboutContent.features.length > 0 && (
              <ul className="space-y-4 pt-4 border-t border-[#28a0bc]/10">
                {aboutContent.features.map((feature: { text: string }, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-6 h-6 text-[#ff7be6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] md:h-[650px]">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <Image 
                src={aboutContent?.image || "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1000"} 
                alt="Professional bartender preparing a signature frozen margarita at a Tequila Mockingbirds event" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#ff7be6] rounded-full blur-3xl opacity-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
