import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Enquiry from "@/components/Enquiry";
import BrandLogo from "@/components/BrandLogo";
import siteSettings from "@/content/site-settings.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFA]">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `,
        }}
      />
      <Navigation />
      <Hero />
      <About />
      <Packages />
      <HowItWorks />
      <Gallery />
      <FAQ />
      <Enquiry />
      
      {/* Footer */}
      <footer className="bg-[#feffee] border-t border-[#28a0bc]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            {/* Left: Brand */}
            <div className="flex items-center justify-center md:justify-start">
              <BrandLogo className="scale-90 origin-left" />
            </div>

            {/* Centre: Contact */}
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-[#28a0bc] min-w-[80px]">Email:</span> 
                <a href={`mailto:${siteSettings.email}`} className="hover:text-[#28a0bc] transition-colors">{siteSettings.email}</a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-[#28a0bc] min-w-[80px]">Instagram:</span> 
                <a href={siteSettings.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#28a0bc] transition-colors">@{siteSettings.instagram.split('/').pop()}</a>
              </p>
            </div>

            {/* Right: Copyright */}
            <div className="md:text-right text-xs text-slate-400 font-light space-y-2">
              <p>&copy; {new Date().getFullYear()} Tequila Mockingbirds. All rights reserved.</p>
              <p className="uppercase tracking-[0.2em] text-[8px] opacity-70">{siteSettings.tagline}</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-[11px] text-slate-400 tracking-[0.2em] uppercase font-medium">
              A Premium Mobile Frozen Tequila Bar. Available Across the UK.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
