import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const ENGINEERING_PROJECTS_ES: IProjectPreview[] = [
  {
    title: "ASEP",
    summary: (
      <div style={wrapper}>
        <p>
          Proyecto que tiene como objetivo la mejora del acceso al agua en la
          región de Nikki a través de la mejora del mantenimiento preventivo de
          las bombas de agua, el acceso a piezas de repuesto, y la gestión
          comunitaria. Todo ello se realiza con el apoyo de una aplicación
          AGUAPP, que facilita el seguimiento y la gestión de las averías de las
          bombas de agua, mejorando el acceso de las comunidades.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-031.jpg",
    videoUrl: "https://www.youtube.com/embed/9lKR1aJTu1Y?si=8931l6GUk5D_qXLZ",
    url: "/documents/projects/asep-2026.pdf",
  },
  {
    title: "Bombas EMAS",
    summary: (
      <div style={wrapper}>
        <p>
          Trabajamos en colaboración con la ONG Tadeh para formar a técnicos
          locales en la fabricación de tecnologías adaptadas localmente para
          obtener agua de manera económica y sostenible.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-012.jpg",
    url: "",
  },
  {
    title: "ProGIDéM (Proyecto de gestión integral de desechos domésticos)",
    summary: (
      <div style={wrapper}>
        <p>
          Proyecto desarrollado junto al Ayuntamiento de Nikki para crear un
          sistema municipal de recogida de residuos domésticos, inexistente
          hasta ahora, y sensibilizar a la población sobre salubridad e higiene
          en los espacios públicos.
        </p>

        <p>
          El servicio de recogida funciona ya en 5 barrios mediante triciclo y
          el pago de una cuota, y beneficia a más de 290 hogares y
          establecimientos. En paralelo se desarrollan pruebas piloto de
          fabricación de ladrillos a partir de residuos plásticos con el apoyo
          de la UPM.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-059.jpg",
    url: "/documents/projects/progidem-2026.pdf",
  },
];
