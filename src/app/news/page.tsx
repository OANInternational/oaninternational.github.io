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
      imageUrl: "/logos/3enred-logo.png",
      description: "",
      date: "18 junio 2019",
      link: "http://www.rtve.es/m/alacarta/audios/africa-hoy/africa-hoy-congreso-3enred-18-06-19/5286587/?media=rne&fbclid=IwAR0n_U2fPR9UThtWASLfg2-2J62nCNEiy1ZCUr8sReFyTnWGnHCQzeoOqNo",
    },
    {
      title: `OAN en "Hoy por hoy"`,
      imageUrl: "/logos/cadena-ser-2-logo.jpg",
      description: "",
      date: "5 febrero 2019",
      link: "https://www.oaninternational.org/uploads/3/7/7/0/37702469/hoy_por_hoy_madrid_-_cadena_ser.mp3",
    },
    {
      title: "Entrevista en Aragón Radio",
      imageUrl: "/logos/aragon-radio-logo.jpg",
      description: "Min. 36:10",
      date: "21 octubre 2017",
      link: "http://www.aragonradio.es/radio?reproducir=162807",
    },
    {
      title: "Aparición OAN en Cadena COPE",
      imageUrl: "/logos/cadena-cope-logo.jpg",
      description: "",
      date: "27 marzo 2017",
      link: "https://www.cope.es/emisoras/castilla-y-leon/valladolid-provincia/valladolid/la-manana-de-cope-en-valladolid/audios/herrera-cope-valladolid-2-20170327_170001",
    },
    {
      title: "Entrevista sobre proyecto Nikarit",
      imageUrl: "/logos/LogoRRSS cyl.gif",
      description: "",
      date: "28 junio 2016",
      link: "https://www.youtube.com/watch?v=qRfLLGs7Jho&feature=youtu.be",
    },
    {
      title: `"Compromiso con Nikki" en 5 minutos para la cooperación`,
      imageUrl: "/logos/RTVE-logo.png",
      description: "",
      date: "23 enero 2015",
      link: "http://www.rtve.es/alacarta/audios/5-minutos-para-la-cooperacion/podcast-5mc-benin/2960742/",
    },
  ];

  const CONGRESS_ARTICLES: Article[] = [
    {
      title: `"Congreso 3enRed"`,
      imageUrl: "/logos/khani-logo.png",
      description: "",
      date: "1 julio 2019",
      link: "https://fundacionkhanimambo.org/todas/blog/congreso-3enred/",
    },
    {
      title: `"Jóvenes cooperantes replantean el trabajo de las ONG y de la vieja cooperación al desarrollo"`,
      imageUrl: "/logos/diario-responsable-logo.png",
      description: "",
      date: "19 junio 2019",
      link: "https://diarioresponsable.com/opinion/27820-jovenes-que-estan-revolucionando-el-tercer-sector-el-continente-africano-y-su-gente-si-que-interesa",
    },
    {
      title: `"¿Para qué sirve la cooperación en África subsahariana?"`,
      imageUrl: "/logos/mundo-negro-logo.png",
      description: "",
      date: "17 junio 2019",
      link: "http://mundonegro.es/sirve-la-cooperacion-africa-subsahariana/?fbclid=IwAR2SwVEI87qKQR6gqxF9Ad5P9b6XT19AyB1Saz-8C7ppQJ7sqUqWlPfwa18",
    },
  ];

  const PRESS_ARTICLES: Article[] = [
    {
      title: `"Pozuelo entrega los Premios Iniciativa que reconocer el esfuerzo y el emprendimiento"`,
      imageUrl: "/logos/diario-de-pozuelo-logo.png",
      description: "",
      date: "29 noviembre 2022",
      link: "https://www.diariodepozuelo.es/111371-pozuelo-entrega-los-premios-iniciativa-para-reconocer-el-esfuerzo-y-el-espiritu-emprendedor",
    },
    {
      title: `"Mujeres valientes de Benín que bailan contra la violencia machista"`,
      imageUrl: "/logos/el-pais-logo.jpg",
      description: "",
      date: "24 diciembre 2021",
      link: "https://elpais.com/planeta-futuro/en-primera-linea/2021-12-24/mujeres-valientes-de-benin-que-bailan-contra-la-violencia-machista.html",
    },
    {
      title: `"La transformación de la manteca de karité, una economía con rostro de mujer"`,
      imageUrl: "/logos/diario-responsable-logo.png",
      description: "",
      date: "26 diciembre 2019",
      link: "https://diarioresponsable.com/noticias/28625-manteca-de-karite-una-economia-de-mujeres",
    },
    {
      title: `"Estudiantes de la UVA ahondan en sus trabajos fin de grado en la mejora de la salud materno-infantil en Benín"`,
      imageUrl: "/logos/la-vanguardia-logo.jpg",
      description: "",
      date: "22 septiembre 2019",
      link: "https://www.lavanguardia.com/vida/20160922/41496753488/estudiantes-de-la-uva-ahondan-en-sus-trabajos-fin-de-grado-en-la-mejora-de-la-salud-materno-infantil-en-benin.html",
    },
    {
      title: `"AUARA lanza #NombresConHistoria, con testimonios sobre cómo ha cambiado la vida de quienes acceden al agua potable"`,
      imageUrl: "/logos/la-vanguardia-logo.jpg",
      description: "",
      date: "6 diciembre 2018",
      link: "https://www.lavanguardia.com/vida/20181206/453396825596/auara-lanza-nombresconhistoria-con-testimonios-sobre-como-ha-cambiado-la-vida-de-quienes-acceden-al-agua-potable.html",
    },
    {
      title: `"La Fundación Rodolfo Benito Samaniego premia a Souad Benkaddour y OAN International"`,
      imageUrl: "/logos/la-luna-de-alcala-logo.png",
      description: "",
      date: "7 marzo 2018",
      link: "https://lalunadealcala.com/la-fundacion-rodolfo-benito-samaniego-premia-a-souad-benkaddour-y-oan-international/",
    },
    {
      title: `"Solidaridad universitaria con doble recompensa"`,
      imageUrl: "/logos/el-mundo-diario-valladolid-logo.jpg",
      description: "",
      date: "11 enero 2018",
      link: "https://diariodevalladolid.elmundo.es/articulo/valladolid/solidaridad-universtaria-doble-recompensa/20180111122630241952.html",
    },
    {
      title: `"El desarrollo sostenible de África, en manos de universitarios españoles"`,
      imageUrl: "/logos/el-mundo-logo.jpg",
      description: "",
      date: "15 octubre 2017",
      link: "https://www.elmundo.es/sociedad/2017/10/15/59e242deca4741af078b4648.html",
    },
    {
      title: `"Un autoclave solar para un hospital en Benín, Premio Solidaridad Estudiantil de la Fundación Veolia"`,
      imageUrl: "/logos/enery-news-logo.jpg",
      description: "",
      date: "27 julio 2017",
      link: "https://www.energynews.es/un-autoclave-solar-premio-solidaridad-estudiantil-de-la-fundacion-veolia/",
    },
    {
      title: `"Un proyecto español se lleva el premio del público en los "Premios Solidaridad Estudiantil" de la Fundación Veolia"`,
      imageUrl: "/logos/ogimage.jpg",
      description: "",
      date: "11 julio 2017",
      link: "https://www.retema.es/noticia/un-proyecto-espanol-se-lleva-el-premio-del-publico-en-los-premios-solidaridad-estudia-aJgIG",
    },
    {
      title: `"Un horno solar de bajo coste ideado en UVA, premiado y rumbo a África"`,
      imageUrl: "/logos/el-norte-de-castilla-logo.jpg",
      description: "",
      date: "21 junio 2017",
      link: "https://www.elnortedecastilla.es/valladolid/horno-solar-bajo-20170621172658-nt.html",
    },
    {
      title: `"¿Misioneros y ONG pueden trabajar unidos?"`,
      imageUrl: "/logos/el-pais-logo.jpg",
      description: "",
      date: "28 abril 2017",
      link: "https://elpais.com/elpais/2017/04/07/africa_no_es_un_pais/1491552240_287798.html",
    },
    {
      title: `"El proyecto científico de cooperación de OAN International se acerca a los escolares"`,
      imageUrl: "/logos/agencia-iberoamericana-logo.jpg",
      description: "",
      date: "8 noviembre 2016",
      link: "https://www.dicyt.com/viewNews.php?newsId=36461",
    },
    {
      title: `"El voluntariado sanitario, una experiencia hacia la humanización"`,
      imageUrl: "/logos/gaceta-medica-logo.jpg",
      description: "",
      date: "21 octubre 2016",
      link: "https://gacetamedica.com/politica/el-voluntariado-sanitario-una-experiencia-hacia-la-humanizacion-MA561925/",
    },
    {
      title: `"Trabajos Fin de Grado para mejorar la salud materno-infantil en Benín"`,
      imageUrl: "/logos/europa-press-logo.png",
      description: "",
      date: "22 septiembre 2016",
      link: "https://www.europapress.es/castilla-y-leon/noticia-estudiantes-uva-ahondan-trabajos-fin-grado-mejora-salud-materno-infantil-benin-20160922134719.html",
    },
    {
      title: `"Estudiantes de la UVA ahondan en sus Trabajos Fin de Grado en la mejora de la salud materno-infantil en Benín"`,
      imageUrl: "/logos/20-minutos-logo.png",
      description: "",
      date: "22 septiembre 2016",
      link: "https://www.20minutos.es/noticia/2844448/0/estudiantes-uva-ahondan-sus-trabajos-fin-grado-mejora-salud-materno-infantil-benin/",
    },
    {
      title: `"Algo más que estudiar"`,
      imageUrl: "/logos/abc-logo.jpg",
      description: "",
      date: "18 febrero 2016",
      link: "https://www.oaninternational.org/uploads/3/7/7/0/37702469/untitledj.pdf",
    },
    {
      title: `"OAN International. Una pequeña ONG de universitarios españoles"`,
      imageUrl: "/logos/la-vanguardia-logo.jpg",
      description: "",
      date: "25 agosto 2015",
      link: "https://www.oaninternational.org/uploads/3/7/7/0/37702469/captura_de_pantalla_2016-02-23_a_las_8.48.04.png",
    },
  ];

  const radioArticles = RADIO_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
  ));

  const congressArticles = CONGRESS_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
  ));

  const pressArticles = PRESS_ARTICLES.map((article) => (
    <ArticlePreview key={article.title} article={article} />
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
