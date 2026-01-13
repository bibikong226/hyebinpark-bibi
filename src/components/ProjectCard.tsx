import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
          className="rounded-2xl overflow-hidden p-6 md:p-8 space-y-6"
          style={{ backgroundColor: imageColor }}
        >
          {/* Logo */}
          <div className="h-10 md:h-12">
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Mockup Image */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
            <img 
              src={mockup} 
              alt={`${title} mockup`} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Project Title */}
          <div className="space-y-1">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-md">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium bg-foreground/10 text-foreground/90 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Highlights with hover fill effect */}
          <div className="flex flex-wrap gap-2">
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
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-foreground group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>
        </article>
      </Link>
    </motion.div>
  );
};
