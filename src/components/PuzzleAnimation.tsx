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

/* 3 columns × 2 rows — wider, shorter, fits landscape */
const pieces: PuzzlePiece[] = [
  { label: "User", sublabel: "Needs", color: "#E8443A", row: 0, col: 0, startX: -60, startY: -40, startRotate: -10 },
  { label: "Data", sublabel: "Complexity", color: "#F59E0B", row: 0, col: 1, startX: 8, startY: -50, startRotate: 8 },
  { label: "Business", sublabel: "Goals", color: "#22C55E", row: 0, col: 2, startX: 55, startY: -35, startRotate: -7 },
  { label: "Tech", sublabel: "Constraints", color: "#EC4899", row: 1, col: 0, startX: -55, startY: 45, startRotate: 9 },
  { label: "Edge", sublabel: "Cases", color: "#8B5CF6", row: 1, col: 1, startX: 12, startY: 55, startRotate: -8 },
  { label: "Emerging", sublabel: "Tech", color: "#3B82F6", row: 1, col: 2, startX: 60, startY: 40, startRotate: 7 },
];

const PIECE_W = 130;
const PIECE_H = 100;
const TAB_R = 12;
const CORNER_R = 10;
const COLS = 3;
const ROWS = 2;

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
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
          </linearGradient>
        </defs>
        <g mask={`url(#${maskId})`}>
          <rect width={svgW} height={svgH} fill={piece.color} />
          <rect width={svgW} height={svgH} fill={`url(#${glossId})`} />
        </g>
      </svg>
      <div className="absolute left-0 top-0 flex flex-col items-center justify-center px-1 text-center" style={{ width: PIECE_W, height: PIECE_H }}>
        <span className="text-[14px] font-extrabold uppercase leading-tight tracking-[0.04em] text-white drop-shadow-sm">{piece.label}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/75">{piece.sublabel}</span>
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
  const isInView = useInView(containerRef, { once: false, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"scattered" | "assembling" | "assembled" | "photo">(
    prefersReducedMotion ? "photo" : "scattered"
  );
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const hasTriggered = useRef(false);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Auto-trigger assembly when scrolled into view
  useEffect(() => {
    if (isInView && phase === "scattered" && !hasTriggered.current) {
      hasTriggered.current = true;
      const t = setTimeout(() => setPhase("assembling"), 600);
      return () => clearTimeout(t);
    }
  }, [isInView, phase]);

  // State machine
  useEffect(() => {
    clearTimer();

    if (phase === "assembling") {
      timerRef.current = setTimeout(() => setPhase("assembled"), 2000);
    } else if (phase === "assembled") {
      timerRef.current = setTimeout(() => {
        setPhase("photo");
        onAssembled?.();
      }, 700);
    } else if (phase === "photo") {
      timerRef.current = setTimeout(() => {
        hasTriggered.current = false;
        setPhase("scattered");
      }, 4000);
    }

    return clearTimer;
  }, [phase, onAssembled]);

  // Re-trigger when it comes back into view after scatter
  useEffect(() => {
    if (isInView && phase === "scattered" && !hasTriggered.current) {
      hasTriggered.current = true;
      const t = setTimeout(() => setPhase("assembling"), 800);
      return () => clearTimeout(t);
    }
  }, [isInView, phase]);

  const totalW = COLS * PIECE_W + TAB_R;
  const totalH = ROWS * PIECE_H + TAB_R;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: totalW, height: totalH }}
      role="img"
      aria-label="Animated puzzle showing how Hyebin works"
    >
      {/* Puzzle pieces */}
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
              initial={{
                x: piece.startX,
                y: piece.startY,
                opacity: 0,
                scale: 0.92,
                rotate: piece.startRotate,
              }}
              animate={{
                x: isAssembling ? 0 : piece.startX,
                y: isAssembling ? 0 : piece.startY,
                opacity: 1,
                scale: isAssembling ? 1 : 0.93,
                rotate: isAssembling ? 0 : piece.startRotate,
              }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
              transition={{
                type: "spring",
                stiffness: isAssembling ? 38 : 70,
                damping: 18,
                delay: isAssembling ? index * 0.1 : 0.03 + index * 0.04,
              }}
            >
              <PuzzlePieceSVG piece={piece} index={index} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Photo reveal */}
      <AnimatePresence>
        {phase === "photo" && profileSrc && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={profileSrc}
              alt="Hyebin Park"
              className="max-h-full max-w-full object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
