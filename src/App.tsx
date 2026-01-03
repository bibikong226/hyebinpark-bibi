import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * PORTFOLIO HOMEPAGE - HYEBIN PARK
 * - Name is the largest element in hero
 * - Proper interlocking jigsaw puzzle pieces (3x2 grid)
 * - Assembles on scroll or after 3 seconds
 * - Puzzle is main element on left
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
  // Proper interlocking jigsaw pieces for a 3x2 grid
  // Row 1: P1 (top-left), P2 (top-center), P3 (top-right)
  // Row 2: P4 (bottom-left), P5 (bottom-center), P6 (bottom-right)
  const getPath = () => {
    switch (variant) {
      // Top-left: tab right, tab bottom
      case "P1":
        return `
          M0 0
          H35
          C35 0, 35 -12, 50 -12
          C65 -12, 65 0, 65 0
          H100
          V35
          C100 35, 112 35, 112 50
          C112 65, 100 65, 100 65
          V100
          H65
          C65 100, 65 112, 50 112
          C35 112, 35 100, 35 100
          H0
          Z
        `;
      // Top-center: slot left, tab right, tab bottom
      case "P2":
        return `
          M0 0
          H35
          C35 0, 35 -12, 50 -12
          C65 -12, 65 0, 65 0
          H100
          V35
          C100 35, 112 35, 112 50
          C112 65, 100 65, 100 65
          V100
          H65
          C65 100, 65 112, 50 112
          C35 112, 35 100, 35 100
          H0
          V65
          C0 65, -12 65, -12 50
          C-12 35, 0 35, 0 35
          Z
        `;
      // Top-right: slot left, tab bottom
      case "P3":
        return `
          M0 0
          H100
          V100
          H65
          C65 100, 65 112, 50 112
          C35 112, 35 100, 35 100
          H0
          V65
          C0 65, -12 65, -12 50
          C-12 35, 0 35, 0 35
          Z
        `;
      // Bottom-left: slot top, tab right
      case "P4":
        return `
          M0 0
          H35
          C35 0, 35 -12, 50 -12
          C65 -12, 65 0, 65 0
          H100
          V35
          C100 35, 112 35, 112 50
          C112 65, 100 65, 100 65
          V100
          H0
          Z
        `;
      // Bottom-center: slot top, slot left, tab right
      case "P5":
        return `
          M0 0
          H35
          C35 0, 35 -12, 50 -12
          C65 -12, 65 0, 65 0
          H100
          V35
          C100 35, 112 35, 112 50
          C112 65, 100 65, 100 65
          V100
          H0
          V65
          C0 65, -12 65, -12 50
          C-12 35, 0 35, 0 35
          Z
        `;
      // Bottom-right: slot top, slot left
      case "P6":
        return `
          M0 0
          H100
          V100
          H0
          V65
          C0 65, -12 65, -12 50
          C-12 35, 0 35, 0 35
          Z
        `;
      default:
        return `M0 0 H100 V100 H0 Z`;
    }
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.15))"
      }}
    >
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox="-15 -15 130 130"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path d={getPath()} fill={color} stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        <path d={getPath()} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      </svg>
      <div className="relative z-10 h-full w-full flex items-center justify-center p-2">
        <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-white text-center leading-tight drop-shadow-md select-none">
          {text}
        </span>
      </div>
    </div>
  );
};

