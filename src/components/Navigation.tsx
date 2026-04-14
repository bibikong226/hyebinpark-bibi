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
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100]"
        role="banner"
        style={{
          background: "hsl(var(--desktop-panel-strong) / 0.82)",
          backdropFilter: "blur(24px) saturate(1.5)",
          borderBottom: "1px solid hsl(var(--desktop-border) / 0.1)",
        }}
      >
        <nav className="flex h-11 items-center justify-between px-4 sm:px-8 md:px-10" role="navigation" aria-label="Main navigation">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="rounded-sm font-bold uppercase tracking-[0.08em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            style={{ color: "hsl(var(--desktop-foreground) / 0.88)" }}
            aria-label="Hyebin Park — home"
          >
            <span className="mr-1.5 opacity-60" aria-hidden="true">⌘</span>
            <span className="text-[13px]">Hyebin Park</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => !link.external && handleNavClick(e, link.href)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="rounded-sm text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                style={{ color: "hsl(var(--desktop-foreground))", opacity: 0.66 }}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hyebinp@umich.edu"
              className="rounded-full px-4 py-1.5 text-[11px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
              style={{
                background: "hsl(var(--desktop-accent))",
                color: "hsl(var(--desktop-panel-strong))",
              }}
              aria-label="Contact Hyebin via email"
            >
              Contact
            </a>
            <span className="hidden text-[11px] font-medium tracking-wide lg:block" style={{ color: "hsl(var(--desktop-muted) / 0.55)" }} aria-hidden="true">
              {currentTime.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}{" "}
              {currentTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] md:hidden"
            style={{ color: "hsl(var(--desktop-foreground) / 0.84)" }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>

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
                  background: "hsl(var(--desktop-panel-strong) / 0.96)",
                  backdropFilter: "blur(24px)",
                  borderLeft: "1px solid hsl(var(--desktop-border) / 0.1)",
                }}
                role="dialog"
                aria-label="Navigation menu"
              >
                <div className="flex flex-col gap-6 p-8 pt-24">
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
                      className="rounded-sm text-2xl transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                      style={{ color: "hsl(var(--desktop-foreground) / 0.76)" }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="mailto:hyebinp@umich.edu"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-sm text-2xl font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                    style={{ color: "hsl(var(--desktop-accent))" }}
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 md:hidden"
                style={{ background: "hsl(var(--desktop-shadow) / 0.4)", zIndex: -1 }}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
        </nav>
      </header>
      <div className="h-11" aria-hidden="true" />
    </>
  );
};