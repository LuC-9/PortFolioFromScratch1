import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FloatingProfile from "./FloatingProfile";  

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
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
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-12">
      {/* Centered Content */}
      <div className="text-center flex flex-col items-center gap-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aarsh Mishra
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          LuC
        </motion.h2>

        {/* Social Links (Stacked Vertically) */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-lg text-white hover:text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-lg">{link.username}</span>
            </motion.a>
          ))}
        </div>

        {/* Location & Time Below Links */}
        <div className="flex flex-col items-center gap-3 mt-6">
          <motion.div
            className="flex items-center gap-2 text-lg md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <FaMapMarkerAlt />
            <p>India</p>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-lg md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
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
          </motion.div>
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
