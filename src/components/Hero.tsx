import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import FloatingProfile from "./FloatingProfile";  // Make sure to import the FloatingProfile component

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
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-muted/30 text-white px-6 py-12 md:py-10 mt-[18rem] md:mt-0">
      {/* Left Section */}
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

        {/* Social Links in Mobile (Horizontal Layout) */}
        <div className="flex md:hidden justify-center items-center gap-6 mt-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-white hover:text-gray-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Buttons below Left Section */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </button>
          <a
            href="/Mishra_Aarsh.pdf"
            download
            className="px-8 py-3 border border-white text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Right Section (Desktop Social Links) */}
      <div className="hidden md:flex flex-col gap-3 md:w-[40%]">
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

      {/* Floating Profile Component */}
      <FloatingProfile />
    </section>
  );
}
