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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] transition-all duration-300"
        role="banner"
        style={{
          background: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.35)",
          backdropFilter: "blur(20px) saturate(1.5)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="flex h-11 items-center justify-between px-4 sm:px-8 md:px-10" role="navigation" aria-label="Main navigation">
          <Link to="/" onClick={handleLogoClick} className="rounded-sm font-bold uppercase tracking-[0.08em] text-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" aria-label="Hyebin Park — home">
            <span className="mr-1.5 opacity-40" aria-hidden="true">⌘</span>
            <span className="text-[13px]">Hyebin Park</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={e => !link.external && handleNavClick(e, link.href)} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}
                className="rounded-sm text-[11px] font-medium uppercase tracking-[0.18em] text-black/50 transition-opacity hover:text-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >{link.label}</a>
            ))}
            <a href="mailto:hyebinp@umich.edu" className="rounded-full bg-[#4338CA] px-4 py-1.5 text-[11px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Contact</a>
            <span className="hidden text-[11px] font-medium tracking-wide text-black/25 lg:block" aria-hidden="true">
              {currentTime.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} {currentTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </span>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-lg p-2 text-black/50 md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
                className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white/95 backdrop-blur-xl md:hidden" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="flex flex-col gap-6 p-8 pt-24">
                  {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={e => { if (!link.external) handleNavClick(e, link.href); setIsMenuOpen(false); }}
                      target={link.external ? "_blank" : undefined} className="text-2xl text-black/60">{link.label}</a>
                  ))}
                  <a href="mailto:hyebinp@umich.edu" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-[#4338CA]">Contact</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isMenuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/20 md:hidden" style={{ zIndex: -1 }} />}
          </AnimatePresence>
        </nav>
      </header>
      <div className="h-11" aria-hidden="true" />
    </>
  );
};
