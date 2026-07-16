import { Article } from "@/components/article-preview/article-preview.component";
import { Locale } from "@/i18n/config";
import { CONGRESS_ARTICLES_ES } from "./congress-articles.es";
import { CONGRESS_ARTICLES_EN } from "./congress-articles.en";
import { CONGRESS_ARTICLES_FR } from "./congress-articles.fr";

export const CONGRESS_ARTICLES: Record<Locale, Article[]> = {
  es: CONGRESS_ARTICLES_ES,
  en: CONGRESS_ARTICLES_EN,
  fr: CONGRESS_ARTICLES_FR,
};
