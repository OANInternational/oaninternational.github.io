import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import Image from "next/image";
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

export const HEALTH_PROJECTS: IProjectPreview[] = [
  {
    title: `PReMASE (Proyecto de reducción de la malnutrición y mejora de la salud infantil)`,
    imageUrl: "/oan-web-004.jpg",
    summary: (
      <div style={wrapper}>
        <p>
          El proyecto{" "}
          <b>
            Reducción de la malnutrición y mejora de la salud infantil en Nikki
          </b>{" "}
          tiene como objetivo mejorar el estado de salud nutricional de los
          niños del área rural de la comuna de Nikki mediante el fortalecimiento
          de las capacidades familiares y comunitarias.
        </p>
      </div>
    ),
    description: (
      <div style={wrapper}>
        <p>
          El proyecto{" "}
          <b>
            Reducción de la malnutrición y mejora de la salud infantil en Nikki
          </b>{" "}
          tiene como objetivo mejorar el estado de salud nutricional de los
          niños del área rural de la comuna de Nikki mediante el fortalecimiento
          de las capacidades familiares y comunitarias.
        </p>

        <p>Para ello este proyecto lleva a cabo las siguientes actividades:</p>
        <ol style={list}>
          <li>
            Cribado de los niños de 6 meses a 5 años en los pueblos de
            intervención, detectando los casos de malnutrición moderada y severa
            y derivándolos a los centros de salud competentes.
          </li>
          <li>
            Seguimiento de los niños con malnutrición hasta su recuperación, y
            acompañamiento a las familias dándoles consejos sobre cómo mejorar
            la salud de los niños.
          </li>
          <li>
            Encuestas sobre los hábitos alimentarios, el acceso al agua, el
            higuiene, el acceso a la salud y las principales enfermedades en los
            pueblos de intervención, para conocer la realidad de cada localidad
            antes de desarrollar sensibilizaciones.
          </li>
          <li>
            Desarrollo de sensibilizaciones para los hombres y mujeres de las
            comunidades de intervención sobre cómo prevenir la malnutrición,
            cómo actuar frente a ella y otras temáticas relacionadas según la
            realidad de cada localidad.
          </li>
          <li>
            Desarrollo de sesiones de demostración culinaria en las comunidades
            en las que se preparan menús equilibrados con los alimentos
            disponibles.
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
];
