import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  variant?: "purple" | "pink";
}

const CV_LINK = "https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing";

export const Footer = ({ variant = "purple" }: FooterProps) => {
  const bgClass = variant === "pink" ? "bg-nurturly" : "bg-primary";
  const emailButtonClass = variant === "pink" 
    ? "bg-white text-nurturly hover:bg-zinc-100" 
    : "bg-white text-primary hover:bg-zinc-100";

  return (
    <>
      {/* Connect Section */}
      <section className={`py-20 px-8 md:px-16 ${bgClass} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-normal italic">
              Let's Connect
            </h2>
            <p className="text-[15.5px] text-white/80 max-w-[540px] mx-auto leading-[1.7]">
              I'm always excited to connect with fellow designers, researchers, and innovators. Whether you have a project in mind or just want to talk about design and technology, I'd love to hear from you. Let's talk! 👩‍💻
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a 
                href="mailto:hyebinp@umich.edu"
                className={`inline-flex items-center gap-2 px-6 py-3 ${emailButtonClass} rounded-full transition-all font-medium text-[13.5px]`}
              >
                hyebinp@umich.edu
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hyebinp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 text-white border-[1.5px] border-white/35 rounded-full hover:bg-white/25 transition-all font-medium text-[13.5px]"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-7 px-8 md:px-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-[17px] italic text-muted-foreground">Hyebin Park</span>
        <div className="flex gap-5">
          <a href="mailto:hyebinp@umich.edu" className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">Email</a>
          <a href="https://www.linkedin.com/in/hyebinp/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">LinkedIn</a>
          <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">Resume</a>
          <a href="https://hyebinparkbibi.com" className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">hyebinparkbibi.com</a>
        </div>
      </footer>
    </>
  );
};
