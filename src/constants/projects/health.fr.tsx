import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const HEALTH_PROJECTS_FR: IProjectPreview[] = [
  {
    title: `PReMASE (Projet de réduction de la malnutrition et d'amélioration de la santé infantile)`,
    imageUrl: "/oan-web-032.jpg",
    summary: (
      <div style={wrapper}>
        <p>
          Ce projet a pour objectif d&apos;
          <b>améliorer l&apos;état de santé nutritionnelle des enfants</b> de la
          zone rurale de Nikki en renforçant les capacités familiales et
          communautaires. Pour la <b>détection et le traitement</b> de la
          malnutrition infantile, des évaluations nutritionnelles périodiques
          sont menées dans les villages d&apos;intervention et des orientations
          sont réalisées vers les services de santé nécessaires, avec un suivi
          des cas. Pour travailler sur la <b>prévention</b>, des séances de
          sensibilisation communautaire sont organisées et les capacités des
          personnes leaders chargées de veiller à la nutrition dans chaque
          village sont renforcées.
        </p>

        <p>
          Pour la réalisation de ce projet, OAN International a collaboré avec le
          Collège des infirmiers de Cantabrie (Espagne), qui apporte un soutien
          économique et technique au développement des activités.
        </p>
      </div>
    ),
    url: "/documents/projects/proyecto-nutricion.pdf",
  },
];
