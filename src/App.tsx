import React, { useRef, useState } from "react";
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
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <span className="text-[8px] md:text-[9.5px] font-bold uppercase tracking-[0.22em] text-white text-center leading-tight drop-shadow-sm select-none">
          {text}
        </span>
      </div>
    </div>;
};
const App = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  // Define a precise 2x3 grid for the pieces to snap into upon hover.
  // Adjusted for bigger pieces (w-48 h-48 = 192px on md)
  const pieceSize = 140; // approximate piece size for spacing
  const gap = -20; // negative gap for interlocking
  const startX = 20;
  const startY = 40;
  
  const finalGrid = [
    { x: startX, y: startY }, // col 1 row 1
    { x: startX + pieceSize + gap, y: startY }, // col 2 row 1
    { x: startX + (pieceSize + gap) * 2, y: startY }, // col 3 row 1
    { x: startX, y: startY + pieceSize + gap }, // col 1 row 2
    { x: startX + pieceSize + gap, y: startY + pieceSize + gap }, // col 2 row 2
    { x: startX + (pieceSize + gap) * 2, y: startY + pieceSize + gap }, // col 3 row 2
  ];
  const puzzlePieces = [{
    id: 1,
    text: "User Needs",
    variant: "P1",
    color: "#FF6B6B",
    messy: {
      x: "6vw",
      y: "-14vh",
      r: -28
    },
    final: {
      ...finalGrid[0],
      r: 0
    },
    delay: 0.0
  }, {
    id: 2,
    text: "Data Complexity",
    variant: "P2",
    color: "#4D96FF",
    messy: {
      x: "28vw",
      y: "-10vh",
      r: 42
    },
    final: {
      ...finalGrid[1],
      r: 0
    },
    delay: 0.12
  }, {
    id: 3,
    text: "Business Goals",
    variant: "P3",
    color: "#6BCB77",
    messy: {
      x: "18vw",
      y: "22vh",
      r: 140
    },
    final: {
      ...finalGrid[2],
      r: 0
    },
    delay: 0.24
  }, {
    id: 4,
    text: "Tech Constraints",
    variant: "P4",
    color: "#FFD93D",
    messy: {
      x: "2vw",
      y: "14vh",
      r: -12
    },
    final: {
      ...finalGrid[3],
      r: 0
    },
    delay: 0.36
  }, {
    id: 5,
    text: "Edge Cases",
    variant: "P5",
    color: "#B983FF",
    messy: {
      x: "34vw",
      y: "26vh",
      r: 96
    },
    final: {
      ...finalGrid[4],
      r: 0
    },
    delay: 0.48
  }, {
    id: 6,
    text: "Emerging Tech",
    variant: "P6",
    color: "#FF8FAB",
    messy: {
      x: "14vw",
      y: "34vh",
      r: -78
    },
    final: {
      ...finalGrid[5],
      r: 0
    },
    delay: 0.60
  }];
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

          {/* Right: Interactive Jigsaw Illustration */}
          <div className="w-full md:w-2/5 h-[60vh] md:h-full relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-square" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              {/* Target Area Frame */}
              <div className="absolute inset-10 rounded-[40px] bg-zinc-50/50 border border-zinc-200/50" />

              {/* Puzzle Pieces */}
              {puzzlePieces.map(p => {
              const isLastPiece = p.id === 6;
              return <motion.div key={p.id} className="absolute" initial={false} animate={{
                x: hovered ? p.final.x : p.messy.x,
                y: hovered ? p.final.y : p.messy.y,
                rotate: hovered ? 0 : p.messy.r,
                // Subtle "pop" effect for the completion moment on the last piece
                scale: hovered ? isLastPiece ? [1, 1.08, 1] : 1 : 0.98
              }} transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
                delay: hovered ? p.delay : 0
              }} style={{
                willChange: "transform"
              }}>
                    <PuzzleShape variant={p.variant} text={p.text} color={p.color} className="w-40 h-40 md:w-48 md:h-48" />
                  </motion.div>;
            })}

              {/* OVERLAY OUTCOME TEXT: Centered Over the Puzzle */}
              <motion.div initial={false} animate={{
              opacity: hovered ? 1 : 0,
              scale: hovered ? 1 : 0.95,
              y: hovered ? 0 : 10
            }} transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: hovered ? 1.0 : 0
            }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <div className="text-center bg-white/80 backdrop-blur-md px-10 py-7 rounded-[2rem] border border-zinc-200/60 shadow-2xl">
                  <div className="text-[11px] uppercase tracking-[0.5em] font-black text-indigo-600 mb-2">
                    Usable product
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.5em] font-black text-zinc-900">
                    Business impact
                  </div>
                </div>
              </motion.div>

              {/* Hover Prompt */}
              <div className="absolute -bottom-10 left-0 w-full text-center text-[10px] uppercase tracking-[0.4em] text-zinc-300 font-bold">
                {hovered ? "Complexity resolved" : "Hover to assemble pieces"}
              </div>
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