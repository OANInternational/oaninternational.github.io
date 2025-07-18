"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import PersonPreview, {
  Person,
} from "@/components/person-preview/person-preview.component";
import TitlePage from "@/components/title-page/title-page.component";

interface File {
  url: string;
  name: string;
}

// Create a client component that uses useSearchParams
function AboutUsContent() {
  const SPAIN_TEAM: Person[] = [
    {
      name: "Daniel Alfaro",
      title: "Presidente",
      imageUrl: "/people/daniel.png",
    },
    {
      name: "Alvaro Pascual",
      title: "Secretario general",
      imageUrl: "/people/alvaro.jpg",
    },
    {
      name: "Beatriz Vázquez",
      title: "Coordinadora de proyectos",
      imageUrl: "/people/bea.jpg",
    },
    {
      name: "Ángel Arquero",
      title: "Coordinador de proyectos",
      imageUrl: "/people/angel.jpeg",
    },
    {
      name: "Sofía Fernández",
      title: "Comunicación",
      imageUrl: "/people/sofia.jpeg",
    },
    {
      name: "Almudena Vázquez",
      title: "Comunicación",
      imageUrl: "/people/almudena.jpeg",
    },
    {
      name: "Ángela Hidalgo",
      title: "Proyecto Nikarit",
      imageUrl: "/people/angela.jpeg",
    },
    {
      name: "Alfonso García",
      title: "Tecnología",
      imageUrl: "/people/alfonso.jpg",
    },

    {
      name: "Eva Diaz",
      title: "Voluntaria",
      imageUrl: "/people/eva.jpeg",
    },
    {
      name: "Andrea Triquet",
      title: "Voluntaria",
      imageUrl: "/people/andrea.jpeg",
    },
    {
      name: "Isabel",
      title: "Voluntaria",
      imageUrl: "/people/person-placeholder.svg",
    },
    {
      name: "Oscar de la Concha Barrio",
      title: "Voluntario",
      imageUrl: "/people/person-placeholder.svg",
    },
  ];

  const BENIN_TEAM: Person[] = [
    {
      name: "Kader Madougou",
      title: "Coordinador general",
      imageUrl: "/people/person-placeholder.svg",
    },
    {
      name: "Mireille Gnammi",
      title: "Tesorería",
      imageUrl: "/people/mireille.jpg",
    },
    {
      name: "Lamatou Moumouni",
      title: "Administración general",
      imageUrl: "/people/lamatou.jpeg",
    },
    {
      name: "Moussa Yacoubou",
      title: "",
      imageUrl: "/people/moussa.jpeg",
    },
    {
      name: "Hafiz Djaouga",
      title: "",
      imageUrl: "/people/person-placeholder.svg",
    },
    {
      name: "Waliou",
      title: "",
      imageUrl: "/people/waliou.jpeg",
    },
    {
      name: "Yasminatou Imorou",
      title: "",
      imageUrl: "/people/yasminatou.jpeg",
    },
    {
      name: "Aminatou Imorou",
      title: "",
      imageUrl: "/people/aminatou.jpeg",
    },
    {
      name: "Romeo",
      title: "",
      imageUrl: "/people/romeo.jpeg",
    },
    {
      name: "Alimatou Soumaila",
      title: "",
      imageUrl: "/people/person-placeholder.svg",
    },
  ];

  const ACTIVITIES_MEMORIES: File[] = [
    {
      url: "documents/activity-memories/memoria-actividades-oan-2015.pdf",
      name: "Memoria de Actividades - 2015",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2016.pdf",
      name: "Memoria de Actividades - 2016",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2017.pdf",
      name: "Memoria de Actividades - 2017",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2018.pdf",
      name: "Memoria de Actividades - 2018",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2019.pdf",
      name: "Memoria de Actividades - 2019",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2020.pdf",
      name: "Memoria de Actividades - 2020",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2021.pdf",
      name: "Memoria de Actividades - 2021",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2022.pdf",
      name: "Memoria de Actividades - 2022",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2023.pdf",
      name: "Memoria de Actividades - 2023",
    },
    {
      url: "documents/activity-memories/memoria-actividades-oan-2024.pdf",
      name: "Memoria de Actividades - 2024",
    },
  ];

  const ECONOMIC_MEMORIES: File[] = [
    {
      url: "documents/economic-memories/memoria-economica-oan-2014.pdf",
      name: "Memoria de Economica - 2014",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2015.pdf",
      name: "Memoria de Economica - 2015",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2016.pdf",
      name: "Memoria de Economica - 2016",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2017.pdf",
      name: "Memoria de Economica - 2017",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2018.pdf",
      name: "Memoria de Economica - 2018",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2019.pdf",
      name: "Memoria de Economica - 2019",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2020.pdf",
      name: "Memoria de Economica - 2020",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2021.pdf",
      name: "Memoria de Economica - 2021",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2022.pdf",
      name: "Memoria de Economica - 2022",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2023.pdf",
      name: "Memoria de Economica - 2023",
    },
    {
      url: "documents/economic-memories/memoria-economica-oan-2024.pdf",
      name: "Memoria de Economica - 2024",
    },
  ];

  const spainTeam = SPAIN_TEAM.map((person) => (
    <PersonPreview
      key={person.name}
      name={person.name}
      title={person.title}
      imageUrl={person.imageUrl}
    />
  ));

  const beninTeam = BENIN_TEAM.map((person) => (
    <PersonPreview
      key={person.name}
      name={person.name}
      title={person.title}
      imageUrl={person.imageUrl}
    />
  ));

  const quote = {
    text: `"Conocer Benín es como leer la edad de un tronco de árbol varias veces
    centenario. Al igual que los aros del árbol, las gentes, pueblos,
    mercados y paisajes son la historia viva del continente africano"`,
    author: "Joan Riera",
  };

  const economicMemories = ECONOMIC_MEMORIES.map((file) => (
    <div key={file.name}>
      <li>
        <a
          className={styles.fileDownloadLink}
          href={file.url}
          download={file.name}
        >
          {file.name}
        </a>
      </li>
    </div>
  ));

  const activityMemories = ACTIVITIES_MEMORIES.map((file) => (
    <li key={file.name}>
      <a
        className={styles.fileDownloadLink}
        href={file.url}
        download={file.name}
      >
        {file.name}
      </a>
    </li>
  ));

  const statutes = (
    <li>
      <a
        className={styles.fileDownloadLink}
        href="/documents/estatutos-oan-2020.pdf"
        download="estatutosOan2020"
      >
        Estatutos OAN 2020
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
        title="Sobre Nosotros"
        backgroundImageUrl="/oan-web-001.jpg"
        quote={quote}
      />

      {/* HISTORY */}
      <section id="history" className={styles.historySection}>
        <div className={styles.historyWrapper}>
          <TitleSection title="Nuestra Historia" />

          <p>
            En 2013, uno de los fundadores de OAN International, Daniel Alfaro,
            viaja a Nikki como voluntario.
          </p>

          <p>
            Un año más tarde, en 2014, un grupo de 8 jóvenes fundan OAN
            International (Objetivo Analizar Nikki), la ONGD que somos hoy en
            Nikki, una región de 170.000 habitantes situada en una de las zonas
            más rurales y con menos recursos del país.
          </p>

          <p>
            Desde sus inicios, OAN International ha puesto a disposición de los
            agentes de cambio de Nikki sus conocimientos y experiencia para
            poner en marcha junto a ellos proyectos coherentes con su realidad y
            que generen un verdadero impacto en su día a día.
          </p>

          <p>
            Conoce más sobre Benin gracias a
            <a
              className={styles.fileDownloadLink}
              href="documents/contexto-benin-2024.pdf"
              download="contexto-sobre-benin.pdf"
            >
              ESTE DOCUMENTO
            </a>
          </p>
        </div>

        <div className={styles.historyBlock}>
          <div className={styles.historyBlockTextWrapper}>
            <div className={styles.historyBlockText}>
              <p>
                En los últimos 10 años, más de 450 personas ha trabajado
                voluntariamente en OAN, más de 120 jóvenes de diversas
                nacionalidades se han desplazado a Nikki para colaborar en
                proyectos de desarrollo con la población local, se han
                desarrollado más de 60 trabajos fin de grado y trabajos fin de
                máster permitiendo a los universitarios (en Benín y en España)
                tomar conciencia sobre esta realidad.
              </p>

              <p>
                Actualmente, OAN International cuenta con 10 personas
                contratadas en Benín y más de 20 personas voluntarias en España.
              </p>
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
        <TitleSection title="Nuestros pilares" />

        <p>
          <b>Proyectos útiles</b>, que se ajusten realmente a los recursos y
          necesidades de la población de Nikki, con actuaciones cuidadosamente
          pensadas, implantadas y evaluadas.
        </p>

        <p>
          <b>Empoderamiento de las personas</b>, para lograr su autogestión y el
          liderazgo autónomo local.
        </p>

        <p>
          <b>Pensamiento crítico</b> acerca de las relaciones norte-sur, la
          situación desfavorecida de ciertos países y sus causas.
        </p>

        <p>
          Construcción de un modelo de{" "}
          <b>cooperación sostenible, responsable y replicable</b> a otros
          lugares.
        </p>
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
            <TitleSection title="Nuestros valores" />

            <div className={styles.valuesTitle}>
              <h1 className={styles.valuesTitleNumber}>1</h1>
              <h2 className={styles.valuesTitleText}>COMPROMISO</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              Afirmamos nuestro COMPROMISO con las personas y con nuestra misión
              a través del esfuerzo y entrega en nuestro día a día, porque
              creemos firmemente que la sostenibilidad y los logros de nuestras
              acciones radican en la responsabilidad que adquirimos.
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <div className={styles.valuesTitle}>
                <h1 className={styles.valuesTitleNumber}>2</h1>
                <h2 className={styles.valuesTitleText}>TRANSPARENCIA</h2>
              </div>

              <p className={styles.valuesBlockParagraph}>
                Trabajamos desde la TRANSPARENCIA y la información pública como
                garante de la calidad de nuestra actuación.
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
              <h1 className={styles.valuesTitleNumber}>3</h1>
              <h2 className={styles.valuesTitleText}>JUSTICIA SOCIAL</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              Creemos en la JUSTICIA SOCIAL, que entendemos como el
              reconocimiento y creación del contexto que permita a todas las
              personas el pleno ejercicio de todos y cada uno de los derechos
              humanos.
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <div className={styles.valuesTitle}>
                <h1 className={styles.valuesTitleNumber}>4</h1>
                <h2 className={styles.valuesTitleText}>HUMILDAD y RESPETO</h2>
              </div>

              <p className={styles.valuesBlockParagraph}>
                Actuamos desde la HUMILDAD y el RESPETO hacia las personas con
                las que trabajamos.
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
              <h1 className={styles.valuesTitleNumber}>5</h1>
              <h2 className={styles.valuesTitleText}>COHERENCIA</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              Buscamos la COHERENCIA entre nuestras acciones y aquello que
              defendemos, ya que en ellos se basará el éxito de nuestra labor.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section id="transparency" className={styles.teamSection}>
        <TitleSection title="Transparencia" />

        <p>
          En OAN creemos que la transparencia es fundamental para el buen
          funcionamiento de una organización. Aquí podrás conocer cómo funciona
          OAN desde dentro, cuál es nuestra normativa y cómo nos financiamos.{" "}
        </p>

        <h3>Estatutos</h3>
        <ul className={styles.fileColumn}>{statutes}</ul>

        <h3>Memorias económicas</h3>
        <ul className={styles.fileColumn}>{economicMemories}</ul>

        <h3>Memoria de actividades</h3>
        <ul className={styles.fileColumn}>{activityMemories}</ul>
      </section>

      {/* TEAM */}
      <section id="team" className={styles.teamSection}>
        <TitleSection title="Nuestro Equipo" />

        <p>
          Detrás, tenemos a un gran equipo permanente de profesionales y
          voluntarios que están contribuyendo a crear un mejor presente para
          Nikki, con ayuda de las donaciones de todos nuestros socios.
        </p>

        <h3>España</h3>
        <div className={styles.countryTeamSection}>{spainTeam}</div>

        <h3>Benin</h3>
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
