
import { motion } from "framer-motion";
import { HistoryIcon } from "lucide-react";

interface Highlight {
  date: string;
  title: string;
  description?: string;
  subheading?: string;
  emoji?: string;
  link?: string;
}

const highlights: Highlight[] = [
  {
    date: "Feb 2025",
    title: "Vibe-coded this website",
    subheading: "Built with Lovable",
    emoji: "✨"
  },
  {
    date: "Nov 2024",
    title: "Open-sourced Nexusflow/Athene-V2 models",
    subheading: "Post-trained Qwen 72B for tool-calling capabilities",
    emoji: "🤖",
    link: "https://nexusflow.ai/blogs/athene-v2"
  },
  {
    date: "Aug 2024",
    title: "Published at ACL 2024 Conference",
    description: "Better Synthetic Data by Retrieving and Transforming Existing Datasets",
    subheading: "With Graham Neubig and Sherry Wu",
    emoji: "🔬",
    link: "https://aclanthology.org/2024.findings-acl.385/"
  },
  {
    date: "June 2024",
    title: "Joined Nexusflow as Machine Learning Engineer",
    description: "Relocated to the vibrant tech ecosystem of the Bay Area",
    emoji: "🏙️",
    link: "https://nexusflow.ai"
  },
  {
    date: "May 2024",
    title: "Graduated from Carnegie Mellon University",
    description: "Master of Science in AI and Innovation",
    emoji: "🎓"
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
                    {/* Title with emoji */}
                    <h3 className="text-base font-semibold text-foreground flex items-center">
                      {highlight.emoji && (
                        <span className="mr-2 text-lg">{highlight.emoji}</span>
                      )}
                      {highlight.link ? (
                        <a 
                          href={highlight.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {highlight.title}
                        </a>
                      ) : (
                        highlight.title
                      )}
                    </h3>
                    
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
