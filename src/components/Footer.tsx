import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-8 md:px-16 py-20 md:py-28 bg-[#6366F1]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        
        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          I'm always excited to connect with fellow designers, researchers, and innovators. Whether you have a project in mind or just want to talk about design and technology, I'd love to hear from you. Let's talk! 👩
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:hyebinp@umich.edu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-medium hover:bg-white/90 transition-colors text-lg"
          >
            hyebinp@umich.edu
            <ArrowUpRight className="w-5 h-5" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/hyebinp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white border border-white/30 rounded-full font-medium hover:bg-white/30 transition-colors text-lg"
          >
            LinkedIn
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
