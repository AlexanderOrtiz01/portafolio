export type Lang = 'es' | 'en';

/** Spanish for Spanish-speaking browsers, English for everyone else; `?lang=` overrides it. */
export function detectLang(): Lang {
  const forced = new URLSearchParams(location.search).get('lang');
  if (forced === 'es' || forced === 'en') return forced;
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
  return langs[0].toLowerCase().startsWith('es') ? 'es' : 'en';
}

export const EMAIL = 'alexvillalta0108@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/edwinalexandervillaltaortiz0108';
export const LINKEDIN_LABEL = 'linkedin.com/in/edwinalexandervillaltaortiz0108';

export interface Item {
  head?: string;
  meta?: string;
  text: string;
  /** File name, without extension, of a logo in src/assets/logos. */
  logo?: string;
}

export interface CaseText {
  /** Short name used in the contents list. */
  name: string;
  /** What kind of entry it is, shown next to the name in the contents. */
  kind: string;
  kicker: string;
  when: string;
  title: string;
  sub: string;
  body: string;
  items: Item[];
  stack: string[];
  fig: string;
  /** File names, without extension, of the logos in src/assets/logos shown beside the title. */
  logo?: string | string[];
}

export interface Content {
  ui: {
    role: string;
    kicker: string;
    headline: [string, string];
    lede: string;
    open: string;
    close: string;
    hintClosed: string;
    hintOpen: string;
    prev: string;
    next: string;
    contents: string;
    email: string;
    location: string;
    langLabel: string;
    canvasLabel: string;
    flatNote: string;
  };
  cover: { top: string; title: string; bottom: string; year: string };
  endpaper: { line1: string; line2: string; nav: string[] };
  contents: { title: string; label: string; note: string };
  play: { idle: string; playing: string };
  profile: CaseText & { facts: [string, string][]; platforms: string };
  cases: CaseText[];
  skills: { name: string; title: string; kicker: string; groups: { head: string; text: string }[] };
  education: {
    title: string;
    kicker: string;
    studies: Item[];
    certsLabel: string;
    certs: Item[];
    langsLabel: string;
    langs: Item[];
  };
  contact: {
    name: string;
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    location: string;
  };
  /** The closing words on the back endpaper, one string per line. */
  back: { thanks: string[]; sign: string };
  terminal: [string, string][];
  viz: Record<string, string>;
}

