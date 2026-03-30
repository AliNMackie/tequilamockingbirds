import aboutContent from "@/content/about.json";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#feffee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-[#28a0bc]">Meet</span> <span className="text-[#ff7be6]">Tequila</span> <br />
              <span className="text-[#28a0bc]">Mockingbirds</span>
            </h2>
            <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
              <p>
                {aboutContent.description1}
              </p>
              <p>
                {aboutContent.description2}
              </p>
            </div>
            
            <div className="mt-12 space-y-5">
              {aboutContent.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform ${
                    idx % 2 === 0 ? "bg-[#28a0bc]/10 text-[#28a0bc] rotate-3 hover:rotate-0" : "bg-[#ff7be6]/10 text-[#ff7be6] -rotate-3 hover:rotate-0"
                  }`}>
                    {idx === 0 && (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-lg text-slate-800">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[600px]">
            {/* Professional Frame */}
            <div className="absolute -top-4 -left-4 -bottom-4 -right-4 border-2 border-[#28a0bc]/20 rounded-3xl pointer-events-none"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-[#28a0bc] rounded-tl-2xl pointer-events-none"></div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-[#ff7be6] rounded-br-2xl pointer-events-none"></div>
            
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional bartender preparing a signature frozen margarita at a Tequila Mockingbirds event" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff7be6] rounded-full blur-3xl opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
