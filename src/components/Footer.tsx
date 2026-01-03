import { Link } from "react-router-dom";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Read.cv", href: "https://read.cv" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-wide section-padding py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left side */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">Let's connect</h3>
            <p className="text-muted-foreground max-w-md">
              Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-block text-primary link-underline font-medium"
            >
              Get in touch →
            </Link>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hyebin Park. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
