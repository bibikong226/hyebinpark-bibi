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

/* ── Testimonial Carousel ── */
const TestimonialCarousel = ({ testimonials }: { testimonials: { id: string; author: string; role: string; company: string; text: string; subtext: string }[] }) => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setActive(prev => (prev + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total]);

  const t = testimonials[active];

  return (
    <div className="relative">
      {/* Main featured quote — macOS window */}
      <motion.div
        className="rounded-xl overflow-hidden"
        style={{
          background: "hsl(var(--background) / 0.97)",
          backdropFilter: "blur(20px)",
          border: "1px solid hsl(var(--foreground) / 0.08)",
          boxShadow: "0 16px 50px rgba(0,0,0,.1), 0 4px 14px rgba(0,0,0,.05)",
        }}
      >
        <div className="h-9 flex items-center px-3.5 gap-3 border-b"
          style={{ background: "hsl(var(--secondary) / 0.86)", borderColor: "hsl(var(--foreground) / 0.06)" }}>
          <TitleBarDots />
          <span className="flex-1 text-center text-[10.5px] font-medium text-muted-foreground">
            testimonials.txt — {active + 1}/{total}
          </span>
        </div>

        <div className="p-8 md:p-12 lg:p-16 min-h-[280px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="font-serif text-[clamp(18px,2.2vw,28px)] italic leading-[1.6] text-foreground/90">
                "{t.text}"
              </p>
              <p className="text-sm md:text-base leading-[1.7] text-muted-foreground max-w-2xl">
                {t.subtext}
              </p>
              <div className="pt-2">
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}, <span className="text-primary">{t.company}</span></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation dots + names */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {testimonials.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-2 transition-all duration-300 group ${i === active ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-primary" : "w-4 bg-muted-foreground"}`} />
            <span className="text-[11px] font-medium text-muted-foreground hidden sm:block">{item.author.split(" ")[0]}</span>
          </button>
        ))}
      </div>
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

      {/* ═══════════════════════════════════════
           macOS DESKTOP HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[900px] w-full flex-col overflow-hidden lg:min-h-screen"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 15% 35%, rgba(165,180,252,.42) 0%, transparent 60%),
            radial-gradient(ellipse 55% 65% at 84% 68%, rgba(196,181,253,.36) 0%, transparent 55%),
            radial-gradient(ellipse 45% 38% at 54% 4%, rgba(254,215,170,.28) 0%, transparent 50%),
            radial-gradient(ellipse 48% 44% at 8% 92%, rgba(167,243,208,.16) 0%, transparent 45%),
            linear-gradient(156deg, #EEF2FF 0%, #F3F4FF 34%, #F5F0FF 64%, #FFF7ED 100%)
          `
        }}>

        {/* Navigation header at top of hero */}
        <Navigation />

        {/* Desktop Surface */}
        <div className="relative flex-1 overflow-hidden px-4 pb-28 pt-20 sm:px-6 md:px-8 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="absolute inset-x-0 top-6 z-[1] flex items-center justify-center overflow-hidden pointer-events-none lg:top-10" aria-hidden="true">
            <span
              className="font-sans font-black text-[clamp(72px,12vw,190px)] tracking-[0.14em] uppercase leading-none whitespace-nowrap select-none"
              style={{ color: "hsl(0 0% 78% / 0.5)" }}
            >
              HYEBIN PARK
            </span>
          </div>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-start justify-center">
            <div className="grid w-full items-start gap-6 pt-44 md:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] md:pt-40 lg:grid-cols-[minmax(0,1.14fr)_minmax(380px,0.9fr)] lg:gap-0 lg:pt-44 xl:grid-cols-[minmax(0,1.12fr)_minmax(430px,0.88fr)]">
              <motion.div
                className="relative z-20 overflow-hidden rounded-[28px]"
                style={{
                  background: "hsl(var(--background) / 0.96)",
                  backdropFilter: "blur(40px)",
                  border: "1px solid hsl(var(--foreground) / 0.08)",
                  boxShadow: "0 24px 70px rgba(0,0,0,.16), 0 6px 18px rgba(0,0,0,.09)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="flex h-11 items-center gap-3 border-b px-3.5"
                  style={{ background: "hsl(var(--secondary) / 0.86)", borderColor: "hsl(var(--foreground) / 0.06)" }}
                >
                  <TitleBarDots />
                  <span className="flex-1 text-center text-xs font-medium text-muted-foreground">hyebin-park.portfolio</span>
                </div>

                <div className="flex flex-col gap-6 p-8 pb-8 sm:p-9 lg:min-h-[520px] lg:justify-center lg:p-11 xl:min-h-[560px] xl:p-14">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                      <span className="text-[clamp(22px,2.2vw,30px)] text-muted-foreground">Turning</span>
                      <span className="font-serif text-[clamp(48px,5.8vw,82px)] italic text-primary leading-none">complexity</span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                      <span className="text-[clamp(22px,2.2vw,30px)] text-muted-foreground">into</span>
                      <span className="font-serif text-[clamp(48px,5.8vw,82px)] italic text-primary leading-none">clarity.</span>
                    </div>
                  </div>

                  <p className="max-w-[44rem] text-[15px] leading-[1.8] text-muted-foreground md:text-[1.05rem]">
                    From AI algorithms to crypto workflows,<br className="hidden sm:block" />
                    I turn ambiguity into structured, usable products<br className="hidden sm:block" />
                    that drive real business impact.
                  </p>

                  <div className="flex items-center gap-2 border-t border-border pt-5 text-base font-medium text-foreground md:text-[1.05rem]">
                    🎓 MS-HCI @ University of Michigan
                  </div>

                  <div>
                    <p className="mb-3.5 text-[11px] tracking-[0.12em] uppercase text-muted-foreground">Experience designing & researching for</p>
                    <div className="flex flex-wrap items-center gap-3.5">
                      <img src={logoLine} alt="LINE" className="w-10 h-10 rounded-xl object-cover shadow-md" />
                      <img src={logoTiktok} alt="TikTok" className="w-10 h-10 rounded-xl object-cover shadow-md" />
                      <img src={logoGm} alt="GM" className="w-10 h-10 rounded-xl object-cover shadow-md" />
                      <img src={logoNaver} alt="NAVER" className="w-10 h-10 rounded-xl object-cover shadow-md" />
                      <img src={logoJstor} alt="JSTOR" className="w-10 h-10 rounded-xl object-cover shadow-md" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="mailto:hyebinp@umich.edu" className="inline-flex items-center gap-[5px] rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-px hover:opacity-90">
                      hyebinp@umich.edu ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hyebinpark/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[5px] rounded-full border-[1.5px] border-foreground/15 px-5 py-3 text-sm font-medium transition-all hover:-translate-y-px hover:border-primary hover:text-primary"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative z-[22] overflow-hidden rounded-[28px] md:-ml-8 md:mt-10 lg:-ml-12 lg:mt-8 xl:-ml-16"
                style={{
                  background: "hsl(var(--background) / 0.96)",
                  backdropFilter: "blur(40px)",
                  border: "1px solid hsl(var(--foreground) / 0.08)",
                  boxShadow: "0 24px 70px rgba(0,0,0,.16), 0 6px 18px rgba(0,0,0,.09)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="flex h-11 items-center gap-3 border-b px-3.5"
                  style={{ background: "hsl(var(--secondary) / 0.86)", borderColor: "hsl(var(--foreground) / 0.06)" }}
                >
                  <TitleBarDots />
                  <span className="flex-1 text-center text-xs font-medium text-muted-foreground">
                    puzzle.complexity — {puzzleStatus === 'assembled' ? 'assembled ✓' : 'assembling'}
                  </span>
                </div>

                <div
                  className="flex h-[38px] items-center gap-2 border-b px-3"
                  style={{ background: "hsl(var(--secondary) / 0.78)", borderColor: "hsl(var(--foreground) / 0.05)" }}
                >
                  <button
                    onClick={handleScatter}
                    className="rounded-[8px] border bg-background px-3 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-secondary"
                    style={{ borderColor: "hsl(var(--foreground) / 0.14)" }}
                  >
                    ↺ Scatter
                  </button>
                  <span className="ml-auto text-[11px] text-muted-foreground">
                    {puzzleStatus === 'assembled' ? 'solved ✓' : 'watch it assemble →'}
                  </span>
                </div>

                <div
                  className="relative flex flex-col items-center px-4 pb-4 pt-5 sm:px-5"
                  style={{ background: "hsl(var(--secondary) / 0.5)" }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative h-[258px] w-[352px] max-w-full lg:h-[276px] lg:w-[372px]">
                    <AnimatePresence>
                      {animationPhase !== "photo" && puzzlePieces.map((p, i) =>
                        (visiblePieces.includes(i) || animationPhase === "assembling" || animationPhase === "assembled") && (
                          <motion.div
                            key={p.id}
                            className="absolute"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{
                              x: animationPhase === "scattered" ? p.messy.x : p.final.x,
                              y: animationPhase === "scattered" ? p.messy.y : p.final.y,
                              rotate: animationPhase === "scattered" ? p.messy.r : 0,
                              opacity: 1,
                              scale: animationPhase === "scattered" ? 0.97 : 1,
                            }}
                            exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.4, delay: i * 0.02 } }}
                            transition={{
                              duration: animationPhase === "scattered" ? 1.0 : 1.6,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: animationPhase === "scattered" ? 0 : i * 0.35,
                            }}
                            style={{ willChange: "transform", zIndex: animationPhase === "scattered" ? 6 - i : i + 1 }}
                          >
                            <PuzzleTile color={p.color} label={p.label} variant={p.variant as keyof typeof JIGSAW_PATHS} />
                          </motion.div>
                        )
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {animationPhase === "photo" && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ zIndex: 20 }}
                        >
                          <img src={profilePhoto} alt="Hyebin Park" className="w-full h-full rounded-xl object-cover object-[center_20%]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className="pb-1 pt-3 text-center text-[10px] tracking-[0.06em] text-muted-foreground/40">
                    {puzzleStatus === 'assembled' ? '← scatter to replay' : 'pieces assembling…'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Dock — macOS style with colored icon tiles */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-0 px-3 py-2.5 rounded-[22px] z-30"
          style={{
            background: "rgba(240,240,245,.75)",
            backdropFilter: "blur(28px) saturate(1.8)",
            border: "1px solid rgba(255,255,255,.5)",
            boxShadow: "0 8px 40px rgba(0,0,0,.1), 0 2px 8px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
          }}>
          {(() => {
            const mainItems = [
              { icon: "📂", bg: "linear-gradient(135deg, #7B6EF6, #5B4CD8)", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), active: true },
              { icon: "💼", bg: "linear-gradient(135deg, #F472B6, #DB2777)", action: () => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" }), active: false },
              { icon: "📋", bg: "linear-gradient(135deg, #6EE7B7, #10B981)", action: () => window.location.href = "/about", active: false },
              { icon: "💬", bg: "linear-gradient(135deg, #FBBF24, #F59E0B)", action: () => window.open("https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing", "_blank"), active: false },
            ];
            const contactItem = { icon: "✉️", bg: "linear-gradient(135deg, #F87171, #DC2626)", action: () => window.location.href = "mailto:hyebinp@umich.edu", active: false };

            return (
              <>
                <div className="flex items-center gap-2.5 px-1.5">
                  {mainItems.map((item, i) => (
                    <button key={i} onClick={item.action} className="flex flex-col items-center gap-1.5 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-[14px] flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200"
                        style={{ background: item.bg }}>
                        {item.icon}
                      </div>
                      {item.active && <div className="w-1 h-1 rounded-full bg-foreground/40" />}
                      {!item.active && <div className="w-1 h-1 rounded-full bg-foreground/20" />}
                    </button>
                  ))}
                </div>
                {/* Divider */}
                <div className="w-px h-10 bg-foreground/10 mx-2.5" />
                <div className="flex flex-col items-center gap-1.5 group px-1.5">
                  <button onClick={contactItem.action}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-[14px] flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200"
                    style={{ background: contactItem.bg }}>
                    {contactItem.icon}
                  </button>
                  <div className="w-1 h-1 rounded-full bg-foreground/20" />
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

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
            {projects.map((project, idx) => {
              const dark = isDarkBg(project.id);

              const card = (
                <motion.div
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group flex flex-col"
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

      {/* ═══ TESTIMONIALS — Featured quote carousel ═══ */}
      <section id="collab" className="py-28 sm:py-32 px-4 sm:px-8 md:px-10 border-t border-border">
        <div className="max-w-[1060px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Collaboration</p>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-black leading-[1.1] tracking-tight mb-14">
            Words from people<br className="hidden sm:block" />I've worked alongside.
          </h2>

          <TestimonialCarousel testimonials={testimonials} />
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
