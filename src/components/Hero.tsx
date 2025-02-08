import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa"; // For Clock and Location

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aarsh-mishra09/",
      icon: <SiLinkedin />,
    },
    {
      href: "https://github.com/LuC-9",
      icon: <SiGithub />,
    },
    {
      href: "https://leetcode.com/u/LuC9/",
      icon: <SiLeetcode />,
    },
    {
      href: "https://replit.com/@aarshmishra",
      icon: <SiReplit />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between relative bg-black/60 text-white px-6 py-12">
      {/* Left Section: Name, Gamer Name, Profession, and Time */}
      <div className="flex flex-col gap-4 md:w-[45%]"> {/* Adjusted width for desktop */}
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
            })}{" "}
            IST
          </motion.p>
        </div>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex flex-col md:flex-row gap-4 ml-auto mt-6 md:mt-0 md:gap-6">
        {/* Mobile: social links in a horizontal row with no usernames or text */}
        <div className="flex md:hidden gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-gray-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Desktop: social links in a vertical column with username */}
        <div className="hidden md:flex flex-col gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-gray-300"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-lg">{link.username}</span> {/* Username */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
