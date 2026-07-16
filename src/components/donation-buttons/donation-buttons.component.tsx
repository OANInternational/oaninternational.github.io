import styles from "./donation-buttons.module.css";
import { useState, useEffect } from "react";
import { Locale } from "@/i18n/config";

interface DonationOption {
  amount: number;
  url: string;
  isPreferred?: boolean;
  hoverText?: string;
}

interface DonationButtonsProps {
  options: DonationOption[];
  locale: Locale;
}

const donateLabel: Record<Locale, (amount: number) => string> = {
  es: (amount) => `Dona ${amount}€ al mes`,
  en: (amount) => `Donate ${amount}€ per month`,
  fr: (amount) => `Faites un don de ${amount}€ par mois`,
};

const thanksLabel: Record<Locale, (amount: number) => string> = {
  es: (amount) => `¡Gracias por donar ${amount}€!`,
  en: (amount) => `Thank you for donating ${amount}€!`,
  fr: (amount) => `Merci pour votre don de ${amount}€ !`,
};

const DonationButtons = ({ options, locale }: DonationButtonsProps) => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [showHoverText, setShowHoverText] = useState<number | null>(null);

  useEffect(() => {
    // Hiding on unhover is handled synchronously in onMouseLeave; the effect
    // only schedules the delayed reveal so it doesn't setState synchronously.
    if (hoveredButton === null) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setShowHoverText(hoveredButton);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [hoveredButton]);

  return (
    <div className={styles.donationButtons}>
      {options.map((option) => (
        <a
          key={option.amount}
          target="_blank"
          rel="noopener noreferrer"
          href={option.url}
          className={`${
            option.isPreferred
              ? styles.teamingButtonPreferred
              : styles.teamingButton
          } ${hoveredButton === option.amount ? styles.hovered : ""}`}
          onMouseEnter={() => setHoveredButton(option.amount)}
          onMouseLeave={() => {
            setHoveredButton(null);
            setShowHoverText(null);
          }}
        >
          <span
            className={`${styles.buttonText} ${
              showHoverText === option.amount ? styles.fadeIn : ""
            }`}
          >
            {showHoverText === option.amount
              ? option.hoverText || thanksLabel[locale](option.amount)
              : donateLabel[locale](option.amount)}
          </span>
        </a>
      ))}
    </div>
  );
};

export default DonationButtons;
