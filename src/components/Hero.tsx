import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="h-40 mb-8" /> {/* Reduced spacer height */}

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aarsh Mishra
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineer at Nagarro
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <SocialLinks />
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-red-600"
            onClick={scrollToContact}
          >
            Get in touch
          </Button>
        </motion.div>
      </div>

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
