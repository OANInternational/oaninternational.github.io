import TitlePage from "@/components/title-page/title-page.component";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";

export default function AboutUs() {
  return (
    <main>
      <TitlePage
        title="Contacta con nosotros"
        backgroundImageUrl="/oan-web-001.jpg"
      />

      <section className={styles.mainSection}>
        <TitleSection title="¿Quieres contactar con nosotros?" />

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSesVw6RZbW6-CHJUG90L9fmJpBq5PFAt4OFYtz_quIjLGOKSg/viewform?embedded=true"
          width="640"
          height="642"
        >
          Cargando…
        </iframe>
      </section>
    </main>
  );
}
