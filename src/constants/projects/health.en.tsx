import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const HEALTH_PROJECTS_EN: IProjectPreview[] = [
  {
    title: `PReMASE (Project to reduce malnutrition and improve child health)`,
    imageUrl: "/oan-web-032.jpg",
    summary: (
      <div style={wrapper}>
        <p>
          This project aims to{" "}
          <b>improve the nutritional health of children</b> in the rural area of
          Nikki by strengthening family and community capacities. For the{" "}
          <b>detection and treatment</b> of child malnutrition, periodic
          nutritional assessments are carried out in the intervention villages
          and referrals are made to the necessary health services, with
          follow-up on each case. To work on <b>prevention</b>, community
          awareness sessions are held and the capacities of the leaders
          responsible for overseeing nutrition in each village are strengthened.
        </p>

        <p>
          To carry out this project, OAN International has collaborated with the
          College of Nursing of Cantabria (Spain), which provides financial and
          technical support for the development of the activities.
        </p>
      </div>
    ),
    url: "/documents/projects/proyecto-nutricion.pdf",
  },
];
