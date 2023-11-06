import { IProjectPreview } from "@/components/project-preview/project-preview.component";
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

export const ENGINEERING_PROJECTS: IProjectPreview[] = [
  {
    title: "Proyecto integral de perforación y construcción de bombas",
    summary: (
      <div style={wrapper}>
        <p>
          Esta actividad es el resultado de una colaboración entre OAN
          International y AUARA. Este proyecto está dentro de nuestro eje
          estratégico de acceso al agua potable en la comunidad de Nikki.
        </p>
        <p>
          Tiene por objetivo la instalación de una bomba hidráulica Vergnet en
          un pueblo de la comuna de Nikki, Bio Sika Kparou. Su propósito es dar
          acceso al agua potable y como consecuencia reducir el número de
          enfermedades relacionadas con el consumo de agua contaminada.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          Esta actividad es el resultado de una colaboración entre OAN
          International y AUARA. Este proyecto está dentro de nuestro eje
          estratégico de acceso al agua potable en la comunidad de Nikki.
        </p>
        <p>
          Tiene por objetivo la instalación de una bomba hidráulica Vergnet en
          un pueblo de la comuna de Nikki, Bio Sika Kparou. Su propósito es dar
          acceso al agua potable y como consecuencia reducir el número de
          enfermedades relacionadas con el consumo de agua contaminada.
        </p>
        <p>
          En la primera fase del proyecto se realizaron sensibilizaciones para
          el buen uso del agua potable segura y también relacionadas con la
          higiene. Además de ello, se ha creado un comité responsable del
          mantenimiento del pozo.
        </p>
        <p>
          En una segunda fase se realizó la perforación del terreno y la
          instalación del pozo con bomba de pie. Tras esto, se procedió al
          acondicionamiento del entorno de la bomba mediante la construcción de
          la estructura de hormigón que permite el desagüe que rodea al pozo.
        </p>
        <p>
          Por último, se pretende evaluar y analizar el impacto que una bomba de
          estas características tiene en una población. Además de las
          consecuencias directas, también se quiere analizar si mejoran otros
          problemas relacionados con el acceso a agua de calidad, que no
          forzosamente pertenecen al ámbito sanitario.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-006.jpg",
    url: "",
  },
  {
    title: "Red de reparadores de bombas",
    summary: (
      <div style={wrapper}>
        <p>
          Desde el comienzo de la actividad de OAN International en Nikki, se
          observó que una de las principales necesidades de la población era el
          acceso a agua limpia y de calidad, especialmente durante la época
          seca.
        </p>

        <p>
          Gracias al proyecto, se han reparado entre 130 y 150 bombas, un tercio
          del total de la Comuna de Nikki. Esto ha garantizado el acceso a agua
          a unas 60.000 personas.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          Desde el comienzo de la actividad de OAN International en Nikki, se
          observó que una de las principales necesidades de la población era el
          acceso a agua limpia y de calidad, especialmente durante la época
          seca.
        </p>
        <p>
          En el año 2016, el proyecto comenzó la ejecución de dos acciones en
          paralelo: la formación teórica y práctica de una veintena de mecánicos
          locales para que las bombas de la comuna pudieran repararse y la
          creación de una boutique para poner en venta las piezas de repuesto
          necesarias y garantizar el stock. Desde entonces, se está trabajando
          con las autoridades y población locales para garantizar el acceso de
          todos los pueblos a los servicios de los reparadores y para mantener
          la boutique funcionando.
        </p>
        <p>
          Gracias al proyecto, se han reparado entre 130 y 150 bombas, un tercio
          del total de la Comuna de Nikki. Esto ha garantizado el acceso a agua
          a unas 60.000 personas.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-012.jpg",
    url: "",
  },
  {
    title: "AguApp",
    summary: (
      <div style={wrapper}>
        <p>
          El proyecto persigue conectar entre sí a los diferentes actores que
          tienen un papel en el aprovisionamiento de agua en la comuna de Nikki.
          Además de ello, busca, a través de las nuevas tecnologías (como el
          análisis de datos, machine learning o big data) hacer predicciones
          sobre la rotura de las infraestructuras hidráulicas de Nikki.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          El proyecto persigue conectar entre sí a los diferentes actores que
          tienen un papel en el aprovisionamiento de agua en la comuna de Nikki.
          Además de ello, busca, a través de las nuevas tecnologías (como el
          análisis de datos, machine learning o big data) hacer predicciones
          sobre la rotura de las infraestructuras hidráulicas de Nikki.
        </p>
        <p>
          Esto además permite a los actores tener mejor información para el
          desarrollo de políticas públicas, mejorar el acceso final al agua de
          las personas (un 60 % de las bombas hidráulicas de la región estaban
          rotas o en mal funcionamiento) y sobre todo, contribuir a la mejora de
          la salud de sus habitantes. El proyecto tiene la ambición, también, de
          ayudar a otras comunidades y otras ONG.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-009.jpg",
    url: "",
  },
  {
    title: "Investigación estratégica",
    summary: (
      <div style={wrapper}>
        <p>
          En 2018 se comenzó una nueva investigación estratégica para
          identificar otras problemáticas que afectan a la población de Nikki.
          En paralelo, se están realizando tres trabajos de fin de grado sobre
          estas líneas de investigación.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          En 2018 se comenzó una nueva investigación estratégica para
          identificar otras problemáticas que afectan a la población de Nikki.
          En paralelo, se están realizando tres trabajos de fin de grado sobre
          estas líneas de investigación.
        </p>
        <p>
          El principal objetivo de la investigación es conocer las iniciativas
          locales, tanto en el ámbito local como estatal, los actores más
          importantes en estos campos y estudiar cuál es la manera más efectiva
          en la que OAN International puede apoyar en estos aspectos. Las
          principales líneas de investigación son:
        </p>
        <ul style={list}>
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
];
