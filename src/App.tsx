import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";
import logoLine from "@/assets/logo-line.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoGm from "@/assets/logo-gm.png";
import logoNaver from "@/assets/logo-naver.png";
import logoJstor from "@/assets/logo-jstor.png";
import { projects } from "@/data/projects";

// Jigsaw paths
const JIGSAW_PATHS = {
  P1: "M0,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L75,120 C75,120 75,140 60,140 C45,140 45,120 45,120 L0,120 Z",
  P2: "M0,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L75,120 C75,120 75,140 60,140 C45,140 45,120 45,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z",
  P3: "M0,0 L120,0 L120,120 L75,120 C75,120 75,140 60,140 C45,140 45,120 45,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z",
  P4: "M0,0 L45,0 C45,0 45,20 60,20 C75,20 75,0 75,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L0,120 Z",
  P5: "M0,0 L45,0 C45,0 45,20 60,20 C75,20 75,0 75,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z",
  P6: "M0,0 L45,0 C45,0 45,20 60,20 C75,20 75,0 75,0 L120,0 L120,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z"
};

/* ── macOS Title-Bar Dots ── */
const TitleBarDots = () => (
  <div className="flex gap-[7px] items-center flex-shrink-0">
    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
  </div>
);

const PuzzleTile = ({
  color,
  label,
  variant,
}: {
  color: string;
  label: string[];
  variant: keyof typeof JIGSAW_PATHS;
}) => (
  <div className="relative w-[110px] h-[110px] lg:w-[118px] lg:h-[118px]">
    <svg
      viewBox="0 0 140 140"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      focusable="false"
    >
      <path d={JIGSAW_PATHS[variant]} fill={color} />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <span
        className="text-center text-[10px] lg:text-[11px] font-bold tracking-[0.04em] uppercase text-primary-foreground leading-[1.15] select-none"
        style={{ textShadow: "0 1px 3px hsl(var(--foreground) / 0.25)" }}
      >
        {label[0]}
        <br />
        {label[1]}
      </span>
    </div>
  </div>
);

