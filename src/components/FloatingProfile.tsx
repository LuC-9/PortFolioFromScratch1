import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingProfile() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isImage2, setIsImage2] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update scroll state based on scroll position
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setIsScrolled(value > 50); // Hide button after scrolling 50px down
    });

    return () => unsubscribe();
  }, [scrollY]);

  const imageSize = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["15rem", "5rem"] : ["20rem", "6rem"]
  );

  const imageY = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["6rem", "0.75rem"] : ["6rem", "0.75rem"]
  );

  const toggleImage = () => {
    setIsImage2(!isImage2);
  };

  return (
    <motion.div
      className="fixed left-1/2 top-16 z-[50]" // Positioning the profile in center of the navbar
      style={{
        y: imageY,
        x: "-50%",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={isImage2 ? "/profile.jpg" : "/profile2.gif"}
        alt="Aarsh Mishra"
        className="rounded-full object-cover border-2 border-white/10"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />

      {/* Swap Button */}
      {!isScrolled && (
        <motion.button
          onClick={toggleImage}
          className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 bg-transparent p-2 rounded-full shadow-md border-2 border-white/20"
        >
          <ArrowLeftRight className="w-6 h-6 text-white/80" />
        </motion.button>
      )}
    </motion.div>
  );
}
