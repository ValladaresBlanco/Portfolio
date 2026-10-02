/* ============================================================
   TU CONTENIDO: edita SOLO este archivo.
   Cada texto tiene versión en español (es) e inglés (en).
   ============================================================ */

import type { Profile, About, Project, TimelineItem, Certification } from "./types";

export const profile = {
  name: "Jorge Andrés",
  lastName: "Valladares",
  initials: "JV", // logo arriba a la izquierda

  role: {
    es: "Ingeniero de Computación",
    en: "Computer Engineer",
  },

  tagline: {
    es: "Desarrollo software con intención y obsesión por la calidad.",
    en: "I build software with intention and an obsession for quality.",
  },

  email: "javalladablanco@gmail.com",
  location: { es: "San Carlos, Costa Rica", en: "San Carlos, Costa Rica" },
  socials: [
    { label: "GitHub", url: "https://github.com/ValladaresBlanco" },
    { label: "LinkedIn", url: "https://linkedin.com/in/valladaresjorge" },
  ],

  // Tu CV: ya está copiado en public/CV.pdf
  cvUrl: "/CV.pdf",

  // Foto de perfil: ponla en public/ (ej: "/perfil.jpg"), o deja "" para el marco vacío
  photo: "/about-pic.jpg",
} satisfies Profile;

