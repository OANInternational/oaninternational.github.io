import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "./page.module.css";
import Card from "@/components/card/card.component";
import MembershipGoals from "@/components/membership-goals/membership-goals.component";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LiaPeopleCarrySolid, LiaUserFriendsSolid } from "react-icons/lia";
import { GoChecklist } from "react-icons/go";
import { FaUsers, FaHeart } from "react-icons/fa";
import { isLocale, Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const currentMembers = 80;
const targetMembers = 100;

interface HomeCard {
  subtitle: string;
  description: string;
}

interface HomeContent {
  missionTitle: string;
  missionDescription: ReactNode;
  tenYearsButton: string;
  quote: string;
  cards: [HomeCard, HomeCard, HomeCard, HomeCard];
  joinTitle: string;
  joinDescription: ReactNode;
  progressLabel: string;
  becomePartnerBtn: string;
  otherWaysBtn: string;
  overlayText: string;
  videoTitle: string;
}

const content: Record<Locale, HomeContent> = {
  es: {
    missionTitle: "Misión y visión",
    missionDescription: (
      <>
        <span className={styles.descriptionHighlight}>Colaboramos</span> con la
        población local de{" "}
        <span className={styles.descriptionHighlight}>Nikki</span>, en Benín,
        para encontrar y poner en marcha soluciones que permitan impulsar su
        desarrollo y alcanzar su autonomía, a través de la{" "}
        <span className={styles.descriptionHighlight}>investigación</span> y la{" "}
        <span className={styles.descriptionHighlight}>
          concienciación social
        </span>{" "}
        acerca de las desigualdades norte-sur.
      </>
    ),
    tenYearsButton: "¡Cumplimos 10 años!",
    quote:
      "“Un modelo de cooperación al desarrollo sostenible, responsable y replicable”",
    cards: [
      { subtitle: "proyectos", description: "en los últimos 10 años" },
      { subtitle: "areas", description: "de trabajo principales" },
      {
        subtitle: "voluntari@s",
        description: "trabajando con población local",
      },
      { subtitle: "colaboradores", description: "por el presente de Nikki" },
    ],
    joinTitle: "¡Únete a Nuestra Comunidad!",
    joinDescription: (
      <>
        Estamos muy cerca de alcanzar nuestro objetivo de{" "}
        <span className={styles.membershipHighlight}>100 socios</span> que nos
        permita consolidar nuestros proyectos en Nikki y expandir nuestro
        impacto. ¡Solo faltan {targetMembers - currentMembers} personas más!
      </>
    ),
    progressLabel: "socios",
    becomePartnerBtn: "¡Hazte Socio!",
    otherWaysBtn: "Otras formas de ayudar",
    overlayText: "Tu apoyo hace la diferencia",
    videoTitle: "OAN International en 30 s",
  },
  en: {
    missionTitle: "Mission and vision",
    missionDescription: (
      <>
        <span className={styles.descriptionHighlight}>We work</span> together
        with the local community of{" "}
        <span className={styles.descriptionHighlight}>Nikki</span>, in Benin, to
        find and put in place solutions that drive their development and help
        them achieve autonomy, through{" "}
        <span className={styles.descriptionHighlight}>research</span> and{" "}
        <span className={styles.descriptionHighlight}>social awareness</span> of
        North-South inequalities.
      </>
    ),
    tenYearsButton: "We turn 10!",
    quote:
      "“A model of sustainable, responsible and replicable development cooperation”",
    cards: [
      { subtitle: "projects", description: "over the last 10 years" },
      { subtitle: "areas", description: "of core work" },
      {
        subtitle: "volunteers",
        description: "working with the local community",
      },
      { subtitle: "collaborators", description: "for the present of Nikki" },
    ],
    joinTitle: "Join Our Community!",
    joinDescription: (
      <>
        We are very close to reaching our goal of{" "}
        <span className={styles.membershipHighlight}>100 members</span>, which
        will let us consolidate our projects in Nikki and expand our impact.
        Only {targetMembers - currentMembers} more people to go!
      </>
    ),
    progressLabel: "members",
    becomePartnerBtn: "Become a Member!",
    otherWaysBtn: "Other ways to help",
    overlayText: "Your support makes the difference",
    videoTitle: "OAN International in 30 s",
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const t = content[locale];

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
          <h1 className={styles.title}>{t.missionTitle}</h1>
          <p className={styles.description}>{t.missionDescription}</p>

          <Link href={`/${locale}/10-years`} className={styles.noLink}>
            <p className={styles.primaryButton}>{t.tenYearsButton}</p>
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
        <h2 className={styles.quote}>{t.quote}</h2>

        <div className={styles.cardWrapper}>
          <Card
            title="10"
            subtitle={t.cards[0].subtitle}
            description={t.cards[0].description}
            url={`/${locale}/projects`}
            icon={<AiOutlineFundProjectionScreen size={70} />}
          ></Card>

          <Card
            title="5"
            subtitle={t.cards[1].subtitle}
            url={`/${locale}/about-us`}
            description={t.cards[1].description}
            icon={<GoChecklist size={70} />}
          ></Card>

          <Card
            title="80"
            subtitle={t.cards[2].subtitle}
            url={`/${locale}/support-us`}
            description={t.cards[2].description}
            icon={<LiaPeopleCarrySolid size={70} />}
          ></Card>

          <Card
            title="+100"
            url={`/${locale}/about-us`}
            subtitle={t.cards[3].subtitle}
            description={t.cards[3].description}
            icon={<LiaUserFriendsSolid size={70} />}
          ></Card>
        </div>
      </section>

      <section className={styles.membershipSection}>
        <div className={styles.membershipContainer}>
          <div className={styles.membershipContent}>
            <div className={styles.membershipText}>
              <h2 className={styles.membershipTitle}>{t.joinTitle}</h2>
              <p className={styles.membershipDescription}>{t.joinDescription}</p>

              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <div className={styles.progressText}>
                  <span className={styles.currentMembers}>
                    {currentMembers}
                  </span>
                  <span className={styles.separator}>/</span>
                  <span className={styles.targetMembers}>{targetMembers}</span>
                  <span className={styles.progressLabel}>
                    {t.progressLabel}
                  </span>
                </div>
              </div>

              <div className={styles.membershipButtons}>
                <Link
                  href={`/${locale}/become-partner`}
                  className={styles.membershipButton}
                >
                  <FaUsers size={20} />
                  <span>{t.becomePartnerBtn}</span>
                </Link>
                <Link
                  href={`/${locale}/support-us`}
                  className={styles.membershipButtonSecondary}
                >
                  <FaHeart size={20} />
                  <span>{t.otherWaysBtn}</span>
                </Link>
              </div>
            </div>

            <div className={styles.membershipImageContainer}>
              <Image
                className={styles.membershipImage}
                src="/oan-web-023.jpg"
                alt="OAN International community"
                width={400}
                height={300}
              />
              <div className={styles.membershipImageOverlay}>
                <p className={styles.overlayText}>{t.overlayText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MembershipGoals currentMembers={currentMembers} locale={locale} />

      <section className={styles.videoSection}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/EDB6Vk7z1eQ?si=Ol-jEZ5lUuA2Ije5"
          title={t.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </main>
  );
}
