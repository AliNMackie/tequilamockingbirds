import aboutContent from "@/content/about.json";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#feffee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-10">
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] md:h-[650px]">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional bartender preparing a signature frozen margarita at a Tequila Mockingbirds event" 
                className="w-full h-full object-cover"
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
