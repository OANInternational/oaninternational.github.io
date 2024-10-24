"output: export";

import TitlePage from "@/components/title-page/title-page.component";
import styles from "./page.module.css";

import { BLOG_ARTICLES } from "@/constants/news/blog-articles";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    blogId: article.id,
  }));
}

export default async function BlogEntry({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const article = BLOG_ARTICLES.find((article) => article.id === blogId);
  if (!article) {
    return;
  }
  return (
    <main>
      <TitlePage
        title={article.title}
        backgroundImageUrl={article.imageUrl}
        subTitle={article.date + " - " + article.author}
      />

      <section className={styles.articleSection}>{article.content}</section>
    </main>
  );
}
