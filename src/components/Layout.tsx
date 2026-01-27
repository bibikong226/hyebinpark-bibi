import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  footerVariant?: "purple" | "pink";
}

export const Layout = ({ children, footerVariant = "purple" }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Subtle grid background on white sections */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.08] z-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.35) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <Navigation />
      <main className="relative flex-1 pt-16 md:pt-20">{children}</main>
      <Footer variant={footerVariant} />
    </div>
  );
};
