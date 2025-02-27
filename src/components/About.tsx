
import { motion } from "framer-motion";
import { CodeIcon, Info } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <CodeIcon size={16} />
        <span>About</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="terminal"
      >
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="pt-4 font-mono text-sm space-y-6">
          <p className="leading-relaxed">
            <span className="text-primary">function</span> <span className="text-accent">getProfile</span>() {'{'}
          </p>
          <p className="leading-relaxed pl-4">
            I'm a Machine Learning Engineer with expertise in building and optimizing AI models and systems. 
            With a strong foundation in Computer Science and Artificial Intelligence from Carnegie Mellon University, 
            I specialize in developing efficient machine learning solutions for complex technical challenges.
          </p>
          <p className="leading-relaxed pl-4">
            My experience spans across various domains including machine learning engineering, data science, and software 
            development. I'm particularly interested in Large Language Models, synthetic data generation, and building 
            systems that improve efficiency and reduce latency. I have a proven track record of implementing solutions 
            that significantly improve performance metrics across different applications.
          </p>
          <p className="leading-relaxed">
            {'}'}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
