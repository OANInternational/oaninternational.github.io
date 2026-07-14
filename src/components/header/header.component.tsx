"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import styles from "./header.module.css";
import { MAIN_MENU_ITEMS, SubMenuItem } from "@/app/constants";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { scrollToSection } from "@/utils/scrollToSection";
import { Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Header({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const dict = getDictionary(locale);

  // Prefix a locale-agnostic path from the menu config with the active locale.
  const localized = (path: string) => `/${locale}${path}`;

  // Handle submenu item click
  const handleSubMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    subItem: SubMenuItem,
    parentPath: string
  ) => {
    // If we're already on the same page, prevent default navigation and manually handle scrolling
    if (pathname === localized(parentPath)) {
      e.preventDefault();
      // Update URL without triggering navigation
      window.history.pushState({}, "", localized(subItem.path));
      // Directly call scrollToSection with the section
      if (subItem.section) {
        scrollToSection(subItem.section);
      }
      // Close mobile menu if it's open
      setIsMobileNavBarOpen(false);
    }
  };

  const menuItems = MAIN_MENU_ITEMS.map((menuItem) => (
    <div className={styles.menuItemWrapper} key={menuItem.key}>
      <Link
        className={styles.label}
        href={localized(menuItem.path)}
        onClick={() => {
          setIsMobileNavBarOpen(false);
        }}
      >
        {dict.nav[menuItem.key]}
      </Link>
      {menuItem.subItems && menuItem.subItems.length > 0 && (
        <div className={styles.submenu}>
          {menuItem.subItems.map((subItem) => (
            <Link
              className={styles.submenuItem}
              key={subItem.key}
              href={localized(subItem.path)}
              onClick={(e) => handleSubMenuClick(e, subItem, menuItem.path)}
            >
              {dict.nav[subItem.key]}
            </Link>
          ))}
        </div>
      )}
    </div>
  ));

  // For mobile view, keep the original menu items without submenu
  const mobileMenuItems = MAIN_MENU_ITEMS.map((menuItem) => (
    <Link
      className={styles.label}
      key={menuItem.key}
      href={localized(menuItem.path)}
      onClick={() => {
        setIsMobileNavBarOpen(false);
      }}
    >
      {dict.nav[menuItem.key]}
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

  // Switch the active language by swapping the first path segment, preserving
  // the current section query (usePathname strips it).
  const switchLanguage = (target: Locale) => {
    if (target === locale) {
      return;
    }
    const search = typeof window !== "undefined" ? window.location.search : "";
    const nextPath = pathname.replace(/^\/(es|en)/, `/${target}`);
    router.push(nextPath + search);
    setIsMobileNavBarOpen(false);
  };

  // Listen for URL changes from browser navigation (back/forward)
  useEffect(() => {
    const handleUrlChange = () => {
      scrollToSection();
    };

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const languageSwitcher = (
    <div className={styles.languageSwitcher}>
      {locales.map((code, index) => (
        <span key={code}>
          {index > 0 && <span className={styles.languageSeparator}> | </span>}
          <button
            type="button"
            className={`${styles.languageOption} ${
              code === locale ? styles.languageOptionActive : ""
            }`}
            onClick={() => switchLanguage(code)}
          >
            {dict.header.languageLabel[code]}
          </button>
        </span>
      ))}
    </div>
  );

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
        <Link href={`/${locale}`}>
          <Image
            className={styles.logo}
            src="/oan-logo.svg"
            alt="OAN International Logo"
            width={50}
            height={100}
            priority
          />
        </Link>

        <div className={styles.menuItems}>{menuItems}</div>

        <div className={styles.menuItems}>
          <Link
            className={`${styles.label} ${styles.becomePartnerButton}`}
            key={"become-partner"}
            href={`/${locale}/become-partner`}
            onClick={() => {
              setIsMobileNavBarOpen(false);
            }}
          >
            {dict.header.becomePartner}
          </Link>
          {languageSwitcher}
        </div>

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
        {mobileMenuItems}
        {languageSwitcher}
      </div>
    </div>
  );
}
