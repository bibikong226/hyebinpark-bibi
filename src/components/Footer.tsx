import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-8 md:px-16 py-20 md:py-28 border-t border-border bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Let's Connect</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          I'm always excited to connect with fellow designers, researchers, and innovators. Whether you have a project in mind or just want to talk about design and technology, I'd love to hear from you. Let's talk! 👩‍💻
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hyebinp@umich.edu"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            hyebinp@umich.edu
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hyebinp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-muted-foreground/30 text-muted-foreground rounded-full font-medium hover:border-muted-foreground/50 transition-colors"
          >
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
