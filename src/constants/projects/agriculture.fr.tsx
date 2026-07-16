import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const link: CSSProperties = {
  color: "black",
};

export const AGRICULTURE_PROJECTS_FR: IProjectPreview[] = [
  {
    title: "Nikarit",
    summary: (
      <div style={wrapper}>
        <p>
          Projet d&apos;entrepreneuriat social qui vise à{" "}
          <b>autonomiser les femmes productrices</b> de beurre de karité de Nikki
          afin que, grâce à la vente de ce produit, elles puissent améliorer leur
          vie et celle de leurs communautés. Pour cela, nous accompagnons 6
          coopératives de femmes dans le renforcement des capacités et l&apos;accès
          aux outils leur permettant de produire du beurre de karité de haute
          qualité et d&apos;améliorer leur accès au marché national et
          international.
        </p>

        <p>
          Le beurre de karité est ensuite transformé en produits cosmétiques que
          vous pouvez acheter ici{" "}
          <a style={link} href="https://nikarit.es/">
            (nikarit.es)
          </a>{" "}
          et, grâce à ces revenus, nous soutenons le financement des autres
          projets.{" "}
          <a style={link} href="https://www.instagram.com/nikarit_karite/">
            (Instagram)
          </a>
        </p>
      </div>
    ),
    imageUrl: "/oan-web-030.jpg",
    videoUrl: "https://www.youtube.com/embed/jsvZld4MQOA?si=8931l6GUk5D_qXLZ",
    url: "/documents/projects/nikarit.pdf",
  },
  {
    title: "Potagers communautaires",
    summary: (
      <div style={wrapper}>
        <p>
          Ce projet vise à <b>soutenir des groupes de femmes rurales</b> afin
          qu&apos;elles développent des potagers communautaires dans leurs
          villages, leur donnant accès à une alimentation variée et la
          possibilité de vendre les excédents pour obtenir une source de revenus
          supplémentaire.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-029.jpg",
    url: "",
  },
  {
    title: "Microcrédits pour les femmes",
    summary: (
      <div style={wrapper}>
        <p>
          Ce projet soutient un groupe de femmes entrepreneures dans la ville de
          Nikki, en leur facilitant l&apos;accès à des microcrédits grâce
          auxquels elles peuvent développer leurs petites entreprises, et en
          créant des espaces d&apos;apprentissage collectif où elles partagent
          leurs expériences, s&apos;entraident pour résoudre leurs problèmes, se
          forment auprès de spécialistes et lancent des projets collectifs.
        </p>

        <p>
          Ce projet accompagne également ces femmes dans l&apos;organisation de la
          Journée mondiale de la femme et de la journée de lutte contre la
          violence faite aux femmes. Ce sont deux moments où elles mènent la
          sensibilisation de la communauté sur ces sujets.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    videoUrl: "https://www.youtube.com/embed/Dni9N_rtyx0?si=wdBYRhMob6GJ9Y2S",
    url: "/documents/projects/microcreditos.pdf",
  },
];
