import type { Metadata } from "next";
import { isLocale, Locale } from "@/i18n/config";
import TenYears from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "10 años",
    description:
      "10 años de OAN International: nuestros logros en salud, agua, empoderamiento de la mujer y desarrollo en Nikki (Benín).",
  },
  en: {
    title: "10 Years",
    description:
      "10 years of OAN International: our achievements in health, water, women's empowerment and development in Nikki (Benin).",
  },
  fr: {
    title: "10 ans",
    description:
      "10 ans d'OAN International : nos réalisations en santé, eau, autonomisation des femmes et développement à Nikki (Bénin).",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return meta[lang];
}

export default function Page() {
  return <TenYears />;
}
