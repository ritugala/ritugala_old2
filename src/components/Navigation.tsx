
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isHash: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#about", isHash: true },
  { label: "Experience", href: "/experience", isHash: false },
  { label: "Education", href: "/education", isHash: false },
  { label: "Projects", href: "/projects", isHash: false },
  { label: "Publications", href: "/publications", isHash: false },
  { label: "Contact", href: "/contact", isHash: false }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    if (item.isHash) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home page first
        navigate('/', { state: { scrollToSection: item.href.substring(1) } });
      } else {
        // If already on home page, just scroll to section
        const target = document.querySelector(item.href);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    } else {
      navigate(item.href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-4 flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 flex-wrap justify-center">
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
                  onClick={(e) => handleNavigation(item, e)}
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
        
        {/* Center placeholder for mobile */}
        <div className="md:hidden mx-auto">
          <span className="text-primary font-mono text-sm font-bold">RG</span>
        </div>
        
        {/* Empty div for flex alignment */}
        <div className="md:hidden w-5"></div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
        >
          <ul className="py-4 px-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isHash ? (
                  <a
                    href={item.href}
                    className={`block text-sm font-mono py-2 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary transition-colors"
                    }`}
                    onClick={(e) => handleNavigation(item, e)}
                  >
                    {activeSection === item.href.substring(1) ? '>' : ''}
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`block text-sm font-mono py-2 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary transition-colors"
                    }`}
                  >
                    {activeSection === item.href.substring(1) ? '>' : ''}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
