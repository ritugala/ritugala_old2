
import { motion } from "framer-motion";
import { HistoryIcon } from "lucide-react";

interface Highlight {
  date: string;
  title: string;
  description?: string;
  subheading?: string;
}

const highlights: Highlight[] = [
  {
    date: "Feb 2025",
    title: "Vibe coded this website",
    subheading: "with lovable"
  },
  {
    date: "Aug 2024",
    title: "Published ACL Paper",
    description: "Better Synthetic Data by Retrieving and Transforming Existing Datasets"
  },
  {
    date: "June 2024",
    title: "Moved to Bay Area",
    description: "Started working as Machine Learning Engineer at Nexusflow"
  },
  {
    date: "May 2024",
    title: "Graduated from Carnegie Mellon University",
    description: "Master of Science in AI and Innovation"
  }
];

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
        <HistoryIcon size={16} />
        <span>Highlights</span>
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
        <div className="pt-4 font-mono text-sm">
          <div className="space-y-6 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-16 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
            
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="flex items-start"
              >
                {/* Date column */}
                <div className="w-32 shrink-0 text-right pr-4 font-semibold text-primary">
                  {highlight.date}
                </div>
                
                {/* Content column */}
                <div className="relative grow">
                  {/* Dot on timeline */}
                  <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full bg-primary"></div>
                  
                  <div className="pl-6">
                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground">{highlight.title}</h3>
                    
                    {/* Additional information (subheading or description) styled consistently */}
                    {highlight.subheading && (
                      <p className="text-xs text-muted-foreground mt-1">{highlight.subheading}</p>
                    )}
                    {highlight.description && (
                      <p className="text-xs text-muted-foreground mt-1">{highlight.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
