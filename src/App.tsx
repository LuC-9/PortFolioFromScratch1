import React, { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/cards";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import FloatingProfile from "@/components/FloatingProfile";
import {
  GithubLogo,
  LinkedinLogo,
  FileText,
  Briefcase,
  Buildings,
  User,
  Code,
  Wrench,
  EnvelopeSimple,
  Moon,
} from "@phosphor-icons/react";
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { 
  SiJavascript, SiPython,
  SiSpring, SiNodedotjs, SiExpress, SiReact, SiAngular,
  SiDocker, SiAmazon, SiGithub, SiApache,
  SiMysql, SiMongodb
} from "react-icons/si";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); 
useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);


 
  return (
     <div className="min-h-screen text-white">
<Cursor />
       <div/>
      <Toaster position="top-right" />
      


<Navbar />            
{/* <FloatingProfile />      */}
<Hero />
<About />
<Experience />
<Projects />
<Skills />


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a0404]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">
            Get in Touch
          </h2>
          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0404] py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aarsh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
