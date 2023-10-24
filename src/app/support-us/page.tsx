import TitleSection from "@/components/title-section/title-section.component";
import styles from "./page.module.css";
import Image from "next/image";
import {
  PiPottedPlantLight,
  PiHandshakeLight,
  PiFilmSlateLight,
} from "react-icons/pi";

export default function SupportUs() {
  const iconStyle = { color: "var(--primary-color)" };

  const CAMPAIGNS = [
    {
      name: "Mi grano de arena",
      icon: <PiHandshakeLight size={70} style={iconStyle} />,
      url: "",
    },
    {
      name: "Adopta un karite",
      icon: <PiPottedPlantLight size={70} style={iconStyle} />,
      url: "",
    },
    {
      name: "Documental SON YARA",
      icon: <PiFilmSlateLight size={70} style={iconStyle} />,
      url: "",
    },
  ];

  const campaigns = CAMPAIGNS.map((campaign) => (
    <div key={campaign.name} className={styles.campaignBox}>
      {campaign.icon}
      <h2 className={styles.campaignName}>{campaign.name}</h2>
    </div>
  ));

  return (
    <main>
      <section className={styles.mainSection}>
        <Image
          className={styles.background}
          src="/oan-web-011.jpg"
          width={1080}
          height={150}
          quality={100}
          alt="Background header image"
        />

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
              href="mailto:contacto@oaninternational.org"
              className={styles.emailButton}
            >
              contacto@oaninternational.org
            </a>

            <a className={styles.phoneButton} href="tel:+34696714499">
              (+34) 696 714 499
            </a>
          </div>
        </div>
      </section>

      <section className={styles.campaignsSection}>
        <TitleSection title="Campañas" />

        <div className={styles.campaignsWrapper}>{campaigns}</div>
      </section>

      <section className={styles.donationSection}>
        <TitleSection title="Dona" />

        <p>
          Ayuda a impulsar el <b>desarrollo</b> y la <b>autonomía de Nikki</b> .
        </p>
      </section>
    </main>
  );
}
