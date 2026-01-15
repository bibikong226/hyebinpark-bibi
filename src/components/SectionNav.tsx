import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
}

export const SectionNav = ({ sections }: SectionNavProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group flex items-center gap-3 justify-end"
        >
          <span
            className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
              activeSection === id ? 'text-nurturly' : 'text-muted-foreground'
            }`}
          >
            {label}
          </span>
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-nurturly scale-150'
                : 'bg-muted-foreground/40 group-hover:bg-muted-foreground'
            }`}
          />
        </button>
      ))}
    </motion.nav>
  );
};
