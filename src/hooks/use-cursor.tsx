import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

const useCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleMouseOver = (element: HTMLElement | null) => {
    setHoveredElement(element);
  };

  return { position, hoveredElement, handleMouseOver };
};

export default useCursor;
