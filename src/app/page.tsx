import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import Card from "@/components/card/card.component";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <Image
          className={styles.map}
          src="/africa-benin.svg"
          alt="Africa Benin map"
          width={300}
          height={250}
        />

        <div>
          <h1 className={styles.title}>Misión y visión</h1>
          <p className={styles.description}>
            <span className={styles.descriptionHighlight}>Colaboramos</span> con
            la población local de{" "}
            <span className={styles.descriptionHighlight}>Nikki</span>, en
            Benín, para encontrar y poner en marcha soluciones que permitan
            impulsar su desarrollo y alcanzar su autonomía, a través de la{" "}
            <span className={styles.descriptionHighlight}>investigación</span> y
            la{" "}
            <span className={styles.descriptionHighlight}>
              concienciación social
            </span>{" "}
            acerca de las desigualdades norte-sur.
          </p>

          <Link href={"/"} className={styles.noLink}>
            <p className={styles.primaryButton}>SÍGUENOS LOS PASOS</p>
          </Link>
        </div>
      </section>

      <section className={styles.secondSection}>
        <h2 className={styles.quote}>
          “Un modelo de cooperación al desarrollo sostenible, responsable y
          replicable”
        </h2>

        <div className={styles.cardWrapper}>
          <Card
            title="10"
            subtitle="projectos"
            description="en los últimos 10 años"
            iconUrl="/checklist.svg"
          ></Card>

          <Card
            title="5"
            subtitle="areas"
            description="de trabajo principales"
            iconUrl="/colaboration.svg"
          ></Card>

          <Card
            title="+50"
            subtitle="colaboradores"
            description="han trabajado con nosotros"
            iconUrl="/project-icon.svg"
          ></Card>

          <Card
            title="+50"
            subtitle="colaboradores"
            description="han trabajado con nosotros"
            iconUrl="/project-icon.svg"
          ></Card>
        </div>
      </section>

      <section className={styles.videoSection}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/-PY6BUSOWfI"
          title="OAN International en 30 s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </main>
  );
}
