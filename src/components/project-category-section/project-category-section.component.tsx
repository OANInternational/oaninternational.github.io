import Image from "next/image";

import styles from "./project-category-section.module.css";
import ProjectPreview, {
  IProjectPreview,
} from "../project-preview/project-preview.component";
import { MutableRefObject, ReactElement } from "react";

export interface IProjectCategory {
  id: string;
  title: string;
  icon: ReactElement;
  url: string;
  description: ReactElement;
  backgroundColor: string;
  backgroundColorLight: string;
  projects: IProjectPreview[];
}

export default function ProjectCategorySection(props: {
  projectCategory: IProjectCategory;
}) {
  const projects = props.projectCategory.projects.map((project) => (
    <ProjectPreview key={project.title} project={project} />
  ));

  const titleSectionStyle = {
    backgroundColor: props.projectCategory.backgroundColor,
  };

  const titleTextSectionStyle = {
    backgroundColor: props.projectCategory.backgroundColorLight,
  };

  return (
    <div>
      <section className={styles.projectsSection}>
        <div className={styles.projectTitleSection} style={titleSectionStyle}>
          <h2
            className={styles.projectTitleTextSection}
            style={titleTextSectionStyle}
          >
            {props.projectCategory.title}
          </h2>
        </div>

        <div className={styles.projectCategoryDescription}>
          {props.projectCategory.description}
        </div>

        <div>{projects}</div>
      </section>
    </div>
  );
}
