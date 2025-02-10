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
      {/* Wrapper with two sections */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left Section - Name, Gamer Tag, Location, Time (Right Aligned) */}
        <motion.div 
          className="text-right flex flex-col items-end gap-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Aarsh Mishra</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">LuC</h2>

          {/* Location & Time */}
          <div className="flex flex-col items-end gap-3 mt-6">
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <FaMapMarkerAlt />
              <p>India</p>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
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
          </div>
        </motion.div>

        {/* Right Section - Social Links (Left Aligned) */}
        <motion.div 
          className="text-left flex flex-col items-start gap-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-white hover:text-gray-300"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-lg">{link.username}</span>
            </a>
          ))}
        </motion.div>
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
