import { Article } from "@/components/article-preview/article-preview.component";
import { Locale } from "@/i18n/config";
import { PRESS_ARTICLES_ES } from "./press-articles.es";
import { PRESS_ARTICLES_EN } from "./press-articles.en";
import { PRESS_ARTICLES_FR } from "./press-articles.fr";

export const PRESS_ARTICLES: Record<Locale, Article[]> = {
  es: PRESS_ARTICLES_ES,
  en: PRESS_ARTICLES_EN,
  fr: PRESS_ARTICLES_FR,
};
