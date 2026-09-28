// ─────────────────────────────────────────────────────────────────────────
// SITE DATA
// This is the ONLY file most people editing this site need to touch.
// Update the values below with your real details, and every page of the
// site updates automatically.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  brandName: "VU Services",
  tagline: "VU Academic & Project Partners",
  domain: "https://vuservices.online",

  // Used by SEO.jsx as the fallback <title> / meta description whenever a
  // page doesn't set its own (and as the base index.html values).
  defaultTitle: "VU Services — VU Academic & Project Partners",
  defaultDescription:
    "Assignments, GDBs, quizzes, LMS handling, final year projects, programming and AI/ML help for Virtual University students — delivered on time by fellow VU students.",

  // WhatsApp number in international format, digits only (no "+", spaces or dashes).
  // Example for Pakistan: country code 92 + number without the leading 0.
  whatsappNumber: "923001234567",

  // Prefilled message that opens automatically in the WhatsApp chat.
  whatsappMessage:
    "Hi! I found your portfolio and I'd like to discuss my VU project/assignment.",

  email: "muhammadzohaib4042@gmail.com",
};

// ─────────────────────────────────────────────────────────────────────────
// PRIMARY NAVIGATION — used by Navbar.jsx and Footer.jsx
// ─────────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Final Viva Prep", to: "/viva-preparation" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

// ─────────────────────────────────────────────────────────────────────────
// PARTNERS
// Set "image" to a real photo path (e.g. "/partner1.jpg" placed in /public)
// once you have one. Leave it as null to show the initials placeholder.
//
// Leave "github" or "linkedin" as an empty string ("") to automatically
// HIDE that icon on the card — this is handled by PartnerCard.jsx, which
// only renders a social icon when the corresponding URL is truthy.
// ─────────────────────────────────────────────────────────────────────────

