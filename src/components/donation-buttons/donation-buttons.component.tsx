import styles from "./donation-buttons.module.css";
import { useState, useEffect } from "react";

interface DonationOption {
  amount: number;
  url: string;
  isPreferred?: boolean;
  hoverText?: string;
}

interface DonationButtonsProps {
  options: DonationOption[];
}

const DonationButtons = ({ options }: DonationButtonsProps) => {
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
              ? option.hoverText || `¡Gracias por donar ${option.amount}€!`
              : `Dona ${option.amount}€ al mes`}
          </span>
        </a>
      ))}
    </div>
  );
};

export default DonationButtons;
