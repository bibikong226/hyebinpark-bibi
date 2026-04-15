import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

export const Footer = () => {
  return (
    <>
      {/* Let's Connect — dark section, no window */}
      <section
        className="px-4 py-24 sm:px-8 sm:py-32 md:px-10"
        style={{
          background: "linear-gradient(180deg, #1a1a2e 0%, #16162a 100%)",
        }}
        aria-labelledby="connect-heading"
      >
        <div className="mx-auto max-w-[640px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h2 id="connect-heading" className="font-serif text-4xl italic text-white/90 md:text-5xl">Let's Connect</h2>
            <p className="mx-auto mt-5 max-w-[420px] text-[15px] leading-[1.7] text-white/40">
              I'm always excited to connect with fellow designers, researchers, and innovators. Let's talk! 👩‍💻
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="mailto:hyebinp@umich.edu" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-medium text-black/80 transition-all hover:bg-white/90">
                hyebinp@umich.edu <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[13.5px] font-medium text-white/70 transition-all hover:bg-white/10">
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 px-8 py-7 sm:flex-row md:px-10" role="contentinfo" style={{ background: "#13132a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="font-serif text-[17px] italic text-white/25">Hyebin Park</span>
        <div className="flex gap-5">
          {[{ label: "Email", href: "mailto:hyebinp@umich.edu" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/hyebinp/", ext: true }, { label: "Resume", href: CV_LINK, ext: true }, { label: "hyebinparkbibi.com", href: "https://hyebinparkbibi.com" }].map(l => (
            <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined} className="rounded-sm text-xs tracking-wide text-white/25 transition-colors hover:text-white/50">{l.label}</a>
          ))}
        </div>
      </footer>
    </>
  );
};
