import { motion } from "framer-motion";
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
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            <motion.div
              whileHover={{
                scale: 1.4, // Increased scale for a more prominent effect
                rotate: 15, // Slight rotation on hover
                transition: { duration: 0.5 },
              }}
              className="w-8 h-8 text-red-500 transition-all ease-in-out duration-300"
            >
              <Code2 />
            </motion.div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black p-8 rounded-2xl shadow-xl hover:scale-105 transform transition-all ease-out duration-500 relative overflow-hidden"
              whileHover={{
                scale: 1.05, // Slightly increase scale on hover
                transition: { duration: 0.4 },
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-transparent border-2 border-red-500 text-red-500 rounded-full text-sm hover:bg-red-500 hover:text-white transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      color: "#fff", // Adding color change on hover
                      transition: { duration: 0.3 },
                    }}
                  >
                    {project.linkLabel}
                  </motion.a>
                )}
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-transparent border-2 border-red-500 text-red-500 rounded-full text-sm hover:bg-red-500 hover:text-white transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-30 transition-all ease-out duration-300 hover:opacity-60 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
