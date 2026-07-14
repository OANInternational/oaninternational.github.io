import { Article } from "@/components/article-preview/article-preview.component";
import { Locale } from "@/i18n/config";
import { RADIO_ARTICLES_ES } from "./radio-articles.es";
import { RADIO_ARTICLES_EN } from "./radio-articles.en";

export const RADIO_ARTICLES: Record<Locale, Article[]> = {
  es: RADIO_ARTICLES_ES,
  en: RADIO_ARTICLES_EN,
};
