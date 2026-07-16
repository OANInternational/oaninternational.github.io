import { IProjectCategory } from "@/components/project-category-section/project-category-section.component";
import { AGRICULTURE_PROJECTS_FR } from "@/constants/projects/agriculture.fr";
import { HEALTH_PROJECTS_FR } from "@/constants/projects/health.fr";
import { ENGINEERING_PROJECTS_FR } from "@/constants/projects/engineering.fr";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { RiWaterFlashLine } from "react-icons/ri";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const PROJECT_CATEGORIES_FR: IProjectCategory[] = [
  {
    id: "woman",
    title: "Femmes et moyens de subsistance durables",
    icon: <TbPlant size={100} />,
    description: (
      <div style={wrapper}>
        <p>
          Pour que les communautés soient capables d&apos;accéder de manière
          autonome aux services de base tels que l&apos;eau, la santé ou
          l&apos;éducation, il est indispensable qu&apos;elles disposent d&apos;un
          moyen de subsistance qui les rende économiquement indépendantes.
        </p>

        <p>
          En ce sens, les femmes jouent un rôle essentiel dans le développement
          de leurs communautés, car traditionnellement à Nikki, ce sont elles qui
          sont chargées de l&apos;éducation, de l&apos;alimentation et de la santé
          de leurs enfants. Cependant, les femmes rencontrent davantage
          d&apos;obstacles pour accéder à l&apos;éducation et au marché du
          travail, ce qui favorise les mariages précoces et la violence
          domestique.
        </p>

        <p>
          C&apos;est pourquoi favoriser la formation et le travail digne des
          femmes permet de briser ces obstacles et d&apos;améliorer non seulement
          leur propre vie mais aussi celle de toute leur communauté.
        </p>

        <p>
          Dans ce contexte, nous promouvons l&apos;autosuffisance économique des
          femmes à Nikki, en accord avec l&apos;ODD 1 (élimination de la
          pauvreté), l&apos;ODD 5 (parvenir à l&apos;égalité des genres) et
          l&apos;ODD 7 (travail digne et croissance économique).
        </p>
      </div>
    ),
    backgroundColor: "var(--agriculture-color)",
    backgroundColorLight: "var(--agriculture-color-light)",
    projects: AGRICULTURE_PROJECTS_FR,
  },
  {
    id: "food-security",
    title: "Sécurité alimentaire",
    icon: <TbHealthRecognition size={100} />,
    backgroundColor: "var(--health-color)",
    backgroundColorLight: "var(--health-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          La FAO considère la République du Bénin comme l&apos;un des 51 Pays à
          faible revenu et à déficit vivrier (PFRDV). La malnutrition est un
          problème généralisé, et la population infantile est particulièrement
          touchée. À l&apos;échelle nationale, un inquiétant 30 % des enfants
          (plus de 1,1 million d&apos;enfants) souffrent de malnutrition
          chronique. Aujourd&apos;hui encore, plus d&apos;un tiers des enfants de
          moins de 5 ans souffrent d&apos;un retard de croissance par manque
          d&apos;un apport nutritionnel adéquat. De plus, 75 % des enfants ne
          suivent pas une alimentation équilibrée.
        </p>

        <p>
          Le département du Borgou enregistre la plus forte prévalence
          d&apos;insuffisance pondérale du Bénin, et dans la zone de santé de
          Nikki-Kalalé-Pèrèrè (ZSNKP), la malnutrition infantile est la troisième
          cause d&apos;hospitalisation et la deuxième cause de décès parmi les
          enfants de moins de 5 ans.
        </p>

        <p>
          Dans ce contexte, à OAN nous travaillons pour améliorer la nutrition
          maternelle et infantile à Nikki, en accord avec les ODD 2 (Faim zéro)
          et 3 (Bonne santé et bien-être).
        </p>
      </div>
    ),
    projects: HEALTH_PROJECTS_FR,
  },
  {
    id: "water-access",
    title: "Accès à l'eau",
    icon: <RiWaterFlashLine size={100} />,
    backgroundColor: "var(--energy-color)",
    backgroundColorLight: "var(--energy-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          L&apos;accès à l&apos;eau est la première condition indispensable à la
          vie et au développement.
        </p>
        <p>
          L&apos;accès à l&apos;eau est un droit humain explicitement reconnu par
          l&apos;Assemblée des Nations unies à travers la Résolution 64/292 en
          2010. Cependant, malheureusement, à Nikki, une grande partie de la
          population n&apos;a toujours pas accès à l&apos;eau ou n&apos;y a
          qu&apos;un accès insuffisant.
        </p>

        <p>
          À OAN, nous travaillons pour trouver des <b>solutions innovantes</b>{" "}
          qui facilitent l&apos;accès à l&apos;eau pour la population de Nikki.
        </p>

        <p>
          Cette action s&apos;inscrit dans le cadre de l&apos;ODD 6 (Eau propre et
          assainissement) et s&apos;aligne sur les Plans de développement
          communautaire de Nikki (PDC 2017-2021), qui incluent l&apos;objectif
          spécifique d&apos;« améliorer les services d&apos;approvisionnement en
          eau, d&apos;assainissement et de protection de l&apos;environnement »,
          le résultat attendu étant « l&apos;eau potable est accessible en
          permanence ».
        </p>
      </div>
    ),
    projects: ENGINEERING_PROJECTS_FR,
  },
];
