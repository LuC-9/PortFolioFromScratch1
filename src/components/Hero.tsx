import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FloatingProfile from "./FloatingProfile";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/aarsh-mishra09/", icon: <SiLinkedin />, username: "in/aarsh-mishra09" },
    { href: "https://github.com/LuC-9", icon: <SiGithub />, username: "/LuC-9" },
    { href: "https://leetcode.com/u/LuC9/", icon: <SiLeetcode />, username: "/u/LuC9" },
    { href: "https://replit.com/@aarshmishra", icon: <SiReplit />, username: "/@aarshmishra" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-10 mt-[12rem]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start relative">
        
        {/* Left Section */}
        <div className="text-center md:text-right md:w-1/2">
          <motion.h1
            className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aarsh Mishra
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-red-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LuC
          </motion.h2>

          {/* Location & Time */}
          <motion.div
            className="flex justify-center md:justify-end items-center gap-4 mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <p>India</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-red-500" />
              <p>
                {new Date().toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}{" "}
                IST
              </p>
            </div>
          </motion.div>
        </div>

        {/* Animated Vertical Line Separator */}
        <motion.div
          className="hidden md:block w-[2px] h-[150px] bg-red-600 mx-10 relative" // Increased margin to push right
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute w-[2px] h-full bg-gradient-to-b from-red-400 to-transparent animate-pulse"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start md:w-1/2 md:ml-7"> {/* Added margin left */}
          <motion.div
            className="flex flex-wrap md:flex-col gap-4 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg md:text-xl text-white hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="hidden md:inline-block bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-transparent bg-clip-text">
                  {link.username}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-12 w-full">
        <motion.button
          onClick={scrollToContact}
          className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Get in Touch
        </motion.button>
        <motion.a
          href="/Mishra_Aarsh.pdf"
          download
          className="px-8 py-3 border border-white text-white rounded-md hover:bg-gray-700 transition-colors"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          My Resume
        </motion.a>
      </div>

      {/* Floating Profile */}
      <FloatingProfile />
    </section>
  );
}
