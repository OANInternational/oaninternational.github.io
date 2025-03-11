"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import styles from "./header.module.css";
import { MAIN_MENU_ITEMS, SubMenuItem } from "@/app/constants";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Handle submenu item click
  const handleSubMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    subItem: SubMenuItem,
    parentPath: string
  ) => {
    // If we're already on the same page, prevent default navigation and manually handle scrolling
    if (pathname === parentPath) {
      e.preventDefault();
      // Update URL without triggering navigation
      window.history.pushState({}, "", subItem.path);
      // Directly call scrollToSection with the section
      if (subItem.section) {
        scrollToSection(subItem.section);
      }
      // Close mobile menu if it's open
      setIsMobileNavBarOpen(false);
    }
  };

  const menuItems = MAIN_MENU_ITEMS.map((menuItem) => (
    <div className={styles.menuItemWrapper} key={menuItem.label}>
      <Link
        className={styles.label}
        href={menuItem.path}
        onClick={() => {
          setIsMobileNavBarOpen(false);
        }}
      >
        {menuItem.label}
      </Link>
      {menuItem.subItems && menuItem.subItems.length > 0 && (
        <div className={styles.submenu}>
          {menuItem.subItems.map((subItem) => (
            <Link
              className={styles.submenuItem}
              key={subItem.label}
              href={subItem.path}
              onClick={(e) => handleSubMenuClick(e, subItem, menuItem.path)}
            >
              {subItem.label}
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
            priority
          />
        </Link>

        <div className={styles.menuItems}>{menuItems}</div>

        <div className={styles.menuItems}>
          <Link
            className={`${styles.label} ${styles.becomePartnerButton}`}
            key={"Hazte Socio"}
            href={"/become-partner"}
            onClick={() => {
              setIsMobileNavBarOpen(false);
            }}
          >
            Hazte Socio
          </Link>
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
      </div>
    </div>
  );
}
