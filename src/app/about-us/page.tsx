import Image from "next/image";

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
      imageUrl: "/people/angel.jpeg",
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
      imageUrl: "/people/lamatou.jpeg",
    },
    {
      name: "Yacoubou Seh",
      title: "Secretario general",
      imageUrl: "/people/yacoubou.jpeg",
    },
    {
      name: "Mousa Yacoubou",
      title: "",
      imageUrl: "/people/moussa.jpeg",
    },
    {
      name: "Hafiz Djaouga",
      title: "",
      imageUrl: "/dummy.jpg",
    },
    {
      name: "Yasminatou Imorou",
      title: "",
      imageUrl: "/people/yasminatou.jpeg",
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
      imageUrl: "/people/imourou.jpeg",
    },
    {
      name: "Chabi Gafarou",
      title: "",
      imageUrl: "/people/chabi.jpeg",
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
      url: "documents/activity-memories/memoria-actividades-oan-2022.pdf",
      name: "Memoria de Actividades - 2022",
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

  return (
    <main>
      <TitlePage
        title="Sobre Nosotros"
        backgroundImageUrl="/oan-web-001.jpg"
        quote={quote}
      />

      {/* HISTORY */}
      <section className={styles.historySection}>
        <div className={styles.historyWrapper}>
          <TitleSection title="Nuestra Historia" />

          <p>
            Un año después, en 2014, nos constituimos como la ONGD que somos hoy
            en Nikki, una población de 70.000 habitantes situada en una de las
            zonas más rurales y con menos recursos del país.
          </p>

          <p>
            Desde sus inicios, OAN Internacional ha puesto a disposición de los
            agentes de cambio de Nikki sus conocimientos y experiencia para
            poner en marcha junto a ellos proyectos coherentes con su realidad y
            que generen un verdadero impacto en su día a día.
          </p>
        </div>

        <div className={styles.historyBlock}>
          <div className={styles.historyBlockTextWrapper}>
            <div className={styles.historyBlockText}>
              <p>
                En los últimos 5 años, más de 100 jóvenes de diversas
                nacionalidades se han desplazado a Nikki para colaborar en
                proyectos de desarrollo con la población local. Actualmente, OAN
                Internacional cuenta con más de 80 personas voluntarias. Además,
                más de 30 estudiantes han realizado sus TFG y TFM con nosotros,
                permitiendo a los universitarios (en Benín y en España) tomar
                conciencia sobre esta realidad.
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
      <section className={styles.workPlaceSection}>
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
      <section className={styles.teamSection}>
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
      <section className={styles.teamSection}>
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
