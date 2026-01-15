import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <>
      {/* Connect Section */}
      <section className="py-20 px-8 md:px-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-medium">
              Let's Connect
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              I'm always excited to connect with fellow designers, researchers, and innovators. Whether you have a project in mind or just want to talk about design and technology, I'd love to hear from you. Let's talk! 👩‍💻
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="mailto:hyebinp@umich.edu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full hover:bg-zinc-100 transition-all font-medium"
              >
                hyebinp@umich.edu
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hyebinp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-full hover:bg-white/20 transition-all font-medium"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 bg-zinc-900 text-zinc-400 text-center text-sm">
        <p>Strategic AI Product Designer</p>
      </footer>
    </>
  );
};
