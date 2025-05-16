"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import TitlePage from "@/components/title-page/title-page.component";
import DonationButtons from "@/components/donation-buttons/donation-buttons.component";

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
