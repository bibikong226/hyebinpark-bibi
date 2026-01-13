import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import logos
import logoConcord from "@/assets/logo-concord.png";
import logoNurturly from "@/assets/logo-nurturly.png";
import logoGM from "@/assets/logo-gm.png";
import logoJstor from "@/assets/logo-jstor-new.png";
import logoOpenoff from "@/assets/logo-openoff.png";

// Import mockups
import mockupConcord from "@/assets/mockup-concord.png";
import mockupNurturly from "@/assets/mockup-nurturly.png";
import mockupGM from "@/assets/mockup-gm.png";
import mockupOpenoff from "@/assets/mockup-openoff.png";

const logoMap: Record<string, string> = {
  "logo-concord": logoConcord,
  "logo-nurturly": logoNurturly,
  "logo-gm": logoGM,
  "logo-jstor-new": logoJstor,
  "logo-openoff": logoOpenoff,
};

const mockupMap: Record<string, string> = {
  "mockup-concord": mockupConcord,
  "mockup-nurturly": mockupNurturly,
  "mockup-gm": mockupGM,
  "mockup-openoff": mockupOpenoff,
};

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  imageColor: string;
  accentColor: string;
  logo: string;
  mockup: string;
  index: number;
}

export const ProjectCard = ({
  id,
  title,
  description,
  tags,
  highlights,
  imageColor,
  accentColor,
  logo,
  mockup,
  index,
}: ProjectCardProps) => {
  const logoSrc = logoMap[logo];
  const mockupSrc = mockupMap[mockup];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${id}`}
        className="group block"
      >
        <article 
          className="rounded-2xl overflow-hidden p-8 md:p-12 min-h-[400px] md:min-h-[500px]"
          style={{ backgroundColor: imageColor }}
        >
          <div className="grid md:grid-cols-2 gap-8 h-full">
            {/* Left side - Logo and title */}
            <div className="flex flex-col justify-between">
              {/* Logo */}
              {logoSrc && (
                <div className="mb-8">
                  <img 
                    src={logoSrc} 
                    alt={`${title} logo`}
                    className="h-16 md:h-24 w-auto object-contain"
                  />
                </div>
              )}

              {/* Title - shown below logo for cards like GM reference */}
              <div className="mt-auto">
                <h3 className="font-serif text-2xl md:text-4xl text-foreground/60 leading-tight">
                  {description.split(' ').slice(0, 6).join(' ')}
                </h3>
              </div>
            </div>

            {/* Right side - Mockup */}
            <div className="flex items-center justify-center">
              {mockupSrc && (
                <motion.img 
                  src={mockupSrc} 
                  alt={`${title} mockup`}
                  className="w-full h-auto object-contain max-h-[350px] rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </div>

          {/* Bottom section - Highlights */}
          <div className="mt-8 flex flex-wrap gap-2">
            {highlights.map((highlight, highlightIndex) => (
              <div
                key={highlightIndex}
                className="relative overflow-hidden px-4 py-2 text-sm rounded-md font-medium"
              >
                <div className="absolute inset-0 bg-zinc-200" />
                <div 
                  className="absolute inset-0 z-0 origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100" 
                  style={{ backgroundColor: accentColor }} 
                />
                <span className="relative z-10 text-zinc-700 group-hover:text-white transition-colors duration-300">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Arrow icon */}
          <motion.div
            className="mt-6 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-foreground group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>
        </article>
      </Link>
    </motion.div>
  );
};
