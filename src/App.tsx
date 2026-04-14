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

/* ── Frosted Mac window ── */
const MacWin = ({
  children, title, className = "", delay = 0,
}: { children: React.ReactNode; title?: string; className?: string; delay?: number; }) => (
  <motion.section
    className={`overflow-hidden rounded-2xl ${className}`}
    role="region"
    aria-label={title || "Desktop window"}
    style={{
      background: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(40px) saturate(1.6)",
      border: "1px solid rgba(255,255,255,0.65)",
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

/* ── Section wrapper (consistent Mac Notes style) ── */
const SectionWin = ({
  children, title, className = "",
}: { children: React.ReactNode; title: string; className?: string; }) => (
  <div className={`overflow-hidden rounded-2xl bg-white shadow-sm ${className}`} style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
    <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2" aria-hidden="true">
      <div className="flex items-center gap-[7px]">
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
      </div>
      <span className="flex-1 text-center text-[11px] font-medium tracking-wide text-black/35">{title}</span>
      <div className="w-[52px]" />
    </div>
    <div>{children}</div>
  </div>
);

/* ── Realistic macOS folder icon ── */
const DesktopFolderIcon = () => (
  <svg width="68" height="56" viewBox="0 0 68 56" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="folder-back" x1="34" y1="4" x2="34" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8CB4F0" />
        <stop offset="1" stopColor="#5A9CF0" />
      </linearGradient>
      <linearGradient id="folder-front" x1="34" y1="16" x2="34" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6DB3F8" />
        <stop offset="0.5" stopColor="#4DA1F5" />
        <stop offset="1" stopColor="#3D8CE8" />
      </linearGradient>
      <linearGradient id="folder-tab" x1="16" y1="4" x2="16" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8CB4F0" />
        <stop offset="1" stopColor="#6CA5F0" />
      </linearGradient>
      <filter id="folder-shadow" x="-4" y="2" width="76" height="60" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
      </filter>
    </defs>
    <g filter="url(#folder-shadow)">
      {/* Back panel */}
      <rect x="4" y="10" width="60" height="42" rx="5" fill="url(#folder-back)" />
      {/* Tab */}
      <path d="M8 10V8C8 5.79 9.79 4 12 4H24C25.1 4 26.14 4.53 26.8 5.4L30 10H8Z" fill="url(#folder-tab)" />
      {/* Front panel */}
      <rect x="4" y="16" width="60" height="36" rx="5" fill="url(#folder-front)" />
      {/* Top highlight line */}
      <rect x="4" y="16" width="60" height="1.5" rx="0.75" fill="rgba(255,255,255,0.3)" />
      {/* Subtle inner shadow at top of front */}
      <rect x="6" y="18" width="56" height="1" rx="0.5" fill="rgba(255,255,255,0.15)" />
    </g>
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
          <motion.section role="dialog" aria-modal="true" className="fixed left-1/2 top-8 z-[90] w-[min(92vw,600px)] -translate-x-1/2 overflow-hidden rounded-2xl bg-white/90 shadow-2xl backdrop-blur-2xl" style={{ border: "1px solid rgba(0,0,0,0.08)" }} initial={{ opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }}>
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

/* ═══════ MAIN APP ═══════ */
const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [finderCategory, setFinderCategory] = useState<string | null>(null);

  const handlePuzzleAssembled = useCallback(() => {}, []);

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
    <div className="overflow-x-hidden font-sans bg-[#f0f0f2]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black">Skip to main content</a>

      <Navigation />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <FinderWindow isOpen={!!finderCategory} onClose={() => setFinderCategory(null)} category={finderCategory || ""} />

      <main id="main-content" role="main">
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative flex min-h-[920px] w-full flex-col overflow-hidden lg:min-h-screen"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 25% 15%, rgba(186,210,248,0.5) 0%, transparent 55%),
              radial-gradient(ellipse 60% 45% at 80% 75%, rgba(200,190,230,0.3) 0%, transparent 50%),
              linear-gradient(170deg, #e8ecf4 0%, #e0e4ee 30%, #d8dce8 55%, #dde1ec 80%, #e6e9f0 100%)
            `,
          }}
          aria-label="Desktop hero"
        >
          <div className="relative z-10 flex-1 px-4 pb-10 pt-8 sm:px-6 md:px-8 lg:px-12 lg:pb-36">
            <div className="mx-auto max-w-[1280px]">

              {/* Name + Headline */}
              <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
                <h1
                  className="pointer-events-none select-none text-[clamp(3.5rem,13vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.04em]"
                  style={{ color: "rgba(0,0,0,0.12)" }}
                >
                  HYEBIN PARK
                </h1>

                <motion.p
                  className="mb-6 mt-5 rounded-full border border-black/[0.08] bg-white/50 px-5 py-2 text-[12px] font-bold uppercase tracking-[0.22em] text-black/70 backdrop-blur-md"
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
                >
                  Strategic AI Product Designer
                </motion.p>

                <motion.h2
                  className="text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                >
                  <span className="text-black/50">Turning</span>{" "}
                  <span className="font-serif italic font-bold text-[#4338CA]">complexity</span>
                  <br />
                  <span className="text-black/50">into</span>{" "}
                  <span className="font-serif italic font-bold text-[#4338CA]">clarity</span>
                </motion.h2>

                <motion.button
                  type="button" onClick={() => setSearchOpen(true)}
                  className="mt-10 flex items-center gap-3 rounded-full border border-black/[0.06] bg-white/60 px-5 py-2.5 backdrop-blur-lg"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
                  aria-label="Open project search"
                >
                  <Search size={15} className="text-black/30" />
                  <span className="text-[13px] font-medium text-black/40">Search projects</span>
                  <span className="ml-2 rounded-md bg-black/[0.05] px-1.5 py-0.5 text-[10px] font-semibold text-black/30">⌘K</span>
                </motion.button>
              </div>

              {/* Windows grid */}
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="space-y-8 lg:col-span-5">
                  {/* About — compact widget, no photo */}
                  <MacWin title="About" delay={0.12}>
                    <div className="p-5 md:p-6">
                      <p className="text-[15px] font-semibold leading-6 text-black/80">I turn complex AI & data products into clear, trustworthy experiences.</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
                        <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />Open to work
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

                <div className="space-y-12 lg:col-span-7">
                  <MacWin title="How I Work" delay={0.18}>
                    <div className="flex items-center justify-center p-6">
                      <PuzzleAnimation onAssembled={handlePuzzleAssembled} profileSrc={profilePhoto} />
                    </div>
                  </MacWin>

                  <aside aria-labelledby="folders-heading">
                    <p id="folders-heading" className="mb-5 px-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/30">Project Folders</p>
                    <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 lg:justify-start">
                      {folders.map((f, i) => (
                        <motion.button key={f.label} type="button" onClick={() => setFinderCategory(f.label)}
                          className="group flex w-[80px] flex-col items-center gap-2.5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 + i * 0.07 }}
                        >
                          <div className="transition-transform duration-200 group-hover:-translate-y-1"><DesktopFolderIcon /></div>
                          <span className="text-[11px] font-medium leading-tight text-black/55">{f.label}</span>
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
            <div className="mx-auto flex w-fit items-center gap-0 rounded-2xl px-3 py-2" role="navigation" aria-label="Quick navigation dock"
              style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(28px) saturate(1.5)", border: "1px solid rgba(255,255,255,0.55)", boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}>
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

        {/* ═══════ STRATEGIC OUTPUTS ═══════ */}
        <section id="work" className="bg-[#f0f0f2] px-4 py-24 sm:px-8 sm:py-32 md:px-10" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1200px]">
            <SectionWin title="Notes — Strategic Outputs" className="mb-14">
              <div className="px-6 py-8 md:px-10 md:py-10">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-black/30">Selected Work</p>
                <h2 id="work-heading" className="mb-1 text-[clamp(36px,5vw,64px)] font-black leading-[1.05] tracking-tight text-black/90">Strategic Outputs.</h2>
                <p className="max-w-[560px] text-[15px] leading-7 text-black/45">End-to-end product thinking across AI, research, fintech, and technically complex systems.</p>
              </div>
            </SectionWin>

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
                        {project.tags.map(tag => <span key={tag} className="inline-block rounded-full border border-black/[0.08] bg-black/[0.02] px-2.5 py-[4px] text-[10.5px] font-medium text-black/45">{tag}</span>)}
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

        {/* ═══════ TESTIMONIALS — clean cards, no Mac window ═══════ */}
        <section id="collab" className="bg-[#f0f0f2] px-4 py-24 sm:px-8 sm:py-28 md:px-10" aria-labelledby="collab-heading">
          <div className="mx-auto max-w-[1060px]">
            <div className="mb-14 text-center">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-black/30">Collaboration</p>
              <h2 id="collab-heading" className="mb-3 text-[clamp(32px,4.5vw,52px)] font-black leading-[1.1] tracking-tight text-black/85">
                Words from people<br className="hidden sm:block" /> I've worked alongside.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.id}
                  className={`group flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${i % 2 === 1 ? "md:mt-8" : ""}`}
                  style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
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
          </div>
        </section>

        <div id="cta-section"><Footer /></div>
      </main>
    </div>
  );
};

export default App;
