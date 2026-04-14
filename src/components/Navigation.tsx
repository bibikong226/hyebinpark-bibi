import { useState, useEffect } from "react";
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

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
    <header
      className="sticky top-0 w-full z-50"
      role="banner"
      style={{
        background: "rgba(12,14,26,0.8)",
        backdropFilter: "blur(30px) saturate(1.8)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-10 h-10" role="navigation" aria-label="Main navigation">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="font-bold tracking-[0.08em] text-[13px] uppercase text-white/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
          aria-label="Hyebin Park — home"
        >
          <span className="mr-1.5 opacity-60" aria-hidden="true">⌘</span>
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
              className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
              aria-current={location.pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hyebinp@umich.edu"
            className="px-4 py-1.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-400 transition-colors text-[11px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Contact Hyebin via email"
          >
            Contact
          </a>
          <span className="text-[11px] text-white/40 font-medium tracking-wide hidden lg:block" aria-hidden="true">
            {currentTime.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}{" "}
            {currentTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm md:hidden"
              style={{
                top: 0,
                background: "rgba(12,14,26,0.95)",
                backdropFilter: "blur(30px)",
                borderLeft: "1px solid rgba(255,255,255,.1)",
              }}
              role="dialog"
              aria-label="Navigation menu"
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
                    className="text-2xl text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:hyebinp@umich.edu"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-indigo-400 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
              style={{ zIndex: -1 }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