const App = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [assembled, setAssembled] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Auto-assemble after 3 seconds or on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 3000);

    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0.05) {
        setAssembled(true);
      }
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Piece size for grid calculation
  const pieceSize = 100; // Base size, will be scaled by CSS
  const gap = -12; // Negative gap for interlocking

  // Final assembled positions (3x2 grid, pieces interlock)
  const finalGrid = [
    { x: 0, y: 0 },                           // P1: row 1, col 1
    { x: pieceSize + gap, y: 0 },             // P2: row 1, col 2
    { x: (pieceSize + gap) * 2, y: 0 },       // P3: row 1, col 3
    { x: 0, y: pieceSize + gap },             // P4: row 2, col 1
    { x: pieceSize + gap, y: pieceSize + gap }, // P5: row 2, col 2
    { x: (pieceSize + gap) * 2, y: pieceSize + gap }, // P6: row 2, col 3
  ];

  const puzzlePieces = [
    {
      id: 1,
      text: "User Needs",
      variant: "P1",
      color: "#E53935", // Red
      messy: { x: -60, y: -80, r: -25 },
      final: { ...finalGrid[0], r: 0 },
      delay: 0.0
    },
    {
      id: 2,
      text: "Data Complexity",
      variant: "P2",
      color: "#FB8C00", // Orange
      messy: { x: 120, y: -60, r: 35 },
      final: { ...finalGrid[1], r: 0 },
      delay: 0.1
    },
    {
      id: 3,
      text: "Business Goals",
      variant: "P3",
      color: "#8E24AA", // Purple
      messy: { x: 280, y: -40, r: 15 },
      final: { ...finalGrid[2], r: 0 },
      delay: 0.2
    },
    {
      id: 4,
      text: "Tech Constraints",
      variant: "P4",
      color: "#00ACC1", // Teal
      messy: { x: -40, y: 160, r: -45 },
      final: { ...finalGrid[3], r: 0 },
      delay: 0.3
    },
    {
      id: 5,
      text: "Edge Cases",
      variant: "P5",
      color: "#43A047", // Green
      messy: { x: 140, y: 200, r: 55 },
      final: { ...finalGrid[4], r: 0 },
      delay: 0.4
    },
    {
      id: 6,
      text: "Emerging Tech",
      variant: "P6",
      color: "#3949AB", // Indigo
      messy: { x: 300, y: 180, r: -30 },
      final: { ...finalGrid[5], r: 0 },
      delay: 0.5
    }
  ];

  return (
    <div className="bg-[#ffffff] text-[#121212] selection:bg-indigo-100 overflow-x-hidden font-sans">
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
      <section ref={heroRef} className="relative min-h-screen">
        <div className="h-screen w-full flex flex-col md:flex-row items-center px-8 md:px-16">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "100px 100px"
            }}
          />

          {/* Left: Puzzle Animation (Main) */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center order-2 md:order-1">
            <div className="relative" style={{ width: '380px', height: '260px' }}>
              {/* Puzzle Pieces */}
              {puzzlePieces.map((p) => {
                const isLastPiece = p.id === 6;
                return (
                  <motion.div
                    key={p.id}
                    className="absolute"
                    initial={{ 
                      x: p.messy.x, 
                      y: p.messy.y, 
                      rotate: p.messy.r,
                      scale: 0.9
                    }}
                    animate={{
                      x: assembled ? p.final.x : p.messy.x,
                      y: assembled ? p.final.y : p.messy.y,
                      rotate: assembled ? 0 : p.messy.r,
                      scale: assembled ? (isLastPiece ? [1, 1.05, 1] : 1) : 0.9
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: assembled ? p.delay : 0
                    }}
                    style={{ willChange: "transform" }}
                  >
                    <PuzzleShape
                      variant={p.variant}
                      text={p.text}
                      color={p.color}
                      className="w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
                    />
                  </motion.div>
                );
              })}

              {/* Overlay outcome text when assembled */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: assembled ? 1 : 0,
                  scale: assembled ? 1 : 0.9
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: assembled ? 0.8 : 0
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
              >
                <div className="text-center bg-white/90 backdrop-blur-md px-8 py-5 rounded-2xl border border-zinc-200/60 shadow-xl">
                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-600 mb-1">
                    Usable Product
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-900">
                    Business Impact
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Branding & Message */}
          <div className="w-full md:w-1/2 z-10 order-1 md:order-2 pt-32 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-400 mb-6 font-bold">
                Strategic Product Designer
              </h2>
              <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-light tracking-tighter leading-none mb-8">
                Hyebin Park
              </h1>
              <h3 className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed max-w-lg mb-6">
                Turn <span className="font-serif italic text-indigo-600">Complexity</span> to Clarity
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-md font-light text-sm md:text-base">
                From AI algorithms to crypto workflows, I turn ambiguity into structured, usable products that drive business impact.
              </p>
            </motion.div>
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
          {[
            { title: "Neuroflow AI", desc: "Enterprise Algorithm UX", year: "2024", img: "bg-zinc-50" },
            { title: "Vault Protocol", desc: "Crypto Trust Architecture", year: "2023", img: "bg-zinc-100" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
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
            </motion.div>
          ))}
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
          <a href="#" className="hover:text-read.cv transition-colors">Read.cv</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
