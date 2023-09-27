import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import { MAIN_MENU_ITEMS } from "@/app/constants";

export default function Header() {
  const menuItems = MAIN_MENU_ITEMS.map((menuItem) => (
    <Link className={styles.label} key={menuItem.label} href={menuItem.path}>
      {menuItem.label}
    </Link>
  ));

  return (
    <div className={styles.toolbar}>
      <Link href={"/"}>
        <Image
          className={styles.logo}
          src="/oan-logo.svg"
          alt="OAN International Logo"
          width={50}
          height={100}
        />
      </Link>

      <div className={styles.menuItems}>{menuItems}</div>
    </div>
  );
}
