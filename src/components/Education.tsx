
import { motion } from "framer-motion";
import { GraduationCapIcon } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  year: string;
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
    year: "2024",
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
    year: "2021",
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
        className="section-title neon-glow flex items-center gap-2"
      >
        <GraduationCapIcon size={16} />
        <span>Education</span>
      </motion.h2>
      <div className="terminal">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="pt-4 pb-2 font-mono">
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-6 bottom-10 w-[2px] bg-muted"></div>
            
            {educationItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium text-muted-foreground">{item.year}</div>
                  <div className="mt-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.degree}</h3>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <p className="text-base text-primary">{item.institution}</p>
                    <span className="text-sm text-muted-foreground">{item.location}</span>
                  </div>
                  
                  {item.gpa && (
                    <p className="text-sm mb-2 text-muted-foreground">{item.gpa}</p>
                  )}
                  
                  {item.courses && (
                    <div className="mb-2">
                      <p className="text-sm font-medium mb-1 text-muted-foreground">Relevant Courses:</p>
                      <p className="text-sm text-muted-foreground">{item.courses.join("; ")}</p>
                    </div>
                  )}
                  
                  {item.additionalInfo && (
                    <ul className="space-y-1 list-disc pl-5">
                      {item.additionalInfo.map((info, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{info}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
