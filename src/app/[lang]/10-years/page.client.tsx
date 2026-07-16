"use client";

import { useEffect, Suspense, ReactNode } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useSearchParams, useParams } from "next/navigation";
import Image from "next/image";
import { Locale } from "@/i18n/config";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import TitlePage from "@/components/title-page/title-page.component";

interface FaqEntry {
  question: string;
  answer: string;
}

interface TenYearsContent {
  title: string;
  history: [string, string];
  achievementsTitle: string;
  achievements: [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode
  ];
  closing: string;
  whyTitle: string;
  whyText: string;
  faqTitle: string;
  faqs: [FaqEntry, FaqEntry];
}

const content: Record<Locale, TenYearsContent> = {
  es: {
    title: "OAN International cumple 10 años",
    history: [
      "En 2014 fundamos OAN International con el objetivo de acompañar a la población de la comuna de Nikki (Benín) en la lucha por sus derechos. Para ello planteamos un modelo de cooperación internacional responsable, sostenible y contando con la población como actor principal de los proyectos.",
      "Durante estos 10 años hemos trabajado en salud, acceso al agua potable, emancipación de la mujer, comercio justo, agronomía y salubridad.",
    ],
    achievementsTitle: "Nuestros logros",
    achievements: [
      <>
        <strong>Reducir</strong> la tasa de{" "}
        <strong>malnutrición infantil</strong> en 14 pueblos con evaluación de
        más de 1100 niños y reducción del <strong>80%</strong> de los casos de
        malnutrición. Puesta en marcha de 12 comités de seguimiento de la
        desnutrición compuestos por 36 personas de los pueblos que han sido
        formadas para saber detectar los casos de desnutrición y derivarlo a los
        servicios sanitarios correspondientes.
      </>,
      <>
        Dotado de maquinaria, herramientas y materiales a las cooperativas de
        mujeres deproductoras de karité con las que trabajamos, promoviendo la{" "}
        <strong>autonomía de 500 mujeres</strong> productoras de karité para la
        producción de manteca cumpliendo con los estándares de calidad
        nacionales e internacionales. Todo ello ha mejorado la vida de las
        alrededor de <strong>2.500 personas</strong> que viven en estos pueblos.
        Gracias a esto, las mujeres han{" "}
        <strong>aumentado sus ingresos en un 70%</strong> desde el inicio del
        proyecto.
      </>,
      <>
        Hemos{" "}
        <strong>
          dinamizado el sistema de reparación de bombas de agua
        </strong>{" "}
        en más de <strong>70 comunidades</strong> (15.000 personas),
        consiguiendo que exista una mayor garantía de piezas de repuesto para
        reparaciones, mayor consciencia de los habitantes para el mantenimiento
        preventivo de las bombas de agua y mejorando la formación de los
        técnicos reparadores en buenas prácticas para el desempeño de su oficio.
      </>,
      <>
        Hemos Impulsado la puesta en marcha de{" "}
        <strong>4 huertas comunitarias</strong> gestionadas por mujeres, gracias
        a las que se han aumentado sus ingresos y mejorado el acceso a alimentos
        en pueblos rurales.
      </>,
      <>
        Hemos facilitado el <strong>acceso a microcreditos</strong> para más de{" "}
        <strong>40 mujeres</strong> en Nikki durante 5 años, ayudando a a
        pequeñas empresarias a que impulsen sus negocios y mejoren su calidad de
        vida. Hemos apoyado la constitución de una red de solidaridad entre
        mujeres autodenominada Soukiana (&apos;Amémonos&apos; en lengua
        batonou), acompañándolas con más de{" "}
        <strong>30 sesiones de formación</strong> y puesta en común sobre temas
        de igualdad de género y empoderamiento de la mujer.
      </>,
      <>
        Desde 2017 anualmente impulsamos la celebración de la{" "}
        <strong>
          Jornada Internacional de la Eliminación de la Violencia contra la
          Mujer
        </strong>
        , y desde 2022 también el día de la Mujer, donde participan cada año más
        de <strong>150 personas</strong>, líderes comentarios y autoridades.
      </>,
    ],
    closing:
      "Todo esto se ha conseguido con mucho esfuerzo de cientos de personas voluntarias en España y Benín durante esta década, permitiéndonos llegar al punto donde nos encontramos ahora. Pero queremos seguir creciendo y afianzando este proyecto, por lo que te pedimos tu colaboración.",
    whyTitle: "¿Por qué OAN International?",
    whyText:
      "Al elegir a OAN International, estás apoyando una ONG pequeña pero con un impacto tangible y directo en terreno. Nuestra estructura nos permite mantener una transparencia total en la gestión de los recursos, lo que significa que puedes ver cómo y dónde se utiliza tu aportación. A diferencia de organizaciones más grandes, nuestra proximidad a los proyectos y con el equipo local garantiza que tu contribución se traduzca en un cambio real y visible en la vida de las comunidades de Nikki (Benín). Al ser socio/a de OAN, tu aportación mensual nos permite mantener los proyectos y no solo estás colaborando con una causa, sino que también formas parte activa del desarrollo de cada proyecto.",
    faqTitle: "FAQ",
    faqs: [
      {
        question: "¿Cuál es el destino de mi aportación?",
        answer:
          "El 100% de tu aportación va dirigida a los objetivos de la ONG. Somos transparentes con nuestras cuentas que puedes encontrar publicadas anualmente en nuestra web en el apartado Transparencia.",
      },
      {
        question: "¿Mi aportación está sujeta a desgravación fiscal?",
        answer:
          "Sí. OAN International está declarada como Asociación de Utilidad Pública por el Ministerio de Interior por lo que tu aportación, siendo socio/a, está sujeta a desgravación fiscal. Las cuotas de los socios/a adscritos a esta iniciativa desgravan hasta un 80% en los primeros 150€ y un 35% en el resto.",
      },
    ],
  },
  en: {
    title: "OAN International turns 10",
    history: [
      "In 2014 we founded OAN International with the aim of supporting the people of the commune of Nikki (Benin) in the fight for their rights. To do so, we set out a model of responsible, sustainable international cooperation, with the local population as the main actor in the projects.",
      "Over these 10 years we have worked on health, access to drinking water, women's empowerment, fair trade, agronomy and sanitation.",
    ],
    achievementsTitle: "Our achievements",
    achievements: [
      <>
        <strong>Reducing</strong> the rate of{" "}
        <strong>child malnutrition</strong> across 14 villages, assessing more
        than 1100 children and cutting <strong>80%</strong> of malnutrition
        cases. We set up 12 malnutrition monitoring committees made up of 36
        people from the villages, trained to detect cases of malnutrition and
        refer them to the relevant health services.
      </>,
      <>
        We provided the women&apos;s shea producer cooperatives we work with
        with machinery, tools and materials, promoting the{" "}
        <strong>autonomy of 500 women</strong> shea producers to make butter
        that meets national and international quality standards. All of this has
        improved the lives of the roughly <strong>2.500 people</strong> living
        in these villages. Thanks to this, the women have{" "}
        <strong>increased their income by 70%</strong> since the start of the
        project.
      </>,
      <>
        We have{" "}
        <strong>revitalised the water pump repair system</strong> across more
        than <strong>70 communities</strong> (15.000 people), securing a better
        supply of spare parts for repairs, raising residents&apos; awareness of
        the preventive maintenance of water pumps, and improving the training of
        repair technicians in good practices for their trade.
      </>,
      <>
        We have driven the launch of{" "}
        <strong>4 community gardens</strong> managed by women, which have
        increased their income and improved access to food in rural villages.
      </>,
      <>
        We have made <strong>access to microcredit</strong> possible for more
        than <strong>40 women</strong> in Nikki over 5 years, helping small
        businesswomen grow their businesses and improve their quality of life.
        We have supported the creation of a women&apos;s solidarity network
        called Soukiana (&apos;Let us love one another&apos; in the Batonou
        language), accompanying them with more than{" "}
        <strong>30 training sessions</strong> and shared discussions on gender
        equality and women&apos;s empowerment.
      </>,
      <>
        Since 2017 we have promoted, every year, the celebration of the{" "}
        <strong>
          International Day for the Elimination of Violence against Women
        </strong>
        , and since 2022 also Women&apos;s Day, with more than{" "}
        <strong>150 people</strong> taking part each year, including community
        leaders and authorities.
      </>,
    ],
    closing:
      "All of this has been achieved through the hard work of hundreds of volunteers in Spain and Benin over this decade, bringing us to where we are now. But we want to keep growing and strengthening this project, and so we ask for your support.",
    whyTitle: "Why OAN International?",
    whyText:
      "By choosing OAN International, you are supporting a small NGO with a tangible, direct impact on the ground. Our structure lets us maintain full transparency in how resources are managed, which means you can see how and where your contribution is used. Unlike larger organisations, our closeness to the projects and to the local team ensures that your contribution translates into real, visible change in the lives of the communities of Nikki (Benin). As an OAN member, your monthly contribution allows us to sustain the projects, and you are not only supporting a cause but also playing an active part in the development of each project.",
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Where does my contribution go?",
        answer:
          "100% of your contribution goes towards the goals of the NGO. We are transparent with our accounts, which you can find published every year on our website in the Transparency section.",
      },
      {
        question: "Is my contribution tax-deductible?",
        answer:
          "Yes. OAN International is declared an Association of Public Utility by the Ministry of the Interior, so your contribution as a member is tax-deductible. The fees of members enrolled in this initiative are deductible up to 80% on the first 150€ and 35% on the rest.",
      },
    ],
  },
  fr: {
    title: "OAN International fête ses 10 ans",
    history: [
      "En 2014, nous avons fondé OAN International dans le but d'accompagner la population de la commune de Nikki (Bénin) dans la lutte pour ses droits. Pour cela, nous avons proposé un modèle de coopération internationale responsable, durable et plaçant la population comme actrice principale des projets.",
      "Au cours de ces 10 ans, nous avons travaillé dans les domaines de la santé, de l'accès à l'eau potable, de l'émancipation des femmes, du commerce équitable, de l'agronomie et de la salubrité.",
    ],
    achievementsTitle: "Nos réalisations",
    achievements: [
      <>
        <strong>Réduire</strong> le taux de{" "}
        <strong>malnutrition infantile</strong> dans 14 villages avec
        l&apos;évaluation de plus de 1100 enfants et une réduction de{" "}
        <strong>80%</strong> des cas de malnutrition. Mise en place de 12
        comités de suivi de la malnutrition composés de 36 personnes des
        villages qui ont été formées pour savoir détecter les cas de
        malnutrition et les orienter vers les services de santé correspondants.
      </>,
      <>
        Nous avons doté de machines, d&apos;outils et de matériaux les
        coopératives de femmes productrices de karité avec lesquelles nous
        travaillons, favorisant l&apos;
        <strong>autonomie de 500 femmes</strong> productrices de karité pour la
        production de beurre répondant aux normes de qualité nationales et
        internationales. Tout cela a amélioré la vie des quelque{" "}
        <strong>2.500 personnes</strong> qui vivent dans ces villages. Grâce à
        cela, les femmes ont{" "}
        <strong>augmenté leurs revenus de 70%</strong> depuis le début du
        projet.
      </>,
      <>
        Nous avons{" "}
        <strong>
          redynamisé le système de réparation des pompes à eau
        </strong>{" "}
        dans plus de <strong>70 communautés</strong> (15.000 personnes), en
        garantissant une meilleure disponibilité des pièces de rechange pour les
        réparations, une plus grande sensibilisation des habitants à
        l&apos;entretien préventif des pompes à eau et en améliorant la
        formation des techniciens réparateurs aux bonnes pratiques dans
        l&apos;exercice de leur métier.
      </>,
      <>
        Nous avons impulsé la mise en place de{" "}
        <strong>4 potagers communautaires</strong> gérés par des femmes, grâce
        auxquels leurs revenus ont augmenté et l&apos;accès à l&apos;alimentation
        s&apos;est amélioré dans les villages ruraux.
      </>,
      <>
        Nous avons facilité l&apos;<strong>accès au microcrédit</strong> pour
        plus de <strong>40 femmes</strong> à Nikki pendant 5 ans, aidant de
        petites entrepreneuses à développer leurs activités et à améliorer leur
        qualité de vie. Nous avons soutenu la constitution d&apos;un réseau de
        solidarité entre femmes autodénommé Soukiana (&apos;Aimons-nous&apos; en
        langue batonou), en les accompagnant avec plus de{" "}
        <strong>30 sessions de formation</strong> et de mise en commun sur des
        sujets d&apos;égalité de genre et d&apos;autonomisation des femmes.
      </>,
      <>
        Depuis 2017, nous promouvons chaque année la célébration de la{" "}
        <strong>
          Journée internationale pour l&apos;élimination de la violence à
          l&apos;égard des femmes
        </strong>
        , et depuis 2022 également la Journée de la femme, où participent chaque
        année plus de <strong>150 personnes</strong>, des responsables
        communautaires et des autorités.
      </>,
    ],
    closing:
      "Tout cela a été rendu possible grâce aux grands efforts de centaines de bénévoles en Espagne et au Bénin au cours de cette décennie, ce qui nous a permis d'arriver là où nous en sommes aujourd'hui. Mais nous voulons continuer à grandir et à consolider ce projet, c'est pourquoi nous te demandons ta collaboration.",
    whyTitle: "Pourquoi OAN International ?",
    whyText:
      "En choisissant OAN International, tu soutiens une petite ONG dont l'impact est tangible et direct sur le terrain. Notre structure nous permet de maintenir une transparence totale dans la gestion des ressources, ce qui signifie que tu peux voir comment et où ta contribution est utilisée. Contrairement aux organisations plus grandes, notre proximité avec les projets et avec l'équipe locale garantit que ta contribution se traduise par un changement réel et visible dans la vie des communautés de Nikki (Bénin). En devenant membre d'OAN, ta contribution mensuelle nous permet de maintenir les projets et tu ne soutiens pas seulement une cause, mais tu participes aussi activement au développement de chaque projet.",
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Quelle est la destination de ma contribution ?",
        answer:
          "100% de ta contribution est destinée aux objectifs de l'ONG. Nous sommes transparents concernant nos comptes, que tu peux trouver publiés chaque année sur notre site dans la section Transparence.",
      },
      {
        question: "Ma contribution est-elle déductible des impôts ?",
        answer:
          "Oui. OAN International est déclarée Association d'Utilité Publique par le Ministère de l'Intérieur, de sorte que ta contribution, en tant que membre, est déductible des impôts. Les cotisations des membres adhérant à cette initiative sont déductibles jusqu'à 80% sur les premiers 150€ et 35% sur le reste.",
      },
    ],
  },
};

