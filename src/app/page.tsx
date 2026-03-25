import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Enquiry from "@/components/Enquiry";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFA]">
      <Navigation />
      <Hero />
      <About />
      <Packages />
      <HowItWorks />
      <Gallery />
      <FAQ />
      <Enquiry />
      
      {/* Footer */}
      <footer className="bg-[#FDFDFA] border-t border-[#0E9FB5]/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            {/* Left: Brand */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 relative overflow-hidden">
                <span className="font-display font-bold text-[#0E9FB5] text-sm relative z-10">tm</span>
                <div className="absolute bottom-0.5 right-1 w-1 h-1 rounded-full bg-[#FF62C8]"></div>
              </div>
              <span className="font-display font-semibold text-slate-800">
                Tequila Mockingbirds
              </span>
            </div>

            {/* Centre: Contact */}
            <div className="flex flex-col gap-1 text-sm text-slate-600 font-light">
              <p><span className="font-medium text-[#0E9FB5]">Email:</span> hello@tequilamockingbirds.co.uk</p>
              <p><span className="font-medium text-[#0E9FB5]">Phone:</span> +44 (0) 7700 000000</p>
              <p><span className="font-medium text-[#0E9FB5]">Instagram:</span> @tequilamockingbirds</p>
            </div>

            {/* Right: Copyright */}
            <div className="md:text-right text-xs text-slate-400 font-light">
              <p>&copy; {new Date().getFullYear()} Tequila Mockingbirds. All rights reserved.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              A premium mobile frozen tequila bar. Available across the UK.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
