import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const AGRICULTURE_PROJECTS: IProjectPreview[] = [
  {
    title:
      "Empoderamiento de cooperativas de producción agrícola en la comuna Nikki",
    summary: (
      <div style={wrapper}>
        <p>
          Mejora de los conocimientos agrícolas de las personas miembro de las
          cooperativas mediante formaciones en técnicas agrícolas,
          sensibilización en el uso de recursos hídricos, y en el cuidado de la
          tierra de cultivo. Mejora del acceso a semillas en la ciudad de Nikki.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          Mejora de los conocimientos agrícolas de las personas miembro de las
          cooperativas mediante formaciones en técnicas agrícolas,
          sensibilización en el uso de recursos hídricos, y en el cuidado de la
          tierra de cultivo. Mejora del acceso a semillas en la ciudad de Nikki.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    url: "",
  },
  {
    title: "Investigaciones estratégicas",
    summary: (
      <div style={wrapper}>
        <p>
          Desde la Universidad de Parakou, se alertó a OAN International de la
          posibilidad real de que en el medio- largo plazo este árbol
          desaparezca debido al uso abusivo de sus semillas. El objetivo general
          de esta investigación fue estudiar la situación del árbol del karité
          en el norte de Benín para poder identificar los retos a los que se
          enfrenta y posibles soluciones.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          Desde la Universidad de Parakou, se alertó a OAN International de la
          posibilidad real de que en el medio- largo plazo este árbol
          desaparezca debido al uso abusivo de sus semillas. El objetivo general
          de esta investigación fue estudiar la situación del árbol del karité
          en el norte de Benín para poder identificar los retos a los que se
          enfrenta y posibles soluciones.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    url: "",
  },
];
