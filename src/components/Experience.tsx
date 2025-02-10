import { motion } from 'framer-motion';
import { SiInfosys } from 'react-icons/si';
import { Building2 } from 'lucide-react'; // Using Building2 for Nagarro
import { BlurryBlob } from '@/components/ui/BlurryBlob'; // Importing the BlurryBlob component
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: "Engineer",
    company: "Nagarro",
    period: "2023 - Present",
    icon: Building2, // Use a building icon for Nagarro
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "2022 - 2023",
    icon: Building2, // Use the same for now, or replace with custom Nagarro logo
  },
  {
    title: "Systems Engineer Intern",
    company: "Infosys",
    period: "2021 - 2022",
    icon: SiInfosys, // Use Infosys icon here
  },
];

export function WorkExperience({ company, role, Icon }: { company: string; role: string; Icon: React.ComponentType }) {
  return (
    <motion.div
      className="z-10 flex flex-col items-center justify-center gap-1 pt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
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
            transition: { type: 'spring', bounce: 0.5 },
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
            ease: 'easeInOut',
          }}
        >
          <Icon className="size-10 text-white" /> {/* Icon component dynamically */}
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
            transition: { type: 'spring', stiffness: 120 },
          },
        }}
      >
        <h3
          className={cn(
            'scroll-m-20 text-2xl font-semibold tracking-tight text-white flex flex-col items-center gap-1.5 text-center md:flex-row'
          )}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {role}
          </motion.span>
          <motion.span
            className="text-muted-foreground mx-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.4 }}
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden" // Dark Grey-Blue Gradient Background
    >
      <div className="container mx-auto px-6 relative">
        {/* Animated Background Blobs (Ripple Effect) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1.2, 0.8], // Shrink and expand for the ripple effect
            opacity: [0.5, 0.6, 0.5], // Slight opacity change for the glowing effect
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute -top-32 left-1/4 w-72 h-72 z-0 filter blur-2xl bg-gradient-to-r from-yellow-400 to-pink-500 opacity-50"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1.2, 0.8], // Shrink and expand for the ripple effect
            opacity: [0.5, 0.6, 0.5], // Slight opacity change for the glowing effect
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-0 right-1/3 w-64 h-64 z-0 filter blur-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-40"
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
