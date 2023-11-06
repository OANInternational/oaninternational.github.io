"use client";

import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";

import ProjectCategorySection, {
  IProjectCategory,
} from "@/components/project-category-section/project-category-section.component";
import { PROJECT_CATEGORIES } from "@/constants/projects/categories";
import { CSSProperties } from "react";

export default function Projects() {
  const projectCategories = PROJECT_CATEGORIES.map((category) => {
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

  const projectCategorySections = PROJECT_CATEGORIES.map((p) => (
    <div id={p.id} key={p.title}>
      <ProjectCategorySection projectCategory={p} />
    </div>
  ));

  return (
    <main>
      <TitlePage title="Proyectos" backgroundImageUrl="/oan-web-017.jpg" />

      <section className={styles.projectCategoriesSection}>
        {projectCategories}
      </section>

      {projectCategorySections}
    </main>
  );
}
