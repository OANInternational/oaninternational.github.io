import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { isLocale, Locale } from "@/i18n/config";

const content: Record<Locale, { title: string }> = {
  es: { title: "Adopta un karité" },
  en: { title: "Adopt a shea tree" },
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
