import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { SiLinkedin, SiGithub, SiLeetcode, SiReplit } from "react-icons/si"; // Import necessary icons

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aarsh-mishra09/",
    icon: <SiLinkedin />,
    username: "in/aarsh-mishra09/",
  },
  {
    href: "https://github.com/LuC-9",
    icon: <SiGithub />,
    username: "/LuC-9",
  },
  {
    href: "https://leetcode.com/u/LuC9/",
    icon: <SiLeetcode />,
    username: "/u/LuC9/",
  },
  {
    href: "https://replit.com/@aarshmishra",
    icon: <SiReplit />,
    username: "@aarshmishra",
  },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="h-40 mb-8" /> {/* Reduced spacer height */}

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2" // Adjusted margin
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aarsh Mishra
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-4" // Adjusted margin
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineer at Nagarro
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-4" // Adjusted gap
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Location/Time */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span>IN</span> | <span>IST</span> | <span>{new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-red-600"
            onClick={scrollToContact}
          >
            Get in touch
          </Button>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="absolute top-1/2 left-0 transform -translate-x-16">
        <div className="flex flex-col items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <div className="text-xl">{link.icon}</div> 
              <span className="text-xs">{link.username}</span> {/* Display username next to the icon */}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Animation */}
      <motion.a
        href="#about"
        className="absolute bottom-8 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
