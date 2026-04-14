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
  { label: "User", sublabel: "Needs", color: "#E8443A", row: 0, col: 0, startX: -160, startY: -110, startRotate: -18 },
  { label: "Data", sublabel: "Complexity", color: "#F59E0B", row: 0, col: 1, startX: 35, startY: -140, startRotate: 14 },
  { label: "Business", sublabel: "Goals", color: "#22C55E", row: 0, col: 2, startX: 180, startY: -90, startRotate: -10 },
  { label: "Tech", sublabel: "Constraints", color: "#EC4899", row: 1, col: 0, startX: -140, startY: 120, startRotate: 12 },
  { label: "Edge", sublabel: "Cases", color: "#8B5CF6", row: 1, col: 1, startX: 25, startY: 150, startRotate: -16 },
  { label: "Emerging", sublabel: "Tech", color: "#3B82F6", row: 1, col: 2, startX: 200, startY: 105, startRotate: 18 },
];

const PIECE_W = 86;
const PIECE_H = 58;
const TAB_R = 10;
const CORNER_R = 10;

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
        <span className="text-[9px] font-extrabold uppercase leading-tight tracking-[0.04em] text-white">{piece.label}</span>
        <span className="text-[7px] font-semibold uppercase tracking-[0.08em] text-white/70">{piece.sublabel}</span>
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
  const [isAssembled, setIsAssembled] = useState(!!prefersReducedMotion);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAssembled(true);
      setTimeout(() => { setShowPhoto(true); onAssembled?.(); }, 100);
      return;
    }
    if (isInView) {
      const timer = window.setTimeout(() => {
        setIsAssembled(true);
        // After pieces finish animating, morph to photo
        setTimeout(() => { setShowPhoto(true); onAssembled?.(); }, 900);
      }, 400);
      return () => window.clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion, onAssembled]);

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
      {/* Puzzle pieces */}
      <AnimatePresence>
        {!showPhoto && pieces.map((piece, index) => {
          const x = piece.col * PIECE_W;
          const y = piece.row * PIECE_H;
          return (
            <motion.div
              key={piece.label + piece.sublabel}
              className="absolute"
              style={{ left: x, top: y }}
              initial={prefersReducedMotion ? false : { x: piece.startX, y: piece.startY, opacity: 0, scale: 0.65, rotate: piece.startRotate }}
              animate={{
                x: isAssembled ? 0 : piece.startX,
                y: isAssembled ? 0 : piece.startY,
                opacity: isAssembled ? 1 : 0,
                scale: isAssembled ? 1 : 0.65,
                rotate: isAssembled ? 0 : piece.startRotate,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 13,
                delay: prefersReducedMotion ? 0 : 0.15 + index * 0.1,
              }}
            >
              <PuzzlePieceSVG piece={piece} index={index} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Profile photo reveal — same size as assembled puzzle */}
      <AnimatePresence>
        {showPhoto && profileSrc && (
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