// Create a client component that uses useSearchParams
function TenYearsContent() {
  const searchParams = useSearchParams();
  const { lang } = useParams<{ lang: Locale }>();
  const locale = lang;
  const t = content[locale];

  // Use the scrollToSection utility on page load or URL change
  useEffect(() => {
    const section = searchParams.get("section");
    scrollToSection(section || undefined);
  }, [searchParams]);

  return (
    <main>
      <TitlePage title={t.title} backgroundImageUrl="/oan-web-042.jpg" />

      {/* HISTORY */}
      <section className={styles.historySection}>
        <div className={styles.historyWrapper}>
          <p>{t.history[0]}</p>

          <p>{t.history[1]}</p>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className={styles.donationSection}>
        <TitleSection title={t.achievementsTitle} />
      </section>

      <section>
        <div className={styles.valuesBlockRight}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-032.jpg"
            width={400}
            height={400}
            alt="OAN compromiso"
          />

          <div className={styles.valuesBlockText}>
            <p className={styles.valuesBlockParagraph}>{t.achievements[0]}</p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <p className={styles.valuesBlockParagraph}>{t.achievements[1]}</p>
            </div>
          </div>

          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-023.jpg"
            width={400}
            height={400}
            alt="OAN transparencia"
          />
        </div>

        <div className={styles.valuesBlockRight}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-031.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />

          <div className={styles.valuesBlockText}>
            <p className={styles.valuesBlockParagraph}>{t.achievements[2]}</p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <p className={styles.valuesBlockParagraph}>{t.achievements[3]}</p>
            </div>
          </div>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-029.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />
        </div>

        <div className={styles.valuesBlockRight}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-022.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />

          <div className={styles.valuesBlockText}>
            <p className={styles.valuesBlockParagraph}>{t.achievements[4]}</p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <p className={styles.valuesBlockParagraph}>{t.achievements[5]}</p>
            </div>
          </div>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-044.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.historyWrapper}>
          <p>{t.closing}</p>
        </div>
      </section>

      <section id="faq" className={styles.historySection}>
        <div className={styles.historyBlock}>
          <div className={styles.historyBlockTextWrapper}>
            <div className={styles.historyBlockText}>
              <h3>{t.whyTitle}</h3>
              <p>{t.whyText}</p>
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

      <section className={styles.teamSection}>
        <TitleSection title={t.faqTitle} />

        <h3>{t.faqs[0].question}</h3>
        <p>{t.faqs[0].answer}</p>

        <h3>{t.faqs[1].question}</h3>
        <p>{t.faqs[1].answer}</p>
      </section>
    </main>
  );
}

// Main component that wraps the content with Suspense
export default function TenYears() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TenYearsContent />
    </Suspense>
  );
}
