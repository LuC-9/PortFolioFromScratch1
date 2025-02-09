import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FloatingProfile from './FloatingProfile';  // Importing the profile component

export default function Hero() {
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
    <>
      {/* Floating Profile in a Separate Section */}
      <section className="absolute top-0 left-1/2 z-50">
        <FloatingProfile />  {/* Include FloatingProfile component */}
      </section>

      {/* Main Hero Section */}
      <section className="min-h-screen flex flex-col justify-end items-center bg-black/60 text-white px-6 py-12 md:py-12 pt-32 md:pt-0 relative z-10">
        {/* Left Section (Content) */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-[45%] text-center md:text-left">
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
          <motion.p
            className="text-lg md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Software Engineer at Nagarro
          </motion.p>
          <div className="flex items-center gap-3 text-lg md:text-xl">
            <FaMapMarkerAlt />
            <motion.p
              className="text-lg md:text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              India
            </motion.p>
          </div>
          <div className="flex items-center gap-3 text-lg md:text-xl">
            <FaClock />
            <motion.p
              className="text-lg md:text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {new Date().toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })} IST
            </motion.p>
          </div>

          {/* Social Links for Mobile and Desktop */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-white hover:text-gray-300"
              >
                {link.icon}
                {/* Show username only on desktop */}
                <span className="hidden md:block">{link.username}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Only visible on Desktop) */}
        <div className="hidden md:flex flex-col gap-3 md:w-[40%] items-end">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-gray-300"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-lg">{link.username}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
