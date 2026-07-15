// ============================================================
// portfolioData.js — Centralized configuration for Shakti Singh Visen's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shakti Singh Visen",
  firstName: "Shakti",
  brandName: "Shakti Singh Visen",
  title: "Data Analyst & Web Developer",
  location: "Lucknow, UP, India",
  phone: "+91 9026293703",
  emails: {
    primary: "ssvisen12@gmail.com",
  },
  summary:
    "Results-driven Computer Science & Engineering graduate (B.Tech, 2026) specializing in data analytics, business intelligence, and building full-stack web applications. Proficient in Python (Pandas, NumPy), SQL, Power BI, Tableau, and the MERN stack.",
  resumeUrl: "/Shakti_Singh_Visen_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Shakti-singh-visen",
  linkedin: "https://www.linkedin.com/in/shakti-singh-visen-810939289",
};

export const heroContent = {
  greeting: "Hi, I'm Shakti Singh Visen",
  titleHighlight: "Data Analyst & Web Developer",
  subtitle:
    "I turn raw data into actionable insights and build scalable web applications that bring those insights to life.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Shakti_Singh_Visen_Resume.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shakti Singh Visen</span>. I turn data into meaningful insights and ideas into powerful web applications, passionate about solving real-world problems through analytics and modern development. With a strong foundation in Computer Science and hands-on experience in data wrangling, SQL querying, building interactive dashboards, and full-stack development, I bridge the gap between analytics and product creation.`,
  techStack: ["Python", "SQL", "Power BI", "Tableau", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Workflow",
  heading: "From Raw Data & Ideas to Finished Products",
  description:
    "I follow a structured, analytical, and highly technical approach to clean datasets, extract insights, and build responsive applications.",
  cards: [
    {
      number: "01",
      title: "Ingest & Clean",
      text: "Ingesting raw datasets, removing duplicates, and performing ETL workflows using Python and Pandas to establish clean data foundations.",
    },
    {
      number: "02",
      title: "Analyze & Query",
      text: "Writing optimized SQL queries (joins, window functions, cohort analysis) to query relational databases and uncover purchasing or performance trends.",
    },
    {
      number: "03",
      title: "Visualize & Report",
      text: "Designing interactive dashboards in Power BI and Tableau with advanced calculations (DAX) to deliver high-level KPIs and business intelligence.",
    },
    {
      number: "04",
      title: "Develop & Deploy",
      text: "Building fully responsive web portals or dashboards (MERN stack, tailwind) and deploying them to platforms like Vercel and Render.",
    },
  ],
  endText: "Insights & Apps Shipped!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Data Analytics & BI",
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 88 },
        { name: "Excel Dashboards", level: 90 },
        { name: "Pandas & NumPy", level: 85 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Exploratory Data Analysis", level: 88 }
      ]
    },
    {
      title: "Web Development Front-End",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript", level: 82 }
      ]
    },
    {
      title: "Web Development Back-End",
      skills: [
        { name: "Node.js & Express", level: 80 },
        { name: "Python (FastAPI / Flask)", level: 78 },
        { name: "REST APIs", level: 85 },
        { name: "MySQL / PostgreSQL", level: 88 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 88 },
        { name: "JavaScript", level: 82 },
        { name: "C++", level: 78 },
        { name: "Java", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 75 },
        { name: "Render & Vercel", level: 80 }
      ]
    }
  ]
};

