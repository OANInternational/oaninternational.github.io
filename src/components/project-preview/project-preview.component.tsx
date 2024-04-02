import Image from "next/image";

import styles from "./project-preview.module.css";
import { ReactElement } from "react";

export interface IProjectPreview {
  title: string;
  summary: ReactElement;
  description?: ReactElement;
  imageUrl: string;
  videoUrl?: string;
  url: string;
}

export default function ProjectPreview(props: { project: IProjectPreview }) {
  return (
    <div className={styles.projectSection}>
      {props.project.videoUrl && (
        <iframe
          width="300"
          height="300"
          src={props.project.videoUrl}
          title={props.project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}

      {!props.project.videoUrl && (
        <Image
          className={styles.projectImage}
          src={props.project.imageUrl}
          alt=""
          width={300}
          height={300}
        />
      )}

      <div className={styles.textWrapper}>
        <h1 className={styles.projectTitle}>{props.project.title}</h1>
        <div className={styles.projectDescription}>{props.project.summary}</div>
        {props.project.url && (
          <a
            className={styles.fileDownloadLink}
            href={props.project.url}
            target="_blank"
          >
            Mas información sobre el proyecto
          </a>
        )}
      </div>
    </div>
  );
}
