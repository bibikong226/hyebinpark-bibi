import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { projects, Project } from "@/data/projects";

interface FinderWindowProps { isOpen: boolean; onClose: () => void; category: string; }

const categoryProjectMap: Record<string, string[]> = {
  "AI / ML": ["nurturly", "jstor"],
  "Product Design": ["concord", "nurturly", "openoff", "gm"],
  "Data & Dev Tools": ["concord"],
  "Fintech & Web3": ["concord"],
  "UX Research": ["jstor", "nurturly", "openoff", "gm"],
};

export const FinderWindow = ({ isOpen, onClose, category }: FinderWindowProps) => {
  const matchedIds = categoryProjectMap[category] || [];
  const matchedProjects = useMemo(() => projects.filter(p => matchedIds.includes(p.id)), [matchedIds]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(matchedProjects[0] || null);

  useEffect(() => { setSelectedProject(matchedProjects[0] || null); }, [category, matchedProjects]);
  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 z-[60] bg-black/25 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.section
            role="dialog" aria-modal="true"
            className="fixed inset-x-4 top-4 bottom-4 z-[70] mx-auto flex w-auto max-w-[1080px] flex-col overflow-hidden rounded-2xl bg-white/80 backdrop-blur-2xl"
            style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-3 border-b border-black/[0.06] px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-[7px]">
                <button onClick={onClose} className="h-3 w-3 rounded-full focus:outline-none" style={{ background: "#FF5F57" }} aria-label="Close" />
                <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <div className="min-w-0 flex-1 text-center">
                <h2 className="truncate text-[12px] font-medium tracking-wide text-black/40">{category}</h2>
                <p className="text-[11px] text-black/25">{matchedProjects.length} project{matchedProjects.length === 1 ? "" : "s"}</p>
              </div>
              <div className="w-[52px]" />
            </div>

            <div className="flex min-h-0 flex-1 flex-col md:flex-row">
              <aside className="border-b border-black/[0.06] bg-black/[0.02] md:w-[260px] md:flex-shrink-0 md:border-b-0 md:border-r">
                <div className="max-h-[200px] overflow-y-auto p-3 md:max-h-none md:h-full">
                  <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/25">Projects</p>
                  <div className="space-y-1">
                    {matchedProjects.map(p => {
                      const active = selectedProject?.id === p.id;
                      return (
                        <button key={p.id} onClick={() => setSelectedProject(p)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all ${active ? "bg-blue-500/10" : "hover:bg-black/[0.03]"}`}
                          style={active ? { border: "1px solid rgba(59,130,246,0.2)" } : { border: "1px solid transparent" }}
                        >
                          <img src={p.logo} alt="" className="h-9 w-9 rounded-lg object-cover" style={{ background: p.imageColor }} />
                          <div className="min-w-0">
                            <p className={`truncate text-sm font-medium ${active ? "text-blue-600" : "text-black/70"}`}>{p.title}</p>
                            <p className="truncate text-[11px] text-black/30">{p.role}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>

              <div className="min-h-0 min-w-0 flex-1">
                {selectedProject ? (
                  <div className="h-full overflow-y-auto p-4 sm:p-6">
                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
                      <div className="space-y-4">
                        <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl p-4" style={{ background: selectedProject.imageColor }}>
                          <img src={selectedProject.mockup} alt={`${selectedProject.title} preview`} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="rounded-xl bg-black/[0.02] p-4" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-black/30">Highlights</p>
                          <div className="mt-2 space-y-2">
                            {selectedProject.highlights.map(h => <p key={h} className="text-sm leading-6 text-black/50">{h}</p>)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between gap-5">
                        <div className="space-y-4">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-black/30">Selected project</p>
                            <h3 className="mt-1.5 text-2xl font-black text-black/85">{selectedProject.title}</h3>
                            <p className="mt-1.5 text-sm text-black/40">{selectedProject.role} · {selectedProject.duration} · {selectedProject.team}</p>
                          </div>
                          <p className="text-[14px] leading-7 text-black/50">{selectedProject.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map(t => <span key={t} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-600">{t}</span>)}
                          </div>
                        </div>
                        <Link
                          to={selectedProject.externalUrl || `/${selectedProject.id}`}
                          target={selectedProject.externalUrl ? "_blank" : undefined}
                          onClick={onClose}
                          className="inline-flex items-center gap-2 self-start rounded-full bg-[#4338CA] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                        >
                          View case study <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-black/30">No projects mapped yet.</div>
                )}
              </div>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};
