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

  const isInDarkSection = sections.find(s => s.id === activeSection)?.isDark || false;

  return (
    <nav
      className="fixed right-2 lg:right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-px rounded-lg px-1 py-1.5"
      style={{
        background: isInDarkSection
          ? 'rgba(30,30,40,0.6)'
          : 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(16px) saturate(1.4)',
        border: isInDarkSection
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(0,0,0,0.06)',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`text-right text-[9px] lg:text-[10px] px-1.5 py-0.5 rounded transition-all duration-300 ${
            activeSection === id
              ? 'text-nurturly font-semibold'
              : isInDarkSection
                ? 'text-white/40 hover:text-white/70'
                : 'text-black/35 hover:text-black/60'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
