import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FloatingProfile from './FloatingProfile';  // Import FloatingProfile component

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
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-black/60 text-white px-6 py-12 relative z-10">
        {/* Left Section (Content) */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-[55%] text-center md:text-left flex-grow justify-between mt-24 md:mt-0">
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

          {/* Social Links for Mobile (Icons horizontally arranged) */}
          <div className="flex md:hidden justify-center gap-6 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-3xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Social Links - Only visible on Desktop) */}
        <div className="hidden md:flex flex-col gap-3 md:w-[40%] items-start">
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
