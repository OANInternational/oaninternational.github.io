"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";
import { useParams, useSearchParams } from "next/navigation";

import ProjectCategorySection from "@/components/project-category-section/project-category-section.component";
import { PROJECT_CATEGORIES } from "@/constants/projects/categories";
import { CSSProperties } from "react";
import { Locale } from "@/i18n/config";

const content: Record<Locale, { pageTitle: string }> = {
  es: {
    pageTitle: "Proyectos",
  },
  en: {
    pageTitle: "Projects",
  },
};

// Create a client component that uses useSearchParams
function ProjectsContent() {
  const searchParams = useSearchParams();
  const { lang } = useParams<{ lang: Locale }>();
  const locale = lang;
  const t = content[locale];

  // Use the scrollToSection utility on page load or URL change
  useEffect(() => {
    const section = searchParams.get("section");
    scrollToSection(section || undefined);
  }, [searchParams]);

  const projectCategories = PROJECT_CATEGORIES[locale].map((category) => {
    const categoryStyle: CSSProperties = {
      backgroundColor: category.backgroundColor,
      color: category.backgroundColorLight,
    };
    return (
      <div
        key={category.title}
        style={categoryStyle}
        className={styles.projectCategoryBox}
        onClick={() => {
          const element = document.getElementById(category.id);
          element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        {category.icon}
        <h2 className={styles.projectCategoryName}>{category.title}</h2>
      </div>
    );
  });

  const projectCategorySections = PROJECT_CATEGORIES[locale].map((p) => (
    <div id={p.id} key={p.title}>
      <ProjectCategorySection projectCategory={p} locale={locale} />
    </div>
  ));

  return (
    <main>
      <TitlePage title={t.pageTitle} backgroundImageUrl="/oan-web-017.jpg" />

      <section className={styles.projectCategoriesSection}>
        {projectCategories}
      </section>

      {projectCategorySections}
    </main>
  );
}

// Main component that wraps the content with Suspense
export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