/* ── Testimonial Grid (Frosted Glass) ── */
const TestimonialGrid = ({ testimonials }: { testimonials: { id: string; author: string; role: string; company: string; text: string; subtext: string }[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.id}
          className={`group relative flex flex-col gap-6 rounded-[24px] p-8 md:p-10 transition-transform duration-500 ease-out hover:-translate-y-1.5 ${i % 2 === 1 ? "md:mt-14" : ""}`}
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px) saturate(1.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 48px -12px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "0 28px 60px -12px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Subtle mac dots accent */}
          <div className="flex gap-1.5 opacity-30 group-hover:opacity-50 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
          </div>

          <p className="font-serif text-lg md:text-xl italic leading-relaxed text-white/85">
            "{t.text}"
          </p>
          <p className="text-sm leading-relaxed text-white/50">
            {t.subtext}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-sm font-semibold text-white/60">
              {t.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <span className="text-sm font-semibold text-white block">{t.author}</span>
              <span className="text-xs text-white/50">{t.role} · <span className="text-indigo-400">{t.company}</span></span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const App = () => {
  const [animationPhase, setAnimationPhase] = useState<'scattered' | 'assembling' | 'assembled' | 'photo'>('scattered');
  const [isHovering, setIsHovering] = useState(false);
  const [visiblePieces, setVisiblePieces] = useState<number[]>([]);
  const [puzzleStatus, setPuzzleStatus] = useState<'assembling' | 'assembled'>('assembling');

  const puzzlePieces = [
    { id: 1, label: ["USER", "NEEDS"], variant: "P1", color: "hsl(15 56% 63%)", messy: { x: 18, y: 34, r: -12 }, final: { x: 12, y: 10, r: 0 } },
    { id: 2, label: ["DATA", "COMPLEXITY"], variant: "P2", color: "hsl(214 52% 59%)", messy: { x: 122, y: 0, r: 16 }, final: { x: 122, y: 10, r: 0 } },
    { id: 3, label: ["BUSINESS", "GOALS"], variant: "P3", color: "hsl(126 33% 53%)", messy: { x: 236, y: 18, r: -24 }, final: { x: 232, y: 10, r: 0 } },
    { id: 4, label: ["TECH", "CONSTRAINTS"], variant: "P4", color: "hsl(27 56% 61%)", messy: { x: 12, y: 138, r: 28 }, final: { x: 12, y: 120, r: 0 } },
    { id: 5, label: ["EDGE", "CASES"], variant: "P5", color: "hsl(258 50% 62%)", messy: { x: 132, y: 156, r: -14 }, final: { x: 122, y: 120, r: 0 } },
    { id: 6, label: ["EMERGING", "TECH"], variant: "P6", color: "hsl(318 48% 59%)", messy: { x: 238, y: 136, r: 18 }, final: { x: 232, y: 120, r: 0 } },
  ];

  // Animation cycle
  useEffect(() => {
    if (isHovering) {
      setAnimationPhase('assembling');
      setPuzzleStatus('assembling');
      const t1 = setTimeout(() => { setAnimationPhase('assembled'); setPuzzleStatus('assembled'); }, 800);
      const t2 = setTimeout(() => setAnimationPhase('photo'), 2000);

      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setAnimationPhase('scattered');
      setPuzzleStatus('assembling');
      setVisiblePieces([]);
    }
  }, [isHovering]);

  // Auto loop
  useEffect(() => {
    if (isHovering) return;
    let cancelled = false;
    const run = async () => {
      setVisiblePieces([]);
      setPuzzleStatus('assembling');
      for (let i = 0; i < puzzlePieces.length; i++) {
        if (cancelled) return;
        await new Promise(r => setTimeout(r, 800));
        setVisiblePieces(prev => [...prev, i]);
      }
      await new Promise(r => setTimeout(r, 3500));
      if (cancelled) return;
      setAnimationPhase('assembling');
      await new Promise(r => setTimeout(r, 2000));
      if (cancelled) return;
      setAnimationPhase('assembled');
      setPuzzleStatus('assembled');
      await new Promise(r => setTimeout(r, 300));
      if (cancelled) return;
      setAnimationPhase('photo');
      await new Promise(r => setTimeout(r, 3000));
      if (cancelled) return;
      setAnimationPhase('scattered');
      setPuzzleStatus('assembling');
      setVisiblePieces([]);
      await new Promise(r => setTimeout(r, 500));
      if (!cancelled) run();
    };
    run();
    return () => { cancelled = true; };
  }, [isHovering]);

  const handleScatter = () => {
    setAnimationPhase('scattered');
    setPuzzleStatus('assembling');
    setVisiblePieces([]);
  };

  const testimonials = [
    { id: "t1", author: "David Rashid", role: "CEO", company: "Concord Systems", text: "Hyebin quickly grasped the business model and technical constraints behind our platform.", subtext: "She didn't just design screens. She transformed backend complexity into seamless, user-first flows that contributed to our business growth." },
    { id: "t2", author: "Elisa Vargas", role: "Product Designer", company: "JSTOR", text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions that drive real user impact.", subtext: "Her user-centered thinking and clarity of intent made a lasting impression on our team." },
    { id: "t3", author: "Jae Hoon Shim", role: "Product Strategy Manager", company: "LINE+", text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.", subtext: "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset. Her passion made our time together impactful." },
    { id: "t4", author: "Jong Hee Hong", role: "Head of Global Communications", company: "TikTok Korea", text: "What always stands out with Hyebin is how she connects her creativity with real curiosity. She's always asking the right questions.", subtext: "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas." },
  ];

  const isDarkBg = (id: string) => id === "gm";

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      {/* Sticky Navigation — consistent across scroll */}
      <Navigation />

      {/* ═══════════════════════════════════════
           macOS DESKTOP HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[900px] w-full flex-col overflow-hidden lg:min-h-screen"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 30% 100%, rgba(56,189,248,.45) 0%, transparent 50%),
            radial-gradient(ellipse 100% 70% at 70% 0%, rgba(99,102,241,.35) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(14,165,233,.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 90% 80%, rgba(168,85,247,.15) 0%, transparent 40%),
            linear-gradient(180deg, #1e40af 0%, #2563eb 20%, #3b82f6 40%, #38bdf8 70%, #7dd3fc 100%)
          `
        }}>

        {/* Big background name */}
        <div className="absolute inset-x-0 top-[15%] z-[1] flex items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
          <span
            className="font-sans font-black text-[clamp(80px,14vw,220px)] tracking-[0.12em] uppercase leading-none whitespace-nowrap select-none"
            style={{ color: "rgba(255,255,255,0.08)" }}
          >
            HYEBIN PARK
          </span>
        </div>

        {/* Desktop Surface */}
        <div className="relative flex-1 px-5 pb-24 pt-6 sm:px-8 md:px-10 lg:px-12 lg:pb-28">

          {/* Bio Widget — top left, small frosted card */}
          <motion.div
            className="relative z-20 w-[280px] sm:w-[300px] rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(30px) saturate(1.5)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 16px 50px rgba(0,0,0,.15)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <img src={profilePhoto} alt="Hyebin Park" className="w-12 h-12 rounded-full object-cover object-[center_20%] border-2 border-white/30" />
                <div>
                  <h2 className="text-[15px] font-bold text-white leading-tight">Hyebin Park</h2>
                  <p className="text-[11px] text-white/60">Strategic AI Product Designer</p>
                </div>
              </div>
              <p className="text-[12px] leading-[1.6] text-white/70 mb-3">
                Turning complexity into clarity.<br/>
                MS-HCI @ University of Michigan
              </p>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-[11px] text-green-300 font-medium">Available for work</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <img src={logoLine} alt="LINE" className="w-7 h-7 rounded-lg object-cover" />
                <img src={logoTiktok} alt="TikTok" className="w-7 h-7 rounded-lg object-cover" />
                <img src={logoGm} alt="GM" className="w-7 h-7 rounded-lg object-cover" />
                <img src={logoNaver} alt="NAVER" className="w-7 h-7 rounded-lg object-cover" />
                <img src={logoJstor} alt="JSTOR" className="w-7 h-7 rounded-lg object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Control Center — top right */}
          <motion.div
            className="absolute top-6 right-5 z-20 hidden lg:block sm:right-8 md:right-10 lg:right-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="rounded-2xl p-3.5 w-[170px]" style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(30px) saturate(1.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
            }}>
              <div className="grid grid-cols-2 gap-1.5 mb-2">
                {[
                  { icon: "📶", label: "Wi-Fi", active: true },
                  { icon: "🔵", label: "Bluetooth", active: true },
                  { icon: "🌙", label: "Focus", active: false },
                  { icon: "✈️", label: "AirDrop", active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-1 rounded-lg px-2 py-1.5 text-[9px] font-medium ${item.active ? 'bg-blue-500/70 text-white' : 'bg-white/10 text-white/50'}`}>
                    <span className="text-[10px]">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[9px] text-white/50">
                  <span>Display</span><span className="text-white/70">73%</span>
                </div>
                <div className="h-[3px] rounded-full bg-white/15 overflow-hidden">
                  <div className="h-full w-[73%] rounded-full bg-white/70" />
                </div>
                <div className="flex items-center justify-between text-[9px] text-white/50">
                  <span>🔊 Volume</span><span className="text-white/70">75%</span>
                </div>
                <div className="h-[3px] rounded-full bg-white/15 overflow-hidden">
                  <div className="h-full w-[75%] rounded-full bg-white/70" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Icons — project mockups scattered like macOS desktop files */}
          <div className="relative z-10 mt-10 mx-auto max-w-[900px] lg:mt-14">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-14 md:gap-x-16 lg:gap-x-20 lg:gap-y-8">
              {projects.map((project, idx) => {
                const link = project.externalUrl || `/${project.id}`;
                const isExternal = !!project.externalUrl;
                const El = isExternal ? 'a' : Link;
                const elProps: any = isExternal
                  ? { href: link, target: "_blank", rel: "noopener noreferrer" }
                  : { to: link };

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  >
                    <El {...elProps} className="flex flex-col items-center gap-2 group cursor-pointer">
                      <div
                        className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-[18px] overflow-hidden shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        style={{ background: project.imageColor }}
                      >
                        <img
                          src={project.mockup}
                          alt={project.title}
                          loading="lazy"
                          className="w-[80%] h-[80%] object-contain"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-white/80 text-center leading-tight group-hover:text-white transition-colors max-w-[100px] drop-shadow-sm">
                        {project.title}
                      </span>
                    </El>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dock */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-0 px-3 py-2 rounded-[20px] z-30"
          style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(28px) saturate(1.8)",
            border: "1px solid rgba(255,255,255,.3)",
            boxShadow: "0 8px 40px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.2)",
          }}>
          {(() => {
            const mainItems = [
              { icon: "📂", label: "Work", bg: "linear-gradient(135deg, #7B6EF6, #5B4CD8)", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }) },
              { icon: "💼", label: "Explore", bg: "linear-gradient(135deg, #F472B6, #DB2777)", action: () => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" }) },
              { icon: "📋", label: "About", bg: "linear-gradient(135deg, #6EE7B7, #10B981)", action: () => window.location.href = "/about" },
              { icon: "💬", label: "CV", bg: "linear-gradient(135deg, #FBBF24, #F59E0B)", action: () => window.open("https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing", "_blank") },
            ];
            const contactItem = { icon: "✉️", label: "Contact", bg: "linear-gradient(135deg, #F87171, #DC2626)", action: () => window.location.href = "mailto:hyebinp@umich.edu" };

            return (
              <>
                <div className="flex items-center gap-2 px-1">
                  {mainItems.map((item, i) => (
                    <button key={i} onClick={item.action} className="flex flex-col items-center gap-0.5 group">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-[11px] flex items-center justify-center text-lg shadow-md group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-200"
                        style={{ background: item.bg }}>
                        {item.icon}
                      </div>
                      <span className="text-[8px] font-medium text-white/60">{item.label}</span>
                    </button>
                  ))}
                </div>
                <div className="w-px h-8 bg-white/20 mx-1.5" />
                <div className="px-1">
                  <button onClick={contactItem.action} className="flex flex-col items-center gap-0.5 group">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-[11px] flex items-center justify-center text-lg shadow-md group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-200"
                      style={{ background: contactItem.bg }}>
                      {contactItem.icon}
                    </div>
                    <span className="text-[8px] font-medium text-white/60">{contactItem.label}</span>
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ═══ SELECTED WORK — reference-style cards with macOS title bar ═══ */}
      <section id="work" className="py-28 sm:py-36 px-4 sm:px-8 md:px-10 border-t border-border bg-secondary/50">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Selected Work</p>
          <h2 className="text-[clamp(42px,6vw,80px)] font-black leading-[1.05] tracking-tight mb-1">Strategic</h2>
          <h2 className="font-serif text-[clamp(42px,6vw,80px)] italic font-normal leading-[1.05] tracking-tight text-muted-foreground/30 mb-20">Outputs.</h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16" style={{ gridAutoRows: "1fr" }}>
            {projects.map((project, idx) => {
              const dark = isDarkBg(project.id);

              const card = (
                <motion.div
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group flex flex-col h-full"
                  style={{ boxShadow: "0 12px 40px rgba(0,0,0,.1), 0 4px 12px rgba(0,0,0,.06)" }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ boxShadow: "0 24px 60px rgba(0,0,0,.14), 0 8px 20px rgba(0,0,0,.08)" }}
                  key={project.id}
                >
                  {/* Thumbnail — large, full width */}
                  <div className="w-full aspect-[16/9] relative overflow-hidden" style={{ background: project.imageColor }}>
                    {/* Logo pill top-left */}
                    <div className="absolute left-4 md:left-6 top-4 md:top-5 z-10">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        loading="lazy"
                        className={`w-auto object-contain ${
                          project.id === "gm"
                            ? "h-8 md:h-10"
                            : project.id === "nurturly"
                              ? "h-5 md:h-6"
                              : "h-6 md:h-9"
                        }`}
                      />
                    </div>

                    {/* Mockup centered */}
                    <div className="absolute inset-0 flex items-end justify-center px-4 pt-10 md:pt-12">
                      <img
                        src={project.mockup}
                        alt={`${project.title} mockup`}
                        loading="lazy"
                        className={`object-contain max-w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                          project.id === "concord" ? "max-h-[95%]" : "max-h-[88%]"
                        }`}
                      />
                    </div>

                    {/* VIEW pill */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-4 py-1.5 rounded-full bg-white/90 text-[11px] font-semibold tracking-wider uppercase text-foreground/80 shadow-md">
                        VIEW
                      </div>
                    </div>
                  </div>

                  {/* Content below image — white/light bg */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col bg-background">
                    <h3 className="font-serif text-[22px] md:text-[26px] font-semibold leading-[1.2] mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-[13.5px] md:text-[14.5px] leading-[1.65] text-muted-foreground mb-4 max-w-[440px]">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-[5px] mb-4">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className="inline-block px-2.5 py-[3px] rounded-full text-[10.5px] font-medium border bg-secondary text-muted-foreground border-border">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-[6px] mt-auto">
                      {project.highlights.map((hl, hi) => (
                        <div key={hi} className="relative overflow-hidden rounded-[7px] px-3 py-[6px] cursor-default">
                          <div className="absolute inset-0 bg-secondary" />
                          <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] ease-out z-0"
                            style={{ background: project.accentColor }} />
                          <span className="relative z-10 text-xs font-medium transition-colors duration-[350ms] group-hover:text-white text-foreground/75">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );

              if (project.externalUrl) {
                return (
                  <a key={project.id} href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block">
                    {card}
                  </a>
                );
              }
              return (
                <Link key={project.id} to={`/${project.id}`} className="block">
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS — Dark backdrop for frosted glass ═══ */}
      <section id="collab" className="relative py-28 sm:py-32 px-4 sm:px-8 md:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(165deg, #0F0F1A 0%, #1A1A2E 40%, #16213E 70%, #0F0F1A 100%)",
        }}>
        {/* Ambient glow blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,.6), transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(168,85,247,.5), transparent 70%)" }} />

        <div className="relative max-w-[1060px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-4">Collaboration</p>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-black leading-[1.1] tracking-tight mb-14 text-white">
            Words from people<br className="hidden sm:block" />I've worked alongside.
          </h2>

          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>

      {/* Footer (includes CTA) */}
      <div id="cta-section">
        <Footer />
      </div>
    </div>
  );
};

export default App;
