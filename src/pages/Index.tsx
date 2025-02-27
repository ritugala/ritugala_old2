
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

type LocationState = {
  scrollToSection?: string;
};

const Index = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    // Check if we need to scroll to a section based on navigation state
    if (state?.scrollToSection) {
      const target = document.getElementById(state.scrollToSection);
      if (target) {
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
          });
        }, 100); // Small delay to ensure DOM is fully loaded
      }
      
      // Clear the state so we don't scroll again on page refresh
      window.history.replaceState({}, document.title);
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-background antialiased relative overflow-x-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
      
      <Navigation />
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
