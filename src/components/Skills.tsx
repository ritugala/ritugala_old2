
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "SQL", "Java", "JavaScript", "HTML", "C", "C++"]
  },
  {
    name: "Machine Learning",
    skills: ["NumPy", "Pandas", "PyTorch", "Sci-kit learn", "PySpark", "Langchain"]
  },
  {
    name: "Tools",
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
        className="section-title"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <h3 className="text-base font-medium mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
