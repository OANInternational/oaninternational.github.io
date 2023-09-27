import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import ProjectPreview from "@/components/project-preview/project-preview.component";

export default function Home() {
  return (
    <main>
      <section className={styles.mainSection}>
        <h1 className={styles.title}>Projects</h1>
      </section>

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
