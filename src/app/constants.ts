export interface MainMenuItem {
  id: number;
  label: string;
  path: string;
}

export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    id: 0,
    label: "Sobre Nosotros",
    path: "/about-us",
  },
  {
    id: 2,
    label: "10 años",
    path: "/10-years",
  },
  {
    id: 2,
    label: "Proyectos",
    path: "/projects",
  },
  {
    id: 3,
    label: "Colabora",
    path: "/support-us",
  },
  {
    id: 4,
    label: "Actualidad",
    path: "/news",
  },
  {
    id: 4,
    label: "Contacto",
    path: "/contact",
  },
];
