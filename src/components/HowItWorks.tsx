import howItWorksContent from "@/content/how-it-works.json";

/* ------------------------------------------------------------------ */
/*  Icon library — a curated set the client can pick from in the CMS  */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ReactNode> = {
  calendar: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  cocktail: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L4 12h16L12 2zm0 10v10m-4 0h8M6 8l6 6 6-6" />
    </svg>
  ),
  truck: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V17m4 0h2m0 0h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2m1 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  ),
  star: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  heart: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  chat: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  music: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  check: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function HowItWorks() {
  const heading  = howItWorksContent?.heading  || "How It Works";
  const subtitle = howItWorksContent?.subtitle || "Booking Tequila Mockingbirds is simple. We handle everything from the bar setup to the cleanup, so you can focus on enjoying the party.";
  const steps    = howItWorksContent?.steps    || [];

  return (
    <section id="how-it-works" className="py-24 bg-[#FDFDFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl branded-heading mb-4">
            {heading}
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-[#28a0bc]/20"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-36 h-36 rounded-full bg-white border-8 border-[#28a0bc]/10 shadow-2xl flex flex-col items-center justify-center text-[#28a0bc] mb-8 relative group-hover:scale-105 transition-transform duration-300">
                  {/* Render icon from the CMS-selected key, fall back to star */}
                  {iconMap[step.icon] || iconMap.star}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#ff7be6] text-white text-xs font-bold flex items-center justify-center shadow-md translate-x-2 -translate-y-2">
                    {step.number}
                  </div>
                </div>
                <h3 className="branded-text-pink text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
