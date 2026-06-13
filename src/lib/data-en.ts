export const personalDataEn = {
  name: "Aníbal Álvarez",
  title: "Computer Engineer | Frontend Developer",
  location: "Chile",
  contacts: [
    { type: "email", value: "anibal.alvarezg@gmail.com" },
    { type: "linkedin", value: "linkedin.com/in/anibalalvarezg" },
    { type: "github", value: "github.com/anibalalvarezg" },
  ],
  summary: [
    "Frontend developer with a background in data engineering. Specialized in building scalable SaaS applications, distributed scraping systems, and real-time dashboards.",
    "Diploma in Data Science & AI (2025). Passionate about innovation, continuous improvement, and multidisciplinary teamwork.",
  ],
};

export const professionalExperienceEn = [
  {
    company: "MyHotel",
    role: "Frontend Developer",
    period: "July 2021 - Present",
    stack: ["Angular 15+", "TypeScript", "TailwindCSS", "NGXS", "Python", "Scrapy", "Redis", "SQS", "AWS", "Docker"],
    descriptions: [
      "Development and implementation of new features in Angular 15+, using TailwindCSS for responsive design and NGXS for efficient application state management.",
      "Creation of an automated web scraping system with Python, Scrapy, Redis, SQS and use of proxies to collect and structure guest reviews from online travel agency platforms.",
      "Deployment of applications in production environments through Docker containers on AWS (ECS/ECR), ensuring scalability, portability and consistency across environments."
    ]
  },
  {
    company: "MiningTag",
    role: "Systems Engineer",
    period: "September 2020 - June 2021",
    stack: ["Angular 11+", "WebSockets", "RxJS", "Bootstrap", "SCSS"],
    descriptions: [
      "Development of frontend modules in Angular 11+, with Bootstrap and SCSS styles, focused on scalability and component reusability within a monorepo shared between two projects.",
      "Implementation of interactive dashboards and dynamic real-time report generation, integrating data from multiple services using WebSockets for live updates.",
      "Maintenance and support of production applications, including bug fixes, performance optimization and continuous improvements."
    ]
  },
  {
    company: "Readiness IT",
    role: "Software Analyst",
    period: "April 2019 - September 2020",
    stack: ["Angular 8+", "Bootstrap", "HTML/SCSS", "Node.js", "Ericsson EOC"],
    descriptions: [
      "Development with Angular 8+, Bootstrap 4 and HTML/SCSS, integrating order management functionalities through Ericsson Order Care (EOC).",
      "Development and maintenance of a BFF (Backend for Frontend), optimizing communication between frontend and backend services, and facilitating a scalable and decoupled architecture.",
      "Integration and collaborative work through tools such as Jira, Confluence and agile methodologies (Scrum/Kanban)."
    ]
  }
];

export const educationDataEn = [
  {
    institution: "Pontifical Catholic University of Valparaíso",
    degree: "Diploma in Data Science, Artificial Intelligence",
    period: "2025",
    description: "Machine Learning, Artificial Intelligence, Deep Learning (VERSION 24)"
  },
  {
    institution: "Pontifical Catholic University of Valparaíso",
    degree: "Bachelor's Degree, Computer Engineering",
    period: "2013 - 2018",
    description: ""
  }
];

export const projectsDataEn = [
  {
    id: "myhotel-scraping",
    title: "MyHotel Scraping Engine",
    description: "Automated web scraping system that collects and structures guest reviews from 12+ OTA platforms in real time. Processes 50,000+ reviews/day using rotating proxies and AWS SQS queues.",
    stack: ["Python", "Scrapy", "Redis", "SQS", "AWS", "Docker"],
    icon: "scraping",
    highlights: ["50,000+ reviews/day", "12+ OTA platforms", "Rotating proxies"],
    link: "https://github.com/anibalalvarezg"
  },
  {
    id: "miningtag-dashboards",
    title: "MiningTag Dashboards",
    description: "Interactive real-time dashboards for mining fleet monitoring. Shared monorepo with reusable components and updates via WebSockets.",
    stack: ["Angular 11+", "WebSockets", "RxJS", "Bootstrap", "SCSS"],
    icon: "dashboard",
    highlights: ["Real-time", "WebSockets", "Monorepo"],
    link: "https://github.com/anibalalvarezg"
  },
  {
    id: "readiness-bff",
    title: "Readiness IT BFF",
    description: "Backend for Frontend optimizing communication between Angular applications and legacy telecommunications services. Decoupled and scalable architecture.",
    stack: ["Angular 8+", "Node.js", "Ericsson EOC", "Bootstrap"],
    icon: "architecture",
    highlights: ["Decoupled architecture", "Scalable", "Ericsson EOC"],
    link: "https://github.com/anibalalvarezg"
  }
];

export const interestAreasEn = ["Web Development", "Data Science", "Artificial Intelligence"];

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

export const publicationsDataEn = [
  {
    title: "A VNS-Based Matheuristic to Solve the Districting Problem in Bicycle-Sharing Systems",
    authors: "Guillermo Cabrera-Guerrero, Aníbal Álvarez, Joaquín Vásquez, Lucas Villavicencio",
    type: "Article",
    date: "Nov 2022",
    venue: "Mathematics",
    link: "https://www.researchgate.net/publication/365239150_A_VNS-Based_Matheuristic_to_Solve_the_Districting_Problem_in_Bicycle-Sharing_Systems"
  },
  {
    title: "A hybrid VNS and Mathematical Programming Algorithm for a Public Bicycles-Sharing System",
    authors: "Guillermo Cabrera-Guerrero, Pablo Maya, Aníbal Álvarez",
    type: "Conference Paper",
    date: "Jul 2019",
    venue: "",
    link: "https://www.researchgate.net/publication/334770775_A_hybrid_VNS_and_Mathematical_Programming_Algorithm_for_a_Public_Bicycles-Sharing_System"
  }
];

export const skillsDataEn = {
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
      name: "Data & Tools",
      skills: ["PostgreSQL", "MongoDB", "Git", "Jira"]
    }
  ],
  otherTitle: "Other technologies",
  other: [] as string[]
};
