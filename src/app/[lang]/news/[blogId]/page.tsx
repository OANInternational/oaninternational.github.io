import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import TitlePage from "@/components/title-page/title-page.component";
import styles from "./page.module.css";

import { isLocale, locales } from "@/i18n/config";
import { getPost, getPostParams } from "@/lib/blog-posts";

export function generateStaticParams() {
  return getPostParams(locales);
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
  const post = getPost(blogId);
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
  const post = getPost(blogId);
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
      {/* Posts are written in a single language and shown under every locale,
          so the article itself is marked with the post's own language. */}
      <section
        lang={post.language}
        className={`${styles.articleSection} ${styles.markdownBody}`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </section>
    </main>
  );
}
