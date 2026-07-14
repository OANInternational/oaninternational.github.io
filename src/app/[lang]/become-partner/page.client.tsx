"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useParams, useSearchParams } from "next/navigation";

import styles from "./page.module.css";
import TitlePage from "@/components/title-page/title-page.component";
import DonationButtons from "@/components/donation-buttons/donation-buttons.component";
import MembershipGoals from "@/components/membership-goals/membership-goals.component";
import { Locale } from "@/i18n/config";
import { MEMBERSHIP } from "@/constants/membership";

const content: Record<
  Locale,
  {
    title: string;
    hoverText: Record<number, string>;
    intro1: string;
    intro2: string;
    freeTrialTitle: string;
    freeTrialText: string;
    loading: string;
  }
> = {
  es: {
    title: "¡Hazte Socio!",
    hoverText: {
      10: "¡Tu pagas 2,5€ al mes!",
      20: "¡Tu pagas 4€ al mes!",
      25: "¡Tu pagas 7€ al mes!",
      50: "¡Tu pagas 22€ al mes!",
    },
    intro1:
      "Siendo socio/a de OAN International contribuyes con el funcionamiento de la organización y con la consecución de todos los objetivos.",
    intro2:
      "Para hacerte socia/o de OAN International solo tienes que seleccionar la cuota que decidas y completar el breve formulario:",
    freeTrialTitle: "Prueba Gratuita de 1 Mes",
    freeTrialText:
      "¿Quieres conocer mejor OAN International antes de comprometerte? ¡Únete como socio/a durante un mes de forma gratuita!",
    loading: "Cargando…",
  },
  en: {
    title: "Become a Member!",
    hoverText: {
      10: "You pay just 2.50 € a month!",
      20: "You pay just 4 € a month!",
      25: "You pay just 7 € a month!",
      50: "You pay just 22 € a month!",
    },
    intro1:
      "As a member of OAN International, you help keep the organisation running and support the achievement of all our goals.",
    intro2:
      "To become a member of OAN International, all you have to do is choose the contribution you prefer and fill in the short form:",
    freeTrialTitle: "1-Month Free Trial",
    freeTrialText:
      "Want to get to know OAN International better before committing? Join as a member for one month, free of charge!",
    loading: "Loading…",
  },
};

// Create a client component that uses useSearchParams
function BecomePartnerContent() {
  const searchParams = useSearchParams();
  const { lang } = useParams<{ lang: Locale }>();
  const locale = lang;
  const t = content[locale];

  const donationOptions = [
    {
      amount: 10,
      url: "https://buy.stripe.com/8wMeV3ft30GxgWAcMN",
      hoverText: t.hoverText[10],
    },
    {
      amount: 20,
      url: "https://buy.stripe.com/4gwfZ7a8JdtjaycaEK",
      hoverText: t.hoverText[20],
    },
    {
      amount: 25,
      url: "https://buy.stripe.com/28o4gp94FcpfbCg3ce",
      isPreferred: true,
      hoverText: t.hoverText[25],
    },
    {
      amount: 50,
      url: "https://buy.stripe.com/dR64gpft3cpfcGkeUX",
      hoverText: t.hoverText[50],
    },
    // {
    //   amount: 100,
    //   url: "https://buy.stripe.com/5kAbIR3KlfBrcGk7sw",
    //   hoverText: "¡Tu pagas 51,7€ al mes!",
    // },
  ];

  // Use the scrollToSection utility on page load or URL change
  useEffect(() => {
    const section = searchParams.get("section");
    scrollToSection(section || undefined);
  }, [searchParams]);

  return (
    <main>
      <TitlePage title={t.title} backgroundImageUrl="/oan-web-042.jpg" />

      <section id="donations" className={styles.donationSection}>
        <p>{t.intro1}</p>

        <p>{t.intro2}</p>

        <DonationButtons options={donationOptions} locale={locale} />
      </section>

      <MembershipGoals currentMembers={MEMBERSHIP.current} locale={locale} />

      <section id="free-trial" className={styles.freeTrialSection}>
        <h2>{t.freeTrialTitle}</h2>
        <p>{t.freeTrialText}</p>
        <div className={styles.formContainer}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdKR-TX8zy1D9XX_JWydKeiKiuVzp4YvuLxUZAm9XeNtdFZEQ/viewform?embedded=true"
            width="640"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            {t.loading}
          </iframe>
        </div>
      </section>
    </main>
  );
}

// Main component that wraps the content with Suspense
export default function BecomePartner() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BecomePartnerContent />
    </Suspense>
  );
}
