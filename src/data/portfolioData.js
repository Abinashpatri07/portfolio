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
  "Automation-first thinking",
  "Reliable, maintainable architecture",
  "Security and scalability by design",
];

export const heroStats = [
  { label: "Core Focus", value: "Full Stack & Real-Time" },
  { label: "Specialization", value: "Scalable Architecture" },
  { label: "Engineering", value: "Clean, Maintainable Code" },
];

export const expertiseData = [
  {
    id: "01",
    title: "Frontend & Web Engineering",
    iconName: "Code",
    description: "Building responsive, accessible, and performant web interfaces with reusable components, efficient state management, and seamless integration with backend services.",
    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "State Management",
      "API Integration",
      "Performance Optimization"
    ]
  },
  {
    id: "02",
    title: "Backend & System Engineering",
    iconName: "Server",
    description: "Designing secure APIs, automated business workflows, and scalable backend services that connect applications, data, and enterprise operations.",
    tags: [
      "Node.js",
      "Express.js",
      "Hapi.js",
      "REST APIs",
      "Microservices",
      "JWT",
      "Authentication",
      "API Validation",
      "BullMQ",
      "Redis"
    ]
  },
  {
    id: "03",
    title: "Database & Data Architecture",
    iconName: "Database",
    description: "Designing reliable data models and centralized information systems, including cross-product customer profiles, unified activity histories, and Single Source of Truth architectures.",
    tags: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "SQL",
      "Database Design",
      "Data Modeling",
      "Query Optimization",
      "Indexing",
      "Transactions",
      "SSOT"
    ]
  },
  {
    id: "04",
    title: "Cross-Platform Applications",
    iconName: "Smartphone",
    description: "Developing connected application experiences across web, mobile, desktop, and smart TV platforms, with consistent interfaces and integrated backend services.",
    tags: [
      "Web Applications",
      "Mobile Apps",
      "Android",
      "iOS",
      "Desktop Apps",
      "Windows",
      "macOS",
      "Cross-Platform UI",
      "API Integration"
    ]
  },
  {
    id: "05",
    title: "Real-Time & Communication Systems",
    iconName: "Radio",
    description: "Engineering event-driven applications, real-time data synchronization, and integrated voice communication between browser applications, physical devices, and enterprise systems.",
    tags: [
      "WebSockets",
      "Socket.IO",
      "Real-Time Sync",
      "Asterisk",
      "Asterisk AMI",
      "WebRTC",
      "SIP",
      "VoIP",
      "Device Integration",
      "ERP Integration"
    ]
  },
  {
    id: "06",
    title: "AI/ML & Data Engineering",
    iconName: "Cpu",
    description: "Building data annotation tools and model training workflows, integrating AI model services with mobile applications, and applying privacy-aware data handling where required.",
    tags: [
      "AI/ML",
      "AI Integration",
      "Model Training",
      "Training Pipelines",
      "Data Annotation",
      "Dataset Preparation",
      "Mobile AI Integration",
      "PII Protection",
      "RBAC",
      "ABAC"
    ]
  },
  {
    id: "07",
    title: "Cloud & DevOps",
    iconName: "Cloud",
    description: "Managing cloud infrastructure, application deployment, development environments, and automated delivery workflows for dependable software operations.",
    tags: [
      "AWS",
      "Cloud Infrastructure",
      "CI/CD",
      "Application Deployment",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "Monitoring"
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
    description: "A secure, end-to-end background verification (BGV) management platform built for automated candidate screening, identity verification, document compliance workflows, and real-time status tracking for enterprise human resource teams.",
    stack: ["React", "Node.js", "REST APIs", "Document Verification", "RBAC", "Tailwind CSS"],
    features: [
      "End-to-end BGV candidate onboarding and verification workflows",
      "Automated document validation, identity checks, and fraud screening",
      "Enterprise multi-role permissions (Admin, HR, Verification Specialists)",
      "Real-time verification progress tracking and status dashboards",
      "Audit-ready verification reports with high-grade data protection"
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
