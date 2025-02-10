import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SiInfosys } from "react-icons/si";
import { Building2 } from "lucide-react";
import { BlurryBlob } from '@/components/ui/BlurryBlob'; // Importing BlurryBlob

const experiences = [
  {
    title: "Engineer",
    company: "Nagarro",
    period: "2023 - Present",
    icon: Building2,
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "2022 - 2023",
    icon: Building2,
  },
  {
    title: "Systems Engineer Intern",
    company: "Infosys",
    period: "2021 - 2022",
    icon: SiInfosys,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background Blobs for Glow Effect */}
        <BlurryBlob 
          firstBlobColor="bg-red-500" 
          secondBlobColor="bg-purple-600" 
          className="absolute -top-10 left-1/4 w-72 h-72 opacity-50"
        />
        <BlurryBlob 
          firstBlobColor="bg-blue-500" 
          secondBlobColor="bg-purple-700" 
          className="absolute bottom-0 right-1/3 w-64 h-64 opacity-40"
        />

        {/* Section Icon */}
        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 relative"
        >
          <Briefcase className="w-8 h-8 text-white" />
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="bg-transparent p-6 rounded-lg shadow-xl hover:bg-[#3a1f1f] transition-colors duration-200 flex items-center gap-4 relative overflow-hidden"
            >
              <exp.icon className="w-12 h-12 text-white" />
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>

              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-30 transition-all ease-out duration-300 hover:opacity-60 rounded-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
