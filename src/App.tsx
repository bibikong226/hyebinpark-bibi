import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

/**
 * PORTFOLIO HOMEPAGE - HYEBIN PARK
 * - Massive Identity Branding
 * - Smaller Interlocking Jigsaw Puzzle (Solid -> Profile Reveal)
 * - Automatic Loop + Hover Assembly
 * - Project Cards with Left-to-Right "Impact" Background Fill
 * - Restored Testimonial Carousel
 */

// Jigsaw paths matching the reference image with rounded tabs/notches
const JIGSAW_PATHS = {
  // Row 1: Top-left (tab right, tab bottom)
  P1: "M0,0 H35 V0 H45 C45,0 45,20 55,20 C65,20 65,0 65,0 H100 V35 C100,35 120,35 120,45 C120,55 100,55 100,55 V100 H65 C65,100 65,120 55,120 C45,120 45,100 45,100 H0 V0 Z",
  // Row 1: Top-center (hole left, tab right, tab bottom)
  P2: "M0,35 C0,35 20,35 20,45 C20,55 0,55 0,55 V100 H35 C35,100 35,120 45,120 C55,120 55,100 55,100 H100 V55 C100,55 120,55 120,45 C120,35 100,35 100,35 V0 H55 C55,0 55,20 45,20 C35,20 35,0 35,0 H0 V35 Z",
  // Row 1: Top-right (hole left, tab bottom)
  P3: "M0,35 C0,35 20,35 20,45 C20,55 0,55 0,55 V100 H35 C35,100 35,120 45,120 C55,120 55,100 55,100 H100 V0 H55 C55,0 55,20 45,20 C35,20 35,0 35,0 H0 V35 Z",
  // Row 2: Bottom-left (hole top, tab right)
  P4: "M0,0 H45 C45,0 45,20 55,20 C65,20 65,0 65,0 H100 V35 C100,35 120,35 120,45 C120,55 100,55 100,55 V100 H0 V0 Z",
  // Row 2: Bottom-center (hole left, hole top, tab right)
  P5: "M0,35 C0,35 20,35 20,45 C20,55 0,55 0,55 V100 H100 V55 C100,55 120,55 120,45 C120,35 100,35 100,35 V0 H55 C55,0 55,20 45,20 C35,20 35,0 35,0 H0 V35 Z",
  // Row 2: Bottom-right (hole left, hole top)
  P6: "M0,35 C0,35 20,35 20,45 C20,55 0,55 0,55 V100 H100 V0 H55 C55,0 55,20 45,20 C35,20 35,0 35,0 H0 V35 Z",
};

