import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PuzzleAnimation } from "@/components/PuzzleAnimation";
import profilePhoto from "@/assets/profile-photo.jpg";
import logoLine from "@/assets/logo-line.png";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoGm from "@/assets/logo-gm.png";
import logoNaver from "@/assets/logo-naver.png";
import logoJstor from "@/assets/logo-jstor.png";
import folderAi from "@/assets/folder-ai.png";
import folderEnterprise from "@/assets/folder-enterprise.png";
import folderFintech from "@/assets/folder-fintech.png";
import folderResearch from "@/assets/folder-research.png";
import folderCrypto from "@/assets/folder-crypto.png";
import { projects } from "@/data/projects";

/* ── Mac Window Shell ── */
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
  <motion.div
    className={`rounded-xl overflow-hidden ${className}`}
    style={{
      background: "rgba(30,30,40,0.75)",
      backdropFilter: "blur(40px) saturate(1.6)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow:
        "0 20px 60px rgba(0,0,0,.35), 0 4px 16px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
      <div className="flex items-center gap-[7px]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      {title && (
        <>
          <span className="flex-1 text-center text-[11px] font-medium text-white/40 tracking-wide">
            {title}
          </span>
          <div className="w-[52px]" />
        </>
      )}
    </div>
    <div>{children}</div>
  </motion.div>
);

