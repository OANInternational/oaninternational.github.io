import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { isLocale, Locale } from "@/i18n/config";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Adopta un Karité",
    description:
      "Hermánate con un karité y apoya a las mujeres productoras de karité en Nikki.",
  },
  en: {
    title: "Adopt a Shea Tree",
    description:
      "Twin with a shea tree and support the women shea producers of Nikki.",
  },
  fr: {
    title: "Adoptez un karité",
    description:
      "Adoptez un karité et soutenez les femmes productrices de karité de Nikki.",
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
  es: { title: "Adopta un karité" },
  en: { title: "Adopt a shea tree" },
  fr: { title: "Adoptez un karité" },
};

export default async function AdoptaUnKarite({
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
