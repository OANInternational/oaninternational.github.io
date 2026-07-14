import Image from "next/image";
import styles from "./event-preview.module.css";
import type { ReactElement } from "react";
import { Locale } from "@/i18n/config";

interface EventLabels {
  date: string;
  price: string;
  buyTicket: string;
}

const labels: Record<Locale, EventLabels> = {
  es: {
    date: "Fecha",
    price: "Precio",
    buyTicket: "Comprar entrada",
  },
  en: {
    date: "Date",
    price: "Price",
    buyTicket: "Buy ticket",
  },
};

export interface Event {
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  price: string;
  ticketUrl?: string;
}

export interface BlogEvent extends Event {
  id: string;
  content:  ReactElement;
  author: string;
}

export default function EventPreview(props: {
  event: Event;
  locale: Locale;
}) {
  const t = labels[props.locale];
  return (
    <article className={styles.eventSection}>
      <Image
        className={styles.eventImage}
        src={props.event.imageUrl}
        alt={`${props.event.title} image`}
        width={300}
        height={300}
        priority
      />

      <div className={styles.textWrapper}>
        <h1 className={styles.eventTitle}>{props.event.title}</h1>

        {props.event.description ? (
          <p className={styles.eventDescription}>{props.event.description}</p>
        ) : undefined}

        <p className={styles.eventDate}>
          {t.date}: {props.event.date}
        </p>

        <p className={styles.eventPrice}>
          {t.price}: {props.event.price}
        </p>

        {props.event.ticketUrl ? (
          <a
            href={props.event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ticketButton}
          >
            {t.buyTicket}
          </a>
        ) : undefined}
      </div>
    </article>
  );
}
