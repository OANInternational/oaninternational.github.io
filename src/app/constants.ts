export interface MainMenuItem {
  id: number;
  label: string;
  path: string;
  subItems: string[];
}

export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    id: 0,
    label: "Sobre Nosotros",
    path: "/about-us",
    subItems: [],
  },
  {
    id: 1,
    label: "Proyectos",
    path: "/projects",
    subItems: [],
  },
  {
    id: 2,
    label: "Colabora",
    path: "/support-us",
    subItems: [],
  },
  {
    id: 3,
    label: "Actualidad",
    path: "/news",
    subItems: [],
  },
  {
    id: 4,
    label: "Contacto",
    path: "/contacto",
    subItems: [],
  },
];
