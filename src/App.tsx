import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
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

/* ── Phone Mockup (generic wireframe) ── */
const PhoneMockup = ({ accentColor }: { accentColor: string }) => (
  <div className="h-full aspect-[9/19] rounded-[18px] p-[5px] flex flex-col"
    style={{ background: "rgba(10,8,22,.9)", boxShadow: "0 10px 36px rgba(0,0,0,.4), inset 0 0 0 1px rgba(255,255,255,.07)" }}>
    <div className="flex-1 rounded-[14px] overflow-hidden flex flex-col p-[7px_6px_6px] gap-[5px]"
      style={{ background: `linear-gradient(160deg, ${accentColor}22, ${accentColor}44)` }}>
      <div className="w-[28%] h-[7px] rounded bg-black/40 mx-auto mb-1 flex-shrink-0" />
      <div className="h-[6px] rounded-[3px] bg-white/22 flex-shrink-0" style={{ width: "80%" }} />
      <div className="h-[6px] rounded-[3px] bg-white/22 flex-shrink-0" style={{ width: "55%" }} />
      <div className="flex-1 rounded-md bg-white/12 min-h-0" />
      <div className="flex gap-[5px] flex-shrink-0">
        <div className="w-[26px] h-[26px] rounded-[5px] bg-white/18 flex-shrink-0" />
        <div className="flex-1 h-[26px] rounded-[5px] bg-white/12" />
      </div>
      <div className="flex-[0.55] rounded-md bg-white/12 min-h-0" />
      <div className="h-[6px] rounded-[3px] bg-white/22 flex-shrink-0" style={{ width: "40%" }} />
    </div>
  </div>
);

