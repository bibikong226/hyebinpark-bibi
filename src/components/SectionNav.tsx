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
      className="fixed right-3 sm:right-5 lg:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-0.5 rounded-xl px-2 py-2.5"
      style={{
        background: isInDarkSection
          ? 'rgba(30,30,40,0.7)'
          : 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(24px) saturate(1.6)',
        border: isInDarkSection
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid rgba(0,0,0,0.08)',
        boxShadow: isInDarkSection
          ? '0 4px 20px rgba(0,0,0,0.3)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
      }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-[5px] px-1 pb-1.5 mb-0.5 border-b" style={{ borderColor: isInDarkSection ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
        <span className="h-[7px] w-[7px] rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-[7px] w-[7px] rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="h-[7px] w-[7px] rounded-full" style={{ background: "#28C840" }} />
      </div>

      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`text-right text-[10px] lg:text-[11px] px-2 py-1 rounded-md transition-all duration-300 ${
            activeSection === id
              ? 'text-nurturly font-semibold bg-nurturly/10'
              : isInDarkSection
                ? 'text-white/50 hover:text-white/80 hover:bg-white/5'
                : 'text-black/40 hover:text-black/70 hover:bg-black/[0.04]'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
