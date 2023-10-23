import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.legalColumn}>
        <h2>¡Juntos por y con Nikki!</h2>
        <p>​© 2020 OAN International</p>

        <p>Todos los derechos reservados</p>

        <div className={styles.links}>
          <p>
            <Link href="/legal">Aviso Legal</Link>
          </p>
          <p> | </p>
          <p>
            <Link href="/cookies">Política de Cookies</Link>
          </p>
        </div>
      </div>

      <div className={styles.donateColumn}>
        <h2>
          <Link href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=6CQ9L2J38YVJL&source=url&ssrt=1698092206755">
            ¡DONA CON PAYPAL!
          </Link>
        </h2>
        <div className={styles.socialMediaWrapper}>
          <Link href="https://facebook.com/oaninternational">
            <BsFacebook size={25} />
          </Link>

          <Link href="https://twitter.com/OAN_Int">
            <BsTwitter size={25} />
          </Link>

          <Link href="https://linkedin.com/company/10281709/">
            <BsLinkedin size={25} />
          </Link>

          <Link href="https://instagram.com/oan.international">
            <BsInstagram size={25} />
          </Link>
        </div>
      </div>

      <div className={styles.emailColumn}>
        <Link href="/">
          <Image
            height={50}
            width={50}
            src="/oan-icon-logo.png"
            alt="OAN International Logo"
          />
        </Link>
        <p>
          Tlf. <a href="tel:+34696714499">(+34) 696 714 499</a>
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:contacto@oaninternational.org">
            contacto@oaninternational.org
          </a>
        </p>
      </div>
    </div>
  );
}
