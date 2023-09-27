import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import ProjectPreview from "@/components/project-preview/project-preview.component";
import TitleSection from "@/components/title-section/title-section.component";

export default function Projects() {
  return (
    <main>
      <TitleSection title="Proyectos"></TitleSection>

      <section className={styles.secondSection}>
        <ProjectPreview title="Nikarit" imageUrl="/dummy.jpg" />

        <ProjectPreview title="Emancipación" imageUrl="/dummy.jpg" />

        <ProjectPreview title="ASEP" imageUrl="/dummy.jpg" />

        <ProjectPreview title="Residuos" imageUrl="/dummy.jpg" />

        <ProjectPreview title="Malnutrición" imageUrl="/dummy.jpg" />
      </section>
    </main>
  );
}