const es: Content = {
  ui: {
    role: 'Desarrollador de Software · QA Analyst',
    kicker: 'Portafolio — 2026',
    headline: ['Software,', 'hecho y probado.'],
    lede: 'Soy Edwin Villalta, desarrollador de software y QA Analyst en El Salvador. Abre el libro para ver mi trabajo.',
    open: 'Abrir el libro',
    close: 'Cerrar',
    hintClosed: 'Haz clic en el libro para abrirlo',
    hintOpen: 'Clic en una mitad o arrastra el borde de la página · teclas ← →',
    prev: 'Página anterior',
    next: 'Página siguiente',
    contents: 'Contenido',
    email: 'Correo',
    location: 'El Salvador',
    langLabel: 'Idioma',
    canvasLabel: 'Libro 3D interactivo con el portafolio de Edwin Villalta',
    flatNote: 'Clic en una mitad para pasar la página · teclas ← →',
  },
  cover: {
    top: 'EDWIN VILLALTA',
    title: 'Portafolio',
    bottom: 'Desarrollo de Software & QA',
    year: '2026',
  },
  endpaper: {
    line1: 'Este libro pertenece a',
    line2: 'Edwin Villalta',
    nav: ['Clic en una mitad para pasar la página', 'Arrastra el borde para hojear', 'Teclas ← → · Esc para cerrar'],
  },
  contents: {
    title: 'Contenido',
    label: 'ÍNDICE',
    note: 'Elige una entrada para saltar a esa página.',
  },
  play: { idle: 'EN PAUSA', playing: 'REPRODUCIENDO' },
  profile: {
    name: 'Perfil',
    kind: 'Sobre mí',
    kicker: 'PERFIL',
    when: 'EL SALVADOR',
    title: 'Construyo software y lo pruebo antes de que falle.',
    sub: 'Desarrollador de Software · QA Analyst · Ingeniería en Sistemas (5.º año)',
    body:
      'Hoy desarrollo, en equipo, una aplicación web institucional para el MINEDUCYT, desde el análisis de requerimientos hasta la puesta en producción. Mi paso previo por QA me permite entregar software mantenible, probado y alineado con los criterios de aceptación.',
    items: [],
    facts: [
      ['Ahora', 'MINEDUCYT · Desarrollo de Software'],
      ['Antes', 'QA en Devlync y Roots'],
      ['Estudios', 'Universidad Gerardo Barrios'],
      ['Idiomas', 'Español nativo · Inglés B1'],
    ],
    stack: [],
    fig: 'Perfil en una terminal',
    platforms: 'PLATAFORMAS',
  },
  cases: [
    {
      name: 'Códigos QR dinámicos',
      logo: ['mineducyt', 'qr-suite'],
      kind: 'MINEDUCYT · Web',
      kicker: 'MINEDUCYT',
      when: 'JUL. 2026 — HOY',
      title: 'Códigos QR dinámicos',
      sub: 'Desarrollador de Software y QA Analyst · Ministerio de Educación, Ciencia y Tecnología',
      body:
        'Aplicación web institucional para generar, personalizar y administrar códigos QR dinámicos con acortador de URL bajo dominio del Ministerio, para el material educativo impreso.',
      items: [
        { text: 'Principal contribuidor del repositorio: más del 70 % de los commits.' },
        { text: 'Acceso con Google (Firebase Auth) y Firestore con reglas de seguridad y roles.' },
        { text: 'Creación paso a paso, personalización, importación, exportación y estadísticas con Recharts.' },
        { text: 'CI con GitHub Actions (lint, Vitest y build), Dependabot y despliegue en Vercel.' },
      ],
      stack: ['React 19', 'Vite', 'Tailwind CSS', 'Firebase', 'Vitest', 'Vercel'],
      fig: 'Del enlace al QR, y del QR a las estadísticas',
    },
    {
      name: 'ElectroDTE',
      logo: 'electrodte',
      kind: 'Proyecto · Escritorio / Web',
      kicker: 'PROYECTO',
      when: 'ESCRITORIO / WEB',
      title: 'ElectroDTE',
      sub: 'Inventario y facturación electrónica para El Salvador',
      body:
        'Sistema de inventario y facturación electrónica (DTE) para El Salvador, integrado con el Ministerio de Hacienda.',
      items: [
        { text: 'Inventario y facturación en un mismo sistema.' },
        { text: 'Documentos Tributarios Electrónicos transmitidos a Hacienda.' },
        { text: 'Disponible como aplicación de escritorio y web.' },
      ],
      stack: ['React', 'Node.js', 'PostgreSQL'],
      fig: 'De la venta al documento tributario',
    },
    {
      name: 'Direct English',
      logo: 'direct-english',
      kind: 'Proyecto · App móvil',
      kicker: 'PROYECTO',
      when: 'APP MÓVIL',
      title: 'Direct English',
      sub: 'Aprender inglés desde cualquier lugar',
      body:
        'Aplicación móvil para aprender inglés desde cualquier lugar. Forma parte del curso de inglés en línea n.º 1 de América Latina.',
      items: [
        { text: 'Acceso a lecciones desde el teléfono.' },
        { text: 'Recursos de estudio siempre a mano.' },
        { text: 'Seguimiento del progreso del estudiante.' },
      ],
      stack: ['App móvil', 'E-learning'],
      fig: 'Lecciones, recursos y progreso',
    },
    {
      name: 'MagnetoHR',
      logo: 'magnetohr',
      kind: 'Proyecto · Web',
      kicker: 'PROYECTO',
      when: 'WEB',
      title: 'MagnetoHR',
      sub: 'Reclutamiento descentralizado con IA y blockchain',
      body:
        'Plataforma de reclutamiento descentralizada que usa IA y blockchain para innovar y agilizar el proceso de contratación.',
      items: [
        { text: 'IA para agilizar la selección de candidatos.' },
        { text: 'Blockchain como base de una plataforma descentralizada.' },
        { head: 'Mi paso por Magneto HR', text: 'Soporte técnico y empresarial, ene. – may. 2026.' },
      ],
      stack: ['IA', 'Blockchain', 'Plataforma web'],
      fig: 'Candidatos, coincidencias y bloques',
    },
    {
      name: 'EvaApp',
      logo: 'evaapp',
      kind: 'Proyecto · App / Web',
      kicker: 'PROYECTO',
      when: 'APP / WEB',
      title: 'EvaApp',
      sub: 'Cuidadores locales para perros y gatos',
      body:
        'Plataforma que conecta a dueños de mascotas con cuidadores locales para perros y gatos.',
      items: [
        { text: 'Hospedaje y guardería.' },
        { text: 'Paseos con cuidadores de la zona.' },
        { text: 'Visitas a domicilio.' },
      ],
      stack: ['App móvil', 'Web', 'Marketplace'],
      fig: 'Un paseo, de la reserva a la ruta',
    },
    {
      name: 'Calidad de software',
      kind: 'Experiencia · QA',
      kicker: 'EXPERIENCIA',
      when: '2024 — 2026',
      title: 'Calidad, de punta a punta.',
      sub: 'QA manual y automatizado bajo Scrum',
      body:
        'Pruebas funcionales, de integración, de regresión y de estrés; APIs REST validadas con Postman y defectos gestionados en Jira.',
      items: [
        {
          head: 'QA Analyst · Devlync Tech Company',
          logo: 'devlync',
          meta: 'ABR. – MAY. 2026',
          text: 'Lideré el ciclo completo de QA: diseño de pruebas, ambientes, ejecución y cierre de defectos.',
        },
        {
          head: 'QA Analyst · Tecnologías Informáticas Roots',
          logo: 'roots',
          meta: 'ENE. 2025 – MAR. 2026',
          text: 'Estrategias de pruebas manuales, funcionales, de integración y automatizadas.',
        },
        {
          head: 'Instructor de Programación · UGB',
          meta: 'ABR. – JUN. 2024',
          text: 'Enseñanza de lógica de programación y desarrollo de software.',
        },
      ],
      stack: ['Selenium', 'Playwright', 'Cypress', 'JMeter', 'Postman', 'Jira'],
      fig: 'Una corrida de pruebas, con su defecto',
    },
  ],
  skills: {
    name: 'Habilidades y formación',
    title: 'Habilidades',
    kicker: 'CAJA DE HERRAMIENTAS',
    groups: [
      { head: 'Desarrollo', text: 'React, Vite, Tailwind CSS, Node.js, Firebase (Auth y Firestore)' },
      { head: 'Calidad (QA)', text: 'Pruebas funcionales, de integración, de regresión, unitarias y de estrés' },
      { head: 'Automatización', text: 'Selenium, Playwright, Cypress, Vitest' },
      { head: 'APIs y datos', text: 'Postman para APIs REST, PostgreSQL (SQL), Firestore' },
      { head: 'Flujo de trabajo', text: 'Git, GitHub Actions, Vercel, Jira, Azure DevOps, Chrome DevTools' },
      { head: 'Lenguajes y métodos', text: 'JavaScript, Python, PHP · Scrum, Kanban, cascada' },
    ],
  },
  education: {
    title: 'Formación',
    kicker: 'ESTUDIOS Y CERTIFICACIONES',
    studies: [
      {
        head: 'Ingeniería en Sistemas Informáticos y Redes',
        meta: '5.º AÑO · EN CURSO',
        text: 'Universidad Gerardo Barrios',
      },
      {
        head: 'Aseguramiento de la Calidad de Software y Automatización de Pruebas',
        meta: '2025',
        text: 'Escuela Superior de Innovación y Tecnología',
      },
    ],
    certsLabel: 'CERTIFICACIONES',
    certs: [
      { meta: 'MAY. 2025', text: 'QA Testing: Metodologías para la Gestión del Aseguramiento de la Calidad de Software' },
      { meta: 'DIC. 2024', text: 'Capacitación en Desarrollo Web: HTML y CSS' },
    ],
    langsLabel: 'IDIOMAS',
    langs: [
      { head: 'Español', text: 'Nativo' },
      { head: 'Inglés', text: 'B1 · Academia Europea' },
    ],
  },
  contact: {
    name: 'Contacto',
    kicker: 'CONTACTO',
    title: 'Hablemos.',
    body: 'Disponible para proyectos de desarrollo de software y aseguramiento de calidad.',
    emailLabel: 'CORREO',
    linkedinLabel: 'LINKEDIN',
    locationLabel: 'UBICACIÓN',
    location: 'El Salvador',
  },
  back: { thanks: ['¿Construimos algo', 'y lo probamos?'], sign: 'ESCRÍBEME Y LO HABLAMOS' },
  terminal: [
    ['whoami', 'edwin villalta · desarrollador de software y qa analyst'],
    ['cat ahora.txt', 'app web institucional para el MINEDUCYT'],
    ['stack --top', 'react · node.js · firebase · postgresql'],
    ['qa --tools', 'selenium · playwright · cypress · jmeter · postman'],
    ['estudios', 'ing. en sistemas informáticos y redes · 5.º año'],
  ],
  viz: {
    scan: 'ESCANÉAME',
    shortLink: 'ENLACE CORTO',
    scans: 'ESCANEOS',
    week: 'ÚLTIMAS 12 SEMANAS',
    invoice: 'FACTURA',
    item: 'PRODUCTO',
    qty: 'CANT.',
    amount: 'IMPORTE',
    subtotal: 'Subtotal',
    tax: 'IVA 13 %',
    total: 'Total',
    sent: 'TRANSMITIDO',
    stock: 'INVENTARIO',
    p1: 'Cable HDMI 2 m',
    p2: 'Teclado mecánico',
    p3: 'Monitor 24"',
    p4: 'Mouse inalámbrico',
    lesson: 'LECCIÓN 12',
    progress: 'PROGRESO',
    streak: 'RACHA SEMANAL',
    tap: 'toca para voltear',
    candidates: 'CANDIDATOS',
    match: 'COINCIDENCIA',
    chain: 'CADENA DE BLOQUES',
    ai: 'IA',
    walk: 'Paseo en curso',
    walker: 'con un cuidador de la zona',
    s1: 'Hospedaje',
    s2: 'Paseos',
    s3: 'Guardería',
    s4: 'Visitas',
    suite: 'suite de regresión',
    passed: 'APROBADAS',
    bug: 'defecto reportado en Jira',
    fixed: 'corregido · reejecutando',
    t1: 'inicio de sesión con Google',
    t2: 'crear QR paso a paso',
    t3: 'personalizar marco y logotipo',
    t4: 'API · POST /enlaces',
    t5: 'exportar a PNG y SVG',
    t6: 'control de acceso por roles',
    t7: 'panel de estadísticas',
  },
};

