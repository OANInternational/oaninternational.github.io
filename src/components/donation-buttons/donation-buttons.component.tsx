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

const DonationButtons = ({ options, locale }: DonationButtonsProps) => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [showHoverText, setShowHoverText] = useState<number | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (hoveredButton !== null) {
      timeoutId = setTimeout(() => {
        setShowHoverText(hoveredButton);
      }, 300);
    } else {
      setShowHoverText(null);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
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
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span
            className={`${styles.buttonText} ${
              showHoverText === option.amount ? styles.fadeIn : ""
            }`}
          >
            {showHoverText === option.amount
              ? option.hoverText ||
                (locale === "en"
                  ? `Thank you for donating ${option.amount}€!`
                  : `¡Gracias por donar ${option.amount}€!`)
              : locale === "en"
                ? `Donate ${option.amount}€ per month`
                : `Dona ${option.amount}€ al mes`}
          </span>
        </a>
      ))}
    </div>
  );
};

export default DonationButtons;
