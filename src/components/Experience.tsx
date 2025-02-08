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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
            >
              <Card className="mb-6">
                <CardContent className="p-6 flex items-center gap-4">
                  <exp.icon className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
