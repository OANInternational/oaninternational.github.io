import TitleSection from "@/components/title-section/title-section.component";
import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";
import Image from "next/image";

export default function SonYara() {
  const quote = {};
  return (
    <main>
      <TitlePage
        title="Son Yara"
        backgroundImageUrl="/oan-web-019.jpg"
        subTitle="Un documental de OAN International sobre el trabajo de la mujer en Nikki y su rol en la comunidad"
      />

      <section className={styles.mainSection}>
        <p>
          Sale el sol en Nikki, al norte de Benín. En un viaje del pasado al
          presente, del amanecer al atardecer, las palabras de mujeres de la
          comuna se convierten en las protagonistas de una historia de
          superación y lucha por sus derechos. Palabras que nacen de lo personal
          para reflejarse en lo universal.
        </p>

        <p>
          A través de entrevistas a agentes locales y relatos de vida, este
          cortometraje documental concebido por OAN Internacional profundiza en
          el tema del trabajo de la mujer y su rol en la comunidad.
        </p>

        <a
          href="https://vimeo.com/ondemand/sonyara"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.documentaryButton}
        >
          Ver Documental
        </a>
      </section>

      <section className={styles.textSection}>
        <TitleSection title="Sobre el tema de la obra" />

        <div className={styles.textWrapper}>
          <div className={styles.descriptions}>
            <p>
              Las normas y tradiciones sociales todavía crean hoy una clara
              división en el reparto del trabajo en función del género. Según el
              Informe sobre Desarrollo Humano de 2015, el número de hombres es
              casi el doble que el de mujeres en el trabajo remunerado y el de
              mujeres el triple que el de hombres en el no remunerado.
            </p>

            <p>
              Las tareas domésticas y el trabajo de cuidados resultan
              fundamentales para el equilibrio y bienestar de las sociedades
              humanas. Sin embargo, la distribución actual de responsabilidades
              limita las oportunidades y posibilidades de elección de las
              mujeres y, en última instancia, su desarrollo y el de sus
              comunidades.
            </p>

            <p>
              En OAN International colaboramos en la comuna de Nikki con mujeres
              a través de proyectos multidisciplinares para apoyar su
              empoderamiento y la lucha por sus derechos.
            </p>

            <p>
              En concreto, una importante línea de actuación es precisamente
              impulsar iniciativas que potencien su autonomía económica como
              reflejan los proyectos de Nikarit o Microcréditos. Son yara busca
              así sumarse a este objetivo, y hacerlo gracias al cine y a la
              educación al desarrollo.
            </p>
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
        <TitleSection title="¿Por qué un documental?" />

        <p>
          Además de las iniciativas puestas en marcha en terreno como parte de
          nuestro trabajo en cooperación, desde OAN International consideramos
          que la educación al desarrollo juega también un papel fundamental en
          la construcción del cambio en nuestras sociedades. Por medio de
          eventos, formaciones y acciones de comunicación trabajamos por generar
          un espíritu crítico que invite a la reflexión sobre el origen y la
          naturaleza de las relaciones Norte-Sur.
        </p>

        <p>
          Son yara busca así aprovechar el valor creativo y transformador del
          arte en general, y del cine en particular, para compartir las voces e
          historias de las mujeres de Nikki con las audiencias en España,
          acercar sus realidades y promover la creación de conexiones y
          paralelismos con nuestra propia experiencia.
        </p>
      </section>

      <section className={styles.picturesSection}>
        <Image
          height={250}
          width={250}
          src="/oan-web-001.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-002.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-003.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-004.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-005.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-006.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-008.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-009.jpg"
          alt=""
          className={styles.picture}
        />
        <Image
          height={250}
          width={250}
          src="/oan-web-010.jpg"
          alt=""
          className={styles.picture}
        />
      </section>
    </main>
  );
}
