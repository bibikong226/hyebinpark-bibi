import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import { FinderWindow } from "@/components/FinderWindow";
import profilePhoto from "@/assets/profile-photo.jpg";
import logoLine from "@/assets/logo-line.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoGm from "@/assets/logo-gm.png";
import logoNaver from "@/assets/logo-naver.png";
import logoJstor from "@/assets/logo-jstor.png";
import folderAiMl from "@/assets/folder-ai-ml.png";
import folderProduct from "@/assets/folder-product.png";
import folderDevtools from "@/assets/folder-devtools.png";
import folderUxr from "@/assets/folder-uxr.png";
import folderFintechWeb3 from "@/assets/folder-fintech-web3.png";
import { projects } from "@/data/projects";

const MacWin = ({
  children,
  title,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}) => (
  <motion.section
    className={`overflow-hidden rounded-[24px] ${className}`}
    role="region"
    aria-label={title || "Desktop window"}
    style={{
      background:
        "linear-gradient(180deg, hsl(var(--desktop-panel) / 0.94), hsl(var(--desktop-panel-strong) / 0.9))",
      backdropFilter: "blur(28px) saturate(1.28)",
      border: "1px solid hsl(var(--desktop-border) / 0.12)",
      boxShadow:
        "0 24px 64px hsl(var(--desktop-shadow) / 0.46), inset 0 1px 0 hsl(var(--desktop-border) / 0.12)",
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    <div
      className="flex items-center gap-2 border-b px-4 py-3"
      style={{ borderColor: "hsl(var(--desktop-border) / 0.08)" }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-[7px]">
        <span className="h-3 w-3 rounded-full" style={{ background: "hsl(4 100% 67%)" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "hsl(41 100% 59%)" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "hsl(135 59% 49%)" }} />
      </div>
      {title ? (
        <>
          <span
            className="flex-1 text-center text-[11px] font-semibold tracking-[0.16em] uppercase"
            style={{ color: "hsl(var(--desktop-muted))" }}
          >
            {title}
          </span>
          <div className="w-[52px]" />
        </>
      ) : null}
    </div>
    <div>{children}</div>
  </motion.section>
);

const SpotlightSearch = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  const filteredProjects = query.trim()
    ? projects.filter(
        (project) =>
          project.title.toLowerCase().includes(query.toLowerCase()) ||
          project.description.toLowerCase().includes(query.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : projects;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80]"
            style={{ background: "hsl(var(--desktop-shadow) / 0.66)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="spotlight-title"
            className="fixed left-1/2 top-6 z-[90] w-[min(92vw,640px)] -translate-x-1/2 overflow-hidden rounded-[24px]"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--desktop-panel) / 0.96), hsl(var(--desktop-panel-strong) / 0.95))",
              backdropFilter: "blur(36px) saturate(1.2)",
              border: "1px solid hsl(var(--desktop-border) / 0.12)",
              boxShadow:
                "0 32px 80px hsl(var(--desktop-shadow) / 0.6), inset 0 1px 0 hsl(var(--desktop-border) / 0.12)",
            }}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <h2 id="spotlight-title" className="sr-only">
              Search projects
            </h2>

            <div
              className="flex items-center gap-3 border-b px-5 py-4"
              style={{ borderColor: "hsl(var(--desktop-border) / 0.08)" }}
            >
              <Search size={18} style={{ color: "hsl(var(--desktop-muted))" }} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search projects, skills, or domains"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="flex-1 bg-transparent text-[15px] outline-none"
                style={{ color: "hsl(var(--desktop-foreground))" }}
                autoFocus
                aria-label="Search projects"
              />
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                style={{ color: "hsl(var(--desktop-muted))" }}
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[380px] overflow-y-auto py-2">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={project.externalUrl || `/${project.id}`}
                    target={project.externalUrl ? "_blank" : undefined}
                    rel={project.externalUrl ? "noopener noreferrer" : undefined}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                    style={{ color: "hsl(var(--desktop-foreground))" }}
                  >
                    <img
                      src={project.logo}
                      alt=""
                      className="h-10 w-10 rounded-xl object-cover"
                      style={{ background: project.imageColor }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{project.title}</p>
                      <p className="truncate text-[12px]" style={{ color: "hsl(var(--desktop-muted))" }}>
                        {project.description}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="px-5 py-8 text-center text-sm" style={{ color: "hsl(var(--desktop-muted))" }}>
                  No results found.
                </p>
              )}
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

