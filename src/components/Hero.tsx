
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

// Matrix rain effect component with reduced particle count
const MatrixRain = () => {
  const [characters, setCharacters] = useState<{id: number, x: number, y: number, char: string, duration: number}[]>([]);
  
  useEffect(() => {
    // Characters for matrix rain
    const matrixChars = "01";
    const generateRandom = () => {
      const newCharacters = [];
      const totalChars = 60; // reduced from 120 for better performance
      
      for (let i = 0; i < totalChars; i++) {
        newCharacters.push({
          id: i,
          x: Math.random() * 100, // percentage position
          y: Math.random() * 100,
          char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
          duration: Math.random() * 10 + 5, // seconds for animation
        });
      }
      
      setCharacters(newCharacters);
    };
    
    generateRandom();
    
    // Regenerate less frequently
    const interval = setInterval(() => {
      generateRandom();
    }, 15000); // increased from 10000ms to 15000ms
    
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

// Simplified typing effect
const TypeWriter = ({ text, speed = 100 }: { text: string, speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);
  
  return <span className="typing font-mono">{displayText}</span>;
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Matrix-like background with reduced opacity */}
      <MatrixRain />
      
      {/* Simplified background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <motion.div 
        className="text-center px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4 flex justify-center">
          <Terminal className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-3 glow font-mono">
          RITU GALA
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
          <TypeWriter text="Machine Learning Engineer" speed={100} />
        </div>
        
        <div className="terminal mb-10 inline-block px-6 py-3 max-w-md mx-auto">
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <div className="pt-3 text-left font-mono text-sm space-y-2">
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
