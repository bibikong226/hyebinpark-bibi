import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

      <Navigation />
      <main className="relative flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};
