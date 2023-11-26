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
          Bajo el lema "Sembrando karité para cultivar el futuro", Nikki acogió
          este pasado 6 de julio la primera edición de la Conferencia del
          Karité, un evento organizado por OAN Nikki en el que se reunieron
          representantes de los principales actores del sector del karité, así
          como las autoridades de esta región del norte de Benín, con el
          objetivo de poner en común el estado de la producción del karité a
          nivel nacional y los diferentes problemas que aparecen, así como
          conocer las diferentes acciones que se están llevando a cabo para
          proteger el árbol de karité y mejorar las condiciones de producción y
          por último proponer nuevas soluciones.
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
