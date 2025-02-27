
import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2022",
    position: "Product Manager AR",
    company: "Snapchat",
    description: "All things AR Authoring and developer experience, launched Lens Studio 5.0!"
  },
  {
    year: "2020",
    position: "Senior Product Manager",
    company: "Unity",
    description: "XR at Unity Labs, launched Unity Slices: Table at Meta Connect"
  },
  {
    year: "2018",
    position: "Experimentation + DevRel",
    company: "Microsoft",
    description: "docs.microsoft.com, HoloLens and Minecraft: Education Edition"
  },
  {
    year: "2017",
    position: "Software Engineer",
    company: "Slack + Pinterest",
    description: "Developer tools and 3rd party integrations (APIs)"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title neon-glow flex items-center gap-2"
      >
        <BriefcaseIcon size={16} />
        <span>WORKIN' 9 TO 5</span>
      </motion.h2>
      <div className="terminal">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="pt-4 pb-2 font-mono">
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-6 bottom-10 w-[2px] bg-muted"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium text-muted-foreground">{exp.year}</div>
                  <div className="mt-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium flex flex-wrap gap-1 items-center">
                    <span>{exp.position}</span>
                    <span className="text-muted-foreground">at</span>
                    <span className="text-primary">{exp.company}</span>
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
