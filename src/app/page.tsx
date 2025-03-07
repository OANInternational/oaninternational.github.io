import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import Card from "@/components/card/card.component";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LiaPeopleCarrySolid, LiaUserFriendsSolid } from "react-icons/lia";
import { GoChecklist } from "react-icons/go";

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

          <Link href={"/10-years"} className={styles.noLink}>
            <p className={styles.primaryButton}>¡Cumplimos 10 años!</p>
          </Link>
        </div>

        <Image
          className={styles.background}
          src="/oan-web-004.jpg"
          alt="Africa Benin map"
          width={300}
          height={250}
        />
      </section>

      <section className={styles.secondSection}>
        <h2 className={styles.quote}>
          “Un modelo de cooperación al desarrollo sostenible, responsable y
          replicable”
        </h2>

        <div className={styles.cardWrapper}>
          <Card
            title="10"
            subtitle="proyectos"
            description="en los últimos 10 años"
            url="/projects"
            icon={<AiOutlineFundProjectionScreen size={70} />}
          ></Card>

          <Card
            title="5"
            subtitle="areas"
            url="/about-us"
            description="de trabajo principales"
            icon={<GoChecklist size={70} />}
          ></Card>

          <Card
            title="80"
            subtitle="voluntari@s"
            url="/support-us"
            description="trabajando con población local"
            icon={<LiaPeopleCarrySolid size={70} />}
          ></Card>

          <Card
            title="+100"
            url="/about-us"
            subtitle="colaboradores"
            description="por el presente de Nikki"
            icon={<LiaUserFriendsSolid size={70} />}
          ></Card>
        </div>
      </section>

      <section className={styles.videoSection}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/EDB6Vk7z1eQ?si=Ol-jEZ5lUuA2Ije5"
          title="OAN International en 30 s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </main>
  );
}
