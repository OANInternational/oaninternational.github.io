import type { Metadata } from "next";
import TitlePage from "@/components/title-page/title-page.component";

import styles from "./page.module.css";
import { isLocale, Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Política de Cookies",
    description:
      "Información sobre el uso de cookies en la web de OAN International.",
  },
  en: {
    title: "Cookie Policy",
    description:
      "Information about how OAN International uses cookies on its website.",
  },
  fr: {
    title: "Politique de cookies",
    description:
      "Informations sur l'utilisation des cookies sur le site web d'OAN International.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return meta[lang];
}

const content: Record<
  Locale,
  {
    title: string;
    whatTitle: string;
    whatText: string;
    analyticsTitle: string;
    analyticsText: string;
    disableTitle: string;
    disableText: string;
  }
> = {
  es: {
    title: "Cookies",
    whatTitle: "¿Qué es una coockie?",
    whatText:
      "Una cookie es una pequeña pieza de texto enviada a tu navegador por una web que has visitado. Ayuda a la web a recordar información sobre tu visita, como tu idioma preferente y otros ajustes. Esto puede hacer tu próxima visita más sencilla y el sitio más útil para ti. Las cookies juegan un rol importante. Sin ellas, usar la web sería una experiencia mucho más frustante.",
    analyticsTitle: "Google Analytics cookies",
    analyticsText:
      "Este sitio usa Google Analytics para entender mejor cómo usas el portal. El objetivo principal con Google Analytics es aprender y mejorar el sitio para así poder obtener lo mejor de este.",
    disableTitle: "Deshabilitar cookies",
    disableText:
      "Sin embargo, si quieres puedes deshabilitar las cookies de este sitio u otro, recomendamos que compruebes la sección de ayuda de tu navegador para así poder deshabilitarlas.",
  },
  en: {
    title: "Cookies",
    whatTitle: "What is a cookie?",
    whatText:
      "A cookie is a small piece of text sent to your browser by a website you have visited. It helps the website remember information about your visit, such as your preferred language and other settings. This can make your next visit easier and the site more useful to you. Cookies play an important role. Without them, using the web would be a much more frustrating experience.",
    analyticsTitle: "Google Analytics cookies",
    analyticsText:
      "This site uses Google Analytics to better understand how you use the portal. The main purpose of Google Analytics is to learn about and improve the site so we can get the best out of it.",
    disableTitle: "Disabling cookies",
    disableText:
      "However, if you wish, you can disable cookies on this or any other site. We recommend that you check your browser's help section so you can disable them.",
  },
  fr: {
    title: "Cookies",
    whatTitle: "Qu'est-ce qu'un cookie ?",
    whatText:
      "Un cookie est un petit fragment de texte envoyé à votre navigateur par un site web que vous avez visité. Il aide le site web à mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres. Cela peut faciliter votre prochaine visite et rendre le site plus utile pour vous. Les cookies jouent un rôle important. Sans eux, l'utilisation du web serait une expérience bien plus frustrante.",
    analyticsTitle: "Cookies de Google Analytics",
    analyticsText:
      "Ce site utilise Google Analytics pour mieux comprendre comment vous utilisez le portail. L'objectif principal de Google Analytics est d'apprendre et d'améliorer le site afin d'en tirer le meilleur parti.",
    disableTitle: "Désactiver les cookies",
    disableText:
      "Cependant, si vous le souhaitez, vous pouvez désactiver les cookies de ce site ou de tout autre site. Nous vous recommandons de consulter la section d'aide de votre navigateur afin de pouvoir les désactiver.",
  },
};

export default async function Cookies({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const t = content[locale];

  return (
    <main>
      <TitlePage title={t.title} backgroundImageUrl="/oan-web-021.jpg" />

      <section className={styles.legalSection}>
        <h2 className={styles.marginBottom10}>{t.whatTitle}</h2>
        <p className={styles.marginBottom}>{t.whatText}</p>

        <h2 className={styles.marginBottom10}>{t.analyticsTitle}</h2>
        <p className={styles.marginBottom}>{t.analyticsText}</p>

        <h2 className={styles.marginBottom10}>{t.disableTitle}</h2>
        <p className={styles.marginBottom}>{t.disableText}</p>
      </section>
    </main>
  );
}
