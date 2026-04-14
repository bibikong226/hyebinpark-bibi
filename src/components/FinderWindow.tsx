import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
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
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}
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
            className="fixed inset-x-4 top-4 bottom-4 z-[70] mx-auto flex w-auto max-w-[1080px] flex-col overflow-hidden rounded-[16px]"
            style={{
              background: "linear-gradient(180deg, rgba(38,32,58,0.97), rgba(24,20,42,0.96))",
              backdropFilter: "blur(36px) saturate(1.2)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center gap-3 border-b px-4 py-3 sm:px-5"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-[7px]" aria-hidden="true">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-3 w-3 rounded-full transition-opacity hover:opacity-80 focus:outline-none"
                  style={{ background: "#FF5F57" }}
                  aria-label="Close window"
                />
                <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
              </div>

              <div className="min-w-0 flex-1 text-center">
                <h2 id="finder-title" className="truncate text-[12px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  {category}
                </h2>
                <p className="mt-0.5 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {matchedProjects.length} related project{matchedProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="w-[52px]" />
            </div>

            <div className="flex min-h-0 flex-1 flex-col md:flex-row">
              <aside
                className="border-b md:w-[280px] md:flex-shrink-0 md:border-b-0 md:border-r"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div className="max-h-[220px] overflow-y-auto p-3 md:max-h-none md:h-full">
                  <p className="mb-3 px-2 text-[10px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
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
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                          style={{
                            color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
                            background: isActive ? "rgba(124,92,252,0.2)" : "transparent",
                            border: isActive ? "1px solid rgba(124,92,252,0.3)" : "1px solid transparent",
                          }}
                          aria-pressed={isActive}
                        >
                          <img src={project.logo} alt="" className="h-10 w-10 rounded-xl object-cover" style={{ background: project.imageColor }} />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold">{project.title}</p>
                            <p className="truncate text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{project.role}</p>
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
                          className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl p-4 sm:p-6"
                          style={{ background: selectedProject.imageColor }}
                        >
                          <img src={selectedProject.mockup} alt={`${selectedProject.title} preview`} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Highlights</p>
                          <div className="mt-3 space-y-2.5">
                            {selectedProject.highlights.map((highlight) => (
                              <p key={highlight} className="text-sm leading-6" style={{ color: "rgba(255,255,255,0.6)" }}>{highlight}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between gap-5">
                        <div className="space-y-5">
                          <div>
                            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Selected project</p>
                            <h3 className="mt-2 text-3xl font-black leading-tight" style={{ color: "rgba(255,255,255,0.95)" }}>{selectedProject.title}</h3>
                            <p className="mt-2 text-sm leading-6" style={{ color: "rgba(255,255,255,0.5)" }}>{selectedProject.role} · {selectedProject.duration} · {selectedProject.team}</p>
                          </div>
                          <p className="text-[15px] leading-7" style={{ color: "rgba(255,255,255,0.55)" }}>{selectedProject.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => (
                              <span key={tag} className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em]"
                                style={{ color: "rgba(255,255,255,0.8)", background: "rgba(124,92,252,0.15)", border: "1px solid rgba(124,92,252,0.2)" }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Case study preview</p>
                          <p className="mt-3 text-sm leading-6" style={{ color: "rgba(255,255,255,0.5)" }}>Open the full case study for the deeper product story, process, and outcomes.</p>
                          <Link
                            to={selectedProject.externalUrl || `/${selectedProject.id}`}
                            target={selectedProject.externalUrl ? "_blank" : undefined}
                            rel={selectedProject.externalUrl ? "noopener noreferrer" : undefined}
                            onClick={onClose}
                            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                            style={{ color: "#fff", background: "#7C5CFC", boxShadow: "0 14px 28px rgba(0,0,0,0.2)" }}
                          >
                            View case study
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
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
