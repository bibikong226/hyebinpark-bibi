import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const pieces = [
  {
    label: "Research",
    color: "hsl(var(--puzzle-piece-1))",
    startX: -110,
    startY: -54,
    final: { left: "18px", top: "18px" },
  },
  {
    label: "Systems",
    color: "hsl(var(--puzzle-piece-2))",
    startX: 118,
    startY: -46,
    final: { right: "18px", top: "18px" },
  },
  {
    label: "AI",
    color: "hsl(var(--puzzle-piece-3))",
    startX: -92,
    startY: 84,
    final: { left: "18px", bottom: "18px" },
  },
  {
    label: "Impact",
    color: "hsl(var(--puzzle-piece-4))",
    startX: 126,
    startY: 92,
    final: { right: "18px", bottom: "18px" },
  },
];

export const PuzzleAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [isAssembled, setIsAssembled] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAssembled(true);
      return;
    }

    if (isInView) {
      const timer = window.setTimeout(() => setIsAssembled(true), 160);
      return () => window.clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative h-[220px] w-[260px] md:h-[240px] md:w-[280px]"
      role="img"
      aria-label="Animated four-part framework connecting Research, Systems, AI, and Impact."
    >
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--desktop-search) / 0.84), hsl(var(--desktop-panel-strong) / 0.92))",
          border: "1px solid hsl(var(--desktop-border) / 0.12)",
          boxShadow:
            "inset 0 1px 0 hsl(var(--desktop-border) / 0.08), 0 20px 42px hsl(var(--desktop-shadow) / 0.24)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-[18px] rounded-[22px]"
        style={{
          border: "1px dashed hsl(var(--desktop-border) / 0.12)",
          background: "hsl(var(--desktop-shadow) / 0.08)",
        }}
        aria-hidden="true"
      />

      {pieces.map((piece, index) => (
        <motion.div
          key={piece.label}
          className="absolute flex items-center justify-center rounded-[18px] px-3 text-center text-[12px] font-semibold tracking-[0.08em] uppercase md:text-[13px]"
          style={{
            width: "calc(50% - 24px)",
            height: "calc(50% - 24px)",
            color: "hsl(var(--desktop-foreground))",
            background: piece.color,
            boxShadow:
              "0 16px 28px hsl(var(--desktop-shadow) / 0.22), inset 0 1px 0 hsl(var(--desktop-border) / 0.18)",
            ...piece.final,
          }}
          initial={
            prefersReducedMotion
              ? false
              : {
                  x: piece.startX,
                  y: piece.startY,
                  opacity: 0,
                  scale: 0.92,
                  rotate: index % 2 === 0 ? -8 : 8,
                }
          }
          animate={{
            x: isAssembled ? 0 : piece.startX,
            y: isAssembled ? 0 : piece.startY,
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.7,
            delay: prefersReducedMotion ? 0 : index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {piece.label}
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.18em] uppercase"
        style={{
          color: "hsl(var(--desktop-muted))",
          background: "hsl(var(--desktop-panel) / 0.78)",
          border: "1px solid hsl(var(--desktop-border) / 0.08)",
        }}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: isAssembled ? 1 : 0.45 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.35 }}
      >
        Design Framework
      </motion.div>
    </div>
  );
};
