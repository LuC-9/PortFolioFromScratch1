import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, FileText } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-[100] bg-black/30 backdrop-blur-sm text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center h-16">
          <div className="w-10 h-10" /> {/* Placeholder for logo/profile */}

          {/* Mobile Navigation - Toggle Button */}
          <div className="md:hidden absolute left-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </div>

          {/* Desktop Navigation */}
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

            <div className="ml-auto flex items-center gap-4">
              {/* Desktop Social Links */}
              <SocialLinks />

              {/* Desktop Resume Button */}
              <a
                href="/Mishra_Aarsh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 ease-in-out hover:text-gray-300"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Resume Button Below Social Links) */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full min-h-screen bg-black/90 backdrop-blur-md text-white shadow-lg border-t border-gray-700 z-[150] flex flex-col"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4 text-left px-6 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-sm font-medium transition-colors duration-300 ease-in-out hover:text-gray-300"
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

            {/* Social Links */}
            <div className="py-2 px-6">
              <SocialLinks />
            </div>

            {/* Resume Button - Moved Below Social Links (Fixed) */}
            <div className="px-6 pb-4 mt-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <a
                href="/Mishra_Aarsh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-gray-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