export const about = {
  paragraphs: {
    es: [
      "Soy ingeniero en computación y desarrollador de software con alrededor de un año de experiencia profesional. Me apasiona desarrollar software y testearlo, disfruto convertir ideas en aplicaciones que funcionen bien.",
      "He desarrollado desde servicios de facturación electrónica para empresas de Costa Rica hasta plataformas multiempresa seguras y escalables. Mi base en calidad y pruebas de software me ayuda a que todo lo que construyo sea confiable y esté bien probado. Soy graduado en Ingeniería en Computación del TEC.",
    ],
    en: [
      "I'm a computer engineer and software developer with about a year of professional experience. I'm passionate about developing software and enjoy turning ideas into applications that work well.",
      "I've built everything from electronic-invoicing services for Costa Rica companies to secure, scalable multi-company platforms. My background in software quality and testing helps me make sure everything I build is reliable and well tested. I hold a Computer Engineering degree from TEC.",
    ],
  },

  // Motivación y objetivos
  motivation: {
    title: { es: "Motivación y objetivos", en: "Motivation & goals" },
    text: {
      es: "Mi objetivo es desarrollar software confiable y bien hecho: aplicaciones e integraciones que resuelvan problemas reales y aporten valor. Me mueve la calidad, la automatización de procesos y crear sistemas en los que se pueda confiar.",
      en: "My goal is to develop reliable, well-crafted software: applications and integrations that solve real problems and add value. I'm driven by quality, process automation and creating systems people can trust.",
    },
  },

  // Estadísticas (edita los números libremente)
  stats: [
    { value: "6+", label: { es: "Años programando", en: "Years coding" } },
    { value: "1+", label: { es: "Año de experiencia", en: "Year of experience" } },
    { value: "20+", label: { es: "Proyectos creados", en: "Projects Built" } },
    { value: "20+", label: { es: "Tecnologías", en: "Technologies" } },
  ],

  // Aprendiendo ahora
  learning: {
    title: { es: "Aprendiendo ahora", en: "Currently learning" },
    items: {
      es: ["Ciberseguridad", "Análisis de datos", "Arquitectura de software", "System Design"],
      en: ["Cybersecurity", "Data Analysis", "Software Architecture", "System Design"],
    },
  },

  // Áreas de interés
  interests: {
    title: { es: "Áreas de interés", en: "Areas of interest" },
    subtitle: { es: "Lo que impulsa mi pasión por la tecnología", en: "What drives my passion for technology" },
    items: {
      es: ["Desarrollo de software", "Automatización & Testing", "Sistemas escalables", "Nuevas tecnologías", "Aprendizaje continuo"],
      en: ["Software development", "Automation & Testing", "Scalable systems", "New technologies", "Continuous learning"],
    },
  },

  // Habilidades técnicas por categoría
  skills: {
    title: { es: "Habilidades técnicas", en: "Technical skills" },
    subtitle: { es: "Un recorrido por mi stack y experiencia", en: "A journey through my technical expertise" },
    groups: [
      { name: { es: "Lenguajes", en: "Languages" }, items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
      { name: { es: "Backend", en: "Backend" }, items: ["Node.js", "Express.js", "Prisma ORM", "REST APIs", "Flask"] },
      { name: { es: "Frontend", en: "Frontend" }, items: ["React", "Next.js", "React Native", "Redux Toolkit", "Tailwind CSS", "Vite"] },
      { name: { es: "Bases de datos", en: "Databases" }, items: ["MySQL", "PostgreSQL", "Firebase", "Supabase"] },
      { name: { es: "Cloud & DevOps", en: "Cloud & DevOps" }, items: ["AWS (RDS, S3, SES)", "Azure DevOps", "Git", "CI/CD"] },
      { name: { es: "Testing & QA", en: "Testing & QA" }, items: ["Jest", "Cypress", "Playwright", "Postman", "JMeter"] },
    ],
  },
} satisfies About;

/* ============================================================
   PROYECTOS
   - category: "professional" (profesional) o "university" (universitario)
   - description: texto corto para la tarjeta
   - overview: descripción larga (dentro del detalle)
   - features: características clave (lista)
   - tags: tecnologías utilizadas
   - image: portada (en public/, ej: "/erp.jpg")
   - images: galería dentro del detalle (varias, en public/)
   - links: enlaces (código, demo…)
   ============================================================ */
export const projects: Project[] = [
  {
    id: "distributed-snake",
    categories: ["university"],
    year: "2025",
    title: { es: "Juego de Snake Distribuido", en: "Distributed Snake Game" },
    description: {
      es: "Juego tipo Snake sobre una arquitectura distribuida, con balanceo de carga y monitoreo de nodos en tiempo real.",
      en: "Snake-style game on a distributed architecture, with load balancing and real-time node monitoring.",
    },
    overview: {
      es: "Juego tipo Snake con arquitectura distribuida: cada componente se encarga de una tarea (juego, lógica, monitoreo de nodos y puntajes). Incluye balanceo de carga, reasignación automática ante sobrecarga y monitoreo de CPU/RAM en tiempo real.",
      en: "A Snake-style game with a distributed architecture: each component handles one task (game, logic, node monitoring and scores). It includes load balancing, automatic reassignment on overload and real-time CPU/RAM monitoring.",
    },
    features: {
      es: [
        "Arquitectura distribuida con componentes especializados (juego, lógica, monitoreo y puntajes)",
        "Balanceo de carga inteligente: umbral de CPU/RAM al 80% y puntaje ponderado (70% CPU / 30% RAM)",
        "Reasignación automática de tareas al detectar sobrecarga, priorizando nodos libres",
        "Monitoreo de CPU y RAM en tiempo real mediante WebSockets",
        "Gestión de tareas (comida y obstáculos) con persistencia en Firebase",
      ],
      en: [
        "Distributed architecture with specialized components (game, logic, monitoring and scores)",
        "Smart load balancing: 80% CPU/RAM threshold and weighted score (70% CPU / 30% RAM)",
        "Automatic task reassignment on overload, prioritizing idle nodes",
        "Real-time CPU and RAM monitoring via WebSockets",
        "Task management (food and obstacles) with Firebase persistence",
      ],
    },
    tags: ["Python", "Flask", "Firebase", "Pygame", "WebSockets", "JavaScript"],
    image: "/snake-title.png",
    images: ["/snake-title.png", "/snake-power.png", "/snake-start.png", "/snake-welcome.png", "/snake-play.png", "/snake-gameover.png"],
    links: [{ label: { es: "Código", en: "Code" }, url: "https://github.com/Noealto90/Juego-Distribuido" }],
  },
  {
    id: "resource-monitor",
    categories: ["university"],
    year: "2025",
    title: {
      es: "Sistema Distribuido de Monitoreo de Recursos",
      en: "Distributed Resource Monitoring System",
    },
    description: {
      es: "Sistema distribuido que monitorea recursos (CPU, RAM, disco, red) en tiempo real desde nodos y centraliza las métricas en Firebase.",
      en: "Distributed system that monitors resources (CPU, RAM, disk, network) in real time from nodes and centralizes metrics in Firebase.",
    },
    overview: {
      es: "Sistema distribuido que monitorea recursos (CPU, RAM, disco y red) en tiempo real desde varios nodos y guarda las métricas de forma centralizada en Firebase. Diseñado para escalar y preparado para integrar procesamiento de video.",
      en: "A distributed system that monitors resources (CPU, RAM, disk and network) in real time across nodes and stores the metrics centrally in Firebase. Built to scale and ready to integrate video processing.",
    },
    features: {
      es: [
        "Monitoreo en tiempo real de CPU, RAM, disco y red",
        "Métricas centralizadas en Firebase Firestore",
        "Arquitectura distribuida y escalable",
        "Preparado para integración con procesamiento multimedia (transcodificación)",
        "Reporte de métricas cada 25 segundos por nodo",
      ],
      en: [
        "Real-time monitoring of CPU, RAM, disk and network",
        "Metrics centralized in Firebase Firestore",
        "Distributed, scalable architecture",
        "Ready for multimedia processing integration (transcoding)",
        "Metrics reported every 25 seconds per node",
      ],
    },
    tags: ["Python", "Firebase", "Firestore", "psutil", "python-dotenv"],
    image: "/resource-monitor.png",
    images: ["/resource-monitor.png"],
    links: [{ label: { es: "Código", en: "Code" }, url: "https://github.com/Noealto90/Proyecto-Sistemas-Operativos" }],
  },
  {
    id: "the-last-king",
    categories: ["university"],
    year: "2025",
    title: { es: "TheLastKing", en: "TheLastKing" },
    description: {
      es: "Juego multijugador en Unity3D donde el objetivo es conseguir y defender la corona; con salas, poderes, obstáculos y trampas.",
      en: "Unity3D multiplayer game where the goal is to grab and defend the crown; with rooms, power-ups, obstacles and traps.",
    },
    overview: {
      es: "Juego multijugador en Unity3D: los jugadores entran a una sala con un ID y, al empezar, se reparten coronas al azar. Quien no tiene corona persigue a los demás para robársela, entre poderes, obstáculos y trampas. Yo hice el mapa, el apartado visual y el HUD.",
      en: "A Unity3D multiplayer game: players join a room with an ID and, at the start, crowns are dealt at random. Whoever has no crown chases the others to steal it, among power-ups, obstacles and traps. I built the map, the visuals and the HUD.",
    },
    features: {
      es: [
        "Multijugador por salas: los jugadores se unen compartiendo un ID",
        "Coronas repartidas al azar al iniciar la partida",
        "Mecánica de perseguir y robar la corona a otros jugadores",
        "Poderes, obstáculos y trampas repartidos por el mapa",
        "Mi rol: diseño del mapa, apartado visual y HUD",
      ],
      en: [
        "Room-based multiplayer: players join by sharing an ID",
        "Crowns handed out at random when the match starts",
        "Chase-and-steal-the-crown gameplay",
        "Power-ups, obstacles and traps across the map",
        "My role: map design, visuals and HUD",
      ],
    },
    tags: ["Unity3D", "C#", "Git", "GitHub", "Jira"],
    image: "/tlk-logo.png",
    images: ["/tlk-logo.png", "/tlk-map.png", "/tlk-level.png", "/tlk-hud.png", "/tlk-character.png", "/tlk-obstacles.png"],
    links: [{ label: { es: "Código", en: "Code" }, url: "https://github.com/Norman1410/TheLastKing" }],
  },
  {
    id: "costa-rica-tourism",
    categories: ["professional", "university"],
    year: "2025",
    title: { es: "Costa Rican Doing", en: "Costa Rican Doing" },
    description: {
      es: "Sitio web de turismo construido con Next.js 15 y React 19, con hero responsivo, selector de idioma y formulario de contacto seguro.",
      en: "Tourism website built with Next.js 15 and React 19, with a responsive hero, language selector and secure contact form.",
    },
    overview: {
      es: "Sitio web de turismo hecho en equipo con Next.js, React y TypeScript. Implementé la sección hero, el 'Sobre nosotros', el mini-about, el selector de idioma y el formulario de contacto con reCAPTCHA. Flujo profesional con Jira, pull requests y revisión de QA.",
      en: "A tourism website built as a team with Next.js, React and TypeScript. I implemented the hero section, the 'About Us', the mini-about, the language selector and the contact form with reCAPTCHA. Professional workflow with Jira, pull requests and QA review.",
    },
    features: {
      es: [
        "Sección hero responsiva y atractiva en la página principal",
        "Secciones 'Sobre nosotros' y mini-about de la página principal",
        "Selector de idioma (sitio multilenguaje)",
        "Formulario de contacto con reCAPTCHA y validación (Zod)",
        "Flujo profesional: Jira, pull requests y aprobación de QA",
      ],
      en: [
        "Responsive, attractive hero section on the home page",
        "'About Us' and mini-about sections on the home page",
        "Language selector (multi-language site)",
        "Contact form with reCAPTCHA and validation (Zod)",
        "Professional workflow: Jira, pull requests and QA approval",
      ],
    },
    tags: ["Next.js", "React", "React Native", "TypeScript", "Redux Toolkit", "Firebase", "Tailwind CSS", "Zod"],
    image: "/cr-hero.png",
    images: ["/cr-hero.png", "/cr-about.png", "/cr-tour.png", "/cr-faq.png", "/cr-contact.png", "/cr-captcha.png"],
    links: [],
  },
  {
    id: "etai-lab",
    categories: ["professional", "university"],
    year: "2024",
    title: {
      es: "Sistema de Reservas de Laboratorios (ETAI)",
      en: "ETAI Laboratory Reservation System",
    },
    description: {
      es: "Sistema web de gestión de laboratorios para instituciones educativas: reservas, inventario de equipos, reportes de daños y control de acceso por roles.",
      en: "Web-based laboratory management system for educational institutions: bookings, equipment inventory, damage reports and role-based access control.",
    },
    overview: {
      es: "Sistema web para gestionar laboratorios: reservar espacios, administrar equipos, reportar daños y generar reportes en PDF, con acceso por roles (Super Admin, Administrador, Profesor y Usuario). Desarrollado para el curso de Administración de Proyectos del TEC.",
      en: "A web system to manage laboratories: book spaces, manage equipment, report damages and generate PDF reports, with role-based access (Super Admin, Administrator, Professor and User). Built for the Project Management course at TEC.",
    },
    features: {
      es: [
        "Control de acceso por roles: Super Admin, Administrador, Profesor y Usuario",
        "Reserva de laboratorios en tiempo real, con detección de conflictos y renovación",
        "Inventario y gestión de equipos, con reportes de daños y flujo de restauración",
        "Reportes de uso y estadísticas con generación de PDF",
        "Autenticación por sesión y validación de correo institucional (@etai.ac.cr)",
        "Seguridad: hash de contraseñas y prevención de inyección SQL",
      ],
      en: [
        "Role-based access control: Super Admin, Administrator, Professor and User",
        "Real-time lab booking with conflict detection and renewal",
        "Equipment inventory management with damage reports and restoration workflow",
        "Usage reports and statistics with PDF generation",
        "Session-based authentication and institutional email validation (@etai.ac.cr)",
        "Security: password hashing and SQL injection prevention",
      ],
    },
    tags: ["PHP", "PostgreSQL", "JavaScript", "HTML5", "CSS3", "PHPMailer"],
    image: "/etai-estudiante.png",
    images: ["/etai-estudiante.png", "/etai-reserva.png", "/etai-admin.png", "/etai-profesor.png"],
    links: [{ label: { es: "Código", en: "Code" }, url: "https://github.com/Noealto90/ProyectoETAI" }],
  },
  {
    id: "gps-tracking",
    categories: ["professional"],
    year: "2026",
    title: {
      es: "Plataforma de Rastreo GPS de Dispositivos Corporativos",
      en: "Corporate Device GPS Tracking Platform",
    },
    description: {
      es: "Plataforma multiempresa de rastreo GPS: una app Android reporta la ubicación de dispositivos corporativos y un panel web muestra en mapa la asistencia por horario.",
      en: "Multi-company GPS tracking platform: an Android app reports corporate device locations and a web dashboard shows attendance by schedule on a map.",
    },
    overview: {
      es: "Plataforma multiempresa para rastrear dispositivos corporativos por GPS. Una app Android reporta la ubicación y la última conexión; un backend (Express + Prisma) la procesa y almacena; y un panel web con mapa (Leaflet) muestra dónde está cada dispositivo y si el empleado está en su lugar de trabajo dentro de su horario.",
      en: "A multi-company platform to track corporate devices by GPS. An Android app reports the location and last connection; a backend (Express + Prisma) processes and stores it; and a web dashboard with a map (Leaflet) shows where each device is and whether the employee is at their workplace within their schedule.",
    },
    features: {
      es: [
        "App Android (Kotlin) que reporta la ubicación GPS y la última conexión en tiempo real",
        "Soporte multiempresa: dispositivos, empleados, lugares y horarios aislados por empresa",
        "Backend en Express + Prisma que recibe, procesa y almacena las ubicaciones",
        "Geocercas por lugar de trabajo (latitud, longitud y horarios)",
        "Panel web con mapa (Leaflet) para ver dispositivos y controlar asistencia",
        "Autenticación con JWT y validación de datos con Zod",
      ],
      en: [
        "Android app (Kotlin) reporting GPS location and last connection in real time",
        "Multi-company support: devices, employees, places and schedules isolated per company",
        "Express + Prisma backend that receives, processes and stores locations",
        "Per-workplace geofences (latitude, longitude and schedules)",
        "Web dashboard with a map (Leaflet) to view devices and monitor attendance",
        "JWT authentication and data validation with Zod",
      ],
    },
    tags: ["Kotlin", "Android", "TypeScript", "Express", "Prisma", "Next.js", "React", "Leaflet"],
    image: "/GPS-Title.png",
    images: ["/GPS-Title.png"],
    imageNote: {
      es: "Las imágenes mostradas son ilustrativas, ya que este es un proyecto privado y no se puede divulgar información confidencial.",
      en: "The images shown are illustrative, as this is a private project and confidential information cannot be disclosed.",
    },
    links: [],
  },
  {
    id: "erp-cr",
    categories: ["professional"],
    year: "2026",
    title: {
      es: "Sistema ERP Empresarial (Costa Rica)",
      en: "Enterprise ERP System (Costa Rica)",
    },
    description: {
      es: "ERP multiempresa con localización fiscal completa para Costa Rica, con foco en facturación electrónica ante el Ministerio de Hacienda.",
      en: "Multi-company ERP with full Costa Rica tax localization, focused on electronic invoicing to the Ministry of Finance (Hacienda).",
    },
    overview: {
      es: "Sistema ERP multiempresa para la gestión contable y financiera, con localización fiscal para Costa Rica sobre una base ERP de código abierto. Cubre impuestos, planilla y facturación electrónica ante Hacienda, con contabilidad independiente por empresa. Trabajé en contabilidad y finanzas, con foco en la facturación electrónica.",
      en: "A multi-company ERP for accounting and finance, with Costa Rica tax localization on top of an open-source ERP core. It covers taxes, payroll and electronic invoicing to the Ministry of Finance, with separate accounting per company. I worked in accounting and finance, focused on electronic invoicing.",
    },
    features: {
      es: [
        "Facturación electrónica de punta a punta: envío de comprobantes al Ministerio de Hacienda (facturas, tiquetes, notas de crédito y débito)",
        "Manejo de claves y consecutivos, estados de aceptación y rechazo, reintentos por cola y descarga de PDF y XML firmados",
        "Lógica fiscal: cálculo de IVA por línea, exoneraciones, códigos CABYS, condiciones de venta, medios de pago y tipo de cambio",
        "Soporte multiempresa con selector de empresa persistente y filtrado automático",
        "Corrección de bugs en facturación, cálculo de impuestos y persistencia de estados",
        "Mejoras de UX: mensajería clara y validaciones tempranas en el proceso de emisión",
      ],
      en: [
        "End-to-end electronic invoicing: sending documents to the Ministry of Finance (invoices, e-tickets, credit and debit notes)",
        "Key and sequence handling, acceptance and rejection statuses, queue-based retries and signed PDF/XML downloads",
        "Tax logic: per-line VAT calculation, exemptions, CABYS codes, sale conditions, payment methods and exchange rate",
        "Multi-company support with a persistent company selector and automatic filtering",
        "Bug fixing in invoicing, tax calculation and status persistence",
        "UX improvements: clear messaging and early validations during document issuance",
      ],
    },
    tags: ["Python", "MariaDB", "Redis", "Vue 3", "Docker", "REST APIs"],
    image: "/erp-title.png",
    images: ["/erp-title.png"],
    imageNote: {
      es: "Las imágenes mostradas son ilustrativas, ya que este es un proyecto privado y no se puede divulgar información confidencial.",
      en: "The images shown are illustrative, as this is a private project and confidential information cannot be disclosed.",
    },
    links: [],
  },
  {
    id: "hr-management",
    categories: ["professional"],
    year: "2026",
    title: {
      es: "Sistema de Gestión de Recursos Humanos",
      en: "Human Resources Management System",
    },
    description: {
      es: "Plataforma web multiempresa de RR.HH.: solicitudes de vacaciones, permisos e incapacidades con flujo de aprobación jerárquico y automatizaciones.",
      en: "Multi-company HR web platform: vacation, leave and sick-day requests with a hierarchical approval flow and automations.",
    },
    overview: {
      es: "Aplicación web multiempresa de Recursos Humanos para gestionar solicitudes de empleados (vacaciones, permisos, incapacidades y llegadas tarde) con un flujo de aprobación por niveles. Varias organizaciones conviven aisladas en un mismo sistema, con un super-administrador global. Incluye escalamiento automático de solicitudes vencidas, cálculo de vacaciones por antigüedad y notificaciones por correo.",
      en: "A multi-company HR web app to manage employee requests (vacation, leave, sick days and late arrivals) with a tiered approval flow. Several organizations live isolated in one system, with a global super-administrator. It includes automatic escalation of overdue requests, seniority-based vacation accrual and email notifications.",
    },
    features: {
      es: [
        "Plataforma multiempresa (multi-tenant) con aislamiento por organización y super-administrador global",
        "4 roles: empleado, jefe de departamento, administrador de empresa y super-administrador",
        "Flujo de solicitudes (vacaciones, permisos, incapacidades, llegadas tarde) con aprobar, rechazar o modificar",
        "Escalamiento automático al administrador si el jefe no responde en el plazo configurable (2 días hábiles)",
        "Cálculo automático de vacaciones por aniversario de contratación según política por antigüedad",
        "Días hábiles, zonas horarias por país, reversión de aprobaciones y notificaciones por correo",
      ],
      en: [
        "Multi-company (multi-tenant) platform with per-organization isolation and a global super-admin",
        "4 roles: employee, department head, company administrator and super-administrator",
        "Request flow (vacation, leave, sick days, late arrivals) with approve, reject or modify",
        "Automatic escalation to the administrator if the head doesn't respond within the configurable window (2 business days)",
        "Automatic anniversary-based vacation accrual following a seniority policy",
        "Working days, per-country time zones, approval reversal and email notifications",
      ],
    },
    tags: ["TypeScript", "Node.js", "Express", "Prisma", "MySQL", "Next.js", "React", "AWS SES"],
    image: "/hr-title.png",
    images: ["/hr-title.png"],
    imageNote: {
      es: "Las imágenes mostradas son ilustrativas, ya que este es un proyecto privado y no se puede divulgar información confidencial.",
      en: "The images shown are illustrative, as this is a private project and confidential information cannot be disclosed.",
    },
    links: [],
  },
  {
    id: "skyroute",
    categories: ["personal", "university"],
    year: "2025",
    title: { es: "SkyRoute", en: "SkyRoute" },
    description: {
      es: "Web de reservas de vuelos en Angular 17 con lógica real de aerolínea y 68 pruebas (Jasmine/Karma). La creé como base para el curso de QA.",
      en: "Angular 17 flight-booking web app with real airline logic and 68 tests (Jasmine/Karma). I built it as the base for the QA course.",
    },
    overview: {
      es: "Web de reservas de vuelos con estética editorial (modo claro/oscuro), construida en Angular 17 y TypeScript. Desde el lado del cliente: buscas vuelos, eliges a tus viajeros guardados, ves el desglose de precio con impuestos y descuentos, confirmas y tu viaje queda agendado en 'My trips'. La desarrollé como el proyecto base del curso de Aseguramiento de la Calidad del Software: a partir de esta aplicación, los participantes del curso debían escribir sus propias pruebas QA. Lo interesante técnicamente es la capa de servicios que modela lógica real de aerolínea y el diseño contra interfaces, que hace el código fácil de testear.",
      en: "A flight-booking web app with an editorial look (light/dark), built with Angular 17 and TypeScript. From the traveler's side: you search flights, pick your saved travelers, see the price breakdown with taxes and discounts, confirm and your trip is scheduled in 'My trips'. I built it as the base project for the Software Quality Assurance course: participants had to write their own QA tests against this application. The interesting part is the services layer that models real airline logic and the design against interfaces, which makes the code easy to test.",
    },
    features: {
      es: [
        "Capa de servicios con lógica real de aerolínea: precios, impuestos, validación de documentos y visas, reembolsos, millas y descuentos grupales",
        "Diseño contra interfaces (IVueloService, etc.) para un código fácil de testear",
        "68 pruebas con Jasmine/Karma: dobles manuales, ts-mockito y cobertura (karma-coverage)",
        "Datos cargados desde JSON (no hardcodeados) y persistencia en localStorage",
        "Tema claro/oscuro, responsive y sistema de diseño editorial en SCSS",
      ],
      en: [
        "Services layer with real airline logic: prices, taxes, document and visa validation, refunds, miles and group discounts",
        "Designed against interfaces (IVueloService, etc.) for easy-to-test code",
        "68 tests with Jasmine/Karma: manual doubles, ts-mockito and coverage (karma-coverage)",
        "Data loaded from JSON (not hardcoded) and persistence in localStorage",
        "Light/dark theme, responsive and an editorial design system in SCSS",
      ],
    },
    tags: ["Angular", "TypeScript", "RxJS", "Angular Material", "SCSS", "Jasmine", "Karma", "ts-mockito"],
    testing: {
      title: { es: "Pruebas realizadas", en: "Testing performed" },
      description: {
        es: "El proyecto incluye 68 pruebas automatizadas con Jasmine y Karma, organizadas por tipo. Al diseñar los servicios contra interfaces, cada uno se prueba de forma aislada, incluso simulando sus dependencias con mocks.",
        en: "The project includes 68 automated tests with Jasmine and Karma, organized by type. By designing services against interfaces, each one is tested in isolation, even simulating its dependencies with mocks.",
      },
      items: {
        es: [
          "Pruebas unitarias de servicios: vuelos, pasajeros y utilidades",
          "Pruebas de integración: cálculo de precios y flujo de reservas",
          "Mocks dinámicos con ts-mockito para aislar dependencias",
          "Cobertura de código con karma-coverage",
        ],
        en: [
          "Unit tests for services: flights, passengers and utilities",
          "Integration tests: price calculation and booking flow",
          "Dynamic mocks with ts-mockito to isolate dependencies",
          "Code coverage with karma-coverage",
        ],
      },
      codeExample: `describe('VueloService › buscarFlexible', () => {
  it('busca por origen/destino sin importar mayúsculas ni acentos', () => {
    const r = service.buscarFlexible('san jose', 'mia', null);
    expect(r.map(v => v.codigo)).toEqual(['SR-004', 'SR-001']);
  });

  it('devuelve vacío cuando nada coincide', () => {
    expect(service.buscarFlexible('Tokyo', '', null)).toEqual([]);
  });
});`,
      images: ["/skyroute-tests-1.png", "/skyroute-tests-2.png"],
    },
    image: "/skyroute-home.png",
    images: [
      "/skyroute-home.png",
      "/skyroute-home-light.png",
      "/skyroute-search.png",
      "/skyroute-book.png",
      "/skyroute-travelers.png",
      "/skyroute-mobile.png",
      "/skyroute-confirm.png",
    ],
    links: [{ label: { es: "Código", en: "Code" }, url: "https://github.com/ValladaresBlanco/SkyRoute" }],
  },

  // Plantilla de ejemplo para el próximo proyecto:
  //
  // {
  //   id: "mi-proyecto",               // identificador único (sin espacios)
  //   category: "professional",        // "professional" | "university"
  //   year: "2026",
  //   title: { es: "Nombre", en: "Name" },
  //   description: { es: "Resumen corto (tarjeta).", en: "Short summary (card)." },
  //   overview: { es: "Descripción larga (detalle).", en: "Long description (detail)." },
  //   features: {
  //     es: ["Característica 1", "Característica 2"],
  //     en: ["Feature 1", "Feature 2"],
  //   },
  //   tags: ["React", "Node.js"],
  //   image: "/mi-proyecto.jpg",        // portada en public/
  //   images: ["/mi-proyecto-2.jpg"],   // galería en public/
  //   links: [{ label: { es: "Código", en: "Code" }, url: "https://..." }],
  // },
];

export const timeline: TimelineItem[] = [
  {
    type: "experience",
    date: { es: "Feb 2026 a Jun 2026", en: "Feb 2026 to Jun 2026" },
    role: { es: "Desarrollador de Software", en: "Software Developer" },
    place: "CyberPro Costa Rica",
    desc: {
      es: "Endpoints REST y lógica de backend en una suite ERP/POS: facturación electrónica (Hacienda v4.4), backend multitenant, consultas SQL con Prisma y funcionalidades de la app Android.",
      en: "REST endpoints and backend logic across an ERP/POS suite: e-invoicing (Hacienda v4.4), multitenant backend, SQL with Prisma and Android app features.",
    },
  },
  {
    type: "experience",
    date: { es: "Ago 2025 a Jun 2026", en: "Aug 2025 to Jun 2026" },
    role: { es: "Asistente de QA & Testing", en: "QA & Testing Assistant" },
    place: "TEC Costa Rica",
    desc: {
      es: "Apoyo al curso de Calidad y Pruebas de Software del TEC: revisión de entregables, diseño de pruebas y automatización con Jest, Cypress, Playwright y JMeter.",
      en: "Assisted TEC's Software Quality & Testing course: reviewing deliverables, test design and automation with Jest, Cypress, Playwright and JMeter.",
    },
  },
  {
    type: "experience",
    date: { es: "Ago 2025 a Nov 2025", en: "Aug 2025 to Nov 2025" },
    role: { es: "Desarrollador de Software", en: "Software Developer" },
    place: "TEC Costa Rica",
    desc: {
      es: "Sitio web turístico con Next.js 15 y React 19, APIs serverless, integración con Firebase y estado global con Redux Toolkit.",
      en: "Tourism website with Next.js 15 and React 19, serverless APIs, Firebase integration and global state with Redux Toolkit.",
    },
  },
  {
    type: "education",
    date: { es: "2020 a Oct 2026", en: "2020 to Oct 2026" },
    role: { es: "Bachillerato en Ing. en Computación", en: "B.Sc. Computer Engineering" },
    place: "Instituto Tecnológico de Costa Rica (TEC)",
    desc: {
      es: "Graduado como Ingeniero en Computación en octubre 2026.",
      en: "Graduated as a Computer Engineer in October 2026.",
    },
  },
];

/* ============================================================
   CERTIFICACIONES — agrega las tuyas aquí.
   Ejemplo:
   { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2026", url: "https://..." }
   ============================================================ */
export const certifications: Certification[] = [
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2026",
    date: { es: "Agosto 2026", en: "August 2026" },
    image: "/cert-cisco-data-analytics.png",
    url: "https://www.credly.com/badges/d52b5d90-72a2-4f0e-b5c9-c3521150b678",
    desc: {
      es: "Proceso de análisis de datos de principio a fin: obtención, transformación y análisis de datos con técnicas estadísticas y de preparación, y visualización de resultados.",
      en: "The end-to-end data analytics process: acquiring, transforming and analyzing data with statistical and data-preparation techniques, and visualizing the results.",
    },
    skills: ["Excel", "SQL", "Tableau", "Data Analysis", "Data Visualization"],
  },
];

