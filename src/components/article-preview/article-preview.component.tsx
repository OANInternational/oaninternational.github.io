import Image from "next/image";

import styles from "./article-preview.module.css";

export default function ArticlePreview(props: {
  title: string;
  imageUrl: string;
  description: string;
}) {
  return (
    <article className={styles.articleSection}>
      <Image
        className={styles.articleImage}
        src={props.imageUrl}
        alt={`${props.title} image`}
        width={300}
        height={300}
        priority
      />

      <div className={styles.textWrapper}>
        <h1 className={styles.articleTitle}>{props.title}</h1>
        <p className={styles.articleDescription}>{props.description}</p>
      </div>
    </article>
  );
}
