import Image from "next/image";

import styles from "./card.module.css";

export default function Card(props: {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardBoxIcon}>{props.icon}</div>

      <h1 className={styles.cardBoxNumber}>{props.title}</h1>
      <h3 className={styles.cardBoxTitle}>{props.subtitle}</h3>
      <h2 className={styles.cardBoxSubTitle}>{props.description}</h2>
    </div>
  );
}