/* ── Testimonial Grid ── */
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
    {testimonials.map((t, i) => (
      <motion.div
        key={t.id}
        className={`group relative flex flex-col gap-6 rounded-[24px] p-8 md:p-10 transition-transform duration-500 ease-out hover:-translate-y-1.5 ${i % 2 === 1 ? "md:mt-14" : ""}`}
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(24px) saturate(1.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 20px 48px -12px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
      >
        <div className="flex gap-1.5 opacity-30 group-hover:opacity-50 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
        <p className="font-serif text-lg md:text-xl italic leading-relaxed text-white/85">
          "{t.text}"
        </p>
        <p className="text-sm leading-relaxed text-white/50">{t.subtext}</p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-sm font-semibold text-white/60">
            {t.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <span className="text-sm font-semibold text-white block">
              {t.author}
            </span>
            <span className="text-xs text-white/50">
              {t.role} ·{" "}
              <span className="text-indigo-400">{t.company}</span>
            </span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const App = () => {
  const testimonials = [
    { id: "t1", author: "David Rashid", role: "CEO", company: "Concord Systems", text: "Hyebin quickly grasped the business model and technical constraints behind our platform.", subtext: "She didn't just design screens. She transformed backend complexity into seamless, user-first flows that contributed to our business growth." },
    { id: "t2", author: "Elisa Vargas", role: "Product Designer", company: "JSTOR", text: "Hyebin has a rare ability to connect deep research insights with thoughtful design decisions that drive real user impact.", subtext: "Her user-centered thinking and clarity of intent made a lasting impression on our team." },
    { id: "t3", author: "Jae Hoon Shim", role: "Product Strategy Manager", company: "LINE+", text: "Hyebin is one of the most dedicated and driven collaborators I've worked with.", subtext: "She approaches every project with curiosity, a sharp eye for detail, and a user-first mindset. Her passion made our time together impactful." },
    { id: "t4", author: "Jong Hee Hong", role: "Head of Global Communications", company: "TikTok Korea", text: "What always stands out with Hyebin is how she connects her creativity with real curiosity. She's always asking the right questions.", subtext: "Her energy makes collaboration feel easy, and she's excellent at communicating her ideas." },
  ];

  const folders = [
    { icon: folderAi, label: "AI Products" },
    { icon: folderEnterprise, label: "B2B Enterprise" },
    { icon: folderFintech, label: "Fintech" },
    { icon: folderCrypto, label: "Crypto / Web3" },
    { icon: folderResearch, label: "User Research" },
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      <Navigation />

      {/* ═══ macOS DESKTOP HERO ═══ */}
      <section
        className="relative flex min-h-[900px] w-full flex-col overflow-hidden lg:min-h-screen"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(30,64,175,.2) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 80% 20%, rgba(88,28,135,.15) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 50% 60%, rgba(15,23,42,.3) 0%, transparent 45%),
            linear-gradient(160deg, #0c0e1a 0%, #111827 30%, #1a1033 55%, #0d1a2f 80%, #080b14 100%)
          `,
        }}
      >
        {/* Big background name */}
        <div
          className="absolute inset-x-0 top-[22%] z-[1] flex items-center justify-center overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-sans font-black text-[clamp(100px,18vw,280px)] tracking-[0.12em] uppercase leading-none whitespace-nowrap select-none"
            style={{ color: "rgba(255,255,255,0.03)" }}
          >
            HYEBIN PARK
          </span>
        </div>

        {/* Desktop content */}
        <div className="relative flex-1 px-4 pb-28 pt-6 sm:px-6 md:px-8 lg:px-12 lg:pb-32 z-10">
          <div className="mx-auto max-w-[1200px]">
            {/* Row 1: Bio window + Folders */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
              {/* Bio Window — left */}
              <MacWin title="Hyebin Park" className="w-full lg:w-[380px] flex-shrink-0" delay={0.15}>
                <div className="p-6 space-y-5">
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <img
                      src={profilePhoto}
                      alt="Hyebin Park"
                      className="w-16 h-16 rounded-2xl object-cover object-[center_20%] border border-white/10"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-white leading-tight">
                        Hyebin Park
                      </h2>
                      <p className="text-[13px] text-white/50 mt-0.5">
                        Strategic AI Product Designer
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-[11px] text-green-300 font-medium">
                          Available for work
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="space-y-2">
                    <h1 className="leading-[1.1]">
                      <span className="text-white/50 text-base font-normal">
                        Turning{" "}
                      </span>
                      <span className="font-serif text-3xl md:text-4xl font-normal italic text-indigo-400">
                        complexity
                      </span>
                      <br />
                      <span className="text-white/30 text-sm font-light">
                        into{" "}
                      </span>
                      <span className="font-serif text-3xl md:text-4xl font-normal italic text-white">
                        clarity.
                      </span>
                    </h1>
                    <p className="text-[13px] text-white/40 leading-[1.7]">
                      From AI algorithms to crypto workflows, I turn ambiguity
                      into structured, usable products that drive real business
                      impact.
                    </p>
                  </div>

                  {/* Company logos */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1 border-t border-white/[0.06]">
                    <img src={logoLine} alt="LINE" className="w-7 h-7 rounded-lg object-cover opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={logoTiktok} alt="TikTok" className="w-7 h-7 rounded-lg object-cover opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={logoGm} alt="GM" className="w-7 h-7 rounded-lg object-cover opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={logoNaver} alt="NAVER" className="w-7 h-7 rounded-lg object-cover opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={logoJstor} alt="JSTOR" className="w-7 h-7 rounded-lg object-cover opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </MacWin>

              {/* Folders — right side, clean grid */}
              <motion.div
                className="flex-1 pt-2 lg:pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-5 pl-2">
                  Favorites
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-4 justify-items-center">
                  {folders.map((f, i) => (
                    <motion.a
                      key={f.label}
                      href="#work"
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                    >
                      <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] group-hover:scale-110 transition-transform duration-200 drop-shadow-lg">
                        <img
                          src={f.icon}
                          alt={f.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-white/60 text-center leading-tight group-hover:text-white/90 transition-colors max-w-[80px] drop-shadow-sm">
                        {f.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Row 2: Puzzle window + Control center */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start mt-5 lg:mt-6">
              {/* Puzzle Window */}
              <MacWin title="Design Thinking" className="w-full lg:w-[380px] flex-shrink-0" delay={0.35}>
                <div className="p-5 flex items-center justify-center">
                  <PuzzleAnimation />
                </div>
              </MacWin>

              {/* Control Center */}
              <MacWin title="Control Center" className="w-[200px] hidden lg:block" delay={0.55}>
                <div className="p-3.5">
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    {[
                      { icon: "📶", label: "Wi-Fi", active: true },
                      { icon: "🔵", label: "Bluetooth", active: true },
                      { icon: "🌙", label: "Focus", active: false },
                      { icon: "✈️", label: "AirDrop", active: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-1 rounded-lg px-2 py-1.5 text-[9px] font-medium ${
                          item.active
                            ? "bg-blue-500/60 text-white"
                            : "bg-white/[0.06] text-white/40"
                        }`}
                      >
                        <span className="text-[10px]">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-[9px] text-white/40 mb-1">
                        <span>☀️ Display</span>
                        <span className="text-white/60">73%</span>
                      </div>
                      <div className="h-[3px] rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[73%] rounded-full bg-white/50" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[9px] text-white/40 mb-1">
                        <span>🔊 Volume</span>
                        <span className="text-white/60">75%</span>
                      </div>
                      <div className="h-[3px] rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[75%] rounded-full bg-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </MacWin>
            </div>
          </div>
        </div>

        {/* Dock */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-0 px-3 py-2 rounded-[20px] z-30"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px) saturate(1.8)",
            border: "1px solid rgba(255,255,255,.15)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.08)",
          }}
        >
          {(() => {
            const mainItems = [
              { icon: "📂", label: "Work", bg: "linear-gradient(135deg, #7B6EF6, #5B4CD8)", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }) },
              { icon: "💼", label: "Explore", bg: "linear-gradient(135deg, #F472B6, #DB2777)", action: () => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" }) },
              { icon: "📋", label: "About", bg: "linear-gradient(135deg, #6EE7B7, #10B981)", action: () => (window.location.href = "/about") },
              { icon: "💬", label: "CV", bg: "linear-gradient(135deg, #FBBF24, #F59E0B)", action: () => window.open("https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing", "_blank") },
            ];
            const contactItem = {
              icon: "✉️",
              label: "Contact",
              bg: "linear-gradient(135deg, #F87171, #DC2626)",
              action: () => (window.location.href = "mailto:hyebinp@umich.edu"),
            };
            return (
              <>
                <div className="flex items-center gap-2 px-1">
                  {mainItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={item.action}
                      className="flex flex-col items-center gap-0.5 group"
                    >
                      <div
                        className="w-10 h-10 md:w-11 md:h-11 rounded-[11px] flex items-center justify-center text-lg shadow-md group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-200"
                        style={{ background: item.bg }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-[8px] font-medium text-white/50">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="w-px h-8 bg-white/15 mx-1.5" />
                <div className="px-1">
                  <button
                    onClick={contactItem.action}
                    className="flex flex-col items-center gap-0.5 group"
                  >
                    <div
                      className="w-10 h-10 md:w-11 md:h-11 rounded-[11px] flex items-center justify-center text-lg shadow-md group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-200"
                      style={{ background: contactItem.bg }}
                    >
                      {contactItem.icon}
                    </div>
                    <span className="text-[8px] font-medium text-white/50">
                      {contactItem.label}
                    </span>
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ═══ SELECTED WORK ═══ */}
      <section
        id="work"
        className="py-28 sm:py-36 px-4 sm:px-8 md:px-10 border-t border-border bg-secondary/50"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="text-[clamp(42px,6vw,80px)] font-black leading-[1.05] tracking-tight mb-1">
            Strategic
          </h2>
          <h2 className="font-serif text-[clamp(42px,6vw,80px)] italic font-normal leading-[1.05] tracking-tight text-muted-foreground/30 mb-20">
            Outputs.
          </h2>

          <div
            className="grid md:grid-cols-2 gap-x-10 gap-y-16"
            style={{ gridAutoRows: "1fr" }}
          >
            {projects.map((project, idx) => {
              const card = (
                <motion.div
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group flex flex-col h-full"
                  style={{
                    boxShadow:
                      "0 12px 40px rgba(0,0,0,.1), 0 4px 12px rgba(0,0,0,.06)",
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  key={project.id}
                >
                  <div
                    className="w-full aspect-[16/9] relative overflow-hidden"
                    style={{ background: project.imageColor }}
                  >
                    <div className="absolute left-4 md:left-6 top-4 md:top-5 z-10">
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
                        className={`object-contain max-w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                          project.id === "concord"
                            ? "max-h-[95%]"
                            : "max-h-[88%]"
                        }`}
                      />
                    </div>
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-4 py-1.5 rounded-full bg-white/90 text-[11px] font-semibold tracking-wider uppercase text-foreground/80 shadow-md">
                        VIEW
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex-1 flex flex-col bg-background">
                    <h3 className="font-serif text-[22px] md:text-[26px] font-semibold leading-[1.2] mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-[13.5px] md:text-[14.5px] leading-[1.65] text-muted-foreground mb-4 max-w-[440px]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-[5px] mb-4">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="inline-block px-2.5 py-[3px] rounded-full text-[10.5px] font-medium border bg-secondary text-muted-foreground border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-[6px] mt-auto">
                      {project.highlights.map((hl, hi) => (
                        <div
                          key={hi}
                          className="relative overflow-hidden rounded-[7px] px-3 py-[6px] cursor-default"
                        >
                          <div className="absolute inset-0 bg-secondary" />
                          <div
                            className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] ease-out z-0"
                            style={{ background: project.accentColor }}
                          />
                          <span className="relative z-10 text-xs font-medium transition-colors duration-[350ms] group-hover:text-white text-foreground/75">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );

              if (project.externalUrl) {
                return (
                  <a
                    key={project.id}
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {card}
                  </a>
                );
              }
              return (
                <Link key={project.id} to={`/${project.id}`} className="block">
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section
        id="collab"
        className="relative py-28 sm:py-32 px-4 sm:px-8 md:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, #0F0F1A 0%, #1A1A2E 40%, #16213E 70%, #0F0F1A 100%)",
        }}
      >
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,.6), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,.5), transparent 70%)",
          }}
        />
        <div className="relative max-w-[1060px] mx-auto">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-4">
            Collaboration
          </p>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-black leading-[1.1] tracking-tight mb-14 text-white">
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
    </div>
  );
};

export default App;
