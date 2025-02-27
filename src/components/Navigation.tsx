
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Terminal } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Determine which section is in view
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on first render
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Terminal size={18} className="text-primary mr-2" />
          <span className="font-mono text-sm font-medium">ritu@ai:~$</span>
        </div>
        <ul className="flex space-x-4 md:space-x-6 flex-wrap justify-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-mono relative py-1 ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary transition-colors"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    window.scrollTo({
                      top: (target as HTMLElement).offsetTop - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                {activeSection === item.href.substring(1) ? '>' : ''}
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="indicator"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
