"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

import TitleSection from "@/components/title-section/title-section.component";
import ArticlePreview, {
  Article,
} from "@/components/article-preview/article-preview.component";
import TitlePage from "@/components/title-page/title-page.component";
import { RADIO_ARTICLES } from "@/constants/news/radio-articles";
import { CONGRESS_ARTICLES } from "@/constants/news/congress-articles";
import { PRESS_ARTICLES } from "@/constants/news/press-articles";
import { BLOG_ARTICLES } from "@/constants/news/blog-articles";
import EventPreview from "@/components/event-preview/event-preview.component";
import { NEXT_EVENTS } from "@/constants/news/next-events";

// Create a client component that uses useSearchParams
function NewsContent() {
  const searchParams = useSearchParams();

  // Use the scrollToSection utility on page load or URL change
  useEffect(() => {
    const section = searchParams.get("section");
    scrollToSection(section || undefined);
  }, [searchParams]);

  const radioArticles = RADIO_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
  ));

  const congressArticles = CONGRESS_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
  ));

  const pressArticles = PRESS_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
  ));

  const blogArticles = BLOG_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
  ));

  const nextEvents = NEXT_EVENTS.map((event) => (
    <EventPreview key={event.title} event={event} />
  ));

  return (
    <main>
      <TitlePage
        title="Actualidad"
        backgroundImageUrl="/oan-web-009.jpg"
        subTitle="Artículos, entrevistas y apariciones en los medios de OAN International"
      />

      {NEXT_EVENTS.length > 0 && (
        <div className={styles.newsWrapper}>
          <section id="blog" className={styles.latestEventsSection}>
            <TitleSection title="Próximos Eventos" />

            {nextEvents}
          </section>

          <section id="blog" className={styles.blogSection}>
            <TitleSection title="Blog" />

            {blogArticles}
          </section>
        </div>
      )}

      {NEXT_EVENTS.length === 0 && (
        <section id="blog" className={styles.blogSection}>
          <TitleSection title="Blog" />

          {blogArticles}
        </section>
      )}

      <section id="press" className={styles.articleSection}>
        <TitleSection title="Prensa Escrita y Digital" />

        {pressArticles}
      </section>

      <section id="events" className={styles.articleSection}>
        <TitleSection title="Congreso 3enRed" />

        {congressArticles}
      </section>

      <section id="radio" className={styles.articleSection}>
        <TitleSection title="Radio" />

        {radioArticles}
      </section>
    </main>
  );
}

// Main component that wraps the content with Suspense
export default function News() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsContent />
    </Suspense>
  );
}
