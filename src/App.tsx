import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { FinderWindow } from "@/components/FinderWindow";
import profileHero from "@/assets/profile-hero.png";
import memojiImg from "@/assets/memoji.png";
import logoLine from "@/assets/logo-line.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoGm from "@/assets/logo-gm.png";
import logoNaver from "@/assets/logo-naver.png";
import logoJstor from "@/assets/logo-jstor.png";
import { projects } from "@/data/projects";
import memojiDavid from "@/assets/memoji-david.png";
import memojiElisa from "@/assets/memoji-elisa.png";
import memojiJonghee from "@/assets/memoji-jonghee.png";
import memojiJaehoon from "@/assets/memoji-jaehoon.png";

/* ── Mac window wrapper (for hero widgets) ── */
const MacWin = ({
  children, title, className = "", delay = 0,
}: { children: React.ReactNode; title?: string; className?: string; delay?: number; }) => (
  <motion.section
    className={`overflow-hidden rounded-2xl max-w-full ${className}`}
    role="region"
    aria-label={title || "Desktop window"}
    style={{
      background: "rgba(255,255,255,0.25)",
      backdropFilter: "blur(40px) saturate(1.8)",
      border: "1px solid rgba(255,255,255,0.4)",
      boxShadow: "0 12px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
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
          <span className="flex-1 text-center text-[14px] font-medium tracking-wide text-black/40">{title}</span>
          <div className="w-[52px]" />
        </>
      )}
    </div>
    <div>{children}</div>
  </motion.section>
);

/* ── Section header inside white Mac window (title bar + section name + subtitle) ── */
const SectionWindowHeader = ({ windowTitle, eyebrow, title, titleAccent, subtitle }: {
  windowTitle: string; eyebrow: string; title: string; titleAccent?: string; subtitle?: string;
}) => (
  <motion.div
    className="overflow-hidden rounded-2xl bg-white"
    style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 8px 28px rgba(0,0,0,0.05)" }}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
  >
    <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5" aria-hidden="true">
      <div className="flex items-center gap-[7px]">
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
      </div>
      <span className="flex-1 text-center text-[14px] font-medium tracking-wide text-black/35">{windowTitle}</span>
      <div className="w-[52px]" />
    </div>
    <div className="px-8 py-8 md:px-10 md:py-10">
      <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.3em] text-black/45">{eyebrow}</p>
      <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1] tracking-tight text-black/90">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="font-serif italic font-normal text-black/20">{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && <p className="mt-4 text-[16px] leading-7 text-black/60">{subtitle}</p>}
    </div>
  </motion.div>
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
      <rect x="4" y="10" width="60" height="42" rx="5" fill="url(#folder-back)" />
      <path d="M8 10V8C8 5.79 9.79 4 12 4H24C25.1 4 26.14 4.53 26.8 5.4L30 10H8Z" fill="url(#folder-tab)" />
      <rect x="4" y="16" width="60" height="36" rx="5" fill="url(#folder-front)" />
      <rect x="4" y="16" width="60" height="1.5" rx="0.75" fill="rgba(255,255,255,0.3)" />
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

