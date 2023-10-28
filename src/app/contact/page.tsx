import TitlePage from "@/components/title-page/title-page.component";

import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <main>
      <TitlePage
        title="Contacta con nosotros"
        backgroundImageUrl="/oan-web-001.jpg"
      />

      <section className={styles.constructionSection}>In construction</section>
    </main>
  );
}
