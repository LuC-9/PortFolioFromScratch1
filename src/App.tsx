import React, { useEffect, useState, useCallback } from "react";
import { Toaster } from "react-hot-toast";
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

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, [updateCursorPosition]);

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

        heroImage.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out';
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
      <div 
        className="custom-cursor" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }} 
      />
      <Toaster position="top-right" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 px-6 py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img
            id="nav-image"
            src="/profile.jpg"
            alt="Profile"
            className={`w-10 h-10 rounded-full transition-all duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hover:text-red-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo className="w-5 h-5 hover:text-red-500 hover:scale-110 transition-all duration-200" />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo className="w-5 h-5 hover:text-red-500 hover:scale-110 transition-all duration-200" />
              </a>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
                <Moon className="w-5 h-5" />
              </button>
              <a
                href="/Mishra_Aarsh.pdf"
                className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 animate-fade-in">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              id="hero-image"
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full absolute top-0 left-0 transition-all duration-300 ease-in-out object-cover"
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Aarsh Mishra</h1>
          <p className="text-xl text-gray-400 mb-8">Software Engineer</p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 hover:scale-105 transition-all duration-200"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0a0404]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">
            About Me
          </h2>
          <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
            <p className="text-lg text-gray-300 mb-6">
              I am a passionate Software Engineer currently working at Nagarro,
              where I specialize in building robust and scalable applications.
              With experience in both frontend and backend development, I have
              developed a strong foundation in software development and a keen
              eye for creating efficient solutions.
            </p>
            <p className="text-lg text-gray-300">
              My technical journey has equipped me with expertise in various
              technologies and frameworks, allowing me to tackle complex
              challenges and deliver high-quality results. I am constantly
              learning and staying updated with the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll flex items-center justify-center gap-4">
            <Briefcase size={40} weight="duotone" className="text-red-500 animate-pulse" />
          </h2>
          <div className="space-y-8">
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold">Engineer</h3>
                  <p className="text-gray-400">Nagarro • 01/2024 - Present • Gurugram, India</p>
                </div>
              </div>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Developed and optimized 250+ APIs for seamless system integration</li>
                <li>Delivered scalable backend solutions to enhance performance and reliability</li>
                <li>Collaborated with teams to ensure efficient data flow across platforms</li>
              </ul>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold">Associate Engineer</h3>
                  <p className="text-gray-400">Nagarro • 07/2022 - 12/2023 • Gurugram, India</p>
                </div>
              </div>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Developed expertise in Java and Spring Boot for backend development</li>
                <li>Managed codebases using Git and version control systems</li>
                <li>Worked with backend technologies, including Node.js, to build and integrate applications</li>
              </ul>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold">Systems Engineer Intern</h3>
                  <p className="text-gray-400">Infosys • 02/2022 - 05/2022 • Mysore, India</p>
                </div>
              </div>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Developed a system for managing complaints across city departments with role-based access</li>
                <li>Implemented solution for Police, Healthcare, Education, and Transport departments</li>
                <li>Tech stack: Java, Spring Boot, Maven, Angular 10, REST APIs, MySQL, Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0a0404]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll flex items-center justify-center gap-4">
            <Code size={40} weight="duotone" className="text-red-500 animate-pulse" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4">Securities Exchange Platform</h3>
              <p className="text-gray-300 mb-4">
                As a WebMethods Developer, I focused on enhancing integration and data exchange capabilities. 
                Implemented robust solutions for secure financial transactions and real-time data processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://adx.ae" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
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
                Created a phonebook with Django REST framework, featuring user registration, login, 
                contact management (add, list, search), spam marking, email notifications, and PDF downloads.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/yourusername/phonebook" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
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
                A CLI tool to compile Arduino codes on the cloud without need of an Arduino board. 
                Enables remote development and testing of Arduino projects with cloud-based compilation.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/yourusername/arduino-cli" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
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
                A complaint management and resolution dashboard for a smart city utilising REST, 
                Spring, JWT, MySQL and Angular. Developed during internship under Infosys.
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll flex items-center justify-center gap-4">
            <Wrench size={40} weight="duotone" className="text-red-500 animate-pulse" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-red-500" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  React
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-red-500" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Express
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-red-500" />
                Other
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Git
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Docker
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  AWS
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  CI/CD
                </span>
              </div>
            </div>
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
