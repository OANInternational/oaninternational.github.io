import type { Metadata } from "next";
import TitlePage from "@/components/title-page/title-page.component";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import { isLocale, Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Contacto",
    description:
      "Ponte en contacto con OAN International a través de nuestro formulario.",
  },
  en: {
    title: "Contact",
    description: "Get in touch with OAN International through our contact form.",
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

const content: Record<
  Locale,
  { title: string; sectionTitle: string; loading: string }
> = {
  es: {
    title: "Contacta con nosotros",
    sectionTitle: "¿Quieres contactar con nosotros?",
    loading: "Cargando…",
  },
  en: {
    title: "Contact us",
    sectionTitle: "Would you like to get in touch with us?",
    loading: "Loading…",
  },
};

export default async function Contact({
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
      <TitlePage title={t.title} backgroundImageUrl="/oan-web-001.jpg" />

      <section className={styles.mainSection}>
        <TitleSection title={t.sectionTitle} />

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSesVw6RZbW6-CHJUG90L9fmJpBq5PFAt4OFYtz_quIjLGOKSg/viewform?embedded=true"
          width="640"
          height="642"
        >
          {t.loading}
        </iframe>
      </section>
    </main>
  );
}
