import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
  isDark?: boolean;
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

  // Check if active section is a dark section
  const isInDarkSection = sections.find(s => s.id === activeSection)?.isDark || false;

  return (
    <nav className="fixed right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-0.5">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`text-right text-[10px] lg:text-[11px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm transition-all duration-300 ${
            activeSection === id
              ? 'text-nurturly font-medium'
              : isInDarkSection 
                ? 'text-white/60 hover:text-white/90'
                : 'text-muted-foreground/60 hover:text-muted-foreground'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
