import { useState } from "react";
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
  "AI Products": ["nurturly", "jstor"],
  "B2B Enterprise": ["concord", "jstor"],
  "Fintech": ["concord"],
  "Crypto / Web3": ["concord"],
  "User Research": ["jstor", "nurturly", "openoff", "gm"],
};

export const FinderWindow = ({ isOpen, onClose, category }: FinderWindowProps) => {
  const matchedIds = categoryProjectMap[category] || [];
  const matchedProjects = projects.filter((p) => matchedIds.includes(p.id));
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    matchedProjects[0] || null
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Finder Window */}
          <motion.div
            className="fixed z-[70] top-[10%] left-1/2 w-[90vw] max-w-[840px] rounded-xl overflow-hidden"
            style={{
              background: "rgba(30,30,40,0.92)",
              backdropFilter: "blur(50px) saturate(1.8)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 30px 80px rgba(0,0,0,.5), 0 8px 24px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,0.08)",
              transform: "translateX(-50%)",
            }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08]">
              <div className="flex items-center gap-[7px]">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-110 transition-all focus:outline-none"
                  aria-label="Close window"
                />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="flex-1 text-center text-[12px] font-medium text-white/50 tracking-wide">
                {category}
              </span>
              <button onClick={onClose} className="text-white/30 hover:text-white/60 transition-colors focus:outline-none" aria-label="Close">
                <X size={14} />
              </button>
            </div>

            {/* Content: Sidebar + Preview */}
            <div className="flex h-[55vh] max-h-[500px]">
              {/* Sidebar — project list */}
              <div
                className="w-[240px] flex-shrink-0 border-r border-white/[0.06] overflow-y-auto"
                style={{ background: "rgba(20,20,30,0.5)" }}
              >
                <div className="p-3">
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25 px-2 mb-2">
                    {matchedProjects.length} Projects
                  </p>
                  {matchedProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all mb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                        selectedProject?.id === project.id
                          ? "bg-indigo-500/20 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white/80"
                      }`}
                    >
                      <img
                        src={project.logo}
                        alt=""
                        className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                        style={{ background: project.imageColor }}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{project.title}</p>
                        <p className="text-[10px] text-white/40 truncate">{project.role}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview panel */}
              <div className="flex-1 overflow-y-auto">
                {selectedProject ? (
                  <div className="p-6 space-y-5">
                    {/* Mockup preview */}
                    <div
                      className="w-full aspect-[16/10] rounded-lg overflow-hidden flex items-center justify-center"
                      style={{ background: selectedProject.imageColor }}
                    >
                      <img
                        src={selectedProject.mockup}
                        alt={`${selectedProject.title} preview`}
                        className="max-w-[85%] max-h-[85%] object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
                          <p className="text-sm text-white/40 mt-0.5">{selectedProject.role} · {selectedProject.duration}</p>
                        </div>
                        <Link
                          to={selectedProject.externalUrl || `/${selectedProject.id}`}
                          target={selectedProject.externalUrl ? "_blank" : undefined}
                          onClick={onClose}
                          className="flex items-center gap-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition-colors text-sm font-medium flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                          View
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                      <p className="text-[13px] text-white/50 leading-relaxed">{selectedProject.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 text-[10px] font-medium bg-white/5 text-white/50 rounded-full border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                        {selectedProject.highlights.map((hl, i) => (
                          <p key={i} className="text-xs text-white/60">{hl}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-white/30 text-sm">
                    No projects in this category
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
