import { IProjectPreview } from "@/components/project-preview/project-preview.component";
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

export const SOCIAL_PROJECTS: IProjectPreview[] = [
  {
    title: "Nikarit",
    summary: (
      <div style={wrapper}>
        <p>
          El objetivo de Nikarit es contribuir a la mejora de las condiciones de
          vida de la población de Nikki, a través del empoderamiento de las
          mujeres productoras de{" "}
          <a href="http://www.nikarit.es/">manteca de karité.</a>
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          El objetivo de Nikarit es contribuir a la mejora de las condiciones de
          vida de la población de Nikki, a través del empoderamiento de las
          mujeres productoras de{" "}
          <a href="http://www.nikarit.es/">manteca de karité.</a>
        </p>

        <p>
          Para ello, se pretende fomentar el comercio justo de este producto
          para impulsar la economía familiar, el asociacionismo y la utilización
          de sus recursos para su propio beneficio. Nikarit nace del análisis de
          las necesidades de Nikki y a partir de ellas se hizo un estudio más
          profundo que dio lugar a este proyecto de emprendimiento social.
        </p>

        <p>
          Compramos manteca de karité directamente a tres cooperativas de
          mujeres (de Monnon, Sansí Gandó y Bessan Gourou), la importamos a
          España y la comercializamos. Con los beneficios de esta actividad
          financiamos proyectos de desarrollo en estas comunidades y en el resto
          de la comuna de Nikki.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-005.jpg",
    url: "nikarit",
  },
  {
    title: "Apoyo a la emancipación de las mujeres en Nikki",
    summary: (
      <div style={wrapper}>
        <p>
          Este es el primer proyecto ejecutado en su totalidad, desde la
          formulación, por el equipo de OAN à Nikki en colaboración con la ONG
          local Jedes Besen Sia.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          Este es el primer proyecto ejecutado en su totalidad, desde la
          formulación, por el equipo de OAN à Nikki en colaboración con la ONG
          local Jedes Besen Sia. Se articula en torno a dos ejes de actuación
          principales:
        </p>
        <ul style={list}>
          <li>
            La mejora de las capacidades de mujeres a través de las TIC. Se
            contempla su formación en TIC y acceso a internet para mejorar la
            gestión financiera.
          </li>

          <li>
            Apoyo a actividades de emprendimiento generadoras de ingreso. Parte
            de la creación de una red de mujeres, las cuales presentarán sus
            proyectos para obtener un micro-crédito. Se colabora con
            instituciones especializadas de la comuna.
          </li>
        </ul>
      </div>
    ),
    imageUrl: "/oan-web-006.jpg",
    url: "",
  },
];
