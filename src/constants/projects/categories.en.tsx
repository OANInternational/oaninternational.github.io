import { IProjectCategory } from "@/components/project-category-section/project-category-section.component";
import { AGRICULTURE_PROJECTS_EN } from "@/constants/projects/agriculture.en";
import { HEALTH_PROJECTS_EN } from "@/constants/projects/health.en";
import { ENGINEERING_PROJECTS_EN } from "@/constants/projects/engineering.en";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { RiWaterFlashLine } from "react-icons/ri";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const PROJECT_CATEGORIES_EN: IProjectCategory[] = [
  {
    id: "woman",
    title: "Women and sustainable livelihoods",
    icon: <TbPlant size={100} />,
    description: (
      <div style={wrapper}>
        <p>
          For communities to be able to access basic services such as water,
          health or education autonomously, it is essential that they have a
          livelihood that makes them economically independent.
        </p>

        <p>
          In this regard, women play an essential role in the development of
          their communities, since traditionally in Nikki they are responsible
          for the education, feeding and health of their children. However,
          women face more barriers to accessing education and the labour market,
          which encourages early marriages and domestic violence.
        </p>

        <p>
          For this reason, supporting the training and decent work of women
          helps break down those barriers and improve not only their own lives
          but those of their entire community.
        </p>

        <p>
          In this context, we promote the economic self-sufficiency of women in
          Nikki, in line with SDG 1 (no poverty), SDG 5 (achieve gender
          equality), and SDG 7 (decent work and economic growth).
        </p>
      </div>
    ),
    backgroundColor: "var(--agriculture-color)",
    backgroundColorLight: "var(--agriculture-color-light)",
    projects: AGRICULTURE_PROJECTS_EN,
  },
  {
    id: "food-security",
    title: "Food security",
    icon: <TbHealthRecognition size={100} />,
    backgroundColor: "var(--health-color)",
    backgroundColorLight: "var(--health-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          The FAO considers the Republic of Benin one of the 51 Low-Income
          Food-Deficit Countries (LIFDC). Malnutrition is a widespread problem,
          and children are particularly affected. Nationally, a worrying 30% of
          children (more than 1.1 million children) suffer from chronic
          malnutrition. Even today, more than a third of children under 5 suffer
          from stunted growth due to a lack of adequate nutritional intake. In
          addition, 75% of children do not follow a balanced diet.
        </p>

        <p>
          The Borgou department records the highest prevalence of underweight in
          Benin, and in the Nikki-Kalalé-Pèrèrè health zone (ZSNKP), child
          malnutrition is the third cause of hospitalisation and the second
          cause of death among children under 5.
        </p>

        <p>
          In this context, at OAN we work to improve maternal and child
          nutrition in Nikki in line with SDG 2 (Zero hunger) and 3 (Good health
          and well-being).
        </p>
      </div>
    ),
    projects: HEALTH_PROJECTS_EN,
  },
  {
    id: "water-access",
    title: "Water access",
    icon: <RiWaterFlashLine size={100} />,
    backgroundColor: "var(--energy-color)",
    backgroundColorLight: "var(--energy-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          Access to water is the first indispensable condition for life and for
          development.
        </p>
        <p>
          Access to water is a human right explicitly recognised by the United
          Nations Assembly through Resolution 64/292 in 2010. However,
          unfortunately in Nikki a large part of the population still lacks
          access to water or has poor access.
        </p>

        <p>
          At OAN we work to find <b>innovative solutions</b> that make it easier
          for the people of Nikki to access water.
        </p>

        <p>
          This action falls within SDG 6 (Clean water and sanitation) and aligns
          with the Nikki Community Development Plans (PDC 2017-2021), which
          include the specific objective of “improving water supply, sanitation
          and environmental protection services”, with the expected outcome
          being “drinking water is permanently accessible”.
        </p>
      </div>
    ),
    projects: ENGINEERING_PROJECTS_EN,
  },
];
