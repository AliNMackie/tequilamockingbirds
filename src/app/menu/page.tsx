import type { Metadata } from "next";
import MenuClient from "@/components/MenuClient";
import menuContent from "@/content/menu.json";
import siteMetadata from "@/content/site-metadata.json";

export const metadata: Metadata = {
  title: `Our Menu | ${siteMetadata.title || "Tequila Mockingbirds"}`,
  description:
    menuContent.subtitle ||
    "Explore our signature frozen margarita blends, made with 100% blue agave tequila, fresh cold-pressed citrus, and natural ingredients.",
  openGraph: {
    title: `Our Menu | ${siteMetadata.title || "Tequila Mockingbirds"}`,
    description:
      menuContent.subtitle ||
      "Explore our signature frozen margarita blends, made with 100% blue agave tequila, fresh cold-pressed citrus, and natural ingredients.",
    url: "https://tequilamockingbirds.netlify.app/menu",
    siteName: "Tequila Mockingbirds",
    images: [
      {
        url: menuContent.images?.[0]?.src || siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Tequila Mockingbirds Frozen Cocktails Menu",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Menu | ${siteMetadata.title || "Tequila Mockingbirds"}`,
    description: menuContent.subtitle,
    images: [menuContent.images?.[0]?.src || siteMetadata.ogImage],
  },
};

export default function MenuPage() {
  return (
    <main>
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
      <MenuClient />
    </main>
  );
}
