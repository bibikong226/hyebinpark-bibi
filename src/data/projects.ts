export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  imageColor: string;
  role: string;
  duration: string;
  team: string;
  challenge: string;
  approach: string;
  solution: string;
  impact: string[];
}

export const projects: Project[] = [
  {
    id: "design-system",
    title: "Design System Architecture",
    description: "Building a scalable design system that unified product experience across 12 teams",
    category: "Systems Design",
    year: "2024",
    imageColor: "hsl(var(--puzzle-piece-1))",
    role: "Lead Product Designer",
    duration: "8 months",
    team: "3 designers, 4 engineers",
    challenge: "The organization had fragmented UI patterns across multiple products, leading to inconsistent user experiences and slower development cycles.",
    approach: "I led a cross-functional initiative to audit existing patterns, identify common components, and establish a governance model for the design system.",
    solution: "Created a comprehensive design system with 50+ components, detailed documentation, and a contribution framework that enabled teams to extend the system while maintaining consistency.",
    impact: [
      "Reduced design-to-development time by 40%",
      "Achieved 95% adoption across all product teams",
      "Decreased UI-related bugs by 60%",
    ],
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking Reimagined",
    description: "Redesigning the core banking experience for 2M+ users with accessibility at the forefront",
    category: "Product Design",
    year: "2024",
    imageColor: "hsl(var(--puzzle-piece-2))",
    role: "Senior Product Designer",
    duration: "6 months",
    team: "2 designers, 6 engineers, 1 PM",
    challenge: "Legacy mobile banking app had poor accessibility scores and complex navigation that frustrated users, especially those with disabilities.",
    approach: "Conducted extensive user research with accessibility-focused participants, mapped pain points, and prototyped solutions with continuous testing.",
    solution: "Delivered a completely redesigned app with WCAG 2.1 AA compliance, simplified navigation, and personalized dashboard that adapts to user preferences.",
    impact: [
      "Improved accessibility score from 45 to 92",
      "Increased daily active users by 35%",
      "Reduced support tickets by 50%",
    ],
  },
  {
    id: "saas-onboarding",
    title: "SaaS Onboarding Flow",
    description: "Transforming first-time user experience to drive activation and retention",
    category: "UX Strategy",
    year: "2023",
    imageColor: "hsl(var(--puzzle-piece-3))",
    role: "Product Designer",
    duration: "4 months",
    team: "1 designer, 3 engineers, 1 PM",
    challenge: "Only 23% of new signups completed onboarding, with most users dropping off during the initial setup process.",
    approach: "Analyzed user behavior data, conducted exit interviews, and mapped the ideal onboarding journey with progressive disclosure principles.",
    solution: "Created a personalized onboarding experience that adapts based on user role and goals, with contextual guidance and early wins that demonstrate value.",
    impact: [
      "Increased onboarding completion to 67%",
      "Improved 30-day retention by 45%",
      "Reduced time-to-value by 60%",
    ],
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Provider Portal",
    description: "Streamlining clinical workflows for healthcare professionals",
    category: "Enterprise UX",
    year: "2023",
    imageColor: "hsl(var(--puzzle-piece-4))",
    role: "UX Designer",
    duration: "10 months",
    team: "4 designers, 8 engineers, 2 PMs",
    challenge: "Healthcare providers spent excessive time on administrative tasks, reducing time available for patient care.",
    approach: "Embedded with clinical staff to understand workflows, identified automation opportunities, and designed solutions that fit into existing processes.",
    solution: "Built an integrated portal with smart scheduling, automated documentation, and AI-assisted patient summaries that reduced administrative burden.",
    impact: [
      "Saved 2 hours per provider per day",
      "Improved patient satisfaction scores by 28%",
      "Reduced documentation errors by 75%",
    ],
  },
];
