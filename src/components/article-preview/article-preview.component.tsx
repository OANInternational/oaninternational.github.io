import Image from "next/image";

import styles from "./article-preview.module.css";

export interface Article {
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  link?: string;
}

export default function ArticlePreview(props: Article) {
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

        <p className={styles.articleDate}>{props.date}</p>
      </div>
    </article>
  );
}
