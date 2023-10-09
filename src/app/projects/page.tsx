import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import ProjectPreview from "@/components/project-preview/project-preview.component";
import TitlePage from "@/components/title-page/title-page.component";

export default function Projects() {
  return (
    <main>
      <TitlePage title="Proyectos" backgroundImageUrl="/oan-web-017.jpg" />

      <section className={styles.secondSection}>
        <ProjectPreview title="Nikarit" imageUrl="/oan-web-014.jpg" />

        <ProjectPreview title="Emancipación" imageUrl="/oan-web-019.jpg" />

        <ProjectPreview title="ASEP" imageUrl="/oan-web-020.jpg" />

        <ProjectPreview title="Residuos" imageUrl="/oan-web-021.jpg" />

        <ProjectPreview title="Malnutrición" imageUrl="/oan-web-016.jpg" />
      </section>
    </main>
  );
}
