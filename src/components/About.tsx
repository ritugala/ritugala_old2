
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
          I'm a software engineer with expertise in building scalable web applications and distributed systems. 
          With a strong foundation in computer science and years of industry experience, I specialize in designing and 
          implementing efficient solutions to complex technical challenges.
        </p>
        <p className="text-base leading-relaxed">
          Beyond my technical skills, I'm passionate about mentoring junior developers and contributing to 
          open-source projects. I believe in writing clean, maintainable code and continuously learning new technologies 
          to stay at the forefront of software development.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
