import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dict.metadata.title,
  keywords: ["Nikki", "Benin", "ONG", "Nikarit"],
  description: dict.metadata.description,
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
