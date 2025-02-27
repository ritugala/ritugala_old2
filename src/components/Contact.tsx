
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Code } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <Code size={16} />
        <span>Contact</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono"
      >
        <div className="mb-6 terminal">
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <div className="pt-4">
            <code className="block mb-4 text-muted-foreground"># Connect with me</code>
            <code className="block text-sm mb-2"><span className="text-primary">const</span> <span className="text-accent">contact</span> = {`{`}</code>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 mb-2">
              <div className="py-2">
                <code className="block mb-1">email: <a href="mailto:ritugala13@gmail.com" className="text-primary hover:underline">"ritugala13@gmail.com"</a>,</code>
              </div>
              
              <div className="py-2">
                <code className="block mb-1">phone: <span className="text-muted-foreground">"507-513-5058"</span>,</code>
              </div>
              
              <div className="py-2">
                <code className="block mb-1">linkedin: <a href="https://linkedin.com/in/ritu-gala" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">"linkedin.com/in/ritu-gala"</a>,</code>
              </div>
              
              <div className="py-2">
                <code className="block mb-1">github: <a href="https://github.com/ritugala" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">"github.com/ritugala"</a>,</code>
              </div>
            </div>
            <code className="block text-sm">{`}`};</code>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
