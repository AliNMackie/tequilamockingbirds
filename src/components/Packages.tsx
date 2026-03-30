import packagesContent from "@/content/packages.json";

export default function Packages() {
  const packages = packagesContent.items;

  return (
    <section id="packages" className="py-24 bg-[#FDFDFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-[#28a0bc]">Our</span> <span className="text-[#ff7be6]">Packages</span>
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Choose the perfect frozen tequila experience for your event. All packages include our signature beautiful bar setup and professional bartenders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <div 
              key={pkg.id} 
              className={`relative rounded-2xl p-8 border hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-lg ${
                pkg.id === "private-parties" 
                  ? "bg-[#28a0bc] border-[#28a0bc]/20 text-white" 
                  : pkg.id === "corporate-events"
                  ? "bg-[#feffee] border-slate-100 text-slate-800"
                  : "bg-[#ff7be6] border-[#ff7be6]/20 text-white"
              } ${pkg.featured ? "md:scale-105 z-10" : ""}`}
            >
              {pkg.featured && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md ${
                  pkg.id === "corporate-events" ? "bg-[#28a0bc]" : "bg-slate-900"
                }`}>
                  Most Popular
                </div>
              )}
              
              <h3 className={`font-display text-2xl font-bold mb-2 mt-2 ${
                pkg.id === "corporate-events" ? "text-slate-800" : "text-white"
              }`}>{pkg.title}</h3>
              <p className={`font-light mb-6 text-sm flex-grow ${
                pkg.id === "corporate-events" ? "text-slate-600" : "text-white/90"
              }`}>{pkg.description}</p>
              
              <div className={`text-2xl font-bold mb-6 border-b pb-6 ${
                pkg.id === "corporate-events" ? "text-[#238ca5] border-slate-100" : "text-white border-white/20"
              }`}>
                {pkg.price}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 shrink-0 ${
                      pkg.id === "corporate-events" ? "text-[#ff7be6]" : "text-white"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`font-light text-sm ${
                      pkg.id === "corporate-events" ? "text-slate-700" : "text-white/90"
                    }`}>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`#enquire?package=${pkg.id}`}
                className={`w-full py-3 rounded-full text-center font-medium transition-all ${
                  pkg.id === "corporate-events" 
                    ? "bg-[#28a0bc] text-white hover:bg-[#238ca5] shadow-md shadow-[#28a0bc]/20" 
                    : "bg-white text-slate-900 hover:bg-slate-50 shadow-md"
                }`}
              >
                Enquire about this
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
