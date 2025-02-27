
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Tech Company",
    position: "Senior Software Engineer",
    period: "Jan 2021 - Present",
    description: [
      "Led the development of a high-performance distributed system that processes millions of transactions daily.",
      "Architected and implemented microservices using Golang and Docker, deployed on Kubernetes.",
      "Mentored junior engineers and conducted code reviews, raising the overall quality of the codebase.",
      "Collaborated with product managers to define technical requirements and timelines for new features."
    ]
  },
  {
    company: "Software Inc.",
    position: "Software Engineer",
    period: "Mar 2018 - Dec 2020",
    description: [
      "Developed and maintained RESTful APIs for a customer-facing web application.",
      "Optimized database queries, resulting in a 40% reduction in response time.",
      "Implemented automated testing strategies that increased code coverage from 60% to 90%.",
      "Participated in agile development processes, including sprint planning and retrospectives."
    ]
  },
  {
    company: "Startup XYZ",
    position: "Junior Developer",
    period: "Jun 2016 - Feb 2018",
    description: [
      "Built responsive web interfaces using React and TypeScript.",
      "Collaborated with designers to implement pixel-perfect UI components.",
      "Contributed to the development of a mobile application using React Native.",
      "Participated in user testing sessions and incorporated feedback into the product."
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
            <p className="text-base text-muted-foreground mb-4">{exp.company}</p>
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
