import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      className="absolute w-24 h-24 md:w-32 md:h-32"
      style={{
        backgroundColor: color,
        clipPath: clipPath,
      }}
      initial={{
        x: initialX,
        y: initialY,
        rotate: rotation,
        opacity: 0,
        scale: 0.8,
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
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      onAnimationComplete={onComplete}
    />
  );
};

export const PuzzleAnimation = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [completedPieces, setCompletedPieces] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompleted(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (completedPieces >= 4) {
      setShowGlow(true);
    }
  }, [completedPieces]);

  const handlePieceComplete = () => {
    setCompletedPieces((prev) => prev + 1);
  };

  // Puzzle piece clip paths that create interlocking shapes
  const pieces = [
    {
      color: "hsl(var(--puzzle-piece-1))",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 45%, 75% 45%, 75% 55%, 100% 55%, 100% 100%, 0% 100%, 0% 55%, 25% 55%, 25% 45%, 0% 45%)",
      initialX: -150,
      initialY: -100,
      finalX: 0,
      finalY: 0,
      rotation: -25,
      delay: 0.2,
    },
    {
      color: "hsl(var(--puzzle-piece-2))",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 55% 100%, 55% 75%, 45% 75%, 45% 100%, 0% 100%, 0% 55%, 25% 55%, 25% 45%, 0% 45%)",
      initialX: 150,
      initialY: -120,
      finalX: 80,
      finalY: 0,
      rotation: 30,
      delay: 0.4,
    },
    {
      color: "hsl(var(--puzzle-piece-3))",
      clipPath: "polygon(25% 0%, 25% 25%, 0% 25%, 0% 100%, 100% 100%, 100% 0%, 55% 0%, 55% 25%, 45% 25%, 45% 0%)",
      initialX: -120,
      initialY: 150,
      finalX: 0,
      finalY: 80,
      rotation: -35,
      delay: 0.6,
    },
    {
      color: "hsl(var(--puzzle-piece-4))",
      clipPath: "polygon(0% 0%, 45% 0%, 45% 25%, 55% 25%, 55% 0%, 100% 0%, 100% 100%, 0% 100%)",
      initialX: 180,
      initialY: 130,
      finalX: 80,
      finalY: 80,
      rotation: 40,
      delay: 0.8,
    },
  ];

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Glow effect when completed */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showGlow ? 1 : 0,
          boxShadow: showGlow ? "0 0 60px hsl(var(--primary) / 0.4)" : "none",
        }}
        transition={{ duration: 0.5 }}
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

      {/* Completion sparkle effect */}
      {showGlow && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            className="w-4 h-4 rounded-full bg-accent"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};
