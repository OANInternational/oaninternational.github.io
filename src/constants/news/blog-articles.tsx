import { BlogArticle } from "@/components/article-preview/article-preview.component";
import { BLOG_ARTICLES_ES } from "./blog-articles.es";
import { BLOG_ARTICLES_EN } from "./blog-articles.en";
import { Locale } from "@/i18n/config";

export const BLOG_ARTICLES: Record<Locale, BlogArticle[]> = {
  es: BLOG_ARTICLES_ES,
  en: BLOG_ARTICLES_EN,
};
