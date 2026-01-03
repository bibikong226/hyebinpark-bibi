import React, { useRef } from "react";
import { motion } from "framer-motion";

/**
 * PORTFOLIO HOMEPAGE - HYEBIN PARK
 * - Name is the largest element in hero
 * - Illustrated jigsaw puzzle pieces
 * - Default: messy / Hover: staggered fit
 * - Centered overlay for outcome text
 * - High-end strategic aesthetic
 */

const PuzzleShape = ({
  variant,
  text,
  color,
  className
}: {
  variant: string;
  text: string;
  color: string;
  className?: string;
}) => {
  // viewBox: 0 0 100 100
  // These are "jigsaw-ish" paths with tabs/slots for a modern illustrated look.
  // Interlocking puzzle piece paths based on 2x3 grid like the reference image
  const getPath = () => {
    switch (variant) {
      // Top-left: tab right, tab bottom
      case "P1":
        return `
          M 5 5
          H 40
          C 40 5, 40 15, 50 15
          C 60 15, 60 5, 60 5
          H 95
          V 40
          C 95 40, 105 40, 105 50
          C 105 60, 95 60, 95 60
          V 95
          H 60
          C 60 95, 60 105, 50 105
          C 40 105, 40 95, 40 95
          H 5
          V 5
          Z
        `;
      // Top-middle: slot left, tab right, tab bottom
      case "P2":
        return `
          M 5 5
          H 40
          C 40 5, 40 15, 50 15
          C 60 15, 60 5, 60 5
          H 95
          V 40
          C 95 40, 105 40, 105 50
          C 105 60, 95 60, 95 60
          V 95
          H 60
          C 60 95, 60 105, 50 105
          C 40 105, 40 95, 40 95
          H 5
          V 60
          C 5 60, -5 60, -5 50
          C -5 40, 5 40, 5 40
          V 5
          Z
        `;
      // Top-right: slot left, tab bottom
      case "P3":
        return `
          M 5 5
          H 95
          V 95
          H 60
          C 60 95, 60 105, 50 105
          C 40 105, 40 95, 40 95
          H 5
          V 60
          C 5 60, -5 60, -5 50
          C -5 40, 5 40, 5 40
          V 5
          Z
        `;
      // Bottom-left: slot top, tab right
      case "P4":
        return `
          M 5 5
          H 40
          C 40 5, 40 -5, 50 -5
          C 60 -5, 60 5, 60 5
          H 95
          V 40
          C 95 40, 105 40, 105 50
          C 105 60, 95 60, 95 60
          V 95
          H 5
          V 5
          Z
        `;
      // Bottom-middle: slot top, slot left, tab right
      case "P5":
        return `
          M 5 5
          H 40
          C 40 5, 40 -5, 50 -5
          C 60 -5, 60 5, 60 5
          H 95
          V 40
          C 95 40, 105 40, 105 50
          C 105 60, 95 60, 95 60
          V 95
          H 5
          V 60
          C 5 60, -5 60, -5 50
          C -5 40, 5 40, 5 40
          V 5
          Z
        `;
      // Bottom-right: slot top, slot left
      case "P6":
        return `
          M 5 5
          H 40
          C 40 5, 40 -5, 50 -5
          C 60 -5, 60 5, 60 5
          H 95
          V 95
          H 5
          V 60
          C 5 60, -5 60, -5 50
          C -5 40, 5 40, 5 40
          V 5
          Z
        `;
      default:
        return `M 5 5 H 95 V 95 H 5 Z`;
    }
  };
  return <div className={`relative ${className}`} style={{
    filter: "drop-shadow(0px 12px 18px rgba(0,0,0,0.08))"
  }}>
      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {/* Main fill with modern color */}
        <path d={getPath()} fill={color} stroke="rgba(0,0,0,0.14)" strokeWidth="1.2" />
        {/* Subtle highlight stroke for a designed feel */}
        <path d={getPath()} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      </svg>
      <div className="relative z-10 h-full w-full flex items-center justify-center px-3">
        <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-white text-center leading-tight drop-shadow-md select-none">
          {text}
        </span>
      </div>
    </div>;
};
const App = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Define a precise 2x3 grid - pieces are always assembled
  // Piece size matches the actual rendered size for proper interlocking
  const pieceSize = 120; // base piece size
  const overlapOffset = 10; // how much pieces overlap to interlock
  const startX = 0;
  const startY = 20;
  
  const grid = [
    { x: startX, y: startY }, // col 1 row 1
    { x: startX + pieceSize - overlapOffset, y: startY }, // col 2 row 1
    { x: startX + (pieceSize - overlapOffset) * 2, y: startY }, // col 3 row 1
    { x: startX, y: startY + pieceSize - overlapOffset }, // col 1 row 2
    { x: startX + pieceSize - overlapOffset, y: startY + pieceSize - overlapOffset }, // col 2 row 2
    { x: startX + (pieceSize - overlapOffset) * 2, y: startY + pieceSize - overlapOffset }, // col 3 row 2
  ];
  const puzzlePieces = [
    { id: 1, text: "User Needs", variant: "P1", color: "#FF6B6B", pos: grid[0], initial: { x: -150, y: -100, rotate: -45 }, delay: 0.3 },
    { id: 2, text: "Data Complexity", variant: "P2", color: "#4D96FF", pos: grid[1], initial: { x: 50, y: -180, rotate: 30 }, delay: 0.5 },
    { id: 3, text: "Business Goals", variant: "P3", color: "#6BCB77", pos: grid[2], initial: { x: 200, y: -80, rotate: 60 }, delay: 0.7 },
    { id: 4, text: "Tech Constraints", variant: "P4", color: "#FFD93D", pos: grid[3], initial: { x: -120, y: 250, rotate: -60 }, delay: 0.9 },
    { id: 5, text: "Edge Cases", variant: "P5", color: "#B983FF", pos: grid[4], initial: { x: 80, y: 280, rotate: 45 }, delay: 1.1 },
    { id: 6, text: "Emerging Tech", variant: "P6", color: "#FF8FAB", pos: grid[5], initial: { x: 250, y: 200, rotate: -30 }, delay: 1.3 },
  ];
  return <div className="bg-[#ffffff] text-[#121212] selection:bg-indigo-100 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-10">
        <div className="font-semibold tracking-tight text-xl uppercase">Hyebin Park</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">
          <a href="#work" className="hover:text-black transition-all duration-300">Selected Work</a>
          <a href="#about" className="hover:text-black transition-all duration-300">Approach</a>
          <a href="#contact" className="hover:text-black transition-all duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center px-8 md:px-16">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "100px 100px"
        }} />

          {/* Left: Branding & Message (Name as Hero) */}
          <div className="w-full md:w-3/5 z-10">
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
              <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-400 mb-8 font-bold">
                Strategic Product Designer
              </h2>
              <h1 className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] font-light tracking-tighter leading-none mb-10 lg:text-8xl">
                Hyebin Park
              </h1>
              <h3 className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl mb-8 md:text-5xl">Turn Complexity to Clarity<span className="font-serif italic text-indigo-600">
