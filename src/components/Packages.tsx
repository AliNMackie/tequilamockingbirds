export default function Packages() {
  const packages = [
    {
      id: "private-parties",
      title: "Private Parties",
      description: "Perfect for birthdays, engagements, and garden parties. Elevate your celebration with a touch of beach club luxury.",
      inclusions: [
        "Fully staffed mobile bar setup",
        "2 Signature frozen tequila cocktails",
        "Premium glassware & garnishes",
        "3 hours of service"
      ],
      price: "From £450",
    },
    {
      id: "corporate-events",
      title: "Corporate & Brand Events",
      description: "Impress clients and treat your team. High-volume, high-quality service tailored to your brand aesthetic.",
      inclusions: [
        "Custom branded menus & cups",
        "3 Signature frozen tequila cocktails",
        "Non-alcoholic frozen options",
        "Up to 5 hours of service",
        "Dedicated event manager"
      ],
      price: "POA",
      featured: true,
    },
    {
      id: "festivals-popups",
      title: "Festivals & Pop‑ups",
      description: "The ultimate crowd-pleaser. Fast-paced service for high footfall environments without compromising on quality.",
      inclusions: [
        "High-capacity frozen margarita machines",
        "Rapid service staff",
        "Eco-friendly disposable cups",
        "Custom footprint options"
      ],
      price: "POA",
    }
  ];

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">Packages</h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Choose the perfect frozen tequila experience for your event. All packages include our signature beautiful bar setup and professional bartenders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-[#FDFDFA] rounded-2xl p-8 border hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full ${
                pkg.featured 
                  ? "border-[#0E9FB5] shadow-xl shadow-[#0E9FB5]/10 md:-mt-4" 
                  : "border-slate-100 shadow-lg"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0E9FB5] text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-2xl font-semibold text-slate-800 mb-2 mt-2">{pkg.title}</h3>
              <p className="text-slate-600 font-light mb-6 text-sm flex-grow">{pkg.description}</p>
              
              <div className="text-2xl font-bold text-[#0E9FB5] mb-6 border-b border-slate-100 pb-6">
                {pkg.price}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FF62C8] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`#enquire?package=${pkg.id}`}
                className={`w-full py-3 rounded-full text-center font-medium transition-colors ${
                  pkg.featured 
                    ? "bg-[#0E9FB5] text-white hover:bg-[#0c8a9d]" 
                    : "bg-slate-800 text-white hover:bg-slate-700"
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
