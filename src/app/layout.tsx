import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Tequila Mockingbirds | Premium Mobile Frozen Cocktail Bar UK",
  description: "Tequila Mockingbirds is a high-end mobile frozen tequila cocktail bar available for private parties, corporate events and festivals across the UK.",
  keywords: ["mobile frozen cocktail bar", "frozen margarita bar hire", "mobile bar hire UK", "tequila bar corporate events", "cocktail bar festivals UK"],
  openGraph: {
    title: "Tequila Mockingbirds | Premium Mobile Frozen Cocktail Bar UK",
    description: "High-end mobile frozen tequila cocktail bar for private parties, corporate events and festivals across the UK.",
    url: "https://tequilamockingbirds.netlify.app",
    siteName: "Tequila Mockingbirds",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
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
    title: "Tequila Mockingbirds | Premium Mobile Frozen Cocktail Bar UK",
    description: "High-end mobile frozen tequila cocktail bar for events across the UK.",
    images: ["https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"],
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
      "description": "Tequila Mockingbirds is a high-end mobile frozen tequila cocktail bar available for private parties, corporate events and festivals across the UK.",
      "url": "https://tequilamockingbirds.netlify.app",
      "telephone": "+44 7700 000000",
      "email": "hello@tequilamockingbirds.co.uk",
      "priceRange": "££",
      "areaServed": "United Kingdom",
      "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far do you travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Based in the UK, we cover events nationwide. Travel within a 50-mile radius of our base is included; beyond that, a small mileage fee applies."
          }
        },
        {
          "@type": "Question",
          "name": "Do you need access to power and water?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We need access to a standard 13-amp plug socket to run our high-end frozen slush machines. We bring our own water supply for the machines if a mains connection isn't available nearby."
          }
        },
        {
          "@type": "Question",
          "name": "Are non-alcoholic options available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We always offer premium frozen mocktails alongside our signature alcoholic serves to ensure all guests are catered for."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have a minimum spend or minimum guest count?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our packages start for events with 30+ guests. For smaller intimate gatherings, please enquire for a bespoke quote."
          }
        },
        {
          "@type": "Question",
          "name": "What exactly is included in the service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Everything you need: the mobile bar, machines, premium spirits & ingredients, glassware (or premium eco-cups), garnishes, and professional bartenders."
          }
        }
      ]
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
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private Parties",
              "description": "Perfect for birthdays, engagements, and garden parties. Elevate your celebration with a touch of beach club luxury."
            },
            "price": "450.00",
            "priceCurrency": "GBP"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate & Brand Events",
              "description": "Impress clients and treat your team. High-volume, high-quality service tailored to your brand aesthetic."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Festivals & Pop-ups",
              "description": "The ultimate crowd-pleaser. Fast-paced service for high footfall environments without compromising on quality."
            }
          }
        ]
      }
    }
  ];

  return (
    <html lang="en" className="h-full scroll-smooth antialiased text-slate-800 bg-[#FDFDFA]">
      <head>
        <meta name="theme-color" content="#0B7D8E" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=180&h=180" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self';" />
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
