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
      <footer className="bg-slate-950 text-white/50 py-8 text-center text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Tequila Mockingbirds. All rights reserved.</p>
        <p className="mt-2 text-white/30 text-xs">A premium mobile frozen tequila experience.</p>
      </footer>
    </main>
  );
}
