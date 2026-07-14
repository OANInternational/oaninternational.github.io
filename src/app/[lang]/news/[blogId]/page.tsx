import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import TitlePage from "@/components/title-page/title-page.component";
import styles from "./page.module.css";

import { isLocale, Locale, locales } from "@/i18n/config";
import { getMarkdownPost, getMarkdownPostParams } from "@/lib/blog-posts";

export function generateStaticParams() {
  return getMarkdownPostParams(locales);
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
  const post = getMarkdownPost(lang, blogId);
  return post ? { title: post.title, description: post.description } : {};
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
  const post = getMarkdownPost(locale, blogId);
  if (!post) {
    notFound();
  }

  return (
    <main>
      <TitlePage
        title={post.title}
        backgroundImageUrl={post.imageUrl}
        subTitle={post.date + " - " + post.author}
      />
      <section className={`${styles.articleSection} ${styles.markdownBody}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </section>
    </main>
  );
}
