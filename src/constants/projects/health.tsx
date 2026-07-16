import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { Locale } from "@/i18n/config";
import { HEALTH_PROJECTS_ES } from "./health.es";
import { HEALTH_PROJECTS_EN } from "./health.en";
import { HEALTH_PROJECTS_FR } from "./health.fr";

export const HEALTH_PROJECTS: Record<Locale, IProjectPreview[]> = {
  es: HEALTH_PROJECTS_ES,
  en: HEALTH_PROJECTS_EN,
  fr: HEALTH_PROJECTS_FR,
};
