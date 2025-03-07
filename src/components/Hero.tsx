
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Matrix rain effect component with reduced particle count - desktop only
const MatrixRain = () => {
  const [characters, setCharacters] = useState<{id: number, x: number, y: number, char: string, duration: number}[]>([]);
  
  useEffect(() => {
    // Characters for matrix rain
    const matrixChars = "01";
    const generateRandom = () => {
      const newCharacters = [];
      // Further reduced character count
      const totalChars = 40; 
      
      for (let i = 0; i < totalChars; i++) {
        newCharacters.push({
          id: i,
          x: Math.random() * 100, // percentage position
          y: Math.random() * 100,
          char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
          duration: Math.random() * 12 + 8, // seconds for animation, slower
        });
      }
      
      setCharacters(newCharacters);
    };
    
    generateRandom();
    
    // Regenerate less frequently
    const interval = setInterval(() => {
      generateRandom();
    }, 20000); // longer interval
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {characters.map((char) => (
        <div
          key={char.id}
          className="matrix-character absolute"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            animationDuration: `${char.duration}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
};

// Simplified typing effect with no animation on mobile
const TypeWriter = ({ text }: { text: string }) => {
  const isMobile = useIsMobile();
  
  // On mobile, just display the full text without animation
  if (isMobile) {
    return <span className="font-mono">{text}</span>;
  }
  
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return <span className="typing font-mono">{displayText}</span>;
};

const Hero = () => {
  const isMobile = useIsMobile();
  
  // Simpler motion settings for mobile
  const motionProps = isMobile ? {
    initial: { opacity: 1 },
    animate: { opacity: 1 }
  } : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Only render matrix rain on desktop */}
      {!isMobile && <MatrixRain />}
      
      {/* Simplified background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <motion.div 
        className="text-center px-4 relative z-10 max-w-full"
        {...motionProps}
      >
        <div className="mb-4 flex justify-center">
          <Terminal className="w-10 h-10 md:w-12 md:h-12 text-primary" />
        </div>
        
        <h1 className="text-3xl md:text-6xl font-bold mb-3 glow font-mono">
          RITU GALA
        </h1>
        
        <div className="text-lg md:text-2xl text-muted-foreground mb-6 font-mono">
          <TypeWriter text="Machine Learning Engineer" />
        </div>
        
        <div className="terminal mb-8 inline-block px-4 py-3 md:px-6 md:py-3 max-w-[95%] md:max-w-md mx-auto">
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <div className="pt-3 text-left font-mono text-xs md:text-sm space-y-2">
            <div><span className="text-primary">$</span> <span className="text-muted-foreground">whoami</span></div>
            <div className="text-primary">&gt; I work with LLMs, and pursue side quests in Decision Science</div>
            <div><span className="text-primary">$</span> <span className="text-muted-foreground">contact</span></div>
            <div className="flex flex-wrap gap-2 mt-1">
              <a href="mailto:ritugala13@gmail.com" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                Email
              </a>
              <a href="https://linkedin.com/in/ritu-gala" target="_blank" rel="noopener noreferrer" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                LinkedIn
              </a>
              <a href="https://github.com/ritugala" target="_blank" rel="noopener noreferrer" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                GitHub
              </a>
              <a href="https://x.com/ritugala13" target="_blank" rel="noopener noreferrer" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
