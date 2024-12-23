import Image from "next/image";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import TitlePage from "@/components/title-page/title-page.component";

export default function AboutUs() {
  return (
    <main>
      <TitlePage
        title="OAN International cumple 10 años"
        backgroundImageUrl="/oan-web-042.jpg"
      />

      {/* HISTORY */}
      <section className={styles.historySection}>
        <div className={styles.historyWrapper}>
          <p>
            En 2014 fundamos OAN International con el objetivo de acompañar a la
            población de la comuna de Nikki (Benín) en la lucha por sus
            derechos. Para ello planteamos un modelo de cooperación
            internacional responsable, sostenible y contando con la población
            como actor principal de los proyectos.
          </p>

          <p>
            Durante estos 10 años hemos trabajado en salud, acceso al agua
            potable, emancipación de la mujer, comercio justo, agronomía y
            salubridad.
          </p>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className={styles.donationSection}>
        <TitleSection title="Nuestros logros" />
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
            <p className={styles.valuesBlockParagraph}>
              <strong>Reducir</strong> la tasa de{" "}
              <strong>malnutrición infantil</strong> en 14 pueblos con
              evaluación de más de 1100 niños y reducción del{" "}
              <strong>80%</strong> de los casos de malnutrición. Puesta en
              marcha de 12 comités de seguimiento de la desnutrición compuestos
              por 36 personas de los pueblos que han sido formadas para saber
              detectar los casos de desnutrición y derivarlo a los servicios
              sanitarios correspondientes.
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <p className={styles.valuesBlockParagraph}>
                Dotado de maquinaria, herramientas y materiales a las
                cooperativas de mujeres deproductoras de karité con las que
                trabajamos, promoviendo la{" "}
                <strong>autonomía de 500 mujeres</strong> productoras de karité
                para la producción de manteca cumpliendo con los estándares de
                calidad nacionales e internacionales. Todo ello ha mejorado la
                vida de las alrededor de <strong>2.500 personas</strong> que
                viven en estos pueblos. Gracias a esto, las mujeres han{" "}
                <strong>aumentado sus ingresos en un 70%</strong> desde el
                inicio del proyecto.
              </p>
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
            <p className={styles.valuesBlockParagraph}>
              Hemos{" "}
              <strong>
                dinamizado el sistema de reparación de bombas de agua
              </strong>{" "}
              en más de <strong>70 comunidades</strong> (15.000 personas),
              consiguiendo que exista una mayor garantía de piezas de repuesto
              para reparaciones, mayor consciencia de los habitantes para el
              mantenimiento preventivo de las bombas de agua y mejorando la
              formación de los técnicos reparadores en buenas prácticas para el
              desempeño de su oficio.
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <p className={styles.valuesBlockParagraph}>
                Hemos Impulsado la puesta en marcha de{" "}
                <strong>4 huertas comunitarias</strong> gestionadas por mujeres,
                gracias a las que se han aumentado sus ingresos y mejorado el
                acceso a alimentos en pueblos rurales.
              </p>
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
            <p className={styles.valuesBlockParagraph}>
              Hemos facilitado el <strong>acceso a microcreditos</strong> para
              más de <strong>40 mujeres</strong> en Nikki durante 5 años,
              ayudando a a pequeñas empresarias a que impulsen sus negocios y
              mejoren su calidad de vida. Hemos apoyado la constitución de una
              red de solidaridad entre mujeres autodenominada Soukiana
              (&apos;Amémonos&apos; en lengua batonou), acompañándolas con más
              de <strong>30 sesiones de formación</strong> y puesta en común
              sobre temas de igualdad de género y empoderamiento de la mujer.
            </p>
          </div>
        </div>

        <div className={styles.valuesBlockLeft}>
          <div className={styles.valuesBlockText}>
            <div className={styles.valuesBlockTextLeft}>
              <p className={styles.valuesBlockParagraph}>
                Desde 2017 anualmente impulsamos la celebración de la{" "}
                <strong>
                  Jornada Internacional de la Eliminación de la Violencia contra
                  la Mujer
                </strong>
                , y desde 2022 también el día de la Mujer, donde participan cada
                año más de <strong>150 personas</strong>, líderes comentarios y
                autoridades.
              </p>
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
          <p>
            Todo esto se ha conseguido con mucho esfuerzo de cientos de personas
            voluntarias en España y Benín durante esta década, permitiéndonos
            llegar al punto donde nos encontramos ahora. Pero queremos seguir
            creciendo y afianzando este proyecto, por lo que te pedimos tu
            colaboración.
          </p>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.historyBlock}>
          <div className={styles.historyBlockTextWrapper}>
            <div className={styles.historyBlockText}>
              <h3>¿Por qué OAN International?</h3>
              <p>
                Al elegir a OAN International, estás apoyando una ONG pequeña
                pero con un impacto tangible y directo en terreno. Nuestra
                estructura nos permite mantener una transparencia total en la
                gestión de los recursos, lo que significa que puedes ver cómo y
                dónde se utiliza tu aportación. A diferencia de organizaciones
                más grandes, nuestra proximidad a los proyectos y con el equipo
                local garantiza que tu contribución se traduzca en un cambio
                real y visible en la vida de las comunidades de Nikki (Benín).
                Al ser socio/a de OAN, tu aportación mensual nos permite
                mantener los proyectos y no solo estás colaborando con una
                causa, sino que también formas parte activa del desarrollo de
                cada proyecto.
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

      <section className={styles.teamSection}>
        <TitleSection title="FAQ" />

        <h3>¿Cuál es el destino de mi aportación?</h3>
        <p>
          El 100% de tu aportación va dirigida a los objetivos de la ONG. Somos
          transparentes con nuestras cuentas que puedes encontrar publicadas
          anualmente en nuestra web en el apartado Transparencia.
        </p>

        <h3>¿Mi aportación está sujeta a desgravación fiscal?</h3>
        <p>
          Todas las donaciones a OAN International desgravan en función de la
          Ley 49/2002, de 23 de diciembre, de régimen fiscal de las entidades
          sin fines lucrativos y de los incentivos fiscales del mecenazgo.
        </p>

        <p>
          Hacienda te devuelve el 80% de lo que dones, hasta los primeros 250€
          (al superar esta cuantía se desgrava el 40%, y si llevas 3 años
          colaborando con nosotros el 45%).
        </p>

        <h3>¿Mis datos personales están protegidos?</h3>
        <p>
          OAN International cumple con la Ley Orgánica 15/1999, de 13 de
          diciembre, de Protección de Datos de Carácter Personal.
        </p>

        <h3>¿Cómo puedo modificar mi cuota o datos personales?</h3>
        <p>Escribe a contacto@oaninternational para cualquier consulta</p>
      </section>
    </main>
  );
}
