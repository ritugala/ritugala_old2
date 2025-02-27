
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container py-8 md:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <InfoIcon size={16} />
        <span>Highlights</span>
      </motion.h2>
      <div className="terminal">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="pt-4 pb-2 font-mono space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm a machine learning engineer with a passion for building intelligent systems. 
            My focus is on large language models and their applications, particularly in 
            decision-making contexts. I'm currently working on developing agentic capabilities 
            in LLMs, with an emphasis on function/tool calling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-card/50 p-3 rounded border border-border">
              <h3 className="text-primary font-medium mb-2">Research Focus</h3>
              <p className="text-xs text-muted-foreground">
                Working on improving model robustness, alignment techniques, and developing 
                novel approaches to LLM evaluation frameworks.
              </p>
            </div>
            <div className="bg-card/50 p-3 rounded border border-border">
              <h3 className="text-primary font-medium mb-2">Technical Skills</h3>
              <p className="text-xs text-muted-foreground">
                Expertise in PyTorch, Transformer architectures, and ML infrastructure. 
                Proficient in Python, SQL, and various data processing frameworks.
              </p>
            </div>
            <div className="bg-card/50 p-3 rounded border border-border">
              <h3 className="text-primary font-medium mb-2">Publications</h3>
              <p className="text-xs text-muted-foreground">
                Published papers on advanced model alignment techniques and multi-agent 
                systems for complex decision-making scenarios.
              </p>
            </div>
            <div className="bg-card/50 p-3 rounded border border-border">
              <h3 className="text-primary font-medium mb-2">Industry Experience</h3>
              <p className="text-xs text-muted-foreground">
                Worked with leading tech companies on production-scale ML systems 
                and data infrastructure projects for real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
