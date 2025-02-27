import { useEffect, useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

// Custom scroll progress component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div 
      className="fixed left-0 top-0 bottom-0 w-1 bg-primary z-50"
      style={{ 
        scaleY: scrollYProgress,
        transformOrigin: "top"
      }}
    />
  );
};

// Neural Network Animation Component
const NeuralNetworkAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<{x: number, y: number, connections: number[], radius: number, speed: number}[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    
    // Create random nodes for our neural network
    const nodeCount = Math.min(15, Math.floor(width * height / 20000));
    const newNodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      // Create nodes with random positions
      newNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        connections: [],
        radius: Math.random() * 2 + 2,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    // Create connections between nodes
    for (let i = 0; i < nodeCount; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !newNodes[i].connections.includes(target)) {
          newNodes[i].connections.push(target);
        }
      }
    }
    
    setNodes(newNodes);
    
    // Animation loop for moving nodes
    let animationFrameId: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!containerRef.current) return;
      
      // Calculate time difference
      const deltaTime = lastTimestamp ? timestamp - lastTimestamp : 0;
      lastTimestamp = timestamp;
      
      // Update node positions
      if (deltaTime > 0) {
        setNodes(prevNodes => {
          return prevNodes.map(node => {
            // Move nodes slightly in random directions
            const dx = (Math.random() - 0.5) * node.speed * deltaTime * 0.05;
            const dy = (Math.random() - 0.5) * node.speed * deltaTime * 0.05;
            
            let newX = node.x + dx;
            let newY = node.y + dy;
            
            // Keep nodes within bounds
            if (newX < 0) newX = 0;
            if (newX > width) newX = width;
            if (newY < 0) newY = 0;
            if (newY > height) newY = height;
            
            return { ...node, x: newX, y: newY };
          });
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg width="100%" height="100%">
        {/* Draw connections between nodes */}
        {nodes.map((node, nodeIndex) => 
          node.connections.map((targetIndex, connIndex) => {
            const target = nodes[targetIndex];
            if (!target) return null;
            
            // Animated data pulse effect on connections
            const uniqueId = `pulse-${nodeIndex}-${connIndex}`;
            
            return (
              <g key={`${nodeIndex}-${connIndex}`}>
                <line 
                  x1={node.x} 
                  y1={node.y} 
                  x2={target.x} 
                  y2={target.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
                <circle className="animate-pulse">
                  <animateMotion
                    dur={`${3 + Math.random() * 5}s`}
                    repeatCount="indefinite"
                    path={`M${node.x},${node.y} L${target.x},${target.y}`}
                  />
                  <animate
                    attributeName="r"
                    values="0;2;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="1;0.5;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })
        )}
        
        {/* Draw nodes */}
        {nodes.map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r={node.radius}
            fill="hsl(var(--primary))"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
};

// Binary Code Rain
const BinaryRain = () => {
  return (
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute text-primary font-mono text-xs" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animation: `matrixRain ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j}>
              {Math.random() > 0.5 ? '0' : '1'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Ritu Gala | Personal Website";

    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    // Change page title based on visible section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = sectionId;
        }
      });
      
      if (currentSectionId) {
        document.title = `${currentSectionId.charAt(0).toUpperCase() + currentSectionId.slice(1)} | Ritu Gala`;
      } else {
        document.title = "Ritu Gala | Personal Website";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased relative overflow-x-hidden">
      {/* Grid background that's visible throughout the site */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
      
      {/* Neural Network Animation */}
      <NeuralNetworkAnimation />
      
      {/* Binary Code Rain */}
      <BinaryRain />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
