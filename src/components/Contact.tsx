
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

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
            href="mailto:your.email@example.com" 
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Mail size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">your.email@example.com</p>
            </div>
          </a>
        </div>
        
        <div>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Linkedin size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/yourprofile</p>
            </div>
          </a>
        </div>
        
        <div>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Github size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">GitHub</p>
              <p className="text-sm text-muted-foreground">github.com/yourusername</p>
            </div>
          </a>
        </div>
        
        <div>
          <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
            <MapPin size={18} className="text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
