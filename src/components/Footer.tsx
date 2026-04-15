import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

export const Footer = () => {
  return (
    <>
      {/* Let's Connect */}
      <section
        className="px-4 py-24 sm:px-8 sm:py-32 md:px-10"
        style={{
          background: "#DDD5EE",
        }}
        aria-labelledby="connect-heading"
      >
        <div className="mx-auto max-w-[640px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h2 id="connect-heading" className="font-serif text-4xl italic text-black/85 md:text-5xl">Let's Connect</h2>
            <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-[1.7] text-black/65">
              I'm always excited to connect with fellow designers, researchers, and innovators. Let's talk! 👩‍💻
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="mailto:hyebinp@umich.edu" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white transition-all hover:opacity-90" style={{ background: "#4338CA" }}>
                hyebinp@umich.edu <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-[14px] font-medium text-black/70 transition-all hover:bg-white/80">
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer
        className="flex h-11 items-center justify-between px-4 sm:px-8 md:px-10"
        role="contentinfo"
        style={{
          background: "rgba(20,20,40,0.95)",
          backdropFilter: "blur(20px) saturate(1.5)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span className="font-bold uppercase tracking-[0.08em] text-white/70 text-[14px]">
          <span className="mr-1.5 opacity-40" aria-hidden="true">⌘</span>
          Hyebin Park
        </span>
        <div className="flex items-center gap-6">
          {[{ label: "Email", href: "mailto:hyebinp@umich.edu" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/hyebinp/", ext: true }, { label: "Resume", href: CV_LINK, ext: true }].map(l => (
            <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined} className="text-[14px] font-medium uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white/90">{l.label}</a>
          ))}
        </div>
      </footer>
    </>
  );
};
