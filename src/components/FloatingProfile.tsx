import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeftRight } from "lucide-react"; // Reversible reaction symbol

export default function FloatingProfile() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isImage2, setIsImage2] = useState(false); // State for toggling image
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

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

  // Increased image size in both mobile and desktop
  const imageSize = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["15rem", "5rem"] : ["20rem", "6rem"] // Larger image for desktop
  );

  const imageY = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["6rem", "0.75rem"] : ["6rem", "0.75rem"]
  );

  const toggleImage = () => {
    setIsImage2(!isImage2); // Toggle between image1 and GIF
  };

  return (
    <motion.div
      className="fixed left-1/2 top-0 z-150"
      style={{
        y: imageY,
        x: "-50%",
      }}
      initial={{ opacity: 0, scale: 0.8 }} // Start with opacity 0 and scale smaller
      animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
      transition={{ duration: 1 }} // Duration of the animation
    >
      {/* Profile Image: Only moves with scroll */}
      <motion.img
        src={isImage2 ? "/profile.jpg" : "/profile2.gif"} // Change image source to GIF when toggled
        alt="Aarsh Mishra"
        className="rounded-full object-cover border-2 border-white/10"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
      
      {/* Blob Background Animations */}
{/*       <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-16 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600 opacity-50 z-0 filter blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-16 right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 opacity-40 z-0 filter blur-2xl"
      /> */}
      
      {/* Swap Button: Fixed below the image */}
      {!isScrolled && ( // Conditionally render button based on scroll position
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
