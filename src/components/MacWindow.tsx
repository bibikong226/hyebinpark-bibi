import { ReactNode } from "react";

interface MacWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const MacWindow = ({ children, title, className = "" }: MacWindowProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        background: "hsl(var(--card))",
        boxShadow: "0 8px 40px rgba(0,0,0,.08), 0 2px 12px rgba(0,0,0,.04)",
        border: "1px solid hsl(var(--border))",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-secondary/50">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {title && (
          <span className="flex-1 text-center text-[11px] font-medium text-muted-foreground tracking-wide">
            {title}
          </span>
        )}
        {title && <div className="w-[52px]" />}
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
};
