"use client";

import { useEffect } from "react";
import { Locale } from "@/i18n/config";

export default function HtmlLangSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
