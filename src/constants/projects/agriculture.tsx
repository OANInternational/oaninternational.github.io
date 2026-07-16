import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { Locale } from "@/i18n/config";
import { AGRICULTURE_PROJECTS_ES } from "./agriculture.es";
import { AGRICULTURE_PROJECTS_EN } from "./agriculture.en";
import { AGRICULTURE_PROJECTS_FR } from "./agriculture.fr";

export const AGRICULTURE_PROJECTS: Record<Locale, IProjectPreview[]> = {
  es: AGRICULTURE_PROJECTS_ES,
  en: AGRICULTURE_PROJECTS_EN,
  fr: AGRICULTURE_PROJECTS_FR,
};
