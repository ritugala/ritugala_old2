
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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

// Parallax section wrapper
const ParallaxSection = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  
  return (
    <motion.div 
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
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
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      <Navigation />
      <main className="relative z-10">
        <Hero />
        
        <ParallaxSection>
          <About />
        </ParallaxSection>
        
        <ParallaxSection>
          <Experience />
        </ParallaxSection>
        
        <ParallaxSection>
          <Education />
        </ParallaxSection>
        
        <ParallaxSection>
          <Projects />
        </ParallaxSection>
        
        <ParallaxSection>
          <Publications />
        </ParallaxSection>
        
        <ParallaxSection>
          <Contact />
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
