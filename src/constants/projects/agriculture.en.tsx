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

export const AGRICULTURE_PROJECTS_EN: IProjectPreview[] = [
  {
    title: "Nikarit",
    summary: (
      <div style={wrapper}>
        <p>
          A social entrepreneurship project that seeks to{" "}
          <b>empower women shea butter producers</b> in Nikki so that, through
          the sale of this product, they can improve their lives and those of
          their communities. To this end, we support 6 women&apos;s cooperatives
          in strengthening their capacities and accessing the tools they need to
          produce high-quality shea butter and improve their access to the
          national and international market.
        </p>

        <p>
          The shea butter is then transformed into cosmetic products you can buy
          here{" "}
          <a style={link} href="https://nikarit.es/">
            (nikarit.es)
          </a>{" "}
          and with this income we help fund the rest of our projects.{" "}
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
    title: "Community gardens",
    summary: (
      <div style={wrapper}>
        <p>
          This project seeks to <b>support groups of rural women</b> in
          developing community gardens in their villages, giving them access to
          varied food and the chance to sell any surplus as an additional source
          of income.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-029.jpg",
    url: "",
  },
  {
    title: "Microcredits for women",
    summary: (
      <div style={wrapper}>
        <p>
          This project supports a group of women entrepreneurs in the city of
          Nikki, giving them access to microcredits with which they can grow
          their small businesses, and creating spaces for collective learning
          where they share experiences, support one another in solving their
          problems, receive training from specialists and launch collective
          projects.
        </p>

        <p>
          This project also supports these women in organising International
          Women&apos;s Day and the day against violence towards women. These are
          two moments when they lead awareness-raising in the community on these
          issues.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    videoUrl: "https://www.youtube.com/embed/Dni9N_rtyx0?si=wdBYRhMob6GJ9Y2S",
    url: "/documents/projects/microcreditos.pdf",
  },
];
