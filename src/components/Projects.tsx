
import { motion } from "framer-motion";

interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string[];
}

const projectItems: ProjectItem[] = [
  {
    title: "DataTune: Grounded Synthetic Data Creation",
    subtitle: "Research Project under Dr. Graham Neubig and Dr. Sherry Wu",
    description: [
      "Designed and developed a system for creating synthetic data from existing HuggingFace datasets using LLMs for a given task. This repo has 1700 stars on GitHub.",
      "This is achieved by two modules: Dataset Selection (which helps to locate an existing relevant dataset) and Dataset Transformation (to transform the selected dataset to align with the task requirements).",
      "Finetuned Mistral-7B with our system against six BigBench tasks to find a 49% improvement on few-shot prompting."
    ]
  },
  {
    title: "Depression Metrics Prediction from Clinical Notes",
    subtitle: "with OptionsMD",
    description: [
      "Developed a hybrid approach of symptom-based clustering along with Large Language Models (LLMs) on clinical notes to predict depression metrics (like PHQ-9) which is expected to help reduce treatment time by 25%."
    ]
  },
  {
    title: "Collaborative Agents for Question Answer Generation",
    subtitle: "with Cancer Commons",
    description: [
      "Created a multi-agent system using LLMs(GPT 3.5) to generate a specialized QA dataset on glioblastoma, producing over 800 question-answer pairs for the non-profit Cancer Commons."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Projects
      </motion.h2>
      <div className="space-y-10">
        {projectItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <h3 className="text-lg font-medium mb-1">{item.title}</h3>
            {item.subtitle && (
              <p className="text-base text-muted-foreground mb-3">{item.subtitle}</p>
            )}
            <ul className="list-disc pl-5 space-y-2">
              {item.description.map((desc, i) => (
                <li key={i} className="text-sm leading-relaxed">{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
