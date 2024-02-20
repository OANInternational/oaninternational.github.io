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

export const AGRICULTURE_PROJECTS: IProjectPreview[] = [
  {
    title: "Nikarit",
    summary: (
      <div style={wrapper}>
        <p>
          Proyecto de emprendimiento social que busca{" "}
          <b>empoderar a mujeres productoras</b> de manteca de karité de Nikki
          para que a través de la venta de este producto puedan mejorar su vida
          y la de sus comunidades. Para ello, acompañamos a 6 cooperativas de
          mujeres, en el refuerzo de capacidades y en el acceso a herramientas
          para que puedan producir manteca de karité de alta calidad y mejoren
          su acceso al mercado nacional e internacional.
        </p>

        <p>
          La manteca de karité se transforma después en productos cosméticos que
          puedes comprar aquí{" "}
          <a style={link} href="https://nikarit.es/">
            (nikarit.es)
          </a>{" "}
          y con estos ingresos apoyamos la financiación del resto de proyectos.
        </p>

        <p>
          <a style={link} href="https://www.instagram.com/nikarit_karite/">
            instagram.com/nikarit_karite/
          </a>
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    url: "",
  },
  {
    title: "Huertas comunitarias",
    summary: (
      <div style={wrapper}>
        <p>
          Este Proyecto busca <b>apoyar a grupos de mujeres rurales</b> para que
          desarrollen huertas comunitarias en sus pueblos que les permitan tener
          acceso a alimentos variados, y poder vender los excedentes para
          conseguir una fuente de ingresos adicional.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    url: "",
  },
  {
    title: "Microcréditos para mujeres",
    summary: (
      <div style={wrapper}>
        <p>
          Este proyecto apoya a un grupo de mujeres emprendedoras en la ciudad
          de Nikki, facilitándoles el acceso a microcréditos con los que pueden
          impulsar sus pequeños negocios, y creado espacios de aprendizaje
          colectivo donde comparten experiencias, se apoyan para resolver sus
          problemas, se forman con personas especialistas, y ponen en marcha
          proyectos colectivos.
        </p>

        <p>
          En este proyecto también se apoya a estas mujeres para la celebracion
          de la jornada mundial de la mujer y de la jornada de lucha contra la
          violencia hacia las mujeres. Siendo estos dos momentos en los que
          ellas lideran la sensibilización en la comunidad sobre estos temas.
        </p>
      </div>
    ),
    imageUrl: "/oan-web-004.jpg",
    url: "",
  },
];
