"use client";

import { useEffect, Suspense, ReactNode } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";
import { useSearchParams, useParams } from "next/navigation";
import { Locale } from "@/i18n/config";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import PersonPreview from "@/components/person-preview/person-preview.component";
import TitlePage from "@/components/title-page/title-page.component";

interface ValueItem {
  number: string;
  title: string;
  paragraph: string;
}

interface AboutContent {
  pageTitle: string;
  quote: { text: string; author: string };
  historyTitle: string;
  historyP1: string;
  historyP2: string;
  historyP3: string;
  historyDocIntro: string;
  historyDocLink: string;
  historyBlockP1: string;
  historyBlockP2: string;
  pillarsTitle: string;
  pillars: [ReactNode, ReactNode, ReactNode, ReactNode];
  valuesTitle: string;
  values: [ValueItem, ValueItem, ValueItem, ValueItem, ValueItem];
  transparencyTitle: string;
  transparencyIntro: string;
  statutesHeading: string;
  economicHeading: string;
  activitiesHeading: string;
  statutesLinkText: string;
  activityMemoryLabel: string;
  economicMemoryLabel: string;
  teamTitle: string;
  teamIntro: string;
  spainHeading: string;
  beninHeading: string;
  spainRoles: string[];
  beninRoles: string[];
}

