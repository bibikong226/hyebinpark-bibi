import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#explore", label: "Explore" },
  { href: "/about", label: "About" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      
      if (location.pathname === "/") {
        // Already on homepage, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide section-padding py-4 md:py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl md:text-2xl font-medium hover:text-primary transition-colors">
          Hyebin Park
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm tracking-wide transition-colors text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background border-l border-border md:hidden"
              style={{ top: 0 }}
            >
              <div className="flex flex-col p-8 pt-20 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-2xl font-serif text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif text-primary font-medium"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm md:hidden"
              style={{ zIndex: -1 }}
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
