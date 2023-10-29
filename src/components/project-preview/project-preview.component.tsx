import Image from "next/image";

import styles from "./project-preview.module.css";
import { ReactElement } from "react";

export interface IProjectPreview {
  title: string;
  summary: ReactElement;
  description: ReactElement;
  imageUrl: string;
  url: string;
}

export default function ProjectPreview(props: { project: IProjectPreview }) {
  return (
    <div className={styles.projectSection}>
      <Image
        className={styles.projectImage}
        src={props.project.imageUrl}
        alt=""
        width={300}
        height={300}
      />

      <div className={styles.textWrapper}>
        <h1 className={styles.projectTitle}>{props.project.title}</h1>
        <div className={styles.projectDescription}>{props.project.summary}</div>
      </div>
    </div>
  );
}
