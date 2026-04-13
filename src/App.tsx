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

/* ── Menu Bar Clock ── */
const MenuBarClock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(t);
  }, []);
  const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return <>{date} {time}</>;
};

const App = () => {
  const [animationPhase, setAnimationPhase] = useState<'scattered' | 'assembling' | 'assembled' | 'photo'>('scattered');
  const [isHovering, setIsHovering] = useState(false);
  const [visiblePieces, setVisiblePieces] = useState<number[]>([]);
  const [puzzleStatus, setPuzzleStatus] = useState<'assembling' | 'assembled'>('assembling');

  const puzzlePieces = [
    { id: 1, label: ["USER", "NEEDS"], variant: "P1", color: "#D4826A", messy: { x: 5, y: 40, r: -25 }, final: { x: 20, y: 25, r: 0 } },
    { id: 2, label: ["DATA", "COMPLEXITY"], variant: "P2", color: "#5B8FD4", messy: { x: 90, y: -10, r: 20 }, final: { x: 110, y: 25, r: 0 } },
    { id: 3, label: ["BUSINESS", "GOALS"], variant: "P3", color: "#5BAF6A", messy: { x: 200, y: 15, r: -30 }, final: { x: 200, y: 25, r: 0 } },
    { id: 4, label: ["TECH", "CONSTRAINTS"], variant: "P4", color: "#D4956A", messy: { x: 10, y: 160, r: 30 }, final: { x: 20, y: 115, r: 0 } },
    { id: 5, label: ["EDGE", "CASES"], variant: "P5", color: "#8B6FD4", messy: { x: 120, y: 175, r: -18 }, final: { x: 110, y: 115, r: 0 } },
    { id: 6, label: ["EMERGING", "TECH"], variant: "P6", color: "#D46FAA", messy: { x: 210, y: 150, r: 22 }, final: { x: 200, y: 115, r: 0 } },
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
        await new Promise(r => setTimeout(r, 350));
        setVisiblePieces(prev => [...prev, i]);
      }
      await new Promise(r => setTimeout(r, 2500));
      if (cancelled) return;
      setAnimationPhase('assembling');
      await new Promise(r => setTimeout(r, 1000));
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

      {/* ═══════════════════════════════════════
           macOS DESKTOP HERO
      ═══════════════════════════════════════ */}
      <section className="w-full h-screen min-h-[760px] relative overflow-hidden flex flex-col"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 15% 35%, rgba(165,180,252,.42) 0%, transparent 60%),
            radial-gradient(ellipse 55% 65% at 84% 68%, rgba(196,181,253,.36) 0%, transparent 55%),
            radial-gradient(ellipse 45% 38% at 54% 4%, rgba(254,215,170,.28) 0%, transparent 50%),
            radial-gradient(ellipse 48% 44% at 8% 92%, rgba(167,243,208,.16) 0%, transparent 45%),
            linear-gradient(156deg, #EEF2FF 0%, #F3F4FF 34%, #F5F0FF 64%, #FFF7ED 100%)
          `
        }}>

        {/* Menu Bar */}
        <div className="relative z-[60] h-7 flex-shrink-0 flex items-center justify-between px-3.5 select-none border-b"
          style={{ background: "rgba(236,236,242,.85)", backdropFilter: "blur(24px)", borderColor: "rgba(0,0,0,.07)" }}>
          <div className="flex items-center">
            <span className="text-[13px] mr-1.5 opacity-75">⌘</span>
            <span className="text-xs font-semibold text-foreground/80 px-2 h-7 flex items-center">Finder</span>
            <span className="text-xs font-medium text-foreground/80 px-2 h-7 flex items-center">File</span>
            <span className="text-xs font-medium text-foreground/80 px-2 h-7 flex items-center">Edit</span>
            <span className="text-xs font-medium text-foreground/80 px-2 h-7 flex items-center hidden sm:flex">View</span>
            <span className="text-xs font-medium text-foreground/80 px-2 h-7 flex items-center hidden sm:flex">Go</span>
            <span className="text-xs font-medium text-foreground/80 px-2 h-7 flex items-center hidden md:flex">Window</span>
            <span className="text-xs font-medium text-foreground/80 px-2 h-7 flex items-center hidden md:flex">Help</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-foreground/75">
            <span className="hidden sm:inline"><MenuBarClock /></span>
            <span>🔋</span>
            <span>◉</span>
          </div>
        </div>

        {/* Desktop Surface */}
        <div className="flex-1 relative overflow-hidden">
          {/* Big name background — MORE VISIBLE */}
          <div className="absolute top-4 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
            <span className="font-sans font-bold text-[clamp(64px,11vw,160px)] tracking-[0.15em] uppercase leading-none whitespace-nowrap"
              style={{ color: "rgba(79,70,229,.12)" }}>
              HYEBIN PARK
            </span>
          </div>

          {/* ── Bio Window — BIGGER ── */}
          <motion.div
            className="absolute z-20 rounded-xl overflow-hidden"
            style={{
              left: "4%", top: "50%", width: "clamp(320px, 42%, 480px)",
              background: "rgba(252,252,255,.97)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(0,0,0,.08)",
              boxShadow: "0 24px 70px rgba(0,0,0,.16), 0 6px 18px rgba(0,0,0,.09)",
              transform: "translateY(-45%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title bar */}
            <div className="h-10 flex items-center px-3.5 gap-3 flex-shrink-0 border-b"
              style={{ background: "rgba(245,244,250,.93)", borderColor: "rgba(0,0,0,.06)" }}>
              <TitleBarDots />
              <span className="flex-1 text-center text-xs font-medium text-muted-foreground">hyebin-park.portfolio</span>
            </div>

            {/* Bio body */}
            <div className="p-7 pb-6 flex flex-col gap-4">
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground">Hi, I am Hyebin Park.</p>
              
              {/* Headline */}
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[clamp(15px,1.6vw,18px)] text-muted-foreground">Turning</span>
                  <span className="font-serif text-[clamp(30px,4vw,46px)] italic text-primary">complexity</span>
                </div>
                <div className="flex items-baseline gap-2 flex-wrap mt-[3px]">
                  <span className="text-[clamp(15px,1.6vw,18px)] text-foreground/25">into</span>
                  <span className="font-serif text-[clamp(30px,4vw,46px)] italic text-foreground">clarity.</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-[1.65]">
                From AI algorithms to crypto workflows,<br />
                I turn ambiguity into structured, usable products<br />
                that drive real business impact.
              </p>

              {/* School */}
              <div className="flex items-center gap-2 text-sm font-medium text-foreground pt-1 border-t border-border">
                🎓 MS-HCI @ University of Michigan
              </div>

              {/* Experience logos */}
              <div>
                <p className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-2">Experience designing & researching for</p>
                <div className="flex gap-2 items-center flex-wrap">
                  <img src={logoLine} alt="LINE" className="w-8 h-8 rounded-lg object-cover shadow-md" />
                  <img src={logoTiktok} alt="TikTok" className="w-8 h-8 rounded-lg object-cover shadow-md" />
                  <img src={logoGm} alt="GM" className="w-8 h-8 rounded-lg object-cover shadow-md" />
                  <img src={logoNaver} alt="NAVER" className="w-8 h-8 rounded-lg object-cover shadow-md" />
                  <img src={logoJstor} alt="JSTOR" className="w-8 h-8 rounded-lg object-cover shadow-md" />
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-[9px] flex-wrap">
                <a href="mailto:hyebinp@umich.edu" className="inline-flex items-center gap-[5px] px-[18px] py-[9px] bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-90 transition-all hover:-translate-y-px">
                  hyebinp@umich.edu ↗
                </a>
                <a href="https://www.linkedin.com/in/hyebinpark/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-[5px] px-[18px] py-[9px] border-[1.5px] border-foreground/15 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all hover:-translate-y-px">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Puzzle Window — BIGGER ── */}
          <motion.div
            className="absolute z-[22] rounded-xl overflow-hidden hidden sm:block"
            style={{
              right: "3%", top: "50%", width: "clamp(340px, 38%, 420px)",
              background: "rgba(252,252,255,.97)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(0,0,0,.08)",
              boxShadow: "0 24px 70px rgba(0,0,0,.16), 0 6px 18px rgba(0,0,0,.09)",
              transform: "translateY(-48%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title bar */}
            <div className="h-10 flex items-center px-3.5 gap-3 flex-shrink-0 border-b"
              style={{ background: "rgba(245,244,250,.93)", borderColor: "rgba(0,0,0,.06)" }}>
              <TitleBarDots />
              <span className="flex-1 text-center text-xs font-medium text-muted-foreground">
                puzzle.complexity — {puzzleStatus === 'assembled' ? 'assembled ✓' : 'assembling'}
              </span>
            </div>

            {/* Scatter bar */}
            <div className="h-[34px] flex items-center px-3 gap-2 border-b"
              style={{ background: "rgba(243,242,248,.88)", borderColor: "rgba(0,0,0,.05)" }}>
              <button onClick={handleScatter}
                className="px-2.5 py-[3px] rounded-[5px] border bg-white text-[11px] font-medium text-foreground hover:bg-secondary transition-colors"
                style={{ borderColor: "rgba(0,0,0,.14)" }}>
                ↺ Scatter
              </button>
              <span className="ml-auto text-[11px] text-muted-foreground">
                {puzzleStatus === 'assembled' ? 'solved ✓' : 'watch it assemble →'}
              </span>
            </div>

            {/* Puzzle container — BIGGER */}
            <div className="bg-[#16161E] px-[18px] pt-5 pb-3.5 relative flex flex-col items-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
              <div className="relative w-[300px] h-[220px]">
                <AnimatePresence>
                  {animationPhase !== "photo" && puzzlePieces.map((p, i) =>
                    (visiblePieces.includes(i) || animationPhase === "assembling" || animationPhase === "assembled") && (
                      <motion.div key={p.id} className="absolute"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                          x: animationPhase === "scattered" ? p.messy.x : p.final.x,
                          y: animationPhase === "scattered" ? p.messy.y : p.final.y,
                          rotate: animationPhase === "scattered" ? p.messy.r : 0,
                          opacity: 1, scale: animationPhase === "scattered" ? 0.95 : 1
                        }}
                        exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.4, delay: i * 0.02 } }}
                        transition={{
                          duration: animationPhase === "scattered" ? 0.6 : 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: animationPhase === "scattered" ? 0 : i * 0.18
                        }}
                        style={{ willChange: "transform", zIndex: animationPhase === "scattered" ? 6 - i : i + 1 }}>
                        <div className="w-[90px] h-[90px] relative"
                          style={{
                            clipPath: `path("${JIGSAW_PATHS[p.variant as keyof typeof JIGSAW_PATHS]}")`,
                            background: p.color,
                          }}>
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                            <span className="text-[9.5px] font-bold tracking-[0.04em] uppercase text-white text-center leading-[1.25] select-none"
                              style={{ textShadow: "0 1px 3px rgba(0,0,0,.25)" }}>
                              {p.label[0]}<br />{p.label[1]}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {animationPhase === "photo" && (
                    <motion.div className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }} style={{ zIndex: 20 }}>
                      <img src={profilePhoto} alt="Hyebin Park" className="w-[280px] h-[210px] object-cover object-top rounded-md" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-center pt-2 pb-1 text-[10px] text-white/[0.28] tracking-[0.06em]">
                {puzzleStatus === 'assembled' ? '← scatter to replay' : 'pieces assembling…'}
              </p>
            </div>
          </motion.div>

          {/* Scroll cue */}
          <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[5px] pointer-events-none z-10"
            style={{ animation: "bob 2s ease-in-out infinite" }}>
            <span className="text-[9px] tracking-[0.12em] uppercase" style={{ color: "rgba(79,70,229,.38)" }}>scroll</span>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 2v12M2 10l5 5 5-5" stroke="hsl(243,75%,59%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Dock */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-end gap-2 px-4 py-2 rounded-[18px] z-30"
          style={{
            background: "rgba(215,212,228,.55)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,.65)",
            boxShadow: "0 4px 20px rgba(0,0,0,.10), inset 0 1px 0 rgba(255,255,255,.55)",
          }}>
          {[
            { emoji: "🗂️", gradient: "linear-gradient(145deg,#818CF8,#4F46E5)", label: "Finder", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
            { emoji: "💼", gradient: "linear-gradient(145deg,#F9A8D4,#EC4899)", label: "Work", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }) },
            { emoji: "💬", gradient: "linear-gradient(145deg,#FDE68A,#F59E0B)", label: "Collaboration", action: () => document.getElementById("collab")?.scrollIntoView({ behavior: "smooth" }) },
          ].map((item) => (
            <button key={item.label} onClick={item.action}
              className="flex flex-col items-center gap-[3px] relative group transition-transform duration-200 hover:-translate-y-2.5 hover:scale-[1.22]">
              <div className="w-11 h-11 rounded-[11px] flex items-center justify-center text-[22px]"
                style={{ background: item.gradient, boxShadow: "0 2px 8px rgba(0,0,0,.18)" }}>
                {item.emoji}
              </div>
              <div className="w-1 h-1 rounded-full bg-black/[0.38]" />
              <span className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 pointer-events-none px-2 py-[3px] rounded-[5px] text-[10px] text-white whitespace-nowrap"
                style={{ background: "rgba(28,26,38,.82)" }}>
                {item.label}
              </span>
            </button>
          ))}

          <div className="w-px h-11 mx-0.5" style={{ background: "rgba(0,0,0,.11)" }} />

          <button onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-[3px] relative group transition-transform duration-200 hover:-translate-y-2.5 hover:scale-[1.22]">
            <div className="w-11 h-11 rounded-[11px] flex items-center justify-center text-[22px]"
              style={{ background: "linear-gradient(145deg,#FCA5A5,#DC2626)", boxShadow: "0 2px 8px rgba(0,0,0,.18)" }}>
              ✉️
            </div>
            <span className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 pointer-events-none px-2 py-[3px] rounded-[5px] text-[10px] text-white whitespace-nowrap"
              style={{ background: "rgba(28,26,38,.82)" }}>
              Contact
            </span>
          </button>
        </div>
      </section>

      {/* ═══ NAVIGATION (sticky, below hero) ═══ */}
      <Navigation />

      {/* ═══ SELECTED WORK — macOS window cards with ACTUAL images ═══ */}
      <section id="work" className="py-20 px-4 sm:px-8 md:px-10 border-t border-border bg-secondary/50">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-primary mb-2.5">Selected Work</p>
          <h2 className="font-serif text-[clamp(26px,3.2vw,38px)] font-normal leading-[1.15] mb-11">
            A collection of projects where I've led<br className="hidden md:inline" /> design efforts to create impactful solutions.
          </h2>

          <div className="grid md:grid-cols-2 gap-7">
            {projects.map((project, idx) => {
              const dark = isDarkBg(project.id);

              const card = (
                <motion.div
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[7px] group"
                  style={{ boxShadow: "0 16px 50px rgba(0,0,0,.12), 0 4px 14px rgba(0,0,0,.07)" }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ boxShadow: "0 28px 75px rgba(0,0,0,.15), 0 8px 22px rgba(0,0,0,.08)" }}
                  key={project.id}
                >
                  {/* Title bar */}
                  <div className="h-[38px] flex items-center px-3.5 gap-3 border-b"
                    style={{ background: "rgba(240,239,245,.97)", borderColor: "rgba(0,0,0,.07)" }}>
                    <TitleBarDots />
                    <span className="flex-1 text-center text-[11.5px] font-medium text-muted-foreground">
                      {project.id}.portfolio — {project.role}
                    </span>
                  </div>

                  {/* Thumbnail with ACTUAL logo + mockup images */}
                  <div className="w-full aspect-[16/10] relative overflow-hidden" style={{ background: project.imageColor }}>
                    {/* Logo at top-left */}
                    <div className="absolute left-5 md:left-7 top-5 md:top-6 z-10">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        loading="lazy"
                        className={`w-auto object-contain ${
                          project.id === "gm"
                            ? "h-16 md:h-24"
                            : project.id === "nurturly"
                              ? "h-7 md:h-9"
                              : "h-8 md:h-12"
                        }`}
                      />
                    </div>

                    {/* Mockup image */}
                    <div className={`absolute inset-0 flex items-center justify-center px-2 pb-2 ${
                      project.id === "concord" || project.id === "openoff"
                        ? "pt-6 md:pt-8"
                        : "pt-12 md:pt-14"
                    }`}>
                      <img
                        src={project.mockup}
                        alt={`${project.title} mockup`}
                        loading="lazy"
                        className={`object-contain transition-transform duration-700 ${
                          project.id === "concord" || project.id === "openoff"
                            ? "max-h-[105%] max-w-[105%] scale-[1.05] group-hover:scale-[1.12]"
                            : "max-h-full max-w-full group-hover:scale-105"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-[20px_24px_22px]" style={{ background: project.imageColor }}>
                    <div className="flex flex-wrap gap-[5px] mb-3">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className={`inline-block px-2.5 py-[3px] rounded-full text-[10.5px] font-medium border ${dark ? "bg-white/10 text-white/75 border-white/[0.08]" : "bg-black/[0.09] text-black/[0.72] border-black/[0.07]"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`font-serif text-[22px] font-normal leading-[1.2] mb-[7px] ${dark ? "text-white/90" : "text-black/85"}`}>
                      {project.title}
                    </div>
                    <p className={`text-[13.5px] leading-[1.65] mb-[13px] max-w-[400px] ${dark ? "text-white/[0.58]" : "text-black/[0.68]"}`}>
                      {project.description}
                    </p>

                    {/* Highlights with hover fill */}
                    <div className="flex flex-wrap gap-[6px] mb-[15px]">
                      {project.highlights.map((hl, hi) => (
                        <div key={hi} className="relative overflow-hidden rounded-[7px] px-3 py-[6px] cursor-default">
                          <div className={`absolute inset-0 ${dark ? "bg-white/12" : "bg-white/45"}`} />
                          <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] ease-out z-0"
                            style={{ background: project.accentColor }} />
                          <span className={`relative z-10 text-xs font-medium transition-colors duration-[350ms] group-hover:text-white ${dark ? "text-white/80" : "text-black/75"}`}>
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 group-hover:rotate-45 ${dark ? "bg-white/15 text-white/70 group-hover:bg-white/90 group-hover:text-black" : "bg-white/70 text-black/60 group-hover:bg-black/[0.82] group-hover:text-white"}`}>
                        ↗
                      </div>
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

      {/* ═══ TESTIMONIALS — 2×2 grid ═══ */}
      <section id="collab" className="py-20 px-4 sm:px-8 md:px-10 border-t border-border">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-primary mb-2.5">Collaboration</p>
          <h2 className="font-serif text-[clamp(26px,3.2vw,38px)] font-normal leading-[1.15] mb-11">
            Words from people<br />I've worked alongside.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-secondary rounded-xl p-7 border border-border flex flex-col justify-between gap-5 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div>
                  <div className="text-4xl font-serif text-primary/35 leading-none mb-1.5">"</div>
                  <p className="font-serif text-[15px] italic leading-[1.75] text-foreground">{t.text}</p>
                  <p className="font-serif text-sm italic leading-[1.65] text-muted-foreground mt-2">{t.subtext}"</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-sm font-semibold mb-0.5">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="text-xs text-primary mt-[1px]">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
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
