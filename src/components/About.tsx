
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-base leading-relaxed mb-6">
          I'm a Machine Learning Engineer with expertise in building and optimizing AI models and systems. 
          With a strong foundation in Computer Science and Artificial Intelligence from Carnegie Mellon University, 
          I specialize in developing efficient machine learning solutions for complex technical challenges.
        </p>
        <p className="text-base leading-relaxed">
          My experience spans across various domains including machine learning engineering, data science, and software 
          development. I'm particularly interested in Large Language Models, synthetic data generation, and building 
          systems that improve efficiency and reduce latency. I have a proven track record of implementing solutions 
          that significantly improve performance metrics across different applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
