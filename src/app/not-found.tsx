"use client";

import { useEffect } from "react";
import { defaultLocale, locales } from "@/i18n/config";

// Static export emits this as /404.html, which GitHub Pages serves for any
// unmatched path. Legacy links (e.g. Instagram posts) point at un-prefixed
// URLs like /about-us or /news/<slug> that used to exist before locale
// routing. Here we redirect those to the default locale (/es/...), preserving
// the path, query and hash. Paths already under /es or /en (a genuine 404) or
// Next asset paths are left alone, so there's no redirect loop.
export default function NotFound() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;
    const segment = pathname.split("/")[1] ?? "";
    const isLocalePrefixed = (locales as readonly string[]).includes(segment);
    const isAsset = segment === "_next" || pathname.includes(".");

    if (segment && !isLocalePrefixed && !isAsset) {
      window.location.replace(`/${defaultLocale}${pathname}${search}${hash}`);
    }
  }, []);

  return (
    <main style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>
        <a href={`/${defaultLocale}`}>OAN International</a>
      </p>
    </main>
  );
}
