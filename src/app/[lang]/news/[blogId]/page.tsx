import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TitlePage from "@/components/title-page/title-page.component";
import styles from "./page.module.css";

import { BLOG_ARTICLES } from "@/constants/news/blog-articles";
import { isLocale, Locale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    BLOG_ARTICLES[lang].map((a) => ({ lang, blogId: a.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; blogId: string }>;
}): Promise<Metadata> {
  const { lang, blogId } = await params;
  if (!isLocale(lang)) {
    return {};
  }
  const article = BLOG_ARTICLES[lang].find((a) => a.id === blogId);
  if (!article) {
    return {};
  }
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function BlogEntry({
  params,
}: {
  params: Promise<{ lang: string; blogId: string }>;
}) {
  const { lang, blogId } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const article = BLOG_ARTICLES[locale].find((a) => a.id === blogId);
  if (!article) {
    notFound();
  }
  return (
    <main>
      <TitlePage
        title={article.title}
        backgroundImageUrl={article.imageUrl}
        subTitle={article.date + " - " + article.author}
      />

      <section className={styles.articleSection}>{article.content}</section>
    </main>
  );
}