// Placeholder for Content Creation (re-structured as Data & Analytics Highlights)
export const contentCreation = {
  badge: "Technical Writing",
  heading: "Analytics & Technical Content",
  description: "Simplifying complex concepts by documenting workflows, writing research reports, and building dashboards.",
  categories: [
    {
      title: "Technical Writing",
      description: "Writing documentation and reports on data models, clean ETL pipelines, and dashboard workflows.",
      stats: "Detailed Reports",
      icon: "✍️"
    },
    {
      title: "Interactive Dashboards",
      description: "Creating highly visual Power BI dashboards for e-commerce, sales, and retail behavior trends.",
      stats: "Production Dashboards",
      icon: "📊"
    },
    {
      title: "Open Source Projects",
      description: "Sharing analytics scripts, cohort queries, and full-stack repositories with the open-source community.",
      stats: "GitHub Repos",
      icon: "💻"
    },
    {
      title: "Data Storytelling",
      description: "Presenting metrics clearly to help stakeholders make data-driven decisions.",
      stats: "Presentations",
      icon: "💡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Google Developer Student Club (GDSC)",
    description: "Organised and managed technical events, workshops, and developer community activities at the college level.",
    role: "Event Coordinator",
    badge: "Community"
  },
  {
    title: "UTKARSH Annual Fest",
    description: "Coordinated sports events and logistics for the flagship annual college fest attended by 500+ students.",
    role: "Assistant Coordinator",
    badge: "Logistics"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "TechPuro",
    role: "Data Analyst Intern",
    duration: "Jan 2026 – May 2026",
    skills: ["Data Analysis", "Data Cleaning", "Report Generation", "SQL", "Excel", "Problem Solving"],
    tech: ["Excel", "SQL", "Power BI", "Data Cleaning Techniques"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data queries and development bugs into clean, modular steps." },
  { name: "Communication", icon: "💬", desc: "Translating technical data metrics into clear, actionable insights for business stakeholders." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working across developer communities and coordinating large-scale college summits." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new technical tools, frameworks, and data platforms." }
];

export const projects = [
  {
    id: "customer-shopping-behavior",
    number: "01",
    badge: "📊 Data Analytics & Web Dashboard",
    title: "Customer Shopping Behavior Analytics",
    description:
      "An end-to-end data analytics project designed to explore and map customer shopping behaviors. The project begins with a Python/Pandas-based ETL pipeline for data cleaning and duplicate removal, transitions to SQL cohort analysis (in MySQL/PostgreSQL) to uncover retention and purchasing trends, and culminates in a responsive web dashboard. The dashboard features dynamic, interactive visualizations (charts for gender-based revenue contribution, age groups, and seasonal ratings) alongside an interactive map tracking transaction densities and a web form powered by LocalStorage for logging new customer purchase events.",
    techTags: [
      "Python",
      "Pandas",
      "SQL (MySQL/PostgreSQL)",
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "Leaflet.js",
      "Jupyter Notebook"
    ],
    links: {
      github: "https://github.com/Shakti-singh-visen/customer_behavior_analysis",
      demo: "https://shakti-singh-visen.github.io/customer_behavior_analysis/",
    },
    isFlagship: true,
  },
  {
    id: "routemate",
    number: "02",
    badge: "🚗 Real-Time Matchmaking & Chat",
    title: "RouteMate",
    description:
      "A real-time commuter matchmaking platform that connects users traveling along similar paths for carpooling or companion travel. Users can register accounts, set up profiles, search for active route matches in real-time, and wait in a matchmaking lobby. Upon finding a suitable commuter match, the platform automatically spawns a shared real-time chat room. The backend utilizes WebSockets via Socket.io to push instantaneous matching and message events, backed by a structured REST API.",
    techTags: ["MongoDB", "ExpressJS", "React", "Node.js", "Socket.io", "Tailwind CSS", "JWT", "Vite"],
    links: {
      github: "https://github.com/Shakti-singh-visen/RouteMate",
      demo: "https://route-mate-mocha.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "sales-performance-dashboard",
    number: "03",
    badge: "📈 Business Intelligence & DAX",
    title: "Mobile Sales Performance Dashboard",
    description:
      "An interactive analytics console focused on analyzing mobile phone sales performance data. The dashboard processes bulk transactional databases to deliver high-level KPIs such as overall revenue, quantity of units sold, average transactional pricing, and customer feedback. It features multiple dynamic filters (mobile brand, payment type, timeline, and rating status), geographic revenue mapping, and advanced calculations utilizing DAX such as Month-to-Date (MTD) reporting and Same Period Last Year (SPLY) comparisons for year-over-year growth analytics.",
    techTags: ["Power BI Desktop", "Power Query", "DAX", "HTML", "CSS", "JavaScript", "Chart.js"],
    links: {
      github: "https://github.com/Shakti-singh-visen/sales-dashboard-powerbi",
      demo: "https://shakti-singh-visen.github.io/sales-dashboard-powerbi/",
    },
    isFlagship: false,
  },
  {
    id: "bookstore-app",
    number: "04",
    badge: "📚 E-Commerce Front-End",
    title: "Bookstore App",
    description:
      "A clean, modern online bookstore front-end application. It contains dynamic sections for course materials, free textbooks, login/signup forms, contact sheets, and a featured book carousel. The UI features responsive search filters, modular card layouts for showcasing books, and sleek transitions optimized for all screen sizes.",
    techTags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    links: {
      github: "https://github.com/Shakti-singh-visen/bookstoreApp",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      icon: "📊",
      verifyUrl: "https://learn.microsoft.com/en-us/users/shaktisinghvisen-3562/credentials/b165d8b1c7e7c747",
    },
    {
      name: "Data Analyst: Career Preparation",
      issuer: "IBM Skills Network",
      icon: "💼",
      verifyUrl: "https://cognitiveclass.ai/certificates/6e6194b1-5146-4f1b-8225-8c1453c7f123",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      icon: "📊",
      verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a0f37b2690ca441d93cc5fc_1780135961848_completion_certificate.pdf",
    },
    {
      name: "GenAI Powered Data Analytics",
      issuer: "Tata Group / Forage",
      icon: "🧠",
      verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a0f37b2690ca441d93cc5fc_1781167188884_completion_certificate.pdf",
    },
    {
      name: "Data Visualisation: Empowering Business",
      issuer: "Tata Group / Forage",
      icon: "👁️",
      verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6a0f37b2690ca441d93cc5fc_1780233789357_completion_certificate.pdf",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/shakti-singh-visen-810939289/details/certifications/",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Babu Banarasi Das Institute of Technology and Management, Lucknow",
  graduation: "2026",
};

export const footerContent = {
  taglines: [
    "Data Analytics & BI Dashboards",
    "Full Stack Web Development",
    "Python · SQL · React",
  ],
  credential: "B.Tech CSE Graduate · 2026",
  copyright: `© ${new Date().getFullYear()} Shakti Singh Visen | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

// Web3Forms Configuration (Fallback for silent AJAX emails)
// Get your free key at https://web3forms.com/
export const web3formsConfig = {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "68c806fa-3ee4-4a94-87b1-fc5e859b9723",
};
