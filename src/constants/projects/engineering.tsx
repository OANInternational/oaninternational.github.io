import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { Locale } from "@/i18n/config";
import { ENGINEERING_PROJECTS_ES } from "./engineering.es";
import { ENGINEERING_PROJECTS_EN } from "./engineering.en";
import { ENGINEERING_PROJECTS_FR } from "./engineering.fr";

export const ENGINEERING_PROJECTS: Record<Locale, IProjectPreview[]> = {
  es: ENGINEERING_PROJECTS_ES,
  en: ENGINEERING_PROJECTS_EN,
  fr: ENGINEERING_PROJECTS_FR,
};
