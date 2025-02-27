
import { motion } from "framer-motion";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "University of Technology",
    degree: "Master of Science in Computer Science",
    period: "Sep 2014 - May 2016",
    description: "Specialized in Distributed Systems and Machine Learning. Graduated with distinction."
  },
  {
    institution: "State University",
    degree: "Bachelor of Science in Computer Engineering",
    period: "Sep 2010 - May 2014",
    description: "Dean's List for all semesters. Senior project: Developed an IoT system for smart home automation."
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-1">
              <h3 className="text-lg font-medium">{item.degree}</h3>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-base text-muted-foreground mb-2">{item.institution}</p>
            {item.description && (
              <p className="text-sm">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
