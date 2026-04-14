import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const pieces = [
  {
    label: "Research",
    color: "hsl(var(--puzzle-piece-1))",
    startX: -110,
    startY: -54,
    final: { left: "18px", top: "18px" },
    edges: { right: "tab", bottom: "tab", left: "flat", top: "flat" },
  },
  {
    label: "Systems",
    color: "hsl(var(--puzzle-piece-2))",
    startX: 118,
    startY: -46,
    final: { right: "18px", top: "18px" },
    edges: { right: "flat", bottom: "tab", left: "blank", top: "flat" },
  },
  {
    label: "AI",
    color: "hsl(var(--puzzle-piece-3))",
    startX: -92,
    startY: 84,
    final: { left: "18px", bottom: "18px" },
    edges: { right: "tab", bottom: "flat", left: "flat", top: "blank" },
  },
  {
    label: "Impact",
    color: "hsl(var(--puzzle-piece-4))",
    startX: 126,
    startY: 92,
    final: { right: "18px", bottom: "18px" },
    edges: { right: "flat", bottom: "flat", left: "blank", top: "blank" },
  },
];

const PuzzlePieceShape = ({
  label,
  color,
  edges,
}: {
  label: string;
  color: string;
  edges: { right: string; bottom: string; left: string; top: string };
}) => {
  const cutoutStyle = {
    background: "hsl(var(--desktop-panel-strong))",
    boxShadow: "inset 0 1px 0 hsl(var(--desktop-border) / 0.08)",
  };

  const tabStyle = {
    background: color,
    boxShadow: "0 12px 20px hsl(var(--desktop-shadow) / 0.14), inset 0 1px 0 hsl(var(--desktop-border) / 0.16)",
  };

  return (
    <div className="relative h-[108px] w-[108px]">
      <div
        className="absolute inset-[10px] rounded-[26px]"
        style={{
          background: color,
          boxShadow:
            "0 16px 28px hsl(var(--desktop-shadow) / 0.22), inset 0 1px 0 hsl(var(--desktop-border) / 0.18)",
        }}
      />

      {edges.top === "tab" && (
        <span className="absolute left-1/2 top-[2px] h-7 w-7 -translate-x-1/2 rounded-full" style={tabStyle} aria-hidden="true" />
      )}
      {edges.right === "tab" && (
        <span className="absolute right-[2px] top-1/2 h-7 w-7 -translate-y-1/2 rounded-full" style={tabStyle} aria-hidden="true" />
      )}
      {edges.bottom === "tab" && (
        <span className="absolute bottom-[2px] left-1/2 h-7 w-7 -translate-x-1/2 rounded-full" style={tabStyle} aria-hidden="true" />
      )}
      {edges.left === "tab" && (
        <span className="absolute left-[2px] top-1/2 h-7 w-7 -translate-y-1/2 rounded-full" style={tabStyle} aria-hidden="true" />
      )}

      {edges.top === "blank" && (
        <span className="absolute left-1/2 top-[6px] h-8 w-8 -translate-x-1/2 rounded-full" style={cutoutStyle} aria-hidden="true" />
      )}
      {edges.right === "blank" && (
        <span className="absolute right-[6px] top-1/2 h-8 w-8 -translate-y-1/2 rounded-full" style={cutoutStyle} aria-hidden="true" />
      )}
      {edges.bottom === "blank" && (
        <span className="absolute bottom-[6px] left-1/2 h-8 w-8 -translate-x-1/2 rounded-full" style={cutoutStyle} aria-hidden="true" />
      )}
      {edges.left === "blank" && (
        <span className="absolute left-[6px] top-1/2 h-8 w-8 -translate-y-1/2 rounded-full" style={cutoutStyle} aria-hidden="true" />
      )}

      <div className="absolute inset-[22px] flex items-center justify-center px-2 text-center text-[11px] font-semibold uppercase tracking-[0.09em] md:text-[12px]"
        style={{ color: "hsl(var(--desktop-foreground))" }}>
        {label}
      </div>
    </div>
  );
};

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
      className="relative h-[236px] w-[260px] md:h-[248px] md:w-[280px]"
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
          className="absolute"
          style={{
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
            type: "spring",
            stiffness: 180,
            damping: 18,
            delay: prefersReducedMotion ? 0 : index * 0.08,
          }}
        >
          <PuzzlePieceShape label={piece.label} color={piece.color} edges={piece.edges} />
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
