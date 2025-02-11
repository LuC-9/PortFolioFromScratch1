import { motion } from "framer-motion";
import { SiInfosys } from "react-icons/si";
import { cn } from "@/lib/utils";
import NagarroLogo from "/nagarro.svg"; // Import SVG from root directory

// Experience details
const experiences = [
  {
    title: "Engineer",
    company: "Nagarro",
    period: "2023 - Present",
    icon: NagarroLogo, // Use your SVG here for Nagarro
    isSvg: true, // Flag to determine if it's an SVG
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "2022 - 2023",
    icon: NagarroLogo, // Use the same SVG for Nagarro
    isSvg: true, // Flag to determine if it's an SVG
  },
  {
    title: "Systems Engineer Intern",
    company: "Infosys",
    period: "2021 - 2022",
    icon: SiInfosys, // Use Infosys icon here
    isSvg: false, // React Icon, not SVG
  },
];

// WorkExperience Component
export function WorkExperience({
  company,
  role,
  Icon,
  isSvg,
}: {
  company: string;
  role: string;
  Icon: React.ComponentType;
  isSvg: boolean;
}) {
  return (
    <motion.div
      className="z-10 flex flex-col items-center justify-center gap-1 pt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        className="z-10 p-1"
        variants={{
          hidden: { scale: 0.5, rotate: -45 },
          visible: {
            scale: 1,
            rotate: 0,
            transition: { type: "spring", bounce: 0.5 },
          },
        }}
        whileHover={{ y: -5, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {isSvg ? (
            <img src={Icon} alt={company} className="w-24 h-24" /> // Increased SVG size
          ) : (
            <Icon className="text-white size-20" /> // Increased React Icon size
          )}
        </motion.div>
      </motion.div>

      {/* Styled Heading (H3) with Text Color Update */}
      <motion.div
        className="z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120 },
          },
        }}
      >
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight text-white flex flex-col items-center gap-1.5 text-center md:flex-row"
          )}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {role}
          </motion.span>
          <motion.span
            className="text-muted-foreground mx-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            @
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {company}
          </motion.span>
        </h3>
      </motion.div>
    </motion.div>
  );
}

// Experience Section with Solid Pastel Background
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-10 bg-gray-900 overflow-visible" // Ensure overflow-visible to show blobs outside section
    >
      <div className="container mx-auto px-6 relative">
        {/* Animated Background Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-16 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600 opacity-50 z-0 filter blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-16 right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 opacity-40 z-0 filter blur-2xl"
        />

        {/* Experience Section */}
        <div className="flex flex-col gap-10 max-w-3xl mx-auto relative z-10">
          {experiences.map((exp, index) => (
            <WorkExperience key={index} company={exp.company} role={exp.title} Icon={exp.icon} isSvg={exp.isSvg} />
          ))}
        </div>
      </div>
    </section>
  );
}
