export const personalDataEs = {
  name: "Aníbal Álvarez",
  title: "Ingeniero Civil en Informática | Frontend Developer",
  location: "Chile",
  contacts: [
    { type: "email", value: "anibal.alvarezg@gmail.com" },
    { type: "linkedin", value: "linkedin.com/in/anibalalvarezg" },
    { type: "github", value: "github.com/anibalalvarezg" },
  ],
  summary: [
    "Desarrollador frontend con background en data engineering. Especializado en construir aplicaciones SaaS escalables, sistemas de scraping distribuidos y dashboards en tiempo real.",
    "Diplomado en Data Science e IA (2025). Apasionado por la innovación, la mejora continua y el trabajo en equipos multidisciplinarios.",
  ],
};

export const professionalExperienceEs = [
  {
    company: "MyHotel",
    role: "Frontend Developer",
    period: "Julio 2021 - Actualidad",
    stack: ["Angular 15+", "TypeScript", "TailwindCSS", "NGXS", "Python", "Scrapy", "Redis", "SQS", "AWS", "Docker"],
    descriptions: [
      "Desarrollo e implementación de nuevas funcionalidades en Angular 15+, utilizando TailwindCSS para el diseño responsivo y NGXS para la gestión eficiente del estado de la aplicación.",
      "Creación de un sistema de web scraping automatizado con Python, Scrapy, Redis, SQS y uso de proxies para recolectar y estructurar opiniones de huéspedes desde plataformas de agencias de viaje online.",
      "Despliegue de aplicaciones en entornos de producción mediante contenedores Docker sobre AWS (ECS/ECR), garantizando escalabilidad, portabilidad y consistencia en los entornos."
    ]
  },
  {
    company: "MiningTag",
    role: "Ingeniero de Sistemas",
    period: "Septiembre 2020 - Junio 2021",
    stack: ["Angular 11+", "WebSockets", "RxJS", "Bootstrap", "SCSS"],
    descriptions: [
      "Desarrollo de módulos frontend en Angular 11+, con estilos en Bootstrap y SCSS, enfocados en la escalabilidad y reutilización de componentes dentro de un monorepo compartido entre dos proyectos.",
      "Implementación de dashboards interactivos y generación de reportes dinámicos en tiempo real, integrando datos desde múltiples servicios mediante el uso de WebSockets para actualizaciones en vivo.",
      "Mantenimiento y soporte de aplicaciones en producción, incluyendo la corrección de errores, optimización de rendimiento y mejoras continuas."
    ]
  },
  {
    company: "Readiness IT",
    role: "Analista de Software",
    period: "Abril 2019 - Septiembre 2020",
    stack: ["Angular 8+", "Bootstrap", "HTML/SCSS", "Node.js", "Ericsson EOC"],
    descriptions: [
      "Desarrollo con Angular 8+, Bootstrap 4 y HTML/SCSS, integrando funcionalidades de gestión de órdenes a través de Ericsson Order Care (EOC).",
      "Desarrollo y mantenimiento de un BFF (Backend for Frontend), optimizando la comunicación entre el frontend y los servicios backend, y facilitando una arquitectura escalable y desacoplada.",
      "Integración y trabajo colaborativo mediante herramientas como Jira, Confluence y metodologías ágiles (Scrum/Kanban)."
    ]
  }
];

export const educationDataEs = [
  {
    institution: "Pontificia Universidad Católica de Valparaíso",
    degree: "Diplomado Data Science, Inteligencia Artificial",
    period: "2025",
    description: "Machine Learning, Inteligencia Artificial, Deep Learning (VERSIÓN 24)"
  },
  {
    institution: "Pontificia Universidad Católica de Valparaíso",
    degree: "Pregrado, Ingeniería Civil Informática",
    period: "2013 - 2018",
    description: ""
  }
];

export const projectsDataEs = [
  {
    id: "myhotel-scraping",
    title: "MyHotel Scraping Engine",
    description: "Sistema automatizado de web scraping que recolecta y estructura opiniones de huéspedes desde 12+ plataformas OTAs en tiempo real. Procesa +50,000 reviews/día usando proxies rotativos y colas AWS SQS.",
    stack: ["Python", "Scrapy", "Redis", "SQS", "AWS", "Docker"],
    icon: "scraping",
    highlights: ["50,000+ reviews/día", "12+ plataformas OTAs", "Proxies rotativos"],
    link: "https://github.com/anibalalvarezg"
  },
  {
    id: "miningtag-dashboards",
    title: "MiningTag Dashboards",
    description: "Dashboards interactivos en tiempo real para monitoreo de flotas mineras. Monorepo compartido con componentes reutilizables y actualización vía WebSockets.",
    stack: ["Angular 11+", "WebSockets", "RxJS", "Bootstrap", "SCSS"],
    icon: "dashboard",
    highlights: ["Tiempo real", "WebSockets", "Monorepo"],
    link: "https://github.com/anibalalvarezg"
  },
  {
    id: "readiness-bff",
    title: "Readiness IT BFF",
    description: "Backend for Frontend optimizando la comunicación entre aplicaciones Angular y servicios legacy de telecomunicaciones. Arquitectura desacoplada y escalable.",
    stack: ["Angular 8+", "Node.js", "Ericsson EOC", "Bootstrap"],
    icon: "architecture",
    highlights: ["Arquitectura desacoplada", "Escalable", "Ericsson EOC"],
    link: "https://github.com/anibalalvarezg"
  }
];

export const interestAreasEs = ["Desarrollo Web", "Ciencia de Datos", "Inteligencia Artificial"];

export const skillsTyping = [
  "Angular",
  "TypeScript",
  "Python",
  "Scrapy",
  "Redis",
  "AWS",
  "Docker",
  "WebSockets",
  "NGXS",
  "TailwindCSS",
];

export const publicationsDataEs = [
  {
    title: "A VNS-Based Matheuristic to Solve the Districting Problem in Bicycle-Sharing Systems",
    authors: "Guillermo Cabrera-Guerrero, Aníbal Álvarez, Joaquín Vásquez, Lucas Villavicencio",
    type: "Artículo",
    date: "Nov 2022",
    venue: "Mathematics",
    link: "https://www.researchgate.net/publication/365239150_A_VNS-Based_Matheuristic_to_Solve_the_Districting_Problem_in_Bicycle-Sharing_Systems"
  },
  {
    title: "A hybrid VNS and Mathematical Programming Algorithm for a Public Bicycles-Sharing System",
    authors: "Guillermo Cabrera-Guerrero, Pablo Maya, Aníbal Álvarez",
    type: "Conferencia",
    date: "Jul 2019",
    venue: "",
    link: "https://www.researchgate.net/publication/334770775_A_hybrid_VNS_and_Mathematical_Programming_Algorithm_for_a_Public_Bicycles-Sharing_System"
  }
];

export const skillsDataEs = {
  title: "Tech Stack",
  categories: [
    {
      id: "frontend",
      name: "Frontend",
      skills: ["Angular", "TypeScript", "TailwindCSS", "WebSockets"]
    },
    {
      id: "backend",
      name: "Backend",
      skills: ["Python", "Scrapy", "Redis", "Node.js"]
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      skills: ["AWS", "Docker", "SQS", "CI/CD"]
    },
    {
      id: "data",
      name: "Data & Herramientas",
      skills: ["PostgreSQL", "MongoDB", "Git", "Jira"]
    }
  ],
  otherTitle: "Otras tecnologías",
  other: [] as string[]
};
