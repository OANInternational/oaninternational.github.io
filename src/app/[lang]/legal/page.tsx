import type { Metadata } from "next";
import TitlePage from "@/components/title-page/title-page.component";

import styles from "./page.module.css";
import { isLocale, Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Aviso Legal",
    description:
      "Condiciones de uso, propiedad intelectual y política de privacidad de OAN International.",
  },
  en: {
    title: "Legal Notice",
    description:
      "Terms of use, intellectual property and privacy policy of OAN International.",
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

interface LegalContent {
  title: string;
  intro: string;
  orgName: string;
  address: string;
  phone: string;
  email: string;
  s1: { title: string; p1: string };
  s2: { title: string; p1: string; p2: string; p3: string; p4: string };
  s3: { title: string; intro: string; list: string[]; trailing: string };
  s4: { title: string; intro: string; list: string[] };
  s5: { title: string; p1: string };
  s6: { title: string; intro: string; list: string[]; trailing: string };
  s7: { title: string; p1: string; p2: string; list: string[] };
  s8: { title: string; p1: string; p2: string; list: string[] };
  s9: { title: string; p1: string };
  s10: { title: string; p1: string };
  s11: { title: string; p1: string };
  s12: { title: string; p1: string };
}

const content: Record<Locale, LegalContent> = {
  es: {
    title: "Politica de Privacidad",
    intro:
      "Lea estas condiciones antes de acceder a la página web de OAN International (Objetivo Analizar Nikki International), en adelante OAN.En cumplimiento de lo previsto en la Ley 34/2002, de 11 de julio, de Servicios de la Información y de Comercio Electrónico, se informa que el sitio web www.oaninternational.org ha sido creado, es mantenido y es propiedad de OAN, cuya dirección a la que podrán dirigirse los usuarios es:",
    orgName: "OAN International",
    address: "Dirección: Avenida de Europa 12, P5, 1D",
    phone: "Teléfono de contacto: 696 71 44 99",
    email: "E-mail de contacto: contacto@oaninternational.org",
    s1: {
      title: "1. Aceptación de las condiciones de uso.",
      p1: "Estas condiciones generales regulan el uso del sitio web de OAN, al que se accede mediante la dirección URL: www.oaninternational.orgLa existencia de las presentes condiciones generales no excluye la presencia de otras disposiciones o condiciones de acceso a las diversas secciones que componen el sitio de OAN.El visitante presta su aceptación y queda obligado por las condiciones que aquí se exponen. El usuario al utilizar el PORTAL acepta las presentes condiciones generales y queda obligado a utilizar el PORTAL, los servicios y los contenidos alojados de conformidad con las mismas.OAN se reserva el derecho a modificar las presentes Condiciones Generales en cualquier momento y sin previo aviso. Por ello el usuario se obliga a revisar las presentes Condiciones Generales cada vez que acceda al PORTAL.",
    },
    s2: {
      title: "2. Propiedad Intelectual y/o Industrial.",
      p1: "Todos los derechos de propiedad industrial e intelectual que aparecen en este sitio web, así como de sus contenidos (textos, logos, imágenes, sonidos, audio, video, software.....) son propiedad exclusiva de OAN, su uso ha sido autorizado por sus titulares o son de licencia creative commons. El artículo 34 de la Ley 17/2001, de 17 de diciembre, de Marcas, así como otras legislaciones nacionales que pudieran ser aplicables, garantiza el derecho exclusivo de utilizar los antedichos signos distintivos en el tráfico económico. Por consiguiente, queda prohibida su utilización por parte de terceros que carezcan de autorización.",
      p2: "El usuario puede visualizar todos los elementos, imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado, quedando, por tanto, terminantemente prohibida su utilización con fines comerciales, su distribución, así como su modificación, alteración o descompilación.",
      p3: "Los usuarios deberán abstenerse de obtener, e incluso de intentar obtener informaciones, mensajes, gráficos, dibujos, archivos de sonido y/o imagen, fotografías, grabaciones, software y, en general, cualquier clase de material accesibles a través de la Página o de los Servicios (en adelante, los “contenidos”) empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o que se hayan indicado a este efecto en la Página o, en general, de los que se empleen habitualmente en Internet a este efecto siempre que no entrañen un riesgo de daño o utilización de la Página, de los Servicios y/o de los Contenidos.",
      p4: "OAN no concede ninguna licencia o autorización de uso de ninguna clase sobre sus derechos de propiedad intelectual y/o industrial o sobre cualquier otra propiedad o derecho relacionado con la Página, los Servicios o los Contenidos.",
    },
    s3: {
      title: "3. Prohibición de difusión de los contenidos e información suministrada",
      intro:
        "Los usuarios se obligan a usar los Contenidos de forma diligente, correcta y lícita y, en particular, se comprometen a abstenerse de:",
      list: [
        "Utilizar los Contenidos de forma, con fines o efectos contrarios a la Ley, los usos y al orden público.",
        "Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los Contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido.",
        "Suprimir, eludir o manipular el copyright y demás datos identificativos de los derechos de OAN o de sus titulares incorporados a los Contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que pudieran incluir los Contenidos.",
        "Emplear los Contenidos y, en particular, la información de cualquier clase obtenida a través de la Página o de los Servicios para remitir publicidad, comunicaciones con fines de venta directa o con cualquier otra clase de finalidad comercial, mensajes no solicitados dirigidos a una pluralidad de personas con independencia de su finalidad, así como a abstenerse de comercializar o divulgar de cualquier modo dicha información.",
      ],
      trailing:
        "OAN perseguirá el incumplimiento de las anteriores condiciones así como cualquier utilización indebida de los contenidos presentados en su sede ejerciendo todas las acciones civiles y penales que le puedan corresponder.",
    },
    s4: {
      title: "4. Introducción de Links, Enlaces, Hiperenlaces o Hipervínculos.",
      intro:
        "Los Usuarios y, en general, aquellas personas que se propongan establecer un hiperenlace entre su página web y la Página (en adelante el hiperenlace), sin perjuicio de que OAN desde este mismo instante se reserva el derecho a denegarlos, deberán cumplir, como mínimo, las condiciones siguientes:",
      list: [
        "El Hiperenlace únicamente permitirá el acceso a la Página, pero no podrá reproducirla de ninguna forma.",
        "No se realizarán manifestaciones o indicaciones falsas, inexactas o incorrectas sobre la Página y los Servicios y, en particular, no se declarará ni dará a entender que OAN ha autorizado el Hiperenlaces que ha supervisado o asumido de cualquier forma los contenidos o servicios ofrecidos o puestos a disposición de la página web en la que se establece el Hiperenlace.",
        "Excepción hecha de aquellos signos que formen parte del mismo Hiperenlace la página web en la que se establezca el Hiperenlace no contendrá ninguna marca, nombre comercial, rótulo de establecimiento, denominación, logotipo, eslogan u otros signos distintivos pertenecientes a OAN.",
        "La página web en la que se establezca el Hiperenlace no contendrá informaciones o contenidos ilícitos, contrarios a la moral, a las buenas costumbres generalmente aceptadas y/o al orden público, así como tampoco contendrá contenidos contrarios a la naturaleza y fines propios de OAN o a cualesquiera derechos de terceros. El establecimiento del Hiperenlace no implica en ningún caso la existencia de relaciones entre la OAN y el propietario de la web en la que se establezca, ni la aceptación y aprobación por parte de OAN de sus contenidos o servicios.",
      ],
    },
    s5: {
      title:
        "5. Obligación de confidencialidad sobre los contenidos e información de los servicios prestados por OAN a los Usuarios.",
      p1: "Con relación a los servicios a disposición de los usuarios a través de registro previo, todos los datos se mantienen en la más estricta privacidad de acuerdo con la legislación vigente en materia de tratamiento de datos de carácter personal.",
    },
    s6: {
      title: "6. Datos de carácter personal.",
      intro:
        "Para utilizar ciertos servicios los usuarios deben proporcionar a OAN determinados datos de carácter personal. El usuario otorga consentimiento a su tratamiento al proporcionar esos datos. OAN someterá a tratamiento dichos datos personales con la finalidad de mantener las relaciones por las cuales se recaban y de conformidad con la vigente legislación. Los usuarios que hayan suministrado datos personales a OAN tienen reconocidos los siguientes derechos:",
      list: [
        "Derecho de acceso: derecho a solicitar y obtener gratuitamente información de sus datos personales sometidos a tratamiento, su origen y las comunicaciones realizadas o que se prevean realizar.",
        "Derecho de rectificación y cancelación: derecho a rectificar o cancelar aquellos datos personales cuyo tratamiento no se ajuste a la Ley y en particular cuando resulten inexactos o incompletos.",
        "Derecho de oposición: derecho a oponerse al tratamiento de datos personales. Este derecho comportará que los datos personales sean dados de baja en el tratamiento. El ejercicio del derecho de oposición implicará la finalización de aquellas relaciones entre OAN y los usuarios en virtud de las cuales se comunicaron dichos datos.",
      ],
      trailing:
        "A los efectos del ejercicio de tales derechos o bien para cualquier tipo de consulta sobre la política de OAN en relación a los usuarios que visitan su PORTAL, los usuarios podrán dirigirse a la siguiente dirección postal: Avenida de Europa 12, P5, 1D, Pozuelo de Alarcón, Madrid, España.",
    },
    s7: {
      title:
        "7. Utilización de la Página, de los Servicios y de los Contenidos bajo la exclusiva responsabilidad de los Usuarios.",
      p1: "Los Usuarios son conscientes de y aceptan voluntariamente, que el uso de la Página de los Servicios y de los Contenidos tiene lugar, en todo caso, bajo su única y exclusiva responsabilidad.En particular, OAN no garantiza la continuidad, disponibilidad y utilidad del PORTAL, de sus Servicios y Contenidos. Por ello, no responde por los posibles daños y perjuicios de cualquier naturaleza que se pudieran derivar para los usuarios. Todo ello sin perjuicio de lo previsto en las Condiciones Particulares.OAN tampoco garantiza la ausencia de virus ni de otros elementos que puedan producir alteraciones en el sistema informático de los usuarios o en los documentos electrónicos o ficheros almacenados en él.",
      p2: "OAN no garantiza la licitud, fiabilidad, veracidad, exactitud, exhaustividad y actualidad de los Contenidos.Por ello, OAN no responde de los posibles daños y perjuicios de cualquier naturaleza que se pudieran derivar para los usuarios, y en particular, aunque no de modo exclusivo, por los daños y perjuicios que puedan deberse a:",
      list: [
        "El incumplimiento de la Ley, la moral, las costumbres generalmente aceptadas y/o el orden público como consecuencia de la prestación de servicios por terceros a través de la Página.",
        "La infracción de los derechos de propiedad intelectual y/o industrial, de los secretos empresariales, de compromisos contractuales de cualquier clase, de los derechos al honor, a la intimidad personal y familiar y a la imagen de las personas, de los derechos de propiedad y de toda otra naturaleza pertenecientes a un tercero como consecuencia de la prestación de servicios por terceros a través de la Página.",
        "La realización de actos de competencia desleal y publicidad ilícita como consecuencia de la prestación de servicios por terceros a través de la página.",
        "La falta de veracidad, exactitud, exhaustividad, pertinencia y/o actualidad de los contenidos transmitidos, difundidos, almacenados, recibidos, obtenidos, puestos a disposición o accesibles mediante los servicios prestados por terceros a través de la Página.",
        "El incumplimiento, retraso en el cumplimiento, cumplimiento defectuoso o terminación por cualquier causa de las obligaciones contraídas por terceros y contratos realizados con terceros en relación con o con motivo de la prestación de servicios a través de la Página.",
        "Los vicios y defectos de toda clase de los servicios prestados por terceros a través de la Página.",
      ],
    },
    s8: {
      title:
        "8. Exclusión de garantías y responsabilidad por los servicios y contenidos alojados fuera del PORTAL:",
      p1: "OAN no responde por los daños y perjuicios de cualquier naturaleza que se pudieran derivar para los usuarios por esta razón.La Página pone o puede poner a disposición de los usuarios dispositivos técnicos de enlace (tales como, entre otros, links, banners, botones), directorios y herramientas de búsqueda que permiten a los usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.",
      p2: "La instalación de estos enlaces, directorios y herramientas de búsqueda en la Página tiene por único objeto facilitar a los usuarios la búsqueda de y acceso a la información disponible en Internet.OAN tampoco controla previamente, aprueba, vigila ni hace propios los productos y servicios, contenidos, información, datos, archivos y cualquier clase de material existente en los referidos sitios enlazados. Los usuarios, por tanto, deben extremar la prudencia en la valoración y utilización de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los mismos.OAN no garantiza ni asume ningún tipo de responsabilidad por los daños y perjuicios de toda clase que puedan deberse a:",
      list: [
        "El funcionamiento, disponibilidad, accesibilidad o continuidad de los sitios enlazados.",
        "El mantenimiento de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los sitios enlazados;",
        "La prestación o transmisión de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los sitios enlazados;",
        "La calidad, licitud, fiabilidad y utilidad de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los sitios enlazados, en los mismos términos y con el mismo alcance dispuesto en la condición general 9.2 respecto de los contenidos y de los servicios prestados por terceros a través de la página.",
      ],
    },
    s9: {
      title:
        "9. Exclusión de garantías y responsabilidad por la utilización que los usuarios puedan hacer del PORTAL, los servicios y contenidos:",
      p1: "OAN no controla ni supervisa que los usuarios utilicen el PORTAL, sus servicios y contenidos de conformidad con lo dispuesto en las presentes Condiciones Generales y en las Condiciones Particulares que sean de aplicación. Por ello no asume ningún tipo de responsabilidad frente a terceros por el comportamiento de los usuarios.",
    },
    s10: {
      title: "10. Responsabilidad por daños y perjuicios .",
      p1: "Los usuarios responderán de los daños y perjuicios de toda naturaleza que OAN pueda sufrir, directa o indirectamente, como consecuencia de incumplimiento de cualquiera de las obligaciones derivadas de las Condiciones Generales y, en su caso, de las Condiciones Particulares o de la Ley.",
    },
    s11: {
      title: "11. Aceptación de las presentes Condiciones Generales.",
      p1: "La aceptación de las presentes Condiciones Generales por parte de los Usuarios es condición previa indispensable y obligatoria para, en su caso, poderse beneficiar de los Servicios en la misma contenidos. Los Usuarios declaran, bajo su responsabilidad, haber leído las presentes Condiciones Generales de Acceso y Uso de la Página íntegramente, y su confirman su aceptación.",
    },
    s12: {
      title: "12. Ley aplicable y sumisión a Juzgados y Tribunales",
      p1: "Estas Condiciones Generales se regirán por sus propias estipulaciones y, en lo que en ellas no estuviera previsto, por Ordenamiento Jurídico Español.",
    },
  },
  en: {
    title: "Privacy Policy",
    intro:
      "Please read these terms before accessing the website of OAN International (Objetivo Analizar Nikki International), hereinafter OAN. In compliance with the provisions of Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce, we inform you that the website www.oaninternational.org has been created, is maintained and is owned by OAN, whose address, to which users may direct their communications, is:",
    orgName: "OAN International",
    address: "Address: Avenida de Europa 12, P5, 1D",
    phone: "Contact phone: 696 71 44 99",
    email: "Contact e-mail: contacto@oaninternational.org",
    s1: {
      title: "1. Acceptance of the terms of use.",
      p1: "These general terms govern the use of the OAN website, accessed via the URL: www.oaninternational.org. The existence of these general terms does not exclude the presence of other provisions or conditions of access to the various sections that make up the OAN site. The visitor gives their acceptance and is bound by the terms set out herein. By using the PORTAL, the user accepts these general terms and is obliged to use the PORTAL, the services and the hosted content in accordance with them. OAN reserves the right to modify these General Terms at any time and without prior notice. The user therefore undertakes to review these General Terms each time they access the PORTAL.",
    },
    s2: {
      title: "2. Intellectual and/or Industrial Property.",
      p1: "All industrial and intellectual property rights appearing on this website, as well as in its content (texts, logos, images, sounds, audio, video, software.....), are the exclusive property of OAN, their use has been authorised by their owners, or they are under a creative commons licence. Article 34 of Law 17/2001, of 17 December, on Trademarks, as well as other national laws that may be applicable, guarantees the exclusive right to use the aforementioned distinctive signs in the course of trade. Consequently, their use by third parties who lack authorisation is prohibited.",
      p2: "The user may view all the elements, print them, copy them and store them on the hard drive of their computer or on any other physical medium, provided that this is solely and exclusively for their personal and private use. Their use for commercial purposes, their distribution, as well as their modification, alteration or decompilation, is therefore strictly prohibited.",
      p3: "Users must refrain from obtaining, or even attempting to obtain, information, messages, graphics, drawings, sound and/or image files, photographs, recordings, software and, in general, any kind of material accessible through the Website or the Services (hereinafter, the “content”) by using means or procedures other than those which, as the case may be, have been made available to them for this purpose or indicated for this purpose on the Website or, in general, other than those commonly used on the Internet for this purpose, provided that they do not entail a risk of damage to or misuse of the Website, the Services and/or the Content.",
      p4: "OAN grants no licence or authorisation of use of any kind over its intellectual and/or industrial property rights or over any other property or right related to the Website, the Services or the Content.",
    },
    s3: {
      title: "3. Prohibition on disseminating the content and information provided",
      intro:
        "Users undertake to use the Content in a diligent, correct and lawful manner and, in particular, agree to refrain from:",
      list: [
        "Using the Content in a manner, for purposes or with effects that are contrary to the law, to accepted practice and to public order.",
        "Reproducing or copying, distributing, allowing public access through any form of public communication, transforming or modifying the Content, unless authorisation is held from the owner of the corresponding rights or this is legally permitted.",
        "Removing, circumventing or manipulating the copyright and other data identifying the rights of OAN or its owners incorporated into the Content, as well as the technical protection devices or any information mechanisms that the Content may include.",
        "Using the Content and, in particular, information of any kind obtained through the Website or the Services to send advertising, communications for direct sales purposes or for any other commercial purpose, unsolicited messages addressed to a number of people regardless of their purpose, as well as refraining from marketing or disclosing such information in any way.",
      ],
      trailing:
        "OAN will pursue any breach of the above conditions, as well as any improper use of the content presented on its site, exercising all civil and criminal actions to which it may be entitled.",
    },
    s4: {
      title: "4. Insertion of Links, Hyperlinks or Hypertext Links.",
      intro:
        "Users and, in general, those persons who intend to establish a hyperlink between their website and the Website (hereinafter the hyperlink), notwithstanding that OAN reserves from this very moment the right to refuse them, must comply, as a minimum, with the following conditions:",
      list: [
        "The Hyperlink will only allow access to the Website, but may not reproduce it in any way.",
        "No false, inaccurate or incorrect statements or indications will be made about the Website and the Services and, in particular, it will not be declared or implied that OAN has authorised the Hyperlinks, that it has supervised or assumed in any way the content or services offered or made available on the website where the Hyperlink is established.",
        "With the exception of those signs forming part of the Hyperlink itself, the website on which the Hyperlink is established will not contain any trademark, trade name, business sign, denomination, logo, slogan or other distinctive signs belonging to OAN.",
        "The website on which the Hyperlink is established will not contain unlawful information or content, contrary to morality, to generally accepted good practice and/or to public order, nor will it contain content contrary to the nature and purposes of OAN or to any third-party rights. The establishment of the Hyperlink in no case implies the existence of any relationship between OAN and the owner of the website on which it is established, nor the acceptance and approval by OAN of its content or services.",
      ],
    },
    s5: {
      title:
        "5. Duty of confidentiality regarding the content and information of the services provided by OAN to Users.",
      p1: "In relation to the services made available to users through prior registration, all data is kept in the strictest privacy in accordance with the legislation in force on the processing of personal data.",
    },
    s6: {
      title: "6. Personal data.",
      intro:
        "In order to use certain services, users must provide OAN with certain personal data. The user gives consent to its processing by providing that data. OAN will process such personal data for the purpose of maintaining the relationships for which it is collected and in accordance with the legislation in force. Users who have supplied personal data to OAN are entitled to the following rights:",
      list: [
        "Right of access: the right to request and obtain, free of charge, information about their personal data being processed, its origin and the disclosures made or foreseen.",
        "Right of rectification and cancellation: the right to rectify or cancel personal data whose processing does not comply with the law and, in particular, when it is inaccurate or incomplete.",
        "Right to object: the right to object to the processing of personal data. This right will entail the removal of the personal data from processing. Exercising the right to object will imply the termination of those relationships between OAN and the users by virtue of which such data was disclosed.",
      ],
      trailing:
        "For the purpose of exercising such rights, or for any kind of query regarding OAN's policy in relation to the users who visit its PORTAL, users may contact the following postal address: Avenida de Europa 12, P5, 1D, Pozuelo de Alarcón, Madrid, Spain.",
    },
    s7: {
      title:
        "7. Use of the Website, the Services and the Content under the exclusive responsibility of Users.",
      p1: "Users are aware of and voluntarily accept that the use of the Website, the Services and the Content takes place, in all cases, under their sole and exclusive responsibility. In particular, OAN does not guarantee the continuity, availability and usefulness of the PORTAL, its Services and Content. It is therefore not liable for any damages of any nature that may arise for users. All of the above is without prejudice to the provisions of the Particular Conditions. OAN also does not guarantee the absence of viruses or of other elements that may cause alterations to users' computer systems or to the electronic documents or files stored on them.",
      p2: "OAN does not guarantee the lawfulness, reliability, truthfulness, accuracy, completeness and currency of the Content. Therefore, OAN is not liable for any damages of any nature that may arise for users, and in particular, although not exclusively, for damages that may be due to:",
      list: [
        "The breach of the law, morality, generally accepted practice and/or public order as a result of the provision of services by third parties through the Website.",
        "The infringement of intellectual and/or industrial property rights, of trade secrets, of contractual commitments of any kind, of the rights to honour, to personal and family privacy and to the image of individuals, of property rights and of any other nature belonging to a third party as a result of the provision of services by third parties through the Website.",
        "The carrying out of acts of unfair competition and unlawful advertising as a result of the provision of services by third parties through the website.",
        "The lack of truthfulness, accuracy, completeness, relevance and/or currency of the content transmitted, disseminated, stored, received, obtained, made available or accessible through the services provided by third parties through the Website.",
        "The non-performance, delay in performance, defective performance or termination for any reason of the obligations entered into by third parties, and of contracts made with third parties in connection with or by reason of the provision of services through the Website.",
        "The defects and flaws of all kinds in the services provided by third parties through the Website.",
      ],
    },
    s8: {
      title:
        "8. Exclusion of warranties and liability for services and content hosted outside the PORTAL:",
      p1: "OAN is not liable for damages of any nature that may arise for users for this reason. The Website makes or may make available to users technical linking devices (such as, among others, links, banners, buttons), directories and search tools that allow users to access websites belonging to and/or managed by third parties.",
      p2: "The installation of these links, directories and search tools on the Website has the sole purpose of making it easier for users to search for and access the information available on the Internet. OAN also does not review in advance, approve, monitor or make its own the products and services, content, information, data, files and any kind of material existing on the aforementioned linked sites. Users must therefore exercise the utmost caution in assessing and using the services, information, data, files, products and any kind of material existing on them. OAN neither guarantees nor assumes any liability for damages of all kinds that may be due to:",
      list: [
        "The operation, availability, accessibility or continuity of the linked sites.",
        "The maintenance of the services, information, data, files, products and any kind of material existing on the linked sites;",
        "The provision or transmission of the services, information, data, files, products and any kind of material existing on the linked sites;",
        "The quality, lawfulness, reliability and usefulness of the services, information, data, files, products and any kind of material existing on the linked sites, on the same terms and with the same scope set out in general condition 9.2 regarding the content and the services provided by third parties through the website.",
      ],
    },
    s9: {
      title:
        "9. Exclusion of warranties and liability for the use that users may make of the PORTAL, the services and the content:",
      p1: "OAN does not control or supervise whether users use the PORTAL, its services and content in accordance with the provisions of these General Terms and the applicable Particular Conditions. It therefore assumes no liability towards third parties for the conduct of users.",
    },
    s10: {
      title: "10. Liability for damages.",
      p1: "Users will be liable for damages of any nature that OAN may suffer, directly or indirectly, as a result of the breach of any of the obligations arising from the General Terms and, where applicable, from the Particular Conditions or the law.",
    },
    s11: {
      title: "11. Acceptance of these General Terms.",
      p1: "Acceptance of these General Terms by Users is an indispensable and mandatory prerequisite in order, where applicable, to be able to benefit from the Services contained therein. Users declare, on their own responsibility, that they have read these General Terms of Access and Use of the Website in full, and confirm their acceptance.",
    },
    s12: {
      title: "12. Applicable law and submission to Courts and Tribunals",
      p1: "These General Terms will be governed by their own provisions and, in matters not foreseen therein, by the Spanish legal system.",
    },
  },
};

export default async function Legal({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const t = content[locale];

  return (
    <main>
      <TitlePage title={t.title} backgroundImageUrl="/oan-web-021.jpg" />

      <section className={styles.legalSection}>
        <div>
          <p className={styles.marginBottom}>{t.intro}</p>
          <p>{t.orgName}</p>
          <p>{t.address}</p>
          <p>{t.phone}</p>
          <p className={styles.marginBottom}>{t.email}</p>
          <div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s1.title}</h3>
              <p className={styles.marginBottom}>{t.s1.p1}</p>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s2.title}</h3>
              <p className={styles.marginBottom}>{t.s2.p1}</p>
              <p className={styles.marginBottom}>{t.s2.p2}</p>
              <p className={styles.marginBottom}>{t.s2.p3}</p>
              <p className={styles.marginBottom}>{t.s2.p4}</p>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s3.title}</h3>
              <p className={styles.marginBottom}>{t.s3.intro}</p>
              <ul className={styles.marginLeft}>
                {t.s3.list.map((item, i) => (
                  <li key={i} className={styles.marginBottom10}>
                    {item}
                  </li>
                ))}
              </ul>
              {t.s3.trailing}
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s4.title}</h3>
              <p className={styles.marginBottom}>{t.s4.intro}</p>
              <ul className={styles.marginLeft}>
                {t.s4.list.map((item, i) => (
                  <li key={i} className={styles.marginBottom10}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s5.title}</h3>
              <p className={styles.marginBottom}>{t.s5.p1}</p>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s6.title}</h3>
              <p className={styles.marginBottom}>{t.s6.intro}</p>
              <ul className={styles.marginLeft}>
                {t.s6.list.map((item, i) => (
                  <li key={i} className={styles.marginBottom10}>
                    {item}
                  </li>
                ))}
              </ul>
              {t.s6.trailing}
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s7.title}</h3>
              <p className={styles.marginBottom}>{t.s7.p1}</p>
              <p className={styles.marginBottom}>{t.s7.p2}</p>
              <ul className={styles.marginLeft}>
                {t.s7.list.map((item, i) => (
                  <li key={i} className={styles.marginBottom10}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s8.title}</h3>
              <p className={styles.marginBottom}>{t.s8.p1}</p>
              <p className={styles.marginBottom}>{t.s8.p2}</p>
              <ul className={styles.marginLeft}>
                {t.s8.list.map((item, i) => (
                  <li key={i} className={styles.marginBottom10}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s9.title}</h3>
              <p className={styles.marginBottom}>{t.s9.p1}</p>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s10.title}</h3>
              <p className={styles.marginBottom}>{t.s10.p1}</p>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s11.title}</h3>
              <p className={styles.marginBottom}>{t.s11.p1}</p>
            </div>
            <div>
              <h3 className={styles.marginBottom10}>{t.s12.title}</h3>
              <p className={styles.marginBottom}>{t.s12.p1}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
