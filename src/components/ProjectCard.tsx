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
  externalUrl?: string;
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
  externalUrl,
}: ProjectCardProps) => {
  const cardContent = (
    <article className="rounded-2xl overflow-hidden">
          {/* Thumbnail Section - Logo left, Mockup right */}
          <div 
            className="relative w-full aspect-[16/10] overflow-hidden"
            style={{ backgroundColor: imageColor }}
          >
            {/* Logo positioned on left */}
            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 max-w-[35%]">
              <img 
                src={logo} 
                alt={`${title} logo`} 
                className="w-full h-auto max-h-24 md:max-h-32 object-contain object-left"
              />
            </div>
            
            {/* Mockup positioned on right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] flex items-center justify-end">
              <img 
                src={mockup} 
                alt={`${title} mockup`} 
                className="h-full w-auto object-contain object-right group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div 
            className="p-6 md:p-8 space-y-5"
            style={{ backgroundColor: imageColor }}
          >
            {/* Project Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>

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

            <motion.div
              className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-5 h-5 text-foreground group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
          </div>
        </article>
      );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {externalUrl ? (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          onClick={(e) => {
            // In the Lovable preview (sandboxed iframe), opening a new tab can be blocked.
            // Fallback: navigate the current frame so the link still works.
            let isInIframe = false;
            try {
              isInIframe = window.self !== window.top;
            } catch {
              isInIframe = true;
            }

            if (isInIframe) {
              e.preventDefault();
              window.location.href = externalUrl;
            }
          }}
        >
          {cardContent}
        </a>
      ) : (
        <Link to={`/project/${id}`} className="group block">
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};
