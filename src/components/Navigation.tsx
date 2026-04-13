import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

const navLinks = [
  { href: "/#work", label: "WORK" },
  { href: "/#explore", label: "EXPLORE" },
  { href: "/about", label: "ABOUT" },
  { href: CV_LINK, label: "CV", external: true },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);

      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-background border-b border-border">
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-10 h-16">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="font-bold tracking-[0.08em] text-base uppercase text-foreground"
        >
          Hyebin Park
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => !link.external && handleNavClick(e, link.href)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-foreground hover:opacity-55 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hyebinp@umich.edu"
            className="px-5 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity text-[13px] font-medium"
          >
            Contact
          </a>
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
              <div className="flex flex-col p-8 pt-24 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (!link.external) handleNavClick(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:hyebinp@umich.edu"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-primary font-medium"
                >
                  Contact
                </a>
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
