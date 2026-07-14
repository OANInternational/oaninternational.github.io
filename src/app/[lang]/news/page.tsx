import type { Metadata } from "next";
import { isLocale, Locale } from "@/i18n/config";
import News from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Actualidad",
    description:
      "Artículos, entrevistas y apariciones en los medios de OAN International.",
  },
  en: {
    title: "News",
    description:
      "Articles, interviews and media appearances of OAN International.",
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
  return <News />;
}
