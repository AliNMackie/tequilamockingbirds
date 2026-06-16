import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import siteMetadata from "@/content/site-metadata.json";
import siteSettings from "@/content/site-settings.json";
import packagesContent from "@/content/packages.json";
import faqContent from "@/content/faq.json";

export const metadata: Metadata = {
  title: siteMetadata.title || "Tequila Mockingbirds",
  description: siteMetadata.description,
  keywords: siteMetadata.keywords.split(",").map(k => k.trim()),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "https://tequilamockingbirds.netlify.app",
    siteName: "Tequila Mockingbirds",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Tequila Mockingbirds Mobile Bar",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tequila Mockingbirds",
      "description": siteMetadata.description || "Tequila Mockingbirds is a high-end mobile frozen tequila cocktail bar available for private parties, corporate events and festivals across the UK.",
      "url": "https://tequilamockingbirds.netlify.app",
      "telephone": "+44 7700 000000",
      "email": siteSettings.email || "hello@tequilamockingbirds.com",
      "priceRange": "££",
      "areaServed": "United Kingdom",
      "image": siteMetadata.ogImage || "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": (faqContent?.items || []).map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mobile Bar Hire",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Tequila Mockingbirds"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Event Packages",
        "itemListElement": (packagesContent?.items || []).map(pkg => {
          const offer: any = {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": pkg.title,
              "description": pkg.description
            }
          };
          const numericPriceMatch = pkg.price?.match(/\d+/);
          if (numericPriceMatch) {
            offer.price = `${numericPriceMatch[0]}.00`;
            offer.priceCurrency = "GBP";
          }
          return offer;
        })
      }
    }
  ];

  return (
    <html lang="en" className="h-full scroll-smooth antialiased text-slate-800 bg-[#FDFDFA]">
      <head>
        <meta name="theme-color" content="#0E9FB5" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-full font-sans">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
