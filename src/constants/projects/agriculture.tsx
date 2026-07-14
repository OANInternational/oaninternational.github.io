import { IProjectPreview } from "@/components/project-preview/project-preview.component";
import { Locale } from "@/i18n/config";
import { AGRICULTURE_PROJECTS_ES } from "./agriculture.es";
import { AGRICULTURE_PROJECTS_EN } from "./agriculture.en";

export const AGRICULTURE_PROJECTS: Record<Locale, IProjectPreview[]> = {
  es: AGRICULTURE_PROJECTS_ES,
  en: AGRICULTURE_PROJECTS_EN,
};
