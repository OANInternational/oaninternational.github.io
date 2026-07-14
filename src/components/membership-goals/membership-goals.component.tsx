import Image from "next/image";
import styles from "./membership-goals.module.css";
import { Locale } from "@/i18n/config";
import { MEMBERSHIP } from "@/constants/membership";

interface MembershipGoal {
  memberCount: number;
  title: string;
  description: string;
  imageUrl: string;
  color: "blue" | "green" | "orange" | "pink";
}

const membershipGoals: Record<Locale, MembershipGoal[]> = {
  es: [
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
  ],
  en: [
    {
      memberCount: 75,
      title: "Prevent malnutrition in 1,875 children",
      description:
        "By assessing the nutritional status of 1,875 children aged 6 to 59 months to detect cases of moderate and severe malnutrition.",
      imageUrl: "/oan-web-047.png",
      color: "blue",
    },
    {
      memberCount: 100,
      title: "Provide drinking water access to more than 100 communities",
      description: "By servicing and managing 300 drinking water pumps.",
      imageUrl: "/oan-web-045.jpg",
      color: "green",
    },
    {
      memberCount: 150,
      title: "Support Nikarit, our shea social enterprise",
      description:
        "By improving the working conditions of 450 women in shea butter harvesting and processing cooperatives.",
      imageUrl: "/oan-web-025.jpg",
      color: "orange",
    },
    {
      memberCount: 200,
      title: "Develop waste collection",
      description:
        "By supporting waste collection for 550 households over one month.",
      imageUrl: "/oan-web-046.jpg",
      color: "pink",
    },
  ],
};

interface Labels {
  headingHighlight: string;
  headingRest: string;
  membersLabel: string;
  goalPrefix: string;
  goalSuffix: string;
  goalAction: string;
  finalGoal: string;
}

const labels: Record<Locale, Labels> = {
  es: {
    headingHighlight: "Hazte socio",
    headingRest: "y marca la diferencia",
    membersLabel: "socios",
    goalPrefix: "Con",
    goalSuffix: "socios",
    goalAction: "podríamos",
    finalGoal:
      "Seguir trabajando para defender los derechos humanos de la población de Nikki",
  },
  en: {
    headingHighlight: "Become a member",
    headingRest: "and make a difference",
    membersLabel: "members",
    goalPrefix: "With",
    goalSuffix: "members",
    goalAction: "we could",
    finalGoal: "Keep working to defend the human rights of the people of Nikki",
  },
};

interface MembershipGoalsProps {
  currentMembers?: number;
  locale: Locale;
}

export default function MembershipGoals({
  currentMembers = MEMBERSHIP.current,
  locale,
}: MembershipGoalsProps) {
  const goals = membershipGoals[locale];
  const t = labels[locale];

  return (
    <section className={styles.membershipGoalsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>{t.headingHighlight}</span>
            <br />
            {t.headingRest}
          </h2>
          <div className={styles.currentMembersDisplay}>
            <span className={styles.currentNumber}>{currentMembers}</span>
            <span className={styles.currentLabel}>{t.membersLabel}</span>
          </div>
        </div>

        <div className={styles.goalsContainer}>
          <div className={styles.progressLine}></div>

          {goals.map((goal) => (
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
                <span className={styles.goalCountPrefix}>{t.goalPrefix}</span>
                <span className={styles.goalCountNumber}>
                  {goal.memberCount}
                </span>
                <span className={styles.goalCountSuffix}>{t.goalSuffix}</span>
                <span className={styles.goalCountAction}>{t.goalAction}</span>
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
          <div className={styles.finalGoalText}>{t.finalGoal}</div>
        </div>
      </div>
    </section>
  );
}
