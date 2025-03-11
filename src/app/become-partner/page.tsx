"use client";

import { useEffect, Suspense } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";
import TitlePage from "@/components/title-page/title-page.component";

// Create a client component that uses useSearchParams
function BecomePartnerContent() {
  const searchParams = useSearchParams();

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

        <div className={styles.donationButtons}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://buy.stripe.com/8wMeV3ft30GxgWAcMN"
            className={styles.teamingButton}
          >
            Dona 10€ al mes
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://buy.stripe.com/28o4gp94FcpfbCg3ce"
            className={styles.teamingButtonPreferred}
          >
            Dona 25€ al mes
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://buy.stripe.com/dR64gpft3cpfcGkeUX"
            className={styles.teamingButton}
          >
            Dona 50€ al mes
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://buy.stripe.com/5kAbIR3KlfBrcGk7sw"
            className={styles.teamingButton}
          >
            Dona 100€ al mes
          </a>
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
