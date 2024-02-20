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

export const ENGINEERING_PROJECTS: IProjectPreview[] = [
  {
    title: "ASEP",
    summary: (
      <div style={wrapper}>
        <p>
          Proyecto que tiene como objetivo la mejora del acceso al agua en la
          región de Nikki a través de la de la mejora de el mantenimiento
          preventivo de las bombas de agua, el acceso a piezas de repuesto, y la
          gestión comunitaria. Todo ello se realiza con el apoyo de una
          aplicación AGUAPP, que facilita el seguimiento y la gestión de las
          averías de las bombas de agua, mejorando el acceso de las comunidades.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-006.jpg",
    url: "",
  },
  {
    title: "Bombas EMAS",
    summary: (
      <div style={wrapper}>
        <p>
          Trabajamos en colaboración con la ONG Tadeh para formar a técnicos
          locales en la fabricación de tecnologias adaptadas localmente para
          obtener agua de manera económica y sostenible.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-012.jpg",
    url: "",
  },
];
