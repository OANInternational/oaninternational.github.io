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

        <form className={styles.form}>
          <div className={styles.email}>
            <label htmlFor="frm-email">Email</label>
            <input
              id="frm-email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.name}>
            <label htmlFor="frm-first">Nombre</label>
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
            />
          </div>

          <div className={styles.message}>
            <label htmlFor="frm-message">Mensage</label>
            <textarea
              className={styles.textarea}
              id="frm-message"
              rows={6}
              name="message"
            ></textarea>
          </div>
          <div className={styles.button}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
