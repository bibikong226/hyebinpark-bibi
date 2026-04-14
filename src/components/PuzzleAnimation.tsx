import { motion, useInView, useReducedMotion } from "framer-motion";
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
  { label: "User", sublabel: "Needs", color: "#E8443A", row: 0, col: 0, startX: -180, startY: -130, startRotate: -18 },
  { label: "Data", sublabel: "Complexity", color: "#F59E0B", row: 0, col: 1, startX: 40, startY: -160, startRotate: 14 },
  { label: "Business", sublabel: "Goals", color: "#22C55E", row: 0, col: 2, startX: 200, startY: -100, startRotate: -10 },
  { label: "Tech", sublabel: "Constraints", color: "#EC4899", row: 1, col: 0, startX: -160, startY: 140, startRotate: 12 },
  { label: "Edge", sublabel: "Cases", color: "#8B5CF6", row: 1, col: 1, startX: 30, startY: 170, startRotate: -16 },
  { label: "Emerging", sublabel: "Tech", color: "#3B82F6", row: 1, col: 2, startX: 220, startY: 120, startRotate: 18 },
];

const PIECE_W = 90;
const PIECE_H = 64;
const TAB_R = 11;
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
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
          </linearGradient>
        </defs>
        <g mask={`url(#${maskId})`}>
          <rect width={svgW} height={svgH} fill={piece.color} />
          <rect width={svgW} height={svgH} fill={`url(#${glossId})`} />
        </g>
      </svg>
      <div className="absolute left-0 top-0 flex flex-col items-center justify-center px-1 text-center" style={{ width: PIECE_W, height: PIECE_H }}>
        <span className="text-[10px] font-extrabold uppercase leading-tight tracking-[0.06em] text-white">{piece.label}</span>
        <span className="text-[7.5px] font-semibold uppercase tracking-[0.1em] text-white/70">{piece.sublabel}</span>
      </div>
    </div>
  );
};

export const PuzzleAnimation = ({ onAssembled }: { onAssembled?: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [isAssembled, setIsAssembled] = useState(!!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAssembled(true);
      onAssembled?.();
      return;
    }
    if (isInView) {
      const timer = window.setTimeout(() => {
        setIsAssembled(true);
        setTimeout(() => onAssembled?.(), 600);
      }, 400);
      return () => window.clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion, onAssembled]);

  const totalW = 3 * PIECE_W + TAB_R;
  const totalH = 2 * PIECE_H + TAB_R;

  return (
    <div
      ref={containerRef}
      className="relative max-w-full"
      style={{ width: totalW, height: totalH }}
      role="img"
      aria-label="Six-piece puzzle: User Needs, Data Complexity, Business Goals, Tech Constraints, Edge Cases, Emerging Tech"
    >
      {pieces.map((piece, index) => {
        const x = piece.col * PIECE_W;
        const y = piece.row * PIECE_H;
        return (
          <motion.div
            key={piece.label + piece.sublabel}
            className="absolute"
            style={{ left: x, top: y }}
            initial={prefersReducedMotion ? false : { x: piece.startX, y: piece.startY, opacity: 0, scale: 0.7, rotate: piece.startRotate }}
            animate={{
              x: isAssembled ? 0 : piece.startX,
              y: isAssembled ? 0 : piece.startY,
              opacity: isAssembled ? 1 : 0,
              scale: isAssembled ? 1 : 0.7,
              rotate: isAssembled ? 0 : piece.startRotate,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: prefersReducedMotion ? 0 : 0.15 + index * 0.12,
            }}
          >
            <PuzzlePieceSVG piece={piece} index={index} />
          </motion.div>
        );
      })}
    </div>
  );
};
