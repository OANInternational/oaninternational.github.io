import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import PersonPreview, {
  Person,
} from "@/components/person-preview/person-preview.component";
import TitlePage from "@/components/title-page/title-page.component";

export default function AboutUs() {
  const SPAIN_TEAM: Person[] = [
    {
      name: "Daniel Alfaro",
      title: "Presidente",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Alvaro Pascual",
      title: "Secretario general",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Beatriz Vázquez",
      title: "Coordinadora de proyectos",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Ángel Arquero",
      title: "Coordinador de proyectos",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Sofía Fernández",
      title: "Comunicación",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Almudena Vázquez",
      title: "Comunicación",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Ángela Hidalgo",
      title: "Proyecto Nikarit",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Patricia de Blas",
      title: "Financiación",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Hanna Botello",
      title: "Proyecto Malnutrición",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Alfonso García",
      title: "Tecnología",
      imageUrl: "/dummy.jpg",
    },
  ];

  const BENIN_TEAM: Person[] = [
    {
      name: "Kader Madougou",
      title: "Coordinador general",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Mireille Gnammi",
      title: "Tesorería",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Lamatou Moumouni",
      title: "Administración general",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Yacoubou Seh",
      title: "Secretario general",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Mousa Yacoubou",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Hafiz Djaouga",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Yasminatou Imorou",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Aminatou Imorou",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Alimatou Soumaila",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Imourou Worou",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Chabi Gafarou",
      title: "",
      imageUrl: "/dummy.jpg",
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

  return (
    <main>
      <TitlePage
        title="Sobre Nosotros"
        backgroundImageUrl="/oan-web-001.jpg"
        quote={quote}
      />

      <section className={styles.historySection}>
        <TitleSection title="Nuestra Historia" />
      </section>

      <section className={styles.subHistorySection}>
        <div className={styles.historyBlock}>
          <Image
            className={styles.historyBlockImage}
            src="/oan-web-002.jpg"
            width={500}
            height={500}
            alt="OAN history"
          />
          <div className={styles.historyBlockText}>
            <p className={styles.historyBlockParagraph}>
              En 2013, uno de los fundadores de OAN International, Daniel
              Alfaro, viaja a Nikki como voluntario. Un año más tarde, un grupo
              de 8 jóvenes fundan la ONG OAN International (Objetivo Analizar
              Nikki).
            </p>
            <p className={styles.historyBlockParagraph}>
              Una organización sin ánimo de lucro con una misión: acompañar a
              los agentes de desarrollo de la comuna de Nikki a través del
              intercambio de conocimientos y en la creación conjunta de un
              modelo de cooperación sostenible, responsable y replicable.
            </p>
          </div>
        </div>

        <div className={styles.historyBlock}>
          <div className={styles.historyBlockText}>
            <p className={styles.historyBlockParagraphLeft}>
              Es en este mismo año, 2014, cuando el equipo viaja a Nikki por
              primera vez, con un objetivo claro: INVESTIGAR las necesidades de
              la población.
            </p>
            <p className={styles.historyBlockParagraphLeft}>
              Desde entonces, cada año, jóvenes de diversas nacionalidades se
              han desplazado a terreno para trabajar conjuntamente con los
              agentes locales de desarrollo en Nikki en proyectos que dan
              respuesta a las demandas de los mismos sobre necesidades
              analizadas y consensuadas. En los últimos 5 años, más de 100
              personas se han desplazado a terreno con esta misión.
            </p>
          </div>

          <Image
            className={styles.historyBlockImage}
            src="/oan-web-003.jpg"
            width={500}
            height={500}
            alt="OAN history"
          />
        </div>

        <div className={styles.historyBlock}>
          <Image
            className={styles.historyBlockImage}
            src="/oan-web-005.jpg"
            width={500}
            height={500}
            alt="OAN history"
          />
          <div className={styles.historyBlockText}>
            <p className={styles.historyBlockParagraph}>
              En la actualidad OAN International cuenta con más de 80 personas
              voluntarias, realizando una importante labor no solo en terreno,
              sino también trabajando en acciones de sensibilización y lucha por
              la generación de un espíritu crítico e informado, así como de
              acción política sobre las relaciones norte-sur en nuestro entorno.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}></section>

      <section className={styles.teamSection}>
        <TitleSection title="Nuestro Equipo" />

        <h3>España</h3>
        <div className={styles.countryTeamSection}>{spainTeam}</div>

        <h3>Benin</h3>
        <div className={styles.countryTeamSection}>{beninTeam}</div>
      </section>
    </main>
  );
}
