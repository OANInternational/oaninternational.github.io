import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Locale } from "@/i18n/config";

// Markdown-authored blog posts live in content/blog as
// `<slug>.<locale>.md`, e.g. content/blog/welcome.es.md + welcome.en.md.
// Front matter: title, date (ISO yyyy-mm-dd), author, description, image.
// This module is server-only (uses fs) — import it only from Server
// Components / generateStaticParams / generateMetadata.

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface MarkdownPostMeta {
  id: string; // slug
  title: string;
  date: string; // localized display string
  isoDate: string; // raw ISO for sorting
  author: string;
  description: string;
  imageUrl: string;
  link: string; // locale-agnostic, e.g. /news/<slug>
}

export interface MarkdownPost extends MarkdownPostMeta {
  body: string; // raw markdown
}

function localeTag(locale: Locale): string {
  return locale === "es" ? "es-ES" : "en-US";
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    return iso;
  }
  return d.toLocaleDateString(localeTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readPost(locale: Locale, slug: string): MarkdownPost | null {
  const file = path.join(BLOG_DIR, `${slug}.${locale}.md`);
  if (!fs.existsSync(file)) {
    return null;
  }
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const iso = String(data.date ?? "");
  return {
    id: slug,
    title: String(data.title ?? slug),
    isoDate: iso,
    date: iso ? formatDate(iso, locale) : "",
    author: String(data.author ?? "OAN International"),
    description: String(data.description ?? ""),
    imageUrl: String(data.image ?? ""),
    link: `/news/${slug}`,
    body: content,
  };
}

function slugsForLocale(locale: Locale): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  const suffix = `.${locale}.md`;
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(suffix))
    .map((f) => f.slice(0, -suffix.length));
}

// Post metadata for a locale, newest first. Used by the news list.
// (Returns MarkdownPost objects; the extra `body` is simply unused by callers.)
export function getMarkdownPostMetas(locale: Locale): MarkdownPostMeta[] {
  return slugsForLocale(locale)
    .map((slug) => readPost(locale, slug))
    .filter((p): p is MarkdownPost => p !== null)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}

// Full post (with markdown body) for the detail page.
export function getMarkdownPost(
  locale: Locale,
  slug: string
): MarkdownPost | null {
  return readPost(locale, slug);
}

// { lang, blogId } params for every markdown post, for generateStaticParams.
export function getMarkdownPostParams(
  locales: readonly Locale[]
): { lang: Locale; blogId: string }[] {
  return locales.flatMap((lang) =>
    slugsForLocale(lang).map((slug) => ({ lang, blogId: slug }))
  );
}