const en: Content = {
  ui: {
    role: 'Software Developer · QA Analyst',
    kicker: 'Portfolio — 2026',
    headline: ['Software,', 'built and tested.'],
    lede: "I'm Edwin Villalta, a software developer and QA analyst in El Salvador. Open the book to see my work.",
    open: 'Open the book',
    close: 'Close',
    hintClosed: 'Click the book to open it',
    hintOpen: 'Click either half or drag a page by its edge · ← → keys',
    prev: 'Previous page',
    next: 'Next page',
    contents: 'Contents',
    email: 'Email',
    location: 'El Salvador',
    langLabel: 'Language',
    canvasLabel: "Interactive 3D book holding Edwin Villalta's portfolio",
    flatNote: 'Click either half to turn the page · ← → keys',
  },
  cover: {
    top: 'EDWIN VILLALTA',
    title: 'Portfolio',
    bottom: 'Software Development & QA',
    year: '2026',
  },
  endpaper: {
    line1: 'This book belongs to',
    line2: 'Edwin Villalta',
    nav: ['Click either half to turn the page', 'Drag a page by its edge to leaf through', '← → keys · Esc to close'],
  },
  contents: {
    title: 'Contents',
    label: 'INDEX',
    note: 'Pick an entry to jump to that page.',
  },
  play: { idle: 'PAUSED', playing: 'PLAYING' },
  profile: {
    name: 'Profile',
    kind: 'About me',
    kicker: 'PROFILE',
    when: 'EL SALVADOR',
    title: 'I build software and test it before it breaks.',
    sub: 'Software Developer · QA Analyst · Systems Engineering (5th year)',
    body:
      'Today I build, as part of a team, an institutional web app for MINEDUCYT, from requirements analysis through to production. My earlier years in QA let me ship software that is maintainable, tested and true to its acceptance criteria.',
    items: [],
    facts: [
      ['Now', 'MINEDUCYT · Software Development'],
      ['Before', 'QA at Devlync and Roots'],
      ['Studies', 'Universidad Gerardo Barrios'],
      ['Languages', 'Spanish native · English B1'],
    ],
    stack: [],
    fig: 'A profile in a terminal',
    platforms: 'PLATFORMS',
  },
  cases: [
    {
      name: 'Dynamic QR codes',
      logo: ['mineducyt', 'qr-suite'],
      kind: 'MINEDUCYT · Web',
      kicker: 'MINEDUCYT',
      when: 'JUL 2026 — NOW',
      title: 'Dynamic QR codes',
      sub: "Software Developer & QA Analyst · El Salvador's Ministry of Education, Science and Technology",
      body:
        "Institutional web app to generate, customise and manage dynamic QR codes, with a URL shortener on the Ministry's own domain, for printed educational material.",
      items: [
        { text: 'Lead contributor to the repository: over 70% of the commits.' },
        { text: 'Google sign-in (Firebase Auth) and Firestore with security rules and roles.' },
        { text: 'Step-by-step creation, customisation, import, export and a Recharts stats panel.' },
        { text: 'CI on GitHub Actions (lint, Vitest and build), Dependabot and Vercel deploys.' },
      ],
      stack: ['React 19', 'Vite', 'Tailwind CSS', 'Firebase', 'Vitest', 'Vercel'],
      fig: 'From link to QR, and from QR to stats',
    },
    {
      name: 'ElectroDTE',
      logo: 'electrodte',
      kind: 'Project · Desktop / Web',
      kicker: 'PROJECT',
      when: 'DESKTOP / WEB',
      title: 'ElectroDTE',
      sub: 'Inventory and e-invoicing for El Salvador',
      body:
        "Inventory and electronic invoicing (DTE) system for El Salvador, integrated with the Ministry of Finance.",
      items: [
        { text: 'Inventory and invoicing in a single system.' },
        { text: 'Electronic tax documents sent to the tax authority.' },
        { text: 'Available as a desktop and a web application.' },
      ],
      stack: ['React', 'Node.js', 'PostgreSQL'],
      fig: 'From a sale to its tax document',
    },
    {
      name: 'Direct English',
      logo: 'direct-english',
      kind: 'Project · Mobile app',
      kicker: 'PROJECT',
      when: 'MOBILE APP',
      title: 'Direct English',
      sub: 'Learning English from anywhere',
      body:
        "Mobile app to learn English from anywhere. Part of Latin America's no. 1 online English course.",
      items: [
        { text: 'Lessons available from the phone.' },
        { text: 'Study resources always at hand.' },
        { text: "Tracking of each student's progress." },
      ],
      stack: ['Mobile app', 'E-learning'],
      fig: 'Lessons, resources and progress',
    },
    {
      name: 'MagnetoHR',
      logo: 'magnetohr',
      kind: 'Project · Web',
      kicker: 'PROJECT',
      when: 'WEB',
      title: 'MagnetoHR',
      sub: 'Decentralised recruiting with AI and blockchain',
      body:
        'Decentralised recruiting platform that uses AI and blockchain to rethink and speed up the hiring process.',
      items: [
        { text: 'AI to speed up candidate selection.' },
        { text: 'Blockchain as the base of a decentralised platform.' },
        { head: 'My time at Magneto HR', text: 'Technical and business support, Jan – May 2026.' },
      ],
      stack: ['AI', 'Blockchain', 'Web platform'],
      fig: 'Candidates, matches and blocks',
    },
    {
      name: 'EvaApp',
      logo: 'evaapp',
      kind: 'Project · App / Web',
      kicker: 'PROJECT',
      when: 'APP / WEB',
      title: 'EvaApp',
      sub: 'Local sitters for dogs and cats',
      body: 'Platform that connects pet owners with local sitters for dogs and cats.',
      items: [
        { text: 'Boarding and day care.' },
        { text: 'Walks with sitters nearby.' },
        { text: 'Home visits.' },
      ],
      stack: ['Mobile app', 'Web', 'Marketplace'],
      fig: 'A walk, from booking to route',
    },
    {
      name: 'Software quality',
      kind: 'Experience · QA',
      kicker: 'EXPERIENCE',
      when: '2024 — 2026',
      title: 'Quality, end to end.',
      sub: 'Manual and automated QA under Scrum',
      body:
        'Functional, integration, regression and stress testing; REST APIs validated with Postman and defects tracked in Jira.',
      items: [
        {
          head: 'QA Analyst · Devlync Tech Company',
          logo: 'devlync',
          meta: 'APR – MAY 2026',
          text: 'Led the full QA cycle: test design, environments, execution and defect closure.',
        },
        {
          head: 'QA Analyst · Tecnologías Informáticas Roots',
          logo: 'roots',
          meta: 'JAN 2025 – MAR 2026',
          text: 'Manual, functional, integration and automated testing strategies.',
        },
        {
          head: 'Programming Instructor · UGB',
          meta: 'APR – JUN 2024',
          text: 'Taught programming logic and software development.',
        },
      ],
      stack: ['Selenium', 'Playwright', 'Cypress', 'JMeter', 'Postman', 'Jira'],
      fig: 'A test run, defect included',
    },
  ],
  skills: {
    name: 'Skills and education',
    title: 'Skills',
    kicker: 'TOOLBOX',
    groups: [
      { head: 'Development', text: 'React, Vite, Tailwind CSS, Node.js, Firebase (Auth and Firestore)' },
      { head: 'Quality (QA)', text: 'Functional, integration, regression, unit and stress testing' },
      { head: 'Automation', text: 'Selenium, Playwright, Cypress, Vitest' },
      { head: 'APIs and data', text: 'Postman for REST APIs, PostgreSQL (SQL), Firestore' },
      { head: 'Workflow', text: 'Git, GitHub Actions, Vercel, Jira, Azure DevOps, Chrome DevTools' },
      { head: 'Languages and methods', text: 'JavaScript, Python, PHP · Scrum, Kanban, waterfall' },
    ],
  },
  education: {
    title: 'Education',
    kicker: 'STUDIES AND CERTIFICATIONS',
    studies: [
      {
        head: 'Computer Systems and Network Engineering',
        meta: '5TH YEAR · IN PROGRESS',
        text: 'Universidad Gerardo Barrios',
      },
      {
        head: 'Software Quality Assurance and Test Automation',
        meta: '2025',
        text: 'Escuela Superior de Innovación y Tecnología',
      },
    ],
    certsLabel: 'CERTIFICATIONS',
    certs: [
      { meta: 'MAY 2025', text: 'QA Testing: Methodologies for Managing Software Quality Assurance' },
      { meta: 'DEC 2024', text: 'Web Development Training: HTML and CSS' },
    ],
    langsLabel: 'LANGUAGES',
    langs: [
      { head: 'Spanish', text: 'Native' },
      { head: 'English', text: 'B1 · Academia Europea' },
    ],
  },
  contact: {
    name: 'Contact',
    kicker: 'CONTACT',
    title: "Let's talk.",
    body: 'Available for software development and quality assurance work.',
    emailLabel: 'EMAIL',
    linkedinLabel: 'LINKEDIN',
    locationLabel: 'LOCATION',
    location: 'El Salvador',
  },
  back: { thanks: ["Let's build something", 'and test it.'], sign: 'DROP ME A LINE' },
  terminal: [
    ['whoami', 'edwin villalta · software developer & qa analyst'],
    ['cat now.txt', 'institutional web app for MINEDUCYT'],
    ['stack --top', 'react · node.js · firebase · postgresql'],
    ['qa --tools', 'selenium · playwright · cypress · jmeter · postman'],
    ['studies', 'computer systems & network engineering · 5th year'],
  ],
  viz: {
    scan: 'SCAN ME',
    shortLink: 'SHORT LINK',
    scans: 'SCANS',
    week: 'LAST 12 WEEKS',
    invoice: 'INVOICE',
    item: 'ITEM',
    qty: 'QTY',
    amount: 'AMOUNT',
    subtotal: 'Subtotal',
    tax: 'VAT 13%',
    total: 'Total',
    sent: 'SENT',
    stock: 'INVENTORY',
    p1: 'HDMI cable 2 m',
    p2: 'Mechanical keyboard',
    p3: '24" monitor',
    p4: 'Wireless mouse',
    lesson: 'LESSON 12',
    progress: 'PROGRESS',
    streak: 'WEEKLY STREAK',
    tap: 'tap to flip',
    candidates: 'CANDIDATES',
    match: 'MATCH',
    chain: 'BLOCKCHAIN',
    ai: 'AI',
    walk: 'Walk in progress',
    walker: 'with a sitter nearby',
    s1: 'Boarding',
    s2: 'Walks',
    s3: 'Day care',
    s4: 'Visits',
    suite: 'regression suite',
    passed: 'PASSED',
    bug: 'defect filed in Jira',
    fixed: 'fixed · re-running',
    t1: 'sign in with Google',
    t2: 'create a QR step by step',
    t3: 'customise frame and logo',
    t4: 'API · POST /links',
    t5: 'export to PNG and SVG',
    t6: 'role-based access control',
    t7: 'statistics panel',
  },
};

export const CONTENT: Record<Lang, Content> = { es, en };

/** The platforms shown as a row of logos on the profile page: logo file and the name to fall back on. */
export const PLATFORMS: [string, string][] = [
  ['qr-suite', 'QR Suite'],
  ['electrodte', 'ElectroDTE'],
  ['direct-english', 'Direct English'],
  ['magnetohr', 'MagnetoHR'],
  ['evaapp', 'EvaApp'],
];

/** Entries of the contents page, in book order; `spread` is where each one opens. */
export function tocEntries(c: Content): { name: string; kind: string; spread: number }[] {
  return [
    { name: c.profile.name, kind: c.profile.kind, spread: 1 },
    ...c.cases.map((k, i) => ({ name: k.name, kind: k.kind, spread: 2 + i })),
    { name: c.skills.name, kind: c.education.title, spread: 8 },
    { name: c.contact.name, kind: c.contact.location, spread: 9 },
  ];
}
