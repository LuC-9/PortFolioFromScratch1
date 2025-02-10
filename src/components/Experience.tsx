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
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Blurry Blob Background */}
        <BlurryBlob 
          firstBlobColor="bg-red-600" 
          secondBlobColor="bg-black" 
          className="opacity-45"
        />

        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Briefcase className="w-8 h-8 text-white" />
        </motion.div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
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
              className="bg-transparent p-6 rounded-lg shadow-xl hover:bg-[#3a1f1f] transition-colors duration-200 flex items-center gap-4 relative"
            >
              <exp.icon className="w-12 h-12 text-white" />
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>

              {/* Glow effect for experience card */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-30 transition-all ease-out duration-300 hover:opacity-60 rounded-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
