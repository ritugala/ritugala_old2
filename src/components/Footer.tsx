
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 md:py-8 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs md:text-sm text-muted-foreground font-mono flex items-center text-center md:text-left">
            <Code size={14} className="mr-2 text-primary" />
            <span>© {currentYear} Ritu Gala. All rights reserved.</span>
          </p>
          <div className="flex space-x-4 md:space-x-6 pt-2 md:pt-0">
            <a 
              href="mailto:ritugala13@gmail.com" 
              className="text-xs md:text-sm text-primary hover:text-primary/80 transition-colors font-mono"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/ritu-gala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs md:text-sm text-primary hover:text-primary/80 transition-colors font-mono"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/ritugala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs md:text-sm text-primary hover:text-primary/80 transition-colors font-mono"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
