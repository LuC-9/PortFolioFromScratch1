import { motion } from "framer-motion";
import { FaRegClock, FaMapMarkerAlt, FaFilePdf } from "react-icons/fa"; // For time, location, and resume
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si"; // For social icons
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");
  const [location] = useState("India");

  // Update time every minute to reflect the current time in IST
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(currentTime);
    }, 60000);

    // Set the time immediately on mount
    const initialTime = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    setTime(initialTime);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aarsh-mishra09/",
      icon: SiLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/LuC-9",
      icon: SiGithub,
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/LuC9/",
      icon: SiLeetcode,
      label: "LeetCode",
    },
    {
      href: "https://replit.com/",
      icon: SiReplit,
      label: "Replit",
    },
    // Resume Link
    {
      href: "/Mishra_Aarsh.pdf", // Resume link in the root directory
      icon: FaFilePdf,
      label: "Resume",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center text-left">
        {/* Left Side Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 font-[Poppins]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Aarsh Mishra
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-4 font-[Poppins]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LuC
          </motion.p>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-[Roboto]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineer at Nagarro
          </motion.h2>

          {/* Location and Time with Icons */}
          <motion.div 
            className="text-lg text-gray-300 mb-4 font-[Roboto] flex items-center justify-start gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Location Icon */}
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" />
              <span className="font-[Poppins] text-white">{location}</span>
            </div>
            
            {/* Time Icon */}
            <div className="flex items-center gap-2">
              <FaRegClock className="text-white" />
              <span className="font-[Poppins] text-white">{time} IST</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex flex-col items-start gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={href}
              href={href}
              target={label === "Resume" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Icon className="w-6 h-6" />
              <span>{label}</span>
              <span className="text-gray-400">/{label.toLowerCase()}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
