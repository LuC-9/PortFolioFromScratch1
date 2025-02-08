import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("India"); // You can change this as needed

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setTime(currentTime);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="h-40 mb-8" /> {/* Reduced spacer height */}

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 font-[Poppins]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aarsh Mishra
        </motion.h1>

        {/* Gamer name below Aarsh Mishra */}
        <motion.p 
          className="text-xl text-gray-300 mb-4 font-[Poppins]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          LuC
        </motion.p>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-[Roboto]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineer at Nagarro
        </motion.h2>

        {/* Location and Time */}
        <motion.p 
          className="text-lg text-gray-300 mb-4 font-[Roboto]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Location: <span className="font-[Poppins] text-white">{location}</span><br />
          Time: <span className="font-[Poppins] text-white">{time}</span><br />
          Timezone: <span className="font-[Poppins] text-white">IST (Indian Standard Time)</span>
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <SocialLinks />
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-red-600"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
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
