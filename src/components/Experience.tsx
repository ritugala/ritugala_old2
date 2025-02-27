
import { motion } from "framer-motion";
import { BriefcaseIcon, ExternalLinkIcon } from "lucide-react";

interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  companyUrl: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    year: "2024",
    position: "Machine Learning Engineer",
    company: "Nexusflow.ai",
    companyUrl: "https://nexusflow.ai",
    description: [
      "Post-trained open-source models to improve agentic capabilities (specific focus on function calling/tool-calling).",
      "Specifically focused on data curation and synthetic data generation for fine-tuning (100k+ data points).",
      "Improved overall model inference latency by 25% using Speculative Decoding Methods."
    ]
  },
  {
    year: "2023",
    position: "Data Science Intern",
    company: "Oracle",
    companyUrl: "https://www.oracle.com",
    description: [
      "Performed Customer Segmentation across 4 million customers, using clustering algorithms.",
      "Developed a negative data generation algorithm yielding 10 million negative data points to establish a large-scale balanced dataset, and used this to create classification models to predict redemption rate with a recall of 94%.",
      "Initiated the development of a prototype for an automated Question Answering system employing Retrieval Augmented Generation technology through LangChain, projected to reduce manual workload by 40 hours monthly."
    ]
  },
  {
    year: "2021",
    position: "Software Engineer",
    company: "Goldman Sachs",
    companyUrl: "https://www.goldmansachs.com",
    description: [
      "Implemented an ETL (extract-transform-load) pipeline utilizing Kafka for migration of data from existing distributed databases to the cloud (Amazon S3, Amazon Redshift) estimated to be used by 300 simultaneous clients.",
      "Maintained and improved the existing relational distributed database system thus saving 50 man-hours monthly."
    ]
  },
  {
    year: "2020",
    position: "Data Scientist Intern",
    company: "Citispotter",
    companyUrl: "https://www.citispotter.com",
    description: [
      "Designed and implemented an end-to-end Chrome Extension for four social media platforms, enriching users with valuable insights from integrated ML models (Grammar Correction, Sentiment Detection) for each post on their feed."
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
                  <div className="text-sm font-medium text-muted-foreground bg-card px-1 rounded">{exp.year}</div>
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
