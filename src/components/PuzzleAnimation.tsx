import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
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
  { label: "User", sublabel: "Needs", color: "#E8443A", row: 0, col: 0, startX: -20, startY: -14, startRotate: -6 },
  { label: "Data", sublabel: "Complexity", color: "#F59E0B", row: 0, col: 1, startX: 0, startY: -18, startRotate: 5 },
  { label: "Business", sublabel: "Goals", color: "#22C55E", row: 0, col: 2, startX: 20, startY: -12, startRotate: -4 },
  { label: "Tech", sublabel: "Constraints", color: "#EC4899", row: 1, col: 0, startX: -18, startY: 16, startRotate: 5 },
  { label: "Edge", sublabel: "Cases", color: "#8B5CF6", row: 1, col: 1, startX: 3, startY: 20, startRotate: -5 },
  { label: "Emerging", sublabel: "Tech", color: "#3B82F6", row: 1, col: 2, startX: 22, startY: 14, startRotate: 4 },
];

const PIECE_W = 130;
const PIECE_H = 100;
const TAB_R = 12;
const CORNER_R = 10;
const COLS = 3;
const ROWS = 2;
const PADDING = 40; // extra padding so scattered pieces aren't clipped

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
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"scattered" | "assembling" | "assembled" | "photo">(
    prefersReducedMotion ? "photo" : "scattered"
  );
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];

    if (phase === "scattered") {
      timersRef.current.push(window.setTimeout(() => setPhase("assembling"), 2000));
    }

    if (phase === "assembling") {
      timersRef.current.push(window.setTimeout(() => setPhase("assembled"), 2800));
    }

    if (phase === "assembled") {
      timersRef.current.push(
        window.setTimeout(() => {
          setPhase("photo");
          onAssembled?.();
        }, 700)
      );
    }

    if (phase === "photo") {
      timersRef.current.push(window.setTimeout(() => setPhase("scattered"), 3200));
    }

    return () => {
      timersRef.current.forEach(window.clearTimeout);
      timersRef.current = [];
    };
  }, [phase, onAssembled, prefersReducedMotion]);

  const totalW = COLS * PIECE_W + TAB_R;
  const totalH = ROWS * PIECE_H + TAB_R;

  const isScattered = phase === "scattered";
  const isAssembling = phase === "assembling" || phase === "assembled";
  const showPuzzle = phase !== "photo";

  return (
    <div
      className="relative"
      style={{ width: totalW + PADDING * 2, height: totalH + PADDING * 2 }}
      role="img"
      aria-label="Animated puzzle showing how Hyebin works"
    >
      {/* Puzzle pieces - single persistent container, no remounting */}
      <div
        className="absolute"
        style={{
          left: PADDING,
          top: PADDING,
          width: totalW,
          height: totalH,
          opacity: showPuzzle ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: showPuzzle ? "auto" : "none",
        }}
      >
        {pieces.map((piece, index) => {
          const x = piece.col * PIECE_W;
          const y = piece.row * PIECE_H;

          return (
            <motion.div
              key={piece.label + piece.sublabel}
              className="absolute"
              style={{ left: x, top: y }}
              animate={{
                x: isAssembling ? 0 : isScattered ? piece.startX : 0,
                y: isAssembling ? 0 : isScattered ? piece.startY : 0,
                scale: isAssembling ? 1 : isScattered ? 0.94 : 1,
                rotate: isAssembling ? 0 : isScattered ? piece.startRotate : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 35,
                damping: 22,
                delay: index * 0.1,
              }}
            >
              <PuzzlePieceSVG piece={piece} index={index} />
            </motion.div>
          );
        })}
      </div>

      {/* Photo overlay */}
      <AnimatePresence>
        {phase === "photo" && profileSrc && (
          <motion.div
            className="absolute flex items-center justify-center overflow-hidden rounded-2xl"
            style={{ left: PADDING - 16, top: PADDING - 16, width: totalW + 32, height: totalH + 32 }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.35 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={profileSrc}
              alt="Hyebin Park"
              className="h-full w-full object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
