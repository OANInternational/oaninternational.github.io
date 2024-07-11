import { BlogArticle } from "@/components/article-preview/article-preview.component";
import Image from "next/image";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
};

const image: CSSProperties = {
  width: "100%",
  height: "auto",
  alignItems: "center",
  objectFit: "contain",
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "progidem",
    imageUrl: "/oan-web-040.jpg",
    description: "Álvaro Pascual",
    author: "Álvaro Pascual",
    date: "27 junio 2024",
    link: "/news/progidem",
    title: "Proyecto de gestión integral de desechos domésticos (ProGIDéM)",
    content: (
      <div style={wrapper}>
        <p>
          Se inicia el proyecto de gestión integral de desechos domésticos
          (ProGIDéM)
        </p>

        <p>
          En el mes de junio de 2024, OAN International inicia el proyecto de
          gestión de residuos domésticos para intervenir en esta problemática de
          salud pública presente en toda la comuna de Nikki, con especial
          incidencia en el área urbana. Este proyecto se está desarrollando en
          colaboración con el Ayuntamiento de Nikki quien ha solicitado a OAN la
          ejecución de este proyecto dándonos para ello apoyo financiero.
        </p>

        <p>
          A pesar de los numerosos esfuerzos realizados por la administración y
          otras entidades en el pasado, el municipio de Nikki lucha aún por
          tener una estrategia coherente para la gestión sostenible e integrada
          de sus residuos domésticos. Se hace precisa una gestión medioambiental
          eficaz, especialmente en lo relativo a los residuos domésticos que
          constituyen un problema real de saneamiento básico, diseñando
          vertederos finales para la recepción de los residuos. Es por ello que
          sigue siendo el principal reto de la administración municipal. Cabe
          señalar que las operaciones de precolección y cobro del servicio se
          encuentran actualmente interrumpidas debido a la inexistencia de
          estructuras y personas involucradas en este proceso. Esta situación ha
          devenido en la aparición de vertederos improvisados descontrolados que
          han proliferado por todo el municipio de Nikki.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-039.jpg"
          alt=""
        />

        <p>
          Las anteriores experiencias en gestión de residuos han demostrado
          enormes deficiencias educativas entre la población en cuestiones
          relacionadas con la gestión de residuos, reflejo de actos incívicos.
          También hay que señalar que los hogares tienen dificultades para pagar
          las tasas municipales que permitirían mantener este servicio.
        </p>

        <p>
          Ante esta situación, que precisa de una solución urgente y definitiva,
          se inicia este proyecto entre OAN y el Ayuntamiento de Nikki con los
          objetivos de generar un sistema eficaz de recogida de residuos y
          sensibilizar a la población en la necesidad de una correcta de los
          espacios públicos.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-038.png"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "consejo-comunal",
    imageUrl: "/oan-web-036.jpg",
    description: "Álvaro Pascual",
    author: "Álvaro Pascual",
    date: "25 junio 2024",
    link: "/news/consejo-comunal",
    title:
      "Reunión del Consejo Comunal en torno al sector de alimentación y salud",
    content: (
      <div style={wrapper}>
        <p>
          Los días 18 y 19 de junio se llevó a cabo una sesión en el
          Ayuntamiento de Nikki sobre el Marco del Consejo Comunalen torno al
          sector de alimentación, salud y nutrición. Esta sesión está organizada
          por CASCADE ONG en colaboración con el Ayuntamiento de Nikki.
        </p>

        <p>
          En ella participan los gerentes departamentales y municipales de
          CASCADE ONG, el Secretario Ejecutivo y el Director de Planificación
          del ayuntamiento y los distintos actores que intervienen en el sector
          nutricional y alimentario en el municipio de Nikki, siendo OAN
          International invitada una vez más como entidad con acción en este
          ámbito.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-034.jpg"
          alt=""
        />

        <p>
          Se llevó a cabo una presentación de las actividades de los últimos
          tres meses y se debatió la ejecución de las recomendaciones fijadas
          durante la primera sesión del año 2024.
        </p>

        <p>
          Durante esta sesión se planificaron actividades para el próximo
          trimestre en forma de nuevas recomendaciones. Está previsto un mapeo
          de las estructuras y ONGs que intervienen en el municipio para
          facilitar las sinergias de acción pero también para permitir a las
          autoridades distinguir entre la intervención de los actores de
          diferentes ONG en el terreno municipal. También se nos presentó un
          estudio realizado por CASCADE sobre las prohibiciones alimentarias y
          las razones que de ellas se derivan, con el fin de reforzar la
          información y nociones nutricionales de todos los responsables en el
          campo.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-035.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "pre-mase",
    title:
      "Un paso más en el proyecto PreMase, se conforman los comités de seguimiento",
    imageUrl: "/oan-web-033.jpg",
    description: "Álvaro Pascual",
    date: "1 mayo 2024",
    link: "/news/pre-mase",
    author: "Álvaro Pascual",
    content: (
      <div style={wrapper}>
        <p>
          El 26 de abril de 2024 tuvo lugar en Nikki la formación de los
          miembros de los comités de seguimiento del proyecto PreMaSe.
        </p>

        <p>
          Tras el éxito logrado con la intervención en 10 pueblos durante las
          fase I y fase II del proyecto PreMase que trabaja para la erradicación
          de la malnutrición infantil en las zonas rurales de la comuna de
          Nikki, se da un nuevo paso con la creación de comités de seguimiento
          en todos esos pueblos.
        </p>

        <p>
          Un comité de seguimiento tiene como función monitorear la desnutrición
          infantil y promover una alimentación saludable en su pueblo,
          desempeñando un papel crucial en la mejora de la salud de la
          comunidad.
        </p>

        <p>
          Cada comité está compuesto por tres personas de la propia población,
          elegidas por su buen entendimiento con todos los vecinos. Su trabajo
          se basará en identificar y derivar los casos individuales de MAM
          (malnutrición aguda moderada) y MAS (malnutrición aguda severa), y
          también promoverán cambios a nivel comunitario para mejorar la salud
          nutricional general.
        </p>

        <p>
          La colaboración con las autoridades locales (relais comunitaires), los
          profesionales de la salud y la comunidad es esencial para el éxito de
          estas intervenciones. Estos voluntarios recibirán honorarios de
          motivación (1500F) y costos de comunicación (1500F), por comité,
          dependiendo del número de casos.
        </p>

        <p>Estos son los roles que desempeñarán:</p>

        <ul>
          <li>
            Identificación y registro de casos de desnutrición en niños de 6
            meses a 59 meses en colaboración con los relais comunitaires,
            centros de salud y comunidades locales.
          </li>
          <li>Evaluación y seguimiento individual</li>
          <li>
            Seguimiento de indicadores de salud: peso, talla, circunferencia del
            brazo e ingesta de alimentos, para evaluar el progreso y la eficacia
            de las intervenciones.
          </li>
          <li>Realizar evaluaciones periódicas de los niños desnutridos.</li>
          <li>
            Establecer planes de seguimiento individualizados y ajustados según
            sea necesario.
          </li>
          <li>
            Coordinación con el equipo de Nutrición del OAN para garantizar un
            tratamiento eficaz y un seguimiento médico adecuado (supervisión
            conjunta de un trabajador sanitario)
          </li>
          <li>
            Promover la lactancia materna y brindar apoyo a las madres
            lactantes. (sensibilización)
          </li>
          <li>
            Asesoramiento y apoyo psicosocial a las familias, para recordar los
            factores emocionales y sociales vinculados a la desnutrición.
          </li>
          <li>
            Fomentar la participación comunitaria en la toma de decisiones
            relacionadas con la salud y la nutrición.
          </li>
          <li>
            Red de apoyo social: Establecer y fortalecer redes de apoyo social
            para compartir recursos, información y experiencias entre familias.
          </li>
          <li>
            Monitorear los recursos alimentarios y evaluar la disponibilidad y
            accesibilidad de alimentos nutritivos en la comunidad.
          </li>
          <li>
            Realización de informes para registrar avances, desafíos y
            recomendaciones para mejorar las intervenciones.
          </li>
        </ul>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-033.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "conferencia-del-karite",
    title: `"Conferencia del Karité en Nikki"`,
    imageUrl: "/oan-web-004.jpg",
    description: "Almudena Vázquez",
    date: "30 julio 2023",
    link: "/news/conferencia-del-karite",
    author: "Almudena Vázquez",
    content: (
      <div style={wrapper}>
        <p>
          La demanda mundial de manteca de karité en las industrias alimentaria
          y cosmética no deja de crecer, lo que supone una gran oportunidad para
          los países productores y exportadores. En Benín se producen nueces de
          muy alta calidad y existe un gran potencial de producción, todavía sin
          explotar. A pesar de que el karité representa el tercer producto de
          exportación del país, después del algodón y el marañón, quedan varios
          desafíos por cumplir para conseguir que el karité beninés sea
          reconocido a nivel mundial, pues representa apenas el 2% de la
          producción mundial según estadísticas de la FAO.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-004.jpg"
          alt=""
        />

        <p>
          Bajo el lema `&quot;`Sembrando karité para cultivar el
          futuro\`&quot;`, Nikki acogió este pasado 6 de julio la primera
          edición de la Conferencia del Karité, un evento organizado por OAN
          Nikki en el que se reunieron representantes de los principales actores
          del sector del karité, así como las autoridades de esta región del
          norte de Benín, con el objetivo de poner en común el estado de la
          producción del karité a nivel nacional y los diferentes problemas que
          aparecen, así como conocer las diferentes acciones que se están
          llevando a cabo para proteger el árbol de karité y mejorar las
          condiciones de producción y por último proponer nuevas soluciones.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-005.jpg"
          alt=""
        />

        <p>
          La conferencia comenzó con la ponencia del representante del
          ayuntamiento de Nikki, Kora Sanni K. Nouhoun, para después dar paso a
          Kotchoni Razack (profesor en agroeconomía), Ayedehin Viassého Arnaud
          (coordinador de FMPK-Federación Nacional de Productoras de Karité de
          Benín) y Boddi Z. Soumaïla (representante de la Unidad de
          Participación Ciudadana). Por último, tuvo lugar la intervención de
          Zime Cyriaque (ATDA4/Nikki) junto a las mujeres procesadoras de
          manteca de karité en el municipio de Nikki.
        </p>

        <p>
          Durante los diferentes discursos, se destacó el grandísimo valor y
          potencial que tiene el karité para el desarrollo económico y social de
          Benín. Además se comentaron usos del karité menos comunes y que
          suponen una gran oportunidad. Por ejemplo, los desechos y las cáscaras
          de las nueces pueden emplearse para hacer carbón vegetal y para ceras
          en la industria cosmética y la pulpa de karité para crear una bebida
          alcohólica.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-006.jpg"
          alt=""
        />

        <p>
          En la mayoría de las ponencias se hizo especial hincapié en la
          importancia de preservar el árbol de karité, que se encuentra en vías
          de extinción a pesar de las medidas tomadas por el gobierno. Este
          árbol sólo está presente en 21 países, todos ellos subsaharianos. En
          Benín, sólo crece en el norte del país, lo que hace que la producción
          de la manteca sea una oportunidad única de crecimiento para las
          mujeres de las áreas rurales.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-010.jpg"
          alt=""
        />

        <p>
          Por otra parte, se expusieron los diversos problemas que enfrentan las
          mujeres productoras de la región, entre los que están la falta de
          equipos adecuados para mejorar el rendimiento, la necesidad de
          formación y aprendizaje de las mujeres de las zonas más rurales, la
          ausencia de organización interna de los grupos de productoras o la
          baja capacidad de autofinanciamiento.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-011.jpg"
          alt=""
        />

        <p>
          Durante la ponencia de Ayedehin Viassého Arnaud, se expuso el trabajo
          de la Federación Nacional de Productoras de Karité de Benín o FNPK,
          organización creada en 2020 con el objetivo de defender los intereses
          de las mujeres productoras y proteger el árbol de karité. Abarca 903
          aldeas y trabaja con 70.000 mujeres, pero todas las productoras de
          karité del país pueden acceder a ella.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-012.jpg"
          alt=""
        />

        <p>
          Actualmente se están tomando medidas para mejorar la situación de las
          mujeres productoras y preservar el árbol de karité, como proyectos de
          financiación con microcréditos o plantación de nuevos árboles. Para
          finalizar la conferencia se propuso continuar por estas vías y
          trabajar en nuevas soluciones. Entre las más interesantes se
          encuentran las propuestas de plantar, monitorear, proteger y mantener
          las plantas jóvenes de karité, hacer uso de la regeneración natural
          asistida, crear acuerdos de gestión locales, o trabajar en la
          sensibilización de la sociedad por medios como la radio.
        </p>
      </div>
    ),
  },
];