complex, messy problems</span> into business impact.
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-lg font-light">From AI algorithms to crypto workflows,
I turn ambiguity into structured, usable products that drive business impact.</p>
            </motion.div>
          </div>

          {/* Right: Jigsaw Illustration - Always Assembled */}
          <div className="w-full md:w-2/5 h-[60vh] md:h-full relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Puzzle Pieces - Auto-assemble animation */}
              {puzzlePieces.map(p => (
                <motion.div 
                  key={p.id} 
                  className="absolute"
                  initial={{ 
                    opacity: 0, 
                    scale: 0.6,
                    x: p.initial.x,
                    y: p.initial.y,
                    rotate: p.initial.rotate,
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: p.pos.x,
                    y: p.pos.y,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: p.delay,
                  }}
                >
                  <PuzzleShape variant={p.variant} text={p.text} color={p.color} className="w-32 h-32 md:w-36 md:h-36" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="px-8 md:px-16 py-40 border-t border-zinc-100 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 mb-8 font-black">Featured work</h2>
            <p className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Strategic <span className="italic font-serif font-light text-zinc-300">Outputs.</span>
            </p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.4em] font-black border-b-4 border-black pb-4 cursor-pointer hover:text-indigo-600 hover:border-indigo-600 transition-all duration-300">
            Full case studies
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-48">
          {[{
          title: "Neuroflow AI",
          desc: "Enterprise Algorithm UX",
          year: "2024",
          img: "bg-zinc-50"
        }, {
          title: "Vault Protocol",
          desc: "Crypto Trust Architecture",
          year: "2023",
          img: "bg-zinc-100"
        }].map((item, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="group cursor-pointer">
              <div className={`aspect-[16/10] ${item.img} mb-12 relative overflow-hidden rounded-sm transition-all duration-700`}>
                <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500">
                      <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-100 pb-10 transition-all group-hover:border-indigo-100">
                <div>
                  <h3 className="text-4xl font-bold group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-bold mt-4">{item.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{item.year}</span>
              </div>
            </motion.div>)}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-32 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center bg-[#fafafa]">
        <div>
          <div className="text-3xl font-black tracking-tighter uppercase mb-4">Hyebin Park</div>
          <p className="text-[10px] text-zinc-400 tracking-[0.4em] uppercase font-medium">Strategic Product Design Portfolio 2024</p>
        </div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-black">
          <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Read.cv</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Email</a>
        </div>
      </footer>
    </div>;
};
export default App;