export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: { text: string; color: string }[];
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
    id: "concord",
    title: "Concord",
    description: "A secure, high-speed OTC crypto trading and multi-wallet asset management platform for a $3.5M fintech startup",
    tags: ["Web3 Product Design", "Crypto UX", "B2B/B2C Platform"],
    highlights: [
      { text: "🏆 Scaled from MVP to $3.5M valuation with product-led growth", color: "#BE123C" },
      { text: "🧩 Unified complex crypto trades into one intuitive flow that serves both retail and institutional needs", color: "#9F1239" },
    ],
    imageColor: "hsl(350, 80%, 65%)",
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
      { text: "🏆 Runner-up + People's Choice Award @ +Tech Innovation Jam", color: "#E11D48" },
      { text: "🎁 $5,000 funding secured", color: "#059669" },
    ],
    imageColor: "hsl(350, 70%, 90%)",
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
      { text: "🔮 Shaped future product strategy aligned with GM's 2030 roadmap", color: "#4F46E5" },
    ],
    imageColor: "hsl(220, 15%, 15%)",
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
      { text: "💡 Uncovered systemic UX gaps in JSTOR's Gen AI tool and shared with the product team", color: "#4F46E5" },
      { text: "🔍 Conducted heuristic + usability audit", color: "#059669" },
    ],
    imageColor: "hsl(35, 40%, 92%)",
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
      { text: "📈 250+ users onboarded with 30% engagement boost", color: "#4F46E5" },
      { text: "📋 Informed by 243 survey responses and user insights", color: "#4F46E5" },
    ],
    imageColor: "hsl(270, 50%, 92%)",
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
