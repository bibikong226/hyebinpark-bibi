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
  const getPath = () => {
    switch (variant) {
      case "P1":
        return `
          M18 18
          Q18 12 24 12
          H36
          Q38 12 38 16
          C38 22 50 22 50 16
          Q50 12 52 12
          H76
          Q82 12 82 18
          V34
          Q82 38 78 38
          C72 38 72 50 78 50
          Q82 50 82 54
          V76
          Q82 82 76 82
          H60
          Q58 82 58 78
          C58 72 46 72 46 78
          Q46 82 44 82
          H24
          Q18 82 18 76
          V60
          Q18 58 22 58
          C28 58 28 46 22 46
          Q18 46 18 44
          V24
          Q18 20 14 20
          C8 20 8 8 14 8
          Q18 8 18 18
          Z
        `;
      case "P2":
        return `
          M18 18
          Q18 12 24 12
          H30
          Q32 12 32 16
          C32 22 44 22 44 16
          Q44 12 46 12
          H76
          Q82 12 82 18
          V28
          Q82 30 78 30
          C72 30 72 42 78 42
          Q82 42 82 44
          V48
          Q82 50 86 50
          C92 50 92 62 86 62
          Q82 62 82 64
          V76
          Q82 82 76 82
          H66
          Q64 82 64 78
          C64 72 52 72 52 78
          Q52 82 50 82
          H46
          Q44 82 44 86
          C44 92 32 92 32 86
          Q32 82 30 82
          H24
          Q18 82 18 76
          V70
          Q18 68 22 68
          C28 68 28 56 22 56
          Q18 56 18 54
          V24
          Q18 22 22 22
          C28 22 28 10 22 10
          Q18 10 18 8
          Z
        `;
      case "P3":
        return `
          M16 20
          Q16 12 24 12
          H40
          Q42 12 42 16
          C42 22 54 22 54 16
          Q54 12 56 12
          H76
          Q84 12 84 20
          V40
          Q84 42 80 42
          C74 42 74 54 80 54
          Q84 54 84 56
          V76
          Q84 84 76 84
          H56
          Q54 84 54 80
          C54 74 42 74 42 80
          Q42 84 40 84
          H24
          Q16 84 16 76
          V56
          Q16 54 20 54
          C26 54 26 42 20 42
          Q16 42 16 40
          V30
          Q16 28 12 28
          C6 28 6 16 12 16
          Q16 16 16 20
          Z
        `;
      case "P4":
        return `
          M18 18
          Q18 12 24 12
          H28
          Q30 12 30 16
          C30 22 42 22 42 16
          Q42 12 44 12
          H76
          Q82 12 82 18
          V30
          Q82 32 78 32
          C72 32 72 44 78 44
          Q82 44 82 46
          V50
          Q82 52 86 52
          C92 52 92 64 86 64
          Q82 64 82 66
          V76
          Q82 82 76 82
          H60
          Q58 82 58 78
          C58 72 46 72 46 78
          Q46 82 44 82
          H24
          Q18 82 18 76
          V62
          Q18 60 22 60
          C28 60 28 48 22 48
          Q18 48 18 46
          V24
          Q18 22 22 22
          C28 22 28 10 22 10
          Q18 10 18 8
          Z
        `;
      case "P5":
        return `
          M14 22
          Q14 12 24 12
          H76
          Q86 12 86 22
          V34
          Q86 38 82 38
          C76 38 76 50 82 50
          Q86 50 86 54
          V76
          Q86 86 76 86
          H60
          Q58 86 58 82
          C58 76 46 76 46 82
          Q46 86 44 86
          H24
          Q14 86 14 76
          V60
          Q14 58 18 58
          C24 58 24 46 18 46
          Q14 46 14 44
          V22
          Z
        `;
      case "P6":
        return `
          M20 20
          Q20 12 28 12
          H72
          Q80 12 80 20
          V30
          Q80 32 76 32
          C70 32 70 44 76 44
          Q80 44 80 46
          V72
          Q80 80 72 80
          H58
          Q56 80 56 76
          C56 70 44 70 44 76
          Q44 80 42 80
          H28
          Q20 80 20 72
          V58
          Q20 56 24 56
          C30 56 30 44 24 44
          Q20 44 20 42
          V20
          Z
        `;
      default:
        return `M18 18 H82 V82 H18 Z`;
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
  const finalGrid = [{
    x: 64,
    y: 78
  },
  // col 1 row 1
  {
    x: 184,
    y: 78
  },
  // col 2 row 1
  {
    x: 304,
    y: 78
  },
  // col 3 row 1
  {
    x: 64,
    y: 204
  },
  // col 1 row 2
  {
    x: 184,
    y: 204
  },
  // col 2 row 2
  {
    x: 304,
    y: 204
  } // col 3 row 2
  ];
  const puzzlePieces = [{
    id: 1,
    text: "What users say",
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
    text: "What data shows",
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
    text: "What business wants",
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
    text: "What tech allows",
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
    text: "What breaks",
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
    text: "What we don't know",
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
                    <PuzzleShape variant={p.variant} text={p.text} color={p.color} className="w-28 h-28 md:w-32 md:h-32" />
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