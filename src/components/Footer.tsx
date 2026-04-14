import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

export const Footer = () => {
  return (
    <>
      {/* Let's Connect - Mac window style */}
      <section
        className="px-4 py-24 sm:px-8 sm:py-32 md:px-10"
        style={{
          background: "linear-gradient(180deg, #1a1428 0%, #14101e 50%, #0e0b16 100%)",
        }}
        aria-labelledby="connect-heading"
      >
        <div className="mx-auto max-w-[700px]">
          <motion.div
            className="overflow-hidden rounded-[16px]"
            style={{
              background: "linear-gradient(180deg, rgba(38,32,58,0.95), rgba(24,20,42,0.92))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b px-4 py-2.5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-[7px]">
                <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <span className="flex-1 text-center text-[11px] font-semibold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                Let's Connect
              </span>
              <div className="w-[52px]" />
            </div>

            {/* Content */}
            <div className="px-8 py-10 text-center md:px-12 md:py-14">
              <h2 id="connect-heading" className="font-serif text-3xl italic md:text-4xl" style={{ color: "rgba(255,255,255,0.92)" }}>
                Let's Connect
              </h2>
              <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
                I'm always excited to connect with fellow designers, researchers, and innovators. Let's talk! 👩‍💻
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:hyebinp@umich.edu"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-medium text-[#0e0b16] transition-all hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  hyebinp@umich.edu
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hyebinp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[13.5px] font-medium transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.15)" }}
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col items-center justify-between gap-4 px-8 py-7 sm:flex-row md:px-10"
        role="contentinfo"
        style={{
          background: "#0e0b16",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span className="font-serif text-[17px] italic" style={{ color: "rgba(255,255,255,0.3)" }}>Hyebin Park</span>
        <div className="flex gap-5">
          <a href="mailto:hyebinp@umich.edu" className="rounded-sm text-xs tracking-wide transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400" style={{ color: "rgba(255,255,255,0.3)" }}>Email</a>
          <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="rounded-sm text-xs tracking-wide transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400" style={{ color: "rgba(255,255,255,0.3)" }}>LinkedIn</a>
          <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="rounded-sm text-xs tracking-wide transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400" style={{ color: "rgba(255,255,255,0.3)" }}>Resume</a>
          <a href="https://hyebinparkbibi.com" className="rounded-sm text-xs tracking-wide transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400" style={{ color: "rgba(255,255,255,0.3)" }}>hyebinparkbibi.com</a>
        </div>
      </footer>
    </>
  );
};
