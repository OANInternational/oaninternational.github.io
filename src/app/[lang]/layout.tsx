import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";
import HtmlLangSetter from "@/components/html-lang-setter/html-lang-setter.component";
import { isLocale, locales, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL } from "@/i18n/routes";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const OG_LOCALE: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }
  const dict = getDictionary(lang);
  return {
    // Override the root template for this locale subtree; pages set only their
    // own title and get "%s | OAN International".
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.title}`,
    },
    keywords: ["Nikki", "Benin", "ONG", "NGO", "Nikarit", "OAN International"],
    description: dict.metadata.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}`])
      ),
    },
    openGraph: {
      locale: OG_LOCALE[lang],
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `${SITE_URL}/${lang}`,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;

  return (
    <>
      <HtmlLangSetter locale={locale} />
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
