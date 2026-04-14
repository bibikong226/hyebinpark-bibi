import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  { label: "User", sublabel: "Needs", color: "#E8443A", row: 0, col: 0, startX: -200, startY: -140, startRotate: -22 },
  { label: "Data", sublabel: "Complexity", color: "#F59E0B", row: 0, col: 1, startX: 50, startY: -180, startRotate: 18 },
  { label: "Business", sublabel: "Goals", color: "#22C55E", row: 0, col: 2, startX: 240, startY: -120, startRotate: -14 },
  { label: "Tech", sublabel: "Constraints", color: "#EC4899", row: 1, col: 0, startX: -180, startY: 160, startRotate: 16 },
  { label: "Edge", sublabel: "Cases", color: "#8B5CF6", row: 1, col: 1, startX: 40, startY: 200, startRotate: -20 },
  { label: "Emerging", sublabel: "Tech", color: "#3B82F6", row: 1, col: 2, startX: 260, startY: 140, startRotate: 22 },
];

const PIECE_W = 130;
const PIECE_H = 100;
const TAB_R = 13;
const CORNER_R = 12;

const PuzzlePieceSVG = ({ piece, index }: { piece: PuzzlePiece; index: number }) => {
  const hasTabRight = piece.col < 2;
  const hasTabBottom = piece.row < 1;
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
        <span className="text-[12px] font-extrabold uppercase leading-tight tracking-[0.04em] text-white drop-shadow-sm">{piece.label}</span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-white/75">{piece.sublabel}</span>
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
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"scattered" | "assembling" | "assembled" | "photo">(
    prefersReducedMotion ? "photo" : "scattered"
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("photo");
      onAssembled?.();
      return;
    }
    if (isInView && phase === "scattered") {
      // Show scattered pieces for 1.5s so user can read them
      const t1 = setTimeout(() => setPhase("assembling"), 1500);
      return () => clearTimeout(t1);
    }
  }, [isInView, prefersReducedMotion, phase]);

  useEffect(() => {
    if (phase === "assembling") {
      // Spring animation takes ~1.2s, then wait a beat, then show photo
      const t2 = setTimeout(() => {
        setPhase("assembled");
        setTimeout(() => {
          setPhase("photo");
          onAssembled?.();
        }, 600);
      }, 1400);
      return () => clearTimeout(t2);
    }
  }, [phase, onAssembled]);

  const totalW = 3 * PIECE_W + TAB_R;
  const totalH = 2 * PIECE_H + TAB_R;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: totalW, height: totalH }}
      role="img"
      aria-label="Puzzle that reveals Hyebin's profile photo"
    >
      <AnimatePresence>
        {phase !== "photo" && pieces.map((piece, index) => {
          const x = piece.col * PIECE_W;
          const y = piece.row * PIECE_H;
          const isAssembling = phase === "assembling" || phase === "assembled";
          return (
            <motion.div
              key={piece.label + piece.sublabel}
              className="absolute"
              style={{ left: x, top: y }}
              initial={prefersReducedMotion ? false : {
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
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.3 } }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 14,
                delay: isAssembling ? index * 0.12 : 0.1 + index * 0.08,
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
