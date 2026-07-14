import type { Metadata } from "next";
import { isLocale, Locale } from "@/i18n/config";
import SupportUs from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Colabora",
    description:
      "Colabora con OAN International: dona, hazte voluntari@ o participa en nuestras campañas por Nikki (Benín).",
  },
  en: {
    title: "Get Involved",
    description:
      "Get involved with OAN International: donate, volunteer or take part in our campaigns for Nikki (Benin).",
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
  return <SupportUs />;
}