const content: Record<Locale, AboutContent> = {
  es: {
    pageTitle: "Sobre Nosotros",
    quote: {
      text: `"Conocer Benín es como leer la edad de un tronco de árbol varias veces
    centenario. Al igual que los aros del árbol, las gentes, pueblos,
    mercados y paisajes son la historia viva del continente africano"`,
      author: "Joan Riera",
    },
    historyTitle: "Nuestra Historia",
    historyP1:
      "En 2013, uno de los fundadores de OAN International, Daniel Alfaro, viaja a Nikki como voluntario.",
    historyP2:
      "Un año más tarde, en 2014, un grupo de 8 jóvenes fundan OAN International (Objetivo Analizar Nikki), la ONGD que somos hoy en Nikki, una región de 170.000 habitantes situada en una de las zonas más rurales y con menos recursos del país.",
    historyP3:
      "Desde sus inicios, OAN International ha puesto a disposición de los agentes de cambio de Nikki sus conocimientos y experiencia para poner en marcha junto a ellos proyectos coherentes con su realidad y que generen un verdadero impacto en su día a día.",
    historyDocIntro: "Conoce más sobre Benin gracias a",
    historyDocLink: "ESTE DOCUMENTO",
    historyBlockP1:
      "En los últimos 10 años, más de 450 personas ha trabajado voluntariamente en OAN, más de 120 jóvenes de diversas nacionalidades se han desplazado a Nikki para colaborar en proyectos de desarrollo con la población local, se han desarrollado más de 60 trabajos fin de grado y trabajos fin de máster permitiendo a los universitarios (en Benín y en España) tomar conciencia sobre esta realidad.",
    historyBlockP2:
      "Actualmente, OAN International cuenta con 10 personas contratadas en Benín y más de 20 personas voluntarias en España.",
    pillarsTitle: "Nuestros pilares",
    pillars: [
      <>
        <b>Proyectos útiles</b>, que se ajusten realmente a los recursos y
        necesidades de la población de Nikki, con actuaciones cuidadosamente
        pensadas, implantadas y evaluadas.
      </>,
      <>
        <b>Empoderamiento de las personas</b>, para lograr su autogestión y el
        liderazgo autónomo local.
      </>,
      <>
        <b>Pensamiento crítico</b> acerca de las relaciones norte-sur, la
        situación desfavorecida de ciertos países y sus causas.
      </>,
      <>
        Construcción de un modelo de{" "}
        <b>cooperación sostenible, responsable y replicable</b> a otros lugares.
      </>,
    ],
    valuesTitle: "Nuestros valores",
    values: [
      {
        number: "1",
        title: "COMPROMISO",
        paragraph:
          "Afirmamos nuestro COMPROMISO con las personas y con nuestra misión a través del esfuerzo y entrega en nuestro día a día, porque creemos firmemente que la sostenibilidad y los logros de nuestras acciones radican en la responsabilidad que adquirimos.",
      },
      {
        number: "2",
        title: "TRANSPARENCIA",
        paragraph:
          "Trabajamos desde la TRANSPARENCIA y la información pública como garante de la calidad de nuestra actuación.",
      },
      {
        number: "3",
        title: "JUSTICIA SOCIAL",
        paragraph:
          "Creemos en la JUSTICIA SOCIAL, que entendemos como el reconocimiento y creación del contexto que permita a todas las personas el pleno ejercicio de todos y cada uno de los derechos humanos.",
      },
      {
        number: "4",
        title: "HUMILDAD y RESPETO",
        paragraph:
          "Actuamos desde la HUMILDAD y el RESPETO hacia las personas con las que trabajamos.",
      },
      {
        number: "5",
        title: "COHERENCIA",
        paragraph:
          "Buscamos la COHERENCIA entre nuestras acciones y aquello que defendemos, ya que en ellos se basará el éxito de nuestra labor.",
      },
    ],
    transparencyTitle: "Transparencia",
    transparencyIntro:
      "En OAN creemos que la transparencia es fundamental para el buen funcionamiento de una organización. Aquí podrás conocer cómo funciona OAN desde dentro, cuál es nuestra normativa y cómo nos financiamos. ",
    statutesHeading: "Estatutos",
    economicHeading: "Memorias económicas",
    activitiesHeading: "Memoria de actividades",
    statutesLinkText: "Estatutos OAN 2020",
    activityMemoryLabel: "Memoria de Actividades",
    economicMemoryLabel: "Memoria de Economica",
    teamTitle: "Nuestro Equipo",
    teamIntro:
      "Detrás, tenemos a un gran equipo permanente de profesionales y voluntarios que están contribuyendo a crear un mejor presente para Nikki, con ayuda de las donaciones de todos nuestros socios.",
    spainHeading: "España",
    beninHeading: "Benin",
    spainRoles: [
      "Presidente",
      "Secretario general",
      "Coordinadora de proyectos",
      "Coordinador de proyectos",
      "Comunicación",
      "Comunicación",
      "Proyecto Nikarit",
      "Tecnología",
      "Voluntaria",
      "Voluntaria",
      "Voluntaria",
      "Voluntaria",
      "Voluntaria",
      "Voluntario",
    ],
    beninRoles: [
      "Coordinador general",
      "Tesorería",
      "Administración general",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  en: {
    pageTitle: "About Us",
    quote: {
      text: `"Getting to know Benin is like reading the age of a tree trunk many
    centuries old. Like the rings of the tree, the people, villages,
    markets and landscapes are the living history of the African continent"`,
      author: "Joan Riera",
    },
    historyTitle: "Our History",
    historyP1:
      "In 2013, one of the founders of OAN International, Daniel Alfaro, travelled to Nikki as a volunteer.",
    historyP2:
      "A year later, in 2014, a group of 8 young people founded OAN International (Objetivo Analizar Nikki), the NGO we are today in Nikki, a region of 170,000 inhabitants located in one of the most rural and least resourced areas of the country.",
    historyP3:
      "Since its beginnings, OAN International has put its knowledge and experience at the service of Nikki's agents of change, to launch alongside them projects that fit their reality and generate a real impact on their daily lives.",
    historyDocIntro: "Learn more about Benin through",
    historyDocLink: "THIS DOCUMENT",
    historyBlockP1:
      "Over the last 10 years, more than 450 people have volunteered at OAN, more than 120 young people of various nationalities have travelled to Nikki to collaborate on development projects with the local community, and more than 60 bachelor's and master's theses have been produced, helping university students (in Benin and in Spain) become aware of this reality.",
    historyBlockP2:
      "OAN International currently has 10 employees in Benin and more than 20 volunteers in Spain.",
    pillarsTitle: "Our pillars",
    pillars: [
      <>
        <b>Useful projects</b>, that genuinely match the resources and needs of
        the people of Nikki, with actions carefully planned, implemented and
        evaluated.
      </>,
      <>
        <b>Empowerment of people</b>, to achieve their self-management and
        autonomous local leadership.
      </>,
      <>
        <b>Critical thinking</b> about North-South relations, the disadvantaged
        situation of certain countries and its causes.
      </>,
      <>
        Building a model of{" "}
        <b>sustainable, responsible and replicable cooperation</b> that can be
        extended to other places.
      </>,
    ],
    valuesTitle: "Our values",
    values: [
      {
        number: "1",
        title: "COMMITMENT",
        paragraph:
          "We affirm our COMMITMENT to people and to our mission through effort and dedication in our daily work, because we firmly believe that the sustainability and achievements of our actions rest on the responsibility we take on.",
      },
      {
        number: "2",
        title: "TRANSPARENCY",
        paragraph:
          "We work from TRANSPARENCY and public information as a guarantee of the quality of our work.",
      },
      {
        number: "3",
        title: "SOCIAL JUSTICE",
        paragraph:
          "We believe in SOCIAL JUSTICE, which we understand as the recognition and creation of the context that allows all people to fully exercise each and every one of their human rights.",
      },
      {
        number: "4",
        title: "HUMILITY and RESPECT",
        paragraph:
          "We act with HUMILITY and RESPECT towards the people we work with.",
      },
      {
        number: "5",
        title: "CONSISTENCY",
        paragraph:
          "We seek CONSISTENCY between our actions and what we stand for, since the success of our work will be based on it.",
      },
    ],
    transparencyTitle: "Transparency",
    transparencyIntro:
      "At OAN we believe that transparency is essential for an organization to work well. Here you can learn how OAN works from the inside, what our rules are and how we are funded. ",
    statutesHeading: "Statutes",
    economicHeading: "Financial reports",
    activitiesHeading: "Activity reports",
    statutesLinkText: "OAN Statutes 2020",
    activityMemoryLabel: "Activity Report",
    economicMemoryLabel: "Financial Report",
    teamTitle: "Our Team",
    teamIntro:
      "Behind it all, we have a great permanent team of professionals and volunteers who are helping to build a better present for Nikki, with the support of donations from all our members.",
    spainHeading: "Spain",
    beninHeading: "Benin",
    spainRoles: [
      "President",
      "General secretary",
      "Project coordinator",
      "Project coordinator",
      "Communications",
      "Communications",
      "Nikarit project",
      "Technology",
      "Volunteer",
      "Volunteer",
      "Volunteer",
      "Volunteer",
      "Volunteer",
      "Volunteer",
    ],
    beninRoles: [
      "General coordinator",
      "Treasury",
      "General administration",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  fr: {
    pageTitle: "À propos",
    quote: {
      text: `"Connaître le Bénin, c'est comme lire l'âge d'un tronc d'arbre plusieurs
    fois centenaire. Tout comme les anneaux de l'arbre, les gens, les villages,
    les marchés et les paysages sont l'histoire vivante du continent africain"`,
      author: "Joan Riera",
    },
    historyTitle: "Notre histoire",
    historyP1:
      "En 2013, l'un des fondateurs d'OAN International, Daniel Alfaro, se rend à Nikki en tant que bénévole.",
    historyP2:
      "Un an plus tard, en 2014, un groupe de 8 jeunes fonde OAN International (Objetivo Analizar Nikki), l'ONG que nous sommes aujourd'hui à Nikki, une région de 170 000 habitants située dans l'une des zones les plus rurales et les moins dotées en ressources du pays.",
    historyP3:
      "Depuis ses débuts, OAN International met ses connaissances et son expérience au service des acteurs du changement de Nikki, afin de lancer avec eux des projets cohérents avec leur réalité et générant un véritable impact au quotidien.",
    historyDocIntro: "Découvrez-en plus sur le Bénin grâce à",
    historyDocLink: "CE DOCUMENT",
    historyBlockP1:
      "Au cours des 10 dernières années, plus de 450 personnes ont travaillé bénévolement au sein d'OAN, plus de 120 jeunes de diverses nationalités se sont rendus à Nikki pour collaborer à des projets de développement avec la population locale, et plus de 60 mémoires de fin d'études de licence et de master ont été réalisés, permettant aux étudiants (au Bénin et en Espagne) de prendre conscience de cette réalité.",
    historyBlockP2:
      "Actuellement, OAN International compte 10 personnes salariées au Bénin et plus de 20 personnes bénévoles en Espagne.",
    pillarsTitle: "Nos piliers",
    pillars: [
      <>
        <b>Des projets utiles</b>, qui correspondent réellement aux ressources
        et aux besoins de la population de Nikki, avec des actions
        soigneusement pensées, mises en œuvre et évaluées.
      </>,
      <>
        <b>L&apos;autonomisation des personnes</b>, afin de parvenir à leur
        autogestion et à un leadership local autonome.
      </>,
      <>
        <b>L&apos;esprit critique</b> au sujet des relations nord-sud, de la
        situation défavorisée de certains pays et de ses causes.
      </>,
      <>
        Construction d&apos;un modèle de{" "}
        <b>coopération durable, responsable et reproductible</b> vers
        d&apos;autres lieux.
      </>,
    ],
    valuesTitle: "Nos valeurs",
    values: [
      {
        number: "1",
        title: "ENGAGEMENT",
        paragraph:
          "Nous affirmons notre ENGAGEMENT envers les personnes et envers notre mission par l'effort et le dévouement dont nous faisons preuve au quotidien, car nous croyons fermement que la durabilité et les réussites de nos actions reposent sur la responsabilité que nous assumons.",
      },
      {
        number: "2",
        title: "TRANSPARENCE",
        paragraph:
          "Nous travaillons dans la TRANSPARENCE et l'information publique comme garantes de la qualité de notre action.",
      },
      {
        number: "3",
        title: "JUSTICE SOCIALE",
        paragraph:
          "Nous croyons en la JUSTICE SOCIALE, que nous entendons comme la reconnaissance et la création du contexte permettant à toutes les personnes le plein exercice de chacun des droits humains.",
      },
      {
        number: "4",
        title: "HUMILITÉ et RESPECT",
        paragraph:
          "Nous agissons avec HUMILITÉ et RESPECT envers les personnes avec lesquelles nous travaillons.",
      },
      {
        number: "5",
        title: "COHÉRENCE",
        paragraph:
          "Nous recherchons la COHÉRENCE entre nos actions et ce que nous défendons, car c'est sur elle que reposera le succès de notre travail.",
      },
    ],
    transparencyTitle: "Transparence",
    transparencyIntro:
      "Chez OAN, nous pensons que la transparence est essentielle au bon fonctionnement d'une organisation. Vous pourrez découvrir ici comment OAN fonctionne de l'intérieur, quelle est notre réglementation et comment nous nous finançons. ",
    statutesHeading: "Statuts",
    economicHeading: "Rapports financiers",
    activitiesHeading: "Rapport d'activités",
    statutesLinkText: "Statuts OAN 2020",
    activityMemoryLabel: "Rapport d'activités",
    economicMemoryLabel: "Rapport financier",
    teamTitle: "Notre équipe",
    teamIntro:
      "Derrière, nous avons une formidable équipe permanente de professionnels et de bénévoles qui contribuent à construire un meilleur présent pour Nikki, grâce aux dons de tous nos membres.",
    spainHeading: "Espagne",
    beninHeading: "Bénin",
    spainRoles: [
      "Président",
      "Secrétaire général",
      "Coordinatrice de projets",
      "Coordinateur de projets",
      "Communication",
      "Communication",
      "Projet Nikarit",
      "Technologie",
      "Bénévole",
      "Bénévole",
      "Bénévole",
      "Bénévole",
      "Bénévole",
      "Bénévole",
    ],
    beninRoles: [
      "Coordinateur général",
      "Trésorerie",
      "Administration générale",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
};

// Create a client component that uses useSearchParams
function AboutUsContent() {
  const { lang } = useParams<{ lang: Locale }>();
  const locale = lang;
  const t = content[locale];

  const SPAIN_TEAM: { name: string; imageUrl: string }[] = [
    { name: "Daniel Alfaro", imageUrl: "/people/daniel.png" },
    { name: "Alvaro Pascual", imageUrl: "/people/alvaro.jpg" },
    { name: "Beatriz Vázquez", imageUrl: "/people/bea.jpg" },
    { name: "Ángel Arquero", imageUrl: "/people/angel.jpeg" },
    { name: "Sofía Fernández", imageUrl: "/people/sofia.jpeg" },
    { name: "Almudena Vázquez", imageUrl: "/people/almudena.jpeg" },
    { name: "Ángela Hidalgo", imageUrl: "/people/angela.jpeg" },
    { name: "Alfonso García", imageUrl: "/people/alfonso.jpg" },
    { name: "Selene Sanchez", imageUrl: "/people/selene.jpeg" },
    { name: "Laura Albaladejo", imageUrl: "/people/laura.jpeg" },
    { name: "Eva Diaz", imageUrl: "/people/eva.jpeg" },
    { name: "Andrea Triquet", imageUrl: "/people/andrea.jpeg" },
    { name: "Isabel", imageUrl: "/people/person-placeholder.svg" },
    {
      name: "Oscar de la Concha Barrio",
      imageUrl: "/people/person-placeholder.svg",
    },
  ];

  const BENIN_TEAM: { name: string; imageUrl: string }[] = [
    { name: "Kader Madougou", imageUrl: "/people/kader.jpg" },
    { name: "Mireille Gnammi", imageUrl: "/people/mireille.jpg" },
    { name: "Lamatou Moumouni", imageUrl: "/people/lamatou.jpeg" },
    { name: "Moussa Yacoubou", imageUrl: "/people/moussa.jpeg" },
    { name: "Hafiz Djaouga", imageUrl: "/people/hafiz.jpg" },
    { name: "Waliou", imageUrl: "/people/waliou.jpeg" },
    { name: "Yasminatou Imorou", imageUrl: "/people/yasminatou.jpeg" },
    { name: "Aminatou Imorou", imageUrl: "/people/aminatou.jpeg" },
    { name: "Romeo", imageUrl: "/people/romeo.jpeg" },
    { name: "Alimatou Soumaila", imageUrl: "/people/alima.jpeg" },
  ];

  const ACTIVITIES_MEMORIES: { url: string; year: string }[] = [
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2015.pdf",
      year: "2015",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2016.pdf",
      year: "2016",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2017.pdf",
      year: "2017",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2018.pdf",
      year: "2018",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2019.pdf",
      year: "2019",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2020.pdf",
      year: "2020",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2021.pdf",
      year: "2021",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2022.pdf",
      year: "2022",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2023.pdf",
      year: "2023",
    },
    {
      url: "/documents/activity-memories/memoria-actividades-oan-2024.pdf",
      year: "2024",
    },
    {
      url: "https://drive.google.com/file/d/16-rC4O8bwdya3z_kPHobWkawU42bVSGP/view?usp=sharing",
      year: "2025",
    },
  ];

  const ECONOMIC_MEMORIES: { url: string; year: string }[] = [
    {
      url: "/documents/economic-memories/memoria-economica-oan-2014.pdf",
      year: "2014",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2015.pdf",
      year: "2015",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2016.pdf",
      year: "2016",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2017.pdf",
      year: "2017",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2018.pdf",
      year: "2018",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2019.pdf",
      year: "2019",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2020.pdf",
      year: "2020",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2021.pdf",
      year: "2021",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2022.pdf",
      year: "2022",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2023.pdf",
      year: "2023",
    },
    {
      url: "/documents/economic-memories/memoria-economica-oan-2024.pdf",
      year: "2024",
    },
  ];

  const spainTeam = SPAIN_TEAM.map((person, index) => (
    <PersonPreview
      key={person.name}
      name={person.name}
      title={t.spainRoles[index]}
      imageUrl={person.imageUrl}
    />
  ));

  const beninTeam = BENIN_TEAM.map((person, index) => (
    <PersonPreview
      key={person.name}
      name={person.name}
      title={t.beninRoles[index]}
      imageUrl={person.imageUrl}
    />
  ));

  const quote = {
    text: t.quote.text,
    author: t.quote.author,
  };

  const economicMemories = ECONOMIC_MEMORIES.map((file) => {
    const name = `${t.economicMemoryLabel} - ${file.year}`;
    return (
      <div key={file.year}>
        <li>
          <a
            className={styles.fileDownloadLink}
            href={file.url}
            download={name}
          >
            {name}
          </a>
        </li>
      </div>
    );
  });

  const activityMemories = ACTIVITIES_MEMORIES.map((file) => {
    const name = `${t.activityMemoryLabel} - ${file.year}`;
    return (
      <li key={file.year}>
        <a className={styles.fileDownloadLink} href={file.url} download={name}>
          {name}
        </a>
      </li>
    );
  });

  const statutes = (
    <li>
      <a
        className={styles.fileDownloadLink}
        href="/documents/estatutos-oan-2020.pdf"
        download="estatutosOan2020"
      >
        {t.statutesLinkText}
      </a>
    </li>
  );

  const searchParams = useSearchParams();

  // Use the scrollToSection utility on page load or URL change
  useEffect(() => {
    const section = searchParams.get("section");
    scrollToSection(section || undefined);
  }, [searchParams]);

  return (
    <main>
      <TitlePage
        title={t.pageTitle}
        backgroundImageUrl="/oan-web-001.jpg"
        quote={quote}
      />

      {/* HISTORY */}
      <section id="history" className={styles.historySection}>
        <div className={styles.historyWrapper}>
          <TitleSection title={t.historyTitle} />

          <p>{t.historyP1}</p>

          <p>{t.historyP2}</p>

          <p>{t.historyP3}</p>

          <p>
            {t.historyDocIntro}{" "}
            <a
              className={styles.fileDownloadLink}
              href="/documents/contexto-benin-2024.pdf"
              download="contexto-sobre-benin.pdf"
            >
              {t.historyDocLink}
            </a>
          </p>
        </div>

        <div className={styles.historyBlock}>
          <div className={styles.historyBlockTextWrapper}>
            <div className={styles.historyBlockText}>
              <p>{t.historyBlockP1}</p>

              <p>{t.historyBlockP2}</p>
            </div>
          </div>

          <Image
            className={styles.historyBlockImage}
            src="/oan-web-002.jpg"
            width={500}
            height={500}
            alt="OAN history"
          />
        </div>
      </section>

      {/* WORK PLACE */}
      <section id="values" className={styles.workPlaceSection}>
        <TitleSection title={t.pillarsTitle} />

        <p>{t.pillars[0]}</p>

        <p>{t.pillars[1]}</p>

        <p>{t.pillars[2]}</p>

        <p>{t.pillars[3]}</p>
      </section>

      {/* VALUES */}
      <section>
        <div className={styles.valuesBlockRight}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-compromiso.jpg"
            width={400}
            height={400}
            alt="OAN compromiso"
          />

          <div className={styles.valuesBlockText}>
            <TitleSection title={t.valuesTitle} />

            <div className={styles.valuesTitle}>
              <h1 className={styles.valuesTitleNumber}>{t.values[0].number}</h1>
              <h2 className={styles.valuesTitleText}>{t.values[0].title}</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              {t.values[0].paragraph}
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <div className={styles.valuesTitle}>
                <h1 className={styles.valuesTitleNumber}>
                  {t.values[1].number}
                </h1>
                <h2 className={styles.valuesTitleText}>{t.values[1].title}</h2>
              </div>

              <p className={styles.valuesBlockParagraph}>
                {t.values[1].paragraph}
              </p>
            </div>
          </div>

          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-transparencia.jpg"
            width={400}
            height={400}
            alt="OAN transparencia"
          />
        </div>

        <div className={styles.valuesBlockRight}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-justicia-social.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />

          <div className={styles.valuesBlockText}>
            <div className={styles.valuesTitle}>
              <h1 className={styles.valuesTitleNumber}>{t.values[2].number}</h1>
              <h2 className={styles.valuesTitleText}>{t.values[2].title}</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              {t.values[2].paragraph}
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <div className={styles.valuesTitle}>
                <h1 className={styles.valuesTitleNumber}>
                  {t.values[3].number}
                </h1>
                <h2 className={styles.valuesTitleText}>{t.values[3].title}</h2>
              </div>

              <p className={styles.valuesBlockParagraph}>
                {t.values[3].paragraph}
              </p>
            </div>
          </div>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-humildad.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />
        </div>

        <div className={styles.valuesBlockRight}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-coherencia.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />

          <div className={styles.valuesBlockText}>
            <div className={styles.valuesTitle}>
              <h1 className={styles.valuesTitleNumber}>{t.values[4].number}</h1>
              <h2 className={styles.valuesTitleText}>{t.values[4].title}</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              {t.values[4].paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section id="transparency" className={styles.teamSection}>
        <TitleSection title={t.transparencyTitle} />

        <p>{t.transparencyIntro}</p>

        <h3>{t.statutesHeading}</h3>
        <ul className={styles.fileColumn}>{statutes}</ul>

        <h3>{t.economicHeading}</h3>
        <ul className={styles.fileColumn}>{economicMemories}</ul>

        <h3>{t.activitiesHeading}</h3>
        <ul className={styles.fileColumn}>{activityMemories}</ul>
      </section>

      {/* TEAM */}
      <section id="team" className={styles.teamSection}>
        <TitleSection title={t.teamTitle} />

        <p>{t.teamIntro}</p>

        <h3>{t.spainHeading}</h3>
        <div className={styles.countryTeamSection}>{spainTeam}</div>

        <h3>{t.beninHeading}</h3>
        <div className={styles.countryTeamSection}>{beninTeam}</div>
      </section>
    </main>
  );
}

// Main component that wraps the content with Suspense
export default function AboutUs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUsContent />
    </Suspense>
  );
}
