import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Locale } from "@/i18n/config";

// Markdown-authored blog posts live in content/blog/<locale>/<slug>.md,
// e.g. content/blog/es/welcome.md + content/blog/en/welcome.md.
// Front matter: title, date (ISO yyyy-mm-dd), author, description, image.
// This module is server-only (uses fs) — import it only from Server
// Components / generateStaticParams / generateMetadata.

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function localeDir(locale: Locale): string {
  return path.join(BLOG_DIR, locale);
}

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

// gray-matter/YAML parses an unquoted `date: 2026-03-30` into a Date object,
// so normalize to a plain ISO `yyyy-mm-dd` string for reliable sorting.
function toISODate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  const s = String(value ?? "").trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    return s.slice(0, 10);
  }
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

function formatDate(iso: string, locale: Locale): string {
  if (!iso) {
    return "";
  }
  // Parse as UTC noon to avoid timezone off-by-one when formatting.
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) {
    return iso;
  }
  return d.toLocaleDateString(localeTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function readPost(locale: Locale, slug: string): MarkdownPost | null {
  const file = path.join(localeDir(locale), `${slug}.md`);
  if (!fs.existsSync(file)) {
    return null;
  }
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const iso = toISODate(data.date);
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
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -".md".length));
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

// Unique post slugs across all locales (for the sitemap).
export function getAllPostSlugs(locales: readonly Locale[]): string[] {
  const set = new Set<string>();
  for (const locale of locales) {
    for (const slug of slugsForLocale(locale)) {
      set.add(slug);
    }
  }
  return Array.from(set);
}
