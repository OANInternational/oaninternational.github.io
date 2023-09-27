import styles from "./title-section.module.css";

export default function TitleSection(props: { title: string }) {
  return (
    <section className={styles.mainSection}>
      <h1 className={styles.title}>{props.title}</h1>
    </section>
  );
}
