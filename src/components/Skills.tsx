
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { 
  SiJavascript, SiPython,
  SiSpring, SiNodedotjs, SiExpress, SiReact, SiAngular,
  SiDocker, SiAmazon, SiGithub, SiApache,
  SiMysql, SiMongodb
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", icon: Code2 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Shell", icon: Code2 }
    ]
  },
  {
    title: "Frameworks",
    icon: Code2,
    skills: [
      { name: "Spring Boot", icon: SiSpring },
      { name: "Node", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular }
    ]
  },
  {
    title: "Servers & Platforms",
    icon: Code2,
    skills: [
      { name: "SoftwareAG", icon: Code2 },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazon },
      { name: "GIT", icon: SiGithub },
      { name: "Apigee", icon: SiApache },
      { name: "Postman", icon: Code2 }
    ]
  },
  {
    title: "Databases",
    icon: Code2,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="bg-primary/10 p-6 rounded-full w-fit mx-auto mb-12"
        >
          <Code2 className="w-12 h-12 text-primary" />
        </motion.div>
        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-center">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium text-center">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
