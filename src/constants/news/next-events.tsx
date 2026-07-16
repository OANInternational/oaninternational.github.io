import { Event } from "@/components/event-preview/event-preview.component";
import { Locale } from "@/i18n/config";
import { NEXT_EVENTS_ES } from "./next-events.es";
import { NEXT_EVENTS_EN } from "./next-events.en";
import { NEXT_EVENTS_FR } from "./next-events.fr";

export const NEXT_EVENTS: Record<Locale, Event[]> = {
  es: NEXT_EVENTS_ES,
  en: NEXT_EVENTS_EN,
  fr: NEXT_EVENTS_FR,
};
