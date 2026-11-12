export const personalInfo = {
  name: "Abinash Patri",
  brand: "abinash",
  role: "Full Stack Developer & Software Engineer",
  shortRole: "Full Stack Developer",
  email: "abinashpatri.dev@gmail.com",
  phone: "+91 98765 43210",
  location: "India",
  availableForWork: true,
  github: "https://github.com/Abinashpatri",
  linkedin: "https://linkedin.com/in/abinashpatri",
  twitter: "https://twitter.com/Abinashpatri",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
];

export const principles = [
  "Enterprise-grade solution architecture",
  "Business-focused technology engineering",
  "Scalable, secure and reliable systems",
];

export const heroStats = [
  { label: "Core Focus", value: "Full Stack & Real-Time" },
  { label: "Specialization", value: "Scalable Architecture" },
  { label: "Engineering", value: "Clean, Maintainable Code" },
];

export const expertiseData = [
  {
    id: "01",
    title: "Frontend Development",
    tagline: "Crafting intuitive experiences. Engineering seamless interfaces.",
    iconName: "Code",
    description: "Building responsive, accessible and high-performance user interfaces that simplify complex workflows. Creating scalable frontend architectures with reusable components, efficient state management and seamless backend integration.",
    tags: [
      "React.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "State Management",
      "UI Component Architecture"
    ]
  },
  {
    id: "02",
    title: "Backend Engineering",
    tagline: "Powering applications with robust engineering.",
    iconName: "Server",
    description: "Developing secure, scalable and high-performance backend systems that power enterprise applications. Engineering business logic, API services, authentication mechanisms and automated workflows designed for reliability, maintainability and performance.",
    tags: [
      "Node.js",
      "Express.js",
      "Python",
      ".NET",
      "Authentication & Authorization",
      "Business Logic Engineering",
      "Background Processing"
    ]
  },
  {
    id: "03",
    title: "Database & Data Architecture",
    tagline: "Structuring data. Enabling intelligent decisions.",
    iconName: "Database",
    description: "Designing efficient database architectures and data models that ensure data integrity, consistency and performance. Building reliable data layers with optimized queries, structured relationships and scalable data management strategies across relational and non-relational databases.",
    tags: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "SQL Server",
      "Oracle Database",
      "Database Design",
      "Data Modeling",
      "Query Optimization",
      "Indexing & Transactions",
      "Data Integrity & Management"
    ]
  },
  {
    id: "04",
    title: "API & Enterprise Integration",
    tagline: "Connecting systems. Enabling seamless operations.",
    iconName: "Network",
    description: "Engineering secure and reliable integration ecosystems that connect enterprise applications, third-party platforms and external services. Enabling seamless data exchange, interoperability and automated business processes across connected systems.",
    tags: [
      "REST API",
      "SOAP API",
      "Webhooks",
      "RabbitMQ",
      "Database Connectors",
      "SMTP Integration",
      "ESB Integration",
      "System Integration"
    ]
  },
  {
    id: "05",
    title: "AI & Intelligent Automation",
    tagline: "Turning intelligence into practical business value.",
    iconName: "Bot",
    description: "Integrating artificial intelligence and intelligent automation into business applications to streamline operations, improve decision-making and eliminate repetitive processes. Developing AI-enabled workflows and context-aware solutions that solve real-world business challenges.",
    tags: [
      "AI & LLM Integration",
      "Agentic AI",
      "RAG",
      "AI-Powered Applications",
      "Workflow Automation",
      "Prompt Engineering",
      "AI API Integration"
    ]
  },
  {
    id: "06",
    title: "Cloud & DevOps",
    tagline: "Building secure foundations. Delivering reliable operations.",
    iconName: "Cloud",
    description: "Designing and managing cloud infrastructure and deployment environments that support application scalability, security and operational reliability. Implementing containerization, deployment automation, infrastructure monitoring and continuous delivery practices.",
    tags: [
      "AWS",
      "VPS",
      "Docker",
      "CI/CD",
      "Cloud Infrastructure",
      "Linux Administration",
      "Git & GitHub",
      "Application Deployment",
      "Infrastructure Monitoring",
      "Infrastructure Security"
    ]
  },
  {
    id: "07",
    title: "Solution Architecture",
    tagline: "Architecting for scale. Engineering for the future.",
    iconName: "Layers",
    description: "Translating complex business requirements into scalable, secure and maintainable technology architectures. Defining architectural patterns, technology strategies and system designs that align technical decisions with business objectives and long-term growth.",
    tags: [
      "System Design",
      "Solution Architecture",
      "Enterprise Architecture",
      "Microservices Architecture",
      "Modular Monolith",
      "Architecture Patterns",
      "Scalability & Resilience",
      "Technology Stack Strategy"
    ]
  },
  {
    id: "08",
    title: "Enterprise Platforms",
    tagline: "Digitizing operations. Transforming business processes.",
    iconName: "Building2",
    description: "Designing and developing enterprise-grade business platforms that streamline operations, automate workflows and improve organizational efficiency. Delivering integrated applications tailored to complex business processes, industry requirements and evolving operational needs.",
    tags: [
      "ERP",
      "CRM",
      "Workflow Management Systems",
      "Enterprise Applications",
      "Business Process Automation",
      "Operations Management",
      "Application Integration",
      "Industry Solutions"
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "Background Verification Platform",
    category: "Enterprise Web",
    platformLabel: "Enterprise BGV Platform",
    visualVariant: "hedge-verify",
    description: "A secure, end-to-end background verification (BGV) management platform built with React, Tailwind CSS, Node.js, Express.js, and MySQL. Features automated candidate screening, document compliance workflows, automated CI/CD with GitHub Actions & Docker, AWS cloud hosting, and real-time observability with Prometheus & Grafana.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Grafana",
      "Prometheus"
    ],
    features: [
      "End-to-end candidate onboarding and automated identity validation workflows",
      "Node.js & Express.js backend services with MySQL relational data architecture",
      "Automated CI/CD pipeline using GitHub Actions and Docker containerization",
      "High-availability cloud deployment on Amazon Web Services (AWS)",
      "Real-time monitoring and observability dashboards with Prometheus & Grafana",
      "Enterprise multi-role permissions (Admin, HR, Verification Specialists) and audit reporting"
    ],
    liveUrl: "https://bgv.dqnex.online/",
    displayUrl: "bgv.dqnex.online"
  },
  {
    id: "02",
    title: "Corrugation Packaging ERP & Order Management",
    category: "Industrial ERP",
    platformLabel: "Industrial Packaging ERP",
    visualVariant: "corrugation",
    description: "A specialized manufacturing and order management ERP system engineered for the corrugated box and packaging industry. Handles multi-ply box specifications, open purchase orders, paper reel inventory, and real-time dispatch schedules.",
    stack: ["React", "JavaScript", "Order Management", "Inventory Control", "ERP Systems", "Tailwind CSS"],
    features: [
      "Industrial purchase order workflow tracking and dispatch pipelines",
      "Custom carton specification configurator (3-Ply, 5-Ply, RSC Mailers)",
      "Raw paper reel stock and production material inventory telemetry",
      "Automated pricing calculation, bursting strength, and GSM sizing",
      "Centralized production scheduling with live operational status"
    ],
    liveUrl: "https://corrugation-azure.vercel.app/",
    displayUrl: "corrugation-azure.vercel.app"
  },
  {
    id: "03",
    title: "Anjali Infra — Infrastructure & Engineering Solutions",
    category: "Corporate Web",
    platformLabel: "Infrastructure Web Portal",
    visualVariant: "anjali-infra",
    description: "A modern, high-performance web portal built for a prominent infrastructure development enterprise specializing in high-voltage electrical installations, substations, civil engineering, and industrial construction across Odisha & Andhra Pradesh.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Modern UI/UX", "Responsive Design", "Vercel"],
    features: [
      "Interactive showcase of heavy civil, industrial, and substation projects",
      "Comprehensive service portfolio (33/11kV substations, transmission lines)",
      "Client tender inquiries and streamlined corporate contact workflows",
      "Fluid, mobile-optimized responsive layout with fast load performance",
      "Professional corporate branding reflecting MSME and GST compliance"
    ],
    liveUrl: "https://anjali-infra.vercel.app/",
    displayUrl: "anjali-infra.vercel.app"
  },
  {
    id: "04",
    title: "Plant Machine ERP & Production Telemetry",
    category: "Industrial ERP",
    platformLabel: "Plant Machine Telemetry",
    visualVariant: "erp-machine",
    description: "An industrial IoT & machine monitoring ERP module deployed across 24 factory machines. Tracks real-time machine utilization, Overall Equipment Effectiveness (OEE at 82.6%), live breakdown alerts, active maintenance schedules, and sales order fulfillment across production lines.",
    stack: ["React", "JavaScript", "Industrial IoT", "OEE Telemetry", "Machine Monitoring", "Tailwind CSS"],
    features: [
      "Real-time machine utilization tracking (87.3% utilization across 24 plant machines)",
      "Live operational telemetry across Rotary Die Cutters, Slotters, and Corrugators",
      "Overall Equipment Effectiveness (OEE) metrics and scheduled maintenance logs",
      "Production order status tracking (Havells, Local Distributors, Custom Packaging)",
      "Breakdown alerts, operator shift logs, and instant downtime notifications"
    ],
    liveUrl: "https://erp-system-mauve-gamma.vercel.app/machine",
    displayUrl: "erp-system-mauve-gamma.vercel.app/machine"
  },
  {
    id: "05",
    title: "Referral & Coupon Code Growth Platform",
    category: "Fintech & Marketing",
    platformLabel: "Growth & Coupon Engine",
    visualVariant: "referral-coupon",
    description: "A high-conversion customer acquisition and discount management platform engineered for referral programs and coupon campaigns. Features dynamic code generation, tiered promotional discounts (Basic, Standard, Premium), redemption analytics, and referral attribution tracking.",
    stack: ["React", "Vite", "Recharts", "Marketing Analytics", "REST APIs", "Tailwind CSS"],
    features: [
      "Dynamic referral link generation and unique voucher coupon code issuance",
      "Yearly & monthly comparative analytics (Referral vs Coupon code redemptions)",
      "Multi-tiered discount structures (Basic 10%, Standard 20%, Premium 30%, Gift Vouchers)",
      "Real-time referral performance dashboards, conversion funnel telemetry, and anti-fraud checks",
      "Fluid responsive user interface with instant one-click code copy and sharing"
    ],
    liveUrl: "https://referalcouponcodefrontend.vercel.app/",
    displayUrl: "referalcouponcodefrontend.vercel.app"
  }
];

