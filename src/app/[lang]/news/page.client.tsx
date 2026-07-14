"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useParams, useSearchParams } from "next/navigation";
import styles from "./page.module.css";

import TitleSection from "@/components/title-section/title-section.component";
import ArticlePreview from "@/components/article-preview/article-preview.component";
import TitlePage from "@/components/title-page/title-page.component";
import { RADIO_ARTICLES } from "@/constants/news/radio-articles";
import { CONGRESS_ARTICLES } from "@/constants/news/congress-articles";
import { PRESS_ARTICLES } from "@/constants/news/press-articles";
import EventPreview from "@/components/event-preview/event-preview.component";
import { NEXT_EVENTS } from "@/constants/news/next-events";
import { Locale } from "@/i18n/config";
import { Article } from "@/components/article-preview/article-preview.component";

// Metadata of markdown-authored posts, passed from the server page.
export type MarkdownPostSummary = Article & { id: string };

interface NewsContentText {
  pageTitle: string;
  pageSubTitle: string;
  upcomingEvents: string;
  noEvents: string;
  blog: string;
  press: string;
  congress: string;
  radio: string;
}

const content: Record<Locale, NewsContentText> = {
  es: {
    pageTitle: "Actualidad",
    pageSubTitle:
      "Artículos, entrevistas y apariciones en los medios de OAN International",
    upcomingEvents: "Próximos Eventos",
    noEvents: "Ningún evento programado en este momento",
    blog: "Blog",
    press: "Prensa Escrita y Digital",
    congress: "Congreso 3enRed",
    radio: "Radio",
  },
  en: {
    pageTitle: "News",
    pageSubTitle:
      "Articles, interviews and media appearances of OAN International",
    upcomingEvents: "Upcoming Events",
    noEvents: "No events scheduled at this time",
    blog: "Blog",
    press: "Print and Digital Press",
    congress: "3enRed Conference",
    radio: "Radio",
  },
};

// Create a client component that uses useSearchParams
function NewsContent({
  markdownPosts,
}: {
  markdownPosts: MarkdownPostSummary[];
}) {
  const searchParams = useSearchParams();
  const { lang } = useParams<{ lang: Locale }>();
  const locale = lang;
  const t = content[locale];

  // Use the scrollToSection utility on page load or URL change
  useEffect(() => {
    const section = searchParams.get("section");
    scrollToSection(section || undefined);
  }, [searchParams]);

  const radioArticles = RADIO_ARTICLES[locale].map((article) => (
    <ArticlePreview key={article.title} article={article} locale={locale} />
  ));

  const congressArticles = CONGRESS_ARTICLES[locale].map((article) => (
    <ArticlePreview key={article.title} article={article} locale={locale} />
  ));

  const pressArticles = PRESS_ARTICLES[locale].map((article) => (
    <ArticlePreview key={article.title} article={article} locale={locale} />
  ));

  // All blog posts are markdown-authored (newest first).
  const blogArticles = markdownPosts.map((article) => (
    <ArticlePreview key={article.id} article={article} locale={locale} />
  ));

  const nextEvents = NEXT_EVENTS[locale].map((event) => (
    <EventPreview key={event.title} event={event} locale={locale} />
  ));

  return (
    <main>
      <TitlePage
        title={t.pageTitle}
        backgroundImageUrl="/oan-web-009.jpg"
        subTitle={t.pageSubTitle}
      />


        <div className={styles.newsWrapper}>
          <section id="events-upcoming" className={styles.latestEventsSection}>
            <TitleSection title={t.upcomingEvents} />

            {NEXT_EVENTS[locale].length > 0 ? (
              nextEvents
            ) : (
              <p>{t.noEvents}</p>
            )}
          </section>

          <section id="blog" className={styles.blogSection}>
            <TitleSection title={t.blog} />

            {blogArticles}
          </section>
        </div>


      {NEXT_EVENTS[locale].length === 0 && (
        <section id="blog" className={styles.blogSection}>
          <TitleSection title={t.blog} />

          {blogArticles}
        </section>
      )}

      <section id="press" className={styles.articleSection}>
        <TitleSection title={t.press} />

        {pressArticles}
      </section>

      <section id="events" className={styles.articleSection}>
        <TitleSection title={t.congress} />

        {congressArticles}
      </section>

      <section id="radio" className={styles.articleSection}>
        <TitleSection title={t.radio} />

        {radioArticles}
      </section>
    </main>
  );
}

// Main component that wraps the content with Suspense
export default function News({
  markdownPosts = [],
}: {
  markdownPosts?: MarkdownPostSummary[];
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsContent markdownPosts={markdownPosts} />
    </Suspense>
  );
}
