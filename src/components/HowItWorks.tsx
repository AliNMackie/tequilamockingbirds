export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your event",
      description: "Send an enquiry with your date, location, and guest numbers. We'll get back to you with a tailored quote within 24 hours.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Choose your line‑up",
      description: "Select from our signature frozen serves, classic margaritas, and delicious mocktails to build your perfect drink menu.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "We roll up and serve",
      description: "We arrive early to set up our beautiful mobile bar, prepare the garnishes, and start serving frozen perfection to your guests.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#28a0bc] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl branded-heading-light mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
            Booking Tequila Mockingbirds is simple. We handle everything from the bar setup to the cleanup, so you can focus on enjoying the party.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-white/20"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-36 h-36 rounded-full bg-white border-8 border-[#28a0bc] shadow-2xl flex flex-col items-center justify-center text-[#28a0bc] mb-8 relative group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#ff7be6] text-white text-xs font-bold flex items-center justify-center shadow-md translate-x-2 -translate-y-2">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
