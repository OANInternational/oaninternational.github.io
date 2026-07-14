export interface MainMenuItem {
  id: number;
  key: string;
  path: string;
  subItems?: SubMenuItem[];
}

export interface SubMenuItem {
  id: number;
  key: string;
  path: string;
  section?: string;
}

// Paths are locale-agnostic (no /es or /en prefix). The Header prefixes the
// active locale at render time. Labels are resolved from the dictionary by
// `key` (see src/i18n/dictionaries.ts).
export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    id: 0,
    key: "about-us",
    path: "/about-us",
    subItems: [
      { id: 0, key: "history", path: "/about-us?section=history", section: "history" },
      { id: 1, key: "values", path: "/about-us?section=values", section: "values" },
      {
        id: 2,
        key: "transparency",
        path: "/about-us?section=transparency",
        section: "transparency",
      },
      { id: 3, key: "team", path: "/about-us?section=team", section: "team" },
    ],
  },
  {
    id: 1,
    key: "10-years",
    path: "/10-years",
    subItems: [
      {
        id: 0,
        key: "achievements",
        path: "/10-years?section=achievements",
        section: "achievements",
      },
      { id: 1, key: "faq", path: "/10-years?section=faq", section: "faq" },
    ],
  },
  {
    id: 2,
    key: "projects",
    path: "/projects",
    subItems: [
      { id: 0, key: "woman", path: "/projects?section=woman", section: "woman" },
      {
        id: 1,
        key: "food-security",
        path: "/projects?section=food-security",
        section: "food-security",
      },
      {
        id: 2,
        key: "water-access",
        path: "/projects?section=water-access",
        section: "water-access",
      },
    ],
  },
  {
    id: 3,
    key: "support-us",
    path: "/support-us",
    subItems: [
      { id: 0, key: "donate", path: "/support-us?section=donate", section: "donate" },
      {
        id: 1,
        key: "support-main",
        path: "/support-us?section=support-main",
        section: "support-main",
      },
      { id: 2, key: "thesis", path: "/support-us?section=thesis", section: "thesis" },
      {
        id: 3,
        key: "companies",
        path: "/support-us?section=companies",
        section: "companies",
      },
    ],
  },
  {
    id: 4,
    key: "news",
    path: "/news",
    subItems: [
      { id: 0, key: "blog", path: "/news?section=blog", section: "blog" },
      { id: 1, key: "press", path: "/news?section=press", section: "press" },
    ],
  },
  {
    id: 5,
    key: "contact",
    path: "/contact",
  },
];
