"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import { MAIN_MENU_ITEMS } from "@/app/constants";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const menuItems = MAIN_MENU_ITEMS.map((menuItem) => (
    <Link
      className={styles.label}
      key={menuItem.label}
      href={menuItem.path}
      onClick={() => {
        setIsMobileNavBarOpen(false);
      }}
    >
      {menuItem.label}
    </Link>
  ));

  const [isScrolled, setScrolled] = useState(false);
  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else if (window.scrollY < 10) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div
      className={`${styles.toolbarWrapper} ${
        isScrolled ? styles.toolbarWrapperScrolled : ""
      }`}
    >
      <div
        className={`${styles.toolbar} ${
          isScrolled ? styles.toolbarScrolled : ""
        }`}
      >
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

        <button
          className={styles.menuMobile}
          onClick={() => setIsMobileNavBarOpen(!isMobileNavBarOpen)}
        >
          {!isMobileNavBarOpen ? (
            <AiOutlineMenu size={50} />
          ) : (
            <AiOutlineClose size={50} />
          )}
        </button>
      </div>

      <div
        className={`${styles.mobileNavBar} ${
          isScrolled ? styles.mobileNavBarScrolled : ""
        } ${
          isMobileNavBarOpen
            ? styles.mobileNavBarOpened
            : styles.mobileNavBarClosed
        }`}
      >
        {menuItems}
      </div>
    </div>
  );
}
