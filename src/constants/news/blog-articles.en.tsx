import { BlogArticle } from "@/components/article-preview/article-preview.component";
import Image from "next/image";
import { CSSProperties } from "react";

const wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
};

const image: CSSProperties = {
  width: "100%",
  height: "auto",
  alignItems: "center",
  objectFit: "contain",
};

const interviewSection: CSSProperties = {
  marginBottom: "2rem",
  width: "100%",
};

const question: CSSProperties = {
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const answer: CSSProperties = {
  marginLeft: "2rem",
};

const answerList: CSSProperties = {
  ...answer,
  listStyle: "none",
};

const sectionTitle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

export const BLOG_ARTICLES_EN: BlogArticle[] = [
  {
    id: "oan-international-magia-por-benin-2026",
    imageUrl: "/oan-web-057.jpg",
    author: "OAN International",
    date: "March 30, 2026",
    link: "/news/oan-international-magia-por-benin-2026",
    title: "OAN International at Magia por Benín",
    description:
      'OAN International raises more than 2.000 € at the charity event "Magia por Benín"',
    content: (
      <div style={wrapper}>
        <p>
          OAN International raises more than 2.000 € at the charity event
          &quot;Magia por Benín&quot;.
        </p>
        <p>
          During the last weekend of March, on the 27th, 28th and 29th, we took
          an active part in a new edition of Magia por Benín, an event organized
          every year by Mensajeros de la Paz and with which we have been
          collaborating for years.
        </p>
        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-055.jpg"
          alt="Magia por Benín: imagen del evento solidario"
        />
        <p>
          At OAN International, we were present with a space dedicated to
          spreading the word about our development cooperation projects in the
          Nikki region. The main goal of our participation was twofold: to raise
          awareness among attendees about our work in the field and to make the
          products of Nikarit, our social entrepreneurship project, available to
          them.
        </p>
        <h2 style={sectionTitle}>Nikarit: Cosmetics with social impact</h2>
        <p>
          At our information stand, we made the Nikarit product range available
          to the public, handcrafted by women&apos;s cooperatives in Benin. The
          sale of these products not only promotes fair trade and the use of
          natural ingredients such as shea butter, but also directly supports the
          economic sustainability of the producing communities.
        </p>
        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-056.jpg"
          alt="Productos Nikarit y stand de OAN International en Magia por Benín"
        />
        <h2 style={sectionTitle}>Results of the day</h2>
        <p>
          As every year, the public&apos;s response was excellent, translating
          into very positive results for the organization:
        </p>
        <ul style={answerList}>
          <li>
            <strong>Reach:</strong> dozens of people showed interest in OAN
            International&apos;s areas of work.
          </li>
          <li>
            <strong>Funds raised:</strong> thanks to the sale of Nikarit products
            and the donations received, we managed to raise a figure above 2.000
            euros.
          </li>
          <li>
            <strong>Use of the funds:</strong> this amount will go entirely
            towards financing the projects we lead in Benin, focused on key areas
            such as health, education and women&apos;s empowerment.
          </li>
        </ul>
        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-057.jpg"
          alt="Equipo de voluntarios de OAN International en el stand de Magia por Benín"
        />
        <p>
          We want to express our gratitude both to the organizers of Magia por
          Benín for giving us this space, and to everyone who came to our stand
          to support us.
        </p>
        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-058.jpg"
          alt="Comunidad y proyecto Nikarit en Benín"
        />
      </div>
    ),
  },
  {
    id: "vii-jornada-voluntariado-cooperacion-sanitaria-2026",
    imageUrl: "/oan-web-054.jpg",
    author: "Sara Triquet",
    date: "February 23, 2026",
    link: "/news/vii-jornada-voluntariado-cooperacion-sanitaria-2026",
    title:
      "7th Conference on Volunteering in International Cooperation for Students of Healthcare Professions",
    content: (
      <div style={wrapper}>
        <p>
          On February 23, 2026 we took part in the 7th Conference on Volunteering
          in International Cooperation for Students of Healthcare Professions, an
          event to which we have been invited in recent years, aimed at
          complementing academic training with a committed and global outlook on
          health.
        </p>
        <p>
          The conference took place in the Meeting Room of the Pediatric
          Intensive Care Unit of the Gregorio Marañón Mother and Child Hospital,
          organized by the Department of Public Health and Mother and Child Care
          of the Complutense University of Madrid.
        </p>
        <h2 style={sectionTitle}>
          A space to discover volunteering in cooperation
        </h2>
        <p>
          Aimed at students of Medicine, Nursing and other healthcare
          professions, the conference had the following main objectives:
        </p>
        <ul style={answerList}>
          <li>
            Explain the characteristics of volunteering in international
            cooperation during the university stage.
          </li>
          <li>
            Provide information about concrete opportunities to take part in
            projects run by different NGOs.
          </li>
          <li>
            Show real experiences of professionals with a track record in the
            field.
          </li>
          <li>
            Inspire an ethical, responsible and committed vision of healthcare
            practice.
          </li>
        </ul>
        <h2 style={sectionTitle}>
          OAN International: commitment and training
        </h2>
        <p>
          On behalf of OAN International, Sara Triquet shared the
          organization&apos;s mission and lines of work, highlighting the
          importance of structured, sustainable cooperation focused on
          strengthening local health systems, and presenting our PreMaSe project
          to combat child malnutrition.
        </p>
        <p>
          Key aspects for students were addressed: prior preparation, support,
          ethical responsibility and the value of interdisciplinary teamwork.
        </p>
        <h2 style={sectionTitle}>Experiences that inspire</h2>
        <p>
          The program also included the participation of various organizations
          working in healthcare and social cooperation:
        </p>
        <ul style={answerList}>
          <li>
            The Surgery in Turkana project, presented by Carmen Hernández,
            offered insight into the surgical reality in resource-limited
            contexts.
          </li>
          <li>
            AISE, represented by Zahida Jiménez, presented its initiatives and
            the active role that students can play.
          </li>
          <li>
            Zerca y Lejos, represented by Laura Portela, shared its experience in
            cooperation in Central Africa.
          </li>
          <li>
            Asociación Colaboración y Esfuerzo (ACOES), with Javier Urbano,
            focused on education and community development.
          </li>
          <li>
            The Omar Mosquera Foundation, presented by Maxwel Omar Mosquera,
            highlighted the importance of continuity and long-term impact in
            projects.
          </li>
        </ul>
        <p>
          Each presentation allowed students to learn about different models of
          cooperation: from one-off surgical interventions to educational and
          community programs sustained over time.
        </p>
        <p>
          At OAN International we thank the organizers, the speakers and all the
          students who attended for their enthusiasm and commitment. We continue
          working to offer spaces for training and reflection that drive an
          ethical, professional and transformative healthcare cooperation.
        </p>
      </div>
    ),
  },
  {
    id: "encuentro-parakou-karite-2026",
    imageUrl: "/oan-web-053.jpg",
    author: "Mireille Gnammi",
    date: "February 9, 2026",
    link: "/news/encuentro-parakou-karite-2026",
    title: "Parakou Meeting on Shea",
    content: (
      <div style={wrapper}>
        <p>
          On Monday, February 9, 2026, a meeting on shea was held in Parakou. It
          was a workshop organized by the AGK about women&apos;s land rights.
        </p>
        <p>
          The main objective of the workshop was to find solutions to the various
          problems related to land tenure, especially regarding the areas where
          women carry out the harvesting.
        </p>
        <p>
          Our colleague Mireille, head of the Nikarit project, attended on behalf
          of OAN International as an organization playing an important role within
          the shea sector in Benin.
        </p>
        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-053.jpg"
          alt="Encuentro Parakou sobre Karité"
        />
        <p>
          For the launch of the project, a structure called FARMELINE was
          involved, created in Ghana in 2013 with the aim of increasing farmers&apos;
          productivity in Ghana, Togo and Benin. This organization carried out a
          survey in which 4,806 fields were identified. First they visited the
          women harvesters, who guided them to their working areas. Based on the
          research, they developed a tool capable of recognizing shea trees. With
          this tool they identified 91,816 trees through surveys of 7,050 women,
          of whom 2,000 were in Benin.
        </p>
        <p>
          According to the results, 37% of the land is managed by men, 27% by
          women and 22% by the community. However, the survey had limitations and
          did not take into account all the necessary parameters, such as young
          trees, productive or non-productive trees, or the distinction between
          male and female trees. Nor did it consider the actual ownership of the
          land, and only women were surveyed, even though men are also involved.
        </p>
        <p>
          Afterwards, a Ugandan lawyer gave a presentation on the situation of
          land tenure in shea-producing countries.
        </p>
        <p>
          Next, group work was carried out around four main topics:
        </p>
        <h2 style={sectionTitle}>1. Land tenure (access to land)</h2>
        <p>
          Since ancient times, in most African countries the inheritance of land
          has been reserved exclusively for male children. It is considered that
          daughters will marry and therefore do not need land, since it would
          benefit another family. The work was carried out together with the
          representative of the emperor of Nikki and several women, with the aim
          of reflecting on how to correct this injustice and ensure that daughters
          are treated on equal terms with sons. It was noted that the situation is
          beginning to improve and that in some families daughters already receive
          the same treatment. In addition, they committed to continue the advocacy
          work to achieve widespread equality.
        </p>
        <h2 style={sectionTitle}>2. Rights over the trees</h2>
        <p>
          There was a debate about which trees women have the right to harvest
          from and what problems are associated with harvesting shea nuts.
        </p>
        <p>
          Women may harvest:
        </p>
        <ul style={answerList}>
          <li>On land belonging to their husbands.</li>
          <li>On community land.</li>
          <li>
            In authorized parks and forests, respecting forestry measures,
            including gallery forests.
          </li>
          <li>On private land with the owners&apos; authorization.</li>
        </ul>
        <p>Among the problems identified, the following stand out:</p>
        <ul style={answerList}>
          <li>
            Conflicts that can escalate to serious confrontations when a woman
            enters a plot without authorization to harvest.
          </li>
          <li>
            Risk of animal attacks when accessing parks without permission.
          </li>
          <li>
            Domestic violence because some women prioritize harvesting over
            farming work. Some men, in reaction, cut down trees or even bury the
            nuts to prevent harvesting.
          </li>
        </ul>
        <h2 style={sectionTitle}>
          3. Access to credit and financing
        </h2>
        <p>
          The procedures for women to access credit were analyzed:
        </p>
        <ul style={answerList}>
          <li>They must organize into certified groups or clusters.</li>
          <li>
            It is necessary to have signed purchase contracts in place beforehand
            for the shea butter or the nuts.
          </li>
        </ul>
        <p>
          The women pointed to disorder in the price of the nuts and the lack of a
          market for the butter as the main problems. They were advised to focus
          on the quality of both the nuts and the butter, since in previous years
          some major clients lost confidence due to the low quality of the product
          and now prefer to buy nuts to produce their own butter.
        </p>
        <h2 style={sectionTitle}>4. Digital mapping and next steps</h2>
        <p>
          The improvement of the application being used was announced,
          incorporating all the parameters related to the shea tree. It is worth
          recalling that the data was collected using satellite technology.
        </p>
        <p>
          After all the consultations and debates, a short roadmap was drawn up in
          the form of recommendations, signed by all the participants, which will
          be sent from Benin to the funding bodies.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-054.jpg"
          alt="Encuentro Parakou sobre Karité"
        />
      </div>
    ),
  },
  {
    id: "encuentro-anual-2025",
    imageUrl: "/oan-web-052.jpg",
    author: "Álvaro Pascual",
    date: "December 14, 2025",
    link: "/news/encuentro-anual-2025",
    title: "Annual Meeting 2025",
    content: (
      <div style={wrapper}>
        <p>
          On November 29, 2025, OAN International held its now traditional Annual
          Meeting, a space designed to bring together everyone who is part of this
          social transformation project. Nearly 100 attendees gathered to share an
          afternoon full of emotion, learning and memories, in which the OAN
          community once again demonstrated its strength and commitment.
        </p>

        <p>
          Eleven years ago, a group of young dreamers decided to join their energy
          and their hope to create an organization capable of generating real
          impact in Nikki (Benin). Today, more than a decade later, OAN
          International has evolved thanks to the collective effort, building
          projects that promote sustainable development, access to basic services
          and the autonomy of local communities.
        </p>

        <p>
          The Annual Meeting was a perfect opportunity to look back, honor the road
          traveled and, above all, celebrate the achievements reached together with
          those who have made every step possible.
        </p>

        <p>
          The day began with a welcome to those who wished to join us, followed by
          a detailed presentation on the progress of the projects in Nikki over the
          past year. Attendees were able to learn first-hand about the latest
          developments in areas such as health, water, education and
          entrepreneurship, and to get closer to the daily reality of the region
          thanks to real stories from the team that was in Nikki in 2025. We were
          also able to connect by video call with our colleagues in Nikki, who
          greeted the friends of OAN from afar.
        </p>

        <p>
          The afternoon continued with a space to learn more about the projects,
          with stands dedicated to each one where attendees could ask about their
          questions and get to know the tools that are used. All of this while
          enjoying a delicious Senegalese meal, accompanied by good music.
        </p>

        <p>
          The 2025 Annual Meeting not only celebrated what has been achieved, but
          also opened the door to the plans and challenges of the coming years.
          With new ideas, motivated teams and a community stronger than ever, OAN
          International continues working so that every project has a lasting and
          transformative impact.
        </p>

        <p>
          Once again, thank you to everyone who attended, collaborated or supported
          the event in some way. OAN International is possible thanks to you.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-052.jpg"
          alt="Encuentro anual 2025"
        />
      </div>
    ),
  },
  {
    id: "25n-dia-internacional-eliminacion-violencia-mujer-2025",
    imageUrl: "/oan-web-051.jpg",
    author: "Álvaro Pascual",
    date: "December 14, 2025",
    link: "/news/25n-dia-internacional-eliminacion-violencia-mujer-2025",
    title:
      "25N International Day for the Elimination of Violence against Women 2025",
    content: (
      <div style={wrapper}>
        <h2 style={sectionTitle}>
          Nikki unites against Gender-Based Violence: How OAN International
          Commemorated 25N in 2025
        </h2>

        <p>
          On November 25, 2025, on the occasion of the International Day for the
          Elimination of Violence against Women, the OAN International team in
          Nikki (Benin) organized a day of reflection and community dialogue
          focused on the fight against gender-based violence. Once again, the
          organization reaffirmed its commitment to defending women&apos;s rights
          and to preventing all forms of violence that affect their well-being and
          development.
        </p>

        <h2 style={sectionTitle}>
          A modest but deeply meaningful commemoration
        </h2>

        <p>
          Unlike previous editions, this year&apos;s commemoration took place in a
          more modest atmosphere, in keeping with the community&apos;s social
          context. However, the depth of the conversations and the quality of the
          contributions made this day an especially valuable moment for the
          collective building of solutions.
        </p>

        <p>
          OAN International brought together around the same table elders and
          traditional leaders, representatives of civil society, citizens,
          religious leaders, as well as communal structures and other NGOs present
          in the area. This diversity of voices allowed for a broad and
          participatory analysis of the various manifestations of gender-based
          violence in Nikki and its surroundings.
        </p>

        <h2 style={sectionTitle}>
          Presentation of progress and challenges since 2017
        </h2>

        <p>
          During the meeting, OAN International presented its achievements and the
          actions carried out since 2017 in the fight against this serious social
          problem. Experiences of awareness-raising, community support, training
          and joint work with local authorities to promote safer environments for
          women and girls were shared.
        </p>

        <p>
          The organization also took the opportunity to present the difficulties
          encountered in implementing its activities: resource limitations,
          socio-cultural barriers and structural challenges that continue to hinder
          the effective protection of women&apos;s rights.
        </p>

        <h2 style={sectionTitle}>
          A space for reflection and joint building
        </h2>

        <p>
          One of the most relevant moments of the day was the open dialogue among
          the different participants. Based on the shared experiences, proposals
          for solutions were formulated aimed at improving the prevention, support
          and response to gender-based violence.
        </p>

        <p>
          As a result of this exchange, a joint roadmap was drawn up and approved,
          which will guide the next actions and will make it possible to strengthen
          the collaborative work among organizations, community leaders and
          institutional actors.
        </p>

        <h2 style={sectionTitle}>
          A renewed commitment to a future without violence
        </h2>

        <p>
          The fight against gender-based violence requires perseverance,
          coordinated work and the active involvement of the whole community. With
          activities such as the one on 25N, OAN International reaffirms its will to
          keep building safe spaces and to promote a lasting social transformation
          in Nikki.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-051.jpg"
          alt="25N Día Internacional de la Eliminación de la Violencia contra la Mujer 2025"
        />
      </div>
    ),
  },
  {
    id: "taller-plan-campana-karite-2026",
    imageUrl: "/oan-web-048.jpg",
    author: "OAN Nikki",
    date: "November 5, 2025",
    link: "/news/taller-plan-campana-karite-2026",
    title:
      "OAN takes part in the 2026 campaign plan workshop for shea butter",
    content: (
      <div style={wrapper}>
        <p>
          OAN Nikki has taken part in the workshop to develop the 2026 campaign
          plan for the shea butter sector in Benin.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-048.jpg"
          alt="Participantes del taller para desarrollar el plan de campaña 2026 para el sector de la manteca de karité en Atakora, Natitingou"
        />

        <p>
          Our participation was carried out by Mireille as Coordinator of the
          Nikarit Project and by Kader as President of OAN Nikki. The workshop, to
          which we were invited by ATDA 3 (Agence Territoriale de Développement
          Agricole pôle 3), was a unique and enriching experience. Taking part in a
          genuine exchange of ideas with key players in the sector allowed us to be
          at the center of the discussions and decisions that will shape the future
          of a sector that is very close to our hearts.
        </p>

        <p>
          Since 2014, OAN has worked alongside the women of our communities to
          promote shea butter and empower them economically.
        </p>

        <p>
          Knowing that our voices and contributions are now taken into account on
          the same level as our fieldwork motivates us even more to continue our
          efforts for the economic and social development of the women of Nikarit.
        </p>
      </div>
    ),
  },
  {
    id: "premio-fundacion-prandi-2025",
    imageUrl: "/oan-web-049.jpg",
    author: "OAN International",
    date: "October 18, 2025",
    link: "/news/premio-fundacion-prandi-2025",
    title:
      "OAN International receives the Prandi Foundation Award for its project to reduce child malnutrition in Nikki",
    content: (
      <div style={wrapper}>
        <p>
          On October 18, 2025, as part of the 39th National Congress of the
          Spanish Society of Community Pediatrics and Primary Care (SEPEAP) held in
          Seville, the Prandi Foundation for Community Pediatrics awarded its Prandi
          Foundation Award, worth 10,000 euros, to the NGO OAN International. The
          recognition highlights the organization&apos;s work on its project to
          Reduce Child Malnutrition in Nikki, an initiative that seeks to
          sustainably improve the health and nutrition of children in this region
          of northern Benin.
        </p>

        <h2 style={sectionTitle}>
          A recognition of cooperation and child health
        </h2>

        <p>
          The Prandi Foundation Award values initiatives that contribute in a
          tangible way to the well-being of children, both in Spain and
          internationally. On this occasion, the jury wanted to recognize the
          impact of OAN International&apos;s work in the field of healthcare
          cooperation, its approach based on collaboration with the local community
          and its commitment to applied research to improve child health.
        </p>

        <p>
          During the ceremony, the Foundation&apos;s representatives stressed that
          the Nikki project &quot;reflects the essence of community pediatrics:
          accompanying, educating and preventing from close proximity, with real
          solutions that are born from the community and sustained over time&quot;.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-049.jpg"
          alt="Entrega del Premio Fundación Prandi a OAN International en el 39º Congreso Nacional de SEPEAP"
        />

        <h2 style={sectionTitle}>
          OAN International: young people at the service of sustainable development
        </h2>

        <p>
          OAN International is a non-profit organization founded by young Spanish
          university students in 2013. Its mission is to create a model of
          horizontal and sustainable international cooperation, connecting academic
          research with social action in the field. From its base in Spain, the NGO
          works in Nikki (Benin) on projects covering health, nutrition, access to
          water, gender equality and education.
        </p>

        <p>
          The project awarded by the Prandi Foundation addresses one of the
          greatest health challenges in the region: child malnutrition. Through a
          comprehensive program, OAN International promotes food education,
          nutritional monitoring and the strengthening of local health services. In
          addition, it drives community gardens and sustainable agricultural
          training, with the aim of ensuring a lasting improvement in
          children&apos;s diet and in the family economy.
        </p>

        <h2 style={sectionTitle}>
          The Prandi Foundation: commitment to health beyond the hospital
        </h2>

        <p>
          The Prandi Foundation for Community Pediatrics is a non-profit entity that
          focuses its work on improving healthcare and the living conditions of
          children. Its mission takes shape in the training of healthcare
          professionals, the promotion of pediatric research and collaboration on
          social action projects that directly benefit children, especially those
          at risk of social exclusion.
        </p>

        <p>
          With the annual presentation of this award, the Foundation reaffirms its
          commitment to social action and global child health, recognizing the work
          of entities that, like OAN International, transform the reality of
          thousands of children through sustainable and innovative projects.
        </p>

        <h2 style={sectionTitle}>A boost to keep growing</h2>

        <p>
          The 2025 Prandi Foundation Award will allow OAN International to
          strengthen its work in Nikki, expanding the program&apos;s coverage and
          improving the resources allocated to the care and monitoring of
          malnutrition cases. On behalf of the organization, its representatives
          thanked the recognition, stressing that this support &quot;is a boost to
          keep working for a world where no child suffers the consequences of
          malnutrition&quot;.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-050.jpg"
          alt="39º Congreso Nacional de la Sociedad Española de Pediatría Extrahospitalaria y Atención Primaria en Sevilla"
        />
      </div>
    ),
  },
  {
    id: "entrevista-a-moussa-yacoubou",
    imageUrl: "/people/moussa.jpeg",
    author: "Selene Sanchez",
    date: "May 5, 2025",
    link: "/news/entrevista-a-moussa-yacoubou",
    title: "Interview with Moussa Yacoubou",
    content: (
      <div style={wrapper}>
        <div style={interviewSection}>
          <h2 style={sectionTitle}>Working with OAN International</h2>
          <p style={question}>
            Can you tell us a little about yourself before you got to know OAN?
          </p>
          <ul style={answerList}>
            <li>Your name: Moussa Yacoubou</li>
            <li>Where are you from? I am a native of Nikki.</li>
            <li>
              What did you do before joining OAN? I carried out field studies
              based on the needs of the organizations that hired me, and I was
              also a distributor of tropical products.
            </li>
            <li>
              What training have you received? I received training in geography,
              planning and territorial development.
            </li>
            <li>
              How did you imagine your future back then? At that time, I imagined
              being an agent of an international organization.
            </li>
          </ul>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is OAN Nikki?</p>
          <p style={answer}>
            It is a community organization that works for social purposes for the
            benefit of the Nikki community.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What convinced you to join the OAN Nikki team?
          </p>
          <p style={answer}>
            What motivated me were the trips and the assistance to the
            communities.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What is your job at OAN and what has joining the team meant for you?
          </p>
          <p style={answer}>
            Within the organization, I am responsible for service materials and,
            specifically, I am responsible for the project to reduce malnutrition
            and improve child health (PRéMASE).
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What motivates you to keep working with OAN Nikki?
          </p>
          <p style={answer}>
            The team spirit. Meeting new people. The social protection of
            vulnerable communities and, above all, the innocence of the babies we
            help.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is usually part of your daily routine?</p>
          <p style={answer}>
            On any working day, I am on duty from 8 a.m. until 12 noon, and then I
            return to the office to continue from 3 p.m. until 6 p.m. The rest of
            the day I am at home with my family. Only on weekends do I take the
            chance to do other personal activities.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Challenges and opportunities of development cooperation
          </h2>
          <p style={question}>
            In your opinion, what approach should international cooperation take to
            foster development?
          </p>
          <p style={answer}>
            In my opinion, the best way to promote development is to teach
            communities what they do not know but need.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            How would you describe the ideal development for Nikki? / What model of
            development do you think the people of Nikki want?
          </p>
          <p style={answer}>
            Through purely social and well-organized development, I believe Nikki
            will easily be able to achieve other kinds of economic and political
            development.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Life in Nikki beyond development cooperation
          </h2>
          <p style={question}>
            What do you do when you are off working hours?
          </p>
          <p style={answer}>
            Outside of work, I farm and I also sell some tropical products.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>Have you had any role model in your life?</p>
          <p style={answer}>
            Not for the moment, because I have never thought I resemble anyone. I
            have always believed that each person is made in a unique way.
          </p>
        </div>

        <Image
          style={image}
          width="100"
          height="100"
          src="/people/moussa.jpeg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "entrevista-a-orou-donkore-sinagahoue",
    imageUrl: "/people/marc.jpeg",
    author: "Selene Sanchez",
    date: "April 28, 2025",
    link: "/news/entrevista-a-orou-donkore-sinagahoue",
    title: "Interview with Orou Donkoré Sinagahoue",
    content: (
      <div style={wrapper}>
        <div style={interviewSection}>
          <h2 style={sectionTitle}>Working with OAN International</h2>
          <p style={question}>
            Can you tell us a little about yourself before you got to know OAN?
          </p>
          <ul style={answerList}>
            <li>Your name: Orou Donkoré Sinagahoue</li>
            <li>Where are you from? From Banikoara.</li>
            <li>
              What did you do before joining OAN? Before joining OAN, I worked as
              a supervisor of the waste management project with the NGO VIDECON.
              Later, I worked as manager of a shop and a restaurant belonging to
              the company MDIK.
            </li>
            <li>
              What training have you received? Sociology and anthropology, with a
              specialization in development.
            </li>
            <li>
              How did you imagine your future back then? I saw it as a calm and
              hopeful future.
            </li>
          </ul>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is OAN Nikki?</p>
          <p style={answer}>
            OAN: Objetivo Analizar Nikki is a non-profit non-governmental
            organization that carries out several social and community projects,
            among them: NIKARIT, PRéMASE, ASEP, Community Gardens and ProGIDéM.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What convinced you to join the OAN Nikki team?
          </p>
          <p style={answer}>
            Having been a supervisor of the waste management project with another
            NGO —a project I was deeply passionate about— was what convinced me to
            join the team.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What is your job at OAN and what has joining the team meant for you?
          </p>
          <p style={answer}>
            I am a project manager. Being part of the team is a real pleasure for
            me, because I see in it collaboration, communication, responsibility,
            relationships based on trust, respect for the environment, diversity,
            the sharing of a common goal and the mutual support that makes it
            possible to achieve collective results.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What motivates you to keep working with OAN Nikki?
          </p>
          <p style={answer}>
            Love for what I do, love for my work and my passion for protecting the
            environment.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is usually part of your daily routine?</p>
          <p style={answer}>
            In the morning, when I wake up, I tidy my room and then get ready for
            work. Once at work, I follow all the administrative requirements. At
            midday, I take a break to have lunch and then I take care of other
            tasks. In the afternoon, I return to work to continue with the
            administrative tasks. At night, I go back home, get ready for dinner
            and then sleep to rest and be ready for a new day.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Challenges and opportunities of development cooperation
          </h2>
          <p style={question}>
            How would you describe the ideal development for Nikki? / What model of
            development do you think the people of Nikki want?
          </p>
          <p style={answer}>
            The ideal development for Nikki is based on a holistic and inclusive
            approach that integrates economic, social, environmental and cultural
            needs. Because each of these elements plays a crucial role in ensuring
            a high quality of life and a sustainable future for the people of
            Nikki.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Life in Nikki beyond development cooperation
          </h2>
          <p style={question}>
            What do you do when you are off working hours?
          </p>
          <p style={answer}>
            I am an activist and defender of children&apos;s rights.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>Have you had any role model in your life?</p>
          <p style={answer}>
            Yes, Mr. Abdel Kader Madougou (president of OAN Nikki). Why him?
            Because he represents a good example of leadership. If I could, I do
            not seek to resemble him, but rather to reach the point of doing what
            he does, because wanting to look like him would be defying the laws of
            genetics.
          </p>
        </div>

        <Image
          style={image}
          width="100"
          height="100"
          src="/people/marc.jpeg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "entrevista-a-yasminatou-imorou",
    imageUrl: "/people/yasminatou.jpeg",
    author: "Selene Sanchez",
    date: "April 21, 2025",
    link: "/news/entrevista-a-yasminatou-imorou",
    title: "Interview with Yasminatou Imorou",
    content: (
      <div style={wrapper}>
        <div style={interviewSection}>
          <h2 style={sectionTitle}>Working with OAN International</h2>
          <p style={question}>
            Can you tell us a little about yourself before you got to know OAN?
          </p>
          <ul style={answerList}>
            <li>Your name: Yasminatou Imorou</li>
            <li>Where are you from? From Nikki.</li>
            <li>
              What did you do before joining OAN? I worked as a facilitator on
              water, sanitation and hygiene (WASH) issues in Pèrèrè.
            </li>
            <li>
              What training have you received? Training in Hydraulics and
              Sanitation.
            </li>
            <li>
              How did you imagine your future back then? I imagined myself with
              greater financial stability to carry out my projects.
            </li>
          </ul>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is OAN Nikki?</p>
          <p style={answer}>
            OAN Nikki (Objetivo Analizar Nikki) is an organization that helps and
            assists communities in their empowerment and development.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What convinced you to join the OAN Nikki team?
          </p>
          <p style={answer}>
            The desire to contribute to the development of my community.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What is your job at OAN and what has joining the team meant for you?
          </p>
          <p style={answer}>I am in charge of the ASEP-AGUAPP project.</p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What motivates you to keep working with OAN Nikki?
          </p>
          <p style={answer}>
            Contributing to community development and having a paid job.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is usually part of your daily routine?</p>
          <p style={answer}>
            A working day consists of being in the office from 8:30 a.m. to 12:30
            p.m., and from 3:00 p.m. until 6:00 p.m., signing the attendance book,
            cleaning the office if it is your turn and starting the activities
            planned during the week.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Challenges and opportunities of development cooperation
          </h2>
          <p style={question}>
            In your opinion, what approach should international cooperation take to
            foster development?
          </p>
          <p style={answer}>
            Cooperation must take a sustainable development approach. Finding a
            balance between the financial, environmental and social aspects.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            How would you describe the ideal development for Nikki? / What model of
            development do you think the people of Nikki want?
          </p>
          <p style={answer}>
            I believe the people of Nikki want sustainable development, long-term
            development.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Life in Nikki beyond development cooperation
          </h2>
          <p style={question}>
            What do you do when you are off working hours?
          </p>
          <p style={answer}>Nothing, the working hours do not allow anything else.</p>
        </div>

        <div style={interviewSection}>
          <p style={question}>Have you had any role model in your life?</p>
          <p style={answer}>My dear mom.</p>
        </div>

        <Image
          style={image}
          width="100"
          height="100"
          src="/people/yasminatou.jpeg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "foro-voluntariado-benin",
    imageUrl: "/oan-web-foro-nacional-blog-3.jpeg",
    author: "Kader Madougou y traducido por Almudena Vázquez",
    date: "March 25, 2025",
    link: "/news/foro-voluntariado-benin",
    title:
      "OAN takes part in the 2nd National Forum on Volunteering in Benin",
    content: (
      <div style={wrapper}>
        <p>
          From March 17 to 19, 2025, the National Employment Agency (AnpE) held
          the second edition of the National Forum on Volunteering in Bohicon. The
          main objective of this gathering was to strengthen the role of
          volunteering within the socio-professional fabric of Benin.
        </p>

        <p>
          Since 2021, the Beninese government has been driving an ambitious reform
          aimed at improving youth employment and strengthening collaboration among
          the entities working for their future. Within this framework, the AnpE
          coordinates the volunteering programs with the support of the African
          Union and ECOWAS.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-4.jpeg"
          alt="oan-international-foro-nacional-blog-4"
        />

        <p>
          The Bohicon forum was part of this dynamic, highlighting volunteering as
          a key tool for employability and community development. During the event,
          young people were made aware of the opportunities that volunteering
          offers: acquiring practical skills, expanding their professional network,
          improving their employability and, at the same time, contributing to the
          development of their communities.
        </p>

        <p>
          In short, this initiative seeks to promote volunteering as a path to
          professional integration for Beninese youth, strengthening their civic
          commitment and their active participation in the country&apos;s
          socio-economic development.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-5.jpeg"
          alt="oan-international-foro-nacional-blog-5"
        />

        <p>
          It is worth noting that this second National Forum on Volunteering
          brought together 35 participants from 11 of the 12 departments of Benin.
          The attendees discussed key topics for strengthening the National
          Platform of Youth Volunteering and Exchange Organizations (PNOVEJ).
        </p>

        <p>
          The forum provided a valuable opportunity for the sector&apos;s actors to
          share innovative approaches that make it possible to fully integrate
          volunteering into the country&apos;s development and professional
          integration strategies.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-6.jpeg"
          alt="oan-international-foro-nacional-blog-6"
        />

        <p>
          The participation of representatives from almost the entire territory
          —with the sole exception of the Alibori department— is proof of the
          effectiveness of the awareness-raising actions carried out beforehand.
        </p>

        <p>
          The forum was attended by 24 civil society organizations and 2
          international volunteering organizations, among them France Volontaires.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-7.jpeg"
          alt="oan-international-foro-nacional-blog-7"
        />

        <p>
          At the end of the gathering, OAN was chosen, along with other
          organizations, as departmental focal point of the National Platform of
          Youth Volunteering and Exchange Organizations in Benin (PNOVEJ BENÍN).
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-8.jpeg"
          alt="oan-international-foro-nacional-blog-8"
        />

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-9.jpeg"
          alt="oan-international-foro-nacional-blog-9"
        />
      </div>
    ),
  },
  {
    id: "magia-por-benin-2025",
    imageUrl: "/oan-web-magia-por-benin-2025.png",
    author: "Álvaro Pascual",
    date: "March 22, 2025",
    link: "/news/magia-por-benin-2025",
    title:
      "OAN International, through its Nikarit project, present once again at the event organized by Magia por Benin",
    content: (
      <div style={wrapper}>
        <p>
          Magia por Benín is a charity project born in 2010 with the aim of
          supporting the schooling of highly vulnerable children taken in by
          Mensajeros de la Paz in Benin. To raise funds to make that support a
          reality, they hold a charity magic festival in Madrid every year with the
          altruistic participation of magicians from all over the world, so that
          everything raised goes entirely to Benin.
        </p>
        <p>
          In this 15th edition of Magia por Benín, held on March 14, 15 and 16,
          2025, five shows could be enjoyed with the magic of six top-tier
          magicians.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-magia-por-benin-2025-2.png"
          alt="oan-international-magia-por-benin-2025-2"
        />
        <p>
          For years, OAN International has collaborated closely in this event by
          setting up a stand for the sale of and information about the Nikarit
          project, a social entrepreneurship project that seeks to empower women
          shea butter producers in Nikki so that, through the sale of this product,
          they can improve their lives and those of their communities. The shea
          butter is then transformed into cosmetic products that you can buy here
          (nikarit.es), and with this income we help finance the rest of the
          projects.
        </p>
        <p>
          During the three days of the festival, thanks to the volunteer work of 13
          members of OAN International, the project could be made known to the
          nearly one thousand people who passed through the Higher Technical School
          of Industrial Engineers of the Polytechnic University where the event took
          place. A little more than 2500 euros could be raised, which will be
          reinvested in the communities that the women&apos;s cooperatives producing
          the butter are part of.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-magia-por-benin-2025-3.png"
          alt="oan-international-magia-por-benin-2025-3"
        />
      </div>
    ),
  },
  {
    id: "entrevista-a-abdou-waliou",
    imageUrl: "/people/waliou.jpeg",
    author: "Selene Sanchez",
    date: "March 16, 2025",
    link: "/news/entrevista-a-abdou-waliou",
    title: "Interview with Abdou Waliou",
    content: (
      <div style={wrapper}>
        <div style={interviewSection}>
          <h2 style={sectionTitle}>Working with OAN International</h2>
          <p style={question}>
            Can you tell us a little about yourself before you got to know OAN?
          </p>
          <ul style={answerList}>
            <li>Your name: MAMA Abdou Waliou</li>
            <li>Where are you from? From Nikki</li>
            <li>
              What did you do before joining OAN? I was an independent assistant
              consultant at Fi-Agri 4 for the lowland development project, a
              domestic gardener and a mobile veterinarian.
            </li>
            <li>
              What training have you received? I have received training in
              Agricultural Sciences and Techniques.
            </li>
            <li>
              How did you imagine your future back then? I imagined myself being a
              great farmer and livestock breeder.
            </li>
            <li>
              Is there anything else you would like to add? I would also like to
              be a great volleyball player at the international level.
            </li>
          </ul>
        </div>

        <div style={interviewSection}>
          <p style={question}>What is OAN Nikki?</p>
          <p style={answer}>
            It is an international organization based in the commune of Nikki that
            works on community social projects to improve the living conditions of
            disadvantaged communities in the fields of health, social affairs and
            the environment, promoting their overall well-being.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What convinced you to join the OAN Nikki team?
          </p>
          <p style={answer}>
            I wanted to do my bit to contribute to the development of our
            disadvantaged communities.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What is your job at OAN and what has joining the team meant for you?
          </p>
          <p style={answer}>
            At OAN, I am a facilitator on the project to combat malnutrition and
            previously I was a gardening technician. For me, being part of this
            team means working on the fight against child malnutrition in the
            villages where we work.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            What motivates you to keep working with OAN Nikki?
          </p>
          <p style={answer}>
            What motivates me to keep working with OAN is the friendly working
            environment, the team dynamic and its rigor at work.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Challenges and opportunities of development cooperation
          </h2>
          <p style={question}>
            In your opinion, what approach should international cooperation take to
            foster development?
          </p>
          <p style={answer}>
            International cooperation is already making a great effort for the
            development of our communities. However, if it could strengthen its
            actions on the project to combat malnutrition, it would be ideal for it
            to fully and free of charge take on the cases of malnutrition detected
            and referred to the hospital. In addition, if the gardening project were
            resumed, it would be advisable to fence off the areas with metal
            structures and guarantee inexhaustible water sources for the permanent
            irrigation of the crops in the garden.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            How would you describe the ideal development for Nikki? / What model of
            development do you think the people of Nikki want?
          </p>
          <p style={answer}>
            The ideal development for Nikki would be based on the financial autonomy
            of young people through the creation of income-generating activities. I
            believe the development model that the people of Nikki want is
            agronomic development.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Life in Nikki beyond development cooperation
          </h2>
          <p style={question}>
            What do you do when you are off working hours?
          </p>
          <p style={answer}>
            Outside of work, I devote myself to farming, livestock breeding and I
            also run a small stand for transactions and the sale of phone top-ups.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            Have you had any role model in your life? (Who and why?)
          </p>
          <p style={answer}>
            Yes, I have had a role model and an inspiring person in my life:
            NZAMUJO Godfrey. He is the promoter of the Songhaï Center and owns
            renowned farms in West Africa.
          </p>
        </div>

        <Image
          style={image}
          width="100"
          height="100"
          src="/people/waliou.jpeg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "10-aniversario",
    imageUrl: "/oan-web-043.jpg",
    description: "Álvaro Pascual",
    author: "Álvaro Pascual",
    date: "October 26",
    link: "/news/10-aniversario",
    title:
      "We celebrate 10 years of OAN International by bringing together our collaborators throughout the decade",
    content: (
      <div style={wrapper}>
        <p>
          On Saturday, October 26, the OAN International family gathered to
          celebrate the 10 years of our NGO. More than 100 people were able to learn
          about the progress and the journey of a whole decade of exciting projects
          that have made it possible to improve the lives of the inhabitants of
          Nikki.
        </p>

        <p>
          After getting to know the reality of Nikki in 2013, Dani had accumulated
          countless ideas and a strong desire to keep supporting the community, so
          he began looking for partners to accompany him in his goal. On July 21,
          2014, OAN International was officially created with the signing of the
          founding charter by a team of 8 founding members: Daniel, Álvaro, Íñigo,
          Ricardo, Tamar, Brais, Alejandro and Miguel.
        </p>

        <p>
          Ten years later, OAN International has become, in 2024, a well-established
          NGO in which a group of volunteers in Spain already work alongside 10
          colleagues employed in Benin. To date, more than 60 bachelor&apos;s and
          master&apos;s theses have been part of the project, and more than 40,000
          people have been beneficiaries in the past year.
        </p>

        <p>
          The event was a reunion among volunteers from Spain, collaborators,
          professionals from the sector and interested people. In addition, we had
          the chance to connect by video call with our colleagues in Nikki so that,
          first-hand, they could tell us about their experience and their work.
        </p>

        <p>
          Afterwards, we were able to enjoy a space for celebration by sharing
          talks, visiting the photography exhibition, getting to know Sansi Gandó or
          Besangorou through a 360º experience or purchasing Nikarit products at our
          charity stand.
        </p>

        <p>
          This milestone in our journey is a boost to keep moving forward and
          supporting the people of Nikki in the defense of their rights, working on
          food security, guaranteeing access to drinking water, protecting
          women&apos;s rights and preserving the environment.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-043.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "conferencia-anual-de-karite",
    imageUrl: "/oan-web-041.jpg",
    description: "Álvaro Pascual",
    author: "Álvaro Pascual",
    date: "July 21, 2024",
    link: "/news/conferencia-anual-de-karite",
    title: "The annual shea conference is held in Nikki",
    content: (
      <div style={wrapper}>
        <p>
          Under the slogan &quot;Faire du karité un vecteur d&apos;autonomisation
          économique de la femme rurale&quot; (Making shea a vector of economic
          autonomy for rural women), the second edition of the annual conference on
          the shea tree was held in Nikki on June 5, 2024.
        </p>

        <p>
          It featured the participation of authorities and actors from the shea
          sector in Nikki, in particular with the presence of the women who harvest
          the nuts and produce shea butter.
        </p>

        <p>
          The day was opened with a welcome to the participants by Mr. Hafiz DJAOUGA,
          Secretary of OAN NIKKI, followed by welcome words from the President of OAN
          NIKKI, Mr. Abdel-Kader MADOUGOU.
        </p>

        <p>
          Afterwards, Mr. Ganiou SALIFOU, representative of the Town Hall, in his
          speech, welcomed all the guests recalling the great progress at the level
          of the shea sector, presenting the history of the organization and the
          benefits in the commune of Nikki. According to the town hall
          representative, the shea sector is of great importance for women and rural
          households. The day was led by the National Coordinator of the National
          Federation of Producers of Shea Nuts and Butter of Benin (FNPK), Mr. Arnaud
          Viassého AYEDEHIN. During his presentation he highlighted a brief overview
          of the shea sector of Benin and the presentation of the FNPK.
        </p>

        <p>
          The presentations by the different speakers, the exchanges with the
          collaborators, the various scientific and professional communications on
          experiences, the honorary distinctions, etc. were the activities that gave
          a very special flavor to this edition of the Congress. To facilitate the
          participation and integration of all the participants, simultaneous
          translation was provided from French to the local languages (Bariba and
          Fula) spoken by most of the women producers.
        </p>

        <p>
          Next year the third edition will continue in light of this year&apos;s
          success.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-041.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "progidem",
    imageUrl: "/oan-web-040.jpg",
    description: "Álvaro Pascual",
    author: "Álvaro Pascual",
    date: "June 27, 2024",
    link: "/news/progidem",
    title: "Integrated Household Waste Management Project (ProGIDéM)",
    content: (
      <div style={wrapper}>
        <p>
          The integrated household waste management project (ProGIDéM) begins
        </p>

        <p>
          In June 2024, OAN International begins the household waste management
          project to intervene in this public health problem present throughout the
          commune of Nikki, with a particular impact in the urban area. This project
          is being developed in collaboration with the Nikki Town Hall, which has
          asked OAN to carry out this project, providing financial support for it.
        </p>

        <p>
          Despite the numerous efforts made by the administration and other entities
          in the past, the municipality of Nikki still struggles to have a coherent
          strategy for the sustainable and integrated management of its household
          waste. Effective environmental management is needed, especially regarding
          household waste, which constitutes a real basic sanitation problem, by
          designing final landfills to receive the waste. That is why it remains the
          main challenge of the municipal administration. It should be noted that the
          pre-collection operations and the collection of the service fee are
          currently interrupted due to the lack of structures and people involved in
          this process. This situation has led to the appearance of uncontrolled
          improvised dumps that have proliferated throughout the municipality of
          Nikki.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-039.jpg"
          alt=""
        />

        <p>
          Previous experiences in waste management have shown enormous educational
          deficiencies among the population on issues related to waste management, a
          reflection of uncivil acts. It should also be noted that households have
          difficulties paying the municipal fees that would make it possible to
          maintain this service.
        </p>

        <p>
          Faced with this situation, which requires an urgent and definitive
          solution, this project begins between OAN and the Nikki Town Hall with the
          aims of generating an effective waste collection system and raising the
          population&apos;s awareness of the need for a correct use of public spaces.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-038.png"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "consejo-comunal",
    imageUrl: "/oan-web-036.jpg",
    description: "Álvaro Pascual",
    author: "Álvaro Pascual",
    date: "June 25, 2024",
    link: "/news/consejo-comunal",
    title:
      "Communal Council meeting around the food and health sector",
    content: (
      <div style={wrapper}>
        <p>
          On June 18 and 19, a session was held at the Nikki Town Hall on the
          Framework of the Communal Council around the food, health and nutrition
          sector. This session is organized by CASCADE NGO in collaboration with the
          Nikki Town Hall.
        </p>

        <p>
          It is attended by the departmental and municipal managers of CASCADE NGO,
          the Executive Secretary and the Director of Planning of the town hall and
          the different actors involved in the nutrition and food sector in the
          municipality of Nikki, with OAN International once again being invited as an
          entity active in this field.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-034.jpg"
          alt=""
        />

        <p>
          A presentation of the activities of the last three months was carried out
          and the implementation of the recommendations set during the first session
          of 2024 was discussed.
        </p>

        <p>
          During this session, activities were planned for the next quarter in the
          form of new recommendations. A mapping of the structures and NGOs working in
          the municipality is planned to facilitate the synergies of action but also
          to allow the authorities to distinguish between the intervention of the
          actors from different NGOs on municipal territory. A study carried out by
          CASCADE on food taboos and the reasons behind them was also presented to us,
          with the aim of reinforcing the nutritional information and notions of all
          those responsible in the field.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-035.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "pre-mase",
    title:
      "One more step in the PreMase project: the monitoring committees are formed",
    imageUrl: "/oan-web-033.jpg",
    description: "Álvaro Pascual",
    date: "May 1, 2024",
    link: "/news/pre-mase",
    author: "Álvaro Pascual",
    content: (
      <div style={wrapper}>
        <p>
          On April 26, 2024, the training of the members of the monitoring
          committees of the PreMaSe project took place in Nikki.
        </p>

        <p>
          After the success achieved with the intervention in 10 villages during
          phase I and phase II of the PreMase project, which works towards the
          eradication of child malnutrition in the rural areas of the commune of
          Nikki, a new step is taken with the creation of monitoring committees in
          all those villages.
        </p>

        <p>
          A monitoring committee has the function of monitoring child malnutrition
          and promoting healthy eating in its village, playing a crucial role in
          improving the community&apos;s health.
        </p>

        <p>
          Each committee is made up of three people from the population itself,
          chosen for their good rapport with all the neighbors. Their work will be
          based on identifying and referring individual cases of MAM (moderate acute
          malnutrition) and SAM (severe acute malnutrition), and they will also
          promote changes at the community level to improve overall nutritional
          health.
        </p>

        <p>
          Collaboration with the local authorities (relais communautaires), health
          professionals and the community is essential for the success of these
          interventions. These volunteers will receive a motivation fee (1500F) and
          communication costs (1500F), per committee, depending on the number of
          cases.
        </p>

        <p>These are the roles they will carry out:</p>

        <ul>
          <li>
            Identification and registration of malnutrition cases in children from
            6 months to 59 months in collaboration with the relais communautaires,
            health centers and local communities.
          </li>
          <li>Individual assessment and monitoring</li>
          <li>
            Monitoring of health indicators: weight, height, arm circumference and
            food intake, to assess the progress and effectiveness of the
            interventions.
          </li>
          <li>Carrying out periodic assessments of malnourished children.</li>
          <li>
            Establishing individualized monitoring plans adjusted as necessary.
          </li>
          <li>
            Coordination with the OAN Nutrition team to guarantee effective
            treatment and adequate medical monitoring (joint supervision by a health
            worker)
          </li>
          <li>
            Promoting breastfeeding and providing support to breastfeeding mothers.
            (awareness-raising)
          </li>
          <li>
            Counseling and psychosocial support to families, to keep in mind the
            emotional and social factors linked to malnutrition.
          </li>
          <li>
            Encouraging community participation in decision-making related to health
            and nutrition.
          </li>
          <li>
            Social support network: Establishing and strengthening social support
            networks to share resources, information and experiences among families.
          </li>
          <li>
            Monitoring food resources and assessing the availability and
            accessibility of nutritious food in the community.
          </li>
          <li>
            Producing reports to record progress, challenges and recommendations to
            improve the interventions.
          </li>
        </ul>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-033.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: "conferencia-del-karite",
    title: `"Shea Conference in Nikki"`,
    imageUrl: "/oan-web-004.jpg",
    description: "Almudena Vázquez",
    date: "July 30, 2023",
    link: "/news/conferencia-del-karite",
    author: "Almudena Vázquez",
    content: (
      <div style={wrapper}>
        <p>
          The global demand for shea butter in the food and cosmetics industries
          keeps growing, which represents a great opportunity for producing and
          exporting countries. In Benin, very high-quality nuts are produced and
          there is great production potential, still untapped. Even though shea
          represents the country&apos;s third export product, after cotton and
          cashew, several challenges remain to be met in order to get Beninese shea
          recognized worldwide, as it represents barely 2% of world production
          according to FAO statistics.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-004.jpg"
          alt=""
        />

        <p>
          Under the slogan &quot;Sowing shea to cultivate the future&quot;, Nikki
          hosted this past July 6 the first edition of the Shea Conference, an event
          organized by OAN Nikki in which representatives of the main actors of the
          shea sector gathered, as well as the authorities of this region of northern
          Benin, with the aim of sharing the state of shea production at the national
          level and the different problems that arise, as well as learning about the
          different actions being carried out to protect the shea tree and improve
          production conditions and, finally, to propose new solutions.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-005.jpg"
          alt=""
        />

        <p>
          The conference began with the presentation by the representative of the
          Nikki town hall, Kora Sanni K. Nouhoun, and then gave way to Kotchoni
          Razack (professor in agro-economics), Ayedehin Viassého Arnaud (coordinator
          of FMPK-National Federation of Shea Producers of Benin) and Boddi Z.
          Soumaïla (representative of the Citizen Participation Unit). Finally, there
          was the intervention of Zime Cyriaque (ATDA4/Nikki) together with the women
          who process shea butter in the municipality of Nikki.
        </p>

        <p>
          During the different speeches, the immense value and potential that shea
          has for the economic and social development of Benin was highlighted. Less
          common uses of shea that represent a great opportunity were also mentioned.
          For example, the waste and the shells of the nuts can be used to make
          charcoal and waxes for the cosmetics industry, and the shea pulp to create
          an alcoholic beverage.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-006.jpg"
          alt=""
        />

        <p>
          In most of the presentations, special emphasis was placed on the
          importance of preserving the shea tree, which is at risk of extinction
          despite the measures taken by the government. This tree is only present in
          21 countries, all of them sub-Saharan. In Benin, it only grows in the north
          of the country, which makes the production of the butter a unique
          opportunity for growth for the women of rural areas.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-010.jpg"
          alt=""
        />

        <p>
          On the other hand, the various problems faced by the women producers of the
          region were presented, among which are the lack of adequate equipment to
          improve yield, the need for training and learning for the women of the more
          rural areas, the absence of internal organization of the producer groups or
          the low capacity for self-financing.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-011.jpg"
          alt=""
        />

        <p>
          During the presentation by Ayedehin Viassého Arnaud, the work of the
          National Federation of Shea Producers of Benin, or FNPK, was presented, an
          organization created in 2020 with the aim of defending the interests of the
          women producers and protecting the shea tree. It covers 903 villages and
          works with 70,000 women, but all the shea producers of the country can
          access it.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-012.jpg"
          alt=""
        />

        <p>
          Measures are currently being taken to improve the situation of the women
          producers and preserve the shea tree, such as financing projects with
          microcredits or the planting of new trees. To close the conference, it was
          proposed to continue along these paths and work on new solutions. Among the
          most interesting are the proposals to plant, monitor, protect and maintain
          young shea plants, make use of assisted natural regeneration, create local
          management agreements, or work on raising society&apos;s awareness through
          means such as the radio.
        </p>
      </div>
    ),
  },
];
