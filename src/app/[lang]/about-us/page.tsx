import type { Metadata } from "next";
import { isLocale, Locale } from "@/i18n/config";
import AboutUs from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Sobre Nosotros",
    description:
      "Conoce la historia, los valores y el equipo de OAN International, una ONGD que trabaja en Nikki (Benín).",
  },
  en: {
    title: "About Us",
    description:
      "Discover the history, values and team of OAN International, an NGO working in Nikki (Benin).",
  },
  fr: {
    title: "À propos",
    description:
      "Découvrez l'histoire, les valeurs et l'équipe d'OAN International, une ONG qui travaille à Nikki (Bénin).",
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
  return <AboutUs />;
}