export const projectFilterCategories = [
  "All",
  "Enterprise Web",
  "Industrial ERP",
  "Corporate Web",
  "Fintech & Marketing"
];

export const servicesData = [
  {
    title: "Full Stack Applications",
    description: "End-to-end web applications that combine intuitive interfaces, robust backend services, integrated databases, authentication, and automated business workflows."
  },
  {
    title: "Backend Systems & Automation",
    description: "Custom APIs, microservices, workflow automation, background processing, and integrations designed to simplify complex business operations."
  },
  {
    title: "Real-Time & Communication Systems",
    description: "Real-time applications, synchronized data flows, event-driven systems, and integrated communication solutions connecting web applications, enterprise platforms, and physical devices."
  },
  {
    title: "Cross-Platform Applications",
    description: "Connected experiences across web, mobile, desktop, and smart TV applications, designed around platform-specific interactions and shared backend services."
  },
  {
    title: "AI Integration & Data Workflows",
    description: "Integration of AI model services into applications, custom data annotation tooling, dataset preparation, model training pipelines, and privacy-aware information handling."
  },
  {
    title: "Cloud & Deployment",
    description: "Cloud infrastructure, environment configuration, application deployment, CI/CD workflows, and operational monitoring for dependable software systems."
  }
];

export const approachSteps = [
  {
    title: "Understand",
    description: "Understand the problem, users, business workflows, technical constraints, and long-term goals before defining the solution."
  },
  {
    title: "Architect",
    description: "Design the application's structure, data models, service boundaries, integrations, and security considerations with maintainability in mind."
  },
  {
    title: "Build",
    description: "Develop connected frontend, backend, and supporting components using technologies suited to the requirements and operating environment."
  },
  {
    title: "Refine",
    description: "Test, review, optimize, and improve reliability, performance, usability, and operational behavior through iteration."
  }
];

export const contactServices = [
  "Web application",
  "Backend / API",
  "Automation",
  "AI integration",
  "Mobile / cross-platform app",
  "Cloud / deployment",
  "Other"
];

export const budgetOptions = [
  "Under ₹50,000",
  "₹50,000–₹1 lakh",
  "₹1–₹3 lakh",
  "₹3–₹5 lakh",
  "₹5 lakh+",
  "Not sure yet"
];

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible / exploring"
];
