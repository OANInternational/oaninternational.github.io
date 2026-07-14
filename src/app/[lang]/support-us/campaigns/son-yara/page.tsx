import { ReactNode } from "react";
import { notFound } from "next/navigation";
import TitleSection from "@/components/title-section/title-section.component";
import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";
import Image from "next/image";
import { isLocale, Locale } from "@/i18n/config";

interface SonYaraContent {
  title: string;
  subTitle: string;
  intro1: string;
  intro2: string;
  watchButton: string;
  aboutTitle: string;
  about: ReactNode[];
  whyTitle: string;
  why1: string;
  why2: string;
}

const content: Record<Locale, SonYaraContent> = {
  es: {
    title: "Son Yara",
    subTitle:
      "Un documental de OAN International sobre el trabajo de la mujer en Nikki y su rol en la comunidad",
    intro1:
      "Sale el sol en Nikki, al norte de Benín. En un viaje del pasado al presente, del amanecer al atardecer, las palabras de mujeres de la comuna se convierten en las protagonistas de una historia de superación y lucha por sus derechos. Palabras que nacen de lo personal para reflejarse en lo universal.",
    intro2:
      "A través de entrevistas a agentes locales y relatos de vida, este cortometraje documental concebido por OAN Internacional profundiza en el tema del trabajo de la mujer y su rol en la comunidad.",
    watchButton: "Ver Documental",
    aboutTitle: "Sobre el tema de la obra",
    about: [
      "Las normas y tradiciones sociales todavía crean hoy una clara división en el reparto del trabajo en función del género. Según el Informe sobre Desarrollo Humano de 2015, el número de hombres es casi el doble que el de mujeres en el trabajo remunerado y el de mujeres el triple que el de hombres en el no remunerado.",
      "Las tareas domésticas y el trabajo de cuidados resultan fundamentales para el equilibrio y bienestar de las sociedades humanas. Sin embargo, la distribución actual de responsabilidades limita las oportunidades y posibilidades de elección de las mujeres y, en última instancia, su desarrollo y el de sus comunidades.",
      "En OAN International colaboramos en la comuna de Nikki con mujeres a través de proyectos multidisciplinares para apoyar su empoderamiento y la lucha por sus derechos.",
      "En concreto, una importante línea de actuación es precisamente impulsar iniciativas que potencien su autonomía económica como reflejan los proyectos de Nikarit o Microcréditos. Son yara busca así sumarse a este objetivo, y hacerlo gracias al cine y a la educación al desarrollo.",
    ],
    whyTitle: "¿Por qué un documental?",
    why1: "Además de las iniciativas puestas en marcha en terreno como parte de nuestro trabajo en cooperación, desde OAN International consideramos que la educación al desarrollo juega también un papel fundamental en la construcción del cambio en nuestras sociedades. Por medio de eventos, formaciones y acciones de comunicación trabajamos por generar un espíritu crítico que invite a la reflexión sobre el origen y la naturaleza de las relaciones Norte-Sur.",
    why2: "Son yara busca así aprovechar el valor creativo y transformador del arte en general, y del cine en particular, para compartir las voces e historias de las mujeres de Nikki con las audiencias en España, acercar sus realidades y promover la creación de conexiones y paralelismos con nuestra propia experiencia.",
  },
  en: {
    title: "Son Yara",
    subTitle:
      "A documentary by OAN International about women's work in Nikki and their role in the community",
    intro1:
      "The sun rises in Nikki, in northern Benin. On a journey from the past to the present, from dawn to dusk, the words of women from the commune become the protagonists of a story of resilience and the fight for their rights. Words born from the personal to be reflected in the universal.",
    intro2:
      "Through interviews with local agents and life stories, this short documentary conceived by OAN International explores the subject of women's work and their role in the community.",
    watchButton: "Watch the Documentary",
    aboutTitle: "About the subject of the film",
    about: [
      "Social norms and traditions still create a clear division in the distribution of work by gender today. According to the 2015 Human Development Report, the number of men is almost double that of women in paid work, and the number of women is triple that of men in unpaid work.",
      "Domestic tasks and care work are fundamental to the balance and well-being of human societies. However, the current distribution of responsibilities limits women's opportunities and choices and, ultimately, their development and that of their communities.",
      "At OAN International we work in the commune of Nikki with women through multidisciplinary projects to support their empowerment and the fight for their rights.",
      "In particular, one important line of action is precisely to drive initiatives that strengthen their economic autonomy, as reflected in the Nikarit and Microcredit projects. Son Yara thus aims to contribute to this goal through film and development education.",
    ],
    whyTitle: "Why a documentary?",
    why1: "Beyond the initiatives launched on the ground as part of our cooperation work, at OAN International we believe that development education also plays a fundamental role in building change in our societies. Through events, training and communication activities we work to foster a critical spirit that invites reflection on the origin and nature of North-South relations.",
    why2: "Son Yara thus seeks to harness the creative and transformative value of art in general, and film in particular, to share the voices and stories of the women of Nikki with audiences in Spain, bring their realities closer and encourage connections and parallels with our own experience.",
  },
};

const pictures = [
  "/oan-web-001.jpg",
  "/oan-web-002.jpg",
  "/oan-web-003.jpg",
  "/oan-web-004.jpg",
  "/oan-web-005.jpg",
  "/oan-web-006.jpg",
  "/oan-web-008.jpg",
  "/oan-web-009.jpg",
  "/oan-web-010.jpg",
];

export default async function SonYara({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const t = content[locale];

  return (
    <main>
      <TitlePage
        title={t.title}
        backgroundImageUrl="/oan-web-019.jpg"
        subTitle={t.subTitle}
      />

      <section className={styles.mainSection}>
        <p>{t.intro1}</p>

        <p>{t.intro2}</p>

        <a
          href="https://vimeo.com/ondemand/sonyara"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.documentaryButton}
        >
          {t.watchButton}
        </a>
      </section>

      <section className={styles.textSection}>
        <TitleSection title={t.aboutTitle} />

        <div className={styles.textWrapper}>
          <div className={styles.descriptions}>
            {t.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Image
            height={400}
            width={250}
            src="/son-yara.jpg"
            alt="son-yara"
            className={styles.documentaryPicture}
          />
        </div>
      </section>

      <section className={styles.mainSection}>
        <TitleSection title={t.whyTitle} />

        <p>{t.why1}</p>

        <p>{t.why2}</p>
      </section>

      <section className={styles.picturesSection}>
        {pictures.map((src) => (
          <Image
            key={src}
            height={250}
            width={250}
            src={src}
            alt=""
            className={styles.picture}
          />
        ))}
      </section>
    </main>
  );
}
