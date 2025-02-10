import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FloatingProfile from "./FloatingProfile";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aarsh-mishra09/",
      icon: <SiLinkedin />,
      username: "in/aarsh-mishra09",
    },
    {
      href: "https://github.com/LuC-9",
      icon: <SiGithub />,
      username: "/LuC-9",
    },
    {
      href: "https://leetcode.com/u/LuC9/",
      icon: <SiLeetcode />,
      username: "/u/LuC9",
    },
    {
      href: "https://replit.com/@aarshmishra",
      icon: <SiReplit />,
      username: "/@aarshmishra",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-10 mt-[12rem]">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Name, Gamer Tag, Location & Time */}
        <div className="text-right md:order-1 w-full md:w-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-700 via-red-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Aarsh Mishra
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent mt-2 text-center md:text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            LuC
          </motion.h2>

          {/* Location & Time - Centered on Mobile */}
          <motion.div
            className="flex flex-col md:flex-row md:justify-end items-center gap-3 md:gap-6 mt-4 text-lg md:text-xl text-red-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <p>India</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
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

        {/* Right Section: Social Links */}
        <div className="md:text-left md:order-2 mt-8 md:mt-0">
          {/* Desktop: Show Icons + Animated Usernames */}
          <div className="hidden md:flex flex-col">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-white hover:text-red-400 mb-3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              >
                <span className="text-2xl">{link.icon}</span>
                <motion.span
                  className="text-lg bg-gradient-to-r from-red-300 via-red-500 to-orange-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                >
                  {link.username}
                </motion.span>
              </motion.a>
            ))}
          </div>

          {/* Mobile: Only Icons in One Line */}
          <motion.div
            className="flex md:hidden justify-center gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="text-3xl text-white hover:text-red-400">{link.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Buttons Centered Below */}
      <div className="flex justify-center gap-6 mt-12 w-full">
        <motion.button
          onClick={scrollToContact}
          className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Get in Touch
        </motion.button>
        <motion.a
          href="/Mishra_Aarsh.pdf"
          download
          className="px-8 py-3 border border-white text-white rounded-md hover:bg-gray-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          My Resume
        </motion.a>
      </div>

      {/* Floating Profile Component */}
      <FloatingProfile />
    </section>
  );
}
