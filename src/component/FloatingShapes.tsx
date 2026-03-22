import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {/* Top right floating circle */}
      <motion.div
        className="absolute top-1/4 right-[5%] w-10 h-10 rounded-full border border-primary/50 backdrop-blur-sm bg-primary/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Bottom left floating star */}
      <motion.div
        className="absolute bottom-1/3 left-[4%] text-accent/60 text-4xl font-bold"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        ✦
      </motion.div>
      
      {/* Middle right floating triangle */}
      <motion.div
        className="absolute top-[60%] right-[8%] w-0 h-0 border-l-15 border-r-15 border-b-25 border-l-transparent border-r-transparent border-b-secondary/50 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        animate={{
          y: [0, -50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      {/* Top left pulsing dot */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-4 h-4 rounded-full bg-accent/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
