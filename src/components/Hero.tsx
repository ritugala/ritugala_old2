
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-3"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6"
        >
          Software Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center space-x-4 mb-16"
        >
          <a href="mailto:your.email@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors link-item">
            your.email@example.com
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors link-item">
            LinkedIn
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors link-item">
            GitHub
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10"
      >
        <button 
          onClick={scrollToContent}
          className="p-2 rounded-full border border-border animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
