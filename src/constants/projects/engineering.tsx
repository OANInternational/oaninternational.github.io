import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { Locale } from "@/i18n/config";
import { ENGINEERING_PROJECTS_ES } from "./engineering.es";
import { ENGINEERING_PROJECTS_EN } from "./engineering.en";

export const ENGINEERING_PROJECTS: Record<Locale, IProjectPreview[]> = {
  es: ENGINEERING_PROJECTS_ES,
  en: ENGINEERING_PROJECTS_EN,
};
