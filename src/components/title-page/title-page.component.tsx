import Image from "next/image";
import styles from "./title-page.module.css";

export default function TitlePage(props: {
  title: string;
  subTitle?: string;
  backgroundImageUrl: string;
  quote?: {
    text: string;
    author: string;
  };
}) {
  const quoteObject = props.quote ? (
    <div className={styles.quote}>
      <p>{props.quote.text}</p>
      <p>-{props.quote.author}-</p>
    </div>
  ) : undefined;

  const subTitleObject = props.subTitle ? (
    <p className={styles.subTitle}>{props.subTitle}</p>
  ) : undefined;

  return (
    <section className={styles.mainSection}>
      <div className={styles.text}>
        <h1 className={styles.title}>{props.title}</h1>

        {subTitleObject}

        {quoteObject}
      </div>

      <Image
        className={styles.background}
        src={props.backgroundImageUrl}
        width={1080}
        height={150}
        quality={100}
        alt="Background header image"
      />
    </section>
  );
}
