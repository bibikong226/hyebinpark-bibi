import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { FinderWindow } from "@/components/FinderWindow";
import profilePhoto from "@/assets/profile-photo.jpg";
import logoLine from "@/assets/logo-line.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoGm from "@/assets/logo-gm.png";
import logoNaver from "@/assets/logo-naver.png";
import logoJstor from "@/assets/logo-jstor.png";
import { projects } from "@/data/projects";

/* ── Frosted Mac window (light glass) ── */
const MacWin = ({
  children, title, className = "", delay = 0,
}: { children: React.ReactNode; title?: string; className?: string; delay?: number; }) => (
  <motion.section
    className={`overflow-hidden rounded-2xl ${className}`}
    role="region"
    aria-label={title || "Desktop window"}
    style={{
      background: "rgba(255,255,255,0.55)",
      backdropFilter: "blur(40px) saturate(1.6)",
      border: "1px solid rgba(255,255,255,0.6)",
      boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2" aria-hidden="true">
      <div className="flex items-center gap-[7px]">
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
      </div>
      {title && (
        <>
          <span className="flex-1 text-center text-[11px] font-medium tracking-wide text-black/40">{title}</span>
          <div className="w-[52px]" />
        </>
      )}
    </div>
    <div>{children}</div>
  </motion.section>
);

/* ── macOS folder icon SVG ── */
const DesktopFolderIcon = () => (
  <svg width="58" height="48" viewBox="0 0 58 48" fill="none" aria-hidden="true">
    <path d="M4 12C4 9.79 5.79 8 8 8H20L24 2H8C5.79 2 4 3.79 4 6V12Z" fill="#64B5F6" />
    <rect x="4" y="8" width="50" height="36" rx="5" fill="url(#fg)" />
    <path d="M4 8H24L20 2H8C5.79 2 4 3.79 4 6V8Z" fill="#64B5F6" />
    <rect x="4" y="8" width="50" height="1.5" rx="0.75" fill="rgba(255,255,255,0.2)" />
    <defs><linearGradient id="fg" x1="29" y1="8" x2="29" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#42A5F5"/><stop offset="1" stopColor="#1E88E5"/></linearGradient></defs>
  </svg>
);

/* ── Spotlight search ── */
const SpotlightSearch = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
  const [query, setQuery] = useState("");
  useEffect(() => { if (!isOpen) setQuery(""); }, [isOpen]);

  const filtered = query.trim()
    ? projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(query.toLowerCase())))
    : projects;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.section role="dialog" aria-modal="true" className="fixed left-1/2 top-8 z-[90] w-[min(92vw,600px)] -translate-x-1/2 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-2xl shadow-2xl" style={{ border: "1px solid rgba(0,0,0,0.08)" }} initial={{ opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }}>
            <div className="flex items-center gap-3 border-b border-black/[0.06] px-5 py-3.5">
              <Search size={17} className="text-black/30" />
              <input type="text" placeholder="Search projects…" value={query} onChange={e => setQuery(e.target.value)} className="flex-1 bg-transparent text-sm text-black/80 outline-none placeholder:text-black/30" autoFocus />
              <button onClick={onClose} className="rounded-md p-1.5 text-black/30 hover:text-black/50"><X size={15} /></button>
            </div>
            <div className="max-h-[360px] overflow-y-auto py-1">
              {filtered.length > 0 ? filtered.map(p => (
                <Link key={p.id} to={p.externalUrl || `/${p.id}`} target={p.externalUrl ? "_blank" : undefined} onClick={onClose} className="flex items-center gap-3 px-5 py-2.5 hover:bg-black/[0.03]">
                  <img src={p.logo} alt="" className="h-9 w-9 rounded-lg object-cover" style={{ background: p.imageColor }} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-black/80">{p.title}</p>
                    <p className="truncate text-[11px] text-black/40">{p.description}</p>
                  </div>
                </Link>
              )) : <p className="px-5 py-6 text-center text-sm text-black/35">No results found.</p>}
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

