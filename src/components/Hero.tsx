import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { Button } from "./ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aarsh-mishra09/",
      icon: <SiLinkedin />,
      label: "LinkedIn",
      username: "in/aarsh-mishra09/",
    },
    {
      href: "https://github.com/LuC-9",
      icon: <SiGithub />,
      label: "GitHub",
      username: "/LuC-9",
    },
    {
      href: "https://leetcode.com/u/LuC9/",
      icon: <SiLeetcode />,
      label: "LeetCode",
      username: "/u/LuC9/",
    },
    {
      href: "https://replit.com/@aarshmishra",
      icon: <SiReplit />,
      label: "Replit",
      username: "/@aarshmishra",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-between relative bg-red-800 text-white px-6 py-12">
      {/* Left Section: Name, Gamer Name, Profession, and Time */}
      <div className="flex flex-col gap-4">
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
        <motion.p
          className="text-lg md:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          India | {new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </motion.p>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex flex-col gap-6 ml-auto">
        {socialLinks.map((link) => (
          <a
            key={link.href}
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
  );
}
