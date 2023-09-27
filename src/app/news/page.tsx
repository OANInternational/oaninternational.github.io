import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import TitleSection from "@/components/title-section/title-section.component";

export default function Home() {
  return (
    <main>
      <TitleSection title="Actualidad"></TitleSection>
    </main>
  );
}
