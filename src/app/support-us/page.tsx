import TitleSection from "@/components/title-section/title-section.component";
import styles from "./page.module.css";
import Image from "next/image";
import {
  PiPottedPlantLight,
  PiHandshakeLight,
  PiFilmSlateLight,
} from "react-icons/pi";
import CampaignPreview, {
  Campaign,
} from "@/components/campaign-preview/campaign-preview.component";

export default function SupportUs() {
  const CAMPAIGNS: Campaign[] = [
    {
      name: "Mi grano de arena",
      icon: PiHandshakeLight,
      link: "https://www.migranodearena.org/",
    },
    {
      name: "Adopta un karite",
      icon: PiPottedPlantLight,
      link: "https://nikarit.es/collections/oan-international/products/hermanate-con-un-karite",
    },
    {
      name: "Documental SON YARA",
      icon: PiFilmSlateLight,
      url: "son-yara",
    },
  ];

  const campaigns = CAMPAIGNS.map((campaign) => (
    <CampaignPreview key={campaign.name} campaign={campaign} />
  ));

  return (
    <main>
      <section className={styles.mainSection}>
        <div className={styles.wrapper}>
          <div className={styles.headlines}>
            <h2 className={styles.headlineBox}>Comités</h2>
            <h2 className={styles.headlineBoxSecondary}>Investigación</h2>
            <h2 className={styles.headlineBoxTertiary}>Departamentos</h2>

            <h5 className={styles.headlineDescription}>
              Eventos, comunicación y márketing, diseño, traducción, recursos
              humanos, legal y tesorería
            </h5>
          </div>

          <div className={styles.text}>
            <h1 className={styles.title}>Colabora con nosotr@s</h1>

            <p>
              Participa en nuestras{" "}
              <span className={styles.colorSecondary}>iniciativas</span> o únete
              como <span className={styles.colorSecondary}>voluntari@</span>.
              ¡Te esperamos con los brazos abiertos!
            </p>

            <h2 className={styles.subTitle}>Escríbenos</h2>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contacto@oaninternational.org"
              className={styles.emailButton}
            >
              contacto@oaninternational.org
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.phoneButton}
              href="tel:+34696714499"
            >
              (+34) 696 714 499
            </a>
          </div>
        </div>

        <Image
          className={styles.background}
          src="/oan-web-011.jpg"
          width={1080}
          height={150}
          quality={100}
          alt="Background header image"
        />
      </section>

      <section className={styles.campaignsSection}>
        <TitleSection title="Campañas" />

        <div className={styles.campaignsWrapper}>{campaigns}</div>
      </section>

      <section className={styles.donationSection}>
        <TitleSection title="Dona" />

        <p>
          Todas las donaciones a <b>OAN International</b> desgravan en función
          de la{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-25039"
            className={styles.link}
          >
            Ley 49/2002
          </a>
          , de 23 de diciembre, de régimen fiscal de las entidades sin fines
          lucrativos y de los incentivos fiscales del mecenazgo.{" "}
        </p>

        <div className={styles.donationImageSection}>
          <Image src="/donation.jpg" alt="" width={400} height={200} />

          <div className={styles.donationTextSection}>
            <p>
              Hacienda <b>te devuelve el 80% de lo que dones</b>, hasta los
              primeros 250€ (al superar esta cuantía se desgrava el 40%, y si
              llevas 3 años colaborando con nosotros el 45%).
            </p>

            <p>
              Con muy poco puedes ayudarnos a generar un gran impacto en Nikki.
              Juntos podemos conseguir un mundo más justo.
            </p>
          </div>
        </div>

        <h2 className={styles.donationMethodTitle}>Transferencia o Bizum</h2>

        <div className={styles.donationImageSection}>
          <div className={styles.donationTextSection}>
            <p>
              La mejor manera de donarnos es hacer directamente una
              transferencia periódica a nuestra cuenta:
            </p>
            <div>
              <p>Banco Santander</p>
              <p>OAN International</p>
              <p>IBAN: ES04 0049 6109 60 2516359826</p>
              <p>BIC / SWIFT: BSCHESMMXXX</p>
            </div>
          </div>
          <div className={styles.donationTextSection}>
            <p>
              Si lo prefieres, puedes realizar también tu donación a través de
              Bizum, insertando el código de campaña de OAN INTERNATIONAL:
            </p>

            <h2>00107</h2>
          </div>
        </div>

        <h2 className={styles.donationMethodTitle}>Teaming</h2>
        <p>¡En OAN International te lo ponemos fácil!</p>
        <p>
          Sabemos que eres joven y tienes presupuesto limitado. Así que te
          proponemos que dones solo 1 café al mes: 1€ al mes.
        </p>
        <p>
          ¡Inscríbete en nuestro equipo de Teaming y estarás apoyando proyectos
          de desarrollo en salud, agua, empoderamiento de mujer y mucho más!
        </p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.teaming.net/oaninternational"
          className={styles.teamingButton}
        >
          Únete a nuestro grupo
        </a>
      </section>

      <section className={styles.thesisSection}>
        <div className={styles.thesisText}>
          <TitleSection title="Tu TFG/TFM con OAN" />

          <p>
            Presentamos una nueva forma de cooperación que hace partícipe del
            cambio a la universidad. Si eres universitario y quieres marcar la
            diferencia, ¡esto es perfecto para ti!
          </p>

          <p>
            Puedes aportar tu ayuda realizando tu TFG o TFM sobre algún proyecto
            de OAN International en Nikki. Trabajarás de la mano de nuestros
            comités:
          </p>

          <ul>
            <li>Comité de Energía, Infraestructuras y Agua</li>
            <li>Comité Biosanitario</li>
            <li>Comité de Políticas Sociales</li>
            <li>Comité de Agronomía</li>
          </ul>

          <p>¡No dudes y escríbenos!</p>
        </div>
      </section>
    </main>
  );
}
