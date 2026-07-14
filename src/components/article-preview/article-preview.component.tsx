import Image from "next/image";
import type { ReactElement } from "react";

import styles from "./article-preview.module.css";
import Link from "next/link";
import { Locale } from "@/i18n/config";

export interface Article {
  title: string;
  imageUrl: string;
  description?: string;
  date: string;
  link: string;
}

export interface BlogArticle extends Article {
  id: string;
  content: ReactElement;
  author: string;
}

export default function ArticlePreview(props: {
  article: Article;
  locale: Locale;
}) {
  const href = props.article.link.startsWith("/")
    ? `/${props.locale}${props.article.link}`
    : props.article.link;

  return (
    <article className={styles.articleSection}>
      <Link href={href}>
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
        <Link href={href}>
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
