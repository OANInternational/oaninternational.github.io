"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import TitlePage from "@/components/title-page/title-page.component";
import DonationButtons from "@/components/donation-buttons/donation-buttons.component";
import MembershipGoals from "@/components/membership-goals/membership-goals.component";

// Create a client component that uses useSearchParams
function BecomePartnerContent() {
  const searchParams = useSearchParams();

  const donationOptions = [
    {
      amount: 10,
      url: "https://buy.stripe.com/8wMeV3ft30GxgWAcMN",
      hoverText: "¡Tu pagas 2,5€ al mes!",
    },
    {
      amount: 20,
      url: "https://buy.stripe.com/4gwfZ7a8JdtjaycaEK",
      hoverText: "¡Tu pagas 4€ al mes!",
    },
    {
      amount: 25,
      url: "https://buy.stripe.com/28o4gp94FcpfbCg3ce",
      isPreferred: true,
      hoverText: "¡Tu pagas 7€ al mes!",
    },
    {
      amount: 50,
      url: "https://buy.stripe.com/dR64gpft3cpfcGkeUX",
      hoverText: "¡Tu pagas 22€ al mes!",
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
      <TitlePage title="¡Hazte Socio!" backgroundImageUrl="/oan-web-042.jpg" />

      <section id="donations" className={styles.donationSection}>
        <p>
          Siendo socio/a de OAN International contribuyes con el funcionamiento
          de la organización y con la consecución de todos los objetivos.
        </p>

        <p>
          Para hacerte socia/o de OAN International solo tienes que seleccionar
          la cuota que decidas y completar el breve formulario:
        </p>

        <DonationButtons options={donationOptions} />
      </section>

      <MembershipGoals />

      <section id="free-trial" className={styles.freeTrialSection}>
        <h2>Prueba Gratuita de 1 Mes</h2>
        <p>
          ¿Quieres conocer mejor OAN International antes de comprometerte?
          ¡Únete como socio/a durante un mes de forma gratuita!
        </p>
        <div className={styles.formContainer}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdKR-TX8zy1D9XX_JWydKeiKiuVzp4YvuLxUZAm9XeNtdFZEQ/viewform?embedded=true"
            width="640"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Cargando…
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
