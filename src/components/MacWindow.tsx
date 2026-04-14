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
      role="region"
      aria-label={title || "Content window"}
      style={{
        background: "rgba(30,30,40,0.75)",
        backdropFilter: "blur(40px) saturate(1.6)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,.35), 0 4px 16px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]" aria-hidden="true">
        <div className="flex items-center gap-[7px]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {title && (
          <>
            <span className="flex-1 text-center text-[11px] font-medium text-white/40 tracking-wide">
              {title}
            </span>
            <div className="w-[52px]" />
          </>
        )}
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
};
