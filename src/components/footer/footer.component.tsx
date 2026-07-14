import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className={styles.footer}>
      <div className={styles.legalColumn}>
        <h2>{dict.footer.slogan}</h2>
        <p>​{dict.footer.copyright}</p>

        <p>{dict.footer.rightsReserved}</p>

        <div className={styles.links}>
          <Link href={`/${locale}/legal`} className={styles.link}>
            {dict.footer.legalNotice}
          </Link>
          <p> | </p>
          <Link href={`/${locale}/cookies`} className={styles.link}>
            {dict.footer.cookiePolicy}
          </Link>
        </div>
      </div>

      <div className={styles.donateColumn}>
        <h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=6CQ9L2J38YVJL&source=url&ssrt=1698092206755"
          >
            {dict.footer.donatePaypal}
          </a>
        </h2>
        <div className={styles.socialMediaWrapper}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            href="https://facebook.com/oaninternational"
          >
            <BsFacebook size={25} className={styles.link} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            href="https://twitter.com/OAN_Int"
          >
            <BsTwitter size={25} className={styles.link} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            href="https://linkedin.com/company/10281709/"
          >
            <BsLinkedin size={25} className={styles.link} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            href="https://instagram.com/oan.international"
          >
            <BsInstagram size={25} className={styles.link} />
          </a>
        </div>
      </div>

      <div className={styles.emailColumn}>
        <Link href={`/${locale}`}>
          <Image
            height={50}
            width={50}
            src="/oan-icon-logo.png"
            alt="OAN International Logo"
          />
        </Link>
        <p>
          {dict.footer.phone}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            href="tel:+34696714499"
          >
            (+34) 696 714 499
          </a>
        </p>
        <p className={styles.email}>
          {dict.footer.email}{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:contacto@oaninternational.org"
          >
            contacto@oaninternational.org
          </a>
        </p>
      </div>
    </div>
  );
}
