
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
