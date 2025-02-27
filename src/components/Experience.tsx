
import { motion } from "framer-motion";
import { BriefcaseIcon, ExternalLinkIcon } from "lucide-react";

interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  companyUrl: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    year: "2024",
    position: "Machine Learning Engineer",
    company: "Nexusflow.ai",
    companyUrl: "https://nexusflow.ai",
    description: [
      "Post-trained open-source models to improve agentic capabilities with a focus on function/tool-calling, and improved model inference latency by 25% using Speculative Decoding Methods."
    ],
    current: true
  },
  {
    year: "2023",
    position: "Data Science Intern",
    company: "Oracle",
    companyUrl: "https://www.oracle.com",
    description: [
      "Developed a negative data generation algorithm yielding 10 million data points to create classification models predicting redemption rates with 94% recall, and prototyped an automated Q&A system using Retrieval Augmented Generation."
    ]
  },
  {
    year: "2021",
    position: "Software Engineer",
    company: "Goldman Sachs",
    companyUrl: "https://www.goldmansachs.com",
    description: [
      "Implemented an ETL pipeline utilizing Kafka for cloud migration (S3, Redshift) supporting 300+ simultaneous clients, while maintaining and improving the existing relational distributed database system."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <BriefcaseIcon size={16} />
        <span>Experience</span>
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
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center relative z-10">
                  <div className={`text-sm font-medium ${exp.current ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"} px-2 py-0.5 rounded-full`}>
                    {exp.current ? `${exp.year} - Present` : exp.year}
                  </div>
                  <div className="mt-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium flex flex-wrap gap-1 items-center">
                    <span>{exp.position}</span>
                    <span className="text-muted-foreground">at</span>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center"
                    >
                      {exp.company}
                      <ExternalLinkIcon size={12} className="ml-1 inline" />
                    </a>
                  </h3>
                  <ul className="mt-2 list-disc pl-5 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
