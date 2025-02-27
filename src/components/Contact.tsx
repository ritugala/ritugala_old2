
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Contact
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <a 
            href="mailto:ritugala13@gmail.com" 
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Mail size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">ritugala13@gmail.com</p>
            </div>
          </a>
        </div>
        
        <div>
          <a 
            href="https://linkedin.com/in/ritu-gala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Linkedin size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/ritu-gala</p>
            </div>
          </a>
        </div>
        
        <div>
          <a 
            href="https://github.com/ritugala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Github size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">GitHub</p>
              <p className="text-sm text-muted-foreground">github.com/ritugala</p>
            </div>
          </a>
        </div>
        
        <div>
          <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
            <Phone size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">507-513-5058</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
