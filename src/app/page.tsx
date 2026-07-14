"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}` + window.location.search);
  }, []);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <p>
        <a href={`/${defaultLocale}`}>OAN International</a>
      </p>
    </main>
  );
}
