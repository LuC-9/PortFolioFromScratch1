import { motion } from "framer-motion";
import { BlurryBlob } from "@/components/ui/BlurryBlob"; // Importing the BlurryBlob component

export default function Experience() {
  return (
    <section id="experience" className="relative py-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Animated Background Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600 opacity-50 z-0 filter blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 opacity-40 z-0 filter blur-2xl"
        />

        {/* Experience Section */}
        <div className="flex flex-col gap-10 max-w-3xl mx-auto relative z-10">
          {experiences.map((exp, index) => (
            <WorkExperience key={index} company={exp.company} role={exp.title} Icon={exp.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
