import styles from "./page.module.css";

import TitleSection from "@/components/title-section/title-section.component";
import ArticlePreview, {
  Article,
} from "@/components/article-preview/article-preview.component";
import TitlePage from "@/components/title-page/title-page.component";

export default function News() {
  const RADIO_ARTICLES: Article[] = [
    {
      title: "3enRed en África hoy",
      imageUrl: "/oan-web-013.jpg",
      description: "",
      date: "18 junio 2019",
      link: "http://www.rtve.es/m/alacarta/audios/africa-hoy/africa-hoy-congreso-3enred-18-06-19/5286587/?media=rne&fbclid=IwAR0n_U2fPR9UThtWASLfg2-2J62nCNEiy1ZCUr8sReFyTnWGnHCQzeoOqNo",
    },

    {
      title: `OAN en "Hoy por hoy"`,
      imageUrl: "/oan-web-012.jpg",
      description: "",
      date: "5 febrero 2019",
      link: "https://www.oaninternational.org/uploads/3/7/7/0/37702469/hoy_por_hoy_madrid_-_cadena_ser.mp3",
    },
    {
      title: "Entrevista en Aragón Radio",
      imageUrl: "/oan-web-008.jpg",
      description: "Min. 36:10",
      date: "21 octubre 2017",
      link: "http://www.aragonradio.es/radio?reproducir=162807",
    },
    {
      title: "Aparición OAN en Cadena COPE",
      imageUrl: "/oan-web-011.jpg",
      description: "",
      date: "27 marzo 2017",
      link: "https://www.cope.es/emisoras/castilla-y-leon/valladolid-provincia/valladolid/la-manana-de-cope-en-valladolid/audios/herrera-cope-valladolid-2-20170327_170001",
    },
    {
      title: "Entrevista sobre proyecto Nikarit",
      imageUrl: "/oan-web-009.jpg",
      description: "",
      date: "28 junio 2016",
      link: "https://www.youtube.com/watch?v=qRfLLGs7Jho&feature=youtu.be",
    },
    {
      title: `"Compromiso con Nikki" en 5 minutos para la cooperación`,
      imageUrl: "/oan-web-010.jpg",
      description: "",
      date: "23 enero 2015",
      link: "http://www.rtve.es/alacarta/audios/5-minutos-para-la-cooperacion/podcast-5mc-benin/2960742/",
    },
  ];

  const CONGRESS_ARTICLES: Article[] = [
    {
      title: `"Congreso 3enRed"`,
      imageUrl: "/oan-web-012.jpg",
      description: "",
      date: "1 julio 2019",
      link: "https://fundacionkhanimambo.org/todas/blog/congreso-3enred/",
    },
    {
      title: `"Jóvenes cooperantes replantean el trabajo de las ONG y de la vieja cooperación al desarrollo"`,
      imageUrl: "/oan-web-012.jpg",
      description: "",
      date: "19 junio 2019",
      link: "https://diarioresponsable.com/opinion/27820-jovenes-que-estan-revolucionando-el-tercer-sector-el-continente-africano-y-su-gente-si-que-interesa",
    },
    {
      title: `"¿Para qué sirve la cooperación en África subsahariana?"`,
      imageUrl: "/oan-web-011.jpg",
      description: "",
      date: "17 junio 2019",
      link: "http://mundonegro.es/sirve-la-cooperacion-africa-subsahariana/?fbclid=IwAR2SwVEI87qKQR6gqxF9Ad5P9b6XT19AyB1Saz-8C7ppQJ7sqUqWlPfwa18",
    },
  ];

  const PRESS_ARTICLES: Article[] = [
    {
      title: `"Pozuelo entrega los Premios Iniciativa que reconocer el esfuerzo y el emprendimiento"`,
      imageUrl: "/oan-web-015.jpg",
      description: "",
      date: "29 noviembre 2022",
      link: "https://www.diariodepozuelo.es/111371-pozuelo-entrega-los-premios-iniciativa-para-reconocer-el-esfuerzo-y-el-espiritu-emprendedor",
    },
    {
      title: `"Mujeres valientes de Benín que bailan contra la violencia machista"`,
      imageUrl: "/oan-web-016.jpg",
      description: "",
      date: "24 diciembre 2021",
      link: "https://elpais.com/planeta-futuro/en-primera-linea/2021-12-24/mujeres-valientes-de-benin-que-bailan-contra-la-violencia-machista.html",
    },
    {
      title: `"La transformación de la manteca de karité, una economía con rostro de mujer"`,
      imageUrl: "/oan-web-017.jpg",
      description: "",
      date: "26 diciembre 2019",
      link: "https://diarioresponsable.com/noticias/28625-manteca-de-karite-una-economia-de-mujeres",
    },
    {
      title: `"La Fundación Rodolfo Benito Samaniego premia a Souad Benkaddour y OAN International"`,
      imageUrl: "/oan-web-019.jpg",
      description: "",
      date: "7 marzo 2018",
      link: "https://lalunadealcala.com/la-fundacion-rodolfo-benito-samaniego-premia-a-souad-benkaddour-y-oan-international/",
    },
    {
      title: `"AUARA lanza #NombresConHistoria, con testimonios sobre cómo ha cambiado la vida de quienes acceden al agua potable"`,
      imageUrl: "/oan-web-020.jpg",
      description: "",
      date: "6 diciembre 2018",
      link: "https://www.lavanguardia.com/vida/20181206/453396825596/auara-lanza-nombresconhistoria-con-testimonios-sobre-como-ha-cambiado-la-vida-de-quienes-acceden-al-agua-potable.html",
    },
    {
      title: ``,
      imageUrl: "/oan-web-020.jpg",
      description: "",
      date: "",
      link: "",
    },
    {
      title: ``,
      imageUrl: "/oan-web-020.jpg",
      description: "",
      date: "",
      link: "",
    },
    {
      title: ``,
      imageUrl: "/oan-web-020.jpg",
      description: "",
      date: "",
      link: "",
    },
  ];

  const radioArticles = RADIO_ARTICLES.map((article) => (
    <ArticlePreview
      key={article.title}
      imageUrl={article.imageUrl}
      title={article.title}
      description={article.description}
      date={article.date}
    />
  ));

  const congressArticles = CONGRESS_ARTICLES.map((article) => (
    <ArticlePreview
      key={article.title}
      imageUrl={article.imageUrl}
      title={article.title}
      description={article.description}
      date={article.date}
    />
  ));

  const pressArticles = PRESS_ARTICLES.map((article) => (
    <ArticlePreview
      key={article.title}
      imageUrl={article.imageUrl}
      title={article.title}
      description={article.description}
      date={article.date}
    />
  ));

  return (
    <main>
      <TitlePage
        title="Actualidad"
        backgroundImageUrl="/oan-web-009.jpg"
        subTitle="Artículos, entrevistas y apariciones en los medios de OAN International"
      />

      <section className={styles.articleSection}>
        <TitleSection title="Prensa Escrita y Digital" />

        {pressArticles}
      </section>

      <section className={styles.articleSection}>
        <TitleSection title="Congreso 3enRed" />

        {congressArticles}
      </section>

      <section className={styles.articleSection}>
        <TitleSection title="Radio" />

        {radioArticles}
      </section>
    </main>
  );
}
