import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x,
        y: position.y,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 800, damping: 30 }}
    />
  );
}
