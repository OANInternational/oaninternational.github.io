import Image from "next/image";
import styles from "./event-preview.module.css";
import type { ReactElement } from "react";
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

export default function EventPreview(props: { event: Event }) {
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

        <p className={styles.eventDate}>Fecha: {props.event.date}</p>

        <p className={styles.eventPrice}>Precio: {props.event.price}</p>

        {props.event.ticketUrl ? (
          <a
            href={props.event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ticketButton}
          >
            Comprar entrada
          </a>
        ) : undefined}
      </div>
    </article>
  );
}
