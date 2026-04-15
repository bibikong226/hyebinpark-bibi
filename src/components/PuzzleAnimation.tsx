import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

interface PuzzlePiece {
  label: string;
  sublabel: string;
  color: string;
  row: number;
  col: number;
  startX: number;
  startY: number;
  startRotate: number;
}

const pieces: PuzzlePiece[] = [
  { label: "User", sublabel: "Needs", color: "#E8443A", row: 0, col: 0, startX: -140, startY: -100, startRotate: -22 },
  { label: "Data", sublabel: "Complexity", color: "#F59E0B", row: 0, col: 1, startX: 30, startY: -130, startRotate: 18 },
  { label: "Business", sublabel: "Goals", color: "#22C55E", row: 1, col: 0, startX: -120, startY: 30, startRotate: 16 },
  { label: "Tech", sublabel: "Constraints", color: "#EC4899", row: 1, col: 1, startX: 50, startY: 50, startRotate: -20 },
  { label: "Edge", sublabel: "Cases", color: "#8B5CF6", row: 2, col: 0, startX: -150, startY: 120, startRotate: 14 },
  { label: "Emerging", sublabel: "Tech", color: "#3B82F6", row: 2, col: 1, startX: 60, startY: 150, startRotate: -18 },
];

const PIECE_W = 130;
const PIECE_H = 90;
const TAB_R = 12;
const CORNER_R = 10;
const COLS = 2;
const ROWS = 3;

const PuzzlePieceSVG = ({ piece, index }: { piece: PuzzlePiece; index: number }) => {
  const hasTabRight = piece.col < COLS - 1;
  const hasTabBottom = piece.row < ROWS - 1;
  const hasBlankLeft = piece.col > 0;
  const hasBlankTop = piece.row > 0;
  const svgW = PIECE_W + (hasTabRight ? TAB_R : 0);
  const svgH = PIECE_H + (hasTabBottom ? TAB_R : 0);
  const maskId = `puzzle-mask-${index}`;
  const glossId = `puzzle-gloss-${index}`;

  return (
    <div className="relative" style={{ width: svgW, height: svgH }}>
      <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} fill="none" aria-hidden="true">
        <defs>
          <mask id={maskId}>
            <rect width={PIECE_W} height={PIECE_H} rx={CORNER_R} fill="white" />
            {hasTabRight && <circle cx={PIECE_W} cy={PIECE_H / 2} r={TAB_R} fill="white" />}
            {hasTabBottom && <circle cx={PIECE_W / 2} cy={PIECE_H} r={TAB_R} fill="white" />}
            {hasBlankLeft && <circle cx={0} cy={PIECE_H / 2} r={TAB_R} fill="black" />}
            {hasBlankTop && <circle cx={PIECE_W / 2} cy={0} r={TAB_R} fill="black" />}
          </mask>
          <linearGradient id={glossId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
          </linearGradient>
        </defs>
        <g mask={`url(#${maskId})`}>
          <rect width={svgW} height={svgH} fill={piece.color} />
          <rect width={svgW} height={svgH} fill={`url(#${glossId})`} />
        </g>
      </svg>
      <div className="absolute left-0 top-0 flex flex-col items-center justify-center px-1 text-center" style={{ width: PIECE_W, height: PIECE_H }}>
        <span className="text-[11px] font-extrabold uppercase leading-tight tracking-[0.04em] text-white drop-shadow-sm">{piece.label}</span>
        <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-white/75">{piece.sublabel}</span>
      </div>
    </div>
  );
};

interface PuzzleAnimationProps {
  onAssembled?: () => void;
  profileSrc?: string;
}

export const PuzzleAnimation = ({ onAssembled, profileSrc }: PuzzleAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"scattered" | "assembling" | "assembled" | "photo" | "pause">(
    prefersReducedMotion ? "photo" : "scattered"
  );

  const startCycle = useCallback(() => {
    setPhase("scattered");
  }, []);

  // Scatter → assemble (slow: 3s scatter view)
  useEffect(() => {
    if (prefersReducedMotion) { setPhase("photo"); onAssembled?.(); return; }
    if (isInView && phase === "scattered") {
      const t = setTimeout(() => setPhase("assembling"), 3000);
      return () => clearTimeout(t);
    }
  }, [isInView, prefersReducedMotion, phase]);

  // Assemble → assembled → photo → pause → restart
  useEffect(() => {
    if (phase === "assembling") {
      const t = setTimeout(() => {
        setPhase("assembled");
        setTimeout(() => {
          setPhase("photo");
          onAssembled?.();
        }, 800);
      }, 2000);
      return () => clearTimeout(t);
    }
    if (phase === "photo") {
      // Show photo for 3s then restart
      const t = setTimeout(() => startCycle(), 3000);
      return () => clearTimeout(t);
    }
  }, [phase, onAssembled, startCycle]);

  const totalW = COLS * PIECE_W + TAB_R;
  const totalH = ROWS * PIECE_H + TAB_R;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: totalW, height: totalH }}
      role="img"
      aria-label="Puzzle that reveals Hyebin's profile photo"
    >
      <AnimatePresence>
        {phase !== "photo" && phase !== "pause" && pieces.map((piece, index) => {
          const x = piece.col * PIECE_W;
          const y = piece.row * PIECE_H;
          const isAssembling = phase === "assembling" || phase === "assembled";
          return (
            <motion.div
              key={piece.label + piece.sublabel}
              className="absolute"
              style={{ left: x, top: y }}
              initial={{
                x: piece.startX,
                y: piece.startY,
                opacity: 0,
                scale: 0.7,
                rotate: piece.startRotate,
              }}
              animate={{
                x: isAssembling ? 0 : piece.startX,
                y: isAssembling ? 0 : piece.startY,
                opacity: 1,
                scale: isAssembling ? 1 : 0.85,
                rotate: isAssembling ? 0 : piece.startRotate,
              }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.4 } }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 12,
                delay: isAssembling ? index * 0.15 : 0.1 + index * 0.1,
              }}
            >
              <PuzzlePieceSVG piece={piece} index={index} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "photo" && profileSrc && (
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={profileSrc}
              alt="Hyebin Park"
              className="h-full w-full object-cover object-[center_20%]"
              style={{ width: totalW, height: totalH }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
