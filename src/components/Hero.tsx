import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/aarsh-mishra09/", icon: <SiLinkedin />, username: "aarsh-mishra09" },
    { href: "https://github.com/LuC-9", icon: <SiGithub />, username: "LuC-9" },
    { href: "https://leetcode.com/u/LuC9/", icon: <SiLeetcode />, username: "LuC9" },
    { href: "https://replit.com/@aarshmishra", icon: <SiReplit />, username: "aarshmishra" },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between relative bg-black/60 text-white px-6 py-12 pt-32 md:pt-12">
      {/* Left Section */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <motion.h1 className="text-4xl md:text-6xl font-bold" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          Aarsh Mishra
        </motion.h1>
        <motion.h2 className="text-xl md:text-2xl text-muted-foreground" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          LuC
        </motion.h2>
        <motion.p className="text-lg md:text-xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          Software Engineer at Nagarro
        </motion.p>
        <div className="flex items-center gap-3 text-lg md:text-xl">
          <FaMapMarkerAlt />
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>India</motion.p>
        </div>
        <div className="flex items-center gap-3 text-lg md:text-xl">
          <FaClock />
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            {new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false })} IST
          </motion.p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:w-auto md:flex-grow items-center md:items-end gap-4 mt-6 md:mt-0 md:gap-6">
        {/* Mobile View: Icons only */}
        <div className="flex md:hidden gap-4 justify-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-gray-300">
              {link.icon}
            </a>
          ))}
        </div>

        {/* Desktop View: Icons + Usernames */}
        <div className="hidden md:flex flex-col gap-3">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gray-300">
              <span className="text-xl">{link.icon}</span>
              <span className="text-lg">{link.username}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
