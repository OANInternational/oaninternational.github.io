import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { isLocale, Locale } from "@/i18n/config";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Grano de Arena",
    description:
      "Campaña Grano de Arena de OAN International para apoyar el desarrollo en Nikki.",
  },
  en: {
    title: "Grano de Arena",
    description:
      "OAN International's Grano de Arena campaign supporting development in Nikki.",
  },
  fr: {
    title: "Grano de Arena",
    description:
      "Campagne Grano de Arena d'OAN International pour soutenir le développement à Nikki.",
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

const content: Record<Locale, { title: string }> = {
  es: { title: "Grano de arena" },
  en: { title: "Grano de arena" },
  fr: { title: "Grano de arena" },
};

export default async function GranoDeArena({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const t = content[locale];

  return (
    <main>
      <section className={styles.mainSection}>
        <h2>{t.title}</h2>
      </section>
    </main>
  );
}
