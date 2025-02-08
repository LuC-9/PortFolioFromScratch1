import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/cards";
import { Badge } from "./ui/badge";
import { Code2 } from "lucide-react";

const projects = [
  {
    title: "Securities Exchange Platform",
    description:
      "Enhanced integration and data exchange capabilities, implementing robust solutions for secure financial transactions and real-time data processing.",
    tech: ["WebMethods", "Integration"],
    link: "https://adx.ae",
    linkLabel: "Live Demo"
  },
  {
    title: "Phonebook",
    description:
      "A phonebook app with Django REST framework, supporting user registration, login, contact management, spam marking, email notifications, and PDF downloads.",
    tech: ["Django", "REST API"],
    link: "https://github.com/yourusername/phonebook",
    linkLabel: "GitHub"
  },
  {
    title: "Arduino CLI Docker",
    description:
      "A CLI tool to compile Arduino code on the cloud, eliminating the need for a physical Arduino board, enabling remote development and testing.",
    tech: ["Arduino", "CLI"],
    link: "https://github.com/yourusername/arduino-cli",
    linkLabel: "GitHub"
  },
  {
    title: "City Management System",
    description:
      "A complaint management and resolution dashboard for a smart city, developed during an Infosys internship. Built using REST, Spring Boot, JWT, MySQL, and Angular.",
    tech: ["Spring Boot", "Angular", "MySQL"]
  }
];

export default function Projects() {
  return (
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
  );
}
