import Image from "next/image";
import styles from "./membership-goals.module.css";

interface MembershipGoal {
  memberCount: number;
  title: string;
  description: string;
  imageUrl: string;
  color: "blue" | "green" | "orange" | "pink";
}

const membershipGoals: MembershipGoal[] = [
  {
    memberCount: 75,
    title: "Prevenir la malnutrición de 1875 niños",
    description:
      "Evaluando el estado nutricional de 1875 niños de entre 6 y 59 meses de edad y así detectar casos de malnutrición moderada y severa.",
    imageUrl: "/oan-web-047.png",
    color: "blue",
  },
  {
    memberCount: 100,
    title: "Dar acceso a agua potable en más de 100 comunidades",
    description: "Revisado y gestionando 300 bombas de agua potable.",
    imageUrl: "/oan-web-045.jpg",
    color: "green",
  },
  {
    memberCount: 150,
    title: "Apoyar Nikarit, nuestra empresa social de karité",
    description:
      "Mejorando las condiciones de trabajo de 450 mujeres de cooperativas de recolección y transformación de manteca.",
    imageUrl: "/oan-web-025.jpg",
    color: "orange",
  },
  {
    memberCount: 200,
    title: "Desarrollar la recogida de residuos",
    description:
      "Apoyando la recogida de residuos de 550 hogares durante un mes.",
    imageUrl: "/oan-web-046.jpg",
    color: "pink",
  },
];

interface MembershipGoalsProps {
  currentMembers?: number;
}

export default function MembershipGoals({
  currentMembers = 71,
}: MembershipGoalsProps) {
  return (
    <section className={styles.membershipGoalsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>Hazte socio</span>
            <br />y marca la diferencia
          </h2>
          <div className={styles.currentMembersDisplay}>
            <span className={styles.currentNumber}>{currentMembers}</span>
            <span className={styles.currentLabel}>socios</span>
          </div>
        </div>

        <div className={styles.goalsContainer}>
          <div className={styles.progressLine}></div>

          {membershipGoals.map((goal, index) => (
            <div
              key={goal.memberCount}
              className={`${styles.goalItem} ${
                styles[
                  `goal${
                    goal.color.charAt(0).toUpperCase() + goal.color.slice(1)
                  }`
                ]
              }`}
            >
              <div className={styles.goalMemberCount}>
                <span className={styles.goalCountPrefix}>Con</span>
                <span className={styles.goalCountNumber}>
                  {goal.memberCount}
                </span>
                <span className={styles.goalCountSuffix}>socios</span>
                <span className={styles.goalCountAction}>podríamos</span>
              </div>

              <div className={styles.goalContent}>
                <div className={styles.goalText}>
                  <h3 className={styles.goalTitle}>{goal.title}</h3>
                  <p className={styles.goalDescription}>{goal.description}</p>
                </div>

                <div className={styles.goalImageContainer}>
                  <Image
                    className={styles.goalImage}
                    src={goal.imageUrl}
                    alt={goal.title}
                    width={120}
                    height={80}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.progressIndicator}>
          <div className={styles.arrowDown}>↓</div>
          <div className={styles.finalGoalText}>
            Seguir trabajando para defender los derechos humanos de la población
            de Nikki
          </div>
        </div>
      </div>
    </section>
  );
}