const PuzzlePiece = ({ variant, color, isResolved, className, style = {}, label, imgPos }) => {
  return (
    <motion.div 
      className={`absolute overflow-hidden ${className}`}
      style={{ 
        ...style,
        clipPath: `path("${JIGSAW_PATHS[variant]}")`,
        WebkitClipPath: `path("${JIGSAW_PATHS[variant]}")`,
      }}
    >
      {/* Background Color Layer (Shown when scattered) */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: color }}
        animate={{ opacity: isResolved ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      {/* Profile Image Layer (Revealed ONLY when resolved) */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${profilePhoto})`, 
          backgroundPosition: imgPos,
          backgroundSize: '330px 330px', // Matches 3x2 pieces of 110px each
        }}
        animate={{ opacity: isResolved ? 1 : 0, scale: isResolved ? 1 : 1.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      {/* Text Label (Hidden when resolved) */}
      <motion.div 
        className="relative z-20 h-full w-full flex items-center justify-center p-4"
        animate={{ opacity: isResolved ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-white text-center leading-tight drop-shadow-md select-none">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 250 });
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 250 });

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  // Automatic Assembly Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAssembled(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial Auto-scroll
  useEffect(() => {
    let interval;
    if (!isTestimonialHovered) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3500); 
    }
    return () => clearInterval(interval);
  }, [isTestimonialHovered]);

  // Puzzle piece size: 100x100 with 20px tabs, so effective grid is ~80px
  const pieceSize = 100;
  const gridStep = 80; // Account for overlapping tabs
  
  const puzzlePieces = [
    { id: 1, label: "User Needs", variant: "P1", color: "#E53935", messy: { x: -80, y: -60, r: -20 }, final: { x: 0, y: 0, r: 0 } },
    { id: 2, label: "Data Complexity", variant: "P2", color: "#FB8C00", messy: { x: 180, y: -80, r: 25 }, final: { x: gridStep, y: 0, r: 0 } },
    { id: 3, label: "Business Goals", variant: "P3", color: "#8E24AA", messy: { x: 340, y: -40, r: 15 }, final: { x: gridStep * 2, y: 0, r: 0 } },
    { id: 4, label: "Tech Constraints", variant: "P4", color: "#43A047", messy: { x: -100, y: 180, r: -30 }, final: { x: 0, y: gridStep, r: 0 } },
    { id: 5, label: "Edge Cases", variant: "P5", color: "#00ACC1", messy: { x: 160, y: 220, r: 20 }, final: { x: gridStep, y: gridStep, r: 0 } },
    { id: 6, label: "Emerging Tech", variant: "P6", color: "#546E7A", messy: { x: 360, y: 160, r: -15 }, final: { x: gridStep * 2, y: gridStep, r: 0 } },
  ];

  const projects = [
    { title: "Neuroflow AI", desc: "Enterprise Algorithm UX", year: "2024", color: "#FEE2E2", accent: "#E11D48", impact: "Increased workflow efficiency by 42%" },
    { title: "Vault Protocol", desc: "Crypto Trust Architecture", year: "2023", color: "#E0E7FF", accent: "#4F46E5", impact: "Secured $200M+ in digital assets" },
    { title: "Lumina Labs", desc: "Research Visualization", year: "2024", color: "#D1FAE5", accent: "#059669", impact: "Reduced data ambiguity by 60%" },
    { title: "Ether Custody", desc: "Institutional Security", year: "2023", color: "#FEF3C7", accent: "#D97706", impact: "Onboarded 15 tier-1 global banks" },
    { title: "Veritas Identity", desc: "Digital Sovereign UX", year: "2022", color: "#CFFAFE", accent: "#0891B2", impact: "Zero identity breaches in 2 years" },
    { title: "Nexus Systems", desc: "Multi-modal AI Suite", year: "2024", color: "#F3E8FF", accent: "#9333EA", impact: "Adopted by 50+ enterprise teams" },
  ];

  const testimonials = [
    { id: "t1", author: "Sarah Jenkins", role: "Director of Product, Paradigm AI", text: "Hyebin has a rare ability to bridge technical complexity with human-centered strategy. She makes sense of the chaos in our enterprise workflows." },
    { id: "t2", author: "David Chen", role: "CTO, BlockVault", text: "Working across crypto workflows is notoriously difficult, but Hyebin's systematic approach provided the clarity we needed to scale our custody platform." },
    { id: "t3", author: "Elena Rossi", role: "Lead UX Researcher, Lumina", text: "She doesn't just design interfaces; she designs systems. Her research-backed insight is the most valuable asset in our AI product cycle." },
    { id: "t4", author: "Marcus Thorne", role: "Founder, Veritas Identity", text: "The human touch Hyebin brings to emerging technologies is unparalleled. She turns cold algorithms into warm, usable experiences." },
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-[#ffffff] text-[#121212] selection:bg-indigo-100 overflow-x-hidden font-sans cursor-none">
      
      {/* MAGNETIC VIEW CURSOR */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className={`fixed top-0 left-0 pointer-events-none z-[999] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${cursorActive ? 'w-14 h-14 bg-white shadow-xl border border-zinc-100' : 'w-4 h-4 bg-black'}`}
      >
        <AnimatePresence>
          {cursorActive && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[9px] font-black tracking-widest text-black">VIEW</motion.span>
          )}
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
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center px-8 md:px-16">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
          <div className="w-full md:w-3/5 z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-light tracking-tighter leading-none mb-10 select-none text-zinc-900">
                Hyebin Park
              </h1>
              <h3 className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-xl mb-8">
                Turn <span className="font-serif italic text-indigo-600">Complexity</span> to Clarity
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-lg font-light">
                From AI algorithms to crypto workflows, I turn ambiguity into structured, usable products that drive business impact.
              </p>
            </motion.div>
          </div>
          {/* RIGHT: INTERACTIVE JIGSAW -> FULL PROFILE REVEAL */}
          <div className="w-full md:w-2/5 h-[60vh] md:h-full relative flex items-center justify-center">
            <div 
              className="relative w-[340px] h-[280px] md:w-[400px] md:h-[320px]"
              onMouseEnter={() => setIsAssembled(true)}
              onMouseLeave={() => setIsAssembled(false)}
            >
              {/* Scattered puzzle pieces (visible when not assembled) */}
              <AnimatePresence>
                {!isAssembled && puzzlePieces.map((p, i) => (
                  <motion.div
                    key={p.id}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      x: p.messy.x,
                      y: p.messy.y,
                      rotate: p.messy.r,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      x: p.final.x,
                      y: p.final.y,
                      rotate: 0,
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: i * 0.05
                    }}
                    style={{ willChange: "transform", zIndex: i }}
                  >
                    <div 
                      className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center p-3"
                      style={{ 
                        clipPath: `path("${JIGSAW_PATHS[p.variant]}")`,
                        WebkitClipPath: `path("${JIGSAW_PATHS[p.variant]}")`,
                        backgroundColor: p.color,
                      }}
                    >
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-white text-center leading-tight drop-shadow-md select-none">
                        {p.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Full profile photo (visible when assembled) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: isAssembled ? 1 : 0, 
                  scale: isAssembled ? 1 : 0.9,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: isAssembled ? 0.3 : 0 }}
              >
                <div className="relative">
                  <img 
                    src={profilePhoto} 
                    alt="Hyebin Park" 
                    className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] object-cover object-top rounded-lg shadow-2xl"
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    initial={{ boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)" }}
                    animate={{ 
                      boxShadow: isAssembled 
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(99, 102, 241, 0.1)" 
                        : "0 0 0 0 rgba(99, 102, 241, 0)" 
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </div>
              </motion.div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-40">
          {projects.map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
              className="group relative cursor-none"
            >
              <div className="aspect-[16/11] mb-10 relative overflow-hidden transition-all duration-700 rounded-sm border border-zinc-50 group-hover:shadow-2xl" style={{ backgroundColor: project.color }}>
                <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <div className="w-1/2 h-1/2 rounded-full border border-black/5 opacity-20 group-hover:opacity-40 transition-all duration-1000" />
                </motion.div>
                <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: project.accent }} />
              </div>
              <div className="space-y-4 px-2 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl font-bold group-hover:text-zinc-900 leading-tight">{project.title}</h3>
                  <span className="text-[10px] font-mono text-zinc-300">{project.year}</span>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">{project.desc}</p>
                <div className="mt-8 relative inline-block overflow-hidden rounded-md px-4 py-2">
                    <div className="absolute inset-0 bg-zinc-100" />
                    <div className="absolute inset-0 z-0 origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100" style={{ backgroundColor: project.accent }} />
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white">Impact: {project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <section 
        className="px-8 md:px-16 pt-32 pb-48 bg-zinc-900 text-white relative overflow-hidden"
        onMouseEnter={() => setIsTestimonialHovered(true)}
        onMouseLeave={() => setIsTestimonialHovered(false)}
      >
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
                <button 
                  onClick={prevTestimonial}
                  className="p-5 rounded-full border border-zinc-800 hover:border-indigo-500 text-zinc-500 hover:text-indigo-500 transition-all flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute right-[-20px] md:right-4 lg:right-12 z-20">
                <button 
                  onClick={nextTestimonial}
                  className="p-5 rounded-full border border-zinc-800 hover:border-indigo-500 text-zinc-500 hover:text-indigo-500 transition-all flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-12 max-w-4xl px-16"
              >
                <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight text-zinc-200 italic">
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
                    </div>
                    <div className="flex justify-center gap-3">
                      {testimonials.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setCurrentTestimonial(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentTestimonial ? 'bg-indigo-500 w-8' : 'bg-zinc-700 hover:bg-zinc-500'}`}
                        />
                      ))}
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
    </div>
  );
};

export default App;
