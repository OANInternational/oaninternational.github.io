import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const ENGINEERING_PROJECTS_EN: IProjectPreview[] = [
  {
    title: "ASEP",
    summary: (
      <div style={wrapper}>
        <p>
          A project that aims to improve water access in the Nikki region
          through better preventive maintenance of water pumps, access to spare
          parts, and community management. All of this is done with the support
          of an app, AGUAPP, which makes it easier to track and manage water
          pump breakdowns, improving access for communities.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-031.jpg",
    videoUrl: "https://www.youtube.com/embed/9lKR1aJTu1Y?si=8931l6GUk5D_qXLZ",
    url: "/documents/projects/asep.pdf",
  },
  {
    title: "EMAS pumps",
    summary: (
      <div style={wrapper}>
        <p>
          We work in collaboration with the NGO Tadeh to train local technicians
          in manufacturing locally adapted technologies to obtain water in an
          affordable and sustainable way.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-012.jpg",
    url: "",
  },
];
