import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { defaultLocale, isLocale, Locale } from "@/i18n/config";

// Blog posts are language-agnostic: each post is a single markdown file at
// content/blog/<slug>.md, written in ONE language, and shown on the news list
// and detail page under every site locale. Front matter: title, date
// (yyyy-mm-dd), author, description, image, and an optional `language` (the
// language the post is written in; defaults to the site default, Spanish).
// Server-only (uses fs) — import from Server Components / generateStaticParams.

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface Post {
  id: string; // slug
  title: string;
  date: string; // display string, formatted in the post's own language
  isoDate: string; // raw ISO, for sorting
  author: string;
  description: string;
  imageUrl: string;
  link: string; // locale-agnostic, e.g. /news/<slug>
  language: Locale; // the language the post is written in
  body: string; // raw markdown
}

export type PostMeta = Omit<Post, "body">;

function localeTag(locale: Locale): string {
  if (locale === "es") return "es-ES";
  if (locale === "fr") return "fr-FR";
  return "en-US";
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

function formatDate(iso: string, language: Locale): string {
  if (!iso) return "";
  // Parse as UTC noon to avoid timezone off-by-one when formatting.
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(localeTag(language), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function readPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) {
    return null;
  }
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const iso = toISODate(data.date);
  const langValue = String(data.language ?? "");
  const language: Locale = isLocale(langValue) ? langValue : defaultLocale;
  return {
    id: slug,
    title: String(data.title ?? slug),
    isoDate: iso,
    date: formatDate(iso, language),
    author: String(data.author ?? "OAN International"),
    description: String(data.description ?? ""),
    imageUrl: String(data.image ?? ""),
    link: `/news/${slug}`,
    language,
    body: content,
  };
}

function allSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -".md".length));
}

// All post metadata, newest first. Used by the news list.
export function getPostMetas(): PostMeta[] {
  return allSlugs()
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}

// Full post (with markdown body) for the detail page.
export function getPost(slug: string): Post | null {
  return readPost(slug);
}

// All post slugs (for the sitemap).
export function getPostSlugs(): string[] {
  return allSlugs();
}

// { lang, blogId } params — every post is rendered under every locale.
export function getPostParams(
  locales: readonly Locale[]
): { lang: Locale; blogId: string }[] {
  const slugs = allSlugs();
  return locales.flatMap((lang) =>
    slugs.map((slug) => ({ lang, blogId: slug }))
  );
}
