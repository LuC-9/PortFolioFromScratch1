import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // X icon for closing menu
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-sm text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center h-16">
          <div className="w-10 h-10" /> {/* Placeholder for logo/profile */}

          {/* Mobile Navigation - Toggle Button Shifted Left */}
          <div className="md:hidden absolute left-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" /> // Close icon
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation (Left-Aligned) */}
          <div className="hidden md:flex items-center gap-8 w-full">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 ease-in-out hover:text-gray-300 ${
                      activeSection === item.href.slice(1)
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-auto">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Covers entire screen with blur */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-lg text-white z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="text-center space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-lg font-medium transition-colors duration-300 ease-in-out hover:text-gray-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <SocialLinks />
          </div>

          {/* Close Button */}
          <Button
            variant="ghost"
            className="absolute top-5 right-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8 text-white" />
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
