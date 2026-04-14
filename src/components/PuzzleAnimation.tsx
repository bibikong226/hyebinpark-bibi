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
  { label: "User", sublabel: "Needs", color: "#7C5CFC", row: 0, col: 0, startX: -140, startY: -100, startRotate: -15 },
  { label: "Data", sublabel: "Complexity", color: "#9B7DFF", row: 0, col: 1, startX: 30, startY: -120, startRotate: 12 },
  { label: "Business", sublabel: "Goals", color: "#6C4DE6", row: 0, col: 2, startX: 160, startY: -80, startRotate: -8 },
  { label: "Tech", sublabel: "Constraints", color: "#8B6CF7", row: 1, col: 0, startX: -120, startY: 110, startRotate: 10 },
  { label: "Edge", sublabel: "Cases", color: "#A78BFA", row: 1, col: 1, startX: 20, startY: 130, startRotate: -12 },
  { label: "Emerging", sublabel: "Tech", color: "#7048E8", row: 1, col: 2, startX: 170, startY: 95, startRotate: 14 },
];

const PIECE_W = 100;
const PIECE_H = 72;
const GAP = 0;
const TAB_R = 13;
const CORNER_R = 14;

const PuzzlePieceSVG = ({ piece, index }: { piece: PuzzlePiece; index: number }) => {
  const hasTabRight = piece.col < 2;
  const hasTabBottom = piece.row < 1;
  const hasBlankLeft = piece.col > 0;
  const hasBlankTop = piece.row > 0;
  const svgW = PIECE_W + (hasTabRight ? TAB_R : 0);
  const svgH = PIECE_H + (hasTabBottom ? TAB_R : 0);
  const maskId = `puzzle-mask-${index}`;
  const glossId = `puzzle-gloss-${index}`;
  const shadowId = `puzzle-shadow-${index}`;

  return (
    <div className="relative" style={{ width: svgW, height: svgH }}>
      <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} fill="none" aria-hidden="true">
        <defs>
          <mask id={maskId}>
            <rect width={PIECE_W} height={PIECE_H} rx={CORNER_R} fill="white" />
            {hasTabRight ? <circle cx={PIECE_W} cy={PIECE_H / 2} r={TAB_R} fill="white" /> : null}
            {hasTabBottom ? <circle cx={PIECE_W / 2} cy={PIECE_H} r={TAB_R} fill="white" /> : null}
            {hasBlankLeft ? <circle cx={0} cy={PIECE_H / 2} r={TAB_R} fill="black" /> : null}
            {hasBlankTop ? <circle cx={PIECE_W / 2} cy={0} r={TAB_R} fill="black" /> : null}
          </mask>
          <linearGradient id={glossId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
          </linearGradient>
          <filter id={shadowId} x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
          </filter>
        </defs>

        <g mask={`url(#${maskId})`} filter={`url(#${shadowId})`}>
          <rect width={svgW} height={svgH} fill={piece.color} />
          <rect width={svgW} height={svgH} fill={`url(#${glossId})`} />
        </g>
      </svg>

      <div
        className="absolute left-0 top-0 flex flex-col items-center justify-center px-1 text-center"
        style={{ width: PIECE_W, height: PIECE_H }}
      >
        <span className="text-[11px] font-black uppercase leading-tight tracking-[0.06em]" style={{ color: "rgba(255,255,255,0.95)" }}>
          {piece.label}
        </span>
        <span className="text-[8px] font-semibold uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.7)" }}>
          {piece.sublabel}
        </span>
      </div>
    </div>
  );
};

export const PuzzleAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [isAssembled, setIsAssembled] = useState(!!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAssembled(true);
      return;
    }
    if (isInView) {
      const timer = window.setTimeout(() => setIsAssembled(true), 300);
      return () => window.clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion]);

  const totalW = 3 * PIECE_W + TAB_R;
  const totalH = 2 * PIECE_H + TAB_R;

  return (
    <div
      ref={containerRef}
      className="relative max-w-full"
      style={{ width: totalW, height: totalH }}
      role="img"
      aria-label="Six-piece puzzle framework: User Needs, Data Complexity, Business Goals, Tech Constraints, Edge Cases, Emerging Tech"
    >
      {pieces.map((piece, index) => {
        const x = piece.col * (PIECE_W + GAP);
        const y = piece.row * (PIECE_H + GAP);

        return (
          <motion.div
            key={piece.label + piece.sublabel}
            className="absolute"
            style={{ left: x, top: y }}
            initial={
              prefersReducedMotion
                ? false
                : { x: piece.startX, y: piece.startY, opacity: 0, scale: 0.85, rotate: piece.startRotate }
            }
            animate={{
              x: isAssembled ? 0 : piece.startX,
              y: isAssembled ? 0 : piece.startY,
              opacity: isAssembled ? 1 : 0,
              scale: isAssembled ? 1 : 0.85,
              rotate: isAssembled ? 0 : piece.startRotate,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: prefersReducedMotion ? 0 : index * 0.1,
            }}
          >
            <PuzzlePieceSVG piece={piece} index={index} />
          </motion.div>
        );
      })}
    </div>
  );
};
