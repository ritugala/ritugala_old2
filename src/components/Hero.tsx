
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

// Matrix rain effect component
const MatrixRain = () => {
  const [characters, setCharacters] = useState<{id: number, x: number, y: number, char: string, duration: number}[]>([]);
  
  useEffect(() => {
    // Characters for matrix rain
    const matrixChars = "01abcdefghijklmnopqrstuvwxyz!@#$%&*()_+-=[]{}|;:,.<>?";
    const generateRandom = () => {
      const newCharacters = [];
      const totalChars = 120; // adjust based on performance
      
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
    
    // Regenerate every few seconds
    const interval = setInterval(() => {
      generateRandom();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
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

// Typing effect
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
      {/* Matrix-like background */}
      <MatrixRain />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 flex justify-center"
        >
          <Terminal className="w-12 h-12 text-primary animate-glow-pulse" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-3 glow neon-glow font-mono"
        >
          RITU GALA
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono"
        >
          <TypeWriter text="Machine Learning Engineer" speed={80} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="terminal mb-10 inline-block px-6 py-3 max-w-md mx-auto"
        >
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <div className="pt-3 text-left font-mono text-sm space-y-2">
            <div><span className="text-primary">$</span> <span className="text-muted-foreground">whoami</span></div>
            <div className="text-primary">&gt; Works with LLMs, but also has side quests in Decision Science</div>
            <div><span className="text-primary">$</span> <span className="text-muted-foreground">contact</span></div>
            <div className="flex flex-wrap gap-2 mt-1">
              <a href="mailto:ritugala13@gmail.com" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/ritu-gala" target="_blank" rel="noopener noreferrer" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/ritugala" target="_blank" rel="noopener noreferrer" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                GitHub
              </a>
              <a href="https://x.com/ritugala13" target="_blank" rel="noopener noreferrer" className="text-xs bg-muted px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
