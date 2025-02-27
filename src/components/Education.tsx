
import { motion } from "framer-motion";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  courses?: string[];
  additionalInfo?: string[];
}

const educationItems: EducationItem[] = [
  {
    institution: "Carnegie Mellon University (CMU)",
    degree: "Master of Science in Artificial Intelligence and Innovation",
    period: "May 2024",
    location: "Pittsburgh, PA",
    gpa: "GPA: 4.0/4.0",
    courses: [
      "Deep Learning",
      "Advanced Natural Language Processing (NLP)",
      "Large Language Models",
      "Machine Learning with Large Datasets",
      "Machine Learning in Production",
      "Machine Learning",
      "Behavioral Decision Making"
    ],
    additionalInfo: [
      "Teaching Assistant: Generative AI, Coding Bootcamp and Algorithms"
    ]
  },
  {
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    degree: "Bachelor of Technology in Computer Science",
    period: "May 2021",
    location: "Mumbai, India",
    gpa: "GPA: 3.56/4.0"
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
      <div className="space-y-10">
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
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <p className="text-base text-muted-foreground">{item.institution}</p>
              <span className="text-sm text-muted-foreground">{item.location}</span>
            </div>
            {item.gpa && (
              <p className="text-sm mb-2">{item.gpa}</p>
            )}
            {item.courses && (
              <div className="mb-2">
                <p className="text-sm font-medium mb-1">Relevant Courses:</p>
                <p className="text-sm">{item.courses.join("; ")}</p>
              </div>
            )}
            {item.additionalInfo && item.additionalInfo.map((info, i) => (
              <p key={i} className="text-sm mb-1">{info}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
