import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { RiWaterFlashLine } from "react-icons/ri";

import ProjectCategorySection, {
  IProjectCategory,
} from "@/components/project-category-section/project-category-section.component";

export default function Projects() {
  const PROJECT_CATEGORIES: IProjectCategory[] = [
    {
      title: "Agricultura",
      icon: <TbPlant size={100} />,
      url: "/proyectos/agricultura",
      description: (
        <div>
          <p className={styles.marginBottom}>
            En el caso concreto de Nikki, el acceso a los productos hortícolas
            es deficiente y no continuado a lo largo del año, ya que los
            trabajos en las huertas se realizan únicamente entre los meses de
            febrero y junio, siendo la época de producción muy corta.
          </p>

          <p className={styles.marginBottom}>
            Actualmente, OAN International trabaja a través de este programa en
            el acompañamiento a cooperativas productoras de la zona,
            estableciendo como objetivos generales:
          </p>

          <ul className={styles.marginLeft}>
            <li className={styles.marginBottom}>
              Mejorar los niveles de seguridad alimentaria en la comuna de
              Nikki. Se engloba dentro del ODS 2: poner fin al hambre, logrando
              la seguridad alimentaria y la mejora de la nutrición promoviendo
              la agricultura sostenible en la comuna
            </li>
            <li className={styles.marginBottom}>
              Promover la igualdad de género. Cumple con el ODS 5: lograr la
              igualdad entre los géneros y empoderar a las mujeres. A través de
              la formación agrícola y el enfoque participativo se pretende
              fortalecer y visibilizar el papel de la mujer en la agricultura.
            </li>
          </ul>
        </div>
      ),
      backgroundColor: "var(--agriculture-color)",
      backgroundColorLight: "var(--agriculture-color-light)",
      projects: [
        {
          title:
            "Empoderamiento de cooperativas de producción agrícola en la comuna Nikki",
          summary: (
            <div>
              <p className="marginBottom">
                Mejora de los conocimientos agrícolas de las personas miembro de
                las cooperativas mediante formaciones en técnicas agrícolas,
                sensibilización en el uso de recursos hídricos, y en el cuidado
                de la tierra de cultivo. Mejora del acceso a semillas en la
                ciudad de Nikki.
              </p>
            </div>
          ),
          description: (
            <div>
              <p className="marginBottom">
                Mejora de los conocimientos agrícolas de las personas miembro de
                las cooperativas mediante formaciones en técnicas agrícolas,
                sensibilización en el uso de recursos hídricos, y en el cuidado
                de la tierra de cultivo. Mejora del acceso a semillas en la
                ciudad de Nikki.
              </p>
            </div>
          ),
          imageUrl: "/oan-web-004.jpg",
          url: "",
        },
        {
          title: "Investigaciones estratégicas",
          summary: (
            <div>
              <p className="marginBottom">
                Desde la Universidad de Parakou, se alertó a OAN International
                de la posibilidad real de que en el medio- largo plazo este
                árbol desaparezca debido al uso abusivo de sus semillas. El
                objetivo general de esta investigación fue estudiar la situación
                del árbol del karité en el norte de Benín para poder identificar
                los retos a los que se enfrenta y posibles soluciones.
              </p>
            </div>
          ),
          description: (
            <div>
              <p className="marginBottom">
                Desde la Universidad de Parakou, se alertó a OAN International
                de la posibilidad real de que en el medio- largo plazo este
                árbol desaparezca debido al uso abusivo de sus semillas. El
                objetivo general de esta investigación fue estudiar la situación
                del árbol del karité en el norte de Benín para poder identificar
                los retos a los que se enfrenta y posibles soluciones.
              </p>
            </div>
          ),
          imageUrl: "/oan-web-004.jpg",
          url: "",
        },
      ],
    },
    {
      title: "Salud",
      icon: <TbHealthRecognition size={100} />,
      url: "/proyectos/salud",
      backgroundColor: "var(--health-color)",
      backgroundColorLight: "var(--health-color-light)",
      description: (
        <div>
          <p className={styles.marginBottom}>
            La Asamblea General de Naciones Unidas adoptó en 2015 los Objetivos
            de Desarrollo Sostenible (ODS). El objetivo 3 es: “Garantizar una
            vida sana y promover el bienestar para todos en todas las edades”, y
            concierne directamente a la salud. Benín se suscribió a los ODS y ha
            optado por una política para la cobertura sanitaria universal de su
            población a través del refuerzo de su sistema de salud y la
            promoción de los cuidados de salud primarios. La Estrategia de
            Cooperación de la Organización Mundial de la Salud (OMS) en Benín
            2016-2019 tiene 4 prioridades estratégicas:
          </p>

          <ul className={styles.marginLeft}>
            <li className={styles.marginBottom}>
              Acelerar la reducción de carga de enfermedades transmisibles.
            </li>

            <li className={styles.marginBottom}>
              Apoyar el desarrollo y la puesta en marcha de políticas
              sectoriales, estrategias y programas que sirvan para prevenir y
              controlar las enfermedades no transmisibles y sus factores de
              riesgo.
            </li>

            <li className={styles.marginBottom}>
              Mejorar los indicadores de salud a lo largo de la vida y promover
              comportamientos sanos.
            </li>

            <li className={styles.marginBottom}>
              Aportar un apoyo técnico de calidad al país para poder permitirle
              dotarse de un sistema de salud, capaz de responder a las
              necesidades de la población en materia de cuidados sanitarios de
              calidad, promover los derechos humanos, la equidad de género y la
              resiliencia en caso de urgencia.
            </li>
          </ul>

          <p className={styles.marginBottom}>
            Una importante característica de Benín es la marcada y creciente
            desigualdad entre regiones. La región del norte es aquella que
            presenta mayores tasas de pobreza y los indicadores sanitarios más
            dramáticos. De este modo, desde OAN International, y gracias a las
            investigaciones de diversos TFG, se establecen como prioridades:
          </p>

          <ol className={styles.marginLeft}>
            <li className={styles.marginBottom}>Luchar contra la malaria</li>
            <li className={styles.marginBottom}>
              Mejora de la salud materno-infantil
            </li>
            <li className={styles.marginBottom}>
              Luchar contra la malnutrición
            </li>
          </ol>
        </div>
      ),
      projects: [
        {
          title: `PReMASE (Proyecto de reducción de la malnutrición y mejora de la salud infantil)`,
          imageUrl: "/oan-web-004.jpg",
          summary: (
            <p>
              El proyecto{" "}
              <b>
                Reducción de la malnutrición y mejora de la salud infantil en
                Nikki
              </b>{" "}
              tiene como objetivo mejorar el estado de salud nutricional de los
              niños del área rural de la comuna de Nikki mediante el
              fortalecimiento de las capacidades familiares y comunitarias.
            </p>
          ),
          description: (
            <div>
              <p>
                El proyecto{" "}
                <b>
                  Reducción de la malnutrición y mejora de la salud infantil en
                  Nikki
                </b>{" "}
                tiene como objetivo mejorar el estado de salud nutricional de
                los niños del área rural de la comuna de Nikki mediante el
                fortalecimiento de las capacidades familiares y comunitarias.
              </p>

              <p>
                Para ello este proyecto lleva a cabo las siguientes actividades:
              </p>
              <ol>
                <li>
                  Cribado de los niños de 6 meses a 5 años en los pueblos de
                  intervención, detectando los casos de malnutrición moderada y
                  severa y derivándolos a los centros de salud competentes.
                </li>
                <li>
                  Seguimiento de los niños con malnutrición hasta su
                  recuperación, y acompañamiento a las familias dándoles
                  consejos sobre cómo mejorar la salud de los niños.
                </li>
                <li>
                  Encuestas sobre los hábitos alimentarios, el acceso al agua,
                  el higuiene, el acceso a la salud y las principales
                  enfermedades en los pueblos de intervención, para conocer la
                  realidad de cada localidad antes de desarrollar
                  sensibilizaciones.
                </li>
                <li>
                  Desarrollo de sensibilizaciones para los hombres y mujeres de
                  las comunidades de intervención sobre cómo prevenir la
                  malnutrición, cómo actuar frente a ella y otras temáticas
                  relacionadas según la realidad de cada localidad.
                </li>
                <li>
                  Desarrollo de sesiones de demostración culinaria en las
                  comunidades en las que se preparan menús equilibrados con los
                  alimentos disponibles.
                </li>
              </ol>

              <Image width={200} height={200} src="/oan-web-004.jpg" />
            </div>
          ),
          url: "",
        },
      ],
    },
    {
      title: "Políticas Sociales",
      icon: <PiHandshakeLight size={100} />,
      url: "/proyectos/politicassociales",
      backgroundColor: "var(--social-color)",
      backgroundColorLight: "var(--social-color-light)",
      description: (
        <div>
          <p className={styles.marginBottom}>
            La Agenda 2030 de la ONU establece los Objetivos de Desarrollo
            Sostenible (ODS) que buscan el trabajo conjunto de todos los estados
            hacia una sociedad más justa e igualitaria. En ese contexto, los
            esfuerzos del Comité de Políticas Sociales se enmarcan dentro de los
            objetivos 1, fin de la pobreza, y 5, cuya meta es lograr la igualdad
            de género, especialmente importante para alcanzar el resto de ODS.
            Del mismo modo, y para lograr un desarrollo sostenible, la Agenda
            Africana 2063 propone alcanzar la igualdad de género en todas las
            esferas de la vida; eliminando cualquier tipo de discriminación en
            contra de las mujeres, ya sea a nivel social, cultural, político o
            económico; y logrando la paridad en las administraciones antes del
            año 2020. Esto, junto con el Decenio de la Mujer Africana, declarado
            entre los años 2010-2020, muestran un cambio y compromiso en la hoja
            de ruta de los estados africanos en relación a la situación de sus
            mujeres.
          </p>
          <p className={styles.marginBottom}>
            La lucha contra la pobreza está estrechamente vinculada a la lucha
            por la igualdad de género y el empoderamiento de la mujer, ya que la
            pobreza es sexista. Conceptualizar la pobreza desde el enfoque de
            género supone reconocer que hombres y mujeres no se ven afectados de
            la misma manera por este fenómeno.
          </p>

          <p className={styles.marginBottom}>
            De los aproximadamente 11.000.000 habitantes que se contabilizan en
            Benín, alrededor de 5.200.000 son mujeres, de las cuales a su vez
            3.000.000 tendrían menos de 25 años. En el caso de Nikki, y según
            datos de 2010, de 99.251 habitantes estimados, 49.619 serían
            mujeres, frente a 49.632 hombres.
          </p>

          <p className={styles.marginBottom}>
            Se podría afirmar grosso modo que la sociedad presenta una clara
            dicotomía en el espacio público-privado. Mientras que los hombres
            son los protagonistas en los espacios públicos, las mujeres son
            relegadas al espacio doméstico. Además, se da una división sexual
            del trabajo, llegando a haber incluso dos economías: el hombre es el
            encargado en el hogar de proporcionar alimentación a sus mujeres e
            hijos; la mujer carga con los gastos en salud y educación,
            gestionando sus propios ingresos. El abanico de actividades es
            amplio, desde la venta de comida en el mercado, al comercio de los
            excedentes del cultivo, pasando por el transporte de leña o la cría
            de animales. A este trabajo hay que sumarle el tiempo empleado en ir
            a buscar agua y combustible, llegando a invertir hasta 3 horas en la
            preparación de la comida de la familia.
          </p>

          <p className={styles.marginBottom}>
            Son por todos estos motivos, que no solo los proyectos del Comité de
            Políticas Sociales, sino todos los proyectos de OAN International,
            incorporan la variable de género.
          </p>
        </div>
      ),
      projects: [
        {
          title: "Nikarit",
          summary: (
            <div>
              <p>
                El objetivo de Nikarit es contribuir a la mejora de las
                condiciones de vida de la población de Nikki, a través del
                empoderamiento de las mujeres productoras de{" "}
                <a href="http://www.nikarit.es/">manteca de karité.</a>
              </p>
            </div>
          ),
          description: (
            <div>
              <p>
                El objetivo de Nikarit es contribuir a la mejora de las
                condiciones de vida de la población de Nikki, a través del
                empoderamiento de las mujeres productoras de{" "}
                <a href="http://www.nikarit.es/">manteca de karité.</a>
              </p>

              <p>
                Para ello, se pretende fomentar el comercio justo de este
                producto para impulsar la economía familiar, el asociacionismo y
                la utilización de sus recursos para su propio beneficio. Nikarit
                nace del análisis de las necesidades de Nikki y a partir de
                ellas se hizo un estudio más profundo que dio lugar a este
                proyecto de emprendimiento social.
              </p>

              <p>
                Compramos manteca de karité directamente a tres cooperativas de
                mujeres (de Monnon, Sansí Gandó y Bessan Gourou), la importamos
                a España y la comercializamos. Con los beneficios de esta
                actividad financiamos proyectos de desarrollo en estas
                comunidades y en el resto de la comuna de Nikki.
              </p>
            </div>
          ),
          imageUrl: "/oan-web-005.jpg",
          url: "",
        },
        {
          title: "Apoyo a la emancipación de las mujeres en Nikki",
          summary: (
            <div>
              <p>
                Este es el primer proyecto ejecutado en su totalidad, desde la
                formulación, por el equipo de OAN à Nikki en colaboración con la
                ONG local Jedes Besen Sia.
              </p>
            </div>
          ),
          description: (
            <div>
              <p>
                Este es el primer proyecto ejecutado en su totalidad, desde la
                formulación, por el equipo de OAN à Nikki en colaboración con la
                ONG local Jedes Besen Sia. Se articula en torno a dos ejes de
                actuación principales:
              </p>
              <ul>
                <li>
                  La mejora de las capacidades de mujeres a través de las TIC.
                  Se contempla su formación en TIC y acceso a internet para
                  mejorar la gestión financiera.
                </li>

                <li>
                  Apoyo a actividades de emprendimiento generadoras de ingreso.
                  Parte de la creación de una red de mujeres, las cuales
                  presentarán sus proyectos para obtener un micro-crédito. Se
                  colabora con instituciones especializadas de la comuna.
                </li>
              </ul>
            </div>
          ),
          imageUrl: "/oan-web-006.jpg",
          url: "",
        },
      ],
    },
    {
      title: "Energía, agua e infraestructura",
      icon: <RiWaterFlashLine size={100} />,
      url: "/proyectos/energia",
      backgroundColor: "var(--energy-color)",
      backgroundColorLight: "var(--energy-color-light)",
      description: <div></div>,
      projects: [],
    },
  ];

  const projectCategories = PROJECT_CATEGORIES.map((category) => {
    const categoryStyle = {
      backgroundColor: category.backgroundColor,
      color: category.backgroundColorLight,
    };
    return (
      <div
        key={category.title}
        style={categoryStyle}
        className={styles.projectCategoryBox}
      >
        {category.icon}
        <h2 className={styles.projectCategoryName}>{category.title}</h2>
      </div>
    );
  });

  const projectCategorySections = PROJECT_CATEGORIES.map((p) => (
    <ProjectCategorySection key={p.title} projectCategory={p} />
  ));

  return (
    <main>
      <TitlePage title="Proyectos" backgroundImageUrl="/oan-web-017.jpg" />

      <section className={styles.projectCategoriesSection}>
        {projectCategories}
      </section>

      {projectCategorySections}
    </main>
  );
}
