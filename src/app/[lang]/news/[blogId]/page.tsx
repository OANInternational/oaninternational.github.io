import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import TitlePage from "@/components/title-page/title-page.component";
import styles from "./page.module.css";

import { BLOG_ARTICLES } from "@/constants/news/blog-articles";
import { isLocale, Locale, locales } from "@/i18n/config";
import {
  getMarkdownPost,
  getMarkdownPostParams,
} from "@/lib/blog-posts";

export function generateStaticParams() {
  const jsxParams = locales.flatMap((lang) =>
    BLOG_ARTICLES[lang].map((a) => ({ lang, blogId: a.id }))
  );
  return [...getMarkdownPostParams(locales), ...jsxParams];
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
  const md = getMarkdownPost(lang, blogId);
  if (md) {
    return { title: md.title, description: md.description };
  }
  const article = BLOG_ARTICLES[lang].find((a) => a.id === blogId);
  return article
    ? { title: article.title, description: article.description }
    : {};
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

  // Markdown-authored posts take precedence; fall back to the legacy in-code
  // (JSX) articles.
  const md = getMarkdownPost(locale, blogId);
  if (md) {
    return (
      <main>
        <TitlePage
          title={md.title}
          backgroundImageUrl={md.imageUrl}
          subTitle={md.date + " - " + md.author}
        />
        <section className={`${styles.articleSection} ${styles.markdownBody}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md.body}</ReactMarkdown>
        </section>
      </main>
    );
  }

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
