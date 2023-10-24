import Image from "next/image";

import styles from "./person-preview.module.css";

export interface Person {
  name: string;
  title: string;
  imageUrl: string;
}

export default function PersonPreview(props: Person) {
  return (
    <div className={styles.personPreview}>
      <Image
        className={styles.personImage}
        src={props.imageUrl}
        alt={`${props.title} image`}
        width={250}
        height={250}
        priority
      />

      <div className={styles.textWrapper}>
        <h3 className={styles.personName}>{props.name}</h3>
        <p className={styles.personTitle}>{props.title}</p>
      </div>
    </div>
  );
}
