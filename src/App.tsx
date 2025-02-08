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
    const handleScroll = () => {
      const heroImage = document.getElementById("hero-image");
      const navImage = document.getElementById("nav-image");
      const scrollPosition = window.scrollY;
      const heroImageRect = heroImage?.getBoundingClientRect();
      const navImageRect = navImage?.getBoundingClientRect();

      if (heroImageRect && navImageRect) {
        const progress = Math.min(Math.max(scrollPosition / 300, 0), 1);
        setIsScrolled(progress > 0.1);

        // Calculate positions
        const startX = heroImageRect.left + heroImageRect.width / 2;
        const startY = heroImageRect.top + heroImageRect.height / 2;
        const endX = navImageRect.left + navImageRect.width / 2;
        const endY = navImageRect.top + navImageRect.height / 2;

        // Use cubic-bezier easing for smoother animation
        const easeProgress = progress * (2 - progress); // Ease out quad

        // Calculate current position with easing
        const currentX = startX + (endX - startX) * easeProgress;
        const currentY = startY + (endY - startY) * easeProgress;
        const scale = 1 - 0.7 * easeProgress; // Scale from 1 to 0.3

        heroImage.style.transition =
          "transform 0.1s ease-out, opacity 0.1s ease-out";
        heroImage.style.transform = `translate(${currentX - startX}px, ${currentY - startY}px) scale(${scale})`;
        heroImage.style.opacity = `${1 - easeProgress}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up", "opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-5");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      element.classList.add("opacity-0", "translate-y-5");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

 
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


      

       { /* Projects Section */}
      <section id="projects" className="py-20 bg-[#0a0404]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll flex items-center justify-center gap-4">
            <Code
              size={40}
              weight="duotone"
              className="text-red-500 animate-pulse"
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4">
                Securities Exchange Platform
              </h3>
              <p className="text-gray-300 mb-4">
                As a WebMethods Developer, I focused on enhancing integration
                and data exchange capabilities. Implemented robust solutions for
                secure financial transactions and real-time data processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://adx.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200"
                >
                  Live Demo
                </a>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  WebMethods
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Integration
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4">Phonebook</h3>
              <p className="text-gray-300 mb-4">
                Created a phonebook with Django REST framework, featuring user
                registration, login, contact management (add, list, search),
                spam marking, email notifications, and PDF downloads.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/yourusername/phonebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200"
                >
                  GitHub
                </a>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Django
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  REST API
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4">Arduino CLI Docker</h3>
              <p className="text-gray-300 mb-4">
                A CLI tool to compile Arduino codes on the cloud without need of
                an Arduino board. Enables remote development and testing of
                Arduino projects with cloud-based compilation.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/yourusername/arduino-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200"
                >
                  GitHub
                </a>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Arduino
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  CLI
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4">City Management System</h3>
              <p className="text-gray-300 mb-4">
                A complaint management and resolution dashboard for a smart city
                utilising REST, Spring, JWT, MySQL and Angular. Developed during
                internship under Infosys.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Spring Boot
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Angular
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  MySQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

 <section id="skills" className="py-20" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="bg-primary/10 p-6 rounded-full w-fit mx-auto mb-12"
        >
          <Code2 className="w-12 h-12 text-primary" />
        </motion.div>
        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-center">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium text-center">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


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
