import styles from "./title-section.module.css";

export default function TitleSection(props: { title: string }) {
  return <h2 className={styles.sectionTitle}>{props.title}</h2>;
}
