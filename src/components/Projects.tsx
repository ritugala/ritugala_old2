
import { motion } from "framer-motion";
import { CodeIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useState } from "react";

interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string[];
  github?: string;
  demo?: string;
  techStack?: string[];
}

const projectItems: ProjectItem[] = [
  {
    title: "DataTune: Grounded Synthetic Data Creation",
    subtitle: "Research Project under Dr. Graham Neubig and Dr. Sherry Wu",
    description: [
      "Designed and developed a system for creating synthetic data from existing HuggingFace datasets using LLMs for a given task. This repo has 1700 stars on GitHub.",
      "This is achieved by two modules: Dataset Selection (which helps to locate an existing relevant dataset) and Dataset Transformation (to transform the selected dataset to align with the task requirements).",
      "Finetuned Mistral-7B with our system against six BigBench tasks to find a 49% improvement on few-shot prompting."
    ],
    github: "https://github.com/yourusername/datatune",
    techStack: ["Python", "PyTorch", "HuggingFace", "LLMs", "Mistral-7B"]
  },
  {
    title: "Depression Metrics Prediction from Clinical Notes",
    subtitle: "with OptionsMD",
    description: [
      "Developed a hybrid approach of symptom-based clustering along with Large Language Models (LLMs) on clinical notes to predict depression metrics (like PHQ-9) which is expected to help reduce treatment time by 25%."
    ],
    techStack: ["Python", "NLP", "LLMs", "Clustering", "Healthcare"]
  },
  {
    title: "Collaborative Agents for Question Answer Generation",
    subtitle: "with Cancer Commons",
    description: [
      "Created a multi-agent system using LLMs(GPT 3.5) to generate a specialized QA dataset on glioblastoma, producing over 800 question-answer pairs for the non-profit Cancer Commons."
    ],
    github: "https://github.com/yourusername/collaborative-qa-agents",
    demo: "https://demo-link.com",
    techStack: ["Python", "Multi-agent Systems", "GPT-3.5", "Healthcare", "QA Generation"]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <CodeIcon size={16} />
        <span>Projects</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 gap-6">
        {projectItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className={`terminal relative overflow-hidden cursor-pointer transition-all duration-300 ${
              activeProject === index ? "scale-102 shadow-lg shadow-primary/20" : ""
            }`}
            onClick={() => setActiveProject(activeProject === index ? null : index)}
          >
            <div className="terminal-dots">
              <span className="terminal-dot dot-red"></span>
              <span className="terminal-dot dot-yellow"></span>
              <span className="terminal-dot dot-green"></span>
            </div>
            
            <div className="pt-6">
              {/* Project header with links */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <div>
                  <h3 className="text-lg font-medium mb-1 flex items-center gap-2 text-primary">
                    <span className="font-mono">{">"}</span> {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                  )}
                </div>
                
                <div className="flex space-x-3 mt-2 md:mt-0">
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
                      onClick={(e) => e.stopPropagation()}>
                      <GithubIcon size={16} className="text-primary" />
                    </a>
                  )}
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
                      onClick={(e) => e.stopPropagation()}>
                      <ExternalLinkIcon size={16} className="text-primary" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Tech stack tags */}
              {item.techStack && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-muted text-primary font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Description */}
              <motion.div 
                initial={{ height: activeProject === index ? "auto" : "4.5rem", overflow: "hidden" }}
                animate={{ 
                  height: activeProject === index ? "auto" : "4.5rem",
                  overflow: activeProject === index ? "visible" : "hidden" 
                }}
                transition={{ duration: 0.3 }}
              >
                <ul className="list-disc pl-5 space-y-2 mb-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm leading-relaxed">{desc}</li>
                  ))}
                </ul>
                
                {/* Click to expand message */}
                {activeProject !== index && (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card to-transparent flex items-end justify-center pb-1">
                    <span className="text-xs text-muted-foreground font-mono animate-pulse">
                      Click to expand...
                    </span>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
