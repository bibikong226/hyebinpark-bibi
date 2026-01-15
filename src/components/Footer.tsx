import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 md:px-16 py-20 md:py-24 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="text-3xl font-black tracking-tighter uppercase mb-3">HYEBIN PARK</div>
          <p className="text-[10px] text-muted-foreground tracking-[0.4em] uppercase font-medium">
            Strategic Product Designer
          </p>
          <div className="mt-6">
            <Link to="/contact" className="text-sm font-medium text-primary hover:opacity-70 transition-opacity">
              Contact →
            </Link>
          </div>
        </div>

        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/hyebinp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1l2V4pQCjAZhIhLyRmVh3m2QTw87yLI6P/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Read.cv
          </a>
          <a
            href="https://www.linkedin.com/in/hyebinp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 text-center text-xs text-muted-foreground">
        © {currentYear} Hyebin Park. All rights reserved.
      </div>
    </footer>
  );
};
