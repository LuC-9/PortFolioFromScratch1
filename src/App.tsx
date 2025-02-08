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
const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", icon: Code2 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Shell", icon: Code2 }
    ]
  },
  {
    title: "Frameworks",
    icon: Code2,
    skills: [
      { name: "Spring Boot", icon: SiSpring },
      { name: "Node", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular }
    ]
  },
  {
    title: "Servers & Platforms",
    icon: Code2,
    skills: [
      { name: "SoftwareAG", icon: Code2 },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazon },
      { name: "GIT", icon: SiGithub },
      { name: "Apigee", icon: SiApache },
      { name: "Postman", icon: Code2 }
    ]
  },
  {
    title: "Databases",
    icon: Code2,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  }
];
  const experiences = [
    {
      title: "Engineer",
      company: "Nagarro",
      period: "01/2024 – Present",
      location: "Gurugram, India",
      description: [
        "Developed and optimized 250+ APIs for seamless system integration",
        "Delivered scalable backend solutions to enhance performance and reliability",
        "Collaborated with teams to ensure efficient data flow across platforms",
      ],
    },
    {
      title: "Associate Engineer",
      company: "Nagarro",
      period: "07/2022 – 12/2023",
      location: "Gurugram, India",
      description: [
        "Developed expertise in Java and Spring Boot for backend development",
        "Managed codebases using Git and version control systems",
        "Worked with backend technologies, including Node.js, to build and integrate applications",
      ],
    },
    {
      title: "Systems Engineer Intern",
      company: "Infosys",
      period: "02/2022 – 05/2022",
      location: "Mysore, India",
      description: [
        "Developed a system for managing complaints across city departments with role-based access",
        "Implemented solution for Police, Healthcare, Education, and Transport departments",
        "Tech stack: Java, Spring Boot, Maven, Angular 10, REST APIs, MySQL, Git",
      ],
    },
  ];
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/LuC-9/",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aarsh-mishra09/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:aarshmail@gmail.com",
      label: "Email",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/LuC9/",
      label: "LeetCode",
    },
    {
      icon: Code2,
      href: "https://replit.com/@AarshMishra",
      label: "Replit",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // const updateCursorPosition = useCallback((e: MouseEvent) => {
  //   requestAnimationFrame(() => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //   });
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("mousemove", updateCursorPosition);
  //   return () => window.removeEventListener("mousemove", updateCursorPosition);
  // }, [updateCursorPosition]);
useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const heroImage = document.getElementById("hero-image");
  //     const navImage = document.getElementById("nav-image");
  //     const scrollPosition = window.scrollY;
  //     const heroImageRect = heroImage?.getBoundingClientRect();
  //     const navImageRect = navImage?.getBoundingClientRect();

  //     if (heroImageRect && navImageRect) {
  //       const progress = Math.min(Math.max(scrollPosition / 300, 0), 1);
  //       setIsScrolled(progress > 0.1);

  //       // Calculate positions
  //       const startX = heroImageRect.left + heroImageRect.width / 2;
  //       const startY = heroImageRect.top + heroImageRect.height / 2;
  //       const endX = navImageRect.left + navImageRect.width / 2;
  //       const endY = navImageRect.top + navImageRect.height / 2;

  //       // Use cubic-bezier easing for smoother animation
  //       const easeProgress = progress * (2 - progress); // Ease out quad

  //       // Calculate current position with easing
  //       const currentX = startX + (endX - startX) * easeProgress;
  //       const currentY = startY + (endY - startY) * easeProgress;
  //       const scale = 1 - 0.7 * easeProgress; // Scale from 1 to 0.3

  //       heroImage.style.transition =
  //         "transform 0.1s ease-out, opacity 0.1s ease-out";
  //       heroImage.style.transform = `translate(${currentX - startX}px, ${currentY - startY}px) scale(${scale})`;
  //       heroImage.style.opacity = `${1 - easeProgress}`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.1,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate-slide-up", "opacity-100");
  //         entry.target.classList.remove("opacity-0", "translate-y-5");
  //       }
  //     });
  //   }, observerOptions);

  //   document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  //     element.classList.add("opacity-0", "translate-y-5");
  //     observer.observe(element);
  //   });

  //   return () => observer.disconnect();
  // }, []);

 
  return (
     <div className="min-h-screen text-white">
<Cursor />
       <div/>
      <Toaster position="top-right" />
      


<Navbar />            
<FloatingProfile />     
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
