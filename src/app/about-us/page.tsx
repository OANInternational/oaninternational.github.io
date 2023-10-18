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

      {/* HISTORY */}
      <section>
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

      {/* WORK PLACE */}
      <section className={styles.workPlaceSection}>
        <TitleSection title="Donde trabajamos" />

        <p>
          Benín, es un país situado en el golfo de Guinea, haciendo frontera con
          Togo al oeste, Nigeria al este y Burkina Faso y Níger al norte.
          Antigua colonia de Dahomey, la capital es Porto-Novo, pero la sede del
          gobierno se sitúa en Cotonou, que es a su vez la capital económica y
          el mayor núcleo de población.
        </p>

        <p>
          La esperanza de vida al nacer es de 59 años, que con un PIB de
          8.747.000 millones de dólares (1,900 dólares per cápita), un 36,2 % de
          la población viviendo debajo del umbral de la pobreza, le confieren un
          índice de desarrollo humano del 0,476, ocupando así la posición 165 de
          187 países.
        </p>

        <p>
          OAN International trabaja específicamente en Nikki situado en el
          departamento de Borgou, la capital del reino Batonou, con una
          población de unos 150.000 habitantes y una extensión aproximada de
          3.000 km2 (similar a la provincia de Álava). La comuna se divide a su
          vez en los arrondissements de Biro, Gnonkourokali, Ouénou, Sérékalé,
          Suya, Tasso y Nikki. En cuanto a la población, esta está distribuida
          uniformemente entre todos a excepción de Nikki, con una población de
          unos 70.000 habitantes y Suya, con cifras en torno a los 8.000
          habitantes. El resto acoge de este modo a unas 150.000 personas cada
          uno. Esta región se trata de una de las zonas más rurales y con menos
          recursos de la nación.
        </p>
      </section>

      {/* VALUES */}
      <section>
        <div className={styles.valuesBlock}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-006.jpg"
            width={400}
            height={400}
            alt="OAN history"
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

        <div className={styles.valuesBlock}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesTitle}>
              <h1 className={styles.valuesTitleNumber}>2</h1>
              <h2 className={styles.valuesTitleText}>TRANSPARENCIA</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              Trabajamos desde la TRANSPARENCIA y la información pública como
              garante de la calidad de nuestra actuación.
            </p>
          </div>

          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-006.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />
        </div>

        <div className={styles.valuesBlock}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-008.jpg"
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

        <div className={styles.valuesBlock}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesTitle}>
              <h1 className={styles.valuesTitleNumber}>4</h1>
              <h2 className={styles.valuesTitleText}>HUMILDAD y RESPETO</h2>
            </div>

            <p className={styles.valuesBlockParagraph}>
              Actuamos desde la HUMILDAD y del RESPETO hacia las personas con
              las que trabajamos.
            </p>
          </div>

          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-006.jpg"
            width={400}
            height={400}
            alt="OAN history"
          />
        </div>

        <div className={styles.valuesBlock}>
          <Image
            className={styles.valuesBlockImage}
            src="/oan-web-008.jpg"
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
      <section className={styles.teamSection}>
        <TitleSection title="Transparencia" />

        <p>
          En OAN creemos que la transparencia es fundamental para el buen
          funcionamiento de una organización. Aquí podrás conocer cómo funciona
          OAN desde dentro, cuál es nuestra normativa y cómo nos financiamos.{" "}
        </p>

        <h3>Estatutos</h3>
        <ul>
          <li>
            <a
              className={styles.fileDownloadLink}
              href="/documents/estatutos-oan-2020.pdf"
              download="estatutosOAN2020"
            >
              Estatutos OAN 2020
            </a>
          </li>
        </ul>

        <h3>Memorias económicas</h3>
        <ul>
          <li>
            <a
              className={styles.fileDownloadLink}
              href="/oan-web-015.jpg"
              download="estatutosOan2023"
            >
              Estatutos OAN 2023
            </a>
          </li>
        </ul>

        <h3>Memoria de actividades</h3>
        <div>
          <li>Memoria 2021</li>
        </div>
      </section>

      {/* TEAM */}
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
