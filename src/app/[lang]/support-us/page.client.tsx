"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import TitleSection from "@/components/title-section/title-section.component";
import styles from "./page.module.css";
import Image from "next/image";
import { PiPottedPlantLight, PiFilmSlateLight } from "react-icons/pi";
import CampaignPreview, {
  Campaign,
} from "@/components/campaign-preview/campaign-preview.component";
import DonationButtons from "@/components/donation-buttons/donation-buttons.component";
import { Locale } from "@/i18n/config";

interface SupportContent {
  headlinePrimary: string;
  headlineSecondary: string;
  headlineTertiary: string;
  headlineDescription: string;
  title: string;
  intro: ReactNode;
  writeUs: string;
  campaignsTitle: string;
  campaignShea: string;
  campaignDocumentary: string;
  donateTitle: string;
  taxIntro: ReactNode;
  taxDeduction: ReactNode;
  impact: string;
  transferTitle: string;
  transferText: string;
  bizumText: string;
  teamingTitle: string;
  teaming1: string;
  teaming2: string;
  teaming3: string;
  teamingButton: string;
  companiesTitle: string;
  companies1: string;
  companies2: string;
  companies3: string;
  companyItems: ReactNode[];
  thesisTitle: string;
  thesis1: string;
  thesis2: string;
  committees: string[];
  thesis3: string;
  donationHover: Record<number, string>;
}

