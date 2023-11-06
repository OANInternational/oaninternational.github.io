import Image from "next/image";

import styles from "./article-preview.module.css";
import Link from "next/link";

export interface Article {
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  link: string;
}

export interface BlogArticle extends Article {
  id: string;
  content: JSX.Element;
  author: string;
}

export default function ArticlePreview(props: { article: Article }) {
  return (
    <article className={styles.articleSection}>
      <Link href={props.article.link}>
        <Image
          className={styles.articleImage}
          src={props.article.imageUrl}
          alt={`${props.article.title} image`}
          width={300}
          height={300}
          priority
        />
      </Link>

      <div className={styles.textWrapper}>
        <Link href={props.article.link}>
          <h1 className={styles.articleTitle}>{props.article.title}</h1>
        </Link>

        {props.article.description ? (
          <p className={styles.articleDescription}>
            {props.article.description}
          </p>
        ) : undefined}

        <p className={styles.articleDate}>{props.article.date}</p>
      </div>
    </article>
  );
}
