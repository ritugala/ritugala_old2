
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Nexus",
    position: "Machine Learning Engineer",
    period: "June 2024 - Present",
    location: "Palo Alto, CA",
    description: [
      "Post-trained open-source models to improve agentic capabilities (specific focus on function calling/tool-calling).",
      "Specifically focused on data curation and synthetic data generation for fine-tuning (100k+ data points).",
      "Improved overall model inference latency by 25% using Speculative Decoding Methods."
    ]
  },
  {
    company: "Oracle",
    position: "Data Science Intern",
    period: "May 2023 - Aug 2023",
    location: "Burlington, MA",
    description: [
      "Performed Customer Segmentation across 4 million customers, using clustering algorithms.",
      "Developed a negative data generation algorithm yielding 10 million negative data points to establish a large-scale balanced dataset, and used this to create classification models to predict redemption rate with a recall of 94%.",
      "Initiated the development of a prototype for an automated Question Answering system employing Retrieval Augmented Generation technology through LangChain, projected to reduce manual workload by 40 hours monthly."
    ]
  },
  {
    company: "Goldman Sachs",
    position: "Software Engineer",
    period: "June 2021 - June 2022",
    location: "Bengaluru, India",
    description: [
      "Implemented an ETL (extract-transform-load) pipeline utilizing Kafka for migration of data from existing distributed databases to the cloud (Amazon S3, Amazon Redshift) estimated to be used by 300 simultaneous clients.",
      "Maintained and improved the existing relational distributed database system thus saving 50 man-hours monthly."
    ]
  },
  {
    company: "Citispotter",
    position: "Data Scientist Intern",
    period: "Oct 2020 - Dec 2020",
    location: "Cranfield, United Kingdom",
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
        className="section-title"
      >
        Experience
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-1">
              <h3 className="text-lg font-medium">{exp.position}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <p className="text-base text-muted-foreground">{exp.company}</p>
              <span className="text-sm text-muted-foreground">{exp.location}</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
