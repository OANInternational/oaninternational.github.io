import { IProjectCategory } from "@/components/project-category-section/project-category-section.component";
import { AGRICULTURE_PROJECTS_ES } from "@/constants/projects/agriculture.es";
import { HEALTH_PROJECTS_ES } from "@/constants/projects/health.es";
import { ENGINEERING_PROJECTS_ES } from "@/constants/projects/engineering.es";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { RiWaterFlashLine } from "react-icons/ri";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const PROJECT_CATEGORIES_ES: IProjectCategory[] = [
  {
    id: "woman",
    title: "Mujer y medios de vida sostenibles",
    icon: <TbPlant size={100} />,
    description: (
      <div style={wrapper}>
        <p>
          Para que las comunidades sean capaces de acceder de manera autónoma a
          los servicios básicos como el agua, la salud o la educación, es
          imprescindible que tengan un medio de vida que les haga ser
          independientes económicamente.
        </p>

        <p>
          En este sentido, las mujeres juegan un papel esencial para el
          desarrollo de sus comunidades, ya que tradicionalmente en Nikki, son
          las encargadas de la educación, la alimentación y la salud de sus
          hijos. Sin embargo, las mujeres tienen más barreras para acceder a la
          educación y al mercado de trabajo, lo que favorece los matrimonios
          precoces, la violencia doméstica.
        </p>

        <p>
          Por ello, favorecer la capacitación y el trabajo digno de las mujeres
          permite romper con esas barreras y mejorar no solo su propia vida sino
          la de toda su comunidad.
        </p>

        <p>
          En este contexto, promovemos la autosuficiencia económica de las
          mujeres en Nikki, en línea con el ODS 1 (fin de la pobreza), el ODS 5
          (lograr la igualdad de género), y el ODS 7 (trabajo digno y
          crecimiento económico).
        </p>
      </div>
    ),
    backgroundColor: "var(--agriculture-color)",
    backgroundColorLight: "var(--agriculture-color-light)",
    projects: AGRICULTURE_PROJECTS_ES,
  },
  {
    id: "food-security",
    title: "Seguridad alimentaria",
    icon: <TbHealthRecognition size={100} />,
    backgroundColor: "var(--health-color)",
    backgroundColorLight: "var(--health-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          La FAO considera a la República de Benín uno de los 51 Países de Bajos
          Ingresos y Déficit de Alimentos (PBIDA). La malnutrición es un
          problema generalizado, y la población infantil se ve especialmente
          afectada. A nivel nacional, un preocupante 30% de los niños (más de
          1,1 millones de niños) sufren desnutrición crónica. Incluso hoy, más
          de un tercio de los niños menores de 5 años sufren retraso del
          crecimiento por falta de una ingesta nutricional adecuada. Además, el
          75% de los niños no siguen una dieta equilibrada.
        </p>

        <p>
          El departamento de Borgou registra la mayor prevalencia de
          insuficiencia ponderal de Benín, y en la zona de salud de
          Nikki-Kalalé-Pèrèrè (ZSNKP), la desnutrición infantil es la tercera
          causa de hospitalización y la segunda de muerte entre los menores de 5
          años.
        </p>

        <p>
          En este contexto, en OAN trabajamos para mejorar la nutrición materno
          infantil en Nikki en línea con los ODS 2 (Hambre cero) y 3 (Salud y
          bienestar).
        </p>
      </div>
    ),
    projects: HEALTH_PROJECTS_ES,
  },
  {
    id: "water-access",
    title: "Acceso al agua",
    icon: <RiWaterFlashLine size={100} />,
    backgroundColor: "var(--energy-color)",
    backgroundColorLight: "var(--energy-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          El acceso al agua es la primera condición indispensable para la vida y
          para el desarrollo.
        </p>
        <p>
          El acceso al agua es un derecho humano reconocido de forma explícita
          por la Asamblea de las Naciones Unidas a través de la Resolución
          64/292 en 2010. Sin embargo, desgraciadamente en Nikki aún una gran
          parte de la población carece de acceso al agua o tiene un acceso
          deficiente.
        </p>

        <p>
          En OAN trabajamos para buscar <b>soluciones innovadoras</b> que
          faciliten el acceso al agua a la población de Nikki.
        </p>

        <p>
          Esta actuación se enmarca dentro del ODS 6 (Agua limpia y saneamiento)
          y se alinea con los Planes de Desarrollo Comunitario de Nikki (PDC
          2017-2021) que incluyen el objetivo específico de “mejorar los
          servicios de aprovisionamiento de agua, saneamiento y protección del
          medioambiente”, siendo el resultado esperado “el agua potable es
          accesible de forma permanente”.
        </p>
      </div>
    ),
    projects: ENGINEERING_PROJECTS_ES,
  },
];
