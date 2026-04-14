import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface PuzzlePieceProps {
  color: string;
  delay: number;
  initialX: number;
  initialY: number;
  finalX: number;
  finalY: number;
  rotation: number;
  isCompleted: boolean;
  clipPath: string;
  onComplete?: () => void;
}

const PuzzlePiece = ({
  color,
  delay,
  initialX,
  initialY,
  finalX,
  finalY,
  rotation,
  isCompleted,
  clipPath,
  onComplete,
}: PuzzlePieceProps) => {
  return (
    <motion.div
      className="absolute"
      style={{
        width: "52%",
        height: "52%",
        backgroundColor: color,
        clipPath: clipPath,
        borderRadius: "6px",
      }}
      initial={{
        x: initialX,
        y: initialY,
        rotate: rotation,
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        x: isCompleted ? finalX : initialX,
        y: isCompleted ? finalY : initialY,
        rotate: isCompleted ? 0 : rotation,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: delay,
        duration: 2,
        type: "spring",
        stiffness: 35,
        damping: 18,
      }}
      onAnimationComplete={onComplete}
    />
  );
};

export const PuzzleAnimation = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [completedPieces, setCompletedPieces] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isHovered || isInView) {
      const timer = setTimeout(() => {
        setIsCompleted(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isHovered, isInView]);

  useEffect(() => {
    if (completedPieces >= 4) {
      setShowGlow(true);
    }
  }, [completedPieces]);

  const handlePieceComplete = () => {
    setCompletedPieces((prev) => prev + 1);
  };

  // Clean 2x2 grid puzzle with tab/blank connectors
  const pieces = [
    {
      // Top-left: tab on right, tab on bottom
      color: "hsl(var(--puzzle-piece-1))",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 85% 40%, 85% 60%, 100% 60%, 100% 100%, 60% 100%, 60% 85%, 40% 85%, 40% 100%, 0% 100%)",
      initialX: -120,
      initialY: -80,
      finalX: 0,
      finalY: 0,
      rotation: -20,
      delay: 0.2,
    },
    {
      // Top-right: blank on left, tab on bottom
      color: "hsl(var(--puzzle-piece-2))",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 60% 100%, 60% 85%, 40% 85%, 40% 100%, 0% 100%, 0% 60%, 15% 60%, 15% 40%, 0% 40%)",
      initialX: 140,
      initialY: -100,
      finalX: 78,
      finalY: 0,
      rotation: 25,
      delay: 0.5,
    },
    {
      // Bottom-left: blank on top, tab on right
      color: "hsl(var(--puzzle-piece-3))",
      clipPath: "polygon(40% 0%, 40% 15%, 60% 15%, 60% 0%, 100% 0%, 100% 40%, 85% 40%, 85% 60%, 100% 60%, 100% 100%, 0% 100%, 0% 0%)",
      initialX: -100,
      initialY: 130,
      finalX: 0,
      finalY: 78,
      rotation: -30,
      delay: 0.8,
    },
    {
      // Bottom-right: blank on left, blank on top
      color: "hsl(var(--puzzle-piece-4))",
      clipPath: "polygon(0% 0%, 0% 15%, 15% 15%, 15% 0%, 40% 0%, 40% 15%, 60% 15%, 60% 0%, 100% 0%, 100% 100%, 0% 100%)",
      initialX: 160,
      initialY: 120,
      finalX: 78,
      finalY: 78,
      rotation: 35,
      delay: 1.1,
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Subtle glow when completed */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showGlow ? 1 : 0,
          boxShadow: showGlow ? "0 0 40px hsl(var(--primary) / 0.25)" : "none",
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Puzzle pieces */}
      {pieces.map((piece, index) => (
        <PuzzlePiece
          key={index}
          {...piece}
          isCompleted={isCompleted}
          onComplete={handlePieceComplete}
        />
      ))}

      {/* Completion sparkle */}
      {showGlow && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-accent"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </div>
  );
};
