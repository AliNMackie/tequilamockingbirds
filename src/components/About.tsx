export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FDFDFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Meet Tequila <span className="text-[#0E9FB5]">Mockingbirds</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                [Placeholder copy] We take the classic frozen margarita and elevate it to an art form. Born from a love of beach club culture and premium spirits, Tequila Mockingbirds is not just a drink service—it's an experience.
              </p>
              <p>
                [Placeholder copy] Whether you're hosting an intimate garden party or a large-scale corporate festival, our mobile bar brings the aesthetics of a high-end lounge directly to your venue, complete with expert bartenders and Instagram-ready presentation.
              </p>
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0E9FB5]/10 flex items-center justify-center text-[#0E9FB5]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="font-medium text-slate-800">High‑end frozen tequila cocktails</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF62C8]/10 flex items-center justify-center text-[#FF62C8]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium text-slate-800">Instagram‑ready mobile bar</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0E9FB5]/10 flex items-center justify-center text-[#0E9FB5]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="font-medium text-slate-800">Professional, friendly bartenders</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1000" 
              alt="Bartender preparing cocktails" 
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF62C8] rounded-full blur-2xl opacity-40"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
