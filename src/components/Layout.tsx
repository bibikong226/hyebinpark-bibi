import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  footerVariant?: "purple" | "pink";
}

export const Layout = ({ children, footerVariant = "purple" }: LayoutProps) => {
  return (
    <div
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 80%, rgba(30,64,175,.12) 0%, transparent 50%),
          radial-gradient(ellipse 70% 50% at 80% 20%, rgba(88,28,135,.08) 0%, transparent 50%),
          linear-gradient(160deg, #0c0e1a 0%, #111827 30%, #1a1033 55%, #0d1a2f 80%, #080b14 100%)
        `,
        color: "rgba(255,255,255,0.9)",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="relative flex-1 pt-10 md:pt-12" role="main">
        {children}
      </main>
      <Footer variant={footerVariant} />
    </div>
  );
};
