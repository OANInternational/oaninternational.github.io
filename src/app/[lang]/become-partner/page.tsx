import type { Metadata } from "next";
import { isLocale, Locale } from "@/i18n/config";
import BecomePartner from "./page.client";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Hazte Socio",
    description:
      "Hazte socio/a de OAN International y apoya con tu aportación mensual el desarrollo de Nikki (Benín).",
  },
  en: {
    title: "Become a Member",
    description:
      "Become a member of OAN International and support the development of Nikki (Benin) with your monthly contribution.",
  },
  fr: {
    title: "Devenez membre",
    description:
      "Devenez membre d'OAN International et soutenez, grâce à votre contribution mensuelle, le développement de Nikki (Bénin).",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return meta[lang];
}

export default function Page() {
  return <BecomePartner />;
}
