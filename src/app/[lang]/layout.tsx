import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";
import HtmlLangSetter from "@/components/html-lang-setter/html-lang-setter.component";
import { isLocale, locales, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

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
    title: dict.metadata.title,
    keywords: ["Nikki", "Benin", "ONG", "Nikarit"],
    description: dict.metadata.description,
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
