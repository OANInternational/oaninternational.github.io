export interface MainMenuItem {
  id: number;
  label: string;
  path: string;
  subItems?: SubMenuItem[];
}

export interface SubMenuItem {
  id: number;
  label: string;
  path: string;
  section?: string;
}

export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    id: 0,
    label: "Sobre Nosotros",
    path: "/about-us",
    subItems: [
      {
        id: 0,
        label: "Nuestra Historia",
        path: "/about-us?section=history",
        section: "history",
      },
      {
        id: 1,
        label: "Nuestros Pilares y Valores",
        path: "/about-us?section=values",
        section: "values",
      },
      {
        id: 2,
        label: "Transparencia",
        path: "/about-us?section=transparency",
        section: "transparency",
      },
      {
        id: 3,
        label: "Nuestros Equipo",
        path: "/about-us?section=team",
        section: "team",
      },
    ],
  },
  {
    id: 1,
    label: "10 años",
    path: "/10-years",
    subItems: [
      {
        id: 0,
        label: "Nuestros Logros",
        path: "/10-years?section=achievements",
        section: "achievements",
      },
      {
        id: 1,
        label: "FAQ",
        path: "/10-years?section=faq",
        section: "faq",
      },
    ],
  },
  {
    id: 2,
    label: "Proyectos",
    path: "/projects",
    subItems: [
      {
        id: 0,
        label: "Mujer y medios de vida sostenible",
        path: "/projects?section=woman",
        section: "woman",
      },
      {
        id: 1,
        label: "Seguridad alimentaria",
        path: "/projects?section=food-security",
        section: "food-security",
      },
      {
        id: 2,
        label: "Acceso al agua",
        path: "/projects?section=water-access",
        section: "water-access",
      },
    ],
  },
  {
    id: 3,
    label: "Colabora",
    path: "/support-us",
    subItems: [
      {
        id: 0,
        label: "Donación",
        path: "/support-us?section=donate",
        section: "donate",
      },
      {
        id: 1,
        label: "Hazte socio",
        path: "/support-us?section=support-main",
        section: "support-main",
      },
      {
        id: 2,
        label: "Jóvenes",
        path: "/support-us?section=thesis",
        section: "thesis",
      },
      {
        id: 3,
        label: "Empresas",
        path: "/support-us?section=companies",
        section: "companies",
      },
    ],
  },
  {
    id: 4,
    label: "Actualidad",
    path: "/news",
    subItems: [
      {
        id: 0,
        label: "Blog",
        path: "/news?section=blog",
        section: "blog",
      },
      {
        id: 1,
        label: "Prensa",
        path: "/news?section=press",
        section: "press",
      },
    ],
  },
  {
    id: 5,
    label: "Contacto",
    path: "/contact",
  },
];
