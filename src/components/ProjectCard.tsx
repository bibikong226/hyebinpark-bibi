import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  imageColor: string;
  index: number;
}

export const ProjectCard = ({
  id,
  title,
  description,
  category,
  year,
  imageColor,
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
        <article className="space-y-4">
          {/* Project Image/Placeholder */}
          <div
            className="relative aspect-[4/3] rounded-xl overflow-hidden card-hover"
            style={{ backgroundColor: imageColor }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Arrow icon on hover */}
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <ArrowUpRight className="w-5 h-5 text-foreground group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>

            {/* Category badge */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-background/90 rounded-full">
                {category}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">
                {title}
              </h3>
              <span className="text-sm text-muted-foreground">{year}</span>
            </div>
            <p className="text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
