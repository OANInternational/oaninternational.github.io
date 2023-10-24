import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import ProjectPreview, {
  IProjectPreview,
} from "@/components/project-preview/project-preview.component";
import TitlePage from "@/components/title-page/title-page.component";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { RiWaterFlashLine } from "react-icons/ri";
import { CSSProperties, ReactElement } from "react";
import { IconType } from "react-icons";

interface ProjectCategory {
  name: string;
  icon: ReactElement;
  url: string;
  style: CSSProperties;
}

export default function Projects() {
  const PROJECT_CATEGORIES: ProjectCategory[] = [
    {
      name: "Agricultura",
      icon: <TbPlant size={100} />,
      url: "/proyectos/agricultura",
      style: {
        backgroundColor: "var(--agriculture-color)",
        color: "var(--agriculture-color-light)",
      },
    },
    {
      name: "Salud",
      icon: <TbHealthRecognition size={100} />,
      url: "/proyectos/salud",
      style: {
        backgroundColor: "var(--health-color)",
        color: "var(--health-color-light)",
      },
    },
    {
      name: "Políticas Sociales",
      icon: <PiHandshakeLight size={100} />,
      url: "/proyectos/politicassociales",
      style: {
        backgroundColor: "var(--social-color)",
        color: "var(--social-color-light)",
      },
    },
    {
      name: "Energía, agua e infraestructura",
      icon: <RiWaterFlashLine size={100} />,
      url: "/proyectos/energia",
      style: {
        backgroundColor: "var(--energy-color)",
        color: "var(--energy-color-light)",
      },
    },
  ];

  const PROJECTS: IProjectPreview[] = [
    {
      title: "Formaciones a cooperativas en Nikki",
      description:
        "Formaciones en técnicas agrícolas, sensibilización en el uso de recursos hídricos y en el cuidado de la tierra de cultivo y mejora del acceso a semillas.",
      imageUrl: "/oan-web-012.jpg",
      url: "",
    },
  ];

  const projectCategories = PROJECT_CATEGORIES.map((cat) => (
    <div key={cat.name} style={cat.style} className={styles.projectCategoryBox}>
      {cat.icon}
      <h2 className={styles.projectCategoryName}>{cat.name}</h2>
    </div>
  ));

  const projects = PROJECTS.map((project) => (
    <ProjectPreview key={project.title} project={project} />
  ));

  return (
    <main>
      <TitlePage title="Proyectos" backgroundImageUrl="/oan-web-017.jpg" />

      <section className={styles.projectCategoriesSection}>
        {projectCategories}
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectTitleSection}>
          <h2 className={styles.projectTitleTextSection}>
            {PROJECT_CATEGORIES[0].name}
          </h2>
        </div>

        <div className={styles.projectCategoryDescription}>
          <p>
            3 líneas de presentación Formaciones en técnicas agrícolas,
            sensibilización en el uso de recursos hídricos y en el cuidado de la
            tierra de cultivo y mejora del acceso a semillas.
          </p>

          <p>
            Formaciones en técnicas agrícolas, sensibilización en el uso de
            recursos.
          </p>
        </div>

        <div>{projects}</div>
      </section>
    </main>
  );
}
