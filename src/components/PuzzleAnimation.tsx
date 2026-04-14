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
  { label: "User", sublabel: "Needs", color: "hsl(var(--puzzle-piece-1))", row: 0, col: 0, startX: -120, startY: -80, startRotate: -12 },
  { label: "Data", sublabel: "Complexity", color: "hsl(var(--puzzle-piece-2))", row: 0, col: 1, startX: 40, startY: -100, startRotate: 8 },
  { label: "Business", sublabel: "Goals", color: "hsl(var(--puzzle-piece-3))", row: 0, col: 2, startX: 140, startY: -60, startRotate: -6 },
  { label: "Tech", sublabel: "Constraints", color: "hsl(var(--puzzle-piece-4))", row: 1, col: 0, startX: -100, startY: 90, startRotate: 10 },
  { label: "Edge", sublabel: "Cases", color: "hsl(var(--puzzle-piece-5))", row: 1, col: 1, startX: 20, startY: 110, startRotate: -8 },
  { label: "Emerging", sublabel: "Tech", color: "hsl(var(--puzzle-piece-6))", row: 1, col: 2, startX: 160, startY: 80, startRotate: 14 },
];

const PIECE_W = 108;
const PIECE_H = 96;
const GAP = 4;
const TAB_R = 12;

const PuzzlePieceSVG = ({ piece, index }: { piece: PuzzlePiece; index: number }) => {
  const w = PIECE_W;
  const h = PIECE_H;
  const tr = TAB_R;

  const hasTabRight = piece.col < 2;
  const hasTabBottom = piece.row < 1;
  const hasBlankLeft = piece.col > 0;
  const hasBlankTop = piece.row > 0;

  const buildPath = () => {
    let d = `M 0 0`;

    // Top edge
    if (hasBlankTop) {
      d += ` L ${w / 2 - tr} 0`;
      d += ` A ${tr} ${tr} 0 1 1 ${w / 2 + tr} 0`;
      d += ` L ${w} 0`;
    } else {
      d += ` L ${w} 0`;
    }

    // Right edge
    if (hasTabRight) {
      d += ` L ${w} ${h / 2 - tr}`;
      d += ` A ${tr} ${tr} 0 1 0 ${w} ${h / 2 + tr}`;
      d += ` L ${w} ${h}`;
    } else {
      d += ` L ${w} ${h}`;
    }

    // Bottom edge
    if (hasTabBottom) {
      d += ` L ${w / 2 + tr} ${h}`;
      d += ` A ${tr} ${tr} 0 1 0 ${w / 2 - tr} ${h}`;
      d += ` L 0 ${h}`;
    } else {
      d += ` L 0 ${h}`;
    }

    // Left edge
    if (hasBlankLeft) {
      d += ` L 0 ${h / 2 + tr}`;
      d += ` A ${tr} ${tr} 0 1 1 0 ${h / 2 - tr}`;
      d += ` L 0 0`;
    } else {
      d += ` L 0 0`;
    }

    d += " Z";
    return d;
  };

  const svgW = w + (hasTabRight ? tr + 2 : 0);
  const svgH = h + (hasTabBottom ? tr + 2 : 0);

  return (
    <div className="relative" style={{ width: svgW, height: svgH }}>
      <svg
        width={svgW}
        height={svgH}
        viewBox={`${hasBlankLeft ? 0 : 0} ${hasBlankTop ? 0 : 0} ${svgW} ${svgH}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id={`shadow-${index}`}>
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
          </filter>
        </defs>
        <path
          d={buildPath()}
          fill={piece.color}
          filter={`url(#shadow-${index})`}
        />
      </svg>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ width: w, height: h }}
      >
        <span className="text-[13px] font-black uppercase leading-tight tracking-wide" style={{ color: "white" }}>
          {piece.label}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.82)" }}>
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
      const timer = window.setTimeout(() => setIsAssembled(true), 200);
      return () => window.clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion]);

  const totalW = 3 * PIECE_W + 2 * GAP + TAB_R + 2;
  const totalH = 2 * PIECE_H + GAP + TAB_R + 2;

  return (
    <div
      ref={containerRef}
      className="relative"
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
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 16,
              delay: prefersReducedMotion ? 0 : index * 0.09,
            }}
          >
            <PuzzlePieceSVG piece={piece} index={index} />
          </motion.div>
        );
      })}
    </div>
  );
};
