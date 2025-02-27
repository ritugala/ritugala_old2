
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  isHash: boolean;
}

const navItems: NavItem[] = [
  { label: "Highlights", href: "#about", isHash: true },
  { label: "Experience", href: "/experience", isHash: false },
  { label: "Education", href: "/education", isHash: false },
  { label: "Projects", href: "/projects", isHash: false },
  { label: "Publications", href: "/publications", isHash: false },
  { label: "Contact", href: "/contact", isHash: false }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Only check sections if we're on home page
      if (location.pathname === '/') {
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
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on first render
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname !== '/') {
      // Remove leading slash to match the route name
      setActiveSection(location.pathname.substring(1));
    }
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-4 flex justify-center items-center">
        <ul className="flex space-x-4 md:space-x-6 flex-wrap justify-center">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.isHash ? (
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
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-mono relative py-1 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary transition-colors"
                  }`}
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
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