/* ── Testimonials ── */
const TestimonialGrid = ({ testimonials }: { testimonials: { id: string; author: string; role: string; company: string; text: string; subtext: string; }[]; }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
    {testimonials.map((t, i) => (
      <motion.article
        key={t.id}
        className={`group flex flex-col gap-5 overflow-hidden rounded-2xl bg-white/60 p-7 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 md:p-8 ${i % 2 === 1 ? "md:mt-10" : ""}`}
        style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
      >
        <div className="flex gap-[7px]" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <p className="font-serif text-[17px] italic leading-relaxed text-black/80 md:text-lg">"{t.text}"</p>
        <p className="text-[13px] leading-relaxed text-black/45">{t.subtext}</p>
        <div className="mt-auto flex items-center gap-3 pt-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-xs font-semibold text-white">
            {t.author.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <span className="block text-sm font-semibold text-black/80">{t.author}</span>
            <span className="text-[11px] text-black/40">{t.role} · <span className="text-blue-500">{t.company}</span></span>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
);

/* ═══════ MAIN APP ═══════ */
const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [finderCategory, setFinderCategory] = useState<string | null>(null);
  const [showPhoto, setShowPhoto] = useState(false);

  const handlePuzzleAssembled = useCallback(() => setShowPhoto(true), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setSearchOpen(p => !p); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const testimonials = [
    { id: "t1", author: "David Rashid", role: "CEO", company: "Concord Systems", text: "Hyebin quickly grasped the business model and technical constraints behind our platform.", subtext: "She transformed backend complexity into seamless, user-first flows that contributed to our business growth." },
    { id: "t2", author: "Elisa Vargas", role: "Product Designer", company: "JSTOR", text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions.", subtext: "Her user-centered thinking and clarity of intent made a lasting impression on our team." },
    { id: "t3", author: "Jae Hoon Shim", role: "Product Strategy Manager", company: "LINE+", text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.", subtext: "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset." },
    { id: "t4", author: "Jong Hee Hong", role: "Head of Global Communications", company: "TikTok Korea", text: "What always stands out with Hyebin is how she connects her creativity with real curiosity.", subtext: "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas." },
  ];

  const folders = [
    { label: "AI / ML" }, { label: "Product Design" }, { label: "Data & Dev Tools" }, { label: "Fintech & Web3" }, { label: "UX Research" },
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black">
        Skip to main content
      </a>

      <Navigation />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <FinderWindow isOpen={!!finderCategory} onClose={() => setFinderCategory(null)} category={finderCategory || ""} />

      <main id="main-content" role="main">
        {/* ═══════ HERO — light macOS desktop ═══════ */}
        <section
          className="relative flex min-h-[920px] w-full flex-col overflow-hidden lg:min-h-screen"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 20%, rgba(147,197,253,0.5) 0%, transparent 60%),
              radial-gradient(ellipse 70% 50% at 80% 70%, rgba(196,181,253,0.35) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(165,214,255,0.3) 0%, transparent 50%),
              linear-gradient(180deg, #c9daf8 0%, #a8c4ec 25%, #9bb8e3 50%, #b0c6e8 75%, #c5d5f0 100%)
            `,
          }}
          aria-label="Desktop hero"
        >
          <div className="relative z-10 flex-1 px-4 pb-10 pt-8 sm:px-6 md:px-8 lg:px-12 lg:pb-36">
            <div className="mx-auto max-w-[1280px]">

              {/* Name + Headline */}
              <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
                <h1 className="pointer-events-none select-none text-[clamp(4rem,14vw,10rem)] font-black uppercase leading-[0.84] tracking-[-0.05em] text-white/20" style={{ textShadow: "0 2px 30px rgba(255,255,255,0.15)" }}>
                  HYEBIN PARK
                </h1>

                <motion.p
                  className="mb-6 mt-5 rounded-full border border-white/30 bg-white/25 px-5 py-2 text-[12px] font-bold uppercase tracking-[0.22em] text-black/60 backdrop-blur-md"
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
                >
                  Strategic AI Product Designer
                </motion.p>

                <motion.h2
                  className="text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                >
                  <span className="font-light text-black/70">Turning</span>{" "}
                  <span className="font-serif italic text-[#4338CA]">complexity</span>
                  <br />
                  <span className="font-light text-black/70">into</span>{" "}
                  <span className="font-serif italic text-[#4338CA]">clarity</span>
                </motion.h2>

                <motion.button
                  type="button" onClick={() => setSearchOpen(true)}
                  className="mt-10 flex items-center gap-3 rounded-full border border-white/40 bg-white/40 px-5 py-2.5 backdrop-blur-lg"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
                  aria-label="Open project search"
                >
                  <Search size={15} className="text-black/35" />
                  <span className="text-[13px] font-medium text-black/40">Search projects</span>
                  <span className="ml-2 rounded-md bg-black/[0.06] px-1.5 py-0.5 text-[10px] font-semibold text-black/35">⌘K</span>
                </motion.button>
              </div>

              {/* Windows grid */}
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="space-y-8 lg:col-span-5">
                  <MacWin title="About" delay={0.12}>
                    <div className="flex gap-5 p-5 md:p-6">
                      <img src={profilePhoto} alt="Hyebin Park" className="h-16 w-16 flex-shrink-0 rounded-2xl object-cover object-[center_20%] shadow-sm" />
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold leading-6 text-black/80">
                          I turn complex AI & data products into clear, trustworthy experiences.
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
                          <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />Open to work
                        </div>
                      </div>
                    </div>
                  </MacWin>

                  <MacWin title="Experience" delay={0.22}>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 p-5 sm:justify-between">
                      {[{ src: logoLine, alt: "LINE" }, { src: logoTiktok, alt: "TikTok" }, { src: logoGm, alt: "GM" }, { src: logoNaver, alt: "NAVER" }, { src: logoJstor, alt: "JSTOR" }].map(logo => (
                        <div key={logo.alt} className="flex h-8 items-center"><img src={logo.src} alt={logo.alt} className="max-h-8 w-auto object-contain" /></div>
                      ))}
                    </div>
                  </MacWin>
                </div>

                <div className="space-y-10 lg:col-span-7">
                  <MacWin title="How I Work" delay={0.18}>
                    <div className="relative flex items-center justify-center overflow-hidden p-6 md:p-8">
                      <PuzzleAnimation onAssembled={handlePuzzleAssembled} />
                      {/* Profile photo reveal after puzzle assembles */}
                      <AnimatePresence>
                        {showPhoto && (
                          <motion.div
                            className="absolute bottom-3 right-3 overflow-hidden rounded-2xl shadow-lg"
                            style={{ border: "2px solid rgba(255,255,255,0.7)" }}
                            initial={{ opacity: 0, scale: 0.7, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          >
                            <img src={profilePhoto} alt="Hyebin Park" className="h-20 w-20 object-cover object-[center_20%]" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </MacWin>

                  <aside aria-labelledby="folders-heading">
                    <p id="folders-heading" className="mb-5 px-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/30">Project Folders</p>
                    <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-7 lg:justify-start">
                      {folders.map((f, i) => (
                        <motion.button
                          key={f.label} type="button" onClick={() => setFinderCategory(f.label)}
                          className="group flex w-[80px] flex-col items-center gap-2 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 + i * 0.07 }}
                        >
                          <div className="transition-transform duration-200 group-hover:-translate-y-1"><DesktopFolderIcon /></div>
                          <span className="text-[11px] font-medium leading-tight text-black/60">{f.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          {/* Dock */}
          <div className="relative z-20 px-4 pb-6 sm:px-6 md:px-8 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:px-0 lg:pb-0">
            <div
              className="mx-auto flex w-fit items-center gap-0 rounded-2xl px-3 py-2"
              role="navigation" aria-label="Quick navigation dock"
              style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(28px) saturate(1.5)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            >
              {(() => {
                const items = [
                  { icon: "📂", label: "Work", bg: "linear-gradient(135deg,#6366F1,#4F46E5)", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }) },
                  { icon: "🔍", label: "Search", bg: "linear-gradient(135deg,#F472B6,#DB2777)", action: () => setSearchOpen(true) },
                  { icon: "📋", label: "About", bg: "linear-gradient(135deg,#34D399,#059669)", action: () => (window.location.href = "/about") },
                  { icon: "📄", label: "CV", bg: "linear-gradient(135deg,#FBBF24,#D97706)", action: () => window.open("https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing", "_blank") },
                ];
                const contact = { icon: "✉️", label: "Contact", bg: "linear-gradient(135deg,#F87171,#DC2626)", action: () => (window.location.href = "mailto:hyebinp@umich.edu") };
                return (
                  <>
                    <div className="flex items-center gap-2 px-1">
                      {items.map(it => (
                        <button key={it.label} onClick={it.action} className="flex flex-col items-center gap-1 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                          <div className="flex h-11 w-11 items-center justify-center rounded-[13px] text-lg shadow-md transition-transform duration-200 hover:scale-110 md:h-12 md:w-12" style={{ background: it.bg }}>{it.icon}</div>
                          <span className="text-[9px] font-medium text-black/35">{it.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="mx-2 h-8 w-px bg-black/[0.08]" />
                    <div className="px-1">
                      <button onClick={contact.action} className="flex flex-col items-center gap-1 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                        <div className="flex h-11 w-11 items-center justify-center rounded-[13px] text-lg shadow-md md:h-12 md:w-12" style={{ background: contact.bg }}>{contact.icon}</div>
                        <span className="text-[9px] font-medium text-black/35">{contact.label}</span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ═══════ STRATEGIC OUTPUTS — White Notes style ═══════ */}
        <section id="work" className="bg-white px-4 py-24 sm:px-8 sm:py-32 md:px-10" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1200px]">
            {/* Notes window header */}
            <div className="mb-14 overflow-hidden rounded-2xl bg-[#FAFAFA] shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2" aria-hidden="true">
                <div className="flex items-center gap-[7px]">
                  <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="flex-1 text-center text-[11px] font-medium tracking-wide text-black/35">Notes — Strategic Outputs</span>
                <div className="w-[52px]" />
              </div>
              <div className="px-6 py-8 md:px-10 md:py-10">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-black/30">Selected Work</p>
                <h2 id="work-heading" className="mb-1 text-[clamp(36px,5vw,64px)] font-black leading-[1.05] tracking-tight text-black/90">Strategic Outputs.</h2>
                <p className="max-w-[560px] text-[15px] leading-7 text-black/45">End-to-end product thinking across AI, research, fintech, and technically complex systems.</p>
              </div>
            </div>

            <div className="grid gap-x-10 gap-y-14 md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
              {projects.map((project, index) => {
                const card = (
                  <motion.article
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5"
                    style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: project.imageColor }}>
                      <div className="absolute left-4 top-4 z-10 md:left-6 md:top-5">
                        <img src={project.logo} alt={`${project.title} logo`} loading="lazy" className={`w-auto object-contain ${project.id === "gm" ? "h-8 md:h-10" : project.id === "nurturly" ? "h-5 md:h-6" : "h-6 md:h-9"}`} />
                      </div>
                      <div className="absolute inset-0 flex items-end justify-center px-4 pt-10 md:pt-12">
                        <img src={project.mockup} alt={`${project.title} mockup`} loading="lazy" className={`max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03] ${project.id === "concord" ? "max-h-[95%]" : "max-h-[88%]"}`} />
                      </div>
                      <div className="absolute bottom-4 right-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/80 shadow-md">View</div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h3 className="mb-2 font-serif text-[22px] font-semibold leading-[1.2] text-black/85 md:text-[26px]">{project.title}</h3>
                      <p className="mb-4 max-w-[440px] text-[14px] leading-[1.65] text-black/45">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-[6px]">
                        {project.tags.map(tag => (
                          <span key={tag} className="inline-block rounded-full border border-black/[0.08] bg-black/[0.02] px-2.5 py-[4px] text-[10.5px] font-medium text-black/45">{tag}</span>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-wrap gap-[6px]">
                        {project.highlights.map(h => (
                          <div key={h} className="relative cursor-default overflow-hidden rounded-md px-3 py-[6px]">
                            <div className="absolute inset-0 bg-black/[0.03]" />
                            <div className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-[450ms] ease-out group-hover:scale-x-100" style={{ background: project.accentColor }} />
                            <span className="relative z-10 text-xs font-medium text-black/45 transition-colors duration-[350ms] group-hover:text-white">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );

                if (project.externalUrl) return <a key={project.id} href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">{card}</a>;
                return <Link key={project.id} to={`/${project.id}`} className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">{card}</Link>;
              })}
            </div>
          </div>
        </section>

        {/* ═══════ TESTIMONIALS — Light with frosted cards ═══════ */}
        <section
          id="collab"
          className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-28 md:px-10"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 20% 30%, rgba(147,197,253,0.25) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(196,181,253,0.2) 0%, transparent 50%),
              linear-gradient(180deg, #eef2f9 0%, #e8edf6 50%, #f0f3f8 100%)
            `,
          }}
          aria-labelledby="collab-heading"
        >
          <div className="mx-auto max-w-[1060px]">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-black/30">Collaboration</p>
            <h2 id="collab-heading" className="mb-14 text-[clamp(32px,4.5vw,52px)] font-black leading-[1.1] tracking-tight text-black/85">
              Words from people<br className="hidden sm:block" /> I've worked alongside.
            </h2>
            <TestimonialGrid testimonials={testimonials} />
          </div>
        </section>

        <div id="cta-section"><Footer /></div>
      </main>
    </div>
  );
};

export default App;
