
import { motion } from "framer-motion";
import { BriefcaseIcon, ExternalLinkIcon } from "lucide-react";

interface ExperienceItem {
  duration: string;
  position: string;
  company: string;
  companyUrl?: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    duration: "June 2024 - Present",
    position: "Machine Learning Engineer",
    company: "Nexusflow.ai",
    companyUrl: "https://nexusflow.ai",
    description: [
      "Post-trained open-source models to improve agentic capabilities (specific focus on function calling/tool-calling).",
      "Specifically focused on data curation and synthetic data generation for fine-tuning (100k+ data points).",
      "Improved overall model inference latency by 25% using Speculative Decoding Methods."
    ],
    current: true
  },
  {
    duration: "May 2023 - Aug 2023",
    position: "Data Science Intern",
    company: "Oracle",
    description: [
      "Developed a negative data generation algorithm yielding 10 million data points for classification models.",
      "Created models predicting redemption rates with 94% recall using advanced machine learning techniques.",
      "Prototyped an automated Q&A system using Retrieval Augmented Generation to improve customer support operations."
    ]
  },
  {
    duration: "June 2021 - June 2022",
    position: "Software Engineer",
    company: "Goldman Sachs",
    description: [
      "Implemented an ETL pipeline utilizing Kafka for cloud migration (S3, Redshift) supporting 300+ simultaneous clients.",
      "Maintained and improved the existing relational distributed database system, increasing query performance by 15%.",
      "Collaborated with global teams to design and implement scalable solutions for data processing and analysis."
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
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="flex flex-col md:flex-row gap-3 md:gap-6"
              >
                <div className="flex items-center self-start">
                  <div className={`text-xs md:text-sm font-medium ${exp.current ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"} px-2 py-0.5 rounded-full whitespace-nowrap`}>
                    {exp.duration}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-medium flex flex-wrap gap-1 items-center">
                    <span>{exp.position}</span>
                    <span className="text-muted-foreground">at</span>
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        {exp.company}
                        <ExternalLinkIcon size={12} className="ml-1 inline" />
                      </a>
                    ) : (
                      <span className="text-primary">{exp.company}</span>
                    )}
                  </h3>
                  <ul className="mt-2 list-disc pl-5 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item}</li>
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
