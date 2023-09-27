import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import ArticlePreview from "@/components/article-preview/article-preview.component";

export default function News() {
  return (
    <main>
      <TitleSection title="Actualidad"></TitleSection>

      <section className={styles.articleSection}>
        <ArticlePreview
          imageUrl="/dummy.jpg"
          title="OAN en la radio"
          description="Lorem impsum Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum"
        />
      </section>
    </main>
  );
}
