import { Locale } from "./config";

export interface Dictionary {
  nav: Record<string, string>;
  header: {
    becomePartner: string;
    languageLabel: Record<Locale, string>;
    languageName: Record<Locale, string>;
    openMenu: string;
    closeMenu: string;
    switchTo: string;
  };
  footer: {
    slogan: string;
    copyright: string;
    rightsReserved: string;
    legalNotice: string;
    cookiePolicy: string;
    donatePaypal: string;
    phone: string;
    email: string;
  };
  metadata: {
    title: string;
    description: string;
  };
}

const es: Dictionary = {
  nav: {
    "about-us": "Sobre Nosotros",
    history: "Nuestra Historia",
    values: "Nuestros Pilares y Valores",
    transparency: "Transparencia",
    team: "Nuestro Equipo",
    "10-years": "10 años",
    achievements: "Nuestros Logros",
    faq: "FAQ",
    projects: "Proyectos",
    woman: "Mujer y medios de vida sostenible",
    "food-security": "Seguridad alimentaria",
    "water-access": "Acceso al agua",
    "support-us": "Colabora",
    donate: "Donación",
    "support-main": "Hazte socio",
    thesis: "Jóvenes",
    companies: "Empresas",
    news: "Actualidad",
    blog: "Blog",
    press: "Prensa",
    contact: "Contacto",
  },
  header: {
    becomePartner: "Hazte Socio",
    languageLabel: { es: "ES", en: "EN", fr: "FR" },
    languageName: { es: "Español", en: "English", fr: "Français" },
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchTo: "Cambiar a",
  },
  footer: {
    slogan: "¡Juntos por y con Nikki!",
    copyright: "© 2020 OAN International",
    rightsReserved: "Todos los derechos reservados",
    legalNotice: "Aviso Legal",
    cookiePolicy: "Política de Cookies",
    donatePaypal: "¡DONA CON PAYPAL!",
    phone: "Tlf.",
    email: "E-mail:",
  },
  metadata: {
    title: "OAN International",
    description:
      "OAN International es una ONGD que tiene por objetivo la investigación de los recursos existentes y las vías de actuación para el desarrollo de la calidad de vida de la población beninesa de Nikki, así como la concienciación social de las desigualdades norte-sur que permitan generar un pensamiento crítico.",
  },
};

const en: Dictionary = {
  nav: {
    "about-us": "About Us",
    history: "Our History",
    values: "Our Pillars & Values",
    transparency: "Transparency",
    team: "Our Team",
    "10-years": "10 Years",
    achievements: "Our Achievements",
    faq: "FAQ",
    projects: "Projects",
    woman: "Women & Sustainable Livelihoods",
    "food-security": "Food Security",
    "water-access": "Water Access",
    "support-us": "Get Involved",
    donate: "Donate",
    "support-main": "Become a Member",
    thesis: "Youth",
    companies: "Companies",
    news: "News",
    blog: "Blog",
    press: "Press",
    contact: "Contact",
  },
  header: {
    becomePartner: "Become a Member",
    languageLabel: { es: "ES", en: "EN", fr: "FR" },
    languageName: { es: "Español", en: "English", fr: "Français" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Switch to",
  },
  footer: {
    slogan: "Together for and with Nikki!",
    copyright: "© 2020 OAN International",
    rightsReserved: "All rights reserved",
    legalNotice: "Legal Notice",
    cookiePolicy: "Cookie Policy",
    donatePaypal: "DONATE WITH PAYPAL!",
    phone: "Tel.",
    email: "E-mail:",
  },
  metadata: {
    title: "OAN International",
    description:
      "OAN International is an NGO whose goal is to research existing resources and courses of action to improve the quality of life of the people of Nikki, Benin, and to raise social awareness of North-South inequalities in order to foster critical thinking.",
  },
};

const fr: Dictionary = {
  nav: {
    "about-us": "À propos",
    history: "Notre histoire",
    values: "Nos piliers et valeurs",
    transparency: "Transparence",
    team: "Notre équipe",
    "10-years": "10 ans",
    achievements: "Nos réalisations",
    faq: "FAQ",
    projects: "Projets",
    woman: "Femmes et moyens de subsistance durables",
    "food-security": "Sécurité alimentaire",
    "water-access": "Accès à l'eau",
    "support-us": "S'impliquer",
    donate: "Faire un don",
    "support-main": "Devenez membre",
    thesis: "Jeunes",
    companies: "Entreprises",
    news: "Actualités",
    blog: "Blog",
    press: "Presse",
    contact: "Contact",
  },
  header: {
    becomePartner: "Devenez membre",
    languageLabel: { es: "ES", en: "EN", fr: "FR" },
    languageName: { es: "Español", en: "English", fr: "Français" },
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchTo: "Passer en",
  },
  footer: {
    slogan: "Ensemble pour et avec Nikki !",
    copyright: "© 2020 OAN International",
    rightsReserved: "Tous droits réservés",
    legalNotice: "Mentions légales",
    cookiePolicy: "Politique de cookies",
    donatePaypal: "FAITES UN DON AVEC PAYPAL !",
    phone: "Tél.",
    email: "E-mail :",
  },
  metadata: {
    title: "OAN International",
    description:
      "OAN International est une ONG dont l'objectif est de rechercher les ressources existantes et les pistes d'action pour améliorer la qualité de vie de la population de Nikki, au Bénin, ainsi que de sensibiliser aux inégalités Nord-Sud afin de favoriser une pensée critique.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
