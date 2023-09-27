import Image from "next/image";

import styles from "./project-preview.module.css";

export default function ProjectPreview(props: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div className={styles.previewBox}>
      <Image
        className={styles.previewBoxImage}
        src={props.imageUrl}
        alt={`${props.title} background image`}
        width={150}
        height={250}
        priority
      />

      <h1 className={styles.previewBoxTitle}>{props.title}</h1>
    </div>
  );
}