export const partners = [
  {
    id: "partner-1",
    name: "Musharib Ahmad Khan",
    semester: "BS Computer Science",
    bio: "I focus on backend architecture and database design. I've supervised 20+ VU final year projects end-to-end, from proposal defense to final viva.",
    image: null,
    initials: "MK",
    github: "",
    linkedin: "",
  },
  {
    id: "partner-2",
    name: "Muhammad Zohaib",
    semester: "4th Semester · BS Computer Science",
    bio: "I handle front-end development and LMS coordination — keeping GDBs, quizzes and assignment uploads on schedule so clients never miss a deadline.",
    image: "/zohab.jpeg",
    initials: "MZ",
    // Example of the conditional-rendering feature: this partner has no
    // LinkedIn link yet, so that icon will simply not appear on his card.
    github: "https://github.com/m-zohab/",
    linkedin: "",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// SERVICES
// "icon" is a lucide-react icon name, mapped to a component in
// components/ServiceCard.jsx (kept separate so this file stays plain data).
// ─────────────────────────────────────────────────────────────────────────

export const services = [
  {
    id: "assignments",
    icon: "FileText",
    title: "Assignments",
    description:
      "Accurate, well-researched assignment solutions across CS, SE and IT courses — always ahead of your VU deadline.",
    features: [
      "Subject-matter accuracy, per course outline",
      "Delivered with time to review before submission",
      "Plagiarism-checked, original work",
    ],
  },
  {
    id: "gdb",
    icon: "MessagesSquare",
    title: "GDB",
    description:
      "Graded Discussion Board posts that actually engage with the topic — argued, referenced, and posted before the window closes.",
    features: [
      "On-topic, well-argued posts",
      "Posted within the GDB window",
      "Written in your own voice, not generic filler",
    ],
  },
  {
    id: "quiz-support",
    icon: "ClipboardCheck",
    title: "Quiz Support",
    description:
      "Focused prep and live support for graded quizzes, so you walk in ready instead of guessing from old slides.",
    features: [
      "Topic-wise revision before each quiz",
      "Practice questions from past papers",
      "Quick-reference notes you can actually use",
    ],
  },
  {
    id: "lms-support",
    icon: "LayoutDashboard",
    title: "LMS Support",
    description:
      "Complete VU LMS handling — assignment uploads, GDB participation, quiz attempts and deadline tracking — so nothing slips through.",
    features: [
      "End-to-end LMS activity handling",
      "Deadline tracking & reminders",
      "Screenshots/confirmation shared after each submission",
    ],
  },
  {
    id: "projects",
    icon: "GraduationCap",
    title: "Projects",
    description:
      "Final year project guidance from proposal to defense — SRS/SDS documentation, full-stack development and viva preparation.",
    features: [
      "Proposal & SRS/SDS documentation",
      "Full-stack development, with source code explained",
      "Progress reviewed against your supervisor's feedback",
    ],
  },
  {
    id: "programming",
    icon: "Code2",
    title: "Programming",
    description:
      "Hands-on help with programming assignments and labs — C/C++, Java, Python and web stacks — with the logic explained, not just handed over.",
    features: [
      "Working, tested code",
      "Line-by-line explanation on request",
      "Debugging help on your own code",
    ],
  },
  {
    id: "ai-ml",
    icon: "BrainCircuit",
    title: "AI / ML",
    description:
      "Machine learning assignments and FYP components — data preprocessing, model selection, training and evaluation, explained in plain terms.",
    features: [
      "Python, scikit-learn, TensorFlow/PyTorch",
      "Clean, reproducible notebooks",
      "Results explained for your report or viva",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO PROJECTS
// "category" powers the filter tabs on the Projects page.
// "type" is "image" or "video" — it only changes the placeholder icon shown
// on the thumbnail. Swap in a real <img> or <video> poster once you have
// real screenshots.
// ─────────────────────────────────────────────────────────────────────────

export const projectCategories = [
  "All",
  "Mobile Apps",
  "Web Development",
  "AI/ML",
  "Programming",
  "Databases",
];

export const projects = [
  {
    id: "project-1",
    title: "Online Bookstore Management System",
    description:
      "A VU FYP for a full-featured bookstore platform with an admin dashboard, order tracking and inventory management.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    category: "Web Development",
    type: "image",
  },
  {
    id: "project-2",
    title: "Hospital Management System",
    description:
      "Patient records, appointment scheduling and billing built as a desktop-style Java application with a MySQL backend.",
    tags: ["Java", "MySQL"],
    category: "Programming",
    type: "image",
  },
  {
    id: "project-3",
    title: "Student Attendance Tracker",
    description:
      "A real-time attendance dashboard for instructors, with live updates and exportable reports.",
    tags: ["React", "Firebase", "Tailwind"],
    category: "Web Development",
    type: "video",
  },
  {
    id: "project-4",
    title: "E-Learning Quiz Portal",
    description:
      "A timed quiz engine with auto-grading and a results dashboard, built for a private tutoring academy.",
    tags: ["Node.js", "MongoDB", "React"],
    category: "Web Development",
    type: "image",
  },
  {
    id: "project-5",
    title: "Inventory & Billing System",
    description:
      "A point-of-sale and stock management tool for a retail client, with barcode support and sales analytics.",
    tags: ["Laravel", "PHP", "MySQL"],
    category: "Databases",
    type: "image",
  },
  {
    id: "project-6",
    title: "AI-based Plagiarism Checker",
    description:
      "An NLP-driven tool that compares submitted text against a reference corpus and highlights similarity scores.",
    tags: ["Python", "Django", "scikit-learn"],
    category: "AI/ML",
    type: "video",
  },
  {
    id: "project-7",
    title: "Campus Companion App",
    description:
      "A cross-platform mobile app for VU students to track GDB and assignment deadlines, with push-notification reminders.",
    tags: ["Flutter", "Dart", "Firebase"],
    category: "Mobile Apps",
    type: "image",
  },
  {
    id: "project-8",
    title: "Library Catalogue & Fine Tracker",
    description:
      "A normalized relational database project for a university library, with overdue-fine calculation and an admin reporting dashboard.",
    tags: ["MySQL", "PHP", "phpMyAdmin"],
    category: "Databases",
    type: "image",
  },
  {
    id: "project-9",
    title: "Data Structures Visualizer",
    description:
      "A desktop tool that animates sorting and searching algorithms step-by-step, built to strengthen DSA fundamentals for a semester project.",
    tags: ["C++", "SFML"],
    category: "Programming",
    type: "video",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// FINAL VIVA PREPARATION
// ─────────────────────────────────────────────────────────────────────────

export const vivaPrep = {
  intro:
    "Your FYP is only as strong as your defense of it. We run you through a real mock viva — the same kind of questions your committee will ask — until you can explain every part of your own project with confidence.",
  included: [
    {
      title: "Mock viva sessions",
      description:
        "A live, one-on-one run-through where we question you the way your panel will, on your own project.",
    },
    {
      title: "Expected question bank",
      description:
        "A curated list of questions likely for your project's domain, tech stack and module design.",
    },
    {
      title: "Presentation & slide review",
      description:
        "We check your defense slides for clarity, flow and the points a panel actually looks for.",
    },
    {
      title: "Code walkthrough practice",
      description:
        "Practice explaining your own code and architecture out loud, so nothing catches you off guard.",
    },
    {
      title: "Confidence & delivery coaching",
      description:
        "Pacing, handling follow-up questions, and recovering smoothly if you blank on something.",
    },
  ],
  process: [
    {
      step: "Share your project",
      description:
        "Send us your report, slides and source code a few days before your scheduled defense.",
    },
    {
      step: "Mock viva session",
      description:
        "We question you live on your project — technical, conceptual and \"why did you choose this\" questions alike.",
    },
    {
      step: "Feedback & refinement",
      description:
        "You get direct feedback on weak spots, with a short list of what to revise before the real thing.",
    },
    {
      step: "Final walkthrough",
      description:
        "One last run-through close to your actual defense date, so it's fresh in your head.",
    },
  ],
};