const App = () => {
  const [animationPhase, setAnimationPhase] = useState<'scattered' | 'assembling' | 'assembled' | 'photo'>('scattered');
  const [isHovering, setIsHovering] = useState(false);
  const [puzzleScale, setPuzzleScale] = useState(1);
  const [visiblePieces, setVisiblePieces] = useState<number[]>([]);

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      setPuzzleScale(w < 640 ? 0.65 : w < 768 ? 0.8 : w < 1024 ? 0.9 : 1);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const puzzlePieces = [
    { id: 1, label: ["USER", "NEEDS"], variant: "P1", color: "#D4826A", messy: { x: -60, y: -80, r: -12 }, final: { x: 0, y: 0, r: 0 } },
    { id: 2, label: ["DATA", "COMPLEXITY"], variant: "P2", color: "#5B8FD4", messy: { x: 160, y: -100, r: 18 }, final: { x: 120, y: 0, r: 0 } },
    { id: 3, label: ["BUSINESS", "GOALS"], variant: "P3", color: "#5BAF6A", messy: { x: 380, y: -50, r: 8 }, final: { x: 240, y: 0, r: 0 } },
    { id: 4, label: ["TECH", "CONSTRAINTS"], variant: "P4", color: "#D4956A", messy: { x: -80, y: 200, r: -22 }, final: { x: 0, y: 120, r: 0 } },
    { id: 5, label: ["EDGE", "CASES"], variant: "P5", color: "#8B6FD4", messy: { x: 140, y: 260, r: 15 }, final: { x: 120, y: 120, r: 0 } },
    { id: 6, label: ["EMERGING", "TECH"], variant: "P6", color: "#D46FAA", messy: { x: 400, y: 180, r: -10 }, final: { x: 240, y: 120, r: 0 } },
  ];

  // Animation cycle
  useEffect(() => {
    if (isHovering) {
      setAnimationPhase('assembling');
      const t1 = setTimeout(() => setAnimationPhase('assembled'), 800);
      const t2 = setTimeout(() => setAnimationPhase('photo'), 2000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setAnimationPhase('scattered');
      setVisiblePieces([]);
    }
  }, [isHovering]);

  // Auto loop
  useEffect(() => {
    if (isHovering) return;
    let cancelled = false;
    const run = async () => {
      setVisiblePieces([]);
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
      await new Promise(r => setTimeout(r, 300));
      if (cancelled) return;
      setAnimationPhase('photo');
      await new Promise(r => setTimeout(r, 3000));
      if (cancelled) return;
      setAnimationPhase('scattered');
      setVisiblePieces([]);
      await new Promise(r => setTimeout(r, 500));
      if (!cancelled) run();
    };
    run();
    return () => { cancelled = true; };
  }, [isHovering]);

  const testimonials = [
    { id: "t1", author: "David Rashid", role: "CEO", company: "Concord Systems", text: "Hyebin quickly grasped the business model and technical constraints behind our platform.", subtext: "She didn't just design screens. She transformed backend complexity into seamless, user-first flows that contributed to our business growth." },
    { id: "t2", author: "Elisa Vargas", role: "Product Designer", company: "JSTOR", text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions that drive real user impact.", subtext: "Her user-centered thinking and clarity of intent made a lasting impression on our team." },
    { id: "t3", author: "Jae Hoon Shim", role: "Product Strategy Manager", company: "LINE+", text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.", subtext: "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset. Her passion made our time together impactful." },
    { id: "t4", author: "Jong Hee Hong", role: "Head of Global Communications", company: "TikTok Korea", text: "What always stands out with Hyebin is how she connects her creativity with real curiosity. She's always asking the right questions.", subtext: "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas." },
  ];

  // Determine if a project has a dark background
  const isDarkBg = (id: string) => id === "gm";

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      <Navigation />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-background">
        <div className="w-full px-4 sm:px-8 md:px-16 flex flex-col pb-16 md:pb-24 lg:pb-0 lg:min-h-[calc(100vh-64px)]">
          {/* Subtle grid bg */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.35) 1px, transparent 1px)",
            backgroundSize: "100px 100px"
          }} />

          {/* Background Name */}
          <div className="relative z-10 pt-16 sm:pt-20 md:pt-28 pb-4 sm:pb-6 md:pb-10">
            <h2 className="text-[10vw] sm:text-[12vw] md:text-[10vw] lg:text-9xl font-black uppercase tracking-tighter leading-none text-foreground/[0.04] select-none text-center font-sans">
              HYEBIN PARK
            </h2>
          </div>

          <div className="relative z-10 flex-1 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* LEFT: Text */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}>
                {/* Eyebrow */}
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground pl-4 sm:pl-8 md:pl-[10vw] lg:pl-[12vw] mb-3">
                  Hi, I am Hyebin Park.
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6 sm:mb-8 md:mb-10 select-none text-foreground pl-4 sm:pl-8 md:pl-[10vw] lg:pl-[12vw]">
                  <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground/80">
                    Turning
                  </span>
                  <span className="block font-serif italic text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">complexity</span>
                  <span className="block">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground/25">into{" "}</span>
                    <span className="font-serif italic text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">clarity.</span>
                  </span>
                </h1>

                <p className="text-[13.5px] sm:text-sm md:text-base lg:text-lg leading-[1.65] text-muted-foreground pl-4 sm:pl-8 md:pl-[10vw] lg:pl-[12vw] max-w-md lg:max-w-none">
                  From AI algorithms to crypto workflows,<br className="hidden sm:block" />
                  I turn ambiguity into structured, usable products<br className="hidden sm:block" />
                  that drive real business impact.
                </p>

                {/* Education & Experience */}
                <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 pl-4 sm:pl-8 md:pl-[10vw] lg:pl-[12vw]">
                  <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-3 sm:mb-4 md:mb-6" />
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 md:mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl">🎓</span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-foreground/80">
                      MS-HCI @ University of Michigan
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase mb-2">
                    Experience designing & researching for
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={logoLine} alt="LINE" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover" />
                    <img src={logoTiktok} alt="TikTok" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover" />
                    <img src={logoGm} alt="GM" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover" />
                    <img src={logoNaver} alt="NAVER" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover" />
                    <img src={logoJstor} alt="JSTOR" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg object-cover" />
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-[9px] flex-wrap mt-6">
                    <a href="mailto:hyebinp@umich.edu" className="inline-flex items-center gap-[5px] px-[18px] py-[9px] bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-90 transition-opacity">
                      hyebinp@umich.edu ↗
                    </a>
                    <a href="https://www.linkedin.com/in/hyebinpark/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[5px] px-[18px] py-[9px] border-[1.5px] border-foreground/15 rounded-full text-xs font-medium hover:border-primary hover:text-primary transition-all">
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Puzzle */}
            <div className="w-full lg:w-1/2 h-[220px] sm:h-[280px] md:h-[350px] lg:h-[500px] relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-[220px] h-[180px] sm:w-[280px] sm:h-[220px] md:w-[350px] md:h-[280px] lg:w-[480px] lg:h-[360px]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                <AnimatePresence>
                  {animationPhase !== "photo" && puzzlePieces.map((p, i) =>
                    (visiblePieces.includes(i) || animationPhase === "assembling" || animationPhase === "assembled") && (
                      <motion.div key={p.id} className="absolute"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                          x: (animationPhase === "scattered" ? p.messy.x : p.final.x) * puzzleScale,
                          y: (animationPhase === "scattered" ? p.messy.y : p.final.y) * puzzleScale,
                          rotate: animationPhase === "scattered" ? p.messy.r : 0,
                          opacity: 1, scale: 1
                        }}
                        exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.4, delay: i * 0.02 } }}
                        transition={{ duration: animationPhase === "scattered" ? 0.6 : 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: animationPhase === "scattered" ? 0 : i * 0.1 }}
                        style={{ willChange: "transform", zIndex: Math.floor(i / 3) * 10 + i % 3 }}>
                        <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] relative"
                          style={{ clipPath: `path("${JIGSAW_PATHS[p.variant as keyof typeof JIGSAW_PATHS]}")`, background: `linear-gradient(145deg, ${p.color}, ${p.color}dd)` }}>
                          <div className="absolute left-[8px] top-[8px] sm:left-[10px] sm:top-[10px] md:left-[12px] md:top-[12px] lg:left-[15px] lg:top-[15px] w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] flex flex-col items-center justify-center">
                            <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-[14px] font-black tracking-wide text-white text-center leading-none select-none drop-shadow-sm">{p.label[0]}</span>
                            <span className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[11px] font-bold tracking-wider text-white/90 text-center leading-none select-none mt-0.5 sm:mt-1 lg:mt-1.5 drop-shadow-sm">{p.label[1]}</span>
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
                      <img src={profilePhoto} alt="Hyebin Park" className="w-[180px] h-[230px] sm:w-[240px] sm:h-[300px] md:w-[320px] md:h-[400px] lg:w-[400px] lg:h-[500px] object-cover object-top" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SELECTED WORK — macOS window cards ═══ */}
      <section id="work" className="py-20 px-4 sm:px-8 md:px-10 border-t border-border bg-secondary/50">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-primary mb-2.5">Selected Work</p>
          <h2 className="font-serif text-[clamp(26px,3.2vw,38px)] font-normal leading-[1.15] mb-11">
            A collection of projects where I've led<br className="hidden md:inline" />design efforts to create impactful solutions.
          </h2>

          <div className="grid md:grid-cols-2 gap-7">
            {projects.map((project, idx) => {
              const dark = isDarkBg(project.id);
              const isLastOdd = idx === projects.length - 1 && projects.length % 2 !== 0;

              const card = (
                <motion.div
                  className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[7px] group ${isLastOdd ? "md:col-span-2 md:max-w-[580px] md:mx-auto md:w-full" : ""}`}
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
                    <span className="flex-1 text-center text-[11.5px] font-medium text-muted-foreground" style={{ fontFamily: "-apple-system, var(--font-sans)" }}>
                      {project.id}.portfolio — {project.role}
                    </span>
                  </div>

                  {/* Thumbnail with logo pill + phone mockup */}
                  <div className="w-full aspect-[16/10] relative overflow-hidden" style={{ background: project.imageColor }}>
                    {/* Logo pill */}
                    <div className="absolute left-[22px] top-1/2 -translate-y-1/2 z-10 max-w-[38%]">
                      <div className="inline-flex items-center gap-[7px] px-3.5 py-[7px] rounded-[9px] font-serif italic font-semibold text-[15px] text-foreground whitespace-nowrap"
                        style={{ background: "rgba(255,255,255,.88)", backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(0,0,0,.14)" }}>
                        <span className="w-[9px] h-[9px] rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                        {project.title}
                      </div>
                    </div>
                    {/* Phone mockup */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[52%] h-[93%] flex items-center justify-end pr-3.5">
                      <PhoneMockup accentColor={project.accentColor} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-[20px_24px_22px]" style={{ background: project.imageColor }}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-[5px] mb-3">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className={`inline-block px-2.5 py-[3px] rounded-full text-[10.5px] font-medium border ${dark ? "bg-white/10 text-white/75 border-white/8" : "bg-black/9 text-black/72 border-black/7"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`font-serif text-[22px] font-normal leading-[1.2] mb-[7px] ${dark ? "text-white/90" : "text-black/85"}`}>
                      {project.title}
                    </div>
                    <p className={`text-[13.5px] leading-[1.65] mb-[13px] max-w-[400px] ${dark ? "text-white/58" : "text-black/68"}`}>
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
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 group-hover:rotate-45 ${dark ? "bg-white/15 text-white/70 group-hover:bg-white/90 group-hover:text-black" : "bg-white/70 text-black/60 group-hover:bg-black/82 group-hover:text-white"}`}>
                        ↗
                      </div>
                    </div>
                  </div>
                </motion.div>
              );

              if (project.externalUrl) {
                return (
                  <a key={project.id} href={project.externalUrl} target="_blank" rel="noopener noreferrer"
                    className={`block ${isLastOdd ? "md:col-span-2 flex justify-center" : ""}`}>
                    {card}
                  </a>
                );
              }
              return (
                <Link key={project.id} to={`/${project.id}`}
                  className={`block ${isLastOdd ? "md:col-span-2 flex justify-center" : ""}`}>
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
      <Footer />
    </div>
  );
};

export default App;
