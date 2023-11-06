import { IProjectCategory } from "@/components/project-category-section/project-category-section.component";
import { AGRICULTURE_PROJECTS } from "@/constants/projects/agriculture";
import { HEALTH_PROJECTS } from "@/constants/projects/health";
import { SOCIAL_PROJECTS } from "@/constants/projects/social";
import { ENGINEERING_PROJECTS } from "@/constants/projects/engineering";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { RiWaterFlashLine } from "react-icons/ri";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const list: CSSProperties = {
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const PROJECT_CATEGORIES: IProjectCategory[] = [
  {
    id: "agriculture",
    title: "Agricultura",
    icon: <TbPlant size={100} />,
    url: "/proyectos/agricultura",
    description: (
      <div style={wrapper}>
        <p>
          En el caso concreto de Nikki, el acceso a los productos hortícolas es
          deficiente y no continuado a lo largo del año, ya que los trabajos en
          las huertas se realizan únicamente entre los meses de febrero y junio,
          siendo la época de producción muy corta.
        </p>

        <p>
          Actualmente, OAN International trabaja a través de este programa en el
          acompañamiento a cooperativas productoras de la zona, estableciendo
          como objetivos generales:
        </p>

        <ul style={list}>
          <li>
            Mejorar los niveles de seguridad alimentaria en la comuna de Nikki.
            Se engloba dentro del ODS 2: poner fin al hambre, logrando la
            seguridad alimentaria y la mejora de la nutrición promoviendo la
            agricultura sostenible en la comuna
          </li>
          <li>
            Promover la igualdad de género. Cumple con el ODS 5: lograr la
            igualdad entre los géneros y empoderar a las mujeres. A través de la
            formación agrícola y el enfoque participativo se pretende fortalecer
            y visibilizar el papel de la mujer en la agricultura.
          </li>
        </ul>
      </div>
    ),
    backgroundColor: "var(--agriculture-color)",
    backgroundColorLight: "var(--agriculture-color-light)",
    projects: AGRICULTURE_PROJECTS,
  },
  {
    id: "heath",
    title: "Salud",
    icon: <TbHealthRecognition size={100} />,
    url: "/proyectos/salud",
    backgroundColor: "var(--health-color)",
    backgroundColorLight: "var(--health-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          La Asamblea General de Naciones Unidas adoptó en 2015 los Objetivos de
          Desarrollo Sostenible (ODS). El objetivo 3 es: “Garantizar una vida
          sana y promover el bienestar para todos en todas las edades”, y
          concierne directamente a la salud. Benín se suscribió a los ODS y ha
          optado por una política para la cobertura sanitaria universal de su
          población a través del refuerzo de su sistema de salud y la promoción
          de los cuidados de salud primarios. La Estrategia de Cooperación de la
          Organización Mundial de la Salud (OMS) en Benín 2016-2019 tiene 4
          prioridades estratégicas:
        </p>

        <ul style={list}>
          <li>Acelerar la reducción de carga de enfermedades transmisibles.</li>

          <li>
            Apoyar el desarrollo y la puesta en marcha de políticas sectoriales,
            estrategias y programas que sirvan para prevenir y controlar las
            enfermedades no transmisibles y sus factores de riesgo.
          </li>

          <li>
            Mejorar los indicadores de salud a lo largo de la vida y promover
            comportamientos sanos.
          </li>

          <li>
            Aportar un apoyo técnico de calidad al país para poder permitirle
            dotarse de un sistema de salud, capaz de responder a las necesidades
            de la población en materia de cuidados sanitarios de calidad,
            promover los derechos humanos, la equidad de género y la resiliencia
            en caso de urgencia.
          </li>
        </ul>

        <p>
          Una importante característica de Benín es la marcada y creciente
          desigualdad entre regiones. La región del norte es aquella que
          presenta mayores tasas de pobreza y los indicadores sanitarios más
          dramáticos. De este modo, desde OAN International, y gracias a las
          investigaciones de diversos TFG, se establecen como prioridades:
        </p>

        <ol style={list}>
          <li>Luchar contra la malaria</li>
          <li>Mejora de la salud materno-infantil</li>
          <li>Luchar contra la malnutrición</li>
        </ol>
      </div>
    ),
    projects: HEALTH_PROJECTS,
  },
  {
    id: "social",
    title: "Políticas Sociales",
    icon: <PiHandshakeLight size={100} />,
    url: "/proyectos/politicassociales",
    backgroundColor: "var(--social-color)",
    backgroundColorLight: "var(--social-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          La Agenda 2030 de la ONU establece los Objetivos de Desarrollo
          Sostenible (ODS) que buscan el trabajo conjunto de todos los estados
          hacia una sociedad más justa e igualitaria. En ese contexto, los
          esfuerzos del Comité de Políticas Sociales se enmarcan dentro de los
          objetivos 1, fin de la pobreza, y 5, cuya meta es lograr la igualdad
          de género, especialmente importante para alcanzar el resto de ODS. Del
          mismo modo, y para lograr un desarrollo sostenible, la Agenda Africana
          2063 propone alcanzar la igualdad de género en todas las esferas de la
          vida; eliminando cualquier tipo de discriminación en contra de las
          mujeres, ya sea a nivel social, cultural, político o económico; y
          logrando la paridad en las administraciones antes del año 2020. Esto,
          junto con el Decenio de la Mujer Africana, declarado entre los años
          2010-2020, muestran un cambio y compromiso en la hoja de ruta de los
          estados africanos en relación a la situación de sus mujeres.
        </p>
        <p>
          La lucha contra la pobreza está estrechamente vinculada a la lucha por
          la igualdad de género y el empoderamiento de la mujer, ya que la
          pobreza es sexista. Conceptualizar la pobreza desde el enfoque de
          género supone reconocer que hombres y mujeres no se ven afectados de
          la misma manera por este fenómeno.
        </p>

        <p>
          De los aproximadamente 11.000.000 habitantes que se contabilizan en
          Benín, alrededor de 5.200.000 son mujeres, de las cuales a su vez
          3.000.000 tendrían menos de 25 años. En el caso de Nikki, y según
          datos de 2010, de 99.251 habitantes estimados, 49.619 serían mujeres,
          frente a 49.632 hombres.
        </p>

        <p>
          Se podría afirmar grosso modo que la sociedad presenta una clara
          dicotomía en el espacio público-privado. Mientras que los hombres son
          los protagonistas en los espacios públicos, las mujeres son relegadas
          al espacio doméstico. Además, se da una división sexual del trabajo,
          llegando a haber incluso dos economías: el hombre es el encargado en
          el hogar de proporcionar alimentación a sus mujeres e hijos; la mujer
          carga con los gastos en salud y educación, gestionando sus propios
          ingresos. El abanico de actividades es amplio, desde la venta de
          comida en el mercado, al comercio de los excedentes del cultivo,
          pasando por el transporte de leña o la cría de animales. A este
          trabajo hay que sumarle el tiempo empleado en ir a buscar agua y
          combustible, llegando a invertir hasta 3 horas en la preparación de la
          comida de la familia.
        </p>

        <p>
          Son por todos estos motivos, que no solo los proyectos del Comité de
          Políticas Sociales, sino todos los proyectos de OAN International,
          incorporan la variable de género.
        </p>
      </div>
    ),
    projects: SOCIAL_PROJECTS,
  },
  {
    id: "engineering",
    title: "Energía, agua e infraestructura",
    icon: <RiWaterFlashLine size={100} />,
    url: "/proyectos/energia",
    backgroundColor: "var(--energy-color)",
    backgroundColorLight: "var(--energy-color-light)",
    description: (
      <div style={wrapper}>
        <p>
          Los principales servicios involucrados en los servicios básicos son el
          agua, el saneamiento y la gestión de residuos. Según la OMS, en 2018
          más de 1.000 millones de personas en el mundo no tienen acceso a agua
          potable, y 2.600 millones carecen de un saneamiento adecuado. En
          concreto, se estima que 660 millones de africanos no tienen acceso a
          servicios de saneamiento adecuado, y 173 millones todavía practican la
          defecación al aire libre (WWC, 2018).
        </p>
        <p>
          El agua y el saneamiento son fundamentales para el desarrollo y el
          bienestar humano, y están reconocidos como derechos humanos por la
          Asamblea General de las Naciones Unidas (2010). Sin embargo, también
          son fundamentales para el buen desarrollo de otros sectores, como la
          nutrición adecuada, la educación y la erradicación de la pobreza .
        </p>

        <p>
          El agua es uno de los recursos naturales fundamentales y en la
          actualidad no existe duda alguna de la importancia tanto de la
          cantidad como de la calidad de la misma para el bienestar y el
          desarrollo humano. Se necesitan entre 50 y 100 litros/persona diarios
          para cubrir cómodamente todas las necesidades de consumo e higiene,
          estando el mínimo necesario alrededor de los 25. En 2010, la Asamblea
          General de las Naciones Unidas reconoció explícitamente el derecho
          humano al abastecimiento de agua dulce. Todas las personas tienen
          derecho a disponer de forma continuada de agua suficiente, salubre,
          físicamente accesible, asequible y de una calidad aceptable, para uso
          personal y doméstico (ONU, 2010). Se trata de un recurso abundante y
          renovable, sin embargo, aún en la actualidad existe una gran cantidad
          de personas que no disponen de acceso suficiente a agua apropiada para
          su consumo.
        </p>

        <p>
          Los datos revelan que la mayor parte de la población sin acceso a agua
          potable en el entorno mundial se sitúa en África subsahariana, con 319
          millones de personas, de las que 8 de cada 10 viven en zonas rurales
          con escaso acceso a nuevos recursos.
        </p>

        <p>
          Por otro lado, a pesar de considerar la electricidad como una
          necesidad básica y pilar en la vida de todo país o comunidad, en
          África, más de 600 millones de personas, casi 2/3 de la población,
          viven sin suministro eléctrico. Millones de familias y hogares
          dependen de fuentes de energía tradicionales que se traducen en
          tecnologías contaminantes, costosas, y lo que es más importante,
          negativas para la salud humana. Esta situación supone, sin duda, el
          impedimento fundamental para el avance y desarrollo de estos países.
        </p>

        <p>
          En concreto en Benín, el 85 % de la electricidad proviene de Ghana,
          Nigeria y Costa de Marfil y los productos petrolíferos consumidos son,
          en su totalidad, de origen externo. Esta situación de dependencia tan
          elevada hace a Benín un país muy vulnerable a cualquier tipo de
          fluctuación que sufran sus países vecinos. Debido a ello, el consumo
          de energía en este país es, aproximadamente, la mitad del de los
          países de África Subsahariana y menos de una cuarta parte de la media
          mundial. Estos datos se ven reflejados en la tasa de electrificación,
          que supone solamente un 27 %, siendo el de las zonas urbanas un 54 % y
          el de las rurales un 4 %.
        </p>
      </div>
    ),
    projects: ENGINEERING_PROJECTS,
  },
];
