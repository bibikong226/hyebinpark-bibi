import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import logoLine from "@/assets/logo-line.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoGm from "@/assets/logo-gm.png";
import logoNaver from "@/assets/logo-naver.png";
import logoJstor from "@/assets/logo-jstor.png";
import { projects } from "@/data/projects";

/**
 * PORTFOLIO HOMEPAGE - HYEBIN PARK
 * - Massive Identity Branding
 * - Smaller Interlocking Jigsaw Puzzle (Solid -> Profile Reveal)
 * - Automatic Loop + Hover Assembly
 * - Project Cards with Left-to-Right "Impact" Background Fill
 * - Restored Testimonial Carousel
 */

// Jigsaw paths - smaller tabs/holes (base 120, tab depth 20)
const JIGSAW_PATHS = {
  // Top-left: top flat, left flat, right tab, bottom tab
  P1: "M0,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L75,120 C75,120 75,140 60,140 C45,140 45,120 45,120 L0,120 Z",
  // Top-middle: top flat, left hole, right tab, bottom tab
  P2: "M0,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L75,120 C75,120 75,140 60,140 C45,140 45,120 45,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z",
  // Top-right: top flat, left hole, right flat, bottom tab
  P3: "M0,0 L120,0 L120,120 L75,120 C75,120 75,140 60,140 C45,140 45,120 45,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z",
  // Bottom-left: top hole, left flat, right tab, bottom flat
  P4: "M0,0 L45,0 C45,0 45,20 60,20 C75,20 75,0 75,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L0,120 Z",
  // Bottom-middle: top hole, left hole, right tab, bottom flat
  P5: "M0,0 L45,0 C45,0 45,20 60,20 C75,20 75,0 75,0 L120,0 L120,45 C120,45 140,45 140,60 C140,75 120,75 120,75 L120,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z",
  // Bottom-right: top hole, left hole, right flat, bottom flat
  P6: "M0,0 L45,0 C45,0 45,20 60,20 C75,20 75,0 75,0 L120,0 L120,120 L0,120 L0,75 C0,75 20,75 20,60 C20,45 0,45 0,45 Z"
};
const PuzzlePiece = ({
  variant,
  color,
  isResolved,
  className,
  style = {},
  label,
  imgPos
}) => {
  return <motion.div className={`absolute overflow-hidden ${className}`} style={{
    ...style,
    clipPath: `path("${JIGSAW_PATHS[variant]}")`,
    WebkitClipPath: `path("${JIGSAW_PATHS[variant]}")`
  }}>
      {/* Background Color Layer (Shown when scattered) */}
      <motion.div className="absolute inset-0 z-10" style={{
      backgroundColor: color
    }} animate={{
      opacity: isResolved ? 0 : 1
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }} />
      {/* Profile Image Layer (Revealed ONLY when resolved) */}
      <motion.div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{
      backgroundImage: `url(${profilePhoto})`,
      backgroundPosition: imgPos,
      backgroundSize: '330px 330px' // Matches 3x2 pieces of 110px each
    }} animate={{
      opacity: isResolved ? 1 : 0,
      scale: isResolved ? 1 : 1.1
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }} />
      {/* Text Label (Hidden when resolved) */}
      <motion.div className="relative z-20 h-full w-full flex items-center justify-center p-4" animate={{
      opacity: isResolved ? 0 : 1
    }} transition={{
      duration: 0.3
    }}>
        <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-white text-center leading-tight drop-shadow-md select-none">
          {label}
        </span>
      </motion.div>
    </motion.div>;
};
const App = () => {
  const [animationPhase, setAnimationPhase] = useState<'scattered' | 'assembling' | 'assembled' | 'photo'>('scattered');
  const [cursorActive, setCursorActive] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, {
    damping: 30,
    stiffness: 250
  });
  const cursorY = useSpring(mouseY, {
    damping: 30,
    stiffness: 250
  });
  useEffect(() => {
    const moveMouse = e => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  // Track which pieces have appeared for sequential animation
  const [visiblePieces, setVisiblePieces] = useState<number[]>([]);
  const puzzlePieces = [{
    id: 1,
    label: ["USER", "NEEDS"],
    variant: "P1",
    color: "#F87171",
    messy: {
      x: -60,
      y: -80,
      r: -12
    },
    final: {
      x: 0,
      y: 0,
      r: 0
    }
  }, {
    id: 2,
    label: ["DATA", "COMPLEXITY"],
    variant: "P2",
    color: "#60A5FA",
    messy: {
      x: 160,
      y: -100,
      r: 18
    },
    final: {
      x: 120,
      y: 0,
      r: 0
    }
  }, {
    id: 3,
    label: ["BUSINESS", "GOALS"],
    variant: "P3",
    color: "#4ADE80",
    messy: {
      x: 380,
      y: -50,
      r: 8
    },
    final: {
      x: 240,
      y: 0,
      r: 0
    }
  }, {
    id: 4,
    label: ["TECH", "CONSTRAINTS"],
    variant: "P4",
    color: "#F59E0B",
    messy: {
      x: -80,
      y: 200,
      r: -22
    },
    final: {
      x: 0,
      y: 120,
      r: 0
    }
  }, {
    id: 5,
    label: ["EDGE", "CASES"],
    variant: "P5",
    color: "#C084FC",
    messy: {
      x: 140,
      y: 260,
      r: 15
    },
    final: {
      x: 120,
      y: 120,
      r: 0
    }
  }, {
    id: 6,
    label: ["EMERGING", "TECH"],
    variant: "P6",
    color: "#FB7185",
    messy: {
      x: 400,
      y: 180,
      r: -10
    },
    final: {
      x: 240,
      y: 120,
      r: 0
    }
  }];

  // Animation cycle: scattered -> assembling -> assembled -> photo -> scattered
  useEffect(() => {
    if (isHovering) {
      setAnimationPhase('assembling');
      const assembledTimer = setTimeout(() => setAnimationPhase('assembled'), 800);
      const photoTimer = setTimeout(() => setAnimationPhase('photo'), 2000);
      return () => {
        clearTimeout(assembledTimer);
        clearTimeout(photoTimer);
      };
    } else {
      setAnimationPhase('scattered');
      setVisiblePieces([]);
    }
  }, [isHovering]);

  // Auto loop when not hovering
  useEffect(() => {
    if (isHovering) return;
    let cancelled = false;
    const runCycle = async () => {
      // Show pieces one by one
      setVisiblePieces([]);
      for (let i = 0; i < puzzlePieces.length; i++) {
        if (cancelled) return;
        await new Promise(r => setTimeout(r, 350));
        setVisiblePieces(prev => [...prev, i]);
      }

      // Wait a bit with all pieces visible
      await new Promise(r => setTimeout(r, 2500));
      if (cancelled) return;

      // Assemble pieces
      setAnimationPhase('assembling');
      await new Promise(r => setTimeout(r, 1000));
      if (cancelled) return;

      // Show assembled puzzle briefly then transition to photo
      setAnimationPhase('assembled');
      await new Promise(r => setTimeout(r, 300));
      if (cancelled) return;

      // Show photo
      setAnimationPhase('photo');
      await new Promise(r => setTimeout(r, 3000));
      if (cancelled) return;

      // Reset to scattered
      setAnimationPhase('scattered');
      setVisiblePieces([]);
      await new Promise(r => setTimeout(r, 500));
      if (cancelled) return;

      // Restart cycle
      runCycle();
    };
    runCycle();
    return () => {
      cancelled = true;
    };
  }, [isHovering]);

  // Testimonial Auto-scroll
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isTestimonialHovered) {
      interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isTestimonialHovered]);
  // Projects imported from @/data/projects
  const testimonials = [{
    id: "t1",
    author: "David Rashid",
    role: "CEO",
    company: "Concord Systems",
    text: "Hyebin quickly grasped the business model and technical constraints behind our platform.\n\nShe didn't just design screens. she transformed backend complexity into seamless, user-first flows that contributed to our busienss growth."
  }, {
    id: "t2",
    author: "Elisa Vargas",
    role: "Product Designer",
    company: "JSTOR",
    text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions that drive real user impact.\n\nHer user-centered thinking and clarity of intent made a lasting impression on our team."
  }, {
    id: "t3",
    author: "Jae Hoon Shim",
    role: "Product Strategy Manager",
    company: "LINE+",
    text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.\n\nShe approaches every project with curiosity, a sharp eye for detail, and a user-first mindset. Her passion made our time together impactful."
  }, {
    id: "t4",
    author: "Jong Hee Hong",
    role: "Head of Global Communications",
    company: "TikTok Korea",
    text: "What always stands out with Hyebin is how she connects her creativity with real curiosity. She's always asking the right questions.\n\nHer energy makes collaboration feel easy, and she's excellent at communicating her ideas."
  }];
  const nextTestimonial = () => setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  return <div className="bg-[#ffffff] text-[#121212] selection:bg-indigo-100 overflow-x-hidden font-sans cursor-none">
      
      {/* MAGNETIC VIEW CURSOR */}
      <motion.div style={{
      x: cursorX,
      y: cursorY
    }} className={`fixed top-0 left-0 pointer-events-none z-[999] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${cursorActive ? 'w-14 h-14 bg-white shadow-xl border border-zinc-100' : 'w-4 h-4 bg-black'}`}>
        <AnimatePresence>
          {cursorActive && <motion.span initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="text-[9px] font-black tracking-widest text-black">VIEW</motion.span>}
        </AnimatePresence>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-10 mix-blend-difference text-white">
        <div className="font-semibold tracking-tight text-xl uppercase">Hyebin Park</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#work" className="hover:opacity-60 transition-all">Work</a>
          <a href="#about" className="hover:opacity-60 transition-all">Approach</a>
          <a href="#contact" className="hover:opacity-60 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="sticky top-0 h-screen w-full px-8 md:px-16 flex flex-col">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "100px 100px"
        }} />

          {/* Background Name (between header and hero content) */}
          <div className="relative z-10 pt-28 md:pt-32 pb-8 md:pb-12 bg-white">
            <h2 className="text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter leading-none text-zinc-200 select-none text-center font-sans lg:text-9xl">
              HYEBIN PARK
            </h2>
          </div>

          <div className="relative z-10 flex-1 w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1]
            }}>
                {/* Intro */}
                

                {/* Core statement */}
                <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-medium tracking-tight leading-[1.05] mb-10 select-none text-zinc-900 lg:text-8xl pl-[10vw] md:pl-[12vw]">
                  <span className="block text-xl sm:text-2xl font-medium text-zinc-800 md:text-6xl">
                    Turning
                  </span>
                  <span className="block font-serif italic text-indigo-600 text-7xl">complexity</span>
                  <span className="block">
                    <span className="text-xl sm:text-2xl font-medium md:text-6xl text-zinc-800">
                      into{" "}
                    </span>
                    <span className="font-serif italic text-indigo-600 text-7xl">clarity</span>
                  </span>
                </h1>

                {/* Supporting explanation */}
                <p className="text-lg md:text-xl leading-[1.6] max-w-[540px] text-zinc-600 pl-[10vw] md:pl-[12vw]">
                  From AI algorithms to crypto workflows,<br />
                  I turn ambiguity into structured, usable products that drive real business impact.
                </p>

                {/* Education & Experience badges */}
                <div className="mt-14 pl-[10vw] md:pl-[12vw]">
                  {/* Divider line */}
                  <div className="w-12 h-1 bg-indigo-600 mb-6"></div>
                  
                  {/* Education */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🎓</span>
                    <span className="text-lg md:text-xl font-medium text-zinc-700">
                      MS-HCI @ University of Michigan
                    </span>
                  </div>

                  {/* Experience label */}
                  <p className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                    Experience designing & researching for
                  </p>

                  {/* Company logos */}
                  <div className="flex items-center gap-3">
                    <img src={logoLine} alt="LINE" className="w-10 h-10 rounded-lg object-cover" />
                    <img src={logoTiktok} alt="TikTok" className="w-10 h-10 rounded-lg object-cover" />
                    <img src={logoGm} alt="GM" className="w-10 h-10 rounded-lg object-cover" />
                    <img src={logoNaver} alt="NAVER" className="w-10 h-10 rounded-lg object-cover" />
                    <img src={logoJstor} alt="JSTOR" className="w-10 h-10 rounded-lg object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: INTERACTIVE JIGSAW -> ASSEMBLED -> FULL PROFILE REVEAL */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-full relative flex items-center justify-center md:ml-20">
              <div className="relative w-[420px] h-[320px] md:w-[480px] md:h-[360px]" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                {/* Puzzle pieces */}
                <AnimatePresence>
                  {animationPhase !== "photo" && puzzlePieces.map((p, i) => (visiblePieces.includes(i) || animationPhase === "assembling" || animationPhase === "assembled") && <motion.div key={p.id} className="absolute" initial={{
                  opacity: 0,
                  scale: 0.6
                }} animate={{
                  x: animationPhase === "scattered" ? p.messy.x : p.final.x,
                  y: animationPhase === "scattered" ? p.messy.y : p.final.y,
                  rotate: animationPhase === "scattered" ? p.messy.r : 0,
                  opacity: 1,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  scale: 1.02,
                  transition: {
                    duration: 0.4,
                    delay: i * 0.02
                  }
                }} transition={{
                  duration: animationPhase === "scattered" ? 0.6 : 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: animationPhase === "scattered" ? 0 : i * 0.1
                }} style={{
                  willChange: "transform",
                  zIndex: Math.floor(i / 3) * 10 + i % 3
                }}>
                            <div className="w-[140px] h-[140px] relative" style={{
                    clipPath: `path(\"${JIGSAW_PATHS[p.variant]}\")`,
                    WebkitClipPath: `path(\"${JIGSAW_PATHS[p.variant]}\")`,
                    background: `linear-gradient(145deg, ${p.color}, ${p.color}dd)`
                  }}>
                              <div className="absolute left-0 top-0 w-[120px] h-[120px] flex flex-col items-center justify-center">
                                <span className="text-[13px] md:text-[15px] font-black tracking-wide text-white text-center leading-none select-none drop-shadow-sm">
                                  {p.label[0]}
                                </span>
                                <span className="text-[10px] md:text-[12px] font-bold tracking-wider text-white/90 text-center leading-none select-none mt-1.5 drop-shadow-sm">
                                  {p.label[1]}
                                </span>
                              </div>
                            </div>
                          </motion.div>)}
                </AnimatePresence>

                {/* Full profile photo */}
                <AnimatePresence>
                  {animationPhase === "photo" && <motion.div className="absolute inset-0 flex items-center justify-center" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }} style={{
                  zIndex: 20
                }}>
                      <img src={profilePhoto} alt="Hyebin Park" className="w-[400px] h-[500px] md:w-[480px] md:h-[600px] object-cover object-top" />
                    </motion.div>}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK GRID */}
      <section id="work" className="px-8 md:px-16 py-48 border-t border-zinc-100 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 mb-8 font-black">Selected Work</h2>
            <p className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">Strategic <span className="italic font-serif font-light text-zinc-300">Outputs.</span></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-40">
          {projects.map((project, idx) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)} className="group relative cursor-none">
              <div className="aspect-[16/11] mb-10 relative overflow-hidden transition-all duration-700 rounded-2xl border border-zinc-50 group-hover:shadow-2xl" style={{
            backgroundColor: project.imageColor
          }}>
                {/* Logo at top-left corner */}
                <div className="absolute left-5 md:left-8 top-5 md:top-6 z-10">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    loading="lazy"
                    decoding="async"
                    className={`w-auto object-contain ${
                      project.id === 'gm' 
                        ? 'h-20 md:h-28' 
                        : project.id === 'nurturly' 
                          ? 'h-8 md:h-10' 
                          : 'h-10 md:h-14'
                    }`}
                  />
                </div>

                {/* Mockup - larger for concord/openoff, standard for others */}
                <div className={`absolute inset-0 flex items-center justify-center px-2 pb-2 ${
                  project.id === 'concord' || project.id === 'openoff' 
                    ? 'pt-6 md:pt-8' 
                    : 'pt-14 md:pt-16'
                }`}>
                  <img
                    src={project.mockup}
                    alt={`${project.title} mockup`}
                    loading="lazy"
                    decoding="async"
                    className={`object-contain transition-transform duration-700 ${
                      project.id === 'concord' || project.id === 'openoff'
                        ? 'max-h-[110%] max-w-[110%] scale-110 group-hover:scale-[1.20]'
                        : 'max-h-full max-w-full group-hover:scale-105'
                    }`}
                  />
                </div>
              </div>
              <div className="space-y-4 px-2 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-bold group-hover:text-zinc-900 leading-tight">{project.title}</h3>
                <p className="text-base text-zinc-600 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 text-[10px] font-medium bg-zinc-100 text-zinc-600 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Highlights with hover fill effect */}
                <div className="space-y-2 pt-4">
                  {project.highlights.map((highlight, hIdx) => (
                    <div 
                      key={hIdx} 
                      className="relative inline-block overflow-hidden rounded-md px-4 py-2 mr-2"
                    >
                      <div className="absolute inset-0 bg-zinc-200" />
                      <div 
                        className="absolute inset-0 z-0 origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100" 
                        style={{ backgroundColor: project.accentColor }} 
                      />
                      <span className="relative z-10 text-sm text-zinc-700 group-hover:text-white transition-colors duration-300 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>)}
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <section className="px-8 md:px-16 pt-32 pb-48 bg-zinc-900 text-white relative overflow-hidden" onMouseEnter={() => setIsTestimonialHovered(true)} onMouseLeave={() => setIsTestimonialHovered(false)}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center">
            <h2 className="text-[25vw] font-black uppercase tracking-tighter select-none">Impact</h2>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-6">
               <div className="w-12 h-px bg-zinc-700" />
               <span className="text-[10px] uppercase tracking-[0.6em] font-black text-indigo-400">Collaboration</span>
               <div className="w-12 h-px bg-zinc-700" />
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute left-[-20px] md:left-4 lg:left-12 z-20">
                <button onClick={prevTestimonial} className="p-5 rounded-full border border-zinc-800 hover:border-indigo-500 text-zinc-500 hover:text-indigo-500 transition-all flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute right-[-20px] md:right-4 lg:right-12 z-20">
                <button onClick={nextTestimonial} className="p-5 rounded-full border border-zinc-800 hover:border-indigo-500 text-zinc-500 hover:text-indigo-500 transition-all flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
                  <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{
              opacity: 0,
              scale: 0.98,
              y: 10
            }} animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }} exit={{
              opacity: 0,
              scale: 0.98,
              y: -10
            }} transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex flex-col items-center text-center space-y-12 max-w-4xl px-16">
                <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight text-zinc-200 italic whitespace-pre-line">
                   "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex flex-col items-center">
                    <div className="bg-zinc-800/50 rounded-md px-8 py-5 mb-6 text-center border border-zinc-800">
                        <span className="block text-[13px] font-black uppercase tracking-[0.4em] text-zinc-300">
                            {testimonials[currentTestimonial].author}
                        </span>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-2">
                            {testimonials[currentTestimonial].role}
                        </span>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                            {testimonials[currentTestimonial].company}
                        </span>
                    </div>
                    <div className="flex justify-center gap-3">
                      {testimonials.map((_, i) => <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentTestimonial ? 'bg-indigo-500 w-8' : 'bg-zinc-700 hover:bg-zinc-500'}`} />)}
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-32 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center bg-[#fafafa]">
        <div>
          <div className="text-3xl font-black tracking-tighter uppercase mb-4">Hyebin Park</div>
          <p className="text-[10px] text-zinc-400 tracking-[0.4em] uppercase font-medium">Strategic Product Design Portfolio</p>
        </div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400">
          <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Read.cv</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Email</a>
        </div>
      </footer>
    </div>;
};
export default App;