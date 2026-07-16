import type { Metadata } from "next";
import { isLocale, Locale } from "@/i18n/config";
import Projects from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Proyectos",
    description:
      "Descubre los proyectos de OAN International en Nikki (Benín) en salud, agua, agronomía y empoderamiento de la mujer.",
  },
  en: {
    title: "Projects",
    description:
      "Explore OAN International's projects in Nikki (Benin) across health, water, agronomy and women's empowerment.",
  },
  fr: {
    title: "Projets",
    description:
      "Découvrez les projets d'OAN International à Nikki (Bénin) en santé, eau, agronomie et autonomisation des femmes.",
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
  return <Projects />;
}
