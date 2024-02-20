import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import Image from "next/image";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const list: CSSProperties = {
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const HEALTH_PROJECTS: IProjectPreview[] = [
  {
    title: `PReMASE (Proyecto de reducción de la malnutrición y mejora de la salud infantil)`,
    imageUrl: "/oan-web-004.jpg",
    summary: (
      <div style={wrapper}>
        <p>
          Este proyecto tiene como objetivo{" "}
          <b>mejorar el estado de salud nutricional de los niños</b> del área
          rural de Nikki mediante el fortalecimiento de las capacidades
          familiares y comunitarias. Para la <b>detección y el tratamiento</b>{" "}
          de la desnutrición infantil, se llevan a cabo evaluaciones
          nutricionales periódicas en los pueblos de intervención y se realizan
          derivaciones a los servicios de salud necesarios, realizando un
          seguimiento de los casos. Para trabajar la <b>prevencion</b> se
          realizan sesiones de sensibilizacion comunitaria y se refuerzan las
          capacidades de personas líderes encargadas de velar por la nutrición
          en cada pueblo.
        </p>
      </div>
    ),
    url: "",
  },
];
