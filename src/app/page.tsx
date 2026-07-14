"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}` + window.location.search);
  }, []);

  return (
    <>
      {/* Crawlers / no-JS clients: 0s meta refresh (React 19 hoists this to
          <head>). JS clients are redirected instantly by the effect above. */}
      <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
      <link rel="canonical" href={`/${defaultLocale}`} />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <p>
          <a href={`/${defaultLocale}`}>OAN International</a>
        </p>
      </main>
    </>
  );
}
