import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, Locale } from "@/i18n/config";
import { getMarkdownPostMetas } from "@/lib/blog-posts";
import News from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Actualidad",
    description:
      "Artículos, entrevistas y apariciones en los medios de OAN International.",
  },
  en: {
    title: "News",
    description:
      "Articles, interviews and media appearances of OAN International.",
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

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  // Read markdown-authored posts at build time (server-only) and hand their
  // metadata to the client list. Full bodies are only needed on the detail page.
  const markdownPosts = getMarkdownPostMetas(lang).map((p) => ({
    id: p.id,
    title: p.title,
    date: p.date,
    description: p.description,
    imageUrl: p.imageUrl,
    link: p.link,
  }));
  return <News markdownPosts={markdownPosts} />;
}
