import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import { projects, Project } from "@/data/projects";

interface FinderWindowProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

const categoryProjectMap: Record<string, string[]> = {
  "AI / ML": ["nurturly", "jstor"],
  "Product Design": ["concord", "nurturly", "openoff", "gm"],
  "Data & Dev Tools": ["concord"],
  "Fintech & Web3": ["concord"],
  "UX Research": ["jstor", "nurturly", "openoff", "gm"],
};

export const FinderWindow = ({ isOpen, onClose, category }: FinderWindowProps) => {
  const matchedIds = categoryProjectMap[category] || [];
  const matchedProjects = useMemo(
    () => projects.filter((project) => matchedIds.includes(project.id)),
    [matchedIds]
  );

  const [selectedProject, setSelectedProject] = useState<Project | null>(matchedProjects[0] || null);

  useEffect(() => {
    setSelectedProject(matchedProjects[0] || null);
  }, [category, matchedProjects]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60]"
            style={{ background: "hsl(var(--desktop-shadow) / 0.72)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="finder-title"
            className="fixed inset-x-4 top-4 bottom-4 z-[70] mx-auto flex w-auto max-w-[1080px] flex-col overflow-hidden rounded-[24px]"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--desktop-panel) / 0.96), hsl(var(--desktop-panel-strong) / 0.94))",
              backdropFilter: "blur(36px) saturate(1.2)",
              border: "1px solid hsl(var(--desktop-border) / 0.12)",
              boxShadow:
                "0 32px 80px hsl(var(--desktop-shadow) / 0.68), inset 0 1px 0 hsl(var(--desktop-border) / 0.12)",
            }}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center gap-3 border-b px-4 py-3 sm:px-5"
              style={{ borderColor: "hsl(var(--desktop-border) / 0.08)" }}>
              <div className="flex items-center gap-[7px]" aria-hidden="true">
                <span className="h-3 w-3 rounded-full" style={{ background: "hsl(4 100% 67%)" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "hsl(41 100% 59%)" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "hsl(135 59% 49%)" }} />
              </div>

              <div className="min-w-0 flex-1 text-center">
                <h2 id="finder-title" className="truncate text-[12px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: "hsl(var(--desktop-muted))" }}>
                  {category}
                </h2>
                <p className="mt-1 text-[11px]" style={{ color: "hsl(var(--desktop-subtle))" }}>
                  {matchedProjects.length} related project{matchedProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                style={{ color: "hsl(var(--desktop-muted))" }}
                aria-label="Close project window"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col md:flex-row">
              <aside
                className="border-b md:w-[280px] md:flex-shrink-0 md:border-b-0 md:border-r"
                style={{
                  borderColor: "hsl(var(--desktop-border) / 0.08)",
                  background: "hsl(var(--desktop-search) / 0.56)",
                }}
              >
                <div className="max-h-[220px] overflow-y-auto p-3 md:max-h-none md:h-full">
                  <p
                    className="mb-3 px-2 text-[10px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "hsl(var(--desktop-subtle))" }}
                  >
                    Projects
                  </p>
                  <div className="space-y-1.5">
                    {matchedProjects.map((project) => {
                      const isActive = selectedProject?.id === project.id;

                      return (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                          style={{
                            color: isActive ? "hsl(var(--desktop-foreground))" : "hsl(var(--desktop-muted))",
                            background: isActive
                              ? "linear-gradient(180deg, hsl(var(--desktop-accent) / 0.26), hsl(var(--desktop-accent) / 0.14))"
                              : "transparent",
                            border: isActive
                              ? "1px solid hsl(var(--desktop-accent) / 0.32)"
                              : "1px solid transparent",
                          }}
                          aria-pressed={isActive}
                        >
                          <img
                            src={project.logo}
                            alt=""
                            className="h-10 w-10 rounded-xl object-cover"
                            style={{ background: project.imageColor }}
                          />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold">{project.title}</p>
                            <p className="truncate text-[11px]" style={{ color: "hsl(var(--desktop-subtle))" }}>
                              {project.role}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>

              <div className="min-h-0 min-w-0 flex-1">
                {selectedProject ? (
                  <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-7">
                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                      <div className="space-y-4">
                        <div
                          className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[22px] p-4 sm:p-6"
                          style={{
                            background: selectedProject.imageColor,
                            boxShadow: "inset 0 1px 0 hsl(var(--desktop-border) / 0.18)",
                          }}
                        >
                          <img
                            src={selectedProject.mockup}
                            alt={`${selectedProject.title} preview`}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <div
                          className="rounded-[20px] border p-4"
                          style={{
                            borderColor: "hsl(var(--desktop-border) / 0.08)",
                            background: "hsl(var(--desktop-search) / 0.42)",
                          }}
                        >
                          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                            style={{ color: "hsl(var(--desktop-subtle))" }}>
                            Highlights
                          </p>
                          <div className="mt-3 space-y-2.5">
                            {selectedProject.highlights.map((highlight) => (
                              <p key={highlight} className="text-sm leading-6" style={{ color: "hsl(var(--desktop-muted))" }}>
                                {highlight}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between gap-5">
                        <div className="space-y-5">
                          <div>
                            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                              style={{ color: "hsl(var(--desktop-subtle))" }}>
                              Selected project
                            </p>
                            <h3 className="mt-2 text-3xl font-black leading-tight" style={{ color: "hsl(var(--desktop-foreground))" }}>
                              {selectedProject.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6" style={{ color: "hsl(var(--desktop-muted))" }}>
                              {selectedProject.role} · {selectedProject.duration} · {selectedProject.team}
                            </p>
                          </div>

                          <p className="text-[15px] leading-7" style={{ color: "hsl(var(--desktop-muted))" }}>
                            {selectedProject.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em]"
                                style={{
                                  color: "hsl(var(--desktop-foreground))",
                                  background: "hsl(var(--desktop-accent) / 0.16)",
                                  border: "1px solid hsl(var(--desktop-accent) / 0.18)",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div
                          className="rounded-[20px] border p-4"
                          style={{
                            borderColor: "hsl(var(--desktop-border) / 0.08)",
                            background: "hsl(var(--desktop-search) / 0.42)",
                          }}
                        >
                          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                            style={{ color: "hsl(var(--desktop-subtle))" }}>
                            Case study preview
                          </p>
                          <p className="mt-3 text-sm leading-6" style={{ color: "hsl(var(--desktop-muted))" }}>
                            Open the full case study for the deeper product story, process, and outcomes.
                          </p>
                          <Link
                            to={selectedProject.externalUrl || `/${selectedProject.id}`}
                            target={selectedProject.externalUrl ? "_blank" : undefined}
                            rel={selectedProject.externalUrl ? "noopener noreferrer" : undefined}
                            onClick={onClose}
                            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                            style={{
                              color: "hsl(var(--primary-foreground))",
                              background: "hsl(var(--primary))",
                              boxShadow: "0 14px 28px hsl(var(--desktop-shadow) / 0.2)",
                            }}
                          >
                            View case study
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm"
                    style={{ color: "hsl(var(--desktop-muted))" }}>
                    No projects are mapped to this folder yet.
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};
