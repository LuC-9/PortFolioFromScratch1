import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/cards";
import { Building2, Briefcase } from "lucide-react";
import { SiInfosys } from "react-icons/si";

const experiences = [
  {
    title: "Engineer",
    company: "Nagarro",
    period: "2023 - Present",
    icon: Building2
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "2022 - 2023",
    icon: Building2
  },
  {
    title: "Systems Engineer Intern",
    company: "Infosys",
    period: "2021 - 2022",
    icon: SiInfosys
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#1a0f0f]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.div
            initial={{ rotate: -30, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-8 h-8 text-primary" />
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="bg-[#2a1919] p-6 rounded-lg shadow-xl hover:bg-[#3a1f1f] transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <exp.icon className="w-12 h-12 text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
