import { useCursor } from "@/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const { position, hoveredElement } = useCursor();
  const cursorControls = useAnimation();
  const borderControls = useAnimation();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      cursorControls.start({ x: centerX, y: centerY });
      cursorControls.start({ scale: 1.5 });

      borderControls.start(
        { x: centerX, y: centerY },
        { ease: "linear", duration: 0.1 },
      );
      borderControls.start({ scale: 1.5 }, { ease: "linear" });
    } else {
      cursorControls.start({ scale: 1 });
      borderControls.start({ scale: 1 }, { ease: "linear" });
    }
  }, [hoveredElement]);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="absolute w-2 h-2 border-2 bg-zinc-900 dark:bg-zinc-50 dark:border-zinc-50 border-zinc-900 rounded-full pointer-events-none z-999"
        style={{ left: position.x - 5, top: position.y - 5 }}
        animate={cursorControls}
      />

      {/* Border */}
      <motion.div
        className="absolute w-8 h-8 border-2 dark:border-zinc-50 border-zinc-900 rounded-full pointer-events-none z-999"
        style={{ left: position.x - 17, top: position.y - 17 }}
        animate={borderControls}
      />
    </>
  );
};

export default CustomCursor;
