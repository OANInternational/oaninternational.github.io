import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const ENGINEERING_PROJECTS_FR: IProjectPreview[] = [
  {
    title: "ASEP",
    summary: (
      <div style={wrapper}>
        <p>
          Projet qui vise à améliorer l&apos;accès à l&apos;eau dans la région de
          Nikki grâce à l&apos;amélioration de la maintenance préventive des
          pompes à eau, à l&apos;accès aux pièces de rechange et à la gestion
          communautaire. Le tout est réalisé avec l&apos;appui d&apos;une
          application, AGUAPP, qui facilite le suivi et la gestion des pannes des
          pompes à eau, améliorant ainsi l&apos;accès des communautés.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-031.jpg",
    videoUrl: "https://www.youtube.com/embed/9lKR1aJTu1Y?si=8931l6GUk5D_qXLZ",
    url: "/documents/projects/asep.pdf",
  },
  {
    title: "Pompes EMAS",
    summary: (
      <div style={wrapper}>
        <p>
          Nous travaillons en collaboration avec l&apos;ONG Tadeh pour former des
          techniciens locaux à la fabrication de technologies adaptées localement
          afin d&apos;obtenir de l&apos;eau de manière économique et durable.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-012.jpg",
    url: "",
  },
];
