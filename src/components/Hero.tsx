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
      icon: <SiLinkedin className="w-6 h-6 text-red-500" />,
      username: "in/aarsh-mishra09",
    },
    {
      href: "https://github.com/LuC-9",
      icon: <SiGithub className="w-6 h-6 text-red-500" />,
      username: "/LuC-9",
    },
    {
      href: "https://leetcode.com/u/LuC9/",
      icon: <SiLeetcode className="w-6 h-6 text-red-500" />,
      username: "/u/LuC9",
    },
    {
      href: "https://replit.com/@aarshmishra",
      icon: <SiReplit className="w-6 h-6 text-red-500" />,
      username: "/@aarshmishra",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-10 mt-[10rem]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full max-w-4xl gap-6">
        {/* Left Section */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end gap-4 w-full">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-red-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aarsh Mishra
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-red-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            LuC
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row gap-3 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
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

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full">
          <div className="flex gap-4 md:flex-col">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-white hover:text-gray-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              >
                {link.icon}
                <span className="hidden md:inline text-red-400 font-semibold">{link.username}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Centered Below */}
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

      {/* Floating Profile Component */}
      <FloatingProfile />
    </section>
  );
}
