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

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "entrevista-a-yasminatou-imorou",
    imageUrl: "/people/yasminatou.jpeg",
    author: "Selene Sanchez",
    date: "21 de abril 2025",
    link: "/news/entrevista-a-yasminatou-imorou",
    title: "Entrevista a Yasminatou Imorou",
    content: (
      <div style={wrapper}>
        <div style={interviewSection}>
          <h2 style={sectionTitle}>Trabajar con OAN International</h2>
          <p style={question}>
            ¿Puedes hablarnos un poco de ti antes de conocer OAN?
          </p>
          <ul style={answerList}>
            <li>Tu nombre: Yasminatou Imorou</li>
            <li>¿De dónde eres? De Nikki.</li>
            <li>
              ¿A qué te dedicabas antes de unirte a OAN? Trabajé como
              facilitadora en temas de agua, saneamiento e higiene (WASH) en
              Pèrèrè.
            </li>
            <li>
              ¿Qué formación has recibido? Formación Hidráulica y Saneamiento.
            </li>
            <li>
              ¿Cómo imaginabas tu futuro en aquel momento? Me imaginaba con
              mayor estabilidad financiera para realizar mis proyectos.
            </li>
          </ul>
        </div>

        <div style={interviewSection}>
          <p style={question}>¿Qué es OAN Nikki?</p>
          <p style={answer}>
            OAN Nikki (Objetivo Analizar Nikki) es una organización que ayuda y
            asiste a las comunidades para su empoderamiento y desarrollo.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Qué te convenció para unirte al equipo de OAN Nikki?
          </p>
          <p style={answer}>
            El deseo de contribuir al desarrollo de mi comunidad.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Cuál es tu trabajo en OAN y qué ha supuesto para ti unirte al
            equipo?
          </p>
          <p style={answer}>Estoy a cargo del proyecto ASEP-AGUAPP.</p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Qué te motiva a seguir trabajando con OAN Nikki?
          </p>
          <p style={answer}>
            Contribuir al desarrollo comunitario y tener un trabajo remunerado.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>¿Qué suele formar parte de tu rutina diaria?</p>
          <p style={answer}>
            Un día laboral consiste en estar en la oficina de 8:30h a 12:30h, y
            a partir de las 15:00h hasta las 18:00h, registrarse en el libro de
            asistencia, limpiar el asiento si es tu turno y comenzar las
            actividades planeadas durante la semana.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Desafíos y oportunidades de la cooperación para el desarrollo
          </h2>
          <p style={question}>
            En tu opinión, ¿qué enfoque debería adoptar la cooperación
            internacional para fomentar el desarrollo?
          </p>
          <p style={answer}>
            La cooperación debe adoptar un enfoque de desarrollo sostenible.
            Encontrar un equilibrio entre los aspectos financieros, ambientales
            y sociales.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Cómo describirías el desarrollo ideal para Nikki? / ¿Qué modelo de
            desarrollo crees que quiere la población de Nikki?
          </p>
          <p style={answer}>
            Creo que la población de Nikki desea un desarrollo sostenible, un
            desarrollo a largo plazo.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            La vida en Nikki más allá de la cooperación para el desarrollo
          </h2>
          <p style={question}>
            ¿A qué te dedicas cuando no estás en horario laboral?
          </p>
          <p style={answer}>Nada, el horario laboral no permite nada más.</p>
        </div>

        <div style={interviewSection}>
          <p style={question}>¿Has tenido algún referente en tu vida?</p>
          <p style={answer}>Mi querida mamá.</p>
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
    date: "25 de marzo 2025",
    link: "/news/foro-voluntariado-benin",
    title:
      "OAN participa en el II Foro Nacional sobre el Voluntariado en Benín",
    content: (
      <div style={wrapper}>
        <p>
          Del 17 al 19 de marzo de 2025, la Agencia Nacional para el Empleo
          (AnpE) celebró en Bohicon la segunda edición del Foro Nacional sobre
          el Voluntariado. Este encuentro tuvo como principal objetivo reforzar
          el papel del voluntariado dentro del tejido socio-profesional de
          Benín.
        </p>

        <p>
          Desde 2021, el gobierno beninés impulsa una ambiciosa reforma
          destinada a mejorar la inserción laboral de la juventud y a fortalecer
          la colaboración entre las entidades que trabajan por su futuro. En
          este marco, la AnpE coordina los programas de voluntariado con el
          apoyo de la Unión Africana y la CEDEAO.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-4.jpeg"
          alt="oan-international-foro-nacional-blog-4"
        />

        <p>
          El foro de Bohicon formó parte de esta dinámica, destacando el
          voluntariado como una herramienta clave para la empleabilidad y el
          desarrollo comunitario. Durante el evento, se sensibilizó a jóvenes
          sobre las oportunidades que ofrece el voluntariado: adquirir
          competencias prácticas, ampliar su red profesional, mejorar su
          empleabilidad y, al mismo tiempo, contribuir al desarrollo de sus
          comunidades.
        </p>

        <p>
          En definitiva, esta iniciativa busca promover el voluntariado como una
          vía de inserción profesional para la juventud beninesa, reforzando su
          compromiso ciudadano y su participación activa en el desarrollo
          socioeconómico del país.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-5.jpeg"
          alt="oan-international-foro-nacional-blog-5"
        />

        <p>
          Cabe destacar que este segundo Foro Nacional sobre el Voluntariado
          reunió a 35 participantes provenientes de 11 de los 12 departamentos
          de Benín. Los asistentes debatieron sobre temáticas clave para el
          fortalecimiento de la Plataforma Nacional de Organizaciones de
          Voluntariado e Intercambio de Jóvenes (PNOVEJ).
        </p>

        <p>
          El foro brindó una oportunidad valiosa para que los actores del sector
          compartieran enfoques innovadores que permitan integrar plenamente el
          voluntariado en las estrategias de desarrollo e inserción profesional
          del país.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-6.jpeg"
          alt="oan-international-foro-nacional-blog-6"
        />

        <p>
          La participación de representantes de casi todo el territorio —con la
          única excepción del departamento de Alibori— es muestra de la eficacia
          de las acciones de sensibilización realizadas previamente.
        </p>

        <p>
          En el foro participaron 24 organizaciones de la sociedad civil y 2
          organizaciones internacionales de voluntariado, entre ellas France
          Volontaires.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-foro-nacional-blog-7.jpeg"
          alt="oan-international-foro-nacional-blog-7"
        />

        <p>
          Al término del encuentro, OAN fue elegida, junto a otras
          organizaciones, como punto focal departamental de la Plataforma
          Nacional de Organizaciones de Voluntariado e Intercambio de Jóvenes en
          Benín (PNOVEJ BENÍN).
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
    date: "22 de marzo 2025",
    link: "/news/magia-por-benin-2025",
    title:
      "OAN International de la mano de su proyecto Nikarit, presente un año más en el evento organizado por Magia por Benin",
    content: (
      <div style={wrapper}>
        <p>
          Magia por Benín es un proyecto solidario que nació en 2010 con el
          objetivo de apoyar a la escolarización de niños en situación de alta
          vulnerabilidad acogidos por Mensajeros de la Paz en Benín. Para
          recaudar fondos para materializar ese apoyo, celebran anualmente un
          festival de magia benéfico en Madrid con la participación altruista de
          magos de todas partes del mundo para que todo lo recaudado llegue
          íntegramente a Benín.
        </p>
        <p>
          En esta 15ª edición de Magia por Benín celebrada los días 14, 15 y 16
          de marzo de 2025 se ha podido disfrutar de 5 espectáculos con la magia
          de seis magos de primera línea
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-magia-por-benin-2025-2.png"
          alt="oan-international-magia-por-benin-2025-2"
        />
        <p>
          Desde hace año, OAN International colabora estrechamente en este
          evento con la colocación de un puesto de venta e información sobre el
          proyecto de Nikarit, proyecto de emprendimiento social que busca
          empoderar a mujeres productoras de manteca de karité de Nikki para
          que, a través de la venta de este producto, puedan mejorar su vida y
          la de sus comunidades. La manteca de karité se transforma después en
          productos cosméticos que puedes comprar aquí (nikarit.es) y con estos
          ingresos apoyamos la financiación del resto de proyectos.
        </p>
        <p>
          Durante los tres días del festival, gracias al trabajo voluntario de
          13 miembros de OAN International se ha podido dar a conocer el
          proyecto al casi millar de personas que han pasado por la Escuela
          Técnica Superior de Ingenieros Industriales de la Universidad
          Politécnica donde ha tenido lugar el evento. Se han podido recaudar
          algo más de 2500 euros que se reinvertirán en las comunidades de las
          que forman parte las cooperativas de mujeres que producen la manteca.
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
    date: "16 de marzo 2025",
    link: "/news/entrevista-a-abdou-waliou",
    title: "Entrevista a Abdou Waliou",
    content: (
      <div style={wrapper}>
        <div style={interviewSection}>
          <h2 style={sectionTitle}>Trabajar con OAN International</h2>
          <p style={question}>
            ¿Puedes hablarnos un poco de ti antes de conocer OAN?
          </p>
          <ul style={answerList}>
            <li>Tu nombre: MAMA Abdou Waliou</li>
            <li>¿De dónde eres? De Nikki</li>
            <li>
              ¿A qué te dedicabas antes de unirte a OAN? Era asistente consultor
              independiente en Fi-Agri 4 para el proyecto de acondicionamiento
              de tierras bajas, jardinero doméstico y veterinario ambulante.
            </li>
            <li>
              ¿Qué formación has recibido? He recibido formación en Ciencias y
              Técnicas Agrícolas.
            </li>
            <li>
              ¿Cómo imaginabas tu futuro en aquel momento? Me imaginaba siendo
              un gran agricultor y ganadero.
            </li>
            <li>
              ¿Hay algo más que te gustaría añadir? También me gustaría ser un
              gran jugador de voleibol a nivel internacional.
            </li>
          </ul>
        </div>

        <div style={interviewSection}>
          <p style={question}>¿Qué es OAN Nikki?</p>
          <p style={answer}>
            Es una organización internacional con sede en la comuna de Nikki que
            trabaja en proyectos sociales comunitarios para mejorar las
            condiciones de vida de las comunidades desfavorecidas en los ámbitos
            de la salud, lo social y el medio ambiente, promoviendo su bienestar
            integral.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Qué te convenció para unirte al equipo de OAN Nikki?
          </p>
          <p style={answer}>
            Quería aportar mi granito de arena para contribuir al desarrollo de
            nuestras comunidades desfavorecidas.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Cuál es tu trabajo en OAN y qué ha supuesto para ti unirte al
            equipo?
          </p>
          <p style={answer}>
            En OAN, soy animador del proyecto de lucha contra la malnutrición y
            anteriormente fui técnico en jardinería. Para mí, formar parte de
            este equipo significa trabajar en la lucha contra la malnutrición
            infantil en las aldeas donde intervenimos.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Qué te motiva a seguir trabajando con OAN Nikki?
          </p>
          <p style={answer}>
            Lo que me motiva a seguir trabajando con OAN es el ambiente de
            trabajo amigable, la dinámica del equipo y su rigor en el trabajo.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            Desafíos y oportunidades de la cooperación para el desarrollo
          </h2>
          <p style={question}>
            En tu opinión, ¿qué enfoque debería adoptar la cooperación
            internacional para fomentar el desarrollo?
          </p>
          <p style={answer}>
            La cooperación internacional ya está haciendo un gran esfuerzo para
            el desarrollo de nuestras comunidades. Sin embargo, si pudiera
            reforzar sus acciones en el proyecto de lucha contra la
            malnutrición, sería ideal que asumiera completamente y de manera
            gratuita los casos de malnutrición detectados y referidos al
            hospital. Además, si se retomara el proyecto de jardinería, sería
            conveniente cercar los espacios con estructuras metálicas y
            garantizar fuentes de agua inagotables para el riego permanente de
            los cultivos en el jardín.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Cómo describirías el desarrollo ideal para Nikki? / ¿Qué modelo de
            desarrollo crees que quiere la población de Nikki?
          </p>
          <p style={answer}>
            El desarrollo ideal para Nikki estaría basado en la autonomía
            financiera de los jóvenes a través de la creación de actividades
            generadoras de ingresos. Creo que el modelo de desarrollo que la
            población de Nikki desea es el desarrollo agronómico.
          </p>
        </div>

        <div style={interviewSection}>
          <h2 style={sectionTitle}>
            La vida en Nikki más allá de la cooperación para el desarrollo
          </h2>
          <p style={question}>
            ¿A qué te dedicas cuando no estás en horario laboral?
          </p>
          <p style={answer}>
            Fuera del trabajo, me dedico a la agricultura, la ganadería y
            también gestiono un pequeño puesto de transacciones y venta de
            recargas telefónicas.
          </p>
        </div>

        <div style={interviewSection}>
          <p style={question}>
            ¿Has tenido algún referente en tu vida? (¿Quién y por qué?)
          </p>
          <p style={answer}>
            Sí, he tenido un modelo y una persona inspiradora en mi vida:
            NZAMUJO Godfrey. Es el promotor del Centro Songhaï y posee granjas
            de renombre en África Occidental.
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
    date: "26 de octubre",
    link: "/news/10-aniversario",
    title:
      "Celebramos los 10 años de OAN International reuniendo a nuestros colaboradores a lo largo de la década",
    content: (
      <div style={wrapper}>
        <p>
          El sábado 26 de octubre, la familia OAN International nos reunimos
          para celebrar los 10 años de nuestra ONGD. Más de 100 personas pudimos
          conocer los avances y el recorrido de toda una década de proyectos
          emocionantes que han permitido mejorar la vida de los habitantes de
          Nikki.
        </p>

        <p>
          Tras conocer la realidad de Nikki en 2013, Dani había acumulado
          infinidad de ideas y ganas de seguir apoyando a la comunidad, así que
          comenzó a buscar cómplices que le acompañasen en su objetivo. El 21 de
          julio de 2014, OAN International se creó oficialmente con la firma del
          acta fundacional por un equipo de 8 miembros fundadores: Daniel,
          Álvaro, Íñigo, Ricardo, Tamar, Brais, Alejandro y Miguel.
        </p>

        <p>
          Diez años más tarde, OAN International se ha convertido en 2024 en una
          ONGD consolidada en la que ya trabajan un grupo de voluntarios en
          España junto a 10 compañeros contratados en Benín. Hasta hoy, más de
          60 trabajos de fin de grado y fin de máster han formado parte del
          proyecto, y más de 40.000 personas han sido beneficiarias en el último
          año.
        </p>

        <p>
          El evento constituyó el reencuentro entre voluntarios de España,
          colaboradores, profesionales del sector e interesados. Además, tuvimos
          ocasión de conectar por videollamada con los compañeros de Nikki para
          que, en primera persona, nos contaran su experiencia y su trabajo.
        </p>

        <p>
          Después, pudimos disfrutar de un espacio de celebración compartiendo
          charlas, visitando la exposición fotográfica, conociendo Sansi Gandó o
          Besangorou a través de una experiencia 360º o adquiriendo productos
          Nikarit en nuestro stand solidario.
        </p>

        <p>
          Este hito en nuestra trayectoria supone un impulso para seguir
          avanzando y acompañando a la población de Nikki en la defensa de sus
          derechos, trabajando en seguridad alimentaria, garantizando el acceso
          a agua potable, la protección de los derechos de la mujer y la
          preservación del medioambiente.
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
    date: "21 julio 2024",
    link: "/news/conferencia-anual-de-karite",
    title: "Se celebra la conferencia anual de karité en Nikki",
    content: (
      <div style={wrapper}>
        <p>
          Con el lema &quot;Faire du karité un vecteur d&apos;autonomisation
          économique de la femme rurale&quot; (Hacer del karité un vector de
          autonomía económica de la mujer rural) se ha celebrado en Nikki
          segunda edición de la conferencia anual sobre el árbol del karité
          durante el día 5 de junio de 2024.
        </p>

        <p>
          En la misma se contó con la participación autoridades y actores del
          sector del karité en Nikki, en particular con la presencia de las
          mujeres recolectoras de nueces y productoras de manteca de karité.
        </p>

        <p>
          Se inauguró la jornada con la bienvenida a los participantes a cargo
          de el Sr. Hafiz DJAOUGA, Secretario de OAN NIKKI, seguido de palabras
          de bienvenida del Presidente OAN NIKKI, Sr. Abdel-Kader MADOUGOU.
        </p>

        <p>
          Posteriormente, el Sr. Ganiou SALIFOU, representante del Ayuntamiento,
          en su discurso, dio la bienvenida todos los invitados recordando los
          grandes avances a nivel del sector del karité, presentando la historia
          de la organización y los beneficios en la comuna de Nikki. Según el
          representante del ayuntamiento, el sector del karité es de gran
          importancia para las mujeres y los hogares rurales La jornada estuvo
          encabezada por el Coordinador Nacional de la Federación Nacional de
          Productores de Nueces y Manteca de Karité de Benin (FNPK) Sr. Arnaud
          Viassého AYEDEHIN. Durante su presentación destacó una breve
          presentación del sector del karité de Benin y la presentación del
          FNPK.
        </p>

        <p>
          Las presentaciones de los diferentes ponentes, los intercambios con
          los colaboradores, las diversas comunicaciones científicas y
          profesionales sobre experiencias, las distinciones honoríficas, etc.
          fueron las actividades que dieron un sabor muy especial a esta edición
          del Congreso. Para facilitar la participación e integración de todos
          los participantes, se realizó traducción simultánea del francés a los
          idiomas locales (bariba y peulh) hablados por la mayoría de las
          mujeres productoras.
        </p>

        <p>
          El año próximo se continuará con la tercera edición a la luz del éxito
          de este año.
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
    date: "27 junio 2024",
    link: "/news/progidem",
    title: "Proyecto de gestión integral de desechos domésticos (ProGIDéM)",
    content: (
      <div style={wrapper}>
        <p>
          Se inicia el proyecto de gestión integral de desechos domésticos
          (ProGIDéM)
        </p>

        <p>
          En el mes de junio de 2024, OAN International inicia el proyecto de
          gestión de residuos domésticos para intervenir en esta problemática de
          salud pública presente en toda la comuna de Nikki, con especial
          incidencia en el área urbana. Este proyecto se está desarrollando en
          colaboración con el Ayuntamiento de Nikki quien ha solicitado a OAN la
          ejecución de este proyecto dándonos para ello apoyo financiero.
        </p>

        <p>
          A pesar de los numerosos esfuerzos realizados por la administración y
          otras entidades en el pasado, el municipio de Nikki lucha aún por
          tener una estrategia coherente para la gestión sostenible e integrada
          de sus residuos domésticos. Se hace precisa una gestión medioambiental
          eficaz, especialmente en lo relativo a los residuos domésticos que
          constituyen un problema real de saneamiento básico, diseñando
          vertederos finales para la recepción de los residuos. Es por ello que
          sigue siendo el principal reto de la administración municipal. Cabe
          señalar que las operaciones de precolección y cobro del servicio se
          encuentran actualmente interrumpidas debido a la inexistencia de
          estructuras y personas involucradas en este proceso. Esta situación ha
          devenido en la aparición de vertederos improvisados descontrolados que
          han proliferado por todo el municipio de Nikki.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-039.jpg"
          alt=""
        />

        <p>
          Las anteriores experiencias en gestión de residuos han demostrado
          enormes deficiencias educativas entre la población en cuestiones
          relacionadas con la gestión de residuos, reflejo de actos incívicos.
          También hay que señalar que los hogares tienen dificultades para pagar
          las tasas municipales que permitirían mantener este servicio.
        </p>

        <p>
          Ante esta situación, que precisa de una solución urgente y definitiva,
          se inicia este proyecto entre OAN y el Ayuntamiento de Nikki con los
          objetivos de generar un sistema eficaz de recogida de residuos y
          sensibilizar a la población en la necesidad de una correcta de los
          espacios públicos.
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
    date: "25 junio 2024",
    link: "/news/consejo-comunal",
    title:
      "Reunión del Consejo Comunal en torno al sector de alimentación y salud",
    content: (
      <div style={wrapper}>
        <p>
          Los días 18 y 19 de junio se llevó a cabo una sesión en el
          Ayuntamiento de Nikki sobre el Marco del Consejo Comunalen torno al
          sector de alimentación, salud y nutrición. Esta sesión está organizada
          por CASCADE ONG en colaboración con el Ayuntamiento de Nikki.
        </p>

        <p>
          En ella participan los gerentes departamentales y municipales de
          CASCADE ONG, el Secretario Ejecutivo y el Director de Planificación
          del ayuntamiento y los distintos actores que intervienen en el sector
          nutricional y alimentario en el municipio de Nikki, siendo OAN
          International invitada una vez más como entidad con acción en este
          ámbito.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-034.jpg"
          alt=""
        />

        <p>
          Se llevó a cabo una presentación de las actividades de los últimos
          tres meses y se debatió la ejecución de las recomendaciones fijadas
          durante la primera sesión del año 2024.
        </p>

        <p>
          Durante esta sesión se planificaron actividades para el próximo
          trimestre en forma de nuevas recomendaciones. Está previsto un mapeo
          de las estructuras y ONGs que intervienen en el municipio para
          facilitar las sinergias de acción pero también para permitir a las
          autoridades distinguir entre la intervención de los actores de
          diferentes ONG en el terreno municipal. También se nos presentó un
          estudio realizado por CASCADE sobre las prohibiciones alimentarias y
          las razones que de ellas se derivan, con el fin de reforzar la
          información y nociones nutricionales de todos los responsables en el
          campo.
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
      "Un paso más en el proyecto PreMase, se conforman los comités de seguimiento",
    imageUrl: "/oan-web-033.jpg",
    description: "Álvaro Pascual",
    date: "1 mayo 2024",
    link: "/news/pre-mase",
    author: "Álvaro Pascual",
    content: (
      <div style={wrapper}>
        <p>
          El 26 de abril de 2024 tuvo lugar en Nikki la formación de los
          miembros de los comités de seguimiento del proyecto PreMaSe.
        </p>

        <p>
          Tras el éxito logrado con la intervención en 10 pueblos durante las
          fase I y fase II del proyecto PreMase que trabaja para la erradicación
          de la malnutrición infantil en las zonas rurales de la comuna de
          Nikki, se da un nuevo paso con la creación de comités de seguimiento
          en todos esos pueblos.
        </p>

        <p>
          Un comité de seguimiento tiene como función monitorear la desnutrición
          infantil y promover una alimentación saludable en su pueblo,
          desempeñando un papel crucial en la mejora de la salud de la
          comunidad.
        </p>

        <p>
          Cada comité está compuesto por tres personas de la propia población,
          elegidas por su buen entendimiento con todos los vecinos. Su trabajo
          se basará en identificar y derivar los casos individuales de MAM
          (malnutrición aguda moderada) y MAS (malnutrición aguda severa), y
          también promoverán cambios a nivel comunitario para mejorar la salud
          nutricional general.
        </p>

        <p>
          La colaboración con las autoridades locales (relais comunitaires), los
          profesionales de la salud y la comunidad es esencial para el éxito de
          estas intervenciones. Estos voluntarios recibirán honorarios de
          motivación (1500F) y costos de comunicación (1500F), por comité,
          dependiendo del número de casos.
        </p>

        <p>Estos son los roles que desempeñarán:</p>

        <ul>
          <li>
            Identificación y registro de casos de desnutrición en niños de 6
            meses a 59 meses en colaboración con los relais comunitaires,
            centros de salud y comunidades locales.
          </li>
          <li>Evaluación y seguimiento individual</li>
          <li>
            Seguimiento de indicadores de salud: peso, talla, circunferencia del
            brazo e ingesta de alimentos, para evaluar el progreso y la eficacia
            de las intervenciones.
          </li>
          <li>Realizar evaluaciones periódicas de los niños desnutridos.</li>
          <li>
            Establecer planes de seguimiento individualizados y ajustados según
            sea necesario.
          </li>
          <li>
            Coordinación con el equipo de Nutrición del OAN para garantizar un
            tratamiento eficaz y un seguimiento médico adecuado (supervisión
            conjunta de un trabajador sanitario)
          </li>
          <li>
            Promover la lactancia materna y brindar apoyo a las madres
            lactantes. (sensibilización)
          </li>
          <li>
            Asesoramiento y apoyo psicosocial a las familias, para recordar los
            factores emocionales y sociales vinculados a la desnutrición.
          </li>
          <li>
            Fomentar la participación comunitaria en la toma de decisiones
            relacionadas con la salud y la nutrición.
          </li>
          <li>
            Red de apoyo social: Establecer y fortalecer redes de apoyo social
            para compartir recursos, información y experiencias entre familias.
          </li>
          <li>
            Monitorear los recursos alimentarios y evaluar la disponibilidad y
            accesibilidad de alimentos nutritivos en la comunidad.
          </li>
          <li>
            Realización de informes para registrar avances, desafíos y
            recomendaciones para mejorar las intervenciones.
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
    title: `"Conferencia del Karité en Nikki"`,
    imageUrl: "/oan-web-004.jpg",
    description: "Almudena Vázquez",
    date: "30 julio 2023",
    link: "/news/conferencia-del-karite",
    author: "Almudena Vázquez",
    content: (
      <div style={wrapper}>
        <p>
          La demanda mundial de manteca de karité en las industrias alimentaria
          y cosmética no deja de crecer, lo que supone una gran oportunidad para
          los países productores y exportadores. En Benín se producen nueces de
          muy alta calidad y existe un gran potencial de producción, todavía sin
          explotar. A pesar de que el karité representa el tercer producto de
          exportación del país, después del algodón y el marañón, quedan varios
          desafíos por cumplir para conseguir que el karité beninés sea
          reconocido a nivel mundial, pues representa apenas el 2% de la
          producción mundial según estadísticas de la FAO.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-004.jpg"
          alt=""
        />

        <p>
          Bajo el lema `&quot;`Sembrando karité para cultivar el
          futuro\`&quot;`, Nikki acogió este pasado 6 de julio la primera
          edición de la Conferencia del Karité, un evento organizado por OAN
          Nikki en el que se reunieron representantes de los principales actores
          del sector del karité, así como las autoridades de esta región del
          norte de Benín, con el objetivo de poner en común el estado de la
          producción del karité a nivel nacional y los diferentes problemas que
          aparecen, así como conocer las diferentes acciones que se están
          llevando a cabo para proteger el árbol de karité y mejorar las
          condiciones de producción y por último proponer nuevas soluciones.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-005.jpg"
          alt=""
        />

        <p>
          La conferencia comenzó con la ponencia del representante del
          ayuntamiento de Nikki, Kora Sanni K. Nouhoun, para después dar paso a
          Kotchoni Razack (profesor en agroeconomía), Ayedehin Viassého Arnaud
          (coordinador de FMPK-Federación Nacional de Productoras de Karité de
          Benín) y Boddi Z. Soumaïla (representante de la Unidad de
          Participación Ciudadana). Por último, tuvo lugar la intervención de
          Zime Cyriaque (ATDA4/Nikki) junto a las mujeres procesadoras de
          manteca de karité en el municipio de Nikki.
        </p>

        <p>
          Durante los diferentes discursos, se destacó el grandísimo valor y
          potencial que tiene el karité para el desarrollo económico y social de
          Benín. Además se comentaron usos del karité menos comunes y que
          suponen una gran oportunidad. Por ejemplo, los desechos y las cáscaras
          de las nueces pueden emplearse para hacer carbón vegetal y para ceras
          en la industria cosmética y la pulpa de karité para crear una bebida
          alcohólica.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-006.jpg"
          alt=""
        />

        <p>
          En la mayoría de las ponencias se hizo especial hincapié en la
          importancia de preservar el árbol de karité, que se encuentra en vías
          de extinción a pesar de las medidas tomadas por el gobierno. Este
          árbol sólo está presente en 21 países, todos ellos subsaharianos. En
          Benín, sólo crece en el norte del país, lo que hace que la producción
          de la manteca sea una oportunidad única de crecimiento para las
          mujeres de las áreas rurales.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-010.jpg"
          alt=""
        />

        <p>
          Por otra parte, se expusieron los diversos problemas que enfrentan las
          mujeres productoras de la región, entre los que están la falta de
          equipos adecuados para mejorar el rendimiento, la necesidad de
          formación y aprendizaje de las mujeres de las zonas más rurales, la
          ausencia de organización interna de los grupos de productoras o la
          baja capacidad de autofinanciamiento.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-011.jpg"
          alt=""
        />

        <p>
          Durante la ponencia de Ayedehin Viassého Arnaud, se expuso el trabajo
          de la Federación Nacional de Productoras de Karité de Benín o FNPK,
          organización creada en 2020 con el objetivo de defender los intereses
          de las mujeres productoras y proteger el árbol de karité. Abarca 903
          aldeas y trabaja con 70.000 mujeres, pero todas las productoras de
          karité del país pueden acceder a ella.
        </p>

        <Image
          style={image}
          width="300"
          height="300"
          src="/oan-web-012.jpg"
          alt=""
        />

        <p>
          Actualmente se están tomando medidas para mejorar la situación de las
          mujeres productoras y preservar el árbol de karité, como proyectos de
          financiación con microcréditos o plantación de nuevos árboles. Para
          finalizar la conferencia se propuso continuar por estas vías y
          trabajar en nuevas soluciones. Entre las más interesantes se
          encuentran las propuestas de plantar, monitorear, proteger y mantener
          las plantas jóvenes de karité, hacer uso de la regeneración natural
          asistida, crear acuerdos de gestión locales, o trabajar en la
          sensibilización de la sociedad por medios como la radio.
        </p>
      </div>
    ),
  },
];