/* ── Highlight keywords in testimonial text ── */
const highlightKeywords = (text: string, keywords: string[]) => {
  if (!keywords.length) return text;
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    keywords.some(k => k.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="font-semibold" style={{ color: "#4338CA" }}>{part}</span>
      : part
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
    { id: "t1", author: "David Rashid", role: "CEO", company: "Concord Systems", avatar: memojiDavid, text: "Hyebin quickly grasped the business model and technical constraints behind our platform.", subtext: "She transformed backend complexity into seamless, user-first flows that contributed to our business growth.", keywords: ["business model", "technical constraints", "business growth"] },
    { id: "t2", author: "Elisa Vargas", role: "Product Designer", company: "JSTOR", avatar: memojiElisa, text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions.", subtext: "Her user-centered thinking and clarity of intent made a lasting impression on our team.", keywords: ["research insights", "design decisions", "user-centered thinking"] },
    { id: "t3", author: "Jae Hoon Shim", role: "Product Strategy Manager", company: "LINE+", avatar: memojiJaehoon, text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.", subtext: "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset.", keywords: ["dedicated", "driven", "sharp eye for detail"] },
    { id: "t4", author: "Jong Hee Hong", role: "Head of Global Communications", company: "TikTok Korea", avatar: memojiJonghee, text: "What always stands out with Hyebin is how she connects her creativity with real curiosity.", subtext: "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas.", keywords: ["creativity", "real curiosity", "communicating her ideas"] },
  ];

  const folders = [
    { label: "AI / ML" }, { label: "Product Design" }, { label: "Data & Dev Tools" }, { label: "Fintech & Web3" }, { label: "UX Research" },
  ];

  const experienceLogos = [
    { src: logoLine, alt: "LINE" },
    { src: logoTiktok, alt: "TikTok" },
    { src: logoGm, alt: "GM" },
    { src: logoNaver, alt: "Naver" },
    { src: logoJstor, alt: "JSTOR" },
  ];

  return (
    <div className="overflow-x-hidden font-sans" style={{ background: "linear-gradient(180deg, #DDD5EE 0%, #DDE4F0 20%, #E0ECF0 45%, #F0EDE6 70%, #F5F0EB 100%)", width: "100%", maxWidth: "100vw" }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black">Skip to main content</a>

      <Navigation onSearchOpen={() => setSearchOpen(true)} />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <FinderWindow isOpen={!!finderCategory} onClose={() => setFinderCategory(null)} category={finderCategory || ""} />

      <main id="main-content" role="main" className="overflow-hidden">
        {/* ═══════ HERO ═══════ */}
        <section
          className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden lg:min-h-screen"
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 20% 10%, rgba(139,92,246,0.18) 0%, rgba(167,139,250,0.08) 40%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 75% 70%, rgba(96,165,250,0.15) 0%, transparent 50%),
              radial-gradient(ellipse 35% 30% at 85% 85%, rgba(250,204,21,0.08) 0%, transparent 45%)
            `,
          }}
          aria-label="Desktop hero"
        >
          <div className="relative z-10 flex-1 px-4 pb-10 pt-6 sm:px-8 sm:pt-8 md:px-10 lg:pb-56">
            <div className="mx-auto max-w-[1200px]">

              {/* Name + Headline */}
              <div className="mb-12 flex flex-col items-center text-center sm:mb-16 lg:mb-32 overflow-hidden w-full">
                <h1
                  className="pointer-events-none select-none text-[clamp(2.5rem,11vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] w-full"
                  style={{ color: "rgba(0,0,0,0.12)" }}
                >
                  HYEBIN PARK
                </h1>

                <motion.p
                  className="mb-8 mt-6 rounded-full border border-black/[0.08] bg-white/50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.22em] text-black/70 backdrop-blur-md sm:mb-16 sm:mt-14 sm:px-5 sm:py-2 sm:text-[14px]"
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
                >
                  Strategic AI Product Designer
                </motion.p>

                <motion.h2
                  className="text-[clamp(1.8rem,6vw,5rem)] leading-[1.08] tracking-tight"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                >
                  <span className="font-normal text-black/70">Turning</span>{" "}
                  <span className="font-serif italic text-[#4338CA]">complexity</span>
                  <br />
                  <span className="font-normal text-black/70">into</span>{" "}
                  <span className="font-serif italic text-[#4338CA]">clarity</span>
                </motion.h2>
              </div>

              {/* Windows grid */}
              <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-12 lg:items-start">
                {/* Left: About + Folders */}
                <div className="min-w-0 w-full space-y-6 sm:space-y-8 lg:col-span-5 overflow-hidden">
                  <MacWin title="About" delay={0.12}>
                    <div className="px-5 py-3 sm:p-5 md:p-6">
                      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                        <img src={memojiImg} alt="Hyebin memoji" className="h-16 w-16 flex-shrink-0 object-contain drop-shadow-md sm:h-32 sm:w-32" style={{ background: "transparent" }} />
                        <div>
                          <p className="text-center text-[11px] font-semibold leading-[1.5] text-black/80 sm:text-left sm:text-[15px] sm:leading-6">I turn ambiguity into clear, trustworthy products that drive real business impact.</p>
                          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60 sm:mt-3 sm:text-[14px]">
                            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />Open to work
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-black/[0.05] pt-3 sm:mt-5 sm:pt-4">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/30 sm:mb-3 sm:text-[14px] sm:tracking-[0.2em]">Experience designing & researching for</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          {experienceLogos.map(logo => (
                            <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-6 w-6 rounded-lg object-contain sm:h-8 sm:w-8" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </MacWin>

                  {/* Folders */}
                  <aside aria-labelledby="folders-heading">
                    <p id="folders-heading" className="mb-5 px-1 text-[14px] font-semibold uppercase tracking-[0.22em] text-black/50">Project Folders</p>
                    <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-5 lg:grid-cols-3">
                      {folders.map((f, i) => (
                        <motion.button key={f.label} type="button" onClick={() => setFinderCategory(f.label)}
                          className="group flex flex-col items-center gap-2.5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 + i * 0.07 }}
                        >
                          <div className="transition-transform duration-200 group-hover:-translate-y-1"><DesktopFolderIcon /></div>
                          <span className="text-[14px] font-medium leading-tight text-black/70">{f.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </aside>
                </div>

                {/* Right: Puzzle widget card */}
                <div className="min-w-0 w-full overflow-hidden lg:col-span-7 flex items-start justify-center">
                  <MacWin title="How I Work" delay={0.18} className="w-full lg:w-fit">
                    <div className="px-3 py-3 sm:px-5 sm:py-5 md:px-6 md:py-6">
                      <p className="mx-auto mb-3 max-w-[380px] text-center text-[12px] leading-relaxed text-black/55 sm:mb-5 sm:text-[14px]">
                        I bring together scattered ideas, conflicting needs, and complex systems then shape them into impactful products
                      </p>
                      <div className="relative flex items-center justify-center overflow-hidden rounded-[16px] sm:rounded-[24px] bg-black/[0.03] px-1 py-2 sm:px-6 sm:py-8">
                        <div className="w-full max-w-[480px] origin-top scale-[0.55] sm:scale-[0.85] md:scale-100 mb-[-45%] sm:mb-0">
                          <PuzzleAnimation onAssembled={handlePuzzleAssembled} profileSrc={profileHero} />
                        </div>
                      </div>
                    </div>
                  </MacWin>
                </div>
              </div>
            </div>
          </div>

          {/* Dock */}
          <div className="relative z-20 px-2 pb-6 sm:px-6 md:px-8 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:px-0 lg:pb-0">
            <div className="mx-auto flex w-fit items-center gap-0 overflow-x-auto rounded-2xl px-2 py-2 sm:px-3" role="navigation" aria-label="Quick navigation dock"
              style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(40px) saturate(1.8)", border: "1px solid rgba(255,255,255,0.45)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)" }}>
              {(() => {
                const items = [
                  { icon: "📂", label: "Work", bg: "linear-gradient(135deg,#6366F1,#4F46E5)", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }) },
                  { icon: "🧭", label: "Explore", bg: "linear-gradient(135deg,#F472B6,#DB2777)", action: () => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" }) },
                  { icon: "📋", label: "About", bg: "linear-gradient(135deg,#34D399,#059669)", action: () => (window.location.href = "/about") },
                  { icon: "💼", label: "Experience", bg: "linear-gradient(135deg,#FB923C,#EA580C)", action: () => (window.location.href = "/about#experience") },
                  { icon: "📄", label: "CV", bg: "linear-gradient(135deg,#FBBF24,#D97706)", action: () => window.open("https://drive.google.com/file/d/1eJfszR-U-Q8KHsuMs1b4Vy68Mjd-uVjS/view?usp=sharing", "_blank") },
                ];
                const contact = { icon: "✉️", label: "Contact", bg: "linear-gradient(135deg,#F87171,#DC2626)", action: () => window.open("https://www.linkedin.com/in/hyebinp/", "_blank") };
                return (
                  <>
                    <div className="flex items-center gap-1 px-0.5 sm:gap-2 sm:px-1">
                      {items.map(it => (
                         <button key={it.label} onClick={it.action} className="flex flex-col items-center gap-0.5 px-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:gap-1 sm:px-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] text-base shadow-md transition-transform duration-200 hover:scale-110 sm:h-11 sm:w-11 md:h-12 md:w-12 md:text-lg" style={{ background: it.bg }}>{it.icon}</div>
                          <span className="text-[11px] font-medium text-black/35 sm:text-[14px]">{it.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="mx-1 h-8 w-px bg-black/[0.08] sm:mx-2" />
                    <div className="px-0.5 sm:px-1">
                      <button onClick={contact.action} className="flex flex-col items-center gap-0.5 px-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:gap-1 sm:px-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-[13px] text-base shadow-md sm:h-11 sm:w-11 md:h-12 md:w-12 md:text-lg" style={{ background: contact.bg }}>{contact.icon}</div>
                        <span className="text-[11px] font-medium text-black/35 sm:text-[14px]">{contact.label}</span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ═══════ SELECTED WORK ═══════ */}
        <section id="work" className="px-4 pt-32 pb-24 sm:px-8 sm:pt-40 sm:pb-32 md:px-10 md:pt-48 md:pb-36" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1200px]">
            <SectionWindowHeader
              windowTitle="Finder — Selected Work"
              eyebrow="SELECTED WORK"
              title="Strategic"
              titleAccent="Outputs."
              subtitle="End-to-end product thinking across AI, research, fintech, and technically complex systems."
            />

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:gap-10">
              {projects.map((project, index) => {
                const card = (
                  <motion.article
                    className="group flex h-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1.5"
                    style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: project.imageColor }}>
                      <div className="absolute left-4 top-4 z-10 md:left-6 md:top-5">
                        <img src={project.logo} alt={`${project.title} logo`} loading="lazy" className={`w-auto object-contain ${project.id === "gm" ? "h-8 md:h-10" : project.id === "nurturly" ? "h-5 md:h-6" : "h-6 md:h-9"}`} />
                      </div>
                      <div className="absolute inset-0 flex items-end justify-center px-4 pt-10 md:pt-12">
                        <img src={project.mockup} alt={`${project.title} mockup`} loading="lazy" className={`max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03] ${project.id === "concord" ? "max-h-[105%] scale-110" : "max-h-[100%] scale-105"}`} />
                      </div>
                      <div className="absolute bottom-4 right-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-white/95 px-4 py-1.5 text-[14px] font-semibold uppercase tracking-wider text-black/80 shadow-md">View</div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <h3 className="font-serif text-[20px] font-semibold leading-[1.2] text-black/85 md:text-[22px]">{project.title}</h3>
                      <p className="mt-2 min-h-[68px] max-w-[440px] text-[14px] leading-[1.65] text-black/60">{project.description}</p>
                      <div className="mt-4 min-h-[32px] flex flex-wrap items-start gap-[5px]">
                        {project.tags.map(tag => <span key={tag} className="inline-block rounded-full border border-black/[0.08] bg-black/[0.02] px-2.5 py-[3px] text-[14px] font-medium text-black/55">{tag}</span>)}
                      </div>
                      <div className="mt-4 flex flex-col gap-[5px]">
                        {project.highlights.map(h => (
                          <div key={h} className="relative cursor-default overflow-hidden rounded-md px-2.5 py-[5px] w-fit">
                            <div className="absolute inset-0 bg-black/[0.03]" />
                            <div className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-[450ms] ease-out group-hover:scale-x-100" style={{ background: project.accentColor }} />
                            <span className="relative z-10 text-[14px] font-medium text-black/55 transition-colors duration-[350ms] group-hover:text-white">{h}</span>
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

        {/* ═══════ TESTIMONIALS ═══════ */}
        <section id="collab" className="px-4 pt-24 pb-32 sm:px-8 sm:pt-32 sm:pb-40 md:px-10 md:pt-36 md:pb-48" aria-labelledby="collab-heading">
          <div className="mx-auto max-w-[1200px]">
            <SectionWindowHeader
              windowTitle="Notes — Collaboration"
              eyebrow="COLLABORATION"
              title="Trusted"
              titleAccent="Voices."
            />

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.id}
                  className="flex flex-col gap-5 rounded-xl bg-white p-7 md:p-9"
                  style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-serif text-[16px] italic leading-relaxed text-black/75">
                    "{highlightKeywords(t.text, t.keywords)}"
                  </p>
                  <p className="text-[14px] leading-relaxed text-black/50">
                    {highlightKeywords(t.subtext, t.keywords)}
                  </p>
                  <div className="mt-auto flex items-center gap-3 border-t border-black/[0.06] pt-4">
                    <img src={t.avatar} alt={t.author} className="h-20 w-20 rounded-full object-cover" />
                    <div>
                      <span className="block text-[14px] font-semibold text-black/80">{t.author}</span>
                      <span className="text-[14px] text-black/45">{t.role} · <span className="text-[#4338CA]">{t.company}</span></span>
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
