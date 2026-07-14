import { IProjectCategory } from "@/components/project-category-section/project-category-section.component";
import { Locale } from "@/i18n/config";
import { PROJECT_CATEGORIES_ES } from "./categories.es";
import { PROJECT_CATEGORIES_EN } from "./categories.en";

export const PROJECT_CATEGORIES: Record<Locale, IProjectCategory[]> = {
  es: PROJECT_CATEGORIES_ES,
  en: PROJECT_CATEGORIES_EN,
};