/* Interfaz (textos fijos del sitio) */
export const ui = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    projects: { es: "Proyectos", en: "Projects" },
    about: { es: "Sobre mí", en: "About" },
    resume: { es: "CV", en: "CV" },
    certifications: { es: "Certificaciones", en: "Certifications" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    viewProjects: { es: "Ver proyectos", en: "View projects" },
    getInTouch: { es: "Contáctame", en: "Get in touch" },
    scroll: { es: "Desliza", en: "Scroll" },
    available: { es: "Disponible para proyectos", en: "Available for work" },
  },
  sections: {
    about: { es: "Sobre mí", en: "About me" },
    projects: { es: "Proyectos", en: "Projects" },
    resume: { es: "Experiencia y Formación", en: "Experience & Education" },
    certifications: { es: "Certificaciones", en: "Certifications" },
  },
  about: { tools: { es: "Herramientas", en: "Tools & Stack" }, photo: { es: "Tu foto aquí", en: "Your photo here" } },
  projects: {
    shot: { es: "Captura del proyecto", en: "Project screenshot" },
    filters: {
      all: { es: "Todos", en: "All" },
      professional: { es: "Profesionales", en: "Professional" },
      university: { es: "Académicos", en: "Academic" },
      personal: { es: "Personales", en: "Personal" },
    },
    category: {
      professional: { es: "Profesional", en: "Professional" },
      university: { es: "Académico", en: "Academic" },
      personal: { es: "Personal", en: "Personal" },
    },
    viewDetails: { es: "Ver detalles", en: "View details" },
    overview: { es: "Descripción del proyecto", en: "Project overview" },
    features: { es: "Características clave", en: "Key features" },
    tech: { es: "Tecnologías utilizadas", en: "Tech stack" },
    close: { es: "Cerrar", en: "Close" },
    empty: { es: "No hay proyectos en esta categoría todavía.", en: "No projects in this category yet." },
  },
  resume: {
    prompt: { es: "¿Quieres el documento completo?", en: "Want the full document?" },
    download: { es: "Descargar CV (PDF)", en: "Download résumé (PDF)" },
    experience: { es: "Experiencia", en: "Experience" },
    education: { es: "Educación", en: "Education" },
  },
  certifications: {
    empty: { es: "Próximamente.", en: "Coming soon." },
    view: { es: "Ver credencial", en: "View credential" },
    verified: { es: "Verificada en Credly", en: "Verified on Credly" },
    issued: { es: "Emitida", en: "Issued" },
  },
  contact: {
    eyebrow: { es: "¿Trabajamos juntos?", en: "Let's work together?" },
    title: { es: "Hablemos", en: "Get in touch" },
    footer: { es: "Hecho con cuidado", en: "Made with care" },
  },
};
