import Image from "next/image";

import styles from "./project-preview.module.css";

export interface IProjectPreview {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function ProjectPreview(props: { project: IProjectPreview }) {
  return (
    <article className={styles.projectSection}>
      <Image
        className={styles.projectImage}
        src={props.project.imageUrl}
        alt={`${props.project.title} image`}
        width={300}
        height={300}
        priority
      />

      <div className={styles.textWrapper}>
        <h1 className={styles.projectTitle}>{props.project.title}</h1>
        <p className={styles.projectDescription}>{props.project.description}</p>
      </div>
    </article>
  );
}