const TestimonialGrid = ({
  testimonials,
}: {
  testimonials: {
    id: string;
    author: string;
    role: string;
    company: string;
    text: string;
    subtext: string;
  }[];
}) => (
  <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
    {testimonials.map((testimonial, index) => (
      <motion.article
        key={testimonial.id}
        className={`group relative flex flex-col gap-6 rounded-[24px] p-8 md:p-10 transition-transform duration-500 ease-out hover:-translate-y-1.5 ${index % 2 === 1 ? "md:mt-14" : ""}`}
        style={{
          background: "hsl(var(--desktop-panel) / 0.72)",
          backdropFilter: "blur(24px) saturate(1.2)",
          border: "1px solid hsl(var(--desktop-border) / 0.08)",
          boxShadow:
            "0 20px 48px -12px hsl(var(--desktop-shadow) / 0.4), inset 0 1px 0 hsl(var(--desktop-border) / 0.08)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <div className="flex gap-1.5 opacity-40" aria-hidden="true">
          <div className="h-2 w-2 rounded-full" style={{ background: "hsl(var(--desktop-border) / 0.45)" }} />
          <div className="h-2 w-2 rounded-full" style={{ background: "hsl(var(--desktop-border) / 0.45)" }} />
          <div className="h-2 w-2 rounded-full" style={{ background: "hsl(var(--desktop-border) / 0.45)" }} />
        </div>
        <p className="font-serif text-lg italic leading-relaxed md:text-xl" style={{ color: "hsl(var(--desktop-foreground) / 0.94)" }}>
          “{testimonial.text}”
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--desktop-muted))" }}>
          {testimonial.subtext}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
            style={{
              color: "hsl(var(--desktop-foreground) / 0.78)",
              background: "hsl(var(--desktop-border) / 0.08)",
              border: "1px solid hsl(var(--desktop-border) / 0.12)",
            }}
          >
            {testimonial.author
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>
          <div>
            <span className="block text-sm font-semibold" style={{ color: "hsl(var(--desktop-foreground))" }}>
              {testimonial.author}
            </span>
            <span className="text-xs" style={{ color: "hsl(var(--desktop-muted))" }}>
              {testimonial.role} · <span style={{ color: "hsl(var(--desktop-accent))" }}>{testimonial.company}</span>
            </span>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
);

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [finderCategory, setFinderCategory] = useState<string | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((previous) => !previous);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const testimonials = [
    {
      id: "t1",
      author: "David Rashid",
      role: "CEO",
      company: "Concord Systems",
      text: "Hyebin quickly grasped the business model and technical constraints behind our platform.",
      subtext:
        "She didn't just design screens. She transformed backend complexity into seamless, user-first flows that contributed to our business growth.",
    },
    {
      id: "t2",
      author: "Elisa Vargas",
      role: "Product Designer",
      company: "JSTOR",
      text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions that drive real user impact.",
      subtext:
        "Her user-centered thinking and clarity of intent made a lasting impression on our team.",
    },
    {
      id: "t3",
      author: "Jae Hoon Shim",
      role: "Product Strategy Manager",
      company: "LINE+",
      text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.",
      subtext:
        "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset. Her passion made our time together impactful.",
    },
    {
      id: "t4",
      author: "Jong Hee Hong",
      role: "Head of Global Communications",
      company: "TikTok Korea",
      text: "What always stands out with Hyebin is how she connects her creativity with real curiosity. She's always asking the right questions.",
      subtext:
        "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas.",
    },
  ];

  const folders = [
    { icon: folderAiMl, label: "AI / ML" },
    { icon: folderProduct, label: "Product Design" },
    { icon: folderDevtools, label: "Data & Dev Tools" },
    { icon: folderFintechWeb3, label: "Fintech & Web3" },
    { icon: folderUxr, label: "UX Research" },
  ];

  return (
    <div className="overflow-x-hidden font-sans" style={{ background: "hsl(var(--desktop-wallpaper-end))", color: "hsl(var(--desktop-foreground))" }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        style={{ background: "hsl(var(--work-surface-1))", color: "hsl(var(--work-foreground))" }}
      >
        Skip to main content
      </a>

      <Navigation />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <FinderWindow isOpen={!!finderCategory} onClose={() => setFinderCategory(null)} category={finderCategory || ""} />

      <main id="main-content" role="main">
        <section
          className="relative flex min-h-[920px] w-full flex-col overflow-hidden lg:min-h-screen"
          style={{
            background: `
              radial-gradient(ellipse 72% 58% at 15% 84%, hsl(var(--desktop-accent) / 0.28) 0%, transparent 52%),
              radial-gradient(ellipse 56% 42% at 82% 16%, hsl(280 60% 50% / 0.18) 0%, transparent 48%),
              radial-gradient(ellipse 40% 30% at 48% 58%, hsl(270 40% 60% / 0.1) 0%, transparent 55%),
              linear-gradient(155deg, hsl(var(--desktop-wallpaper-start)) 0%, hsl(var(--desktop-wallpaper-mid)) 48%, hsl(var(--desktop-wallpaper-end)) 100%)
            `,
          }}
          aria-label="Desktop hero"
        >
          <div className="relative z-10 flex-1 px-4 pb-10 pt-6 sm:px-6 md:px-8 lg:px-12 lg:pb-32">
            <div className="mx-auto max-w-[1280px]">

              {/* Centered hero header */}
              <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
                <motion.p
                  className="mb-3 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.28em] uppercase"
                  style={{
                    color: "hsl(var(--desktop-accent))",
                    background: "hsl(var(--desktop-accent) / 0.14)",
                    border: "1px solid hsl(var(--desktop-accent) / 0.22)",
                  }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 }}
                >
                  Strategic AI Product Designer
                </motion.p>

                <h1
                  className="text-[clamp(3.2rem,12vw,8.5rem)] font-black leading-[0.9] tracking-[-0.06em]"
                  style={{ color: "hsl(var(--desktop-foreground))" }}
                >
                  HYEBIN PARK
                </h1>

                <motion.button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="mt-5 flex items-center gap-3 rounded-full px-5 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                  style={{
                    color: "hsl(var(--desktop-foreground))",
                    background: "hsl(var(--desktop-search) / 0.86)",
                    border: "1px solid hsl(var(--desktop-border) / 0.08)",
                    boxShadow: "0 14px 36px hsl(var(--desktop-shadow) / 0.24)",
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  aria-label="Open project search"
                  aria-haspopup="dialog"
                >
                  <Search size={15} aria-hidden="true" />
                  <span className="text-[13px] font-medium" style={{ color: "hsl(var(--desktop-muted))" }}>
                    Search projects
                  </span>
                  <span
                    className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      color: "hsl(var(--desktop-foreground))",
                      background: "hsl(var(--desktop-border) / 0.08)",
                    }}
                    aria-hidden="true"
                  >
                    ⌘K
                  </span>
                </motion.button>
              </div>

              <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <MacWin title="About" delay={0.12}>
                      <div className="flex gap-5 p-5 md:p-6">
                        <img
                          src={profilePhoto}
                          alt="Hyebin Park"
                          className="h-16 w-16 flex-shrink-0 rounded-[20px] object-cover object-[center_20%]"
                          style={{
                            border: "1px solid hsl(var(--desktop-border) / 0.12)",
                          }}
                        />

                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold leading-6" style={{ color: "hsl(var(--desktop-foreground))" }}>
                            I turn complex AI & data products into clear, trustworthy experiences.
                          </p>
                          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold"
                            style={{
                              color: "hsl(var(--desktop-foreground))",
                              background: "hsl(var(--desktop-border) / 0.08)",
                            }}>
                            <span className="h-2 w-2 rounded-full" style={{ background: "hsl(var(--desktop-success))" }} aria-hidden="true" />
                            Open to work
                          </div>
                        </div>
                      </div>

                      <div
                        className="grid grid-cols-3 gap-2 border-t p-4"
                        style={{ borderColor: "hsl(var(--desktop-border) / 0.08)" }}
                      >
                        {[
                          { label: "Focus", value: "AI · Data" },
                          { label: "Education", value: "MS-HCI" },
                          { label: "Impact", value: "$3.5M" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl px-3 py-2"
                            style={{
                              background: "hsl(var(--desktop-search) / 0.52)",
                            }}
                          >
                            <p className="text-[9px] font-semibold tracking-[0.16em] uppercase" style={{ color: "hsl(var(--desktop-subtle))" }}>
                              {item.label}
                            </p>
                            <p className="mt-1 text-[13px] font-semibold" style={{ color: "hsl(var(--desktop-foreground))" }}>
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                  </MacWin>

                  <div className="mt-6">
                    <MacWin title="Experience" delay={0.22}>
                      <div className="flex flex-wrap items-center gap-3 p-5">
                        {[
                          { src: logoLine, alt: "LINE" },
                          { src: logoTiktok, alt: "TikTok" },
                          { src: logoGm, alt: "GM" },
                          { src: logoNaver, alt: "NAVER" },
                          { src: logoJstor, alt: "JSTOR" },
                        ].map((logo) => (
                          <div
                            key={logo.alt}
                            className="flex h-11 w-11 items-center justify-center rounded-xl p-2"
                            style={{
                              background: "hsl(var(--desktop-search) / 0.62)",
                              border: "1px solid hsl(var(--desktop-border) / 0.08)",
                            }}
                          >
                            <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain opacity-90" />
                          </div>
                        ))}
                      </div>
                    </MacWin>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <MacWin title="How I Work" delay={0.18}>
                    <div className="flex items-center justify-center overflow-hidden p-6 md:p-8">
                      <PuzzleAnimation />
                    </div>
                  </MacWin>

                  <aside className="mt-6" aria-labelledby="folders-heading">
                    <p id="folders-heading" className="mb-3 px-1 text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: "hsl(var(--desktop-muted))" }}>
                      Project Folders
                    </p>
                    <div className="grid grid-cols-5 gap-2 sm:gap-4">
                      {folders.map((folder, index) => (
                        <motion.button
                          key={folder.label}
                          type="button"
                          onClick={() => setFinderCategory(folder.label)}
                          className="group flex flex-col items-center gap-1.5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-xl p-2"
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.22 + index * 0.07 }}
                          aria-label={`Open ${folder.label} folder`}
                          aria-haspopup="dialog"
                        >
                          <img
                            src={folder.icon}
                            alt=""
                            className="h-14 w-14 object-contain transition-transform duration-200 group-hover:-translate-y-1"
                          />
                          <span
                            className="text-[10px] font-medium leading-tight"
                            style={{ color: "hsl(var(--desktop-foreground) / 0.85)" }}
                          >
                            {folder.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 px-4 pb-6 sm:px-6 md:px-8 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:px-0 lg:pb-0">
            <div
              className="mx-auto flex w-fit items-center gap-0 rounded-[22px] px-3 py-2"
              role="navigation"
              aria-label="Quick navigation dock"
              style={{
                background: "hsl(var(--desktop-search) / 0.88)",
                backdropFilter: "blur(28px) saturate(1.3)",
                border: "1px solid hsl(var(--desktop-border) / 0.12)",
                boxShadow: "0 16px 40px hsl(var(--desktop-shadow) / 0.3)",
              }}
            >
              {(() => {
                const mainItems = [
                  {
                    icon: "📂",
                    label: "Work",
                    bg: "linear-gradient(135deg, hsl(250 80% 68%), hsl(243 70% 56%))",
                    action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
                  },
                  {
                    icon: "🔍",
                    label: "Search",
                    bg: "linear-gradient(135deg, hsl(330 82% 72%), hsl(332 74% 48%))",
                    action: () => setSearchOpen(true),
                  },
                  {
                    icon: "📋",
                    label: "About",
                    bg: "linear-gradient(135deg, hsl(158 72% 70%), hsl(160 82% 37%))",
                    action: () => (window.location.href = "/about"),
                  },
                  {
                    icon: "📄",
                    label: "CV",
                    bg: "linear-gradient(135deg, hsl(45 96% 68%), hsl(37 92% 50%))",
                    action: () =>
                      window.open(
                        "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing",
                        "_blank"
                      ),
                  },
                ];

                const contactItem = {
                  icon: "✉️",
                  label: "Contact",
                  bg: "linear-gradient(135deg, hsl(0 92% 73%), hsl(0 72% 48%))",
                  action: () => (window.location.href = "mailto:hyebinp@umich.edu"),
                };

                return (
                  <>
                    <div className="flex items-center gap-2 px-1">
                      {mainItems.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={item.action}
                          className="flex flex-col items-center gap-1 rounded-xl px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                          aria-label={item.label}
                        >
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-[13px] text-lg shadow-md transition-all duration-200 group-hover:scale-110 md:h-12 md:w-12"
                            style={{ background: item.bg }}
                            aria-hidden="true"
                          >
                            {item.icon}
                          </div>
                          <span className="text-[9px] font-medium" style={{ color: "hsl(var(--desktop-muted))" }}>
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="mx-2 h-8 w-px" style={{ background: "hsl(var(--desktop-border) / 0.14)" }} aria-hidden="true" />
                    <div className="px-1">
                      <button
                        type="button"
                        onClick={contactItem.action}
                        className="flex flex-col items-center gap-1 rounded-xl px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                        aria-label="Contact"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-[13px] text-lg shadow-md md:h-12 md:w-12" style={{ background: contactItem.bg }} aria-hidden="true">
                          {contactItem.icon}
                        </div>
                        <span className="text-[9px] font-medium" style={{ color: "hsl(var(--desktop-muted))" }}>
                          {contactItem.label}
                        </span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="px-4 py-28 sm:px-8 sm:py-36 md:px-10"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--work-surface-1)) 0%, hsl(var(--work-surface-2)) 50%, hsl(var(--work-surface-3)) 100%)",
            borderTop: "1px solid hsl(var(--work-border) / 0.8)",
          }}
          aria-labelledby="work-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em]" style={{ color: "hsl(var(--work-subtle))" }}>
              Selected Work
            </p>
            <h2
              id="work-heading"
              className="mb-1 text-[clamp(42px,6vw,80px)] font-black leading-[1.05] tracking-tight"
              style={{ color: "hsl(var(--work-foreground))" }}
            >
              Strategic Outputs.
            </h2>
            <p className="mb-20 max-w-[700px] text-[16px] leading-7" style={{ color: "hsl(var(--work-muted))" }}>
              End-to-end product thinking across AI, research, fintech, and technically complex systems.
            </p>

            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
              {projects.map((project, index) => {
                const card = (
                  <motion.article
                    className="group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-[6px]"
                    style={{ boxShadow: "0 12px 40px hsl(var(--desktop-shadow) / 0.1), 0 4px 12px hsl(var(--desktop-shadow) / 0.08)" }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: project.imageColor }}>
                      <div className="absolute left-4 top-4 z-10 md:left-6 md:top-5">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          loading="lazy"
                          className={`w-auto object-contain ${
                            project.id === "gm"
                              ? "h-8 md:h-10"
                              : project.id === "nurturly"
                                ? "h-5 md:h-6"
                                : "h-6 md:h-9"
                          }`}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-end justify-center px-4 pt-10 md:pt-12">
                        <img
                          src={project.mockup}
                          alt={`${project.title} mockup`}
                          loading="lazy"
                          className={`max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03] ${
                            project.id === "concord" ? "max-h-[95%]" : "max-h-[88%]"
                          }`}
                        />
                      </div>
                      <div className="absolute bottom-4 right-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-800 shadow-md">
                          View
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col bg-white p-6 md:p-7">
                      <h3 className="mb-2 font-serif text-[22px] font-semibold leading-[1.2] md:text-[26px]" style={{ color: "hsl(var(--work-foreground))" }}>
                        {project.title}
                      </h3>
                      <p className="mb-4 max-w-[440px] text-[14px] leading-[1.65]" style={{ color: "hsl(var(--work-muted))" }}>
                        {project.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-[6px]">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-full border px-2.5 py-[4px] text-[10.5px] font-medium"
                            style={{
                              color: "hsl(var(--work-muted))",
                              borderColor: "hsl(var(--work-border))",
                              background: "hsl(var(--work-surface-2))",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-wrap gap-[6px]">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="relative cursor-default overflow-hidden rounded-[7px] px-3 py-[6px]">
                            <div className="absolute inset-0" style={{ background: "hsl(var(--work-surface-2))" }} />
                            <div
                              className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-[450ms] ease-out group-hover:scale-x-100"
                              style={{ background: project.accentColor }}
                            />
                            <span className="relative z-10 text-xs font-medium transition-colors duration-[350ms] group-hover:text-white" style={{ color: "hsl(var(--work-muted))" }}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );

                if (project.externalUrl) {
                  return (
                    <a
                      key={project.id}
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-4"
                    >
                      {card}
                    </a>
                  );
                }

                return (
                  <Link
                    key={project.id}
                    to={`/${project.id}`}
                    className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-4"
                  >
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="collab"
          className="relative overflow-hidden px-4 py-28 sm:px-8 sm:py-32 md:px-10"
          style={{
            background:
              "linear-gradient(165deg, hsl(var(--desktop-panel-strong)) 0%, hsl(var(--desktop-panel)) 42%, hsl(var(--desktop-wallpaper-mid)) 100%)",
          }}
          aria-labelledby="collab-heading"
        >
          <div
            className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
            style={{ background: "radial-gradient(circle, hsl(var(--desktop-accent) / 0.6), transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, hsl(var(--puzzle-piece-2) / 0.5), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1060px]">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em]" style={{ color: "hsl(var(--desktop-muted))" }}>
              Collaboration
            </p>
            <h2 id="collab-heading" className="mb-14 text-[clamp(32px,4.5vw,56px)] font-black leading-[1.1] tracking-tight" style={{ color: "hsl(var(--desktop-foreground))" }}>
              Words from people
              <br className="hidden sm:block" />
              I've worked alongside.
            </h2>
            <TestimonialGrid testimonials={testimonials} />
          </div>
        </section>

        <div id="cta-section">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
