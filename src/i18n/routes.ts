// Canonical production origin — used for metadata, sitemap, robots, canonical
// and Open Graph URLs.
export const SITE_URL = "https://www.oaninternational.org";

// Locale-agnostic static routes (without the /[lang] prefix, without leading
// slash for the home route). Kept in one place so the sitemap and any future
// route-aware tooling stay in sync.
export const STATIC_ROUTES = [
  "",
  "about-us",
  "10-years",
  "projects",
  "support-us",
  "support-us/campaigns/adopta-un-karite",
  "support-us/campaigns/grano-de-arena",
  "support-us/campaigns/son-yara",
  "news",
  "contact",
  "become-partner",
  "legal",
  "cookies",
] as const;
