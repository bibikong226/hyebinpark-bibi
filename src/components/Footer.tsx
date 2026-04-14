import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

export const Footer = () => {
  return (
    <>
      {/* Let's Connect — frosted Mac window */}
      <section
        className="px-4 py-20 sm:px-8 sm:py-28 md:px-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(147,197,253,0.2) 0%, transparent 60%),
            linear-gradient(180deg, #f0f3f8 0%, #e4eaf4 50%, #dde5f2 100%)
          `,
        }}
        aria-labelledby="connect-heading"
      >
        <div className="mx-auto max-w-[640px]">
          <motion.div
            className="overflow-hidden rounded-2xl bg-white/70 backdrop-blur-2xl"
            style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2" aria-hidden="true">
              <div className="flex items-center gap-[7px]">
                <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <span className="flex-1 text-center text-[11px] font-medium tracking-wide text-black/35">Mail</span>
              <div className="w-[52px]" />
            </div>
            <div className="px-8 py-10 text-center md:px-12 md:py-12">
              <h2 id="connect-heading" className="font-serif text-3xl italic text-black/80 md:text-4xl">Let's Connect</h2>
              <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.7] text-black/45">
                I'm always excited to connect with fellow designers, researchers, and innovators. Let's talk! 👩‍💻
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="mailto:hyebinp@umich.edu" className="inline-flex items-center gap-2 rounded-full bg-[#4338CA] px-6 py-3 text-[13.5px] font-medium text-white transition-all hover:bg-[#3730A3]">
                  hyebinp@umich.edu <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 py-3 text-[13.5px] font-medium text-black/70 transition-all hover:bg-white">
                  LinkedIn <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 bg-white px-8 py-7 sm:flex-row md:px-10" role="contentinfo" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <span className="font-serif text-[17px] italic text-black/30">Hyebin Park</span>
        <div className="flex gap-5">
          {[{ label: "Email", href: "mailto:hyebinp@umich.edu" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/hyebinp/", ext: true }, { label: "Resume", href: CV_LINK, ext: true }, { label: "hyebinparkbibi.com", href: "https://hyebinparkbibi.com" }].map(l => (
            <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined} className="rounded-sm text-xs tracking-wide text-black/30 transition-colors hover:text-black/60">{l.label}</a>
          ))}
        </div>
      </footer>
    </>
  );
};
