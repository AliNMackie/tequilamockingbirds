import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tequila Mockingbirds | High-End Mobile Frozen Tequila Bar",
  description: "Frozen Tequila Cocktails. Anywhere You Celebrate. A premium mobile bar for private parties, corporate events, and festivals in the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased text-slate-800 bg-[#FDFDFA]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-full font-sans">
        {children}
      </body>
    </html>
  );
}
