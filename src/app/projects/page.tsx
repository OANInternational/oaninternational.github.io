"use client";

import Image from "next/image";

import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";

import { TbHealthRecognition, TbPlant } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { RiWaterFlashLine } from "react-icons/ri";

import ProjectCategorySection, {
  IProjectCategory,
} from "@/components/project-category-section/project-category-section.component";
import { useRef } from "react";

export default function Projects() {
  const PROJECT_CATEGORIES: IProjectCategory[] = [
    {
      ref: useRef(),
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
      ref: useRef(),
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

              <Image
                width={200}
                height={200}
                alt="project image"
                src="/oan-web-004.jpg"
              />
            </div>
          ),
          url: "",
        },
      ],
    },
    {
      ref: useRef(),
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
      ref: useRef(),
      title: "Energía, agua e infraestructura",
      icon: <RiWaterFlashLine size={100} />,
      url: "/proyectos/energia",
      backgroundColor: "var(--energy-color)",
      backgroundColorLight: "var(--energy-color-light)",
      description: (
        <div>
          <p className={styles.marginBottom}>
            Los principales servicios involucrados en los servicios básicos son
            el agua, el saneamiento y la gestión de residuos. Según la OMS, en
            2018 más de 1.000 millones de personas en el mundo no tienen acceso
            a agua potable, y 2.600 millones carecen de un saneamiento adecuado.
            En concreto, se estima que 660 millones de africanos no tienen
            acceso a servicios de saneamiento adecuado, y 173 millones todavía
            practican la defecación al aire libre (WWC, 2018).
          </p>
          <p className={styles.marginBottom}>
            El agua y el saneamiento son fundamentales para el desarrollo y el
            bienestar humano, y están reconocidos como derechos humanos por la
            Asamblea General de las Naciones Unidas (2010). Sin embargo, también
            son fundamentales para el buen desarrollo de otros sectores, como la
            nutrición adecuada, la educación y la erradicación de la pobreza .
          </p>

          <p className={styles.marginBottom}>
            El agua es uno de los recursos naturales fundamentales y en la
            actualidad no existe duda alguna de la importancia tanto de la
            cantidad como de la calidad de la misma para el bienestar y el
            desarrollo humano. Se necesitan entre 50 y 100 litros/persona
            diarios para cubrir cómodamente todas las necesidades de consumo e
            higiene, estando el mínimo necesario alrededor de los 25. En 2010,
            la Asamblea General de las Naciones Unidas reconoció explícitamente
            el derecho humano al abastecimiento de agua dulce. Todas las
            personas tienen derecho a disponer de forma continuada de agua
            suficiente, salubre, físicamente accesible, asequible y de una
            calidad aceptable, para uso personal y doméstico (ONU, 2010). Se
            trata de un recurso abundante y renovable, sin embargo, aún en la
            actualidad existe una gran cantidad de personas que no disponen de
            acceso suficiente a agua apropiada para su consumo.
          </p>

          <p className={styles.marginBottom}>
            Los datos revelan que la mayor parte de la población sin acceso a
            agua potable en el entorno mundial se sitúa en África subsahariana,
            con 319 millones de personas, de las que 8 de cada 10 viven en zonas
            rurales con escaso acceso a nuevos recursos.
          </p>

          <p className={styles.marginBottom}>
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
            Nigeria y Costa de Marfil y los productos petrolíferos consumidos
            son, en su totalidad, de origen externo. Esta situación de
            dependencia tan elevada hace a Benín un país muy vulnerable a
            cualquier tipo de fluctuación que sufran sus países vecinos. Debido
            a ello, el consumo de energía en este país es, aproximadamente, la
            mitad del de los países de África Subsahariana y menos de una cuarta
            parte de la media mundial. Estos datos se ven reflejados en la tasa
            de electrificación, que supone solamente un 27 %, siendo el de las
            zonas urbanas un 54 % y el de las rurales un 4 %.
          </p>
        </div>
      ),
      projects: [
        {
          title: "Proyecto integral de perforación y construcción de bombas",
          summary: (
            <div>
              <p>
                Esta actividad es el resultado de una colaboración entre OAN
                International y AUARA. Este proyecto está dentro de nuestro eje
                estratégico de acceso al agua potable en la comunidad de Nikki.
              </p>
              <p>
                Tiene por objetivo la instalación de una bomba hidráulica
                Vergnet en un pueblo de la comuna de Nikki, Bio Sika Kparou. Su
                propósito es dar acceso al agua potable y como consecuencia
                reducir el número de enfermedades relacionadas con el consumo de
                agua contaminada.
              </p>
            </div>
          ),
          description: (
            <div>
              <p>
                Esta actividad es el resultado de una colaboración entre OAN
                International y AUARA. Este proyecto está dentro de nuestro eje
                estratégico de acceso al agua potable en la comunidad de Nikki.
              </p>
              <p>
                Tiene por objetivo la instalación de una bomba hidráulica
                Vergnet en un pueblo de la comuna de Nikki, Bio Sika Kparou. Su
                propósito es dar acceso al agua potable y como consecuencia
                reducir el número de enfermedades relacionadas con el consumo de
                agua contaminada.
              </p>
              <p>
                En la primera fase del proyecto se realizaron sensibilizaciones
                para el buen uso del agua potable segura y también relacionadas
                con la higiene. Además de ello, se ha creado un comité
                responsable del mantenimiento del pozo.
              </p>
              <p>
                En una segunda fase se realizó la perforación del terreno y la
                instalación del pozo con bomba de pie. Tras esto, se procedió al
                acondicionamiento del entorno de la bomba mediante la
                construcción de la estructura de hormigón que permite el desagüe
                que rodea al pozo.
              </p>
              <p>
                Por último, se pretende evaluar y analizar el impacto que una
                bomba de estas características tiene en una población. Además de
                las consecuencias directas, también se quiere analizar si
                mejoran otros problemas relacionados con el acceso a agua de
                calidad, que no forzosamente pertenecen al ámbito sanitario.
              </p>
            </div>
          ),
          imageUrl: "/oan-web-006.jpg",
          url: "",
        },
        {
          title: "Red de reparadores de bombas",
          summary: (
            <div>
              <p>
                Desde el comienzo de la actividad de OAN International en Nikki,
                se observó que una de las principales necesidades de la
                población era el acceso a agua limpia y de calidad,
                especialmente durante la época seca.
              </p>

              <p>
                Gracias al proyecto, se han reparado entre 130 y 150 bombas, un
                tercio del total de la Comuna de Nikki. Esto ha garantizado el
                acceso a agua a unas 60.000 personas.
              </p>
            </div>
          ),
          description: (
            <div>
              <p>
                Desde el comienzo de la actividad de OAN International en Nikki,
                se observó que una de las principales necesidades de la
                población era el acceso a agua limpia y de calidad,
                especialmente durante la época seca.
              </p>
              <p>
                En el año 2016, el proyecto comenzó la ejecución de dos acciones
                en paralelo: la formación teórica y práctica de una veintena de
                mecánicos locales para que las bombas de la comuna pudieran
                repararse y la creación de una boutique para poner en venta las
                piezas de repuesto necesarias y garantizar el stock. Desde
                entonces, se está trabajando con las autoridades y población
                locales para garantizar el acceso de todos los pueblos a los
                servicios de los reparadores y para mantener la boutique
                funcionando.
              </p>
              <p>
                Gracias al proyecto, se han reparado entre 130 y 150 bombas, un
                tercio del total de la Comuna de Nikki. Esto ha garantizado el
                acceso a agua a unas 60.000 personas.
              </p>
            </div>
          ),
          imageUrl: "/oan-web-012.jpg",
          url: "",
        },
        {
          title: "AguApp",
          summary: (
            <div>
              <p>
                El proyecto persigue conectar entre sí a los diferentes actores
                que tienen un papel en el aprovisionamiento de agua en la comuna
                de Nikki. Además de ello, busca, a través de las nuevas
                tecnologías (como el análisis de datos, machine learning o big
                data) hacer predicciones sobre la rotura de las infraestructuras
                hidráulicas de Nikki.
              </p>
            </div>
          ),
          description: (
            <div>
              <p>
                El proyecto persigue conectar entre sí a los diferentes actores
                que tienen un papel en el aprovisionamiento de agua en la comuna
                de Nikki. Además de ello, busca, a través de las nuevas
                tecnologías (como el análisis de datos, machine learning o big
                data) hacer predicciones sobre la rotura de las infraestructuras
                hidráulicas de Nikki.
              </p>
              <p>
                Esto además permite a los actores tener mejor información para
                el desarrollo de políticas públicas, mejorar el acceso final al
                agua de las personas (un 60 % de las bombas hidráulicas de la
                región estaban rotas o en mal funcionamiento) y sobre todo,
                contribuir a la mejora de la salud de sus habitantes. El
                proyecto tiene la ambición, también, de ayudar a otras
                comunidades y otras ONG.
              </p>
            </div>
          ),
          imageUrl: "/oan-web-009.jpg",
          url: "",
        },
        {
          title: "Investigación estratégica",
          summary: (
            <div>
              <p>
                En 2018 se comenzó una nueva investigación estratégica para
                identificar otras problemáticas que afectan a la población de
                Nikki. En paralelo, se están realizando tres trabajos de fin de
                grado sobre estas líneas de investigación.
              </p>
            </div>
          ),
          description: (
            <div>
              <p>
                En 2018 se comenzó una nueva investigación estratégica para
                identificar otras problemáticas que afectan a la población de
                Nikki. En paralelo, se están realizando tres trabajos de fin de
                grado sobre estas líneas de investigación.
              </p>
              <p>
                El principal objetivo de la investigación es conocer las
                iniciativas locales, tanto en el ámbito local como estatal, los
                actores más importantes en estos campos y estudiar cuál es la
                manera más efectiva en la que OAN International puede apoyar en
                estos aspectos. Las principales líneas de investigación son:
              </p>
              <ul>
                <li>Acceso a energía y electrificación</li>
                <li>Gestión de residuos</li>
                <li>Biomasa</li>
                <li>Saneamiento</li>
                <li>Almacenamiento de aguas</li>
              </ul>
            </div>
          ),
          imageUrl: "/oan-web-008.jpg",
          url: "",
        },
      ],
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
        onClick={() => {
          (category.ref.current as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }}
      >
        {category.icon}
        <h2 className={styles.projectCategoryName}>{category.title}</h2>
      </div>
    );
  });

  const projectCategorySections = PROJECT_CATEGORIES.map((p) => (
    <div ref={p.ref} key={p.title}>
      <ProjectCategorySection projectCategory={p} />
    </div>
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
