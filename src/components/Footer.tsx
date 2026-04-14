import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  variant?: "purple" | "pink";
}

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

export const Footer = ({ variant = "purple" }: FooterProps) => {
  return (
    <>
      {/* Connect Section */}
      <section
        className="py-20 px-8 md:px-16"
        style={{
          background: "linear-gradient(165deg, rgba(99,102,241,.15) 0%, rgba(30,30,60,.6) 50%, rgba(12,14,26,.9) 100%)",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
        aria-labelledby="connect-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 id="connect-heading" className="font-serif text-3xl md:text-4xl font-normal italic text-white">
              Let's Connect
            </h2>
            <p className="text-[15.5px] text-white/60 max-w-[540px] mx-auto leading-[1.7]">
              I'm always excited to connect with fellow designers, researchers, and innovators. Whether you have a project in mind or just want to talk about design and technology, I'd love to hear from you. Let's talk! 👩‍💻
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href="mailto:hyebinp@umich.edu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0c0e1a] rounded-full hover:bg-white/90 transition-all font-medium text-[13.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                hyebinp@umich.edu
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/hyebinp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 transition-all font-medium text-[13.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-7 px-8 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        role="contentinfo"
        style={{
          background: "rgba(12,14,26,0.9)",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <span className="font-serif text-[17px] italic text-white/40">Hyebin Park</span>
        <div className="flex gap-5">
          <a href="mailto:hyebinp@umich.edu" className="text-xs text-white/40 hover:text-white transition-colors tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm">Email</a>
          <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white transition-colors tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm">LinkedIn</a>
          <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white transition-colors tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm">Resume</a>
          <a href="https://hyebinparkbibi.com" className="text-xs text-white/40 hover:text-white transition-colors tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm">hyebinparkbibi.com</a>
        </div>
      </footer>
    </>
  );
};
