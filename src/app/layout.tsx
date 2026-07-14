import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL } from "@/i18n/routes";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dict.metadata.title,
    template: `%s | ${dict.metadata.title}`,
  },
  keywords: ["Nikki", "Benin", "ONG", "NGO", "Nikarit", "OAN International"],
  description: dict.metadata.description,
  openGraph: {
    type: "website",
    siteName: dict.metadata.title,
    title: dict.metadata.title,
    description: dict.metadata.description,
    url: SITE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: dict.metadata.title,
    description: dict.metadata.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-RQ406VZD1P" />
    </html>
  );
}
