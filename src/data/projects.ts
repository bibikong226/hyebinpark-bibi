import logoConcord from "@/assets/logo-concord.png";
import mockupConcord from "@/assets/mockup-concord.png";
import logoNurturly from "@/assets/logo-nurturly.png";
import mockupNurturly from "@/assets/mockup-nurturly.png";
import logoGm from "@/assets/logo-gm.png";
import mockupGm from "@/assets/mockup-gm.png";
import logoJstor from "@/assets/logo-jstor-new.png";
import mockupJstor from "@/assets/mockup-jstor.png";
import logoOpenoff from "@/assets/logo-openoff.png";
import mockupOpenoff from "@/assets/mockup-openoff.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  imageColor: string;
  accentColor: string;
  logo: string;
  mockup: string;
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
    id: "concord",
    title: "Concord",
    description: "A secure, high-speed OTC crypto trading and multi-wallet asset management platform for a $3.5M fintech startup",
    tags: ["Web3 Product Design", "Crypto UX", "B2B/B2C Platform"],
    highlights: [
      "🏆 Scaled from MVP to $3.5M valuation with product-led growth",
      "🧩 Unified complex crypto trades into one intuitive flow that serves both retail and institutional needs",
    ],
    imageColor: "hsl(350, 80%, 65%)",
    accentColor: "#BE123C",
    logo: logoConcord,
    mockup: mockupConcord,
    role: "Lead Product Designer",
    duration: "6 months",
    team: "2 designers, 4 engineers",
    challenge: "Complex OTC crypto trading workflows needed simplification for both retail and institutional users.",
    approach: "Conducted user research with crypto traders, mapped complex trading flows, and designed a unified experience.",
    solution: "Created an intuitive multi-wallet management platform with streamlined OTC trading capabilities.",
    impact: [
      "Scaled from MVP to $3.5M valuation",
      "Unified retail and institutional trading flows",
      "Achieved product-led growth",
    ],
  },
  {
    id: "nurturly",
    title: "Nurturly",
    description: "AI-driven platform that connects new moms to personalized resources and peer support",
    tags: ["AI Wellness", "Behavioral Health UX", "0→1 Platform Design"],
    highlights: [
      "🏆 Runner-up + People's Choice Award @ +Tech Innovation Jam",
      "🎁 $5,000 funding secured",
    ],
    imageColor: "hsl(350, 70%, 90%)",
    accentColor: "#F472B6",
    logo: logoNurturly,
    mockup: mockupNurturly,
    role: "Product Designer",
    duration: "3 months",
    team: "1 designer, 2 engineers",
    challenge: "New mothers struggle to find personalized support and resources during the postpartum period.",
    approach: "Researched behavioral health needs, designed AI-driven personalization, and created peer support features.",
    solution: "Built an AI-powered platform connecting new moms to tailored resources and community support.",
    impact: [
      "Won Runner-up + People's Choice Award",
      "Secured $5,000 in funding",
      "Created personalized support system",
    ],
  },
  {
    id: "gm",
    title: "General Motors",
    description: "UWB-powered infant monitoring system for Chevrolet, enabling predictive, sensor-driven safety for in-car parenting",
    tags: ["AutomotiveUX", "UWBTechnology", "PredictiveUX", "InfantSafety"],
    highlights: [
      "🔮 Shaped future product strategy aligned with GM's 2030 roadmap",
    ],
    imageColor: "hsl(220, 15%, 15%)",
    accentColor: "#0891B2",
    logo: logoGm,
    mockup: mockupGm,
    role: "UX Designer",
    duration: "4 months",
    team: "3 designers, 5 engineers",
    challenge: "Parents need better in-car safety solutions for monitoring infants during drives.",
    approach: "Explored UWB technology capabilities, mapped parenting needs, and designed predictive safety features.",
    solution: "Designed a sensor-driven infant monitoring system integrated into Chevrolet vehicles.",
    impact: [
      "Aligned with GM's 2030 product roadmap",
      "Enabled predictive safety features",
      "Advanced UWB technology adoption",
    ],
  },
  {
    id: "jstor",
    title: "JSTOR",
    description: "Improving JSTOR's AI chatbot UX for mobile research, citation, and accessible workflows",
    tags: ["EdTech", "AI UX", "Gen AI", "Cross-Device Design", "Conversational AI"],
    highlights: [
      "💡 Uncovered systemic UX gaps in JSTOR's Gen AI tool and shared with the product team",
      "🔍 Conducted heuristic + usability audit",
    ],
    imageColor: "hsl(35, 40%, 92%)",
    accentColor: "#059669",
    logo: logoJstor,
    mockup: mockupJstor,
    role: "UX Researcher",
    duration: "2 months",
    team: "2 researchers, 1 designer",
    challenge: "JSTOR's AI chatbot had usability issues affecting mobile research and citation workflows.",
    approach: "Conducted heuristic evaluation and usability testing to identify systemic UX gaps.",
    solution: "Delivered comprehensive audit findings and recommendations to the product team.",
    impact: [
      "Identified systemic UX gaps",
      "Completed heuristic + usability audit",
      "Improved AI chatbot accessibility",
    ],
  },
  {
    id: "openoff",
    title: "OpenOff",
    description: "Real-Time Event Platform with Location-Based Discovery, QR Check-In, and Bump-to-Connect",
    tags: ["Real-Time Interaction", "Location-Based UX", "0→1 Launch", "Mobile Design"],
    highlights: [
      "📈 250+ users onboarded with 30% engagement boost",
      "📋 Informed by 243 survey responses and user insights",
    ],
    imageColor: "hsl(270, 50%, 92%)",
    accentColor: "#7C3AED",
    logo: logoOpenoff,
    mockup: mockupOpenoff,
    role: "Product Designer",
    duration: "5 months",
    team: "1 designer, 3 engineers",
    challenge: "Event attendees needed better ways to discover events and connect with others in real-time.",
    approach: "Gathered 243 survey responses, designed location-based discovery, and created innovative connection features.",
    solution: "Built a mobile event platform with QR check-in and bump-to-connect functionality.",
    impact: [
      "Onboarded 250+ users",
      "Achieved 30% engagement boost",
      "Validated with 243 survey responses",
    ],
  },
];
