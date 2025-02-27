
import { motion } from "framer-motion";
import { Code, Terminal, Server } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code size={16} className="text-primary" />,
    skills: ["Python", "SQL", "Java", "JavaScript", "HTML", "C", "C++"]
  },
  {
    name: "Machine Learning",
    icon: <Terminal size={16} className="text-primary" />,
    skills: ["NumPy", "Pandas", "PyTorch", "Sci-kit learn", "PySpark", "Langchain"]
  },
  {
    name: "Tools",
    icon: <Server size={16} className="text-primary" />,
    skills: ["Docker", "Jenkins", "Git", "Kafka", "AWS", "GCP", "MLFlow", "Azure"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <Code size={16} />
        <span>Skills</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="terminal"
          >
            <div className="terminal-dots">
              <span className="terminal-dot dot-red"></span>
              <span className="terminal-dot dot-yellow"></span>
              <span className="terminal-dot dot-green"></span>
            </div>
            <div className="pt-4">
              <h3 className="text-base font-mono mb-3 flex items-center gap-2">
                {category.icon}
                <span>{category.name}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-muted text-foreground border border-border rounded-md font-mono text-xs hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
