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
    <nav className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1 bg-background/95 backdrop-blur-md rounded-lg p-3 border border-border/50 shadow-lg">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`text-left text-xs px-3 py-1.5 rounded transition-all duration-200 ${
            activeSection === id
              ? 'text-nurturly font-medium bg-nurturly/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