const content: Record<Locale, SupportContent> = {
  es: {
    headlinePrimary: "Comités",
    headlineSecondary: "Investigación",
    headlineTertiary: "Departamentos",
    headlineDescription:
      "Eventos, comunicación y márketing, diseño, traducción, recursos humanos, legal y tesorería",
    title: "Colabora con nosotr@s",
    intro: (
      <>
        Participa en nuestras{" "}
        <span className={styles.colorSecondary}>iniciativas</span> o únete como{" "}
        <span className={styles.colorSecondary}>voluntari@</span>. ¡Te esperamos
        con los brazos abiertos!
      </>
    ),
    writeUs: "Escríbenos",
    campaignsTitle: "Campañas",
    campaignShea: "Hermánate con un karité",
    campaignDocumentary: "Documental SON YARA",
    donateTitle: "Dona",
    taxIntro: (
      <>
        Todas las donaciones a <b>OAN International</b> desgravan en función de
        la{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-25039"
          className={styles.link}
        >
          Ley 49/2002
        </a>
        , de 23 de diciembre, de régimen fiscal de las entidades sin fines
        lucrativos y de los incentivos fiscales del mecenazgo.{" "}
      </>
    ),
    taxDeduction: (
      <>
        Hacienda <b>te devuelve el 80% de lo que dones</b>, hasta los primeros
        250€ (al superar esta cuantía se desgrava el 40%, y si llevas 3 años
        colaborando con nosotros el 45%).
      </>
    ),
    impact:
      "Con muy poco puedes ayudarnos a generar un gran impacto en Nikki. Juntos podemos conseguir un mundo más justo.",
    transferTitle: "Transferencia o Bizum",
    transferText:
      "La mejor manera de donarnos es hacer directamente una transferencia periódica a nuestra cuenta:",
    bizumText:
      "Si lo prefieres, puedes realizar también tu donación a través de Bizum, insertando el código de campaña de OAN INTERNATIONAL:",
    teamingTitle: "Teaming",
    teaming1: "¡En OAN International te lo ponemos fácil!",
    teaming2:
      "Sabemos que eres joven y tienes presupuesto limitado. Así que te proponemos que dones solo 1 café al mes: 1€ al mes.",
    teaming3:
      "¡Inscríbete en nuestro equipo de Teaming y estarás apoyando proyectos de desarrollo en salud, agua, empoderamiento de mujer y mucho más!",
    teamingButton: "Únete a nuestro grupo",
    companiesTitle: "Empresas",
    companies1:
      "¿Eres una empresa y quieres apoyar a proyectos como los de OAN International? ¿Quieres dar un paso más en tu RSC siendo impulsor del cambio en terreno?",
    companies2:
      "A través de la realización de una donación periódica, podrás colaborar en el día a día de los proyectos de manera directa y, además, tu aportación desgrava en un 40%.",
    companies3:
      "Las formas de ayudarnos son muchas, se trata de que elijas la que mejor se ajuste a tu entidad:",
    companyItems: [
      <>
        <strong>Donación puntual.</strong> Si no podéis comprometeros a largo
        plazo y preferís hacer una aportación puntual, la ayuda siempre es
        bienvenida. Tened por seguro que el 100% de vuestras donaciones se
        invertirán en los proyectos en terreno.
      </>,
      <>
        Haz a tu <strong>empresa socia</strong> de OAN International. Las
        aportaciones periódicas nos permiten mantener un trabajo ininterrumpido
        y perseguir objetivos a medio y largo plazo. Con esta opción tu empresa
        formará parte activa del desarrollo de cada proyecto. Además, nuestra
        proximidad a la comunidad y con el equipo local garantiza que tu
        contribución se traduzca en un cambio real y visible en la vida en
        Nikki.
      </>,
      <>
        <strong>Financia uno de nuestros proyectos directamente</strong>{" "}
        (completa o parcialmente). Si los valores de tu equipo o tu entidad se
        encuentran especialmente alineados con alguno de nuestros proyectos,
        puedes apoyar a la población de Nikki específicamente a través de una de
        las áreas de actuación en las cuales OAN International interviene junto a
        los agentes de cambio locales.
      </>,
      <>
        <strong>Regalos a clientes/empleados</strong>: para tener un detalle
        solidario con clientes o empleados, desde OAN ofrecemos kits de
        productos del proyecto Nikarit o el calendario anual de OAN
        International.
      </>,
      <>
        <strong>Evento solidario</strong>: organizando un concierto, actividad
        deportiva o encuentro en el que se visibilice la labor de OAN
        International.
      </>,
      <>
        ¿Tenéis una <strong>propuesta</strong>? Si tienes nuevas ideas de cómo
        apoyarnos, rellena el siguiente{" "}
        <a
          style={{ color: "var(--black)" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSesVw6RZbW6-CHJUG90L9fmJpBq5PFAt4OFYtz_quIjLGOKSg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          formulario
        </a>{" "}
        y contacta directamente con nosotros.
      </>,
    ],
    thesisTitle: "Tu TFG/TFM con OAN",
    thesis1:
      "Presentamos una nueva forma de cooperación que hace partícipe del cambio a la universidad. Si eres universitario y quieres marcar la diferencia, ¡esto es perfecto para ti!",
    thesis2:
      "Puedes aportar tu ayuda realizando tu TFG o TFM sobre algún proyecto de OAN International en Nikki. Trabajarás de la mano de nuestros comités:",
    committees: [
      "Comité de Energía, Infraestructuras y Agua",
      "Comité Biosanitario",
      "Comité de Políticas Sociales",
      "Comité de Agronomía",
    ],
    thesis3: "¡No dudes y escríbenos!",
    donationHover: {
      10: "¡Tu pagas 2,5€ al mes!",
      20: "¡Tu pagas 4€ al mes!",
      25: "¡Tu pagas 7€ al mes!",
      50: "¡Tu pagas 22€ al mes!",
    },
  },
  en: {
    headlinePrimary: "Committees",
    headlineSecondary: "Research",
    headlineTertiary: "Departments",
    headlineDescription:
      "Events, communication and marketing, design, translation, human resources, legal and treasury",
    title: "Get involved with us",
    intro: (
      <>
        Take part in our{" "}
        <span className={styles.colorSecondary}>initiatives</span> or join us as
        a <span className={styles.colorSecondary}>volunteer</span>. We welcome
        you with open arms!
      </>
    ),
    writeUs: "Write to us",
    campaignsTitle: "Campaigns",
    campaignShea: "Twin with a shea tree",
    campaignDocumentary: "SON YARA Documentary",
    donateTitle: "Donate",
    taxIntro: (
      <>
        All donations to <b>OAN International</b> are tax-deductible under{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-25039"
          className={styles.link}
        >
          Law 49/2002
        </a>
        , of 23 December, on the tax regime for non-profit entities and tax
        incentives for patronage.{" "}
      </>
    ),
    taxDeduction: (
      <>
        The tax authority <b>returns 80% of what you donate</b>, up to the first
        250€ (above this amount 40% is deductible, and if you have been
        supporting us for 3 years, 45%).
      </>
    ),
    impact:
      "With very little you can help us make a big impact in Nikki. Together we can achieve a fairer world.",
    transferTitle: "Bank transfer or Bizum",
    transferText:
      "The best way to donate is to set up a recurring transfer directly to our account:",
    bizumText:
      "If you prefer, you can also make your donation through Bizum, entering OAN INTERNATIONAL's campaign code:",
    teamingTitle: "Teaming",
    teaming1: "At OAN International we make it easy for you!",
    teaming2:
      "We know you're young and on a limited budget. So we suggest you donate just 1 coffee a month: 1€ a month.",
    teaming3:
      "Sign up to our Teaming group and you'll be supporting development projects in health, water, women's empowerment and much more!",
    teamingButton: "Join our group",
    companiesTitle: "Companies",
    companies1:
      "Are you a company that wants to support projects like those of OAN International? Do you want to take your CSR a step further by driving change on the ground?",
    companies2:
      "By making a recurring donation, you can contribute directly to the day-to-day running of the projects, and your contribution is also 40% tax-deductible.",
    companies3:
      "There are many ways to help us; it is about choosing the one that best fits your organization:",
    companyItems: [
      <>
        <strong>One-off donation.</strong> If you cannot commit long-term and
        prefer to make a one-off contribution, help is always welcome. Rest
        assured that 100% of your donations will be invested in projects on the
        ground.
      </>,
      <>
        Make your <strong>company a member</strong> of OAN International.
        Recurring contributions allow us to maintain uninterrupted work and
        pursue medium- and long-term goals. With this option your company will
        play an active part in the development of every project. What is more,
        our closeness to the community and the local team ensures that your
        contribution translates into real, visible change in life in Nikki.
      </>,
      <>
        <strong>Fund one of our projects directly</strong> (fully or partially).
        If the values of your team or organization are especially aligned with
        one of our projects, you can support the people of Nikki specifically
        through one of the areas of action in which OAN International works
        alongside local agents of change.
      </>,
      <>
        <strong>Gifts for clients/employees</strong>: to offer a charitable
        gesture to clients or employees, OAN provides kits of products from the
        Nikarit project or the OAN International annual calendar.
      </>,
      <>
        <strong>Charity event</strong>: organizing a concert, sporting activity
        or gathering that raises awareness of OAN International&apos;s work.
      </>,
      <>
        Do you have a <strong>proposal</strong>? If you have new ideas on how to
        support us, fill in the following{" "}
        <a
          style={{ color: "var(--black)" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSesVw6RZbW6-CHJUG90L9fmJpBq5PFAt4OFYtz_quIjLGOKSg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          form
        </a>{" "}
        and get in touch with us directly.
      </>,
    ],
    thesisTitle: "Your thesis/final project with OAN",
    thesis1:
      "We present a new form of cooperation that involves universities in driving change. If you are a university student and want to make a difference, this is perfect for you!",
    thesis2:
      "You can contribute by doing your thesis or final project on one of OAN International's projects in Nikki. You will work hand in hand with our committees:",
    committees: [
      "Energy, Infrastructure and Water Committee",
      "Health and Biosciences Committee",
      "Social Policy Committee",
      "Agronomy Committee",
    ],
    thesis3: "Don't hesitate, write to us!",
    donationHover: {
      10: "You pay just 2,5€ a month!",
      20: "You pay just 4€ a month!",
      25: "You pay just 7€ a month!",
      50: "You pay just 22€ a month!",
    },
  },
  fr: {
    headlinePrimary: "Comités",
    headlineSecondary: "Recherche",
    headlineTertiary: "Départements",
    headlineDescription:
      "Événements, communication et marketing, design, traduction, ressources humaines, juridique et trésorerie",
    title: "Impliquez-vous avec nous",
    intro: (
      <>
        Participez à nos{" "}
        <span className={styles.colorSecondary}>initiatives</span> ou
        rejoignez-nous comme{" "}
        <span className={styles.colorSecondary}>bénévole</span>. Nous vous
        accueillons à bras ouverts !
      </>
    ),
    writeUs: "Écrivez-nous",
    campaignsTitle: "Campagnes",
    campaignShea: "Adoptez un karité",
    campaignDocumentary: "Documentaire SON YARA",
    donateTitle: "Faire un don",
    taxIntro: (
      <>
        Tous les dons à <b>OAN International</b> sont déductibles des impôts en
        vertu de la{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-25039"
          className={styles.link}
        >
          Loi 49/2002
        </a>
        , du 23 décembre, relative au régime fiscal des entités sans but
        lucratif et aux incitations fiscales au mécénat.{" "}
      </>
    ),
    taxDeduction: (
      <>
        Le fisc <b>vous rembourse 80 % de ce que vous donnez</b>, jusqu&apos;aux
        premiers 250€ (au-delà de ce montant, la déduction est de 40 %, et si
        vous nous soutenez depuis 3 ans, de 45 %).
      </>
    ),
    impact:
      "Avec très peu, vous pouvez nous aider à générer un grand impact à Nikki. Ensemble, nous pouvons construire un monde plus juste.",
    transferTitle: "Virement ou Bizum",
    transferText:
      "La meilleure façon de nous faire un don est de mettre en place directement un virement périodique sur notre compte :",
    bizumText:
      "Si vous préférez, vous pouvez également faire votre don via Bizum, en saisissant le code de campagne d'OAN INTERNATIONAL :",
    teamingTitle: "Teaming",
    teaming1: "Chez OAN International, nous vous facilitons la tâche !",
    teaming2:
      "Nous savons que vous êtes jeune et que votre budget est limité. Nous vous proposons donc de donner seulement 1 café par mois : 1€ par mois.",
    teaming3:
      "Inscrivez-vous à notre équipe Teaming et vous soutiendrez des projets de développement dans la santé, l'eau, l'autonomisation des femmes et bien plus encore !",
    teamingButton: "Rejoignez notre groupe",
    companiesTitle: "Entreprises",
    companies1:
      "Vous êtes une entreprise et souhaitez soutenir des projets comme ceux d'OAN International ? Vous voulez aller plus loin dans votre RSE en devenant moteur du changement sur le terrain ?",
    companies2:
      "En effectuant un don périodique, vous pourrez contribuer directement au quotidien des projets et, de plus, votre apport est déductible à hauteur de 40 %.",
    companies3:
      "Les façons de nous aider sont nombreuses ; il s'agit de choisir celle qui convient le mieux à votre organisation :",
    companyItems: [
      <>
        <strong>Don ponctuel.</strong> Si vous ne pouvez pas vous engager sur le
        long terme et préférez faire un apport ponctuel, l&apos;aide est
        toujours la bienvenue. Soyez assurés que 100 % de vos dons seront
        investis dans les projets sur le terrain.
      </>,
      <>
        Faites de votre <strong>entreprise un membre</strong> d&apos;OAN
        International. Les apports périodiques nous permettent de maintenir un
        travail ininterrompu et de poursuivre des objectifs à moyen et long
        terme. Avec cette option, votre entreprise prendra une part active au
        développement de chaque projet. De plus, notre proximité avec la
        communauté et l&apos;équipe locale garantit que votre contribution se
        traduise par un changement réel et visible dans la vie à Nikki.
      </>,
      <>
        <strong>Financez directement l&apos;un de nos projets</strong>{" "}
        (entièrement ou partiellement). Si les valeurs de votre équipe ou de
        votre organisation sont particulièrement alignées avec l&apos;un de nos
        projets, vous pouvez soutenir la population de Nikki spécifiquement à
        travers l&apos;un des domaines d&apos;action dans lesquels OAN
        International intervient aux côtés des agents de changement locaux.
      </>,
      <>
        <strong>Cadeaux pour clients/employés</strong> : pour avoir une
        attention solidaire envers vos clients ou employés, OAN propose des kits
        de produits du projet Nikarit ou le calendrier annuel d&apos;OAN
        International.
      </>,
      <>
        <strong>Événement solidaire</strong> : en organisant un concert, une
        activité sportive ou une rencontre mettant en valeur le travail
        d&apos;OAN International.
      </>,
      <>
        Vous avez une <strong>proposition</strong> ? Si vous avez de nouvelles
        idées pour nous soutenir, remplissez le{" "}
        <a
          style={{ color: "var(--black)" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSesVw6RZbW6-CHJUG90L9fmJpBq5PFAt4OFYtz_quIjLGOKSg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          formulaire
        </a>{" "}
        suivant et contactez-nous directement.
      </>,
    ],
    thesisTitle: "Votre mémoire/thèse avec OAN",
    thesis1:
      "Nous présentons une nouvelle forme de coopération qui associe l'université au changement. Si vous êtes étudiant et souhaitez faire la différence, c'est parfait pour vous !",
    thesis2:
      "Vous pouvez apporter votre aide en réalisant votre mémoire ou votre thèse sur l'un des projets d'OAN International à Nikki. Vous travaillerez main dans la main avec nos comités :",
    committees: [
      "Comité Énergie, Infrastructures et Eau",
      "Comité Biosanitaire",
      "Comité des Politiques Sociales",
      "Comité d'Agronomie",
    ],
    thesis3: "N'hésitez pas et écrivez-nous !",
    donationHover: {
      10: "Vous ne payez que 2,5€ par mois !",
      20: "Vous ne payez que 4€ par mois !",
      25: "Vous ne payez que 7€ par mois !",
      50: "Vous ne payez que 22€ par mois !",
    },
  },
};

export default function SupportUs() {
  const { lang } = useParams<{ lang: Locale }>();
  const locale = lang;
  const t = content[locale];

  const CAMPAIGNS: Campaign[] = [
    {
      name: t.campaignShea,
      icon: PiPottedPlantLight,
      link: "https://nikarit.es/collections/oan-international/products/hermanate-con-un-karite",
    },
    {
      name: t.campaignDocumentary,
      icon: PiFilmSlateLight,
      url: "son-yara",
    },
  ];

  const campaigns = CAMPAIGNS.map((campaign) => (
    <CampaignPreview key={campaign.name} campaign={campaign} locale={locale} />
  ));

  const donationOptions = [
    {
      amount: 10,
      url: "https://buy.stripe.com/8wMeV3ft30GxgWAcMN",
      hoverText: t.donationHover[10],
    },
    {
      amount: 20,
      url: "https://buy.stripe.com/4gwfZ7a8JdtjaycaEK",
      hoverText: t.donationHover[20],
    },
    {
      amount: 25,
      url: "https://buy.stripe.com/28o4gp94FcpfbCg3ce",
      isPreferred: true,
      hoverText: t.donationHover[25],
    },
    {
      amount: 50,
      url: "https://buy.stripe.com/dR64gpft3cpfcGkeUX",
      hoverText: t.donationHover[50],
    },
  ];

  return (
    <main>
      <section className={styles.mainSection} id="support-main">
        <div className={styles.wrapper}>
          <div className={styles.headlines}>
            <h2 className={styles.headlineBox}>{t.headlinePrimary}</h2>
            <h2 className={styles.headlineBoxSecondary}>
              {t.headlineSecondary}
            </h2>
            <h2 className={styles.headlineBoxTertiary}>{t.headlineTertiary}</h2>

            <h5 className={styles.headlineDescription}>
              {t.headlineDescription}
            </h5>
          </div>

          <div className={styles.text}>
            <h1 className={styles.title}>{t.title}</h1>

            <p>{t.intro}</p>

            <h2 className={styles.subTitle}>{t.writeUs}</h2>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contacto@oaninternational.org"
              className={styles.emailButton}
            >
              contacto@oaninternational.org
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.phoneButton}
              href="tel:+34696714499"
            >
              (+34) 696 714 499
            </a>
          </div>
        </div>

        <Image
          className={styles.background}
          src="/oan-web-011.jpg"
          width={1080}
          height={150}
          quality={100}
          alt="Background header image"
        />
      </section>

      <section className={styles.campaignsSection} id="campaigns">
        <TitleSection title={t.campaignsTitle} />

        <div className={styles.campaignsWrapper}>{campaigns}</div>
      </section>

      <section className={styles.donationSection} id="donate">
        <TitleSection title={t.donateTitle} />

        <p>{t.taxIntro}</p>

        <div className={styles.donationImageSection}>
          <Image src="/donation.jpg" alt="" width={400} height={200} />

          <div className={styles.donationTextSection}>
            <p>{t.taxDeduction}</p>

            <p>{t.impact}</p>
          </div>
        </div>

        <h2 className={styles.donationMethodTitle}>{t.transferTitle}</h2>

        <div className={styles.donationImageSection}>
          <div className={styles.donationTextSection}>
            <p>{t.transferText}</p>
            <div>
              <p>Caja Ingenieros</p>
              <p>OAN International</p>
              <p>IBAN: ES37 3025 0003 9614 3335 5692</p>
            </div>
          </div>
          <div className={styles.donationTextSection}>
            <p>{t.bizumText}</p>

            <h2>00107</h2>
          </div>
        </div>

        <DonationButtons options={donationOptions} locale={locale} />

        <h2 className={styles.donationMethodTitle}>{t.teamingTitle}</h2>
        <p>{t.teaming1}</p>
        <p>{t.teaming2}</p>
        <p>{t.teaming3}</p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.teaming.net/oaninternational"
          className={styles.teamingButton}
        >
          {t.teamingButton}
        </a>
      </section>

      <section className={styles.donationSection} id="companies">
        <TitleSection title={t.companiesTitle} />

        <div className={styles.donationImageSection}>
          <Image
            src="/donation_business.jpeg"
            alt=""
            width={400}
            height={250}
          />

          <div className={styles.donationTextSection}>
            <p>{t.companies1}</p>
            <p>{t.companies2}</p>
            <p>{t.companies3}</p>
          </div>
        </div>

        <ul style={{ marginLeft: "20px" }}>
          {t.companyItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "16px" }}>
              {item}
            </li>
          ))}
        </ul>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:empresas@oaninternational.org"
          className={styles.emailButton}
        >
          empresas@oaninternational.org
        </a>
      </section>

      <section className={styles.thesisSection} id="thesis">
        <div className={styles.thesisText}>
          <TitleSection title={t.thesisTitle} />

          <p>{t.thesis1}</p>

          <p>{t.thesis2}</p>

          <ul>
            {t.committees.map((committee) => (
              <li key={committee}>{committee}</li>
            ))}
          </ul>

          <p>{t.thesis3}</p>
        </div>
      </section>
    </main>
  );
}
