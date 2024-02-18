import TitlePage from "@/components/title-page/title-page.component";

import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <main>
      <TitlePage title="Cookies" backgroundImageUrl="/oan-web-021.jpg" />

      <section className={styles.legalSection}>
        <h2 className={styles.marginBottom10}>¿Qué es una coockie?</h2>
        <p className={styles.marginBottom}>
          Una cookie es una pequeña pieza de texto enviada a tu navegador por
          una web que has visitado. Ayuda a la web a recordar información sobre
          tu visita, como tu idioma preferente y otros ajustes. Esto puede hacer
          tu próxima visita más sencilla y el sitio más útil para ti. Las
          cookies juegan un rol importante. Sin ellas, usar la web sería una
          experiencia mucho más frustante.
        </p>

        <h2 className={styles.marginBottom10}>Google Analytics cookies</h2>
        <p className={styles.marginBottom}>
          Este sitio usa Google Analytics para entender mejor cómo usas el
          portal. El objetivo principal con Google Analytics es aprender y
          mejorar el sitio para así poder obtener lo mejor de este.
        </p>

        <h2 className={styles.marginBottom10}>Deshabilitar cookies</h2>
        <p className={styles.marginBottom}>
          Sin embargo, si quieres puedes deshabilitar las cookies de este sitio
          u otro, recomendamos que compruebes la sección de ayuda de tu
          navegador para así poder deshabilitarlas.
        </p>
      </section>
    </main>
  );
}
