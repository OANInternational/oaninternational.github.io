import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL, STATIC_ROUTES } from "@/i18n/routes";
import { getAllPostSlugs } from "@/lib/blog-posts";

// Static export requires this so the sitemap is emitted as a static file.
export const dynamic = "force-static";

function url(locale: string, path: string): string {
  return path ? `${SITE_URL}/${locale}/${path}` : `${SITE_URL}/${locale}`;
}

// Build the hreflang alternates map for a given locale-agnostic path.
function languagesFor(path: string): Record<string, string> {
  return Object.fromEntries(locales.map((l) => [l, url(l, path)]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: string[] = [
    ...STATIC_ROUTES,
    ...getAllPostSlugs(locales).map((slug) => `news/${slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const languages = languagesFor(path);
    for (const locale of locales) {
      entries.push({
        url: url(locale, path),
        alternates: { languages },
      });
    }
  }
  return entries;
}
