import { Article } from "@/components/article-preview/article-preview.component";
import { Locale } from "@/i18n/config";
import { CONGRESS_ARTICLES_ES } from "./congress-articles.es";
import { CONGRESS_ARTICLES_EN } from "./congress-articles.en";

export const CONGRESS_ARTICLES: Record<Locale, Article[]> = {
  es: CONGRESS_ARTICLES_ES,
  en: CONGRESS_ARTICLES_EN,
};
